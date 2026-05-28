import type { Metadata, Viewport } from "next";

import { brandAssets } from "@/lib/brand-assets";
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: brandAssets.favicon, sizes: "48x48" },
      { url: brandAssets.icons.png16, sizes: "16x16", type: "image/png" },
      { url: brandAssets.icons.png32, sizes: "32x32", type: "image/png" },
      { url: brandAssets.icons.png48, sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: brandAssets.icons.chrome192,
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [{ url: brandAssets.favicon }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "NG",
    "geo.placename": "Lagos",
  },
};
