import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Primordial Technologies Limited | IT Solutions, Cybersecurity and Telecom Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #020617 100%)",
          padding: 64,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ed1d7e, #0c8140)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "white",
              }}
            />
          </div>
          <span style={{ color: "#e2e8f0", fontSize: 28, fontWeight: 600 }}>
            Primordial Technologies
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            IT Solutions · Cybersecurity · Telecom
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 26, margin: 0, lineHeight: 1.4 }}>
            Professional technology services for businesses & institutions in Nigeria
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <span style={{ color: "#ed1d7e" }}>|</span> Lagos, Nigeria
          <span>primordialtech.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
