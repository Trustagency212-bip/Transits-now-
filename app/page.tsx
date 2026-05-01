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

const dossierOptions = [
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

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Importer vers le Maroc", href: "#importer" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main id="accueil" className="min-h-screen bg-[#F8F6F2] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#E7E2DA] bg-[#F8F6F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#accueil" className="text-lg font-bold tracking-tight">
            Transit’s Now
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#5F6368] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-[#111111]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/212600000000"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#C62828] sm:min-h-11 sm:px-5 sm:text-sm"
          >
            Échanger sur WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C62828] sm:text-sm">
            Importation B2B vers le Maroc
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            Importez vers le Maroc avec un accompagnement clair, structuré et
            professionnel.
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C62828] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#111111] sm:px-7"
            >
              Demander un accompagnement
            </a>
            <a
              href="https://wa.me/212600000000"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#111111] bg-white px-6 py-3 text-center text-sm font-bold text-[#111111] transition hover:border-[#F57C00] hover:text-[#C62828] sm:px-7"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#E7E2DA] bg-white p-5 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-7">
          <div className="rounded-3xl bg-[#111111] p-6 text-white">
            <p className="text-sm font-semibold text-[#F57C00]">
              Cadre d’accompagnement
            </p>
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Import Maroc
            </p>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Une lecture claire du dossier, des documents disponibles et des
              étapes à prévoir avant d’avancer.
            </p>
          </div>

          <div className="mt-5 grid gap-3 text-sm">
            {["Analyse du dossier", "Documents à préparer", "Étapes applicables"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[#E7E2DA] bg-[#F8F6F2] px-4 py-3"
                >
                  <span className="font-medium text-[#111111]">{item}</span>
                  <span
                    className={
                      index === 0
                        ? "font-bold text-[#C62828]"
                        : index === 1
                          ? "font-bold text-[#F57C00]"
                          : "font-bold text-[#2E7D32]"
                    }
                  >
                    {index + 1}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="importer" className="border-y border-[#E7E2DA] bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C62828] sm:text-sm">
              Pour qui ?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Vous souhaitez importer vers le Maroc ?
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              Transit’s Now s’adresse aux professionnels qui souhaitent
              structurer une opération d’importation vers le marché marocain,
              qu’ils soient déjà installés au Maroc ou basés à l’étranger.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#E7E2DA] bg-[#F8F6F2] p-6"
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

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F57C00] sm:text-sm">
              Dossier
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Une solution étudiée selon votre dossier.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              <p>
                Chaque opération d’importation dépend de la marchandise, des
                documents disponibles, de la structure du client et des
                exigences administratives ou douanières applicables.
              </p>
              <p>
                Transit’s Now analyse votre situation afin d’identifier
                l’accompagnement le plus adapté, sans promesse automatique ni
                solution standardisée.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dossierOptions.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#E7E2DA] bg-white p-6 shadow-[0_16px_50px_rgba(17,17,17,0.05)]"
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

      <section id="services" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C62828] sm:text-sm">
              Services clés
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              L’essentiel pour avancer avec clarté.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              Transit’s Now vous accompagne sur les étapes importantes de votre
              opération d’importation, depuis la compréhension des démarches
              jusqu’au suivi du dossier, selon votre situation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#E7E2DA] bg-[#F8F6F2] p-6"
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

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E7E2DA] bg-white p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2E7D32] sm:text-sm">
              Cadre d’intervention
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
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

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F57C00] sm:text-sm">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Comment se déroule l’accompagnement ?
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
              L’accompagnement commence par un échange clair sur votre
              situation, puis se poursuit par une étude du dossier avant de
              définir les étapes adaptées à votre opération.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[#E7E2DA] bg-[#F8F6F2] p-6"
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

      <section className="bg-[#111111] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F57C00] sm:text-sm">
              Prochaine étape
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C62828] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#111111]"
            >
              Demander un accompagnement
            </a>
            <a
              href="https://wa.me/212600000000"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-5 pb-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-bold tracking-tight">Transit’s Now</p>
            <p className="mt-3 text-lg font-semibold text-white">
              Du début à la fin.
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Accompagnement professionnel pour les opérations d’importation
              vers le marché marocain.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
              Liens
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href="https://wa.me/212600000000" className="hover:text-white">
                WhatsApp
              </a>
              <a href="mailto:contact@transitsnow.ma" className="hover:text-white">
                Email
              </a>
              <a href="/contact" className="hover:text-white">
                Formulaire de contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
