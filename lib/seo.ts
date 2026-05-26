import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

/** Homepage SEO — exact copy per brand requirements */
export const homepageSeo = {
  title:
    "Primordial Technologies Limited | IT Solutions, Cybersecurity & Telecom Infrastructure",
  description:
    "Primordial Technologies Limited provides professional IT consulting, cybersecurity, software development, telecom infrastructure, fibre optics, branding, and digital solutions in Nigeria.",
} as const;

export const defaultKeywords = [
  "Primordial Technologies",
  "Primordial Technologies Limited",
  "IT solutions Nigeria",
  "cybersecurity Nigeria",
  "telecom infrastructure Nigeria",
  "software development Lagos",
  "fibre optics Nigeria",
  "IT consulting Nigeria",
  "digital transformation Nigeria",
  "technology company Lagos",
] as const;

export function getCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function getOgImageUrl(): string {
  return `${siteConfig.url}/opengraph-image`;
}

type CreatePageMetadataOptions = {
  /** Page title (uses site template unless absoluteTitle is true) */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Use for homepage — bypasses title template */
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  absoluteTitle = false,
  ogType = "website",
  noIndex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonical = path === "/" ? "/" : path;
  const url = getCanonicalUrl(path);
  const ogImage = getOgImageUrl();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: ogType,
      locale: "en_NG",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.shortName}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@primordialtech",
      site: "@primordialtech",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}
