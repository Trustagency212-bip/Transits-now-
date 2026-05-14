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

function buildEmailText(data: {
  fullName: string;
  company: string;
  email: string;
  fullPhone: string;
  goods: string;
  description: string;
  sentAt: string;
}) {
  return [
    "Nouvelle demande accompagnement - Transits Now",
    "",
    `Nom / Prénom : ${data.fullName}`,
    `Société : ${data.company}`,
    `Email : ${data.email}`,
    `Téléphone complet : ${data.fullPhone}`,
    `Marchandise concernée : ${data.goods}`,
    `Date : ${data.sentAt}`,
    "",
    "Description du besoin :",
    data.description,
  ].join("\n");
}

async function sendResendEmail(data: {
  replyTo: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY_MISSING");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Transit’s Now <${contactEmail}>`,
      to: [contactEmail],
      reply_to: data.replyTo,
      subject: "Nouvelle demande accompagnement - Transits Now",
      text: data.text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`RESEND_SEND_FAILED: ${details}`);
  }
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

  const text = buildEmailText({
    fullName,
    company,
    email,
    fullPhone,
    goods,
    description,
    sentAt,
  });

  try {
    await sendResendEmail({
      replyTo: email,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: "SEND_FAILED" }, { status: 500 });
  }
}
