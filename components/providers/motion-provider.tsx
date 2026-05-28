"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionProviderProps = {
  children: ReactNode;
};

const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation);

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
