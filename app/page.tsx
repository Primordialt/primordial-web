import { HeroSection } from "@/components/sections/hero-section";
import {
  AboutPreviewSection,
  FinalCtaSection,
  IndustriesServedSection,
  ServicesOverviewSection,
  TestimonialsSection,
  WhyChooseUsSection,
  WorkingProcessSection,
} from "@/components/sections/lazy-sections";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { homepageSeo } from "@/lib/seo";
import { servicesItemListSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[{ name: "Home", path: "/" }]}
        page={{
          name: homepageSeo.title,
          description: homepageSeo.description,
          path: "/",
        }}
        extra={servicesItemListSchema()}
      />
      <HeroSection />
      <AboutPreviewSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <IndustriesServedSection />
      <WorkingProcessSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
