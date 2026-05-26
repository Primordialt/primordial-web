"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Eyebrow, Heading, Text } from "@/components/design-system";
import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { aboutPreview } from "@/lib/homepage-content";

export function AboutPreviewSection() {
  return (
    <SectionShell id="about" background="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <Stack gap="md">
            <Eyebrow tone="green">{aboutPreview.eyebrow}</Eyebrow>
            <Heading level="h2">{aboutPreview.title}</Heading>
            <Text variant="lead">{aboutPreview.description}</Text>
            <Button asChild variant="ghost-brand" className="w-fit px-0">
              <Link href={aboutPreview.cta.href}>
                {aboutPreview.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Stack>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card variant="elevated" className="relative overflow-hidden p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-green/15 blur-2xl"
            />
            <ul className="space-y-4">
              {aboutPreview.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand-green"
                    aria-hidden
                  />
                  <span className="text-sm font-medium sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div
              aria-hidden
              className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-brand-pink via-brand-green/50 to-brand-green"
            />
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Lagos · Abuja · Nationwide Delivery
            </p>
          </Card>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
