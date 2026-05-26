"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";
import type { ReactNode } from "react";

import { ThemeTransition } from "@/components/theme/theme-transition";
import { THEME_STORAGE_KEY } from "@/lib/theme-config";

type ThemeProviderProps = {
  children: ReactNode;
} & Omit<NextThemesProviderProps, "children">;

/**
 * Theme provider with localStorage persistence, system preference, and smooth transitions.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange={false}
      enableColorScheme
      {...props}
    >
      <ThemeTransition>{children}</ThemeTransition>
    </NextThemesProvider>
  );
}
