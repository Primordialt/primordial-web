import { cva, type VariantProps } from "class-variance-authority";

/** Typography scale — mobile-first, scales up at sm/lg breakpoints */
export const typographyScale = {
  display: {
    mobile: "text-4xl leading-[1.05] font-semibold tracking-tight",
    tablet: "sm:text-5xl",
    desktop: "lg:text-6xl",
  },
  h1: {
    mobile: "text-3xl leading-tight font-semibold tracking-tight",
    tablet: "sm:text-4xl",
    desktop: "lg:text-5xl",
  },
  h2: {
    mobile: "text-2xl leading-tight font-semibold tracking-tight",
    tablet: "sm:text-3xl",
    desktop: "lg:text-4xl",
  },
  h3: {
    mobile: "text-xl leading-snug font-semibold tracking-tight",
    tablet: "sm:text-2xl",
  },
  h4: {
    mobile: "text-lg leading-snug font-semibold",
    tablet: "sm:text-xl",
  },
  lead: {
    mobile: "text-base leading-relaxed",
    tablet: "sm:text-lg",
  },
  body: {
    mobile: "text-sm leading-relaxed",
    tablet: "sm:text-base",
  },
  small: {
    mobile: "text-xs leading-relaxed",
    tablet: "sm:text-sm",
  },
  eyebrow: {
    mobile: "text-xs font-semibold uppercase tracking-[0.16em]",
  },
  caption: {
    mobile: "text-xs leading-relaxed text-muted-foreground",
  },
  mono: {
    mobile: "font-mono text-sm tracking-wide",
  },
} as const;

export const headingVariants = cva("font-display text-balance", {
  variants: {
    level: {
      display: `${typographyScale.display.mobile} ${typographyScale.display.tablet} ${typographyScale.display.desktop}`,
      h1: `${typographyScale.h1.mobile} ${typographyScale.h1.tablet} ${typographyScale.h1.desktop}`,
      h2: `${typographyScale.h2.mobile} ${typographyScale.h2.tablet} ${typographyScale.h2.desktop}`,
      h3: `${typographyScale.h3.mobile} ${typographyScale.h3.tablet}`,
      h4: `${typographyScale.h4.mobile} ${typographyScale.h4.tablet}`,
    },
    gradient: {
      none: "",
      brand: "bg-gradient-to-r from-brand-pink via-foreground to-brand-green bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    level: "h2",
    gradient: "none",
  },
});

export const textVariants = cva("", {
  variants: {
    variant: {
      lead: `${typographyScale.lead.mobile} ${typographyScale.lead.tablet} text-muted-foreground`,
      body: `${typographyScale.body.mobile} ${typographyScale.body.tablet}`,
      small: `${typographyScale.small.mobile} ${typographyScale.small.tablet}`,
      eyebrow: `${typographyScale.eyebrow.mobile}`,
      caption: typographyScale.caption.mobile,
      mono: typographyScale.mono.mobile,
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brandPink: "text-brand-pink",
      brandGreen: "text-brand-green",
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "default",
  },
});

export type HeadingVariants = VariantProps<typeof headingVariants>;
export type TextVariants = VariantProps<typeof textVariants>;
