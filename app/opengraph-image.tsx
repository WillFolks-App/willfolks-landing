import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO_GROUP_TRANSFORM, LOGO_SHAPES, LOGO_VIEWBOX } from "@/lib/logo";

export const alt = "WillFolks — Pon tu dinero donde están tus metas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Brand wordmark face
  const righteous = await readFile(
    join(process.cwd(), "public/fonts/Righteous/Righteous-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#c5ff0a",
        }}
      >
        <svg width="300" height="300" viewBox={LOGO_VIEWBOX} fill="#c5ff0a">
          <g transform={LOGO_GROUP_TRANSFORM}>
            {LOGO_SHAPES.map((shape) => (
              <path key={shape.id} transform={shape.transform} d={shape.d} />
            ))}
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontFamily: "Righteous",
            fontSize: 150,
            lineHeight: 1,
            color: "#f5f5f0",
          }}
        >
          WillFolks
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Righteous", data: righteous, style: "normal", weight: 400 }],
    },
  );
}
