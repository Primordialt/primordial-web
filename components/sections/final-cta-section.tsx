"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Heading, Text } from "@/components/design-system";
import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/lib/homepage-content";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <SectionShell id="get-in-touch" spacing="spacious" containerSize="wide">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-brand-pink/10 via-card to-brand-green/10 p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-brand-pink/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-12 size-72 rounded-full bg-brand-green/15 blur-3xl"
          />
          <div
            aria-hidden
            className="grid-overlay absolute inset-0 opacity-30"
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <Stack gap="md">
              <Heading level="h2">{finalCta.title}</Heading>
              <Text variant="lead">{finalCta.description}</Text>
              <Stack gap="sm" className="flex-col sm:flex-row">
                <Button asChild size="lg" variant="brand">
                  <Link href={finalCta.primaryCta.href}>
                    {finalCta.primaryCta.label}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={finalCta.secondaryCta.href}>
                    {finalCta.secondaryCta.label}
                  </Link>
                </Button>
              </Stack>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="size-4" aria-hidden />
                {siteConfig.contactEmail}
              </a>
            </Stack>

            <aside
              className="rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur-sm sm:p-8"
              aria-labelledby="cta-contact-heading"
            >
              <Stack gap="md">
                <Heading level="h3" id="cta-contact-heading">
                  Start your project
                </Heading>
                <Text variant="small" tone="muted">
                  Tell us about your cybersecurity, software, or telecom needs. Our
                  team responds within one business day.
                </Text>
                <Button asChild variant="brand" className="w-full">
                  <Link href="/contact">
                    Go to contact form
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Or call{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="font-medium text-foreground underline-offset-4 hover:text-brand-pink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </Stack>
            </aside>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
