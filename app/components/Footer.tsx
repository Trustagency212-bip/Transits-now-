const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Importer vers le Maroc", href: "/importer-vers-le-maroc" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/212721142767",
    event: "click_whatsapp",
    trackingLabel: "footer_whatsapp",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.2 18.8 6.1 15A7.2 7.2 0 1 1 9 17.9l-3.8.9Z" />
        <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.5 1.2c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.1 2.1l.5-.4c.2-.2.4-.2.7-.1l1.2.5c.3.1.4.3.4.6v.4c0 .4-.1.6-.4.8-.4.3-.9.4-1.4.4-2.5 0-5.7-3.1-5.7-5.6 0-.5.1-1 .4-1.4Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/transits-now/",
    event: undefined,
    trackingLabel: undefined,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M6.94 8.94H3.72V20h3.22V8.94ZM5.33 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72Zm14.95 9.65c0-3.18-1.7-4.98-4.38-4.98a3.77 3.77 0 0 0-3.4 1.87v-1.6H9.42V20h3.22v-5.47c0-1.44.27-2.83 2.06-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.22v-6.35h.58Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/transitsnow212",
    event: undefined,
    trackingLabel: undefined,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="4.2" />
        <circle cx="12" cy="12" r="3.3" />
        <path d="M16.75 7.25h.01" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E2DA] bg-[#111111] py-10 text-white">
      <div className="site-container grid gap-10 md:grid-cols-[1.35fr_0.75fr_0.75fr_0.75fr]">
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
            <a
              href="mailto:contact@transitsnow.com"
              data-track-event="click_contact"
              data-track-category="contact"
              data-track-label="footer_email"
              className="hover:text-white"
            >
              contact@transitsnow.com
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-track-event={link.event}
                data-track-category={link.event ? "contact" : undefined}
                data-track-label={link.trackingLabel}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 text-white/60 transition duration-200 hover:border-white/35 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
            Mentions
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="hover:text-white">
              Confidentialité
            </a>
            <p>© Transit’s Now</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
