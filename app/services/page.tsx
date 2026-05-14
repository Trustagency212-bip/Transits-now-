const services = [
  {
    title: "Conseil avant importation",
    paragraphs: [
      "Nous vous aidons à comprendre les démarches à prévoir avant d’engager une opération d’importation vers le Maroc.",
      "Cet accompagnement permet d’identifier les premiers points de vigilance : nature de la marchandise, documents nécessaires, contraintes possibles et étapes à anticiper.",
    ],
  },
  {
    title: "Évaluation préliminaire des coûts",
    paragraphs: [
      "Nous vous aidons à obtenir une première visibilité sur les coûts potentiels liés à votre opération.",
      "Cette évaluation reste préliminaire et dépend notamment de la marchandise, du transport, des documents disponibles et des exigences applicables.",
    ],
  },
  {
    title: "Préparation et vérification du dossier",
    paragraphs: [
      "Nous vous accompagnons dans l’organisation et la vérification des documents nécessaires au traitement de votre opération.",
      "L’objectif est de limiter les erreurs, les oublis ou les incohérences pouvant ralentir l’avancement du dossier.",
    ],
  },
  {
    title: "Accompagnement administratif et douanier",
    paragraphs: [
      "Nous vous accompagnons dans les démarches administratives et douanières liées à l’entrée de votre marchandise sur le marché marocain.",
      "Cet accompagnement se fait selon la nature du dossier, les exigences applicables et les documents disponibles.",
    ],
  },
  {
    title: "Solution étudiée selon le dossier",
    paragraphs: [
      "Lorsque la situation nécessite un cadre spécifique, nous étudions votre dossier afin d’identifier si une solution d’accompagnement adaptée peut être proposée.",
      "Chaque demande est analysée au cas par cas, sans promesse automatique.",
    ],
  },
  {
    title: "Transport et livraison selon le dossier",
    paragraphs: [
      "Lorsque cela est pertinent, nous pouvons vous accompagner ou vous orienter sur les aspects liés au transport et à la livraison.",
      "Cette partie dépend de la marchandise, de l’origine, de la destination et de la solution retenue.",
    ],
  },
];

const clarityPoints = [
  "La nature de la marchandise",
  "Les documents disponibles",
  "Les étapes à prévoir",
  "Les coûts potentiels",
  "La faisabilité de l’accompagnement",
];

const exclusions = [
  "Nous ne faisons pas de sourcing fournisseur",
  "Nous ne proposons pas de solution automatique",
  "Nous n’acceptons pas les dossiers sans étude préalable",
  "Nous n’accompagnons pas les marchandises interdites ou non conformes",
  "Nous ne proposons pas de grille tarifaire standardisée",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">
            Services
          </p>
          <h1 className="page-title">
            Des services pensés pour structurer votre opération d’importation
            vers le Maroc.
          </h1>
          <p className="body-lead">
            Transit’s Now accompagne les professionnels dans les étapes clés de
            leur projet d’importation : compréhension des démarches,
            préparation du dossier, visibilité sur les coûts potentiels et
            accompagnement administratif ou douanier selon la situation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Nos services
            </p>
            <h2 className="section-title">
              Nos services d’accompagnement à l’importation.
            </h2>
            <p className="section-copy">
              Chaque service est mobilisé selon votre situation, la nature de
              votre marchandise, les documents disponibles et les exigences
              applicables à votre dossier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card-muted"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#C62828] ring-1 ring-[#E7E2DA]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                      {service.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">
              Clarifier
            </p>
            <h2 className="section-title">
              Ce que nous vous aidons à clarifier.
            </h2>
            <p className="section-copy">
              Avant d’avancer dans une opération d’importation, plusieurs
              éléments doivent être compris, vérifiés ou anticipés. Transit’s Now
              vous aide à obtenir une première lecture claire de votre situation
              afin de mieux structurer votre dossier.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {clarityPoints.map((point) => (
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
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">
              Périmètre
            </p>
            <h2 className="section-title">
              Ce que Transit’s Now ne fait pas.
            </h2>
            <p className="section-copy">
              Pour garantir un accompagnement clair et sérieux, Transit’s Now
              intervient dans un cadre précis. Certaines demandes ne
              correspondent pas à notre périmètre d’intervention.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] p-5 sm:p-6">
            <ul className="grid gap-3 text-sm leading-6 text-[#5F6368] sm:text-base">
              {exclusions.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[#E7E2DA] bg-white px-4 py-3"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-2xl border border-[#E7E2DA] bg-white p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="section-kicker">
              Marchandises sensibles
            </p>
            <h2 className="section-title">
              Marchandises sensibles, réglementées ou interdites.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 text-base leading-7 text-[#5F6368] lg:grid-cols-3">
            <p>
              Transit’s Now accompagne uniquement les opérations portant sur des
              marchandises autorisées et conformes aux exigences applicables.
            </p>
            <p>
              Certaines marchandises peuvent être soumises à des règles
              particulières, autorisations spécifiques ou vérifications
              complémentaires. Ces situations sont étudiées au cas par cas avant
              toute proposition d’accompagnement.
            </p>
            <p>
              Les marchandises interdites, dangereuses ou non conformes ne sont
              pas accompagnées.
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
              Vous souhaitez structurer votre opération d’importation ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Contactez Transit’s Now afin d’échanger sur votre situation, les
              éléments déjà disponibles et la marchandise concernée. Après
              étude, nous pourrons identifier l’accompagnement adapté à votre
              dossier.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="/contact"
              className="btn-on-dark"
            >
              Demander un accompagnement
            </a>
            <a
              href="/contact"
              className="btn-outline-dark"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
