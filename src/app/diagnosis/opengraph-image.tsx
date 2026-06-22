import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "白髪ケア診断｜キレイ鶴見店";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG画像に出す文字だけをサブセットで取得する（フォントが軽くなりedgeで高速）。
// 画像内に現れる全グリフを含めること（Latin/数字/句読点も）。
const SUBSET = "KIREITSURUM 白髪ケア診断5つの質問であなたに合方向性を、。専門店監修";

async function loadFont(weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@${weight}&text=${encodeURIComponent(SUBSET)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
    }
  ).then((r) => r.text());
  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error("font url not found");
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [w500, w700] = await Promise.all([loadFont(500), loadFont(700)]);

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
          background: "#fbfaf6",
          fontFamily: "NotoSerifJP",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 14, background: "#8a9a85" }} />
        <div style={{ fontSize: 26, letterSpacing: 12, color: "#8a9a85", marginBottom: 30 }}>
          KIREI TSURUMI
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, color: "#3a392f" }}>白髪ケア診断</div>
        <div style={{ fontSize: 30, color: "#928d80", marginTop: 30 }}>
          5つの質問で、あなたに合う方向性を。
        </div>
        <div style={{ fontSize: 22, color: "#b3a08e", marginTop: 54, letterSpacing: 4 }}>専門店監修</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "NotoSerifJP", data: w500, style: "normal", weight: 500 },
        { name: "NotoSerifJP", data: w700, style: "normal", weight: 700 },
      ],
    }
  );
}
