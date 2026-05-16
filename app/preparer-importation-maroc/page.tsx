import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Préparer une importation vers le Maroc | Méthode et vigilance",
  description:
    "Comprendre les principaux éléments à anticiper avant une importation vers le Maroc : documents, préparation du dossier, échanges fournisseur, classification et points de vigilance.",
  alternates: {
    canonical: "/preparer-importation-maroc",
  },
  openGraph: {
    title: "Préparer une importation vers le Maroc | Méthode et vigilance",
    description:
      "Comprendre les principaux éléments à anticiper avant une importation vers le Maroc : documents, préparation du dossier, échanges fournisseur, classification et points de vigilance.",
    url: "/preparer-importation-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Préparer une importation vers le Maroc | Méthode et vigilance",
    description:
      "Comprendre les principaux éléments à anticiper avant une importation vers le Maroc : documents, préparation du dossier, échanges fournisseur, classification et points de vigilance.",
  },
};

const preparationAreas = [
  {
    title: "Marchandise",
    description:
      "Comprendre le produit, son usage, son origine, son conditionnement et les informations nécessaires à la lecture du dossier.",
  },
  {
    title: "Documents",
    description:
      "Identifier les pièces disponibles, vérifier leur cohérence et anticiper les documents complémentaires possibles selon la situation.",
  },
  {
    title: "Exigences",
    description:
      "Repérer les points qui peuvent dépendre de la classification, de la nature de la marchandise ou des exigences applicables.",
  },
];

const documentSignals = [
  "Facture commerciale cohérente",
  "Packing list lisible",
  "Document de transport adapté",
  "Description précise de la marchandise",
  "Informations fournisseur et acheteur",
  "Documents spécifiques selon le dossier",
];

const supplierSignals = [
  "Description claire du produit",
  "Quantités, poids et conditionnement",
  "Origine et destination",
  "Délais et modalités d’expédition",
  "Disponibilité des documents",
  "Réponses aux points à vérifier",
];

const complicationReasons = [
  {
    title: "Informations incomplètes",
    description:
      "Un dossier peut devenir plus fragile lorsque les documents ou les informations fournisseur ne permettent pas de comprendre clairement l’opération.",
  },
  {
    title: "Vérifications trop tardives",
    description:
      "Lorsque certains points sont examinés après expédition, les corrections peuvent devenir plus difficiles et ralentir la suite du traitement.",
  },
  {
    title: "Contraintes mal identifiées",
    description:
      "Certaines marchandises demandent une lecture plus attentive selon leur nature, leur classification ou les exigences applicables.",
  },
];

const dossierSteps = [
  "Identifier la marchandise concernée",
  "Réunir les documents disponibles",
  "Vérifier la cohérence des informations",
  "Clarifier les échanges avec le fournisseur",
  "Repérer les points de vigilance",
  "Cadrer les étapes à prévoir selon le dossier",
];

const resourceLinks = [
  {
    href: "/documents-import-maroc",
    title: "Documents import Maroc",
    description:
      "Comprendre les documents fréquemment rencontrés et les points à vérifier avant expédition.",
  },
  {
    href: "/code-sh-maroc",
    title: "Code SH Maroc",
    description:
      "Mieux comprendre le rôle de la classification douanière dans la préparation du dossier.",
  },
  {
    href: "/erreurs-import-maroc",
    title: "Erreurs import Maroc",
    description:
      "Identifier les points de vigilance qui peuvent compliquer une opération d’importation.",
  },
  {
    href: "/importer-chine-maroc",
    title: "Importer de Chine vers le Maroc",
    description:
      "Préparer une opération depuis la Chine avec une lecture claire des documents et des contraintes.",
  },
  {
    href: "/importer-turquie-maroc",
    title: "Importer de Turquie vers le Maroc",
    description:
      "Cadrer les échanges fournisseur, les documents et les vérifications avant expédition.",
  },
  {
    href: "/accompagnement-import-maroc",
    title: "Accompagnement import Maroc",
    description:
      "Comprendre l’approche méthodique d’un accompagnement adapté selon le dossier.",
  },
];

export default function PreparerImportationMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Préparation import Maroc</p>
          <h1 className="page-title">
            Préparer une importation vers le Maroc avec méthode
          </h1>
          <p className="body-lead">
            Une importation vers le Maroc se prépare avant les décisions
            opérationnelles importantes. La marchandise, les documents, les
            échanges fournisseur, la classification et les exigences applicables
            doivent être compris avec prudence selon le dossier.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="preparer_import_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/services"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="preparer_import_hero_services"
              className="btn-secondary"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Méthode</p>
            <h2 className="section-title">
              Pourquoi la préparation est importante.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Une opération d’importation ne dépend pas uniquement du transport
              ou de l’achat de la marchandise. Elle repose aussi sur la qualité
              des informations disponibles, la cohérence des documents et la
              capacité à identifier les points qui doivent être vérifiés.
            </p>
            <p>
              Préparer l’opération permet de mieux comprendre ce qui est déjà
              clair, ce qui reste à organiser et ce qui peut dépendre des
              exigences applicables. Cette préparation ne garantit pas un
              résultat, mais elle permet d’avancer avec un cadre plus lisible.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Lecture globale</p>
            <h2 className="section-title">
              Comprendre son opération avant expédition.
            </h2>
            <p className="section-copy">
              Avant que la marchandise ne quitte le pays d’origine, il est utile
              de relier les informations clés : produit, fournisseur, documents,
              transport et destination au Maroc.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {preparationAreas.map((area) => (
              <article key={area.title} className="card">
                <h3 className="text-xl font-bold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {area.description}
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
              Documents et informations à anticiper.
            </h2>
            <p className="section-copy">
              Les documents donnent une première lecture de l’opération. Ils
              doivent être cohérents avec la marchandise, les échanges
              fournisseur et les informations de transport.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documentSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="section-inner mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
          <p>
            Pour approfondir cette partie, consultez la page dédiée aux{" "}
            <a
              href="/documents-import-maroc"
              className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
            >
              documents import Maroc
            </a>
            .
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Fournisseur</p>
              <h2 className="section-title">
                Importance des échanges avec le fournisseur.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Les échanges avec le fournisseur influencent directement la
                qualité du dossier. Une description imprécise, des documents
                transmis tardivement ou des informations partielles peuvent
                rendre la préparation plus difficile.
              </p>
              <p>
                Les importations depuis certains pays peuvent demander une
                vigilance particulière sur les documents et les informations
                transmises. Les pages sur l’{" "}
                <a
                  href="/importer-chine-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  importation de Chine vers le Maroc
                </a>{" "}
                et l’{" "}
                <a
                  href="/importer-turquie-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  importation de Turquie vers le Maroc
                </a>{" "}
                détaillent ces logiques selon l’origine.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supplierSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Classification</p>
            <h2 className="section-title">
              Classification et exigences applicables.
            </h2>
          </div>

          <div className="space-y-5 rounded-[16px] border border-[#E7E2DA] bg-[#F8F6F2] p-6 text-base leading-7 text-[#5F6368] sm:p-8 sm:text-lg sm:leading-8">
            <p>
              La classification d’une marchandise peut influencer les documents
              à prévoir, les vérifications nécessaires et les exigences qui
              s’appliquent au dossier. Elle doit être abordée avec prudence,
              sans approximation.
            </p>
            <p>
              Pour mieux comprendre ce sujet, consultez la page dédiée au{" "}
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

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Vigilance</p>
            <h2 className="section-title">
              Pourquoi certaines opérations se compliquent.
            </h2>
            <p className="section-copy">
              Les difficultés apparaissent souvent lorsque les informations sont
              incomplètes, lorsque les documents ne sont pas alignés ou lorsque
              certains points sensibles ne sont pas identifiés assez tôt.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {complicationReasons.map((reason) => (
              <article key={reason.title} className="card-muted">
                <h3 className="text-xl font-bold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Cette partie est développée dans la ressource sur les{" "}
              <a
                href="/erreurs-import-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                erreurs import Maroc
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Anticipation</p>
            <h2 className="section-title">Anticiper avant le blocage.</h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Attendre qu’une difficulté apparaisse peut réduire les options
              disponibles. Une première lecture du dossier permet d’identifier
              les informations manquantes, les incohérences et les sujets à
              traiter avant de poursuivre.
            </p>
            <p>
              Cette approche reste prudente : elle ne remplace pas les décisions
              des autorités compétentes et ne garantit pas l’acceptation d’un
              dossier. Elle permet surtout de mieux structurer les éléments
              disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Hub métier</p>
            <h2 className="section-title">
              Structurer son dossier correctement.
            </h2>
            <p className="section-copy">
              Cette page sert de point d’entrée pour organiser les grands sujets
              de préparation. Les ressources ci-dessous permettent d’approfondir
              chaque axe selon votre situation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {resourceLinks.map((resource) => (
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

          <div className="mt-12 rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker">Méthode</p>
                <h3 className="section-title">
                  Les étapes à organiser avant d’avancer.
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {dossierSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
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

      <section className="site-section bg-[#111111] text-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Prochaine étape
            </p>
            <h2 className="section-title">
              Vous souhaitez préparer votre importation avec plus de clarté ?
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
              data-track-label="preparer_import_final_contact"
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
