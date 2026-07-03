import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getAllArticles } from "@/lib/articles";

export const revalidate = 3600;

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
  const articles = await getAllArticles();

  const items: ListItem[] = [
    ...posts.map(p => ({
      type: 'post' as const,
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      date: p.date,
    })),
    ...articles.map(a => ({
      type: 'article' as const,
      slug: a.slug,
      title: a.title,
      category: a.cluster,
      description: a.excerpt,
      date: a.published_at.split('T')[0],
      image_url: a.image_url,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div style={{ maxWidth:"900px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>美容コラム</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>ヘアカラー・白髪染めに関するお役立ち情報</p>
      {items.length === 0 ? (
        <p style={{ color:"#999", textAlign:"center", padding:"3rem" }}>記事を準備中です</p>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem" }}>
          {items.map(item => {
            const href = item.type === 'post' ? `/blog/${item.slug}` : `/blog/db/${item.slug}`;
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
