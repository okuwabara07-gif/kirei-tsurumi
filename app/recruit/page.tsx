import Link from "next/link";
export default function RecruitPage() {
  return (
    <div style={{ maxWidth:"800px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>スタッフ募集</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>あなたらしい働き方を、鶴見の街で。</p>
      <div style={{ background:"#f9f0f2", borderRadius:"12px", padding:"2rem", marginBottom:"2rem" }}>
        <h2 style={{ fontFamily:"serif", fontSize:"1.2rem", color:"#5C3A45", marginBottom:"1.5rem" }}>募集要項</h2>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          {[
            ["勤務時間","10:00〜18:00の間で3時間〜"],
            ["勤務日数","週1日〜（相談OK）"],
            ["待遇","食事手当・通勤手当完備"],
            ["対象","ブランク・主婦・ダブルワーク歓迎"],
          ].map(([l,v]) => (
            <tr key={l} style={{ borderBottom:"1px solid #e8ddd8" }}>
              <td style={{ padding:"12px 0", fontSize:"0.85rem", color:"#999", width:"130px" }}>{l}</td>
              <td style={{ padding:"12px 0", fontSize:"0.9rem", color:"#3a2428" }}>{v}</td>
            </tr>
          ))}
        </table>
      </div>
      <div style={{ background:"#3a2428", color:"#fff", borderRadius:"12px", padding:"2rem", textAlign:"center" }}>
        <h3 style={{ fontFamily:"serif", fontSize:"1.1rem", marginBottom:"1rem" }}>応募・お問い合わせ</h3>
        <Link href="/contact" style={{ border:"1px solid #c8b0b8", color:"#fff", padding:"10px 24px", borderRadius:"20px", fontSize:"0.85rem", textDecoration:"none" }}>
          お問い合わせフォームへ
        </Link>
      </div>
    </div>
  );
}
