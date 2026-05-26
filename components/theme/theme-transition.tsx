"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, type ReactNode } from "react";

type ThemeTransitionProps = {
  children: ReactNode;
};

const TRANSITION_MS = 320;

/**
 * Applies a short-lived class on the root element when theme changes for smooth color transitions.
 */
export function ThemeTransition({ children }: ThemeTransitionProps) {
  const { resolvedTheme } = useTheme();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!resolvedTheme) return;

    const root = document.documentElement;
    root.style.colorScheme = resolvedTheme;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    root.classList.add("theme-transition");
    const timeout = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [resolvedTheme]);

  return <>{children}</>;
}
