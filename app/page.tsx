export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Transit Now
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Importer vers le Maroc devient plus clair, plus sûr et mieux accompagné.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
          Transit Now accompagne les professionnels au Maroc et à l’étranger dans
          leurs démarches d’importation, de transit et de dédouanement vers le
          Maroc. Chaque dossier est étudié au cas par cas.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Demander un accompagnement
          </a>

          <a
            href="#services"
            className="rounded-full border border-neutral-300 px-7 py-4 text-sm font-semibold transition hover:border-black"
          >
            Voir les services
          </a>
        </div>
      </section>
    </main>
  );
}