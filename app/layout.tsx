import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
  metadataBase: new URL("https://transitnow.ma"),
  title: {
    default: "Transit’s Now — Importer vers le Maroc",
    template: "%s | Transit’s Now",
  },
  description:
    "Accompagnement professionnel pour les opérations d’importation vers le marché marocain.",
  openGraph: {
    title: "Transit’s Now — Importer vers le Maroc",
    description:
      "Accompagnement professionnel pour les opérations d’importation vers le marché marocain.",
    url: "/",
    siteName: "Transit’s Now",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Transit’s Now — Importer vers le Maroc",
    description:
      "Accompagnement professionnel pour les opérations d’importation vers le marché marocain.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
