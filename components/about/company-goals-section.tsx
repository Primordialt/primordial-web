"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { AnimatedTimeline } from "@/components/about/animated-timeline";
import { companyGoals } from "@/lib/about-content";

export function CompanyGoalsSection() {
  return (
    <SectionShell id="goals" background="muted" containerSize="narrow">
      <SectionHeader
        eyebrow="Company Goals"
        eyebrowTone="green"
        title="Our roadmap for growth and impact"
        description="Strategic milestones that shape how we invest in capabilities, partnerships, and service excellence across Nigeria and the region."
        className="mb-12"
      />
      <AnimatedTimeline items={companyGoals} />
    </SectionShell>
  );
}
