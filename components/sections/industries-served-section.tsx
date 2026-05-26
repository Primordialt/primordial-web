"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/design-system";
import { industries } from "@/lib/homepage-content";

export function IndustriesServedSection() {
  return (
    <SectionShell id="industries" background="muted">
      <SectionHeader
        eyebrow="Industries"
        eyebrowTone="pink"
        title="Serving sectors that demand reliability and trust"
        description="Our experience spans regulated industries and mission-critical environments where downtime and breaches are not an option."
        className="mb-12"
      />

      <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <Card
              variant="interactive"
              className="group flex h-full flex-col items-center p-6 text-center"
            >
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-br from-brand-pink/10 to-brand-green/10 transition-all duration-300 group-hover:border-brand-pink/40 group-hover:shadow-glow">
                <industry.icon
                  className="size-7 text-brand-pink transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-base font-semibold">{industry.name}</h3>
              <Text variant="caption" className="mt-2">
                {industry.description}
              </Text>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionShell>
  );
}
