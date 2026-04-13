import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div style={{ maxWidth:"900px", margin:"0 auto", padding:"3rem 1rem" }}>
      <h1 style={{ fontFamily:"serif", fontSize:"1.8rem", color:"#3a2428", marginBottom:"0.5rem" }}>美容コラム</h1>
      <p style={{ color:"#7a5a60", fontSize:"0.9rem", marginBottom:"3rem" }}>ヘアカラー・白髪染めに関するお役立ち情報</p>
      {posts.length === 0 ? (
        <p style={{ color:"#999", textAlign:"center", padding:"3rem" }}>記事を準備中です</p>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem" }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
              <article style={{ background:"#fff", borderRadius:"12px", padding:"1.5rem", border:"1px solid #e8ddd8", height:"100%", cursor:"pointer" }}>
                <span style={{ fontSize:"0.75rem", background:"#f9f0f2", color:"#8B5E6B", padding:"3px 10px", borderRadius:"20px" }}>{post.category}</span>
                <h2 style={{ fontFamily:"serif", fontSize:"1rem", color:"#3a2428", margin:"0.75rem 0 0.5rem", lineHeight:1.5 }}>{post.title}</h2>
                <p style={{ fontSize:"0.82rem", color:"#7a5a60", lineHeight:1.6 }}>{post.description}</p>
                <p style={{ fontSize:"0.75rem", color:"#bbb", marginTop:"1rem" }}>{post.date}</p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
