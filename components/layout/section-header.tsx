import type { ReactNode } from "react";

import { Eyebrow, Heading, Text } from "@/components/design-system";
import { FadeIn } from "@/components/motion/fade-in";
import { Stack } from "@/components/layout/stack";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  eyebrowTone?: "pink" | "green" | "muted";
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2" | "h3" | "display";
  headingId?: string;
  className?: string;
  action?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  eyebrowTone = "green",
  title,
  description,
  align = "center",
  headingLevel = "h2",
  headingId,
  className,
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <FadeIn className={cn(isCenter && "mx-auto max-w-2xl text-center", className)}>
      <Stack gap="md" className={cn(isCenter && "items-center")}>
        {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
        <Heading level={headingLevel} id={headingId}>
          {title}
        </Heading>
        {description ? (
          <Text variant="lead" className={cn(isCenter && "max-w-xl")}>
            {description}
          </Text>
        ) : null}
        {action ? <div className="pt-2">{action}</div> : null}
      </Stack>
    </FadeIn>
  );
}
