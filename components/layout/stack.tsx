import type { HTMLAttributes } from "react";

import { stackVariants, type StackVariants } from "@/lib/design-system/spacing";
import { cn } from "@/lib/utils";

type StackProps = HTMLAttributes<HTMLDivElement> & StackVariants;

export function Stack({ gap = "md", className, ...props }: StackProps) {
  return <div className={cn(stackVariants({ gap }), className)} {...props} />;
}
