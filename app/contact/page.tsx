"use client";

import type { FormEvent, MouseEvent } from "react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const fields = [
  {
    label: "Nom / Prénom",
    name: "fullName",
    type: "text",
    placeholder: "Votre nom complet",
  },
  {
    label: "Société",
    name: "company",
    type: "text",
    placeholder: "Nom de votre société",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "votre.email@exemple.com",
  },
  {
    label: "Marchandise concernée",
    name: "goods",
    type: "text",
    placeholder: "Type de marchandise",
  },
];

const countryCodes = [
  { label: "🇲🇦 Maroc", value: "+212" },
  { label: "🇫🇷 France", value: "+33" },
  { label: "🇪🇸 Espagne", value: "+34" },
  { label: "🇧🇪 Belgique", value: "+32" },
  { label: "🇨🇭 Suisse", value: "+41" },
  { label: "🇨🇦 Canada", value: "+1" },
  { label: "🇬🇧 Royaume-Uni", value: "+44" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

const requiredFields = [
  "fullName",
  "company",
  "email",
  "goods",
  "countryCode",
  "phone",
  "description",
];

function hasMissingRequiredField(formData: FormData) {
  return requiredFields.some((field) => {
    const value = formData.get(field);
    return typeof value !== "string" || !value.trim();
  });
}

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  function showMissingRequiredMessage() {
    setStatus("error");
    setMessage("Veuillez compléter les champs obligatoires avant l’envoi.");
  }

  async function submitForm(form: HTMLFormElement) {
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (hasMissingRequiredField(formData)) {
      showMissingRequiredMessage();
      return;
    }

    setStatus("loading");
    setMessage("");
    trackEvent("form_submit", {
      event_category: "form",
      event_label: "contact_form",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      trackEvent("form_success", {
        event_category: "form",
        event_label: "contact_form",
      });
      setMessage(
        "Message envoyé. Votre demande a bien été envoyée. Transit’s Now reviendra vers vous après une première lecture de votre situation.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "L’envoi n’a pas pu aboutir. Vous pouvez réessayer ou nous contacter directement.",
      );
    }
  }

  function handleSubmitClick(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;

    if (!form) {
      return;
    }

    void submitForm(form);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitForm(event.currentTarget);
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Contact</p>
          <h1 className="page-title">
            Parlons de votre projet d’importation.
          </h1>
          <p className="body-lead">
            Présentez-nous votre situation, votre marchandise et les éléments
            dont vous disposez. Nous reviendrons vers vous après une première
            lecture de votre dossier.
          </p>
        </div>
      </section>

      <section className="site-section-white">
        <div className="mx-auto max-w-4xl">
          <form
            className="rounded-[16px] border border-[#E7E2DA] bg-white p-5 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-7 lg:p-9"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-7 rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-4 py-4 sm:px-5">
              <p className="text-sm font-semibold text-[#111111]">
                Informations utiles à la première lecture
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5F6368]">
                Plus les éléments transmis sont précis, plus la situation peut
                être comprise avec clarté avant toute proposition
                d’accompagnement.
              </p>
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {fields.map((field) => (
                <label key={field.name} className="grid gap-2.5">
                  <span className="text-sm font-semibold text-[#111111]">
                    {field.label}
                  </span>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-required="true"
                    autoComplete={
                      field.name === "fullName"
                        ? "name"
                        : field.name === "company"
                          ? "organization"
                          : field.name === "email"
                            ? "email"
                            : undefined
                    }
                    className="min-h-12 rounded-[12px] border border-[#E7E2DA] bg-[#F8F6F2] px-4 text-sm text-[#111111] outline-none transition duration-200 placeholder:text-[#8A8F94] hover:border-[#D6D0C8] focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5"
                  />
                </label>
              ))}

              <label className="grid gap-2.5 sm:col-span-2">
                <span className="text-sm font-semibold text-[#111111]">
                  Téléphone
                </span>
                <div className="grid overflow-hidden rounded-[12px] border border-[#E7E2DA] bg-[#F8F6F2] transition duration-200 hover:border-[#D6D0C8] focus-within:border-[#111111] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#111111]/5 sm:grid-cols-[190px_1fr]">
                  <select
                    name="countryCode"
                    defaultValue="+212"
                    aria-required="true"
                    className="min-h-12 border-b border-[#E7E2DA] bg-transparent px-4 text-sm font-semibold text-[#111111] outline-none transition sm:border-b-0 sm:border-r"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label} {country.value}
                      </option>
                    ))}
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="721 142 767"
                    aria-required="true"
                    autoComplete="tel-national"
                    className="min-h-12 bg-transparent px-4 text-sm text-[#111111] outline-none transition placeholder:text-[#8A8F94]"
                  />
                </div>
              </label>
            </div>

            <label className="mt-6 grid gap-2.5">
              <span className="text-sm font-semibold text-[#111111]">
                Description du besoin
              </span>
              <textarea
                name="description"
                placeholder="Décrivez votre situation et les éléments disponibles"
                rows={6}
                aria-required="true"
                className="resize-none rounded-[12px] border border-[#E7E2DA] bg-[#F8F6F2] px-4 py-3 text-sm leading-6 text-[#111111] outline-none transition duration-200 placeholder:text-[#8A8F94] hover:border-[#D6D0C8] focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5"
              />
            </label>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                disabled={status === "loading"}
                onClick={handleSubmitClick}
                data-track-event="click_contact"
                data-track-category="cta"
                data-track-label="contact_form_submit_button"
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </div>

            <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-5 text-[#5F6368]">
              Les informations transmises servent uniquement à comprendre votre
              situation et à revenir vers vous après une première lecture.
            </p>

            {message ? (
              <p
                role={status === "success" ? "status" : "alert"}
                className={`mx-auto mt-5 max-w-2xl rounded-[12px] border px-4 py-3 text-center text-sm leading-6 ${
                  status === "success"
                    ? "border-[#2E7D32]/30 bg-[#2E7D32]/5 text-[#2E7D32]"
                    : "border-[#E7E2DA] bg-white text-[#5F6368]"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
