"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Heading, Text } from "@/components/design-system";
import { Card } from "@/components/ui/card";
import { aboutIcons } from "@/components/icons/content-icons";
import { mission, vision } from "@/lib/about-content";

const pillars = [mission, vision] as const;

export function MissionVisionSection() {
  return (
    <SectionShell id="mission-vision">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
          Purpose
        </p>
        <Heading level="h2" className="mt-3">
          Mission & Vision
        </Heading>
      </div>

      <StaggerChildren className="grid gap-8 md:grid-cols-2">
        {pillars.map((pillar) => {
          const PillarIcon = aboutIcons[pillar.icon];

          return (
          <StaggerItem key={pillar.title}>
            <Card
              variant="elevated"
              className="group relative h-full overflow-hidden p-8 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-pink/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink/15 to-brand-green/15 text-brand-pink transition-transform duration-300 group-hover:scale-110">
                <PillarIcon className="size-7" strokeWidth={1.5} aria-hidden />
              </div>
              <Heading level="h3">{pillar.title}</Heading>
              <Text variant="lead" className="mt-4 leading-relaxed">
                {pillar.statement}
              </Text>
            </Card>
          </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionShell>
  );
}
