import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accompagnement import Maroc",
  description:
    "Comprendre comment un accompagnement import peut aider à structurer, préparer et clarifier un projet d’importation vers le Maroc.",
  alternates: {
    canonical: "/accompagnement-import-maroc",
  },
  openGraph: {
    title: "Accompagnement import Maroc | Transit’s Now",
    description:
      "Comprendre comment un accompagnement import peut aider à structurer, préparer et clarifier un projet d’importation vers le Maroc.",
    url: "/accompagnement-import-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Accompagnement import Maroc | Transit’s Now",
    description:
      "Comprendre comment un accompagnement import peut aider à structurer, préparer et clarifier un projet d’importation vers le Maroc.",
  },
};

const clarificationPoints = [
  "La nature de la marchandise et les premiers points de vigilance",
  "Les documents disponibles et les pièces à préparer",
  "Les étapes à anticiper avant d’engager l’opération",
  "Les coûts potentiels à prévoir selon le dossier",
  "Les contraintes possibles selon les exigences applicables",
  "Le périmètre d’accompagnement réaliste avant d’avancer",
];

const preparationBlocks = [
  {
    title: "Comprendre le projet avant l’action",
    description:
      "Un projet d’importation gagne en clarté lorsqu’il est analysé avant d’engager des démarches. La marchandise, l’origine, la destination, les documents et le contexte du client peuvent modifier les étapes à prévoir.",
  },
  {
    title: "Organiser les documents disponibles",
    description:
      "La préparation du dossier permet de mieux identifier les informations présentes, les éléments manquants et les points qui nécessitent une vérification avant de poursuivre.",
  },
  {
    title: "Anticiper les contraintes possibles",
    description:
      "Certaines marchandises ou situations peuvent impliquer des exigences particulières. Une première lecture structurée aide à mieux comprendre ce qui doit être vérifié selon le dossier.",
  },
];

const approachSteps = [
  {
    title: "Lecture de la situation",
    description:
      "Transit’s Now commence par comprendre votre projet, votre marchandise, les documents disponibles et votre objectif sur le marché marocain.",
  },
  {
    title: "Clarification du cadre",
    description:
      "Les informations transmises permettent d’identifier les étapes à prévoir, les éléments à organiser et les points qui demandent une attention particulière.",
  },
  {
    title: "Orientation adaptée",
    description:
      "Après étude, l’accompagnement proposé reste lié à votre situation, aux exigences applicables et aux limites propres à chaque dossier.",
  },
];

export default function AccompagnementImportMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Accompagnement import Maroc</p>
          <h1 className="page-title">
            Structurer un projet d’importation vers le Maroc avec méthode et
            clarté.
          </h1>
          <p className="body-lead">
            Un accompagnement import ne consiste pas à promettre un résultat. Il
            permet d’obtenir une première lecture de la situation, de préparer
            les éléments utiles et de mieux comprendre les étapes à prévoir
            selon votre dossier.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="authority_hero_demander_accompagnement"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/services"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="authority_hero_services"
              className="btn-secondary"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Comprendre</p>
            <h2 className="section-title">
              Pourquoi préparer une opération d’import en amont ?
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Une opération d’importation vers le Maroc dépend rarement d’un
              seul élément. La marchandise concernée, les documents disponibles,
              le pays d’origine, la destination et les exigences applicables
              peuvent influencer la manière d’avancer.
            </p>
            <p>
              Une préparation structurée aide à éviter les décisions prises sur
              des informations incomplètes. Elle permet aussi de mieux cadrer le
              rôle de chaque intervenant et de mieux comprendre les limites du
              dossier avant de s’engager.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Clarifier</p>
            <h2 className="section-title">
              Ce qu’un accompagnement import peut aider à clarifier.
            </h2>
            <p className="section-copy">
              L’objectif est d’apporter une vision plus lisible de votre projet
              d’import Maroc, sans transformer l’étude du dossier en promesse
              automatique.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clarificationPoints.map((point) => (
              <div
                key={point}
                className="rounded-[14px] border border-[#E7E2DA] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#111111] shadow-[0_10px_30px_rgba(17,17,17,0.025)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Préparation</p>
            <h2 className="section-title">
              Documents, organisation et préparation du dossier.
            </h2>
            <p className="section-copy">
              La qualité d’un dossier dépend en grande partie de la clarté des
              informations disponibles. Avant d’avancer, il est utile de
              regrouper les éléments existants et de comprendre ce qui doit être
              vérifié.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {preparationBlocks.map((block) => (
              <article key={block.title} className="card-muted">
                <h3 className="text-xl font-bold tracking-tight">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {block.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Contraintes</p>
            <h2 className="section-title">
              Une première visibilité sur les points sensibles.
            </h2>
          </div>

          <div className="rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8">
            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Certaines opérations peuvent soulever des questions liées à la
                nature de la marchandise, aux documents disponibles, aux coûts
                potentiels ou aux exigences administratives et douanières
                applicables.
              </p>
              <p>
                Transit’s Now aide à obtenir une première visibilité sur ces
                sujets afin de mieux cadrer votre projet d’importation. Les
                marchandises sensibles ou réglementées sont étudiées au cas par
                cas, et les marchandises interdites ou non conformes ne sont pas
                accompagnées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Méthode</p>
            <h2 className="section-title">
              Une approche prudente, structurée et adaptée au dossier.
            </h2>
            <p className="section-copy">
              L’accompagnement repose sur une lecture concrète des éléments
              disponibles. Il ne remplace pas les décisions des autorités
              compétentes et ne garantit pas l’acceptation d’un dossier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {approachSteps.map((step, index) => (
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

      <section className="site-section bg-[#111111] text-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Prochaine étape
            </p>
            <h2 className="section-title">
              Vous préparez un projet d’import vers le Maroc ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Présentez votre situation, votre marchandise et les documents
              disponibles afin d’obtenir une première lecture structurée de
              votre dossier.
            </p>
          </div>

          <div>
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="authority_final_demander_accompagnement"
              className="btn-on-dark"
            >
              Demander un accompagnement
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner max-w-4xl">
          <p className="section-kicker">Conclusion</p>
          <h2 className="section-title">
            Un cadre clair avant d’engager votre opération.
          </h2>
          <p className="section-copy">
            Une importation vers le Maroc mérite une préparation sérieuse.
            Transit’s Now accompagne les professionnels qui souhaitent avancer
            avec plus de clarté, mieux organiser leur dossier et mieux
            comprendre les étapes à prévoir selon leur situation.
          </p>
          <p className="section-copy">
            Pour une vision d’ensemble des éléments à anticiper, consultez la
            page dédiée à la{" "}
            <a
              href="/preparer-importation-maroc"
              className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
            >
              préparation d’une importation vers le Maroc
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
