import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { ServiceDetailSections } from "@/components/services/lazy-services";
import { ServicesCta } from "@/components/services/services-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesPageHero } from "@/components/services/services-page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
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
      <Section spacing="none" className="border-b border-border/40 pt-6">
        <MainContainer>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
          />
        </MainContainer>
      </Section>
      <ServicesPageHero />
      <ServicesGrid />
      <ServiceDetailSections />
      <ServicesCta />
    </>
  );
}
