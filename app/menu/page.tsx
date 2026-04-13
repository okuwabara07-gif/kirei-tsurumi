import Link from "next/link";
export default function MenuPage() {
  const menuDescriptions = [
    {
      name: "オーガニックカラー",
      desc: "植物由来の天然成分を配合したカラー剤を使用。化学成分を極力抑えているため、頭皮への刺激が少なく、敏感肌の方や頭皮トラブルが気になる方にも安心です。染めながら髪にツヤと潤いを与え、自然で柔らかな発色が特徴です。",
      price: "リタッチ ¥2,500〜",
      color: "#4a7c59"
    },
    {
      name: "プレミアムカラー",
      desc: "アミノ酸・アミノペプチド配合で、ダメージを補修しハリコシを改善。ツヤやかに染めあがりながら、頭皮に優しいカラーです。色もちを長続きさせる成分と水分補給・髪質改善成分を組み合わせた、キレイ鶴見店の人気No.1メニューです。",
      price: "リタッチ ¥3,400〜",
      color: "#8B5E6B"
    },
    {
      name: "プラチナカラー",
      desc: "最高位の仕上がりを求める方へ。毛髪強化成分と酸性キューティクルケア成分を配合した特別処方のカラー剤を使用。根元と毛先を塗り分ける高度な技術で、しなやかで艶めく美髪へ導きます。専用シャンプー・トリートメントで仕上げます。",
      price: "全体 ¥8,900〜",
      color: "#b8963e"
    },
  ];

  const menus = [
    { category: "オーガニックカラー", items: [
      { name: "リタッチ（根元から2cm以内）", price: "¥2,500", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "全体染め 毛先2〜5cm", price: "¥3,040", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "全体染め 毛先5〜15cm", price: "¥3,580", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "全体染め 毛先15cm〜", price: "¥3,900", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "部分染め", price: "¥1,900", note: "ハイブリットシャンプー＋セルフブロー込" },
    ]},
    { category: "プレミアムカラー（髪質改善ケア）", items: [
      { name: "リタッチ（根元染め）", price: "¥4,800", note: "髪質改善ケア配合・ハイブリットシャンプー込" },
      { name: "全体 毛先5cmまで", price: "¥5,800", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "全体 毛先15cmまで", price: "¥5,900", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "全体 毛先15cm〜", price: "¥6,900", note: "ハイブリットシャンプー＋セルフブロー込" },
    ]},
    { category: "プラチナカラー（最高位）", items: [
      { name: "全体染め", price: "¥8,900", note: "毛髪強化＋酸性キューティクルケア配合" },
      { name: "全体染め（期間限定）", price: "¥5,900", note: "現金払い不可" },
    ]},
    { category: "トリートメント", items: [
      { name: "スタンダードトリートメント", price: "¥1,200", note: "白髪染め施術のお客様用" },
      { name: "プロケアトリートメント", price: "¥1,700", note: "白髪染め施術のお客様用" },
      { name: "クリニークストリートメント", price: "¥2,200〜", note: "髪質改善・期間限定" },
    ]},
    { category: "シャンプーのみ", items: [
      { name: "シャンプー単品", price: "¥2,000", note: "ハイブリットシャンプー＋セルフブロー込" },
      { name: "シャンプー＋スタンダードトリートメント", price: "¥3,200", note: "白髪染めなしのお客様用" },
      { name: "シャンプー＋プロケアトリートメント", price: "¥3,700", note: "白髪染めなしのお客様用" },
      { name: "シャンプー＋髪質改善トリートメント", price: "¥4,200", note: "白髪染めなしのお客様用" },
    ]},
  ];
  return (
    <div style={{ maxWidth:"800px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#111", marginBottom:"0.5rem", fontWeight:400 }}>メニュー・料金</h1>
      <p style={{ color:"#888", fontSize:"0.88rem", marginBottom:"0.75rem" }}>全メニュー税込。ハイブリットシャンプー＋セルフブロー込みの料金です。</p>
      <p style={{ color:"#888", fontSize:"0.82rem", marginBottom:"3rem" }}>※ロング料金あり。現金払い不可メニューあり。</p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem", marginBottom:"4rem" }}>
        {menuDescriptions.map((m, i) => (
          <div key={m.name} style={{ borderTop:`3px solid ${m.color}`, paddingTop:"1.5rem" }}>
            <img
              src={["/images/salon-mirror.jpg","/images/salon-interior.jpg","/images/salon-seat.jpg"][i]}
              alt={m.name}
              style={{ width:"100%", height:"200px", objectFit:"cover", filter:"grayscale(100%)", marginBottom:"1rem" }}
            />
            <h2 style={{ fontFamily:"serif", fontSize:"1.1rem", color:"#111", marginBottom:"0.75rem", fontWeight:400 }}>{m.name}</h2>
            <p style={{ fontSize:"0.85rem", color:"#555", lineHeight:2, marginBottom:"1rem" }}>{m.desc}</p>
            <p style={{ fontSize:"0.9rem", color:m.color, fontWeight:700 }}>{m.price}</p>
          </div>
        ))}
      </div>
      {menus.map(cat => (
        <div key={cat.category} style={{ marginBottom:"3rem" }}>
          <h2 style={{ fontSize:"0.68rem", letterSpacing:"0.2em", color:"#888", borderBottom:"1px solid #ddd", paddingBottom:"0.75rem", marginBottom:"1rem" }}>{cat.category}</h2>
          <div style={{ background:"#fff", borderRadius:"4px", overflow:"hidden" }}>
            {cat.items.map((item, i) => (
              <div key={item.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 0", borderBottom:i<cat.items.length-1?"1px solid #f0ede8":"none" }}>
                <div>
                  <p style={{ fontSize:"0.92rem", color:"#111", fontWeight:500 }}>{item.name}</p>
                  <p style={{ fontSize:"0.75rem", color:"#bbb", marginTop:"3px" }}>{item.note}</p>
                </div>
                <span style={{ fontSize:"1rem", color:"#555", fontFamily:"serif", whiteSpace:"nowrap", marginLeft:"1rem" }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ background:"#f7f5f2", borderRadius:"8px", padding:"1.5rem", marginTop:"1rem", marginBottom:"3rem" }}>
        <p style={{ fontSize:"0.85rem", color:"#555", lineHeight:2 }}>
          お支払い：カード（Visa / Master / JCB / AMEX他）・PayPay対応<br />
          営業時間：10:00〜18:00（最終受付17:00）／ 定休日：不定休
        </p>
      </div>
      <div style={{ textAlign:"center" }}>
        <a href="https://beauty.hotpepper.jp/slnH000501100/" target="_blank" rel="noopener"
          style={{ background:"#111", color:"#fff", padding:"16px 56px", fontSize:"0.82rem", letterSpacing:"0.2em", textDecoration:"none" }}>
          予　約
        </a>
      </div>
    </div>
  );
}
