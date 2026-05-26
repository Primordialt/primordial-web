"use client";

import { Eyebrow, Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { contactPageHero } from "@/lib/contact-content";

export function ContactPageHero() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />

      <MainContainer size="narrow">
        <Stack gap="lg" className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <Eyebrow tone="pink">{contactPageHero.eyebrow}</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Heading level="display">{contactPageHero.title}</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Text variant="lead">{contactPageHero.description}</Text>
          </FadeIn>
        </Stack>
      </MainContainer>
    </Section>
  );
}
