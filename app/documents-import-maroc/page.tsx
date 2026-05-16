import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents import Maroc | Préparer son dossier correctement",
  description:
    "Comprendre les principaux documents utilisés dans une opération d’importation vers le Maroc et les points de vigilance à anticiper selon la marchandise et le dossier.",
  alternates: {
    canonical: "/documents-import-maroc",
  },
  openGraph: {
    title: "Documents import Maroc | Préparer son dossier correctement",
    description:
      "Comprendre les principaux documents utilisés dans une opération d’importation vers le Maroc et les points de vigilance à anticiper selon la marchandise et le dossier.",
    url: "/documents-import-maroc",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Documents import Maroc | Préparer son dossier correctement",
    description:
      "Comprendre les principaux documents utilisés dans une opération d’importation vers le Maroc et les points de vigilance à anticiper selon la marchandise et le dossier.",
  },
};

const frequentDocuments = [
  "Facture commerciale",
  "Packing list",
  "Document de transport",
  "Informations fournisseur et acheteur",
  "Description précise de la marchandise",
  "Certificats ou documents spécifiques selon le dossier",
];

const documentBlocks = [
  {
    title: "Facture commerciale",
    description:
      "La facture commerciale permet d’identifier les parties, la marchandise, les quantités, la valeur et les conditions liées à l’opération. Elle doit rester cohérente avec les autres documents transmis.",
  },
  {
    title: "Packing list",
    description:
      "La packing list détaille généralement le conditionnement, le nombre de colis, le poids, le volume et les informations utiles à la lecture logistique du dossier.",
  },
  {
    title: "Documents de transport",
    description:
      "Les documents de transport varient selon le mode retenu. Ils permettent de suivre l’expédition et doivent correspondre aux informations essentielles de l’opération.",
  },
];

const complexityPoints = [
  "Informations différentes entre la facture, la packing list et le transport",
  "Description de marchandise imprécise ou trop générale",
  "Documents transmis après expédition, avec peu de marge de correction",
  "Certificats ou autorisations nécessaires mais non anticipés",
  "Marchandise sensible ou réglementée nécessitant une étude au cas par cas",
  "Origine, valeur ou quantités insuffisamment documentées",
];

const verificationItems = [
  {
    title: "Comparer les informations",
    description:
      "Les éléments présents sur la facture, la packing list et les documents de transport doivent être lus ensemble afin d’identifier les incohérences possibles.",
  },
  {
    title: "Qualifier la marchandise",
    description:
      "La nature exacte du produit influence les documents à préparer et les vérifications à prévoir selon les exigences applicables.",
  },
  {
    title: "Prévoir les pièces complémentaires",
    description:
      "Certains dossiers peuvent nécessiter des documents spécifiques. Cette possibilité doit être étudiée avant d’engager l’opération trop loin.",
  },
];

const relatedResources = [
  {
    href: "/preparer-importation-maroc",
    title: "Préparer une importation vers le Maroc",
    description:
      "Replacer la préparation documentaire dans une méthode plus large avant importation.",
  },
  {
    href: "/code-sh-maroc",
    title: "Code SH Maroc",
    description:
      "Comprendre le lien entre classification, documents et exigences applicables.",
  },
  {
    href: "/erreurs-import-maroc",
    title: "Erreurs import Maroc",
    description:
      "Identifier les incohérences documentaires qui peuvent compliquer un dossier.",
  },
];

export default function DocumentsImportMarocPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Documents import Maroc</p>
          <h1 className="page-title">
            Documents import Maroc : préparer son dossier avec méthode
          </h1>
          <p className="body-lead">
            Les documents d’importation jouent un rôle central dans la lecture
            d’un dossier. Leur cohérence, leur précision et leur disponibilité
            influencent la manière d’avancer selon la marchandise, l’origine et
            les exigences applicables.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="documents_import_hero_contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/services"
              data-track-event="click_contact"
              data-track-category="cta"
              data-track-label="documents_import_hero_services"
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
            <p className="section-kicker">Importance</p>
            <h2 className="section-title">
              Pourquoi les documents sont importants.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            <p>
              Une opération d’importation vers le Maroc repose sur des
              informations qui doivent être compréhensibles, cohérentes et
              exploitables. Les documents permettent de relier la marchandise,
              le fournisseur, l’acheteur, le transport et les éléments utiles au
              traitement du dossier.
            </p>
            <p>
              Les exigences peuvent varier selon le type de produit, les
              documents disponibles et la situation du client. Une préparation
              sérieuse consiste donc à vérifier les éléments avant que le dossier
              ne devienne difficile à corriger.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Repères</p>
            <h2 className="section-title">
              Les documents fréquemment rencontrés.
            </h2>
            <p className="section-copy">
              Les documents ci-dessous sont souvent présents dans une opération
              d’importation. Leur contenu, leur forme et leur rôle doivent être
              analysés selon le dossier.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frequentDocuments.map((document) => (
              <div
                key={document}
                className="rounded-[14px] border border-[#E7E2DA] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#111111] shadow-[0_10px_30px_rgba(17,17,17,0.025)]"
              >
                {document}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Documents clés</p>
            <h2 className="section-title">
              Facture commerciale, packing list et documents de transport.
            </h2>
            <p className="section-copy">
              Ces documents donnent une première lecture de l’opération. Ils ne
              suffisent pas toujours à eux seuls, mais ils constituent souvent
              une base importante pour préparer le dossier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {documentBlocks.map((block) => (
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
            <p className="section-kicker">Spécifique</p>
            <h2 className="section-title">
              Certificats et documents spécifiques.
            </h2>
          </div>

          <div className="rounded-[16px] border border-[#E7E2DA] bg-white p-6 shadow-[0_18px_55px_rgba(17,17,17,0.045)] sm:p-8">
            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Certaines marchandises peuvent nécessiter des certificats,
                autorisations, attestations ou documents complémentaires. Leur
                présence dépend notamment de la nature du produit et des
                exigences applicables.
              </p>
              <p>
                Les marchandises sensibles ou réglementées doivent être étudiées
                au cas par cas. Les marchandises interdites, dangereuses ou non
                conformes ne peuvent pas être accompagnées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Complexité</p>
            <h2 className="section-title">
              Pourquoi certains dossiers se compliquent.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {complexityPoints.map((point) => (
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
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Vérifications</p>
            <h2 className="section-title">
              Vérifications utiles avant expédition.
            </h2>
            <p className="section-copy">
              Une partie des difficultés peut être limitée lorsque les documents
              sont lus avant expédition, avec une attention particulière portée à
              la cohérence des informations et aux exigences possibles.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {verificationItems.map((item, index) => (
              <article key={item.title} className="card">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F6F2] text-sm font-bold text-[#C62828] ring-1 ring-[#E7E2DA]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">
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

      <section className="site-section-white">
        <div className="section-inner rounded-[16px] border border-[#E7E2DA] bg-[#F8F6F2] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Préparation</p>
              <h2 className="section-title">
                Préparer son dossier en amont.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Préparer un dossier consiste à réunir les documents disponibles,
                vérifier leur cohérence et identifier les points qui doivent
                être clarifiés avant d’avancer.
              </p>
              <p>
                Cette étape peut être particulièrement utile pour les opérations
                depuis l’étranger, notamment lorsque vous préparez une{" "}
                <a
                  href="/importer-chine-maroc"
                  className="font-semibold text-[#111111] underline decoration-[#C62828]/35 underline-offset-4 transition hover:text-[#C62828]"
                >
                  importation depuis la Chine vers le Maroc
                </a>
                .
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
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">Ressources liées</p>
            <h2 className="section-title">
              Continuer la préparation du dossier.
            </h2>
            <p className="section-copy">
              Ces ressources complètent la lecture documentaire avec la méthode,
              la classification et les points de vigilance.
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
              Vous souhaitez vérifier les documents de votre dossier ?
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
              data-track-label="documents_import_final_contact"
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
