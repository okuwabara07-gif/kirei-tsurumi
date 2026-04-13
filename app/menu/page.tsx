export default function MenuPage() {
  const menus = [
    { category: "白髪染め", items: [
      { name: "リタッチ（根元のみ）", price: "¥3,300", note: "約2〜3cmの根元" },
      { name: "全体カラー", price: "¥5,500", note: "毛先まで全体" },
      { name: "リタッチ＋毛先カラー", price: "¥6,600", note: "根元＋毛先" },
    ]},
    { category: "おしゃれ染め", items: [
      { name: "全体カラー", price: "¥4,400", note: "" },
      { name: "ハイライト", price: "¥5,500〜", note: "ご相談ください" },
    ]},
    { category: "トリートメント", items: [
      { name: "集中トリートメント", price: "¥1,100", note: "カラーと同時施術" },
      { name: "オイルトリートメント", price: "¥550", note: "仕上げオイル" },
    ]},
  ];
  return (
    <div style={{ maxWidth:"800px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>メニュー・料金</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>全メニュー、オートシャンプー＋セルフブロー込みの料金です。追加料金はありません。</p>
      {menus.map(cat => (
        <div key={cat.category} style={{ marginBottom:"2.5rem" }}>
          <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#8B5E6B", borderBottom:"2px solid #8B5E6B", paddingBottom:"0.5rem", marginBottom:"1rem" }}>{cat.category}</h2>
          <div style={{ background:"#fff", borderRadius:"12px", overflow:"hidden", border:"1px solid #e8ddd8" }}>
            {cat.items.map((item, i) => (
              <div key={item.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1.5rem", borderBottom:i<cat.items.length-1?"1px solid #f0e8e4":"none" }}>
                <div>
                  <p style={{ fontSize:"0.95rem", color:"#3a2428", fontWeight:500 }}>{item.name}</p>
                  {item.note && <p style={{ fontSize:"0.8rem", color:"#999" }}>{item.note}</p>}
                </div>
                <span style={{ fontSize:"1.05rem", fontWeight:700, color:"#8B5E6B" }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ textAlign:"center", marginTop:"3rem" }}>
        <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
          style={{ background:"#8B5E6B", color:"#fff", padding:"14px 32px", borderRadius:"30px", fontSize:"1rem", fontWeight:700, textDecoration:"none" }}>
          📅 今すぐ予約する
        </a>
      </div>
    </div>
  );
}
