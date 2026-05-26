import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutPageHero } from "@/components/about/about-page-hero";
import { CompanyIntroSection } from "@/components/about/company-intro-section";
import { CompanyGoalsSection } from "@/components/about/company-goals-section";
import { CoreValuesSection } from "@/components/about/core-values-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

const title = "About Us";
const description =
  "Learn about Primordial Technologies Limited: our mission, vision, core values, and strategic goals as a leading Nigerian IT, cybersecurity, and telecom company.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    "about Primordial Technologies",
    "Nigerian IT company",
    "technology mission vision",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        page={{ name: title, description, path: "/about" }}
      />
      <AboutPageHero />
      <CompanyIntroSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <CompanyGoalsSection />

      <Section spacing="compact" className="border-t border-border/60" aria-labelledby="about-cta-heading">
        <MainContainer size="narrow" className="text-center">
          <h2 id="about-cta-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to work with us?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Partner with a team committed to secure, scalable technology delivery.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </MainContainer>
      </Section>
    </>
  );
}
