import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineFloatingButton from "@/components/LineFloatingButton";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, salonJsonLd } from "@/lib/salon";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // canonical はここでは指定しない（全ページがトップを指してしまうため）。各ページで pageMeta() を使う。
  title: { default: "キレイ鶴見店｜鶴見駅徒歩4分の白髪染め専門ヘアカラーサロン", template: "%s｜キレイ鶴見店" },
  description: "横浜市鶴見区・鶴見駅徒歩4分の白髪染め専門店。オーガニックカラーのリタッチ¥2,500〜。オートシャンプー完備、PayPay対応。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="dTILA-qEEcD5-0bH_SyBi4seyoLD2CIUG1L5m2IRO3w" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3460729726810386" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={salonJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LineFloatingButton />
      </body>
    </html>
  );
}
