import type { MetadataRoute } from "next";

import { homepageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: homepageSeo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#ed1d7e",
    lang: "en-NG",
    orientation: "portrait-primary",
    categories: ["business", "technology"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
