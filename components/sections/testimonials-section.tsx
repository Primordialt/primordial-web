"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" background="muted">
      <SectionHeader
        eyebrow="Testimonials"
        eyebrowTone="pink"
        title="Trusted by leaders across telecom, finance, and government"
        description="Organizations partner with Primordial for dependable delivery, transparent communication, and long-term technical partnership."
        className="mb-10"
      />
      <TestimonialsSlider />
    </SectionShell>
  );
}
