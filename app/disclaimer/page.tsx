export default function DisclaimerPage() {
  const h2 = { fontFamily:"serif" as const, fontSize:"1.2rem", color:"#111", margin:"2rem 0 1rem", fontWeight:400 };
  const p = { fontSize:"0.9rem", color:"#555", lineHeight:2.0, marginBottom:"1rem" };
  return (
    <div style={{ maxWidth:"720px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#111", marginBottom:"0.5rem", fontWeight:400 }}>免責事項</h1>
      <p style={{ color:"#888", fontSize:"0.85rem", marginBottom:"3rem" }}>Disclaimer</p>

      <h2 style={h2}>掲載情報について</h2>
      <p style={p}>当サイトに掲載する情報は、可能な限り正確な提供に努めていますが、その正確性・完全性・有用性を保証するものではありません。当サイトの情報を利用して生じたいかなる損害についても、当サイトおよびAOKAE合同会社は一切の責任を負いません。ヘアケアに関する内容は一般的な情報であり、効果には個人差があります。頭皮や髪に異常を感じた場合は、専門家や医療機関にご相談ください。</p>

      <h2 style={h2}>広告・アフィリエイトについて</h2>
      <p style={p}>当サイトは、Amazonアソシエイト・楽天アフィリエイト等のプログラムおよびその他の広告を掲載しています。商品・サービスの購入はリンク先の各事業者との取引となります。商品に関するお問い合わせは各販売事業者へお願いいたします。</p>

      <h2 style={h2}>外部リンクについて</h2>
      <p style={p}>当サイトからリンク等により他のサイトに移動した場合、移動先で提供される情報・サービス等について当サイトは責任を負いません。</p>

      <h2 style={h2}>著作権について</h2>
      <p style={p}>当サイトに掲載されている文章・画像等の著作権は、当サイトまたは正当な権利者に帰属します。無断での転載・複製・改変等を禁じます。掲載写真にはイメージを含みます。</p>

      <p style={{ fontSize:"0.8rem", color:"#999", marginTop:"3rem" }}>最終更新: 2026年5月31日　AOKAE合同会社</p>
    </div>
  );
}
