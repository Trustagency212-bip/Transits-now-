import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importer vers le Maroc avec un cadre clair",
  description:
    "Repères professionnels pour comprendre les étapes, les documents, la conformité et les coûts potentiels avant une importation vers le Maroc.",
  alternates: {
    canonical: "/importer-vers-le-maroc",
  },
  openGraph: {
    title: "Importer vers le Maroc avec un cadre clair | Transit’s Now",
    description:
      "Repères professionnels pour comprendre les étapes, les documents, la conformité et les coûts potentiels avant une importation vers le Maroc.",
    url: "/importer-vers-le-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Importer vers le Maroc avec un cadre clair | Transit’s Now",
    description:
      "Repères professionnels pour comprendre les étapes, les documents, la conformité et les coûts potentiels avant une importation vers le Maroc.",
  },
};

const importSteps = [
  {
    title: "Identification de la marchandise",
    description:
      "Comprendre la nature du produit, ses caractéristiques et les contraintes éventuelles.",
  },
  {
    title: "Vérification des exigences",
    description:
      "Identifier les obligations réglementaires, autorisations ou contrôles applicables.",
  },
  {
    title: "Préparation des documents",
    description:
      "Rassembler les documents nécessaires au traitement de l’opération.",
  },
  {
    title: "Organisation du transport",
    description:
      "Anticiper les modalités de transport selon l’origine et la destination.",
  },
  {
    title: "Traitement administratif et douanier",
    description:
      "Suivre les démarches nécessaires à l’entrée de la marchandise sur le territoire.",
  },
  {
    title: "Livraison finale",
    description: "Organiser la réception selon la solution retenue.",
  },
];

const vigilancePoints = [
  "Engager une opération sans vérifier les exigences",
  "Sous-estimer l’importance des documents",
  "Ne pas anticiper certaines contraintes réglementaires",
  "Se baser sur des informations incomplètes",
  "Supposer des coûts sans analyse préalable",
];

export default function ImporterVersLeMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">
            Importer vers le Maroc
          </p>
          <h1 className="page-title">
            Importer vers le Maroc : comprendre les étapes avant d’engager votre
            opération.
          </h1>
          <p className="body-lead">
            L’importation vers le Maroc implique des démarches administratives,
            des exigences réglementaires et des éléments de coût qui varient
            selon la marchandise et la situation. Transit’s Now vous aide à
            structurer votre compréhension avant d’avancer.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="importer_hero_demander_accompagnement"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Contexte
            </p>
            <h2 className="section-title">
              Une opération qui dépend de plusieurs facteurs.
            </h2>
            <p className="section-copy">
              Chaque opération d’importation est différente. Elle dépend
              notamment de la nature de la marchandise, du pays d’origine, des
              documents disponibles et des exigences applicables. Une bonne
              compréhension en amont permet d’éviter des blocages ou des
              retards.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Étapes
            </p>
            <h2 className="section-title">
              Les grandes étapes d’une importation vers le Maroc.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importSteps.map((step, index) => (
              <article
                key={step.title}
                className="card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F6F2] text-sm font-bold text-[#C62828] ring-1 ring-[#E7E2DA]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">
              Coûts
            </p>
            <h2 className="section-title">
              Des coûts variables selon votre opération.
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              Les coûts liés à une importation vers le Maroc dépendent de
              plusieurs éléments : marchandise, transport, documents disponibles
              et exigences applicables. Une première visibilité peut être
              apportée après étude du dossier, sans estimation automatique.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">
              Vigilance
            </p>
            <h2 className="section-title">
              Points de vigilance avant d’importer.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vigilancePoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#E7E2DA] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="section-kicker">
              Transit’s Now
            </p>
            <h2 className="section-title">
              Le rôle de Transit’s Now dans votre projet.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 text-base leading-7 text-[#5F6368] lg:grid-cols-2">
            <p>
              Transit’s Now intervient en amont ou en accompagnement afin
              d’apporter un cadre clair, une première lecture de votre situation
              et un accompagnement adapté selon votre dossier.
            </p>
            <p>
              Chaque demande est étudiée selon la marchandise, les documents
              disponibles et les exigences applicables.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section bg-[#111111] text-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Prochaine étape
            </p>
            <h2 className="section-title">
              Vous préparez une importation vers le Maroc ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Présentez votre situation afin d’obtenir une première lecture et
              identifier les éléments à structurer avant d’avancer.
            </p>
          </div>

          <div>
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="importer_final_demander_accompagnement"
              className="btn-on-dark"
            >
              Demander un accompagnement
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
