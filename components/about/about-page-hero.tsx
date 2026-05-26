"use client";

import { m } from "framer-motion";

import { Eyebrow, Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutHero } from "@/lib/about-content";
import { easeOutExpo } from "@/lib/design-system/motion";

export function AboutPageHero() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />
      <m.div
        aria-hidden
        className="absolute -right-20 top-20 size-64 rounded-full bg-brand-pink/20 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        aria-hidden
        className="absolute -left-16 bottom-10 size-56 rounded-full bg-brand-green/15 blur-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <MainContainer size="narrow">
        <Stack gap="lg" className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Eyebrow tone="pink">{aboutHero.eyebrow}</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Heading level="display">{aboutHero.title}</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Text variant="lead">{aboutHero.description}</Text>
          </FadeIn>
          <FadeIn delay={0.15}>
            <m.div
              className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-green"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
            />
          </FadeIn>
        </Stack>
      </MainContainer>
    </Section>
  );
}
