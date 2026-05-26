import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MainContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer" | "main";
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
} as const;

export function MainContainer({
  as: Component = "div",
  className,
  size = "default",
  ...props
}: MainContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
