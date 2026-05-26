import { PageJsonLd } from "@/components/seo/page-json-ld";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesServedSection } from "@/components/sections/industries-served-section";
import { ServicesOverviewSection } from "@/components/sections/services-overview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { WorkingProcessSection } from "@/components/sections/working-process-section";
import { homepageSeo } from "@/lib/seo";

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
