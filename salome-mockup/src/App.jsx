import { useState } from "react";

const T = {
  champagne: "#F2EAD8", ivory: "#FAF6EE", sandstone: "#E8DECA",
  parchment: "#F0E8D8", linen: "#E4DAC8",
  noir: "#1A1210", charcoal: "#2C2420",
  berry: "#7A3550", berryMid: "#9B4060", berryPale: "#F5E8EE",
  gold: "#B8966A", goldDeep: "#9A7A50", goldLight: "#D4B896",
  lavender: "#8B7BAA", lavPale: "#EEEAF5",
  white: "#FFFFFF", offWhite: "#FAFAF8",
  dark: "#1A1018", warmGray: "#7A6E64", midGray: "#A89E94", lightGray: "#DDD8D0",
  line: "#06C755",
};

const IMGS = {
  salonHero:   "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
  customerImg: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
  salonBtn:    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
  carte:       "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70",
  lineImg:     "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70",
  store:       "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&q=70",
  review:      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=70",
  salonDash:   "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70",
};

// ============================================================
// PHONE FRAME COMPONENT
// ============================================================
function PhoneFrame({ children, label, active, onClick, scale = 1 }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        cursor: onClick ? "pointer" : "default",
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        transition: "transform 0.2s",
      }}
    >
      {/* Phone shell */}
      <div style={{
        width: 180,
        background: active ? "#1A1210" : "#2C2420",
        borderRadius: 28,
        padding: "8px 6px",
        boxShadow: active
          ? "0 20px 60px rgba(122,53,80,.35), 0 0 0 2px rgba(184,150,106,.4)"
          : "0 8px 32px rgba(0,0,0,.3)",
        transition: "all 0.25s",
        position: "relative",
      }}>
        {/* Status bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "4px 10px 6px",
          color: "rgba(255,255,255,.5)", fontSize: 7,
          fontFamily: "'Lato', sans-serif",
        }}>
          <span>9:41</span>
          <div style={{
            width: 40, height: 8, background: "#1A1210",
            borderRadius: 999, margin: "0 auto",
          }}/>
          <span>●●●</span>
        </div>

        {/* Screen */}
        <div style={{
          borderRadius: 20,
          overflow: "hidden",
          height: 320,
          background: T.ivory,
          position: "relative",
        }}>
          {children}
        </div>

        {/* Home indicator */}
        <div style={{
          width: 50, height: 3, background: "rgba(255,255,255,.2)",
          borderRadius: 999, margin: "6px auto 2px",
        }}/>
      </div>

      {/* Label */}
      <div style={{
        marginTop: 12, fontSize: 11, fontWeight: 700,
        color: active ? T.berry : T.midGray,
        fontFamily: "'Lato', sans-serif",
        letterSpacing: 0.5, textAlign: "center",
        transition: "color 0.2s",
      }}>{label}</div>
    </div>
  );
}

// ============================================================
// SCREEN CONTENTS (miniature)
// ============================================================

// TOP SCREEN
function ScreenTop() {
  return (
    <div style={{ height: "100%", overflow: "hidden", fontFamily: "'Cormorant Garamond', serif" }}>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(160deg,${T.champagne},${T.ivory})`,
        padding: "14px 10px 0", textAlign: "center", position: "relative",
      }}>
        <div style={{ fontSize: 5, letterSpacing: 2, color: T.goldDeep, marginBottom: 4 }}>✦ Beauty × Technology ✦</div>
        <div style={{ fontSize: 22, fontWeight: 300, color: T.charcoal, letterSpacing: 4, lineHeight: 1 }}>
          SALOM<span style={{ color: T.goldDeep }}>É</span>
        </div>
        <div style={{ fontSize: 5, color: T.warmGray, fontStyle: "italic", marginTop: 3, marginBottom: 5 }}>
          Votre salon, magnifié par la technologie.
        </div>
        <div style={{ width: 30, height: 0.5, background: T.goldDeep, margin: "0 auto 8px" }}/>
      </div>

      {/* Salon image */}
      <div style={{
        height: 60, backgroundImage: `url(${IMGS.salonHero})`,
        backgroundSize: "cover", backgroundPosition: "center 35%",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(242,234,216,.1),rgba(26,18,16,.5))" }}/>
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, textAlign: "center", fontSize: 5, color: "rgba(255,255,255,.7)", fontStyle: "italic" }}>
          L'élégance du salon français
        </div>
      </div>

      {/* Entry buttons */}
      <div style={{ background: `linear-gradient(180deg,${T.sandstone},${T.ivory})`, padding: "8px 8px" }}>
        {/* Customer btn */}
        <div style={{
          height: 28, marginBottom: 5, position: "relative", overflow: "hidden",
          border: `1px solid rgba(6,199,85,.2)`, background: T.white,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.customerImg})`, backgroundSize: "cover", backgroundPosition: "right center" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(240,248,244,.97) 45%,transparent)" }}/>
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 5, padding: "0 8px" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: `${T.line}18`, border: `1px solid rgba(6,199,85,.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>👤</div>
            <div>
              <div style={{ fontSize: 6.5, fontWeight: 700, color: T.dark, fontFamily: "'Lato',sans-serif" }}>お客様マイページ</div>
              <div style={{ fontSize: 5, color: T.warmGray, fontFamily: "'Lato',sans-serif" }}>ご来店のお客様はこちら</div>
            </div>
          </div>
        </div>

        {/* Salon btn */}
        <div style={{
          height: 28, position: "relative", overflow: "hidden",
          border: `1px solid rgba(184,150,106,.3)`, background: T.noir,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.salonBtn})`, backgroundSize: "cover", backgroundPosition: "right center" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(26,18,16,.97) 45%,transparent)" }}/>
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 5, padding: "0 8px" }}>
            <div style={{ width: 14, height: 14, background: `${T.gold}25`, border: `1px solid rgba(184,150,106,.4)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>✂️</div>
            <div>
              <div style={{ fontSize: 6.5, fontWeight: 700, color: T.white, fontFamily: "'Lato',sans-serif" }}>サロン・美容師の方</div>
              <div style={{ fontSize: 5, color: T.goldLight, fontFamily: "'Lato',sans-serif" }}>オーナー・フリーランスはこちら</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ background: T.white, padding: "6px 6px 0" }}>
        <div style={{ fontSize: 6, textAlign: "center", color: T.dark, fontFamily: "'Cormorant Garamond',serif", marginBottom: 5 }}>SALOMÉでできること</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {[
            { icon: "📋", t: "顧客カルテ", img: IMGS.carte, ov: "rgba(122,53,80,.7)" },
            { icon: "💬", t: "LINE自動化", img: IMGS.lineImg, ov: "rgba(26,16,24,.68)" },
            { icon: "🛍", t: "ECストア", img: IMGS.store, ov: "rgba(139,123,170,.7)" },
            { icon: "⭐", t: "口コミ収益", img: IMGS.review, ov: "rgba(184,150,106,.66)" },
          ].map(f => (
            <div key={f.t} style={{ height: 44, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${f.img})`, backgroundSize: "cover" }}/>
              <div style={{ position: "absolute", inset: 0, background: f.ov }}/>
              <div style={{ position: "relative", zIndex: 2, padding: "6px 5px" }}>
                <div style={{ fontSize: 10, marginBottom: 2 }}>{f.icon}</div>
                <div style={{ fontSize: 6, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display',serif" }}>{f.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CUSTOMER SCREEN
function ScreenCustomer() {
  return (
    <div style={{ height: "100%", overflow: "hidden", fontFamily: "'Lato',sans-serif" }}>
      <div style={{ background: `linear-gradient(160deg,${T.champagne},${T.sandstone})`, padding: "14px 10px 10px" }}>
        <div style={{ fontSize: 5, color: T.goldDeep, marginBottom: 4 }}>‹ 戻る</div>
        <div style={{ fontSize: 13, color: T.charcoal, fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, letterSpacing: 2 }}>お客様マイページ</div>
        <div style={{ fontSize: 6, color: T.warmGray, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>Votre espace personnel</div>
      </div>
      <div style={{ background: T.white, padding: "8px 8px" }}>
        <div style={{ fontSize: 5, fontWeight: 700, color: T.midGray, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>マイページでできること</div>
        {[
          { icon: "📋", t: "施術カルテを確認" },
          { icon: "🤖", t: "AI商品レコメンド" },
          { icon: "🛍", t: "ケア商品を購入" },
          { icon: "⭐", t: "口コミを投稿" },
          { icon: "🎁", t: "ポイントを確認" },
        ].map(f => (
          <div key={f.t} style={{ display: "flex", gap: 5, padding: "3.5px 0", borderBottom: `1px solid ${T.lightGray}`, alignItems: "center" }}>
            <span style={{ fontSize: 8 }}>{f.icon}</span>
            <span style={{ fontSize: 6, color: T.dark }}>{f.t}</span>
          </div>
        ))}
        {/* LINE button antique style */}
        <div style={{ marginTop: 10, position: "relative", border: `1px solid ${T.lightGray}`, background: T.white, padding: "6px 8px", display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: T.line }}/>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: T.line, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>💚</div>
          <div>
            <div style={{ fontSize: 6.5, fontWeight: 700, color: T.dark }}>LINEでログイン</div>
            <div style={{ fontSize: 5, color: T.warmGray }}>パスワード不要</div>
          </div>
          <div style={{ marginLeft: "auto", background: T.line, color: "#fff", fontSize: 5, padding: "1px 4px", fontWeight: 700 }}>LINE</div>
        </div>
      </div>
    </div>
  );
}

// BIZ SELECT
function ScreenBiz() {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ background: `linear-gradient(160deg,${T.champagne},${T.sandstone})`, padding: "14px 10px 10px" }}>
        <div style={{ fontSize: 5, color: T.goldDeep, marginBottom: 4 }}>‹ 戻る</div>
        <div style={{ fontSize: 13, color: T.charcoal, fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, letterSpacing: 2 }}>サロン・美容師の方へ</div>
        <div style={{ fontSize: 6, color: T.warmGray, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>Choisissez votre profil</div>
      </div>
      <div style={{ background: T.white, padding: "10px 8px" }}>
        <div style={{ fontSize: 7, color: T.warmGray, fontStyle: "italic", textAlign: "center", marginBottom: 8, fontFamily: "'Cormorant Garamond',serif" }}>
          ご利用形態を選択してください
        </div>
        {[
          { icon: "🏪", num: "1", label: "サロン・美容室オーナー", desc: "顧客管理・EC・配送・多店舗対応", bg: T.berryPale, c: T.berry },
          { icon: "💇", num: "2", label: "フリーランス美容師", desc: "スマホ完結・複数サロン対応", bg: T.lavPale, c: T.lavender },
        ].map(b => (
          <div key={b.num} style={{ display: "flex", gap: 6, padding: "8px 8px", marginBottom: 6, border: `1px solid ${T.lightGray}`, alignItems: "flex-start", background: T.white }}>
            <div style={{ width: 20, height: 20, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0 }}>{b.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                <span style={{ fontSize: 6.5, fontWeight: 700, color: T.dark, fontFamily: "'Playfair Display',serif" }}>{b.label}</span>
                <span style={{ fontSize: 5, background: b.bg, color: b.c, padding: "1px 4px", fontWeight: 700 }}>{b.num}</span>
              </div>
              <div style={{ fontSize: 5, color: T.warmGray, fontFamily: "'Lato',sans-serif" }}>{b.desc}</div>
            </div>
            <span style={{ color: T.midGray, fontSize: 8 }}>›</span>
          </div>
        ))}
        {/* Compare mini */}
        <div style={{ background: T.parchment, padding: "6px 6px", border: `1px solid ${T.linen}`, marginTop: 4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            <div/>
            <div style={{ fontSize: 5, fontWeight: 700, color: T.berry, textAlign: "center", paddingBottom: 3, borderBottom: `1px solid ${T.berry}` }}>サロン</div>
            <div style={{ fontSize: 5, fontWeight: 700, color: T.lavender, textAlign: "center", paddingBottom: 3, borderBottom: `1px solid ${T.lavender}` }}>FL</div>
            {[["月額","¥2,980〜","¥980〜"],["複数店舗","✅","✅"],["開業サポート","—","✅"]].map(([l,s,f])=>(
              <>{[l,s,f].map((v,i)=><div key={l+i} style={{ fontSize: 5, color: i===0?T.warmGray:T.dark, fontWeight: i===0?400:700, textAlign: i===0?"left":"center", padding: "2px 0", borderBottom: `1px solid ${T.lightGray}`, fontFamily: "'Lato',sans-serif" }}>{v}</div>)}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// PLANS
function ScreenPlans({ type }) {
  const isSalon = type === "salon";
  const color = isSalon ? T.berry : T.lavender;
  const plans = isSalon
    ? [{ name: "Starter", price: "¥2,980", c: T.warmGray }, { name: "Standard", price: "¥5,980", c: T.berry, tag: "人気No.1" }, { name: "Premium", price: "¥9,800", c: T.noir }]
    : [{ name: "Solo", price: "¥980", c: T.lavender }, { name: "Pro", price: "¥2,480", c: T.berry, tag: "おすすめ" }];
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ background: `linear-gradient(160deg,${T.champagne},${T.sandstone})`, padding: "14px 10px 10px" }}>
        <div style={{ fontSize: 5, color: T.goldDeep, marginBottom: 4 }}>‹ 戻る</div>
        <div style={{ fontSize: 11, color: T.charcoal, fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, letterSpacing: 2 }}>
          {isSalon ? "サロン向けプラン" : "フリーランス向けプラン"}
        </div>
      </div>
      <div style={{ background: T.white, padding: "6px 8px" }}>
        {/* Lock bar */}
        <div style={{ display: "flex", gap: 4, padding: "4px 6px", background: T.berryPale, border: `1px solid ${T.berry}30`, marginBottom: 6, alignItems: "center" }}>
          <span style={{ fontSize: 7 }}>🔒</span>
          <span style={{ fontSize: 5, color: T.berry, fontWeight: 700, fontFamily: "'Lato',sans-serif" }}>詳細機能は登録後にご確認いただけます</span>
        </div>
        {plans.map(p => (
          <div key={p.name} style={{ padding: "6px 8px", marginBottom: 5, border: p.tag ? `1.5px solid ${p.c}` : `1px solid ${T.lightGray}`, position: "relative", background: p.tag ? `${p.c}06` : T.white }}>
            {p.tag && <div style={{ position: "absolute", top: 4, right: 4, background: p.c, color: "#fff", fontSize: 4.5, padding: "1px 5px", fontFamily: "'Lato',sans-serif", fontWeight: 700 }}>{p.tag}</div>}
            <div style={{ fontSize: 7, fontWeight: 700, color: p.c, fontFamily: "'Playfair Display',serif", marginBottom: 2 }}>{p.name}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: T.dark, fontFamily: "'Cormorant Garamond',serif" }}>{p.price}<span style={{ fontSize: 5, color: T.midGray, fontFamily: "'Lato',sans-serif" }}>/月</span></div>
          </div>
        ))}
        {/* Blurred features */}
        <div style={{ position: "relative", marginTop: 4 }}>
          <div style={{ filter: "blur(3px)", padding: "6px 8px", border: `1px solid ${T.lightGray}` }}>
            {["機能A","機能B","機能C"].map(f => (
              <div key={f} style={{ fontSize: 6, color: T.dark, padding: "2px 0", borderBottom: `1px solid ${T.lightGray}`, fontFamily: "'Lato',sans-serif" }}>{f}</div>
            ))}
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(250,250,248,.7)" }}>
            <span style={{ fontSize: 12 }}>🔒</span>
            <div style={{ fontSize: 5.5, fontWeight: 600, color: T.berry, fontFamily: "'Playfair Display',serif", marginTop: 2, textAlign: "center" }}>登録後に詳細確認</div>
          </div>
        </div>
        {/* CTA */}
        <div style={{ marginTop: 8, padding: "7px 0", background: isSalon ? `linear-gradient(135deg,${T.berry},${T.berryMid})` : `linear-gradient(135deg,${T.lavender},#7468A0)`, textAlign: "center" }}>
          <span style={{ fontSize: 6, fontWeight: 700, color: "#fff", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Lato',sans-serif" }}>このプランで登録する ›</span>
        </div>
      </div>
    </div>
  );
}

// SALON DASHBOARD
function ScreenDashboard() {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ background: `linear-gradient(135deg,${T.berry},${T.berryMid})`, padding: "14px 10px 10px" }}>
        <div style={{ fontSize: 5, color: "rgba(255,255,255,.5)", marginBottom: 4, fontFamily: "'Lato',sans-serif", letterSpacing: 1 }}>✂️ サロン — トライアル中</div>
        <div style={{ fontSize: 13, color: T.white, fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, letterSpacing: 2 }}>サロン管理ダッシュボード</div>
        <div style={{ display: "flex", gap: 3, marginTop: 7 }}>
          {["機能一覧", "プラン詳細", "導入ステップ"].map((l, i) => (
            <div key={l} style={{ padding: "3px 6px", background: i === 0 ? T.white : "rgba(255,255,255,.15)", fontSize: 5, fontWeight: 700, color: i === 0 ? T.berry : "rgba(255,255,255,.8)", fontFamily: "'Lato',sans-serif" }}>{l}</div>
          ))}
        </div>
      </div>
      <div style={{ background: T.white, padding: "8px 8px" }}>
        {[["顧客カルテ管理","施術履歴・AI商品提案"],["LINE自動化（フル）","来店後フォロー・失客防止"],["ECストア","自社商品＋アフィリ同時展開"],["配送管理","送り状自動生成・追跡通知"],["独自ロゴ設定","ブランドに合わせてカスタマイズ"]].map(([t,d])=>(
          <div key={t} style={{ display: "flex", gap: 6, padding: "4.5px 0", borderBottom: `1px solid ${T.lightGray}`, alignItems: "flex-start", borderLeft: `2px solid ${T.berry}`, paddingLeft: 5, marginBottom: 1 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 700, color: T.dark, fontFamily: "'Lato',sans-serif" }}>{t}</div>
              <div style={{ fontSize: 5, color: T.midGray, fontFamily: "'Lato',sans-serif" }}>{d}</div>
            </div>
            <span style={{ color: T.berry, fontSize: 6, marginLeft: "auto", flexShrink: 0 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// SCREENS DATA
// ============================================================
const SCREENS = [
  { id: "top",       label: "トップ",           component: <ScreenTop/> },
  { id: "customer",  label: "お客様",            component: <ScreenCustomer/> },
  { id: "biz",       label: "事業者選択",        component: <ScreenBiz/> },
  { id: "sp",        label: "サロン\nプラン",    component: <ScreenPlans type="salon"/> },
  { id: "fp",        label: "FL\nプラン",        component: <ScreenPlans type="freelance"/> },
  { id: "dashboard", label: "サロン\nダッシュ",  component: <ScreenDashboard/> },
];

// ============================================================
// MAIN MOCKUP
// ============================================================
export default function Mockup() {
  const [active, setActive] = useState("top");
  const [view, setView] = useState("gallery"); // "gallery" | "detail"

  const activeScreen = SCREENS.find(s => s.id === active);

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(145deg, #1A1210 0%, #2C2420 40%, #1A1418 100%)`,
      fontFamily: "'Lato', sans-serif",
      padding: "0 0 40px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Playfair+Display:wght@500;700&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "28px 20px 20px",
        borderBottom: "1px solid rgba(184,150,106,.15)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 8, letterSpacing: 4, color: T.goldLight, textTransform: "uppercase", marginBottom: 8, opacity: .7 }}>
          UI / UX Mockup
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 32, fontWeight: 300, color: T.white, letterSpacing: 8, lineHeight: 1,
        }}>
          SALOM<span style={{ color: T.goldDeep }}>É</span>
        </h1>
        <p style={{ fontSize: 10, color: T.midGray, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif", marginTop: 4 }}>
          全画面モックアップ
        </p>
        <div style={{ width: 40, height: 1, background: `linear-gradient(90deg,transparent,${T.goldLight},transparent)`, margin: "10px auto 0" }}/>
      </div>

      {/* View toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 20px 0" }}>
        {[["gallery", "ギャラリー表示"], ["detail", "詳細表示"]].map(([k, l]) => (
          <button key={k} onClick={() => setView(k)} style={{
            padding: "7px 16px", border: `1px solid ${view === k ? T.goldDeep : "rgba(255,255,255,.15)"}`,
            background: view === k ? `${T.goldDeep}20` : "transparent",
            color: view === k ? T.goldLight : T.midGray,
            fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: 1,
            transition: "all .2s",
          }}>{l}</button>
        ))}
      </div>

      {/* ── GALLERY VIEW ── */}
      {view === "gallery" && (
        <div style={{ padding: "20px 12px 0" }}>
          {/* Flow label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, padding: "0 8px" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(184,150,106,.15)" }}/>
            <span style={{ fontSize: 9, color: T.midGray, letterSpacing: 2 }}>USER FLOW</span>
            <div style={{ flex: 1, height: 1, background: "rgba(184,150,106,.15)" }}/>
          </div>

          {/* Row 1: Top → Customer → Biz */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
            {SCREENS.slice(0, 3).map(sc => (
              <div key={sc.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <PhoneFrame
                  label={sc.label}
                  active={active === sc.id}
                  onClick={() => { setActive(sc.id); setView("detail"); }}
                  scale={0.85}
                >
                  {sc.component}
                </PhoneFrame>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center", marginBottom: 16, color: T.goldDeep, fontSize: 16, opacity: .5 }}>↓</div>

          {/* Row 2: Salon Plan → FL Plan → Dashboard */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, alignItems: "flex-start" }}>
            {SCREENS.slice(3).map(sc => (
              <PhoneFrame
                key={sc.id}
                label={sc.label}
                active={active === sc.id}
                onClick={() => { setActive(sc.id); setView("detail"); }}
                scale={0.85}
              >
                {sc.component}
              </PhoneFrame>
            ))}
          </div>

          {/* Legend */}
          <div style={{ margin: "24px 16px 0", padding: "14px 16px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(184,150,106,.12)" }}>
            <div style={{ fontSize: 9, color: T.goldLight, fontWeight: 700, letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
              画面構成
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { label: "トップ", desc: "入口・選択画面" },
                { label: "お客様", desc: "LINE連携マイページ" },
                { label: "事業者選択", desc: "サロン / FL 分岐" },
                { label: "サロンプラン", desc: "プラン選択 + 🔒" },
                { label: "FLプラン", desc: "専用価格 + 🔒" },
                { label: "ダッシュボード", desc: "登録後の全機能" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                  <span style={{ color: T.berry, fontSize: 8, marginTop: 1 }}>✦</span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: T.offWhite }}>{item.label}</div>
                    <div style={{ fontSize: 9, color: T.midGray }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DETAIL VIEW ── */}
      {view === "detail" && (
        <div style={{ padding: "20px 20px 0" }}>
          {/* Screen selector */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}>
            {SCREENS.map(sc => (
              <button key={sc.id} onClick={() => setActive(sc.id)} style={{
                padding: "5px 10px",
                border: `1px solid ${active === sc.id ? T.goldDeep : "rgba(255,255,255,.15)"}`,
                background: active === sc.id ? `${T.goldDeep}20` : "transparent",
                color: active === sc.id ? T.goldLight : T.midGray,
                fontSize: 10, fontWeight: 700, cursor: "pointer",
                letterSpacing: .5, whiteSpace: "pre",
                transition: "all .2s",
              }}>{sc.label}</button>
            ))}
          </div>

          {/* Large phone frame */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneFrame label={activeScreen?.label || ""} active scale={1.3}>
              {activeScreen?.component}
            </PhoneFrame>
          </div>

          {/* Screen info */}
          <div style={{ margin: "24px 0 0", padding: "14px 16px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(184,150,106,.12)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.goldLight, marginBottom: 6 }}>{activeScreen?.label}</div>
            <div style={{ fontSize: 10, color: T.midGray, lineHeight: 1.8 }}>
              {active === "top" && "トップ画面。お客様・サロン/美容師の2入口。右側に写真グラデーション付きボタン。"}
              {active === "customer" && "お客様専用。LINEアンティーク枠ボタン。カルテ・購入・口コミ機能へのアクセス。"}
              {active === "biz" && "事業者選択。1.サロンオーナー / 2.フリーランス。簡易比較表付き。"}
              {active === "sp" && "サロン向けプラン。価格は表示。詳細機能はブラー+🔒でゲート。"}
              {active === "fp" && "フリーランス専用価格（¥980〜）。サロンより最大67%安い。"}
              {active === "dashboard" && "登録後のダッシュボード。機能一覧・プラン詳細・導入ステップの3タブ。"}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 28, fontSize: 9, color: "rgba(255,255,255,.15)" }}>
        SALOMÉ — UI/UX Mockup v6 / AOKAE合同会社
      </div>
    </div>
  );
}
