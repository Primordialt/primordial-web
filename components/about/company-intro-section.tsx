"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Heading, Text } from "@/components/design-system";
import { Card } from "@/components/ui/card";
import { companyIntroduction } from "@/lib/about-content";

export function CompanyIntroSection() {
  return (
    <SectionShell id="introduction" background="muted">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <FadeIn>
          <Stack gap="md">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-pink">
              {companyIntroduction.title}
            </p>
            <Heading level="h2">
              A Nigerian technology company built for mission-critical work
            </Heading>
            <Stack gap="md">
              {companyIntroduction.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 40)} variant="body" tone="muted">
                  {paragraph}
                </Text>
              ))}
            </Stack>
          </Stack>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {companyIntroduction.stats.map((stat) => (
              <Card
                key={stat.label}
                variant="glass"
                className="p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-glow-green"
              >
                <p className="font-display text-2xl font-semibold text-gradient-brand sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
