import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MotionProvider>
            <JsonLd />
            <SiteShell>{children}</SiteShell>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
