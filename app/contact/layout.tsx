import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Transit’s Now pour présenter votre projet d’importation, les éléments disponibles et la marchandise concernée.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Transit’s Now",
    description:
      "Contactez Transit’s Now pour présenter votre projet d’importation, les éléments disponibles et la marchandise concernée.",
    url: "/contact",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Transit’s Now",
    description:
      "Contactez Transit’s Now pour présenter votre projet d’importation, les éléments disponibles et la marchandise concernée.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
