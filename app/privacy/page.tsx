import Link from "next/link";
export default function PrivacyPage() {
  const h2 = { fontFamily:"serif" as const, fontSize:"1.2rem", color:"#111", margin:"2rem 0 1rem", fontWeight:400 };
  const p = { fontSize:"0.9rem", color:"#555", lineHeight:2.0, marginBottom:"1rem" };
  const a = { color:"#8B5E6B" };
  return (
    <div style={{ maxWidth:"720px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#111", marginBottom:"0.5rem", fontWeight:400 }}>プライバシーポリシー</h1>
      <p style={{ color:"#888", fontSize:"0.85rem", marginBottom:"3rem" }}>Privacy Policy</p>

      <p style={p}>キレイ鶴見店（運営: AOKAE合同会社、以下「当サイト」）は、利用者の個人情報の取り扱いについて、以下のとおり定めます。</p>

      <h2 style={h2}>1. 個人情報の利用目的</h2>
      <p style={p}>当サイトでは、お問い合わせの際に氏名・メールアドレス等をご提供いただく場合があります。これらはお問い合わせへの回答や必要なご連絡のためにのみ利用します。</p>

      <h2 style={h2}>2. 広告の配信について</h2>
      <p style={p}>当サイトは第三者配信の広告サービス「Google AdSense」を利用しています。Googleなどの第三者配信事業者はCookieを使用して、利用者の興味に応じた広告を表示します。</p>
      <p style={p}>Cookieを無効にする設定や広告の詳細は<a style={a} href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">広告 – ポリシーと規約 – Google</a>をご確認ください。パーソナライズ広告は<a style={a} href="https://adssettings.google.com/?hl=ja" target="_blank" rel="noopener noreferrer">広告設定</a>から無効にできます。</p>

      <h2 style={h2}>3. アフィリエイトプログラムについて</h2>
      <p style={p}>当サイトは、Amazonアソシエイト・楽天アフィリエイト等のプログラムに参加しており、商品を紹介し紹介料を得る場合があります。購入はリンク先の各事業者との取引となり、各事業者のポリシーが適用されます。</p>

      <h2 style={h2}>4. アクセス解析ツールについて</h2>
      <p style={p}>当サイトはGoogleアナリティクスを利用しています。Cookieを使用してトラフィックデータを匿名で収集しており、個人を特定するものではありません。詳細は<a style={a} href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクス利用規約</a>をご確認ください。</p>

      <h2 style={h2}>5. 免責事項</h2>
      <p style={p}>掲載情報の正確性には努めていますが、内容を保証するものではありません。詳しくは<Link style={a} href="/disclaimer">免責事項</Link>をご覧ください。</p>

      <h2 style={h2}>6. お問い合わせ</h2>
      <p style={p}>本ポリシーに関するお問い合わせは<Link style={a} href="/contact">お問い合わせページ</Link>よりご連絡ください。</p>

      <p style={{ fontSize:"0.8rem", color:"#999", marginTop:"3rem" }}>制定・最終改定: 2026年5月31日　AOKAE合同会社</p>
    </div>
  );
}
