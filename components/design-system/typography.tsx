import type { HTMLAttributes } from "react";

import {
  headingVariants,
  textVariants,
  type HeadingVariants,
  type TextVariants,
} from "@/lib/design-system/typography";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

const headingTagMap = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
} as const;

export function Heading({
  as,
  level = "h2",
  gradient = "none",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as ?? headingTagMap[level ?? "h2"];

  return (
    <Tag className={cn(headingVariants({ level, gradient }), className)} {...props}>
      {children}
    </Tag>
  );
}

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  TextVariants & {
    as?: "p" | "span" | "div";
  };

export function Text({
  as: Component = "p",
  variant = "body",
  tone = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, tone }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: "pink" | "green" | "muted";
};

const eyebrowToneClasses = {
  pink: "text-brand-pink",
  green: "text-brand-green",
  muted: "text-muted-foreground",
} as const;

export function Eyebrow({
  tone = "pink",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        textVariants({ variant: "eyebrow", tone: "default" }),
        eyebrowToneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
