import { ImageResponse } from "next/og";

export const alt = "Mileo Express · Transporte internacional Brasil–Uruguai desde 2000";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para cuando se comparte el link (WhatsApp, LinkedIn, etc.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111113",
          color: "#fff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#e0262b" }} />
          <div style={{ fontSize: 28, letterSpacing: 6, color: "rgba(255,255,255,0.7)" }}>
            BRASIL · URUGUAI · ARGENTINA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1 }}>MILEO EXPRESS</div>
          <div style={{ fontSize: 44, color: "rgba(255,255,255,0.75)" }}>
            Transporte internacional de cargas desde 2000
          </div>
        </div>
        <div style={{ display: "flex", height: 10, background: "#990000", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
