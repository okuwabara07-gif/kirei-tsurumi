import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { SALON } from "@/lib/salon";

export const metadata = pageMeta(
  "/",
  "キレイ鶴見店｜鶴見駅徒歩4分の白髪染め専門ヘアカラーサロン（横浜市鶴見区）",
  "横浜市鶴見区・JR鶴見駅東口から徒歩4分の白髪染め専門店。オーガニックカラーのリタッチ¥2,500〜、全体染め¥3,040〜。オートシャンプー完備、PayPay対応。ホットペッパー・LINEで予約できます。"
);
const features = [
  { num: "01", title: "オーガニックカラー", desc: "天然由来成分を配合。頭皮と髪へのやさしさに配慮しながら、自然な発色に仕上げます。" },
  { num: "02", title: "オートシャンプー", desc: "カラーに最適な水流で丁寧に洗い流します。" },
  { num: "03", title: "プロ用カラー剤", desc: "サロン専用のカラー剤を、髪質や白髪の量に合わせて調合します。" },
  { num: "04", title: "PayPay対応", desc: "券売機・PayPay対応。追加料金なしの明朗会計。" },
];
const menu = [
  { name: "オーガニックカラー リタッチ", price: "¥2,500", note: "根元から2cm以内" },
  { name: "オーガニックカラー 全体", price: "¥3,040〜", note: "毛先の長さにより変動" },
  { name: "プレミアムカラー 根元染め", price: "¥3,900〜", note: "髪質改善ケア付き ¥4,800" },
  { name: "トリートメント", price: "¥1,200〜", note: "カラーと同時施術" },
];
export default function Home() {
  const latest = getAllPosts().slice(0, 3);
  return (
    <>
      <section style={{ position:"relative", height:"100svh", minHeight:"600px", overflow:"hidden", background:"#111" }}>
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80&auto=format&fit=crop"
          alt="ヘアサロン"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%) brightness(0.45)" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position:"relative", zIndex:10, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"0 2rem 4rem", maxWidth:"900px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.7rem", letterSpacing:"0.3em", color:"rgba(255,255,255,0.45)", marginBottom:"1rem" }}>HAIR COLOR SALON — TSURUMI, YOKOHAMA</p>
          <h1 style={{ fontFamily:"serif", fontSize:"clamp(2.5rem,7vw,5rem)", fontWeight:400, color:"#fff", lineHeight:1.1, marginBottom:"1.5rem", letterSpacing:"0.05em" }}>
            キレイ鶴見店
          </h1>
          <p style={{ fontSize:"clamp(0.85rem,2vw,1rem)", color:"rgba(255,255,255,0.65)", lineHeight:2, marginBottom:"2.5rem", maxWidth:"440px" }}>
            オーガニックカラーで、頭皮も髪も美しく。<br />
            白髪染め専門店として、お客様一人ひとりに<br />
            最適なカラーをご提案します。
          </p>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <a href="https://beauty.hotpepper.jp/slnH000501100/" target="_blank" rel="noopener"
              style={{ background:"#fff", color:"#111", padding:"14px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700 }}>
              HotPepper予約
            </a>
            <a href="https://line.me/R/ti/p/@545fncvi" target="_blank" rel="noopener"
              style={{ background:"#06C755", color:"#fff", padding:"14px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700 }}>
              LINE予約
            </a>
            <Link href="/menu"
              style={{ border:"1px solid rgba(255,255,255,0.4)", color:"#fff", padding:"14px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none" }}>
              メニュー
            </Link>
            <Link href="/diagnosis"
              style={{ display:"inline-block", background:"#8a9a85", color:"#fff", padding:"12px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700, margin:"10px 8px 0" }}>
              無料・白髪ケア診断
            </Link>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:"2rem", right:"2rem", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center", gap:"8px" }}>
          <div style={{ width:"1px", height:"60px", background:"linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.4))" }} />
          <p style={{ fontSize:"0.55rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.35)", writingMode:"vertical-rl" }}>SCROLL</p>
        </div>
      </section>

      <section style={{ background:"#f7f5f2", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto", display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", gap:"5rem", alignItems:"center" }}>
          <div>
            <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1.5rem" }}>— CONCEPT</p>
            <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"#111", lineHeight:1.5, marginBottom:"1.5rem", fontWeight:400 }}>
              髪と頭皮を大切に。<br />自然の力で美しく。
            </h2>
            <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:2.1, marginBottom:"2rem" }}>
              キレイ鶴見店では、オーガニックカラーを中心に、お客様の髪質や頭皮状態に合わせたカラーリングをご提案しています。頭皮と髪へのやさしさに配慮した処方で、自然で美しい発色をめざします。
            </p>
            <Link href="/menu" style={{ fontSize:"0.78rem", color:"#111", letterSpacing:"0.12em", borderBottom:"1px solid #111", paddingBottom:"3px", textDecoration:"none" }}>
              VIEW MENU →
            </Link>
          </div>
          <div style={{ position:"relative" }}>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop"
              alt="オーガニックカラー"
              style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover", filter:"grayscale(100%)" }}
            />
            <div style={{ position:"absolute", bottom:"-20px", left:"-20px", width:"55%", aspectRatio:"1", background:"#e5e0d8", zIndex:-1 }} />
          </div>
        </div>
      </section>

      <section style={{ padding:"0", overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", height:"40vw", maxHeight:"420px" }}>
          <img src="/images/salon-exterior.jpg" alt="キレイ鶴見店 外観"
            style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%)" }} />
          <img src="/images/salon-mirror.jpg" alt="キレイ鶴見店 店内"
            style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%)" }} />
          <img src="/images/salon-front.jpg" alt="キレイ鶴見店 セット面"
            style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%)" }} />
        </div>
      </section>

      <section style={{ background:"#111", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"rgba(255,255,255,0.35)", marginBottom:"1rem", textAlign:"center" }}>— FEATURES</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#fff", textAlign:"center", marginBottom:"4rem", fontWeight:400 }}>
            キレイ鶴見店の特徴
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"2.5rem" }}>
            {features.map(f => (
              <div key={f.title} style={{ borderTop:"1px solid rgba(255,255,255,0.12)", paddingTop:"1.5rem" }}>
                <p style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.25)", marginBottom:"1rem" }}>{f.num}</p>
                <h3 style={{ fontSize:"0.95rem", color:"#fff", marginBottom:"0.75rem", fontWeight:500 }}>{f.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", lineHeight:1.9 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#f7f5f2", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:"680px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1rem", textAlign:"center" }}>— MENU & PRICE</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", textAlign:"center", marginBottom:"3rem", fontWeight:400 }}>
            料金案内
          </h2>
          {menu.map((m, i) => (
            <div key={m.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.4rem 0", borderBottom:"1px solid #ddd8d0" }}>
              <div>
                <p style={{ fontSize:"0.95rem", color:"#111", fontWeight:500 }}>{m.name}</p>
                <p style={{ fontSize:"0.75rem", color:"#aaa", marginTop:"3px" }}>{m.note}</p>
              </div>
              <span style={{ fontSize:"1.1rem", color:"#555", fontWeight:400, fontFamily:"serif" }}>{m.price}</span>
            </div>
          ))}
          <p style={{ fontSize:"0.75rem", color:"#bbb", marginTop:"1.2rem", textAlign:"center" }}>
            ※ オートシャンプー＋セルフブロー込み。追加料金なし。
          </p>
          <div style={{ textAlign:"center", marginTop:"3rem", display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://beauty.hotpepper.jp/slnH000501100/" target="_blank" rel="noopener"
              style={{ background:"#111", color:"#fff", padding:"16px 56px", fontSize:"0.82rem", letterSpacing:"0.2em", textDecoration:"none" }}>
              HotPepper予約
            </a>
            <a href="https://line.me/R/ti/p/@545fncvi" target="_blank" rel="noopener"
              style={{ background:"#06C755", color:"#fff", padding:"16px 56px", fontSize:"0.82rem", letterSpacing:"0.2em", textDecoration:"none" }}>
              LINE予約
            </a>
          </div>
        </div>
      </section>

      <section style={{ background:"#fff", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
            <div>
              <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"0.5rem" }}>— COLUMN</p>
              <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", fontWeight:400 }}>美容コラム</h2>
            </div>
            <Link href="/blog" style={{ fontSize:"0.75rem", color:"#111", letterSpacing:"0.12em", borderBottom:"1px solid #111", paddingBottom:"2px", textDecoration:"none" }}>
              VIEW ALL →
            </Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2rem" }}>
            {latest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
                <article style={{ borderTop:"2px solid #111", paddingTop:"1.5rem", cursor:"pointer" }}>
                  <p style={{ fontSize:"0.68rem", letterSpacing:"0.15em", color:"#888", marginBottom:"0.75rem" }}>{post.category}</p>
                  <h3 style={{ fontFamily:"serif", fontSize:"1rem", color:"#111", lineHeight:1.6, marginBottom:"0.75rem", fontWeight:400 }}>{post.title}</h3>
                  <p style={{ fontSize:"0.82rem", color:"#888", lineHeight:1.8, marginBottom:"1rem" }}>{post.description}</p>
                  <p style={{ fontSize:"0.72rem", color:"#bbb", letterSpacing:"0.05em" }}>{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section style={{ background:"#fff", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1rem", textAlign:"center" }}>— ACCESS</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", textAlign:"center", marginBottom:"3rem", fontWeight:400 }}>アクセス</h2>
          <iframe
            src={SALON.mapEmbed}
            width="100%" height="400"
            style={{ border:0, filter:"grayscale(100%)" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="キレイ鶴見店 地図"
          />
          <p style={{ textAlign:"center", fontSize:"0.82rem", color:"#888", marginTop:"1rem", lineHeight:2 }}>
            {SALON.address} ／ {SALON.access}<br />
            営業時間 {SALON.hours}・{SALON.holiday}　<Link href="/access" style={{ color:"#111" }}>アクセス詳細 →</Link>
          </p>
        </div>
      </section>

      <section style={{ background:"#f7f5f2", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:"720px", margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1rem" }}>— VOICE</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", marginBottom:"1.5rem", fontWeight:400 }}>お客様の口コミ</h2>
          <p style={{ fontSize:"0.88rem", color:"#555", lineHeight:2, marginBottom:"2rem" }}>
            ご来店いただいたお客様の口コミは、ホットペッパービューティーに掲載しています。<br />
            実際の仕上がりや接客の様子をご確認ください。
          </p>
          <a href={`${SALON.hotpepper}review/`} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-block", border:"1px solid #111", color:"#111", padding:"12px 36px", fontSize:"0.78rem", letterSpacing:"0.15em", textDecoration:"none" }}>
            口コミを見る（ホットペッパービューティー）
          </a>
        </div>
      </section>
      <section style={{ position:"relative", overflow:"hidden" }}>
        <img src="/images/salon-chair.jpg"
          alt="キレイ鶴見店 スタッフ募集"
          style={{ width:"100%", height:"400px", objectFit:"cover", filter:"grayscale(100%) brightness(0.35)" }}
        />
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.3em", color:"rgba(255,255,255,0.4)", marginBottom:"1rem" }}>— JOIN US</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2.2rem)", color:"#fff", fontWeight:400, marginBottom:"1rem" }}>スタッフ募集中</h2>
          <p style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.6)", lineHeight:2, marginBottom:"2rem" }}>
            週1日・3時間から。主婦・ダブルワーク・ブランク歓迎。<br />食事手当・通勤手当完備。
          </p>
          <Link href="/recruit" style={{ border:"1px solid rgba(255,255,255,0.4)", color:"#fff", padding:"12px 36px", fontSize:"0.78rem", letterSpacing:"0.15em", textDecoration:"none" }}>
            詳細を見る
          </Link>
        </div>
      </section>
    </>
  );
}
