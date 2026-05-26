"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    step: "01",
    title: "Discover & align",
    description:
      "Map business goals, technical constraints, and success metrics into a clear delivery roadmap.",
  },
  {
    step: "02",
    title: "Design & prototype",
    description:
      "Validate concepts quickly with accessible UX, architecture blueprints, and performance budgets.",
  },
  {
    step: "03",
    title: "Build & optimize",
    description:
      "Ship iteratively with automated quality gates, observability, and mobile-first engineering standards.",
  },
  {
    step: "04",
    title: "Scale & evolve",
    description:
      "Continuously improve reliability, security posture, and platform capabilities as you grow.",
  },
];

export function ApproachSection() {
  return (
    <Section id="approach">
      <MainContainer>
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            Approach
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A proven delivery model for complex programs
          </h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.06}>
              <article className="rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur-sm">
                <p className="font-mono text-sm text-brand-pink">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {index < steps.length - 1 && (
                  <Separator className="mt-6 lg:hidden" />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </MainContainer>
    </Section>
  );
}
