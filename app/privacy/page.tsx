export default function PrivacyPage() {
  return (
    <div style={{ maxWidth:"720px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#111", marginBottom:"0.5rem", fontWeight:400 }}>プライバシーポリシー</h1>
      <p style={{ color:"#888", fontSize:"0.85rem", marginBottom:"3rem" }}>最終更新日：2025年4月10日</p>
      {[
        { title:"1. 個人情報の収集について", body:"当サイトでは、お問い合わせフォームをご利用の際に、お名前・メールアドレス等の個人情報をご提供いただく場合があります。収集した情報は、お問い合わせへの回答目的以外には使用しません。" },
        { title:"2. 広告について", body:"当サイトはGoogle AdSenseを利用しており、Googleがユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。Googleの広告CookieはGoogleのプライバシーポリシーに基づいて管理されます。" },
        { title:"3. アクセス解析ツールについて", body:"当サイトはGoogle Analyticsを利用しています。Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。" },
        { title:"4. Cookieについて", body:"当サイトでは、広告配信やアクセス解析のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることも可能ですが、一部のサービスが正常に機能しない場合があります。" },
        { title:"5. 免責事項", body:"当サイトのコンテンツについては正確性の維持に努めていますが、その完全性・正確性を保証するものではありません。当サイトのご利用によって生じたいかなる損害についても責任を負いません。" },
        { title:"6. プライバシーポリシーの変更", body:"本ポリシーの内容は予告なく変更することがあります。変更後のプライバシーポリシーは当ページに掲載した時点から効力を生じるものとします。" },
        { title:"7. お問い合わせ", body:"本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。" },
      ].map(s => (
        <div key={s.title} style={{ marginBottom:"2rem" }}>
          <h2 style={{ fontSize:"0.95rem", color:"#111", fontWeight:700, marginBottom:"0.75rem" }}>{s.title}</h2>
          <p style={{ fontSize:"0.88rem", color:"#555", lineHeight:2 }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
