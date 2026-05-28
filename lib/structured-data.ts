import { brandAssets } from "@/lib/brand-assets";
import { services } from "@/lib/services-content";
import { siteConfig } from "@/lib/site-config";
import { getCanonicalUrl } from "@/lib/seo";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${brandAssets.icons.chrome512}`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.twitter,
    ],
    contactPoint: [contactInformationSchema()],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-NG",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${brandAssets.icons.chrome512}`,
    telephone: siteConfig.phone,
    email: siteConfig.contactEmail,
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    priceRange: "$$",
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.twitter,
    ],
    contactPoint: [contactInformationSchema()],
    hasOfferCatalog: {
      "@id": `${siteConfig.url}/#service-catalog`,
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professionalservice`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@id": `${siteConfig.url}/#service-catalog`,
    },
  };
}

export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}/#service-catalog`,
    name: "Technology Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${siteConfig.url}/services#${service.slug}`,
        name: service.title,
        description: service.summary,
        serviceType: service.tags.join(", "),
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
      },
      url: getCanonicalUrl(`/services#${service.slug}`),
    })),
  };
}

export function contactInformationSchema() {
  return {
    "@type": "ContactPoint",
    "@id": `${siteConfig.url}/#contact`,
    contactType: "customer service",
    email: siteConfig.contactEmail,
    telephone: siteConfig.phone,
    areaServed: "NG",
    availableLanguage: ["English"],
    url: getCanonicalUrl("/contact"),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getCanonicalUrl(path),
    inLanguage: "en-NG",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: getCanonicalUrl(path),
    inLanguage: "en-NG",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function servicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technology Services",
    description: "IT consulting, cybersecurity, software, telecom, and fibre optics services in Nigeria.",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: getCanonicalUrl(`/services#${service.slug}`),
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description:
      "Contact Primordial Technologies for IT consulting, cybersecurity, and telecom solutions in Nigeria.",
    url: getCanonicalUrl("/contact"),
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function faqPageSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
