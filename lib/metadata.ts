import type { Metadata, Viewport } from "next";

import { createPageMetadata, homepageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

/** Root layout defaults — homepage uses absolute title; inner pages use template */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: homepageSeo.title,
    description: homepageSeo.description,
    path: "/",
    absoluteTitle: true,
  }),
  title: {
    default: homepageSeo.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "NG",
    "geo.placename": "Lagos",
  },
};
