"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

import {
  defaultViewport,
  duration,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/design-system/motion";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = duration.stagger,
}: StaggerChildrenProps) {
  return (
    <m.div
      className={cn(className)}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={stagger}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div className={cn(className)} variants={staggerItemVariants}>
      {children}
    </m.div>
  );
}
