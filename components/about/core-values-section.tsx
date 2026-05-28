"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/design-system";
import { aboutIcons } from "@/components/icons/content-icons";
import { coreValues } from "@/lib/about-content";

export function CoreValuesSection() {
  return (
    <SectionShell id="values" background="gradient">
      <SectionHeader
        eyebrow="Core Values"
        eyebrowTone="pink"
        title="Principles that guide every engagement"
        description="Our culture and delivery standards are rooted in values that reflect the trust our clients place in us."
        className="mb-12"
      />

      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => {
          const ValueIcon = aboutIcons[value.icon];

          return (
          <StaggerItem key={value.title}>
            <Card
              variant="glass"
              className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-glow sm:p-8"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-brand-green transition-colors group-hover:border-brand-green/40 group-hover:text-brand-pink">
                <ValueIcon className="size-5" strokeWidth={1.5} aria-hidden />
              </div>
              <Heading level="h3">{value.title}</Heading>
              <Text variant="small" tone="muted" className="mt-2">
                {value.description}
              </Text>
            </Card>
          </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionShell>
  );
}
