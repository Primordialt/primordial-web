import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

type PublicSitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
};

/** Public, indexable routes only. */
const routes: PublicSitemapRoute[] = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/projects",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
