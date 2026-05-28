import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { brandColors } from "@/lib/brand-assets";
import { homepageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const ogImageSize = { width: 1200, height: 630 } as const;
export const ogImageAlt = homepageSeo.title;
export const ogImageContentType = "image/png";

const logoPath = join(
  process.cwd(),
  "public",
  "lobatan",
  "android-chrome-512x512.png",
);

export async function createBrandedOgImage() {
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${brandColors.background} 0%, #0f172a 50%, ${brandColors.background} 100%)`,
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <span style={{ color: "#ffffff", fontSize: 34, fontWeight: 700 }}>
            {siteConfig.shortName}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 960,
          }}
        >
          <p
            style={{
              color: brandColors.pink,
              fontSize: 22,
              fontWeight: 600,
              margin: 0,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            IT Solutions · Cybersecurity · Telecom
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            {homepageSeo.title.split(" | ")[1] ?? homepageSeo.title}
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 26,
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            {homepageSeo.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <span style={{ color: brandColors.pink }}>|</span>
          <span>Lagos, Nigeria</span>
          <span>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
