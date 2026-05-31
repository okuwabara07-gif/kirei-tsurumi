import Link from "next/link";
export default function ContactPage() {
  return (
    <div style={{ maxWidth:"600px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>お問い合わせ</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>ご質問・ご相談はこちらからどうぞ。</p>
      <div style={{ background:"#fff", borderRadius:"12px", padding:"2rem", border:"1px solid #e8ddd8" }}>
        <p style={{ fontSize:"0.9rem", color:"#7a5a60", lineHeight:1.8, marginBottom:"1.5rem" }}>
          下記のフォームよりお問い合わせください。<br />通常2〜3営業日以内にご返信いたします。
        </p>
        <a href="【実際のGoogleフォームURLを記入】" target="_blank" rel="noopener"
          style={{ display:"block", background:"#8B5E6B", color:"#fff", padding:"14px", borderRadius:"8px", textAlign:"center", textDecoration:"none", fontSize:"1rem", fontWeight:700 }}>
          お問い合わせフォームを開く
        </a>
        <p style={{ fontSize:"0.8rem", color:"#999", lineHeight:1.8, marginTop:"1.5rem" }}>
          メールでのお問い合わせ: 【連絡用メールアドレスを記入】
        </p>
      </div>
      <p style={{ fontSize:"0.8rem", color:"#999", marginTop:"1.5rem", textAlign:"center" }}>
        いただいた個人情報は<Link href="/privacy" style={{ color:"#8B5E6B" }}>プライバシーポリシー</Link>に基づき適切に取り扱います。
      </p>
    </div>
  );
}
