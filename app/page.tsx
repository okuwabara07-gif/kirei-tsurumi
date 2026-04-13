import Link from "next/link";
const features = [
  { icon: "🌿", title: "オーガニックカラー導入", desc: "頭皮も髪も健康に。肌に優しいオーガニックカラー剤で施術します。" },
  { icon: "🚿", title: "オートシャンプー完備", desc: "カラーリングに最適な水流で優しく洗い流します。" },
  { icon: "💄", title: "国内売上No.1カラー剤", desc: "話題のカラー剤を豊富にご用意。髪質に合わせて調合します。" },
  { icon: "💳", title: "PayPay・券売機対応", desc: "追加料金なし。安心の明朗会計です。" },
  { icon: "🪞", title: "カラーチェック", desc: "仕上がりをミラーで確認。しなやかで健康的な髪色をお届け。" },
  { icon: "💧", title: "オイルトリートメント", desc: "褪色防止効果のあるオイルでドライ。長持ちする美しい色を保ちます。" },
];
const menu = [
  { name: "白髪染め（リタッチ）", price: "¥3,300〜" },
  { name: "白髪染め（全体）", price: "¥5,500〜" },
  { name: "おしゃれ染め", price: "¥4,400〜" },
  { name: "トリートメント", price: "¥1,100〜" },
];
export default function Home() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#f9f0f2 0%,#fdf8f6 50%,#f5ede8 100%)", padding: "4rem 1rem 3rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", color: "#8B5E6B", marginBottom: "1rem" }}>HAIR COLOR SALON — 鶴見駅徒歩4分</p>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,5vw,2.8rem)", fontWeight: 600, color: "#3a2428", lineHeight: 1.4, marginBottom: "1.5rem" }}>
            オシャレな白髪染め専門店<br /><span style={{ color: "#8B5E6B" }}>キレイ鶴見店</span>
          </h1>
          <p style={{ color: "#7a5a60", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>頭皮と髪を大切に。オーガニックカラーでダメージレスな美しい髪色をご提供します。</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
              style={{ background: "#8B5E6B", color: "#fff", padding: "14px 32px", borderRadius: "30px", fontSize: "1rem", fontWeight: 700, textDecoration: "none" }}>
              📅 ネット予約する
            </a>
            <Link href="/menu" style={{ background: "#fff", color: "#8B5E6B", border: "2px solid #8B5E6B", padding: "14px 32px", borderRadius: "30px", fontSize: "1rem", textDecoration: "none" }}>
              メニュー・料金を見る
            </Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", textAlign: "center", fontSize: "1.6rem", color: "#3a2428", marginBottom: "2rem" }}>キレイ鶴見店の特徴</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
            {features.map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "12px", padding: "1.5rem", border: "1px solid #e8ddd8" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#5C3A45", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#7a5a60", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "#f9f0f2", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", textAlign: "center", fontSize: "1.6rem", color: "#3a2428", marginBottom: "2rem" }}>料金案内</h2>
          <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e8ddd8" }}>
            {menu.map((m, i) => (
              <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: i < menu.length-1 ? "1px solid #f0e8e4" : "none" }}>
                <span style={{ fontSize: "0.95rem", color: "#3a2428" }}>{m.name}</span>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "#8B5E6B" }}>{m.price}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#999", marginTop: "1rem" }}>※ オートシャンプー＋セルフブロー込み。追加料金なし。</p>
        </div>
      </section>
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "serif", fontSize: "1.6rem", color: "#3a2428", marginBottom: "0.5rem" }}>美容コラム</h2>
        <p style={{ color: "#7a5a60", fontSize: "0.9rem", marginBottom: "1.5rem" }}>ヘアカラー・白髪染めに関するお役立ち情報をお届けします</p>
        <Link href="/blog" style={{ background: "#8B5E6B", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontSize: "0.9rem", textDecoration: "none" }}>コラムを読む</Link>
      </section>
      <section style={{ background: "#3a2428", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "serif", fontSize: "1.4rem", marginBottom: "1rem" }}>スタッフ募集中</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#c8b0b8", marginBottom: "1.5rem" }}>週1日・3時間から勤務OK。食事手当＆通勤手当完備。<br />主婦・ダブルワーク・ブランク歓迎。</p>
        <Link href="/recruit" style={{ border: "1px solid #c8b0b8", color: "#fff", padding: "10px 24px", borderRadius: "20px", fontSize: "0.85rem", textDecoration: "none" }}>採用情報を見る</Link>
      </section>
    </>
  );
}
