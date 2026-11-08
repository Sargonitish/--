import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nitish S — Engineering Student & Web Developer",
    short_name: "Nitish S",
    description: "Portfolio of Nitish S: Web development, student portfolios, AI innovation and software engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9e2e1",
    theme_color: "#ff5400",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
