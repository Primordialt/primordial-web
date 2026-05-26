import type { Transition, Variants } from "framer-motion";

/** Shared easing — smooth corporate SaaS feel */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.65,
  stagger: 0.08,
} as const;

export const defaultViewport = {
  once: true,
  margin: "-80px" as const,
};

export const transitions = {
  fade: {
    duration: duration.base,
    ease: easeOutExpo,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 24,
  } satisfies Transition,
  snappy: {
    duration: duration.fast,
    ease: easeOutExpo,
  } satisfies Transition,
} as const;

/** Fade up on scroll */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.fade,
  },
};

/** Fade in without vertical shift */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.fade,
  },
};

/** Scale in — cards, badges */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.fade,
  },
};

/** Stagger container for child items */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (stagger = duration.stagger) => ({
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

/** Stagger child item */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.fade,
  },
};

/** Slide from left — timeline, steps */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.fade,
  },
};

/** Hero entrance — slightly more dramatic */
export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      delay,
      ease: easeOutExpo,
    },
  }),
};

export const motionPresets = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  scaleIn: scaleInVariants,
  staggerContainer: staggerContainerVariants,
  staggerItem: staggerItemVariants,
  slideInLeft: slideInLeftVariants,
  hero: heroVariants,
} as const;

export type MotionPreset = keyof typeof motionPresets;
