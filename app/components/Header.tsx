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
    <header className="sticky top-0 z-20 border-b border-[#E7E2DA] bg-white">
      <div className="site-container flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex h-10 w-36 shrink-0 items-center transition hover:opacity-85 sm:h-12 sm:w-44"
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
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#C62828] sm:min-h-11 sm:px-5 sm:text-sm lg:hidden"
          >
            Demander un accompagnement
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E7E2DA] pt-3 lg:flex-row lg:items-center lg:gap-7 lg:border-t-0 lg:pt-0">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#5F6368]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-[#111111]"
                    : "transition hover:text-[#111111]"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            className="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-[#111111] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#C62828] lg:inline-flex"
          >
            Demander un accompagnement
          </a>
        </div>
      </div>
    </header>
  );
}
