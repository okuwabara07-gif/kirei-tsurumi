import Link from "next/link";
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
          本サイト「キレイ鶴見店」は、神奈川県横浜市鶴見区に実店舗を構えるヘアカラー専門サロンが運営する公式サイトです。白髪染めを中心に、オーガニックカラーや髪質改善カラーなど、お客様の髪と頭皮の健康を守りながら美しい髪色を提供することをミッションとしています。
        </p>
        <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2.2, marginTop:"1rem" }}>
          当サイトに掲載している美容コラムは、10年以上のキャリアを持つカラーリストが監修しています。ヘアカラーや白髪ケアに関する正確で役立つ情報をお届けすることを目指しています。
        </p>
      </div>

      <div style={{ borderTop:"1px solid #e8e0d8", paddingTop:"2rem", marginBottom:"3rem" }}>
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>店舗情報</h2>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          {[
            ["店舗名", "オシャレな白髪染め専門店 キレイ鶴見店"],
            ["住所", "神奈川県横浜市鶴見区鶴見中央5-10-8"],
            ["アクセス", "JR鶴見駅東口・京急鶴見駅東口より徒歩4分"],
            ["営業時間", "10:00〜18:00（最終受付17:00）"],
            ["定休日", "不定休"],
            ["お支払い", "PayPay・各種クレジットカード対応"],
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
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>監修者プロフィール</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
          {[
            { name:"田村（シニアカラリスト）", career:"美容師歴15年。オーガニックカラーの専門家として、頭皮と髪の健康を守りながら美しい発色を実現することを使命としています。白髪染めに悩む40〜50代のお客様を中心に、年間1,000件以上の施術実績があります。" },
            { name:"中島（カラーリスト）", career:"カラー専門歴12年。白髪染めからおしゃれ染めまで幅広く対応。特に40〜50代のお客様の髪の悩みに寄り添ったカラー提案が得意です。" },
            { name:"山本（チーフカラリスト）", career:"美容師歴18年、カラー専門歴10年。髪質改善カラーのスペシャリストとして、ダメージを最小限に抑えた施術を提供しています。" },
          ].map(s => (
            <div key={s.name} style={{ background:"#f7f5f2", padding:"1.5rem", borderLeft:"3px solid #111" }}>
              <p style={{ fontSize:"0.9rem", fontWeight:700, color:"#111", marginBottom:"0.5rem" }}>キレイ鶴見店 {s.name}</p>
              <p style={{ fontSize:"0.85rem", color:"#555", lineHeight:1.9 }}>{s.career}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign:"center" }}>
        <Link href="/contact" style={{ background:"#111", color:"#fff", padding:"14px 48px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none" }}>
          お問い合わせ
        </Link>
      </div>
    </div>
  );
}
