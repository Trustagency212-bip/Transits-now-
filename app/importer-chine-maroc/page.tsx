import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importer de Chine vers le Maroc | Préparation et points de vigilance",
  description:
    "Comprendre les principales étapes d’une importation depuis la Chine vers le Maroc, les documents généralement demandés et les points de vigilance à anticiper avant expédition.",
  alternates: {
    canonical: "/importer-chine-maroc",
  },
  openGraph: {
    title:
      "Importer de Chine vers le Maroc | Préparation et points de vigilance",
    description:
      "Comprendre les principales étapes d’une importation depuis la Chine vers le Maroc, les documents généralement demandés et les points de vigilance à anticiper avant expédition.",
    url: "/importer-chine-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Importer de Chine vers le Maroc | Préparation et points de vigilance",
    description:
      "Comprendre les principales étapes d’une importation depuis la Chine vers le Maroc, les documents généralement demandés et les points de vigilance à anticiper avant expédition.",
  },
};

const mainSteps = [
  {
    title: "Identifier la marchandise",
    description:
      "La première étape consiste à comprendre précisément le produit concerné, ses caractéristiques, son usage et les éventuelles contraintes qui peuvent s’appliquer avant son entrée sur le marché marocain.",
  },
  {
    title: "Vérifier les documents disponibles",
    description:
      "Les documents transmis par le fournisseur, le transporteur ou les intervenants doivent être cohérents avec la marchandise, l’origine, la valeur et les informations nécessaires au traitement du dossier.",
  },
  {
    title: "Anticiper l’expédition",
    description:
      "Avant le départ de Chine, il est utile de vérifier les points sensibles afin de limiter les corrections tardives, les incompréhensions ou les retards liés à un dossier incomplet.",
  },
];

const documentItems = [
  "Facture commerciale",
  "Liste de colisage",
  "Document de transport",
  "Informations fournisseur et acheteur",
  "Description claire de la marchandise",
  "Documents spécifiques selon la nature du produit",
];

const vigilanceItems = [
  "Description de marchandise trop vague ou incohérente",
  "Documents transmis tardivement ou incomplets",
  "Classification ou réglementation à vérifier avant expédition",
  "Différence entre les informations fournisseur et les documents reçus",
  "Coûts logistiques ou administratifs sous-estimés",
  "Marchandise sensible nécessitant une étude au cas par cas",
];

const preparationItems = [
  {
    title: "Rassembler les éléments essentiels",
    description:
      "Avant d’avancer, il est préférable de réunir les informations sur la marchandise, le fournisseur, le pays d’origine, la destination au Maroc et les documents déjà disponibles.",
  },
  {
    title: "Vérifier les points à risque",
    description:
      "Certaines opérations peuvent demander une attention particulière selon la nature du produit, les exigences applicables ou la qualité des informations transmises.",
  },
  {
    title: "Cadrer la suite du dossier",
    description:
      "Une première lecture permet de mieux comprendre les étapes à prévoir, les coûts potentiels et le périmètre d’accompagnement possible selon votre situation.",
  },
];

const relatedResources = [
  {
    href: "/preparer-importation-maroc",
    title: "Préparer une importation vers le Maroc",
    description:
      "Revenir à la méthode globale pour organiser les documents, les échanges fournisseur et les points de vigilance.",
  },
  {
    href: "/documents-import-maroc",
    title: "Documents import Maroc",
    description:
      "Comprendre les documents fréquemment rencontrés et les vérifications utiles avant expédition.",
  },
  {
    href: "/erreurs-import-maroc",
    title: "Erreurs import Maroc",
    description:
      "Identifier les situations qui peuvent compliquer une opération lorsque le dossier est insuffisamment préparé.",
  },
];

export default function ImporterChineMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Import Chine Maroc</p>
          <h1 className="page-title">
            Importer de Chine vers le Maroc : préparer son opération
            correctement
          </h1>
          <p className="body-lead">
            Une importation depuis la Chine vers le Maroc demande une
            préparation sérieuse avant expédition. Les documents, la nature de
            la marchandise, le transport et les exigences applicables doivent
            être compris avec méthode pour avancer sur des bases plus claires.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="chine_maroc_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/accompagnement-import-maroc"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="chine_maroc_hero_accompagnement"
              className="btn-secondary"
            >
              Comprendre l’accompagnement
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Étapes</p>
            <h2 className="section-title">
              Comprendre les étapes principales.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Importer depuis la Chine ne se limite pas à organiser un
              transport. L’opération implique une lecture du produit, des
              documents, des modalités d’expédition et des exigences applicables
              à l’entrée au Maroc.
            </p>
            <p>
              Plus ces éléments sont clarifiés en amont, plus il devient
              possible d’identifier les points à vérifier avant de prendre des
              engagements opérationnels.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Méthode</p>
            <h2 className="section-title">
              Une préparation progressive avant expédition.
            </h2>
            <p className="section-copy">
              Chaque dossier dépend de la marchandise, des documents
              disponibles, du fournisseur, de l’origine et des exigences
              applicables. La préparation doit donc rester concrète et adaptée à
              votre situation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {mainSteps.map((step, index) => (
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
              Documents généralement demandés.
            </h2>
            <p className="section-copy">
              Les documents peuvent varier selon le produit, le fournisseur et
              les exigences applicables. Cette liste donne un premier cadre de
              lecture, sans remplacer l’étude du dossier.
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
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Avant expédition</p>
            <h2 className="section-title">
              Anticiper les contraintes avant expédition.
            </h2>
            <p className="section-copy">
              Une difficulté fréquente apparaît lorsque la marchandise quitte le
              pays d’origine alors que certaines informations n’ont pas encore
              été vérifiées. Lorsque cela arrive, les corrections peuvent devenir
              plus complexes et ralentir la suite du traitement.
            </p>
          </div>

          <div className="mt-10 rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8">
            <p className="max-w-4xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              Avant expédition, il est recommandé de vérifier la cohérence des
              documents, la description du produit, les informations fournisseur,
              les exigences possibles et les éléments de coût à prévoir. Transit’s
              Now peut vous aider à structurer cette première lecture selon votre
              dossier.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Vigilance</p>
            <h2 className="section-title">
              Points de vigilance fréquents.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vigilanceItems.map((item) => (
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
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Coûts</p>
            <h2 className="section-title">
              Coûts et éléments à prévoir.
            </h2>
          </div>

          <div className="space-y-5 rounded-[16px] border border-[#E7E2DA] bg-white p-6 text-base leading-7 text-[#5F6368] shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 sm:text-lg sm:leading-8">
            <p>
              Les coûts d’une importation depuis la Chine vers le Maroc peuvent
              dépendre du type de marchandise, du volume, du transport, des
              documents disponibles, des frais liés au traitement et des
              exigences applicables.
            </p>
            <p>
              Une première visibilité peut être recherchée après étude du
              dossier. Elle reste liée aux informations disponibles et ne doit
              pas être confondue avec une estimation automatique.
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
              Les difficultés proviennent souvent d’un manque d’alignement entre
              la marchandise réelle, les documents transmis, les informations du
              fournisseur et les exigences applicables au Maroc.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {preparationItems.map((item) => (
              <article key={item.title} className="card-muted">
                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Dossier</p>
              <h2 className="section-title">
                Préparer son dossier en amont.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                La préparation en amont permet d’identifier les informations
                utiles, les documents à organiser et les points qui demandent
                une vérification avant de poursuivre l’opération.
              </p>
              <p>
                Pour mieux comprendre le périmètre possible, vous pouvez
                consulter nos{" "}
                <a
                  href="/services"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  services d’accompagnement
                </a>{" "}
                ou notre page dédiée à{" "}
                <a
                  href="/accompagnement-import-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  l’accompagnement import Maroc
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Ressources liées</p>
            <h2 className="section-title">
              Situer cette opération dans une préparation plus large.
            </h2>
            <p className="section-copy">
              Ces ressources permettent de relier l’importation depuis la Chine
              aux autres sujets de préparation du dossier.
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
              Vous préparez une importation depuis la Chine ?
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
              data-track-label="chine_maroc_final_contact"
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
