"use client";

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
  const activeIndex = modes.findIndex((mode) => mode.value === activeTheme);

  const moveSelection = (direction: 1 | -1) => {
    const nextIndex = (activeIndex + direction + modes.length) % modes.length;
    setTheme(modes[nextIndex].value);
  };

  return (
    <div
      className="flex items-center rounded-lg border border-border/60 bg-muted/40 p-0.5 backdrop-blur-sm"
      role="radiogroup"
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
            role="radio"
            aria-label={label}
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            className={cn(
              "relative size-8 rounded-md transition-colors",
              isActive
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setTheme(value)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                moveSelection(1);
              } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                moveSelection(-1);
              }
            }}
          >
            <Icon
              className={cn(
                "size-4 transition-transform duration-300",
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
