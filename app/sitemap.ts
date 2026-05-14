import type { MetadataRoute } from "next";

const siteUrl = "https://transitnow.ma";

const routes = ["/", "/services", "/contact", "/importer-vers-le-maroc"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
