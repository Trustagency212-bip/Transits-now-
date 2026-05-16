import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Transit’s Now : données transmises via le formulaire, utilisation, mesure d’audience et contact.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité | Transit’s Now",
    description:
      "Politique de confidentialité de Transit’s Now : données transmises via le formulaire, utilisation, mesure d’audience et contact.",
    url: "/politique-confidentialite",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
};

const privacySections = [
  {
    title: "Données transmises via le formulaire",
    content: [
      "Lorsque vous utilisez le formulaire de contact, certaines informations peuvent être transmises : nom / prénom, société, email, téléphone, marchandise concernée et description du besoin.",
      "Ces informations permettent une première lecture de la demande dans un cadre professionnel.",
    ],
  },
  {
    title: "Finalité",
    content: [
      "Les données transmises servent uniquement à analyser la demande, recontacter le prospect et préparer un premier échange professionnel.",
      "Elles ne sont pas utilisées pour un autre objectif sans lien avec la demande transmise.",
    ],
  },
  {
    title: "Conservation",
    content: [
      "Les données sont conservées uniquement le temps nécessaire au traitement de la demande et aux échanges professionnels liés.",
    ],
  },
  {
    title: "Google Analytics",
    content: [
      "Google Analytics peut être utilisé afin de mesurer l’audience du site et comprendre l’utilisation des pages.",
      "Cette mesure permet d’améliorer progressivement la lisibilité et l’expérience du site.",
    ],
  },
  {
    title: "Contact",
    content: [
      "Toute demande relative aux données peut être envoyée à contact@transitsnow.com.",
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Confidentialité</p>
          <h1 className="page-title">Politique de confidentialité</h1>
          <p className="body-lead">
            Cette page explique de manière simple comment les informations
            transmises via le site Transit’s Now peuvent être utilisées dans le
            cadre d’une demande professionnelle.
          </p>
        </div>
      </section>

      <section className="border-y border-[#E7E2DA] bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto box-border w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {privacySections.map((section) => (
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
