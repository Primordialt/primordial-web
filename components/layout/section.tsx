import type { HTMLAttributes } from "react";

import {
  sectionSpacingVariants,
  type SectionSpacingVariants,
} from "@/lib/design-system/spacing";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & SectionSpacingVariants;

export function Section({
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionSpacingVariants({ spacing }), className)}
      {...props}
    />
  );
}
