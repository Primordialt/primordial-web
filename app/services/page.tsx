import { ServiceDetailSection } from "@/components/services/service-detail-section";
import { ServicesCta } from "@/components/services/services-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesPageHero } from "@/components/services/services-page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { services } from "@/lib/services-content";
import { createPageMetadata } from "@/lib/seo";
import { servicesItemListSchema } from "@/lib/structured-data";

const title = "Technology Services";
const description =
  "Explore Primordial Technologies services: IT consulting, cybersecurity, mobile apps, UI/UX, branding, web development, telecom infrastructure, device supply, and fibre optics in Nigeria.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/services",
  keywords: [
    "IT consulting Nigeria",
    "cybersecurity services",
    "mobile app development",
    "fibre optics installation",
    "telecom infrastructure",
    "web development Lagos",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        page={{ name: title, description, path: "/services" }}
        extra={servicesItemListSchema()}
      />
      <ServicesPageHero />
      <ServicesGrid />
      {services.map((service, index) => (
        <ServiceDetailSection key={service.slug} slug={service.slug} index={index} />
      ))}
      <ServicesCta />
    </>
  );
}
