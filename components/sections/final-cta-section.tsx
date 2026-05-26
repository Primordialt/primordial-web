"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Heading, Text } from "@/components/design-system";
import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { finalCta } from "@/lib/homepage-content";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <SectionShell id="contact" spacing="spacious" containerSize="wide">
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
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-pink"
              >
                <Mail className="size-4" aria-hidden />
                {siteConfig.contactEmail}
              </a>
            </Stack>

            <form
              className="rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur-sm sm:p-8"
              action={`mailto:${siteConfig.contactEmail}`}
              method="post"
              encType="text/plain"
            >
              <Stack gap="md">
                <p className="font-display text-lg font-semibold">Quick inquiry</p>
                <FormField label="Full name" htmlFor="cta-name" required>
                  <Input id="cta-name" name="name" placeholder="Your name" required />
                </FormField>
                <FormField label="Work email" htmlFor="cta-email" required>
                  <Input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </FormField>
                <FormField label="Company" htmlFor="cta-company">
                  <Input id="cta-company" name="company" placeholder="Organization name" />
                </FormField>
                <Button type="submit" variant="brand" className="w-full">
                  Submit request
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
