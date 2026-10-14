import { ImageResponse } from "next/og";

export const alt = "WillFolks — Pon tu dinero donde están tus metas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0a",
          color: "#f5f5f0",
          padding: 72,
          borderLeft: "24px solid #c5ff0a",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, color: "#c5ff0a", letterSpacing: 4 }}>
          WILLFOLKS
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          <span>Put your money</span>
          <span style={{ color: "#c5ff0a" }}>where your goals are.</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3a39a" }}>
          Stake USDC on your goals · Escrow on Monad
        </div>
      </div>
    ),
    { ...size },
  );
}
