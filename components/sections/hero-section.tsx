"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Enterprise delivery", value: "99.9%" },
  { label: "Cloud-native builds", value: "120+" },
  { label: "Global partners", value: "35" },
];

export function HeroSection() {
  return (
    <Section spacing="hero" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(237,29,126,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(12,129,64,0.16),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(237,29,126,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(12,129,64,0.2),transparent_40%)]"
      />
      <div
        aria-hidden
        className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <MainContainer>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <FadeIn>
            <Badge variant="brand" className="mb-6 px-3 py-1">
              <Sparkles className="mr-1 size-3.5" aria-hidden />
              Future-ready technology partner
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Build the next era of{" "}
              <span className="bg-gradient-to-r from-brand-pink via-foreground to-brand-green bg-clip-text text-transparent">
                enterprise technology
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Primordial Technologies Limited helps ambitious organizations
              design, ship, and scale secure digital platforms with a modern,
              mobile-first engineering approach.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#contact">
                  Start your transformation
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#solutions">Explore solutions</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-14 w-full">
            <dl className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur-sm"
                >
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </MainContainer>
    </Section>
  );
}
