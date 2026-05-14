import net from "node:net";
import tls from "node:tls";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: unknown;
  company?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  goods?: unknown;
  description?: unknown;
  website?: unknown;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

const contactEmail = "contact@transitsnow.com";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function cleanMultiline(value: unknown) {
  return typeof value === "string"
    ? value.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n")
    : "";
}

function normalizePhone(countryCode: string, phone: string) {
  const normalizedCode = countryCode.replace(/[^\d+]/g, "");
  const normalizedPhone = phone.replace(/[^\d]/g, "");

  return `${normalizedCode}${normalizedPhone}`;
}

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  return { host, port, user, pass };
}

function buildEmailBody(data: {
  fullName: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  fullPhone: string;
  goods: string;
  description: string;
  sentAt: string;
}) {
  const text = [
    "Nouvelle demande d’accompagnement - Transit’s Now",
    "",
    `Nom / Prénom : ${data.fullName}`,
    `Société : ${data.company}`,
    `Email : ${data.email}`,
    `Téléphone complet avec indicatif : ${data.fullPhone}`,
    `Indicatif sélectionné : ${data.countryCode}`,
    `Marchandise concernée : ${data.goods}`,
    `Date d’envoi : ${data.sentAt}`,
    "",
    "Description du besoin :",
    data.description,
  ].join("\n");

  return { text };
}

function dotStuff(value: string) {
  return value.replace(/^\./gm, "..");
}

async function sendSmtpMail(config: SmtpConfig, message: {
  replyTo: string;
  subject: string;
  text: string;
}) {
  let socket: net.Socket | tls.TLSSocket;
  let buffer = "";
  let pending: (() => void) | null = null;

  const onData = (chunk: Buffer) => {
    buffer += chunk.toString("utf8");
    pending?.();
  };

  const attach = (nextSocket: net.Socket | tls.TLSSocket) => {
    nextSocket.on("data", onData);
  };

  const waitForData = () =>
    new Promise<void>((resolve) => {
      pending = () => {
        pending = null;
        resolve();
      };
    });

  const readLine = async () => {
    while (!buffer.includes("\n")) {
      await waitForData();
    }

    const index = buffer.indexOf("\n");
    const line = buffer.slice(0, index + 1).replace(/\r?\n$/, "");
    buffer = buffer.slice(index + 1);
    return line;
  };

  const readResponse = async () => {
    const lines: string[] = [];
    let code = 0;

    while (true) {
      const line = await readLine();
      lines.push(line);
      code = Number(line.slice(0, 3));

      if (/^\d{3} /.test(line)) {
        break;
      }
    }

    if (code >= 400) {
      throw new Error(`SMTP_${code}: ${lines.join("\n")}`);
    }

    return lines.join("\n");
  };

  const write = async (command: string) => {
    socket.write(`${command}\r\n`);
    return readResponse();
  };

  socket =
    config.port === 465
      ? tls.connect(config.port, config.host, { servername: config.host })
      : net.connect(config.port, config.host);

  attach(socket);
  await new Promise<void>((resolve, reject) => {
    socket.once("connect", resolve);
    socket.once("error", reject);
  });

  await readResponse();
  let ehloResponse = await write("EHLO transitnow.com");

  if (config.port !== 465 && ehloResponse.includes("STARTTLS")) {
    await write("STARTTLS");
    socket.removeListener("data", onData);
    socket = tls.connect({ socket, servername: config.host });
    attach(socket);
    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });
    ehloResponse = await write("EHLO transitnow.com");
  }

  await write("AUTH LOGIN");
  await write(Buffer.from(config.user).toString("base64"));
  await write(Buffer.from(config.pass).toString("base64"));
  await write(`MAIL FROM:<${contactEmail}>`);
  await write(`RCPT TO:<${contactEmail}>`);
  await write("DATA");

  const rawMessage = [
    `From: Transit’s Now <${contactEmail}>`,
    `To: ${contactEmail}`,
    `Reply-To: ${message.replyTo}`,
    `Subject: ${message.subject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    message.text,
  ].join("\r\n");

  socket.write(`${dotStuff(rawMessage)}\r\n.\r\n`);
  await readResponse();
  await write("QUIT");
  socket.end();
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(payload.fullName);
  const company = clean(payload.company);
  const email = clean(payload.email);
  const countryCode = clean(payload.countryCode);
  const phone = clean(payload.phone);
  const goods = clean(payload.goods);
  const description = cleanMultiline(payload.description);

  if (
    !fullName ||
    !company ||
    !email ||
    !countryCode ||
    !phone ||
    !goods ||
    !description
  ) {
    return NextResponse.json({ error: "MISSING_FIELDS" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
  }

  const fullPhone = normalizePhone(countryCode, phone);
  const sentAt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date());

  const body = buildEmailBody({
    fullName,
    company,
    email,
    countryCode,
    phone,
    fullPhone,
    goods,
    description,
    sentAt,
  });

  try {
    const config = getSmtpConfig();

    await sendSmtpMail(config, {
      replyTo: email,
      subject: "Nouvelle demande d’accompagnement - Transit’s Now",
      text: body.text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: "SEND_FAILED" }, { status: 500 });
  }
}
