import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/empresa";

const languages = { "pt-BR": `${SITE_URL}/`, "es-UY": `${SITE_URL}/es` };

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
