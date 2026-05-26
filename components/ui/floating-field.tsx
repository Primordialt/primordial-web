"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FloatingFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FloatingField({
  id,
  label,
  error,
  hint,
  required,
  children,
  className,
}: FloatingFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint && !error ? `${id}-hint` : undefined;

  return (
    <div className={cn("relative", className)}>
      {children}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-3 top-1/2 z-10 origin-left -translate-y-1/2 text-sm text-muted-foreground transition-all duration-200",
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-90 peer-focus:text-brand-pink",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-90",
          "peer-[.is-filled]:top-2 peer-[.is-filled]:translate-y-0 peer-[.is-filled]:scale-90",
        )}
      >
        {label}
        {required ? <span className="text-brand-pink"> *</span> : null}
      </label>
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="mt-1.5 text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const floatingInputClassName =
  "peer w-full rounded-lg border bg-background/80 px-3 pb-2 pt-6 text-sm shadow-sm transition-colors placeholder-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&:not(:placeholder-shown)]:pt-6";

type FloatingInputProps = React.ComponentProps<"input"> & {
  error?: boolean;
};

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      placeholder=" "
      aria-invalid={error || undefined}
      className={cn(
        floatingInputClassName,
        error
          ? "border-destructive focus-visible:ring-destructive"
          : "border-input hover:border-brand-pink/30",
        className,
      )}
      {...props}
    />
  ),
);
FloatingInput.displayName = "FloatingInput";

type FloatingTextareaProps = React.ComponentProps<"textarea"> & {
  error?: boolean;
};

export const FloatingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingTextareaProps
>(({ className, error, ...props }, ref) => (
  <textarea
    ref={ref}
    placeholder=" "
    aria-invalid={error || undefined}
    className={cn(
      floatingInputClassName,
      "min-h-[140px] resize-y",
      error
        ? "border-destructive focus-visible:ring-destructive"
        : "border-input hover:border-brand-pink/30",
      className,
    )}
    {...props}
  />
));
FloatingTextarea.displayName = "FloatingTextarea";

type FloatingSelectProps = React.ComponentProps<"select"> & {
  error?: boolean;
};

export const FloatingSelect = React.forwardRef<HTMLSelectElement, FloatingSelectProps>(
  ({ className, error, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        floatingInputClassName,
        "appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10",
        error
          ? "border-destructive focus-visible:ring-destructive"
          : "border-input hover:border-brand-pink/30",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
      }}
      {...props}
    >
      {children}
    </select>
  ),
);
FloatingSelect.displayName = "FloatingSelect";
