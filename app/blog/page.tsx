import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "白髪染め・ヘアカラーの美容コラム｜鶴見の白髪染め専門店 キレイ鶴見店" },
  description: "鶴見の白髪染め専門店のカラーリストが監修する美容コラム。白髪染めの頻度・色選び・頭皮ケア・ホームケアなど、40代・50代からの白髪の悩みに役立つ情報をまとめています。",
  alternates: { canonical: "https://kirei-tsurumi.com/blog" },
};

interface ListItem {
  type: 'post' | 'article'
  slug: string
  title: string
  category: string
  description: string
  date: string
  image_url?: string
}

export default async function BlogPage() {
  const posts = getAllPosts();

  const items: ListItem[] = [
    ...posts.map(p => ({
      type: 'post' as const,
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      date: p.date,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div style={{ maxWidth:"900px", margin:"0 auto", padding:"3rem 1rem" }}>
      <JsonLd data={breadcrumbJsonLd([{ name:"ホーム", path:"/" }, { name:"美容コラム", path:"/blog" }])} />
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>白髪染め・ヘアカラーの美容コラム</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>ヘアカラー・白髪染めに関するお役立ち情報</p>
      {items.length === 0 ? (
        <p style={{ color:"#999", textAlign:"center", padding:"3rem" }}>記事を準備中です</p>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem" }}>
          {items.map(item => {
            const href = `/blog/${item.slug}`;
            return (
              <Link key={`${item.type}-${item.slug}`} href={href} style={{ textDecoration:"none" }}>
                <article style={{ background:"#fff", borderRadius:"12px", padding:"1.5rem", border:"1px solid #e8ddd8", height:"100%", cursor:"pointer" }}>
                  <span style={{ fontSize:"0.75rem", background:"#f9f0f2", color:"#8B5E6B", padding:"3px 10px", borderRadius:"20px" }}>{item.category}</span>
                  <h2 style={{ fontFamily:"serif", fontSize:"1rem", color:"#3a2428", margin:"0.75rem 0 0.5rem", lineHeight:1.5 }}>{item.title}</h2>
                  <p style={{ fontSize:"0.82rem", color:"#7a5a60", lineHeight:1.6 }}>{item.description}</p>
                  <p style={{ fontSize:"0.75rem", color:"#bbb", marginTop:"1rem" }}>{item.date}</p>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
