"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import { themeColor } from "@/lib/theme-config";

/**
 * Syncs the browser theme-color meta tag with the resolved theme.
 */
export function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const color = resolvedTheme === "dark" ? themeColor.dark : themeColor.light;
    const meta = document.querySelector('meta[name="theme-color"]');

    if (meta) {
      meta.setAttribute("content", color);
    } else {
      const element = document.createElement("meta");
      element.name = "theme-color";
      element.content = color;
      document.head.appendChild(element);
    }
  }, [resolvedTheme]);

  return null;
}
