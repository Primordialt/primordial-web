import { ApproachSection } from "@/components/sections/approach-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <ApproachSection />
      <ContactSection />
    </>
  );
}
