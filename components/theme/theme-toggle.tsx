"use client";

import { m } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import type { ThemeMode } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

const modes: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light mode", icon: Sun },
  { value: "dark", label: "Dark mode", icon: Moon },
  { value: "system", label: "System preference", icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className="flex h-9 items-center rounded-lg border border-border/60 bg-muted/50 p-0.5"
        aria-hidden
      >
        <div className="size-8 rounded-md bg-muted" />
        <div className="size-8 rounded-md bg-muted" />
        <div className="size-8 rounded-md bg-muted" />
      </div>
    );
  }

  const activeTheme = (theme ?? "system") as ThemeMode;
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="flex items-center rounded-lg border border-border/60 bg-muted/40 p-0.5 backdrop-blur-sm"
      role="group"
      aria-label="Color theme"
    >
      {modes.map(({ value, label, icon: Icon }) => {
        const isActive = activeTheme === value;

        return (
          <Button
            key={value}
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={label}
            aria-pressed={isActive}
            className={cn(
              "relative size-8 rounded-md transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setTheme(value)}
          >
            {isActive ? (
              <m.span
                layoutId="theme-toggle-indicator"
                className="absolute inset-0 rounded-md bg-background shadow-sm ring-1 ring-border/60"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-hidden
              />
            ) : null}
            <Icon
              className={cn(
                "relative z-10 size-4 transition-transform duration-300",
                isActive && value === "light" && "text-amber-500",
                isActive && value === "dark" && "text-brand-pink",
                isActive && value === "system" && "text-brand-green",
                isActive && "scale-110",
              )}
              aria-hidden
            />
          </Button>
        );
      })}

      <span className="sr-only">
        Current appearance: {isDark ? "dark" : "light"}
        {activeTheme === "system" ? " (following system preference)" : ""}
      </span>
    </div>
  );
}
