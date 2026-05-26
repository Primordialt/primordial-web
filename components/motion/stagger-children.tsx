"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

const container = {
  hidden: { opacity: 0 },
  show: (stagger = 0.08) => ({
    opacity: 1,
    transition: { staggerChildren: stagger },
  }),
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
}: StaggerChildrenProps) {
  return (
    <m.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
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
    <m.div className={cn(className)} variants={item}>
      {children}
    </m.div>
  );
}
