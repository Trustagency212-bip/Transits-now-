import type { MetadataRoute } from "next";

const siteUrl = "https://transitsnow.com";

const routes = [
  "/",
  "/services",
  "/contact",
  "/importer-vers-le-maroc",
  "/accompagnement-import-maroc",
  "/importer-chine-maroc",
  "/documents-import-maroc",
  "/erreurs-import-maroc",
  "/code-sh-maroc",
  "/importer-turquie-maroc",
  "/preparer-importation-maroc",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
