"use client";

import { usePathname } from "next/navigation";

const logoSrc = "/logo.png?v=2";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Importer", href: "/importer-vers-le-maroc" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[#E7E2DA] bg-white/95">
      <div className="site-container flex flex-col gap-3 py-3 lg:min-h-[78px] lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex h-10 w-[8.5rem] shrink-0 items-center transition duration-200 hover:opacity-85 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]/15 sm:h-11 sm:w-[10.5rem] lg:h-12 lg:w-44"
            aria-label="Transit’s Now - Accueil"
          >
            <img
              src={logoSrc}
              alt="Transit’s Now"
              width={1536}
              height={1024}
              className="h-full w-full object-contain object-left"
            />
          </a>

          <a
            href="/contact"
            data-track-event="click_contact"
            data-track-category="cta"
            data-track-label="header_mobile_demander_accompagnement"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_22px_rgba(17,17,17,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#C62828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-11 sm:px-5 sm:text-sm lg:hidden"
          >
            Demander un accompagnement
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E7E2DA] pt-3 lg:flex-row lg:items-center lg:gap-8 lg:border-t-0 lg:pt-0">
          <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm font-medium text-[#5F6368] lg:gap-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  pathname === link.href
                    ? "rounded-full bg-[#F8F6F2] px-3.5 py-2 text-[#111111]"
                    : "rounded-full px-3.5 py-2 transition duration-200 hover:bg-[#F8F6F2] hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]/15"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            data-track-event="click_contact"
            data-track-category="cta"
            data-track-label="header_desktop_demander_accompagnement"
            className="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-[#111111] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(17,17,17,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#C62828] hover:shadow-[0_14px_28px_rgba(17,17,17,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:inline-flex"
          >
            Demander un accompagnement
          </a>
        </div>
      </div>
    </header>
  );
}
