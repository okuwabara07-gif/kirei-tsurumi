export default function AccessPage() {
  return (
    <div style={{ maxWidth:"800px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>アクセス</h1>
      <p style={{ color:"#7a5a60", marginBottom:"2rem", fontSize:"0.9rem" }}>JR鶴見駅東口より徒歩4分</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.9!2d139.6785!3d35.5087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185de7093c0001%3A0x5e18e0e5f2e2a44c!2z44Kt44Os44A45bCB5a2m5bqX!5e0!3m2!1sja!2sjp!4v1234567890"
        width="100%" height="350"
        style={{ border:0, borderRadius:"12px", marginBottom:"2rem" }}
        allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="キレイ鶴見店 地図"
      />
      <div style={{ background:"#fff", borderRadius:"12px", padding:"1.5rem 2rem", border:"1px solid #e8ddd8" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          {[
            ["店名","キレイ鶴見店"],
            ["住所","神奈川県横浜市鶴見区鶴見中央"],
            ["アクセス","JR鶴見駅東口 徒歩4分"],
            ["営業時間","10:00〜18:00"],
            ["お支払い","PayPay・券売機（現金）"],
          ].map(([l,v]) => (
            <tr key={l} style={{ borderBottom:"1px solid #f0e8e4" }}>
              <td style={{ padding:"12px 0", fontSize:"0.85rem", color:"#999", width:"120px" }}>{l}</td>
              <td style={{ padding:"12px 0", fontSize:"0.9rem", color:"#3a2428" }}>{v}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
