"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  "Next.js & React platforms",
  "Design systems & UI engineering",
  "API & microservices",
  "DevOps & CI/CD automation",
  "Data pipelines & analytics",
  "AI-assisted workflows",
  "Mobile-first UX",
  "Accessibility audits (WCAG)",
];

export function CapabilitiesSection() {
  return (
    <Section id="capabilities" className="bg-muted/30">
      <MainContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-pink">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Full-stack expertise for modern enterprises
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our teams combine product thinking, platform engineering, and
              operational excellence to deliver measurable impact across your
              digital estate.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ul className="flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <li key={capability}>
                  <Badge
                    variant="outline"
                    className="rounded-full px-3 py-1.5 text-sm font-medium"
                  >
                    {capability}
                  </Badge>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </MainContainer>
    </Section>
  );
}
