import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importer de Turquie vers le Maroc | Préparation et vigilance",
  description:
    "Comprendre les principales étapes d’une importation depuis la Turquie vers le Maroc, les documents généralement utilisés et les points de vigilance à anticiper avant expédition.",
  alternates: {
    canonical: "/importer-turquie-maroc",
  },
  openGraph: {
    title: "Importer de Turquie vers le Maroc | Préparation et vigilance",
    description:
      "Comprendre les principales étapes d’une importation depuis la Turquie vers le Maroc, les documents généralement utilisés et les points de vigilance à anticiper avant expédition.",
    url: "/importer-turquie-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Importer de Turquie vers le Maroc | Préparation et vigilance",
    description:
      "Comprendre les principales étapes d’une importation depuis la Turquie vers le Maroc, les documents généralement utilisés et les points de vigilance à anticiper avant expédition.",
  },
};

const preparationSteps = [
  {
    title: "Clarifier le produit et le fournisseur",
    description:
      "Avant d’avancer, il est utile de comprendre la marchandise, les informations transmises par le fournisseur, les quantités, le conditionnement et la destination prévue au Maroc.",
  },
  {
    title: "Vérifier les documents disponibles",
    description:
      "Les documents doivent être cohérents avec la marchandise et les conditions de l’opération. Une vérification en amont aide à identifier les éléments à compléter ou à préciser.",
  },
  {
    title: "Cadrer l’expédition",
    description:
      "Le mode de transport, les délais, les informations de chargement et les documents de transport doivent être anticipés avant que la marchandise ne soit expédiée.",
  },
];

const documentItems = [
  "Facture commerciale",
  "Packing list",
  "Document de transport",
  "Informations fournisseur et acheteur",
  "Description précise de la marchandise",
  "Certificats ou documents spécifiques selon le produit",
];

const supplierChecks = [
  "Description claire du produit et de ses caractéristiques",
  "Quantités, poids, colisage et conditionnement",
  "Cohérence entre facture, packing list et transport",
  "Disponibilité des documents avant expédition",
  "Informations sur l’origine et la destination",
  "Points réglementaires ou documentaires à vérifier",
];

const complicationPoints = [
  {
    title: "Informations fournisseur incomplètes",
    description:
      "Un dossier peut se fragiliser lorsque les informations transmises ne permettent pas de comprendre clairement la marchandise, son conditionnement ou les documents associés.",
  },
  {
    title: "Documents préparés trop tard",
    description:
      "Lorsque les documents sont réunis après validation ou expédition, les corrections peuvent devenir plus délicates et ralentir la suite du traitement.",
  },
  {
    title: "Contraintes mal anticipées",
    description:
      "Certaines marchandises peuvent nécessiter une lecture plus attentive selon leur nature, leur usage ou les exigences applicables au dossier.",
  },
];

const dossierMethod = [
  "Identifier la marchandise concernée",
  "Regrouper les documents disponibles",
  "Vérifier la cohérence des informations",
  "Clarifier les échanges avec le fournisseur",
  "Anticiper les points documentaires sensibles",
  "Évaluer les étapes à prévoir selon le dossier",
];

const relatedResources = [
  {
    href: "/preparer-importation-maroc",
    title: "Préparer une importation vers le Maroc",
    description:
      "Replacer l’opération Turquie dans une méthode globale de préparation du dossier.",
  },
  {
    href: "/documents-import-maroc",
    title: "Documents import Maroc",
    description:
      "Identifier les documents à réunir et les points de cohérence à vérifier.",
  },
  {
    href: "/erreurs-import-maroc",
    title: "Erreurs import Maroc",
    description:
      "Comprendre les erreurs fréquentes qui peuvent ralentir une opération d’importation.",
  },
];

export default function ImporterTurquieMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Import Turquie Maroc</p>
          <h1 className="page-title">
            Importer de Turquie vers le Maroc : préparer son opération
            correctement
          </h1>
          <p className="body-lead">
            Une importation depuis la Turquie vers le Maroc demande une
            préparation structurée avant expédition. Les échanges avec le
            fournisseur, les documents disponibles, la marchandise concernée et
            les exigences applicables doivent être clarifiés selon votre dossier.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="turquie_maroc_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/documents-import-maroc"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="turquie_maroc_hero_documents"
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
            <p className="section-kicker">Contexte</p>
            <h2 className="section-title">
              Pourquoi certaines entreprises importent depuis la Turquie.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              La Turquie peut intéresser des professionnels pour différentes
              raisons : proximité relative avec le Maroc, diversité de produits,
              échanges avec des fournisseurs identifiés ou opportunités
              commerciales déjà cadrées.
            </p>
            <p>
              Cela ne rend pas l’opération automatique. La marchandise, les
              documents disponibles, les informations fournisseur et les
              exigences applicables doivent être étudiés selon le dossier avant
              d’avancer.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Avant expédition</p>
            <h2 className="section-title">
              Préparer son opération avant expédition.
            </h2>
            <p className="section-copy">
              La préparation commence avant que la marchandise ne quitte le pays
              d’origine. Cette étape permet de mieux comprendre ce qui est clair,
              ce qui manque et ce qui doit être vérifié.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {preparationSteps.map((step, index) => (
              <article key={step.title} className="card">
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
            <p className="section-kicker">Documents</p>
            <h2 className="section-title">
              Documents fréquemment rencontrés.
            </h2>
            <p className="section-copy">
              Les documents peuvent varier selon la marchandise, le fournisseur,
              le transport et les exigences applicables. Cette base permet une
              première lecture, sans remplacer l’étude du dossier.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documentItems.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Fournisseur</p>
              <h2 className="section-title">
                Points de vigilance avant validation fournisseur.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Avant de valider une opération, il est utile de vérifier que les
                informations transmises par le fournisseur permettent de
                comprendre clairement la marchandise, les quantités, le
                conditionnement et les documents associés.
              </p>
              <p>
                Une validation trop rapide peut laisser apparaître des zones
                d’incertitude au moment de préparer le dossier ou d’organiser
                l’expédition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Échanges</p>
            <h2 className="section-title">
              Importance des échanges et des informations transmises.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supplierChecks.map((check) => (
              <div
                key={check}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {check}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Contraintes</p>
            <h2 className="section-title">
              Anticiper les contraintes documentaires et administratives.
            </h2>
          </div>

          <div className="space-y-5 rounded-[16px] border border-[#E7E2DA] bg-white p-6 text-base leading-7 text-[#5F6368] shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 sm:text-lg sm:leading-8">
            <p>
              Certaines marchandises peuvent nécessiter une attention
              particulière selon leur nature, leur usage, leur classification ou
              les documents disponibles. Ces éléments doivent être étudiés au cas
              par cas.
            </p>
            <p>
              Pour mieux comprendre ces liens, vous pouvez consulter les pages
              dédiées aux{" "}
              <a
                href="/documents-import-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                documents import Maroc
              </a>{" "}
              et au{" "}
              <a
                href="/code-sh-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                code SH Maroc
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Complexité</p>
            <h2 className="section-title">
              Pourquoi certaines opérations se compliquent.
            </h2>
            <p className="section-copy">
              Les difficultés apparaissent souvent lorsque les informations sont
              incomplètes, lorsque les documents ne sont pas alignés ou lorsque
              certaines contraintes n’ont pas été identifiées avant expédition.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {complicationPoints.map((point) => (
              <article key={point.title} className="card-muted">
                <h3 className="text-xl font-bold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {point.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Ces situations rejoignent les{" "}
              <a
                href="/erreurs-import-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                erreurs import Maroc
              </a>{" "}
              à anticiper avant d’engager une opération.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Méthode</p>
              <h2 className="section-title">
                Préparer son dossier avec méthode.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Préparer un dossier consiste à réunir les documents disponibles,
                vérifier les informations transmises, identifier les zones
                d’incertitude et cadrer les étapes à prévoir selon la situation.
              </p>
              <p>
                Une opération depuis la Turquie peut aussi être comparée à
                d’autres démarches d’importation, comme l’{" "}
                <a
                  href="/importer-chine-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  importation de Chine vers le Maroc
                </a>
                , lorsque l’objectif est de mieux comprendre les différences de
                préparation selon l’origine et le dossier.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dossierMethod.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Pour comprendre le périmètre possible, consultez nos{" "}
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
              Relier cette opération aux autres sujets de préparation.
            </h2>
            <p className="section-copy">
              Ces pages complètent la lecture du dossier avant validation
              fournisseur ou expédition.
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
              Vous préparez une importation depuis la Turquie ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Présentez votre situation, la marchandise concernée et les
              documents disponibles afin d’obtenir une première lecture de votre
              dossier.
            </p>
          </div>

          <div>
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="turquie_maroc_final_contact"
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
