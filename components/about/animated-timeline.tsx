"use client";

import { m } from "framer-motion";

import { Heading, Text } from "@/components/design-system";
import { Card } from "@/components/ui/card";
import { defaultViewport, staggerItemVariants } from "@/lib/design-system/motion";
import { cn } from "@/lib/utils";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type AnimatedTimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function AnimatedTimeline({ items, className }: AnimatedTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-gradient-to-b from-brand-pink via-brand-green/60 to-transparent sm:left-6"
      />

      <ol className="space-y-8">
        {items.map((item, index) => (
          <m.li
            key={item.year}
            className="relative pl-12 sm:pl-16"
            variants={staggerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: index * 0.08 }}
          >
            <m.div
              className="absolute left-0 top-6 flex size-9 items-center justify-center rounded-full border-2 border-brand-pink bg-background shadow-glow sm:left-3 sm:size-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={defaultViewport}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
            >
              <span className="size-2.5 rounded-full bg-brand-pink" aria-hidden />
            </m.div>

            <Card
              variant="interactive"
              className="p-6 sm:p-8"
            >
              <span className="font-mono text-sm font-semibold text-brand-green">
                {item.year}
              </span>
              <Heading level="h3" className="mt-2">
                {item.title}
              </Heading>
              <Text variant="small" tone="muted" className="mt-2">
                {item.description}
              </Text>
            </Card>
          </m.li>
        ))}
      </ol>
    </div>
  );
}
