"use client";

import { Cloud, Cpu, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud-native platforms",
    description:
      "Architect resilient, observable systems on modern cloud infrastructure with performance and cost efficiency built in.",
  },
  {
    icon: Cpu,
    title: "Product engineering",
    description:
      "Ship polished web and mobile experiences with scalable design systems, API-first backends, and rapid iteration loops.",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    description:
      "Embed security from day one with threat modeling, zero-trust patterns, and compliance-ready delivery workflows.",
  },
];

export function SolutionsSection() {
  return (
    <Section id="solutions">
      <MainContainer>
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
            Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology built for scale, speed, and trust
          </h2>
          <p className="mt-4 text-muted-foreground">
            From strategy to production, we deliver end-to-end capabilities
            aligned with your business outcomes.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <Card className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/30 hover:shadow-glow">
                <CardHeader>
                  <div className="mb-3 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-green/20 text-brand-pink">
                    <solution.icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </MainContainer>
    </Section>
  );
}
