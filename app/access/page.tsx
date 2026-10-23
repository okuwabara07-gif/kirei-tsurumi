import Link from "next/link";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { SALON } from "@/lib/salon";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta(
  "/access",
  "アクセス・営業時間｜鶴見駅徒歩4分 キレイ鶴見店（横浜市鶴見区鶴見中央）",
  `キレイ鶴見店へのアクセス。${SALON.address}。${SALON.access}。営業時間${SALON.hours}、${SALON.holiday}。`
);

export default function AccessPage() {
  const rows: [string, string][] = [
    ["店名", SALON.fullName],
    ["住所", `〒${SALON.postalCode} ${SALON.address}`],
    ["アクセス", SALON.access],
    ["営業時間", SALON.hours],
    ["定休日", SALON.holiday],
    ["お支払い", SALON.payment],
    ["ご予約", "ホットペッパービューティー・LINE"],
  ];
  return (
    <div style={{ maxWidth:"800px", margin:"0 auto", padding:"3rem 1rem" }}>
      <JsonLd data={breadcrumbJsonLd([{ name:"ホーム", path:"/" }, { name:"アクセス", path:"/access" }])} />
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>アクセス・営業時間</h1>
      <p style={{ color:"#7a5a60", marginBottom:"2rem", fontSize:"0.9rem" }}>{SALON.access}（横浜市鶴見区鶴見中央）</p>
      <iframe
        src={SALON.mapEmbed}
        width="100%" height="350"
        style={{ border:0, borderRadius:"12px", marginBottom:"1rem" }}
        allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="キレイ鶴見店 地図"
      />
      <p style={{ textAlign:"right", fontSize:"0.8rem", marginBottom:"2rem" }}>
        <a href={SALON.mapLink} target="_blank" rel="noopener" style={{ color:"#8B5E6B" }}>Googleマップで開く →</a>
      </p>
      <div style={{ background:"#fff", borderRadius:"12px", padding:"1.5rem 2rem", border:"1px solid #e8ddd8", marginBottom:"2rem" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <tbody>
            {rows.map(([l,v]) => (
              <tr key={l} style={{ borderBottom:"1px solid #f0e8e4" }}>
                <th style={{ padding:"12px 0", fontSize:"0.85rem", color:"#999", width:"120px", textAlign:"left", fontWeight:400 }}>{l}</th>
                <td style={{ padding:"12px 0", fontSize:"0.9rem", color:"#3a2428" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#3a2428", marginBottom:"1rem" }}>鶴見駅からの道順</h2>
      <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2, marginBottom:"2rem" }}>
        JR鶴見駅の東口、京急鶴見駅から徒歩4分ほどです。道に迷われた際は、上の「Googleマップで開く」から経路をご確認ください。
      </p>
      <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
        <a href={SALON.hotpepper} target="_blank" rel="noopener" style={{ background:"#111", color:"#fff", padding:"14px 36px", fontSize:"0.85rem", textDecoration:"none" }}>ホットペッパーで予約</a>
        <a href={SALON.line} target="_blank" rel="noopener" style={{ background:"#06C755", color:"#fff", padding:"14px 36px", fontSize:"0.85rem", textDecoration:"none" }}>LINEで予約・相談</a>
        <Link href="/menu" style={{ border:"1px solid #111", color:"#111", padding:"14px 36px", fontSize:"0.85rem", textDecoration:"none" }}>メニュー・料金</Link>
      </div>
    </div>
  );
}
