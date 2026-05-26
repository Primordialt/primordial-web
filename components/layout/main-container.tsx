import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MainContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer" | "main";
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  narrow: "ds-container ds-container-narrow",
  default: "ds-container ds-container-default",
  wide: "ds-container ds-container-wide",
} as const;

export function MainContainer({
  as: Component = "div",
  className,
  size = "default",
  ...props
}: MainContainerProps) {
  return (
    <Component className={cn(sizeClasses[size], className)} {...props} />
  );
}
