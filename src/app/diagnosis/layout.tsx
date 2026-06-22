import type { Metadata } from "next";

// /diagnosis は "use client" のため、metadata はこの server layout が担当する。
// 同ディレクトリの opengraph-image.tsx が OG 画像を自動で供給する。

export const metadata: Metadata = {
  title: "白髪ケア診断｜キレイ鶴見店",
  description:
    "5つの質問で、あなたに合う白髪ケアの方向性を。鶴見の白髪染め専門店が監修した、やさしい診断です。",
  alternates: { canonical: "https://kirei-tsurumi.com/diagnosis" },
  openGraph: {
    title: "白髪ケア診断｜キレイ鶴見店",
    description: "5つの質問で、あなたに合う白髪ケアの方向性を。",
    url: "https://kirei-tsurumi.com/diagnosis",
    siteName: "キレイ鶴見店",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "白髪ケア診断｜キレイ鶴見店",
    description: "5つの質問で、あなたに合う白髪ケアの方向性を。",
  },
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
