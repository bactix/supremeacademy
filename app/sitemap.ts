import type { MetadataRoute } from "next";
import { PROGRAMS } from "./lib/programs-data";
import { SITE_URL } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...PROGRAMS.map((p) => ({
      url: `${SITE_URL}/programs/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
