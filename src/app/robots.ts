import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "http://nitishportfolio.xo.je/sitemap.xml",
    host: "http://nitishportfolio.xo.je",
  };
}
