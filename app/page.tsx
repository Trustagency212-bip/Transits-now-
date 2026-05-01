const services = [
  {
    title: "Transit & dedouanement",
    description:
      "Coordination des formalites import, preparation des dossiers et suivi des etapes administratives.",
  },
  {
    title: "Conseil import",
    description:
      "Analyse du besoin, verification des documents et orientation claire avant engagement des operations.",
  },
  {
    title: "Suivi logistique",
    description:
      "Accompagnement de bout en bout pour garder une vision simple des delais, risques et prochaines actions.",
  },
];

const trustSignals = [
  "Dossiers etudies au cas par cas",
  "Communication claire a chaque etape",
  "Accompagnement Maroc et international",
  "Approche professionnelle et reactive",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#17120d]">
      <header className="border-b border-[#e4d8c8]/80 bg-[#f7f3ed]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            Transit Now
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#5f5448] md:flex">
            <a className="transition hover:text-[#17120d]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#17120d]" href="#confiance">
              Confiance
            </a>
            <a className="transition hover:text-[#17120d]" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#17120d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2d20]"
          >
            Demander un devis
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#8f6a3a]">
            Transit Now
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Importer vers le Maroc avec plus de clarte et de maitrise.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5448]">
            Transit Now accompagne les professionnels au Maroc et a l&apos;etranger
            dans leurs operations d&apos;importation, de transit et de dedouanement.
            Chaque dossier est structure, suivi et explique simplement.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#17120d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#3a2d20]"
            >
              Parler a un conseiller
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#c9bba8] px-7 py-4 text-sm font-semibold text-[#17120d] transition hover:border-[#17120d]"
            >
              Voir les services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e1d4c4] bg-white p-6 shadow-[0_24px_80px_rgba(55,42,28,0.12)]">
          <div className="rounded-[1.5rem] bg-[#17120d] p-6 text-white">
            <p className="text-sm font-medium text-[#d7c7b4]">
              Suivi operationnel
            </p>
            <p className="mt-4 text-4xl font-bold">Import</p>
            <p className="mt-2 text-sm leading-6 text-[#d7c7b4]">
              Documents, transit, dedouanement et coordination des prochaines
              etapes.
            </p>
          </div>

          <div className="mt-6 grid gap-3 text-sm text-[#5f5448]">
            <div className="flex items-center justify-between rounded-2xl bg-[#f7f3ed] px-4 py-3">
              <span>Analyse du dossier</span>
              <span className="font-semibold text-[#17120d]">En amont</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#f7f3ed] px-4 py-3">
              <span>Formalites import</span>
              <span className="font-semibold text-[#17120d]">Suivi</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#f7f3ed] px-4 py-3">
              <span>Communication client</span>
              <span className="font-semibold text-[#17120d]">Claire</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8f6a3a]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Un accompagnement simple pour vos operations import.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#eadfce] bg-[#fbf8f3] p-7"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#5f5448]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="confiance" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8f6a3a]">
              Confiance
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              De la visibilite avant, pendant et apres chaque operation.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e1d4c4] bg-white px-5 py-5 font-semibold text-[#2a2118]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#17120d] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b98a]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Besoin d&apos;un avis sur votre prochain import ?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d7c7b4]">
              Envoyez les grandes lignes de votre dossier. Transit Now vous
              recontacte pour clarifier les prochaines etapes, sans integration
              backend pour le moment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/8 p-6">
            <div className="grid gap-4">
              <a
                href="https://wa.me/212600000000"
                className="rounded-2xl bg-white px-5 py-4 font-semibold text-[#17120d] transition hover:bg-[#f1e7d8]"
              >
                WhatsApp : +212 6 00 00 00 00
              </a>
              <a
                href="mailto:contact@transitnow.ma"
                className="rounded-2xl border border-white/20 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Email : contact@transitnow.ma
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
