const fields = [
  {
    label: "Nom / Prénom",
    type: "text",
    placeholder: "Votre nom complet",
  },
  {
    label: "Société",
    type: "text",
    placeholder: "Nom de votre société",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "votre.email@exemple.com",
  },
  {
    label: "Téléphone",
    type: "tel",
    placeholder: "Votre numéro de téléphone",
  },
  {
    label: "Marchandise concernée",
    type: "text",
    placeholder: "Type de marchandise",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C62828]">
            Contact
          </p>
          <h1 className="mt-5 text-[2.125rem] font-bold leading-[1.12] tracking-tight sm:text-[2.5rem] lg:text-[3.25rem]">
            Parlons de votre projet d’importation.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            Présentez-nous votre situation, votre marchandise et les éléments
            dont vous disposez. Nous reviendrons vers vous après une première
            lecture de votre dossier.
          </p>
        </div>
      </section>

      <section className="border-y border-[#E7E2DA] bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] p-5 sm:p-7 lg:p-8">
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {fields.map((field) => (
                <label key={field.label} className="grid gap-2">
                  <span className="text-sm font-semibold text-[#111111]">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="min-h-12 rounded-2xl border border-[#E7E2DA] bg-white px-4 text-sm text-[#111111] outline-none transition placeholder:text-[#8A8F94] focus:border-[#111111]"
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-semibold text-[#111111]">
                Description du besoin
              </span>
              <textarea
                placeholder="Décrivez votre situation et les éléments disponibles"
                rows={6}
                className="resize-none rounded-2xl border border-[#E7E2DA] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-[#8A8F94] focus:border-[#111111]"
              />
            </label>

            <button
              type="button"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#111111] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#C62828] sm:w-auto"
            >
              Envoyer ma demande
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
