/** localStorage key for next-themes persistence */
export const THEME_STORAGE_KEY = "primordial-theme";

export const themeModes = ["light", "dark", "system"] as const;
export type ThemeMode = (typeof themeModes)[number];

export const themeColor = {
  light: "#f8fafc",
  dark: "#020617",
} as const;
