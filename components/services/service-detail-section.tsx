"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Heading, Text } from "@/components/design-system";
import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/services-content";
import { cn } from "@/lib/utils";

type ServiceDetailSectionProps = {
  slug: string;
  index: number;
};

export function ServiceDetailSection({ slug, index }: ServiceDetailSectionProps) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const isReversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <SectionShell
      id={service.slug}
      background={index % 2 === 0 ? "none" : "muted"}
      spacing="default"
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          isReversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        <FadeIn>
          <Stack gap="md">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink/15 to-brand-green/15 text-brand-pink">
              <Icon className="size-7" strokeWidth={1.5} aria-hidden />
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <Badge key={tag} variant="brand" className="rounded-md">
                  {tag}
                </Badge>
              ))}
            </div>
            <Heading level="h2">{service.title}</Heading>
            <Text variant="lead">{service.description}</Text>
            <Button asChild variant="brand" className="w-fit">
              <Link href="/contact">
                Discuss this service
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Stack>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Stack gap="md">
            <Card variant="elevated" className="p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold">Key capabilities</h3>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-brand-green"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Deliverables
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border/60 bg-background/80 px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Stack>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
