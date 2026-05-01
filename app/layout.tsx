import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transit Now — Importation, transit et dédouanement vers le Maroc",
  description:
    "Accompagnement professionnel pour les opérations d’importation, de transit, de dédouanement et de constitution de dossier vers le marché marocain.",
  keywords: [
    "importation Maroc",
    "transit Maroc",
    "dédouanement Maroc",
    "accompagnement importation Maroc",
    "constitution dossier importation",
    "suivi administratif importation",
    "importer vers le Maroc",
    "professionnels Maroc",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Transit Now — Importation vers le Maroc",
    description:
      "Accompagnement professionnel pour les opérations d’importation, de transit et de dédouanement vers le marché marocain.",
    type: "website",
    locale: "fr_FR",
    siteName: "Transit Now",
  },
  twitter: {
    card: "summary",
    title: "Transit Now — Importation vers le Maroc",
    description:
      "Accompagnement professionnel pour les opérations d’importation, de transit et de dédouanement vers le marché marocain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
