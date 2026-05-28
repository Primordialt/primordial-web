"use client";

import { Zap } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/design-system";
import { whyChooseUs } from "@/lib/homepage-content";

export function WhyChooseUsSection() {
  return (
    <SectionShell id="why-us" background="gradient">
      <SectionHeader
        eyebrow="Why Choose Us"
        eyebrowTone="green"
        title="Built for security, scale, and operational excellence"
        description="We bring telecom-grade discipline and cybersecurity rigor to every engagement, whether you are an enterprise, institution, or growing business."
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {whyChooseUs.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <Card
              variant="glass"
              className="group h-full p-6 transition-all duration-300 hover:border-brand-green/40 hover:shadow-glow-green sm:p-8"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green transition-transform group-hover:scale-110">
                <Zap className="size-5" aria-hidden />
              </div>
              <Heading level="h3" className="mb-2">
                {item.title}
              </Heading>
              <Text variant="small" tone="muted">
                {item.description}
              </Text>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
