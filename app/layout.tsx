import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GlobalJsonLd } from "@/components/seo/json-ld";
import { ThemeColorSync } from "@/components/theme/theme-color-sync";
import { ThemeInitScript } from "@/components/theme/theme-init-script";
import { fontVariables } from "@/lib/fonts";
import { baseMetadata, viewport } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = baseMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className={`${fontVariables} min-h-screen antialiased`}>
        <ThemeProvider>
          <ThemeColorSync />
          <MotionProvider>
            <GlobalJsonLd />
            <SiteShell>{children}</SiteShell>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
