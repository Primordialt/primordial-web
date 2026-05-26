/**
 * Primordial Technologies — design tokens
 * Source of truth for programmatic access; CSS variables in globals.css mirror these.
 */

export const brandColors = {
  pink: "#ed1d7e",
  green: "#0c8140",
  pinkRgb: "237 29 126",
  greenRgb: "12 129 64",
} as const;

export const colorTokens = {
  light: {
    background: "#f8fafc",
    foreground: "#0f172a",
    card: "#ffffff",
    muted: "#eef2f7",
    mutedForeground: "#475569",
    border: "#dbe3ee",
    surfaceElevated: "#ffffff",
    surfaceInset: "#f1f5f9",
    glowPink: "rgba(237, 29, 126, 0.18)",
    glowGreen: "rgba(12, 129, 64, 0.16)",
  },
  dark: {
    background: "#020617",
    foreground: "#e2e8f0",
    card: "#0b1220",
    muted: "#111827",
    mutedForeground: "#94a3b8",
    border: "#1e293b",
    surfaceElevated: "#0f172a",
    surfaceInset: "#020617",
    glowPink: "rgba(237, 29, 126, 0.22)",
    glowGreen: "rgba(12, 129, 64, 0.2)",
  },
} as const;

export const spacingTokens = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

export const radiusTokens = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "0.9rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  full: "9999px",
} as const;

export const shadowTokens = {
  sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
  md: "0 8px 24px rgba(15, 23, 42, 0.08)",
  lg: "0 16px 48px rgba(15, 23, 42, 0.12)",
  glow: "0 0 40px rgba(237, 29, 126, 0.18)",
  glowGreen: "0 0 40px rgba(12, 129, 64, 0.16)",
  inner: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
} as const;

export const zIndexTokens = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  toast: 50,
} as const;

export const transitionTokens = {
  fast: "150ms",
  base: "300ms",
  slow: "500ms",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

export const containerTokens = {
  narrow: "42rem",
  default: "80rem",
  wide: "90rem",
  padding: {
    mobile: "1rem",
    tablet: "1.5rem",
    desktop: "2rem",
  },
} as const;
