const audiences = [
  {
    title: "Professionnels au Maroc",
    description:
      "Vous disposez d’une société au Maroc et souhaitez être accompagné dans la préparation, la vérification et le suivi de vos démarches d’importation.",
  },
  {
    title: "Professionnels à l’étranger",
    description:
      "Vous êtes basé hors du Maroc et souhaitez faire entrer une marchandise sur le marché marocain avec plus de clarté sur les étapes à prévoir.",
  },
  {
    title: "Entreprises visant le Maroc",
    description:
      "Vous avez un client, une opportunité ou un marché au Maroc et souhaitez organiser votre opération avec un cadre plus clair.",
  },
];

const dossierCards = [
  {
    title: "Vous avez une structure locale",
    description:
      "Nous vous accompagnons dans la préparation, la vérification et le suivi de votre dossier d’importation au Maroc.",
  },
  {
    title: "Vous n’avez pas de structure locale adaptée",
    description:
      "Nous étudions votre situation afin de déterminer si une solution d’accompagnement peut être proposée selon votre dossier.",
  },
];

const services = [
  {
    title: "Conseil avant importation",
    description:
      "Comprendre les démarches, les documents nécessaires et les points à vérifier avant de lancer l’opération.",
  },
  {
    title: "Préparation et vérification du dossier",
    description:
      "Organiser les documents, contrôler les éléments importants et limiter les erreurs ou oublis pouvant ralentir le traitement.",
  },
  {
    title: "Accompagnement administratif et douanier",
    description:
      "Vous accompagner dans les étapes liées à l’entrée de votre marchandise sur le territoire marocain, selon les exigences applicables.",
  },
  {
    title: "Évaluation préliminaire des coûts",
    description:
      "Obtenir une première visibilité sur les frais, démarches et coûts potentiels à prévoir avant d’avancer.",
  },
  {
    title: "Solution étudiée selon le dossier",
    description:
      "Analyser votre situation afin d’identifier une solution d’accompagnement adaptée lorsque le dossier nécessite un cadre spécifique.",
  },
  {
    title: "Transport et livraison selon le dossier",
    description:
      "Vous accompagner ou vous orienter sur la partie transport et livraison lorsque cela est pertinent pour votre opération.",
  },
];

const processSteps = [
  {
    title: "Échange initial",
    description:
      "Vous nous expliquez votre situation, la marchandise concernée, les documents disponibles et votre objectif au Maroc.",
  },
  {
    title: "Étude du dossier",
    description:
      "Nous analysons les informations transmises, les documents existants et les démarches à prévoir selon les exigences applicables.",
  },
  {
    title: "Accompagnement jusqu’à finalisation",
    description:
      "Nous vous accompagnons dans les étapes retenues selon la solution proposée et la nature de votre dossier.",
  },
];

export default function Home() {
  return (
    <main id="accueil" className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <section className="site-container grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-24">
        <div>
          <p className="section-kicker">
            Importation B2B vers le Maroc
          </p>

          <h1 className="page-title max-w-5xl">
            Importez vers le Maroc avec un accompagnement clair, structuré et
            professionnel.
          </h1>

          <div className="body-lead space-y-4">
            <p>
              Transit’s Now accompagne les professionnels basés au Maroc et à
              l’étranger dans leurs opérations d’importation vers le marché
              marocain.
            </p>
            <p>
              Nous vous aidons à comprendre les démarches, préparer votre
              dossier et obtenir une première visibilité sur les étapes,
              documents et coûts à prévoir, selon votre situation.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="btn-primary"
            >
              Demander un accompagnement
            </a>
            <a
              href="https://wa.me/212721142767"
              className="btn-secondary"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>

        <div className="card shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F6368]">
            Points de vigilance
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Dossier étudié avant accompagnement",
              "Marchandises autorisées uniquement",
              "Professionnels au Maroc et à l’étranger",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] px-4 py-4"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2E7D32]" />
                <span className="text-sm font-semibold leading-6 text-[#111111] sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="importer" className="site-section-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Pour qui ?
            </p>
            <h2 className="section-title">
              Vous souhaitez importer vers le Maroc ?
            </h2>
            <p className="section-copy">
              Transit’s Now s’adresse aux professionnels qui souhaitent
              structurer une opération d’importation vers le marché marocain,
              qu’ils soient déjà installés au Maroc ou basés à l’étranger.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audiences.map((item) => (
              <article
                key={item.title}
                className="card-muted"
              >
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
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">
              Dossier
            </p>
            <h2 className="section-title">
              Une solution étudiée selon votre dossier.
            </h2>
            <div className="section-copy space-y-4">
              <p>
                Chaque opération d’importation est spécifique. La marchandise,
                les documents disponibles, la structure du client et les
                exigences applicables peuvent varier fortement d’un dossier à
                l’autre.
              </p>
              <p>
                Transit’s Now analyse votre situation avec méthode afin de vous
                orienter vers un accompagnement clair, prudent et adapté à votre
                dossier.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {dossierCards.map((item) => (
              <article
                key={item.title}
                className="card"
              >
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

      <section id="services" className="site-section bg-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Services clés
            </p>
            <h2 className="section-title">
              L’essentiel pour avancer avec clarté.
            </h2>
            <p className="section-copy">
              Transit’s Now vous accompagne sur les étapes importantes de votre
              opération d’importation, depuis la compréhension des démarches
              jusqu’au suivi du dossier, selon votre situation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="card-muted"
              >
                <h3 className="text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="section-inner rounded-2xl border border-[#E7E2DA] bg-white p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="section-kicker">
              Cadre d’intervention
            </p>
            <h2 className="section-title">
              Un cadre clair dès le départ.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 text-base leading-7 text-[#5F6368] lg:grid-cols-3">
            <p>
              Transit’s Now intervient lorsque votre projet, votre marchandise
              ou votre fournisseur sont déjà identifiés. Nous ne faisons pas de
              sourcing fournisseur.
            </p>
            <p>
              Chaque demande est étudiée selon la nature de la marchandise, les
              documents disponibles et les exigences applicables.
            </p>
            <p>
              Les marchandises autorisées peuvent être accompagnées selon le
              dossier. Les marchandises sensibles ou réglementées sont étudiées
              au cas par cas. Les marchandises interdites, dangereuses ou non
              conformes ne sont pas accompagnées.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-kicker">
              Process
            </p>
            <h2 className="section-title">
              Comment se déroule l’accompagnement ?
            </h2>
            <p className="section-copy">
              L’accompagnement commence par un échange clair sur votre
              situation, puis se poursuit par une étude du dossier avant de
              définir les étapes adaptées à votre opération.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="card-muted"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white">
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

      <section id="contact" className="site-section bg-[#111111] text-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Prochaine étape
            </p>
            <h2 className="section-title">
              Vous souhaitez importer vers le marché marocain ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Contactez Transit’s Now afin d’échanger sur votre situation, votre
              marchandise et les éléments déjà disponibles, puis identifier
              l’accompagnement le plus adapté à votre dossier.
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
              href="https://wa.me/212721142767"
              className="btn-outline-dark"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
