import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Transit’s Now : éditeur du site, contact, hébergement, propriété intellectuelle et responsabilité.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | Transit’s Now",
    description:
      "Mentions légales de Transit’s Now : éditeur du site, contact, hébergement, propriété intellectuelle et responsabilité.",
    url: "/mentions-legales",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
};

const legalSections = [
  {
    title: "Éditeur du site",
    content: [
      "SARL Transit’s Now",
      "Casablanca, Maroc",
      "Email : contact@transitsnow.com",
      "Téléphone : +212 721 142 767",
    ],
  },
  {
    title: "Hébergement",
    content: ["Le site est hébergé par IONOS."],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "Les contenus présents sur ce site, notamment les textes, les éléments graphiques, l’identité visuelle et la structure du site, sont protégés.",
      "Ils ne peuvent pas être reproduits ou utilisés sans autorisation préalable.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "Les informations publiées sur le site sont données à titre informatif.",
      "Elles peuvent évoluer selon les situations, les documents disponibles et les exigences applicables.",
    ],
  },
  {
    title: "Liens externes",
    content: [
      "Le site peut contenir des liens vers des sites tiers.",
      "Transit’s Now n’est pas responsable du contenu, du fonctionnement ou des politiques de ces sites externes.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Informations légales</p>
          <h1 className="page-title">Mentions légales</h1>
          <p className="body-lead">
            Cette page rassemble les informations légales principales relatives
            au site Transit’s Now, dans un format clair et volontairement sobre.
          </p>
        </div>
      </section>

      <section className="border-y border-[#E7E2DA] bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto box-border w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {legalSections.map((section) => (
              <article
                key={section.title}
                className="box-border w-full max-w-full rounded-[14px] border border-[#E7E2DA] bg-white p-5 shadow-[0_14px_40px_rgba(17,17,17,0.035)] sm:p-7"
              >
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-3 break-words text-base leading-7 text-[#5F6368]">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
