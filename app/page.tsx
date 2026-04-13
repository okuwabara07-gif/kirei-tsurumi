import Link from "next/link";
const features = [
  { num: "01", title: "オーガニックカラー", desc: "天然由来成分配合。頭皮と髪に優しく、自然な発色を実現します。" },
  { num: "02", title: "オートシャンプー", desc: "カラーに最適な水流で丁寧に洗い流します。" },
  { num: "03", title: "国内No.1カラー剤", desc: "髪質に合わせて調合。ダメージを最小限に抑えます。" },
  { num: "04", title: "PayPay対応", desc: "券売機・PayPay対応。追加料金なしの明朗会計。" },
];
const menu = [
  { name: "白髪染め リタッチ", price: "¥3,300〜", note: "根元のみ" },
  { name: "白髪染め 全体", price: "¥5,500〜", note: "毛先まで" },
  { name: "おしゃれ染め", price: "¥4,400〜", note: "全体カラー" },
  { name: "トリートメント", price: "¥1,100〜", note: "カラーと同時" },
];
export default function Home() {
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
            <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
              style={{ background:"#fff", color:"#111", padding:"14px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700 }}>
              予　約
            </a>
            <Link href="/menu"
              style={{ border:"1px solid rgba(255,255,255,0.4)", color:"#fff", padding:"14px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none" }}>
              メニュー
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
              キレイ鶴見店では、オーガニックカラーを中心に、お客様の髪質や頭皮状態に合わせたカラーリングをご提案しています。化学成分を極力抑えた処方で、ダメージを最小限にしながら美しい発色を実現します。
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
          <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80&auto=format&fit=crop" alt="オーガニック素材"
            style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%)" }} />
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop" alt="自然素材"
            style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(100%)" }} />
          <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop" alt="ヘアサロン"
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
          <div style={{ textAlign:"center", marginTop:"3rem" }}>
            <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
              style={{ background:"#111", color:"#fff", padding:"16px 56px", fontSize:"0.82rem", letterSpacing:"0.2em", textDecoration:"none" }}>
              予　約
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
          <p style={{ color:"#888", fontSize:"0.88rem", lineHeight:1.8 }}>ヘアカラー・白髪染めに関するお役立ち情報をお届けします。</p>
        </div>
      </section>


      <section style={{ background:"#fff", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1rem", textAlign:"center" }}>— ACCESS</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", textAlign:"center", marginBottom:"3rem", fontWeight:400 }}>アクセス</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5!2d139.679!3d35.510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185de7093c0001%3A0x5e18e0e5f2e2a44c!2z44Kt44Os44A45bCB5a2m5bqX!5e0!3m2!1sja!2sjp!4v1234567890"
            width="100%" height="400"
            style={{ border:0, filter:"grayscale(100%)" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="キレイ鶴見店 地図"
          />
          <p style={{ textAlign:"center", fontSize:"0.82rem", color:"#888", marginTop:"1rem", lineHeight:2 }}>
            神奈川県横浜市鶴見区鶴見中央 ／ JR鶴見駅東口 徒歩4分
          </p>
        </div>
      </section>

      <section style={{ background:"#f7f5f2", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", color:"#888", marginBottom:"1rem", textAlign:"center" }}>— VOICE</p>
          <h2 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,3vw,2rem)", color:"#111", textAlign:"center", marginBottom:"3rem", fontWeight:400 }}>お客様の声</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
            {[
              { text:"40代です。白髪が気になっていましたが、オーガニックカラーで自然な仕上がりになりました。頭皮への刺激もなく安心です。", author:"40代女性・鶴見区在住" },
              { text:"カラー後の髪のツヤが全然違います。オートシャンプーも気持ちよくて、毎回リラックスできます。", author:"50代女性・横浜市在住" },
              { text:"白髪を染めるのが初めてで不安でしたが、丁寧にカウンセリングしていただけました。また来ます！", author:"40代女性・川崎市在住" },
            ].map((v, i) => (
              <div key={i} style={{ background:"#fff", padding:"2rem", borderTop:"2px solid #111" }}>
                <p style={{ fontSize:"0.85rem", color:"#444", lineHeight:2, marginBottom:"1.5rem" }}>「{v.text}」</p>
                <p style={{ fontSize:"0.75rem", color:"#aaa", letterSpacing:"0.05em" }}>— {v.author}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", fontSize:"0.75rem", color:"#bbb", marginTop:"2rem" }}>
            ※ 掲載はお客様の許可をいただいております。
          </p>
        </div>
      </section>
      <section style={{ position:"relative", overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1600&q=80&auto=format&fit=crop"
          alt="スタッフ募集"
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
