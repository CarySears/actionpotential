import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://actionpotential.ai/sitemap.xml",
  };
}
