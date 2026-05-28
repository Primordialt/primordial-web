import { Eyebrow, Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { servicesPageHero } from "@/lib/services-content";

export function ServicesPageHero() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />
      <div
        aria-hidden
        className="absolute left-1/4 top-1/3 size-72 rounded-full bg-brand-green/15 blur-3xl"
      />

      <MainContainer>
        <Stack gap="lg" className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="green">{servicesPageHero.eyebrow}</Eyebrow>
          <Heading level="display">{servicesPageHero.title}</Heading>
          <Text variant="lead">{servicesPageHero.description}</Text>
          <div className="mx-auto flex flex-wrap justify-center gap-2">
            {["Consulting", "Security", "Development", "Telecom"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </Stack>
      </MainContainer>
    </Section>
  );
}
