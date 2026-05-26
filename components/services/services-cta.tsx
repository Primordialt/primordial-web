"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Heading, Text } from "@/components/design-system";
import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { servicesCta } from "@/lib/services-content";

export function ServicesCta() {
  return (
    <SectionShell spacing="spacious" containerSize="narrow">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-brand-pink/10 via-card to-brand-green/10 p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-brand-pink/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full bg-brand-green/15 blur-3xl"
          />
          <Stack gap="md" className="relative items-center">
            <Heading level="h2">{servicesCta.title}</Heading>
            <Text variant="lead" className="max-w-xl">
              {servicesCta.description}
            </Text>
            <Stack gap="sm" className="flex-col sm:flex-row">
              <Button asChild size="lg" variant="brand">
                <Link href={servicesCta.primaryCta.href}>
                  {servicesCta.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={servicesCta.secondaryCta.href}>
                  {servicesCta.secondaryCta.label}
                </Link>
              </Button>
            </Stack>
          </Stack>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
