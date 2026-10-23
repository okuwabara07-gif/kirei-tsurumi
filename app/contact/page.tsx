import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SALON } from "@/lib/salon";

export const metadata = pageMeta("/contact", "お問い合わせ・ご予約｜キレイ鶴見店", "キレイ鶴見店へのお問い合わせ・ご予約は、LINEまたはホットペッパービューティーから受け付けています。白髪染めのご相談もお気軽にどうぞ。");

export default function ContactPage() {
  return (
    <div style={{ maxWidth:"600px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>お問い合わせ・ご予約</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>ご質問・ご相談・ご予約は、下記からお気軽にどうぞ。</p>
      <div style={{ background:"#fff", borderRadius:"12px", padding:"2rem", border:"1px solid #e8ddd8", display:"grid", gap:"1rem" }}>
        <a href={SALON.line} target="_blank" rel="noopener"
          style={{ display:"block", background:"#06C755", color:"#fff", padding:"14px", borderRadius:"8px", textAlign:"center", textDecoration:"none", fontSize:"1rem", fontWeight:700 }}>
          LINEで問い合わせる・予約する
        </a>
        <a href={SALON.hotpepper} target="_blank" rel="noopener"
          style={{ display:"block", background:"#111", color:"#fff", padding:"14px", borderRadius:"8px", textAlign:"center", textDecoration:"none", fontSize:"1rem", fontWeight:700 }}>
          ホットペッパービューティーで予約する
        </a>
        <p style={{ fontSize:"0.82rem", color:"#7a5a60", lineHeight:1.8 }}>
          LINEでは、白髪の量や気になる点を事前にご相談いただけます。営業時間（{SALON.hours}）外のメッセージは、翌営業日以降に順次お返事します。
        </p>
        <p style={{ fontSize:"0.82rem", color:"#7a5a60", lineHeight:1.8 }}>
          スタッフ採用へのご応募は<a href={SALON.recruit} target="_blank" rel="noopener" style={{ color:"#8B5E6B" }}>採用ページ（エンゲージ）</a>からお願いします。
        </p>
      </div>
      <p style={{ fontSize:"0.8rem", color:"#999", marginTop:"1.5rem", textAlign:"center" }}>
        いただいた個人情報は<Link href="/privacy" style={{ color:"#8B5E6B" }}>プライバシーポリシー</Link>に基づき適切に取り扱います。
      </p>
    </div>
  );
}
