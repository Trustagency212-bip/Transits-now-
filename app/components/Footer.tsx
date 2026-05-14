const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Importer vers le Maroc", href: "/importer-vers-le-maroc" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E2DA] bg-[#111111] px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.35fr_0.75fr_0.75fr_0.75fr]">
        <div>
          <p className="text-xl font-bold tracking-tight">Transit’s Now</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
            Accompagnement des professionnels dans la structuration de leurs
            opérations d’importation vers le Maroc, selon leur dossier et les
            exigences applicables.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
            Navigation
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
            <p>Email à confirmer</p>
            <p>Téléphone à confirmer</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
            Mentions
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p>Mentions légales</p>
            <p>© Transit’s Now</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
