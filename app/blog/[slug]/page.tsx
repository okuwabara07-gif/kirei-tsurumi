import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | キレイ鶴見店`, description: post.description };
}
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return (
    <div style={{ maxWidth:"720px", margin:"0 auto", padding:"3rem 1rem" }}>
      <span style={{ fontSize:"0.75rem", background:"#f9f0f2", color:"#8B5E6B", padding:"3px 10px", borderRadius:"20px" }}>{post.category}</span>
      <h1 style={{ fontFamily:"serif", fontSize:"clamp(1.4rem,4vw,2rem)", color:"#3a2428", margin:"1rem 0 0.5rem", lineHeight:1.4 }}>{post.title}</h1>
      <p style={{ fontSize:"0.8rem", color:"#bbb", marginBottom:"2rem" }}>{post.date}</p>
      <div style={{ background:"#f5f5f5", height:"90px", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"2rem", fontSize:"0.8rem", color:"#bbb" }}>広告</div>
      <div style={{ lineHeight:1.9, fontSize:"0.95rem", color:"#3a2428" }}>
        <MDXRemote source={post.content} />
      </div>
      <div style={{ background:"#f9f0f2", borderRadius:"12px", padding:"1.5rem", marginTop:"3rem", textAlign:"center" }}>
        <p style={{ fontFamily:"serif", fontSize:"1rem", color:"#5C3A45", marginBottom:"1rem" }}>キレイ鶴見店でヘアカラーのご相談を</p>
        <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
          style={{ background:"#8B5E6B", color:"#fff", padding:"12px 28px", borderRadius:"30px", fontSize:"0.9rem", fontWeight:700, textDecoration:"none" }}>
          📅 ネット予約する
        </a>
      </div>
    </div>
  );
}
