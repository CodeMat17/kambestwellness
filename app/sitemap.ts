import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(site.contentUpdatedIso),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/opengraph-image.jpg`],
    },
  ];
}
