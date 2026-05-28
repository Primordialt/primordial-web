"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { brandAssets, brandLogoDimensions } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Theme-aware wordmark: dark ink in light mode, light ink in dark mode.
 * Defaults to the light-mode asset until mounted to avoid hydration mismatch.
 */
export function BrandLogo({ className, priority }: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const logoClass = cn("h-9 w-auto sm:h-10", className);

  const isDarkMode = mounted && resolvedTheme === "dark";
  const src = isDarkMode
    ? brandAssets.logos.onDarkMode
    : brandAssets.logos.onLightMode;

  return (
    <Image
      src={src}
      alt={siteConfig.name}
      width={brandLogoDimensions.width}
      height={brandLogoDimensions.height}
      priority={priority}
      className={logoClass}
    />
  );
}
