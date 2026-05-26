export const siteConfig = {
  name: "Primordial Technologies Limited",
  shortName: "Primordial Tech",
  description:
    "Primordial Technologies Limited delivers modern, scalable technology solutions for enterprises ready to build the future.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordialtech.com",
  ogImage: "/og-image.png",
  locale: "en_GB",
  contactEmail: "hello@primordialtech.com",
  links: {
    linkedin: "https://www.linkedin.com/company/primordial-technologies",
    github: "https://github.com/primordial-technologies",
    twitter: "https://twitter.com/primordialtech",
  },
  nav: [
    { title: "Solutions", href: "#solutions" },
    { title: "Capabilities", href: "#capabilities" },
    { title: "Approach", href: "#approach" },
    { title: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
