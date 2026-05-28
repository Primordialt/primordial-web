import type { MetadataRoute } from "next";

import { brandAssets, brandColors } from "@/lib/brand-assets";
import { homepageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: homepageSeo.description,
    start_url: "/",
    display: "standalone",
    background_color: brandColors.background,
    theme_color: brandColors.pink,
    lang: "en-NG",
    orientation: "portrait-primary",
    categories: ["business", "technology"],
    icons: [
      {
        src: brandAssets.icons.chrome192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: brandAssets.icons.chrome512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: brandAssets.icons.maskable512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
