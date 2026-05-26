import { cva, type VariantProps } from "class-variance-authority";

/** Consistent vertical rhythm between blocks */
export const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12",
    },
  },
  defaultVariants: {
    gap: "md",
  },
});

/** Section vertical padding — mobile-first */
export const sectionSpacingVariants = cva("relative scroll-mt-24", {
  variants: {
    spacing: {
      none: "py-0",
      compact: "py-12 sm:py-16",
      default: "py-16 sm:py-20 lg:py-24",
      spacious: "py-20 sm:py-28 lg:py-32",
      hero: "py-20 sm:py-24 lg:py-32",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export type StackVariants = VariantProps<typeof stackVariants>;
export type SectionSpacingVariants = VariantProps<typeof sectionSpacingVariants>;
