import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{ background: "#3a2428", color: "#c8b0b8", marginTop: "4rem" }}>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p style={{ fontFamily: "serif", fontSize: "1.1rem", color: "#fff", marginBottom: "8px" }}>キレイ鶴見店</p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>白髪染め専門ヘアカラーサロン<br />鶴見駅徒歩4分</p>
          </div>
          <div>
            <p style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>営業情報</p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>神奈川県横浜市鶴見区鶴見中央<br />営業時間：10:00〜18:00<br />PayPay・券売機対応</p>
          </div>
          <div>
            <p style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>リンク</p>
            {[{href:"/menu",label:"メニュー・料金"},{href:"/blog",label:"美容コラム"},{href:"/access",label:"アクセス"},{href:"/recruit",label:"採用情報"},{href:"/contact",label:"お問い合わせ"}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: "0.8rem", color: "#c8b0b8", marginBottom: "4px" }} className="hover:text-white">{l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #5a3a40", marginTop: "2rem", paddingTop: "1rem", fontSize: "0.75rem", textAlign: "center" }}>
          © 2025 キレイ鶴見店 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
