import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{ background:"#111", color:"rgba(255,255,255,0.5)" }}>
      <div style={{ maxWidth:"1000px", margin:"0 auto", padding:"4rem 2rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"3rem", marginBottom:"3rem" }}>
          <div>
            <p style={{ fontFamily:"serif", fontSize:"1.3rem", color:"#fff", marginBottom:"0.5rem", fontWeight:400 }}>キレイ鶴見店</p>
            <p style={{ fontSize:"0.75rem", lineHeight:2 }}>白髪染め専門ヘアカラーサロン<br />鶴見駅徒歩4分</p>
            <div style={{ display:"flex", gap:"10px", marginTop:"1.5rem" }}>
              <a href="https://www.instagram.com/kirei.tsurumi/" target="_blank" rel="noopener"
                style={{ width:"36px", height:"36px", border:"1px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.6)", fontSize:"0.62rem", letterSpacing:"0.03em", textDecoration:"none" }}>
                IG
              </a>
              <a href="https://x.com/kirei_tsurumi" target="_blank" rel="noopener"
                style={{ width:"36px", height:"36px", border:"1px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.6)", fontSize:"0.62rem", textDecoration:"none" }}>
                X
              </a>
            </div>
          </div>
          <div>
            <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.3)", marginBottom:"1rem" }}>MENU</p>
            {[
              {href:"/menu",label:"メニュー・料金"},
              {href:"/blog",label:"美容コラム"},
              {href:"/access",label:"アクセス"},
              {href:"/recruit",label:"採用情報"},
              {href:"/contact",label:"お問い合わせ"},{href:"/about",label:"運営者情報"},
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display:"block", fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", marginBottom:"0.75rem", textDecoration:"none" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.3)", marginBottom:"1rem" }}>INFO</p>
            <p style={{ fontSize:"0.82rem", lineHeight:2.2 }}>
              東京都鶴見中央<br />
              10:00〜18:00<br />
              PayPay・券売機対応
            </p>
          </div>
          <div>
            <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.3)", marginBottom:"1rem" }}>LINKS</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
              <a href="https://line.me/R/ti/p/@545fncvi" target="_blank" rel="noopener noreferrer"
                style={{ fontSize:"0.82rem", color:"#06C755", textDecoration:"none", fontWeight:500 }}>
                LINE予約
              </a>
              <a href="https://beauty.hotpepper.jp/slnH000501100/" target="_blank" rel="noopener"
                style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", textDecoration:"none" }}>
                ネット予約（ホットペッパー）
              </a>
              <a href="https://www.instagram.com/kirei.tsurumi/" target="_blank" rel="noopener"
                style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", textDecoration:"none" }}>
                Instagram
              </a>
              <a href="https://x.com/kirei_tsurumi" target="_blank" rel="noopener"
                style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", textDecoration:"none" }}>
                X（旧Twitter）
              </a>
              <a href="https://en-gage.net/kireitsurumi2021_saiyo/" target="_blank" rel="noopener"
                style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", textDecoration:"none" }}>
                採用情報（エンゲージ）
              </a>
              <a href="https://salonrink.com" target="_blank" rel="noopener"
                style={{ fontSize:"0.82rem", color:"#B8966A", textDecoration:"none", fontWeight:500 }}>
                SalonRink（サロン向けDXツール）
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"2rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.2)" }}>© 2025 キレイ鶴見店 All Rights Reserved.</p>
          <Link href="/privacy" style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.2)", textDecoration:"none" }}>
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
