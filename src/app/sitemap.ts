import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "http://nitishportfolio.xo.je", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
