"use client";

import { ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/design-system";
import { contactInfo } from "@/lib/contact-content";

export function MapSection() {
  return (
    <SectionShell id="map">
      <FadeIn>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-pink">
              Location
            </p>
            <Heading level="h2" className="mt-2">
              Find us in Lagos
            </Heading>
            <Text variant="lead" className="mt-2 max-w-xl">
              Based in Lagos, Nigeria, we serve clients nationwide with on-site and remote
              delivery capabilities.
            </Text>
          </div>
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link href={contactInfo.mapLink} target="_blank" rel="noreferrer">
              Open in Google Maps
              <ExternalLink className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden rounded-2xl border border-border/70 shadow-lg">
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/90 px-3 py-2 text-sm font-medium backdrop-blur-sm">
            <MapPin className="size-4 text-brand-pink" aria-hidden />
            {contactInfo.address}
          </div>
          <iframe
            title="Primordial Technologies office location in Lagos, Nigeria"
            src={contactInfo.mapEmbedUrl}
            className="aspect-[16/9] w-full min-h-[320px] border-0 sm:min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </FadeIn>
    </SectionShell>
  );
}
