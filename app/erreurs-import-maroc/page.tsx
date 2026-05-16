import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erreurs import Maroc | Points de vigilance avant d’importer",
  description:
    "Identifier les erreurs fréquentes dans une opération d’importation vers le Maroc afin de mieux préparer son dossier, ses documents et ses échanges avant expédition.",
  alternates: {
    canonical: "/erreurs-import-maroc",
  },
  openGraph: {
    title: "Erreurs import Maroc | Points de vigilance avant d’importer",
    description:
      "Identifier les erreurs fréquentes dans une opération d’importation vers le Maroc afin de mieux préparer son dossier, ses documents et ses échanges avant expédition.",
    url: "/erreurs-import-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Erreurs import Maroc | Points de vigilance avant d’importer",
    description:
      "Identifier les erreurs fréquentes dans une opération d’importation vers le Maroc afin de mieux préparer son dossier, ses documents et ses échanges avant expédition.",
  },
};

const importErrors = [
  {
    title: "Erreur 1 : engager l’expédition sans dossier suffisamment préparé",
    description:
      "Certaines opérations démarrent alors que les documents, la marchandise ou les exigences applicables ne sont pas encore suffisamment clarifiés. Cette situation peut réduire la marge de correction une fois l’expédition engagée.",
  },
  {
    title: "Erreur 2 : sous-estimer l’importance des documents",
    description:
      "La facture, la packing list, les documents de transport et les pièces complémentaires doivent être cohérents. Une différence entre ces éléments peut compliquer la lecture du dossier.",
  },
  {
    title:
      "Erreur 3 : mal anticiper la classification ou les exigences applicables",
    description:
      "La nature du produit influence les vérifications à prévoir. Certaines marchandises peuvent être soumises à des exigences particulières, qui doivent être étudiées selon le dossier.",
  },
  {
    title: "Erreur 4 : négliger les échanges avec le fournisseur",
    description:
      "Les informations fournies en amont par le fournisseur sont importantes. Des descriptions imprécises, des documents incomplets ou des réponses tardives peuvent ralentir la préparation.",
  },
  {
    title: "Erreur 5 : raisonner uniquement sur le prix d’achat",
    description:
      "Le prix d’achat ne reflète pas à lui seul le coût d’une opération. Le transport, les documents, les frais potentiels et les exigences applicables doivent aussi être pris en compte.",
  },
  {
    title: "Erreur 6 : attendre le blocage pour chercher une solution",
    description:
      "Lorsque les vérifications commencent trop tard, les options peuvent être plus limitées. Une première lecture avant expédition permet de mieux identifier les points sensibles.",
  },
];

const preparationSteps = [
  {
    title: "Clarifier la marchandise",
    description:
      "Identifier précisément le produit, son usage, son origine et les informations utiles à la lecture du dossier.",
  },
  {
    title: "Organiser les documents",
    description:
      "Regrouper les documents disponibles et vérifier leur cohérence avant d’avancer dans l’opération.",
  },
  {
    title: "Anticiper les échanges",
    description:
      "Préparer les questions à poser au fournisseur, au transporteur ou aux intervenants afin de limiter les zones d’incertitude.",
  },
];

const accompanimentSignals = [
  "Vous disposez de documents mais souhaitez une première lecture structurée",
  "La marchandise peut être sensible ou soumise à des exigences spécifiques",
  "Les informations fournisseur ne sont pas encore totalement claires",
  "Vous souhaitez mieux comprendre les coûts potentiels avant d’avancer",
  "Vous préparez une opération depuis l’étranger vers le Maroc",
  "Vous souhaitez cadrer les étapes avant expédition",
];

const relatedResources = [
  {
    href: "/preparer-importation-maroc",
    title: "Préparer une importation vers le Maroc",
    description:
      "Revenir à la méthode globale pour structurer les informations avant d’avancer.",
  },
  {
    href: "/documents-import-maroc",
    title: "Documents import Maroc",
    description:
      "Vérifier les documents et leur cohérence avant expédition.",
  },
  {
    href: "/code-sh-maroc",
    title: "Code SH Maroc",
    description:
      "Comprendre pourquoi la classification peut influencer la préparation du dossier.",
  },
];

export default function ErreursImportMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Erreurs import Maroc</p>
          <h1 className="page-title">
            Erreurs import Maroc : les points de vigilance à anticiper
          </h1>
          <p className="body-lead">
            Une opération d’importation vers le Maroc peut se compliquer lorsque
            certains éléments sont traités trop tard ou avec des informations
            incomplètes. Identifier les points de vigilance en amont permet de
            mieux préparer le dossier, sans promettre l’absence de difficulté.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="erreurs_import_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/documents-import-maroc"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="erreurs_import_hero_documents"
              className="btn-secondary"
            >
              Préparer ses documents
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Comprendre</p>
            <h2 className="section-title">
              Pourquoi certaines opérations se compliquent.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Les difficultés apparaissent souvent lorsque la marchandise, les
              documents, les échanges avec le fournisseur ou les exigences
              applicables ne sont pas suffisamment clarifiés avant d’avancer.
            </p>
            <p>
              Chaque dossier reste spécifique. L’objectif n’est pas de prédire
              tous les scénarios, mais d’identifier les points qui méritent une
              attention particulière avant expédition ou avant engagement
              opérationnel.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Points fréquents</p>
            <h2 className="section-title">
              Les erreurs à surveiller avant d’importer.
            </h2>
            <p className="section-copy">
              Ces situations ne concernent pas tous les dossiers, mais elles
              reviennent fréquemment dans la préparation d’une opération
              d’importation vers le Maroc.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {importErrors.map((error) => (
              <article key={error.title} className="card">
                <h3 className="text-xl font-bold tracking-tight">
                  {error.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {error.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Préparation</p>
            <h2 className="section-title">
              Comment mieux préparer une opération d’importation.
            </h2>
            <p className="section-copy">
              Une préparation utile commence par une lecture concrète des
              éléments disponibles. Elle permet de mieux comprendre ce qui est
              clair, ce qui doit être vérifié et ce qui dépend des exigences
              applicables.
            </p>
          </div>

          <div className="grid gap-5">
            {preparationSteps.map((step, index) => (
              <article key={step.title} className="card-muted">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#C62828] ring-1 ring-[#E7E2DA]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Lecture du dossier</p>
              <h2 className="section-title">
                Relier documents, fournisseur et exigences.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Une erreur isolée vient rarement d’un seul document. Elle peut
                aussi venir d’un manque d’alignement entre la description de la
                marchandise, les informations fournisseur, les documents de
                transport et les contraintes applicables.
              </p>
              <p>
                Pour approfondir cette partie, vous pouvez consulter la page
                dédiée aux{" "}
                <a
                  href="/documents-import-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  documents import Maroc
                </a>{" "}
                ou la ressource sur l’{" "}
                <a
                  href="/importer-chine-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  importation de Chine vers le Maroc
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Accompagnement</p>
            <h2 className="section-title">
              Quand demander un accompagnement.
            </h2>
            <p className="section-copy">
              Un accompagnement peut être pertinent lorsque vous souhaitez
              obtenir une première lecture structurée avant d’engager une étape
              importante ou lorsque certains éléments du dossier demandent une
              vérification plus attentive.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accompanimentSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {signal}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Transit’s Now intervient dans un cadre professionnel, selon votre
              situation, les documents disponibles et les exigences applicables.
              Vous pouvez consulter nos{" "}
              <a
                href="/services"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                services d’accompagnement
              </a>{" "}
              ou notre approche d’{" "}
              <a
                href="/accompagnement-import-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                accompagnement import Maroc
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Ressources liées</p>
            <h2 className="section-title">
              Prévenir les difficultés par une meilleure préparation.
            </h2>
            <p className="section-copy">
              Ces pages permettent de relier les erreurs fréquentes aux sujets à
              vérifier en amont.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedResources.map((resource) => (
              <a key={resource.href} href={resource.href} className="card">
                <h3 className="text-xl font-bold tracking-tight">
                  {resource.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {resource.description}
                </p>
              </a>
            ))}
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
              Vous souhaitez mieux cadrer votre opération ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Présentez votre situation, votre marchandise et les documents
              disponibles afin d’obtenir une première lecture structurée.
            </p>
          </div>

          <div>
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="erreurs_import_final_contact"
              className="btn-on-dark"
            >
              Contacter Transit’s Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
