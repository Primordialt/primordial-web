import type { ReactNode } from "react";

import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import type { SectionSpacingVariants } from "@/lib/design-system/spacing";

type SectionShellProps = {
  id?: string;
  /** Accessible name when no visible heading is present */
  ariaLabel?: string;
  children: ReactNode;
  spacing?: SectionSpacingVariants["spacing"];
  containerSize?: "default" | "narrow" | "wide";
  className?: string;
  containerClassName?: string;
  background?: "none" | "muted" | "gradient" | "hero";
};

const backgroundClasses = {
  none: "",
  muted: "bg-muted/30",
  gradient: "ds-gradient-brand",
  hero: "ds-gradient-hero overflow-hidden",
} as const;

export function SectionShell({
  id,
  ariaLabel,
  children,
  spacing = "default",
  containerSize = "default",
  className,
  containerClassName,
  background = "none",
}: SectionShellProps) {
  const showGrid = background === "hero";

  return (
    <Section
      id={id}
      spacing={spacing}
      className={cn(backgroundClasses[background], className)}
      aria-label={ariaLabel}
    >
      {showGrid ? (
        <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" />
      ) : null}
      <MainContainer size={containerSize} className={containerClassName}>
        {children}
      </MainContainer>
    </Section>
  );
}
