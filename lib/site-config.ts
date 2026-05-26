export const siteConfig = {
  name: "Primordial Technologies Limited",
  shortName: "Primordial Tech",
  description:
    "Primordial Technologies Limited provides professional IT consulting, cybersecurity, software development, telecom infrastructure, fibre optics, branding, and digital solutions in Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordialtech.com",
  ogImage: "/opengraph-image",
  locale: "en_NG",
  contactEmail: "hello@primordialtech.com",
  phone: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  whatsapp: "+234 800 000 0000",
  whatsappHref: "https://wa.me/2348000000000",
  address: "Lagos, Nigeria",
  links: {
    linkedin: "https://www.linkedin.com/company/primordial-technologies",
    github: "https://github.com/primordial-technologies",
    twitter: "https://twitter.com/primordialtech",
  },
  nav: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/#industries" },
    { title: "Process", href: "/#process" },
    { title: "Contact", href: "/contact" },
  ],
  footer: {
    services: [
      { title: "Cybersecurity", href: "/services#cybersecurity" },
      { title: "Web Development", href: "/services#web-development" },
      { title: "Telecom Infrastructure", href: "/services#telecom-infrastructure" },
      { title: "Fibre Optics", href: "/services#fibre-optics" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "All Services", href: "/services" },
      { title: "Testimonials", href: "/#testimonials" },
      { title: "Contact", href: "/contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
