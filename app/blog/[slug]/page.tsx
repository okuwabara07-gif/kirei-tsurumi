import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SALON, SITE_URL } from "@/lib/salon";

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: { absolute: `${post.title}｜キレイ鶴見店` },
    description: post.description,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, siteName: SALON.name, locale: "ja_JP", type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const allPosts = getAllPosts().filter(p => p.slug !== slug);
  const sameCat = allPosts.filter(p => p.category === post.category);
  const related = [...sameCat, ...allPosts.filter(p => p.category !== post.category)].slice(0, 6);
  const url = `${SITE_URL}/blog/${slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: `${SALON.name} カラーリスト`, url: `${SITE_URL}/about` },
    publisher: { "@id": `${SITE_URL}/#salon` },
  };

  return (
    <div style={{ maxWidth:"760px", margin:"0 auto", padding:"3rem 1rem" }}>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbJsonLd([{ name:"ホーム", path:"/" }, { name:"美容コラム", path:"/blog" }, { name: post.title, path:`/blog/${slug}` }])} />
      <div style={{ marginBottom:"1rem" }}>
        <Link href="/blog" style={{ fontSize:"0.75rem", color:"#888", textDecoration:"none", letterSpacing:"0.1em" }}>← COLUMN一覧</Link>
      </div>
      <span style={{ fontSize:"0.72rem", background:"#f0ede8", color:"#555", padding:"3px 12px", letterSpacing:"0.1em" }}>{post.category}</span>
      <h1 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,4vw,2rem)", color:"#111", margin:"1rem 0 0.5rem", lineHeight:1.5, fontWeight:400 }}>{post.title}</h1>
      <div style={{ display:"flex", gap:"1.5rem", alignItems:"center", marginBottom:"2rem", paddingBottom:"1.5rem", borderBottom:"1px solid #e8e0d8" }}>
        <p style={{ fontSize:"0.75rem", color:"#aaa" }}>公開日：<time dateTime={post.date}>{post.date}</time></p>
      </div>

      <div style={{ background:"#f7f5f2", borderRadius:"4px", padding:"1.25rem 1.5rem", marginBottom:"2.5rem", borderLeft:"3px solid #111" }}>
        <p style={{ fontSize:"0.8rem", color:"#555", lineHeight:1.9 }}>
          <span style={{ fontWeight:700, color:"#111" }}>監修：</span>キレイ鶴見店 カラーリスト<br />
          10年以上のキャリアを持つカラーの専門家。オーガニックカラーを中心に、頭皮と髪の健康を守りながら美しい髪色を提案することをモットーとしています。
        </p>
      </div>

      <div style={{ lineHeight:2.1, fontSize:"0.95rem", color:"#222" }}
        className="prose-content">
        <MDXRemote source={post.content} />
      </div>

      <div style={{ background:"#1a1a1a", borderRadius:"4px", padding:"2rem", margin:"3rem 0", textAlign:"center" }}>
        <p style={{ fontFamily:"serif", fontSize:"1rem", color:"#fff", marginBottom:"0.5rem", fontWeight:400 }}>キレイ鶴見店でご相談ください</p>
        <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.55)", marginBottom:"1.5rem", lineHeight:1.8 }}>
          {SALON.access}｜{SALON.hours}<br />{SALON.address}
        </p>
        <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
          <a href={SALON.hotpepper} target="_blank" rel="noopener"
            style={{ background:"#fff", color:"#111", padding:"12px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700 }}>
            予約する
          </a>
          <Link href="/menu"
            style={{ display:"inline-block", border:"1px solid rgba(255,255,255,0.5)", color:"#fff", padding:"12px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", margin:"10px 8px 0" }}>
            メニュー・料金
          </Link>
          <Link href="/diagnosis"
            style={{ display:"inline-block", background:"#8a9a85", color:"#fff", padding:"12px 40px", fontSize:"0.82rem", letterSpacing:"0.15em", textDecoration:"none", fontWeight:700, margin:"10px 8px 0" }}>
            無料・白髪ケア診断
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop:"3rem", paddingTop:"2rem", borderTop:"1px solid #e8e0d8" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", color:"#888", marginBottom:"1.5rem" }}>— 関連記事</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.5rem" }}>
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration:"none" }}>
                <div style={{ borderTop:"2px solid #111", paddingTop:"1rem" }}>
                  <p style={{ fontSize:"0.68rem", color:"#888", marginBottom:"0.5rem", letterSpacing:"0.1em" }}>{p.category}</p>
                  <p style={{ fontSize:"0.88rem", color:"#111", lineHeight:1.6, fontFamily:"serif" }}>{p.title}</p>
                  <p style={{ fontSize:"0.72rem", color:"#bbb", marginTop:"0.5rem" }}>{p.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
