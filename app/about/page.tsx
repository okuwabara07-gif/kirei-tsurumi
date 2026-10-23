import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SALON } from "@/lib/salon";

export const metadata = pageMeta("/about", "運営者情報｜キレイ鶴見店（AOKAE合同会社）", "白髪染め専門店キレイ鶴見店の運営者情報。横浜市鶴見区鶴見中央の実店舗と、コラムの監修体制についてご紹介します。");
export default function AboutPage() {
  return (
    <div style={{ maxWidth:"720px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#111", marginBottom:"0.5rem", fontWeight:400 }}>運営者情報</h1>
      <p style={{ color:"#888", fontSize:"0.85rem", marginBottom:"3rem" }}>About</p>

      <div style={{ background:"#fff", borderRadius:"4px", overflow:"hidden", marginBottom:"3rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0" }}>
          <img src="/images/salon-exterior.jpg" alt="キレイ鶴見店 外観"
            style={{ width:"100%", height:"280px", objectFit:"cover", filter:"grayscale(100%)" }} />
          <img src="/images/salon-mirror.jpg" alt="キレイ鶴見店 店内"
            style={{ width:"100%", height:"280px", objectFit:"cover", filter:"grayscale(100%)" }} />
        </div>
      </div>

      <div style={{ marginBottom:"3rem" }}>
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>サイト運営者について</h2>
        <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2.2 }}>
          本サイト「キレイ鶴見店」は、神奈川県横浜市鶴見区に実店舗を構えるヘアカラー専門サロンの公式サイトです。運営はAOKAE合同会社が行っています。白髪染めを中心に、お客様の髪と頭皮の健康に配慮しながら、一人ひとりに合った髪色を提案することをミッションとしています。
        </p>
        <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2.2, marginTop:"1rem" }}>
          当サイトに掲載している美容コラムは、実店舗キレイ鶴見店のカラーリストが、日々の施術で得た知見をもとに監修しています。実際の施術例に基づいた、白髪染めとヘアケアの実践的な情報をお届けすることを目指しています。
        </p>
      </div>

      <div style={{ borderTop:"1px solid #e8e0d8", paddingTop:"2rem", marginBottom:"3rem" }}>
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>店舗・運営情報</h2>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          {[
            ["店舗名", "白髪染め専門店 キレイ鶴見店"],
            ["運営会社", "AOKAE合同会社"],
            ["住所", `〒${SALON.postalCode} ${SALON.address}`],
            ["アクセス", SALON.access],
            ["営業時間", SALON.hours],
            ["定休日", SALON.holiday],
            ["お支払い", SALON.payment],
            ["Instagram", "@kirei.tsurumi"],
            ["X", "@kirei_tsurumi"],
          ].map(([l,v]) => (
            <tr key={l} style={{ borderBottom:"1px solid #f0ede8" }}>
              <td style={{ padding:"12px 0", fontSize:"0.82rem", color:"#999", width:"140px" }}>{l}</td>
              <td style={{ padding:"12px 0", fontSize:"0.88rem", color:"#333" }}>{v}</td>
            </tr>
          ))}
        </table>
      </div>

      <div style={{ borderTop:"1px solid #e8e0d8", paddingTop:"2rem", marginBottom:"3rem" }}>
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>監修体制</h2>
        <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2.2 }}>
          当サイトの記事は、実店舗キレイ鶴見店のカラーリストが監修しています。白髪染めを専門とするサロンとして、実際のカウンセリングや施術の現場で得た知見をもとに、正確で役立つ情報の発信を心がけています。掲載している施術例は当店での実例に基づいています（写真はイメージを含みます）。
        </p>
      </div>

      <div style={{ textAlign:"center" }}>
        <Link href="/contact" style={{ background:"#111", color:"#fff", padding:"14px 48px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none" }}>
          お問い合わせ
        </Link>
      </div>
    </div>
  );
}
