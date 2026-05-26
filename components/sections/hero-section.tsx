"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Heading, Text } from "@/components/design-system";
import { AnimatedHeroBackground } from "@/components/hero/animated-hero-background";
import { FloatingTechElements } from "@/components/hero/floating-tech-elements";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { heroContent } from "@/lib/homepage-content";

export function HeroSection() {
  return (
    <Section spacing="hero" className="relative overflow-hidden">
      <AnimatedHeroBackground />
      <FloatingTechElements />

      <MainContainer>
        <Stack gap="xl" className="relative mx-auto max-w-4xl items-center text-center">
          <FadeIn>
            <Badge variant="brand" className="px-3 py-1">
              <Sparkles className="mr-1 size-3.5" aria-hidden />
              {heroContent.eyebrow}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <Heading level="display" className="max-w-4xl">
              {heroContent.headline}
            </Heading>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Text variant="lead" className="max-w-3xl">
              {heroContent.subheadline}
            </Text>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Stack
              gap="sm"
              className="w-full flex-col items-center sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" variant="brand" className="w-full sm:w-auto">
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-brand-green/30 sm:w-auto hover:border-brand-green/50"
              >
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </Stack>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full pt-4">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroContent.metrics.map((metric) => (
                <Card
                  key={metric.label}
                  variant="glass"
                  className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-glow"
                >
                  <dd className="font-display text-2xl font-semibold text-gradient-brand sm:text-3xl">
                    {metric.value}
                  </dd>
                  <dt className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {metric.label}
                  </dt>
                </Card>
              ))}
            </dl>
          </FadeIn>
        </Stack>
      </MainContainer>
    </Section>
  );
}
