"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  defaultViewport,
  duration,
  easeOutExpo,
} from "@/lib/design-system/motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, y = 24 }: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{
        duration: duration.base,
        delay,
        ease: easeOutExpo,
      }}
    >
      {children}
    </m.div>
  );
}
