import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.metaTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#09090b",
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(99,102,241,0.35), transparent 45%)",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#a1a1aa" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#22c55e" }} />
          {site.status}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 44, color: "#a5b4fc", marginTop: 12 }}>
            {`AI-native ${site.title}`}
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#71717a" }}>{site.url.replace("https://", "")}</div>
      </div>
    ),
    size,
  );
}
