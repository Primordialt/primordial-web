import { Eyebrow, Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { aboutHero } from "@/lib/about-content";

export function AboutPageHero() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />
      <div
        aria-hidden
        className="absolute -right-20 top-20 size-64 rounded-full bg-brand-pink/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-16 bottom-10 size-56 rounded-full bg-brand-green/15 blur-3xl"
      />

      <MainContainer size="narrow">
        <Stack gap="lg" className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="pink">{aboutHero.eyebrow}</Eyebrow>
          <Heading level="display">{aboutHero.title}</Heading>
          <Text variant="lead">{aboutHero.description}</Text>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-green" />
        </Stack>
      </MainContainer>
    </Section>
  );
}
