"use client";

import { m } from "framer-motion";

import { Eyebrow, Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { servicesPageHero } from "@/lib/services-content";
import { easeOutExpo } from "@/lib/design-system/motion";

export function ServicesPageHero() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />
      <m.div
        aria-hidden
        className="absolute left-1/4 top-1/3 size-72 rounded-full bg-brand-green/15 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <MainContainer>
        <Stack gap="lg" className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Eyebrow tone="green">{servicesPageHero.eyebrow}</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Heading level="display">{servicesPageHero.title}</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Text variant="lead">{servicesPageHero.description}</Text>
          </FadeIn>
          <FadeIn delay={0.15}>
            <m.div
              className="mx-auto flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOutExpo }}
            >
              {["Consulting", "Security", "Development", "Telecom"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </m.div>
          </FadeIn>
        </Stack>
      </MainContainer>
    </Section>
  );
}
