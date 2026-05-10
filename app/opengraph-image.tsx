import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site"

export const alt = "Redbike Tech document search for accountants"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f6f3",
          color: "#171717",
          padding: "64px",
          fontFamily: "Inter, Arial, sans-serif",
          border: "1px solid #eadfd9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                background: "#c21725",
                color: "#ffffff",
                fontWeight: 900,
              }}
            >
              R
            </div>
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #e3d2cc",
              borderRadius: 999,
              padding: "12px 20px",
              color: "#8f1d24",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Built for accounting firms
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 930,
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: 0,
              fontWeight: 900,
            }}
          >
            Document search for accountants
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 820,
              color: "#514846",
              fontSize: 32,
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            Find client tax files, source answers, and reclaim billable time without digging through folders.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#7b706d",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <div style={{ width: 120, height: 8, borderRadius: 999, background: "#c21725" }} />
          Secure retrieval. Source-backed answers. Faster client responses.
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
