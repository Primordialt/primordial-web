import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: "default" | "compact" | "hero";
};

const spacingClasses = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-20 lg:py-24",
  hero: "py-20 sm:py-24 lg:py-32",
} as const;

export function Section({
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative scroll-mt-24", spacingClasses[spacing], className)}
      {...props}
    />
  );
}
