"use client";

import { m, type HTMLMotionProps } from "framer-motion";

import {
  defaultViewport,
  motionPresets,
  type MotionPreset,
} from "@/lib/design-system/motion";
import { cn } from "@/lib/utils";

type MotionBoxProps = HTMLMotionProps<"div"> & {
  preset?: MotionPreset;
  delay?: number;
  viewport?: typeof defaultViewport;
};

export function MotionBox({
  preset = "fadeUp",
  delay = 0,
  viewport = defaultViewport,
  className,
  children,
  ...props
}: MotionBoxProps) {
  const variants = motionPresets[preset];

  return (
    <m.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={delay}
      {...props}
    >
      {children}
    </m.div>
  );
}
