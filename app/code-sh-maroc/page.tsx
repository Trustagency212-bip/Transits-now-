import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code SH Maroc | Comprendre la classification douanière",
  description:
    "Comprendre le rôle du code SH dans une opération d’importation vers le Maroc et pourquoi la classification d’une marchandise peut avoir un impact sur les documents, les exigences et la préparation du dossier.",
  alternates: {
    canonical: "/code-sh-maroc",
  },
  openGraph: {
    title: "Code SH Maroc | Comprendre la classification douanière",
    description:
      "Comprendre le rôle du code SH dans une opération d’importation vers le Maroc et pourquoi la classification d’une marchandise peut avoir un impact sur les documents, les exigences et la préparation du dossier.",
    url: "/code-sh-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Code SH Maroc | Comprendre la classification douanière",
    description:
      "Comprendre le rôle du code SH dans une opération d’importation vers le Maroc et pourquoi la classification d’une marchandise peut avoir un impact sur les documents, les exigences et la préparation du dossier.",
  },
};

const classificationImpacts = [
  {
    title: "Documents à préparer",
    description:
      "La classification peut influencer les documents à réunir ou à vérifier selon la nature de la marchandise et les exigences applicables au dossier.",
  },
  {
    title: "Exigences possibles",
    description:
      "Certaines familles de produits peuvent être soumises à des contrôles, autorisations, certificats ou vérifications complémentaires.",
  },
  {
    title: "Lecture du dossier",
    description:
      "Une classification approximative peut rendre la lecture du dossier moins claire, surtout lorsque les documents ne décrivent pas précisément le produit.",
  },
];

const difficultyPoints = [
  "Description commerciale trop générale",
  "Produit composé de plusieurs matières ou fonctions",
  "Documents fournisseur incomplets ou peu précis",
  "Différence entre l’usage déclaré et la nature réelle du produit",
  "Marchandise sensible ou réglementée à étudier au cas par cas",
  "Informations insuffisantes avant expédition",
];

const preparationErrors = [
  {
    title: "Se baser uniquement sur le nom commercial",
    description:
      "Un nom commercial ne suffit pas toujours à comprendre la nature exacte d’un produit. Les caractéristiques, la composition et l’usage peuvent aussi être nécessaires.",
  },
  {
    title: "Reprendre une information sans vérification",
    description:
      "Un code ou une classification indiqué par un fournisseur doit être lu avec prudence. Il peut constituer un point de départ, mais ne remplace pas une analyse adaptée au dossier.",
  },
  {
    title: "Attendre l’arrivée de la marchandise",
    description:
      "Lorsque les questions de classification apparaissent trop tard, les corrections peuvent devenir plus difficiles et ralentir le traitement.",
  },
];

const upstreamChecks = [
  "Description technique ou commerciale de la marchandise",
  "Composition, matière, usage et caractéristiques principales",
  "Documents fournisseur disponibles",
  "Pays d’origine et destination au Maroc",
  "Informations de transport et conditionnement",
  "Contraintes ou exigences déjà identifiées",
];

const relatedResources = [
  {
    href: "/preparer-importation-maroc",
    title: "Préparer une importation vers le Maroc",
    description:
      "Situer la classification dans une méthode globale de préparation du dossier.",
  },
  {
    href: "/documents-import-maroc",
    title: "Documents import Maroc",
    description:
      "Comprendre les documents qui doivent rester cohérents avec la marchandise.",
  },
  {
    href: "/erreurs-import-maroc",
    title: "Erreurs import Maroc",
    description:
      "Repérer les approximations et oublis fréquents avant d’importer.",
  },
];

export default function CodeShMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Code SH Maroc</p>
          <h1 className="page-title">
            Code SH Maroc : comprendre la classification douanière
          </h1>
          <p className="body-lead">
            Le code SH et la classification douanière jouent un rôle important
            dans la lecture d’une opération d’importation. Ils peuvent avoir un
            impact sur les documents, les exigences applicables et la manière de
            préparer le dossier, selon la marchandise concernée.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="code_sh_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/documents-import-maroc"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="code_sh_hero_documents"
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
            <p className="section-kicker">Définition</p>
            <h2 className="section-title">Qu’est-ce qu’un code SH.</h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Le code SH est un système de classification utilisé dans le cadre
              du commerce international pour identifier les marchandises. Dans
              une opération d’importation, il aide à organiser la lecture du
              produit et des exigences qui peuvent s’y rattacher.
            </p>
            <p>
              Cette page ne fournit pas de classification officielle. Elle vise
              à expliquer pourquoi ce sujet doit être traité avec méthode avant
              d’avancer dans une opération d’importation vers le Maroc.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Importance</p>
            <h2 className="section-title">
              Pourquoi la classification est importante.
            </h2>
            <p className="section-copy">
              La classification ne se limite pas à une référence administrative.
              Elle peut influencer la compréhension du dossier, les documents à
              préparer et les vérifications à prévoir selon la marchandise.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {classificationImpacts.map((impact) => (
              <article key={impact.title} className="card">
                <h3 className="text-xl font-bold tracking-tight">
                  {impact.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {impact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Difficultés</p>
            <h2 className="section-title">
              Pourquoi certaines marchandises créent des difficultés.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {difficultyPoints.map((point) => (
              <div
                key={point}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Lien dossier</p>
              <h2 className="section-title">
                Lien entre classification, documents et exigences.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                La classification d’une marchandise doit être cohérente avec les
                documents disponibles : facture commerciale, packing list,
                documents de transport, description du produit et pièces
                complémentaires éventuelles.
              </p>
              <p>
                Lorsque ces éléments ne racontent pas la même chose, le dossier
                peut devenir plus difficile à lire. Pour approfondir cette
                partie, vous pouvez consulter la page dédiée aux{" "}
                <a
                  href="/documents-import-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  documents import Maroc
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
            <p className="section-kicker">Préparation</p>
            <h2 className="section-title">
              Les erreurs fréquentes de préparation.
            </h2>
            <p className="section-copy">
              Les erreurs de préparation ne viennent pas toujours d’un mauvais
              choix volontaire. Elles apparaissent souvent lorsque les
              informations disponibles sont trop partielles au moment d’avancer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {preparationErrors.map((error, index) => (
              <article key={error.title} className="card-muted">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#C62828] ring-1 ring-[#E7E2DA]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {error.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {error.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Ces sujets rejoignent plus largement les{" "}
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
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Prudence</p>
            <h2 className="section-title">
              Pourquoi il faut éviter les approximations.
            </h2>
          </div>

          <div className="space-y-5 rounded-[16px] border border-[#E7E2DA] bg-white p-6 text-base leading-7 text-[#5F6368] shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 sm:text-lg sm:leading-8">
            <p>
              Une approximation sur la classification peut créer une lecture
              fragile du dossier. Elle peut aussi conduire à préparer les mauvais
              documents ou à négliger une exigence qui aurait dû être étudiée
              avant expédition.
            </p>
            <p>
              Transit’s Now ne remplace pas les validations réglementaires ou
              les décisions des autorités compétentes. L’objectif est d’aider à
              structurer les informations disponibles et à identifier les points
              qui demandent une attention particulière.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Dossier</p>
            <h2 className="section-title">
              Préparer son dossier avant importation.
            </h2>
            <p className="section-copy">
              Une préparation sérieuse commence par la collecte des informations
              qui permettent de comprendre la marchandise et le contexte de
              l’opération avant d’avancer.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upstreamChecks.map((check) => (
              <div
                key={check}
                className="rounded-[14px] border border-[#E7E2DA] bg-[#F8F6F2] px-5 py-4 text-sm font-semibold leading-6 text-[#111111]"
              >
                {check}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Si votre opération concerne une marchandise importée depuis
              l’étranger, la ressource sur l’{" "}
              <a
                href="/importer-chine-maroc"
                className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
              >
                importation de Chine vers le Maroc
              </a>{" "}
              peut aussi vous aider à mieux cadrer les étapes amont.
            </p>
            <p className="mt-5">
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

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Ressources liées</p>
            <h2 className="section-title">
              Relier classification, documents et préparation.
            </h2>
            <p className="section-copy">
              Ces ressources complètent la lecture du code SH avec les autres
              points structurants du dossier.
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
              Vous souhaitez mieux préparer votre dossier ?
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
              data-track-label="code_sh_final_contact"
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
