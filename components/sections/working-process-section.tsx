"use client";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/design-system";
import { workingProcess } from "@/lib/homepage-content";
import { cn } from "@/lib/utils";

export function WorkingProcessSection() {
  return (
    <SectionShell id="process">
      <SectionHeader
        eyebrow="How We Work"
        eyebrowTone="green"
        title="A structured process from assessment to ongoing support"
        className="mb-12"
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand-pink via-brand-green/50 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {workingProcess.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <Card
                variant="elevated"
                className={cn(
                  "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/30 hover:shadow-glow sm:p-8",
                  index % 2 === 1 && "lg:mt-12",
                )}
              >
                <span className="font-mono text-sm font-semibold text-brand-pink">
                  {step.step}
                </span>
                <Heading level="h4" className="mt-3">
                  {step.title}
                </Heading>
                <Text variant="small" tone="muted" className="mt-2">
                  {step.description}
                </Text>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
