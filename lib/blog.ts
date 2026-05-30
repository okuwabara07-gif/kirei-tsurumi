import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDir = path.join(process.cwd(), "content/blog");
const enPostsDir = path.join(process.cwd(), "content/en/blog");
export interface Post {
  slug: string; title: string; date: string; description: string; category: string; content: string; supervisor?: string; draft?: boolean;
}
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    return { slug, content, title: data.title||"", date: data.date||"", description: data.description||"", category: data.category||"美容", supervisor: data.supervisor||"", draft: data.draft===true };
  }).filter(p => !p.draft).sort((a,b) => b.date.localeCompare(a.date));
}
export function getPostBySlug(slug: string): Post | null {
  const file = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  if (data.draft===true) return null;
  return { slug, content, title: data.title||"", date: data.date||"", description: data.description||"", category: data.category||"美容", supervisor: data.supervisor||"", draft: data.draft===true };
}
export function getAllEnPosts(): Post[] {
  if (!fs.existsSync(enPostsDir)) return [];
  const files = fs.readdirSync(enPostsDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(enPostsDir, file), "utf8");
    const { data, content } = matter(raw);
    return { slug, content, title: data.title||"", date: data.date||"", description: data.description||"", category: data.category||"Beauty", supervisor: data.supervisor||"", draft: data.draft===true };
  }).filter(p => !p.draft).sort((a,b) => b.date.localeCompare(a.date));
}
export function getEnPostBySlug(slug: string): Post | null {
  const file = path.join(enPostsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  if (data.draft===true) return null;
  return { slug, content, title: data.title||"", date: data.date||"", description: data.description||"", category: data.category||"Beauty", supervisor: data.supervisor||"", draft: data.draft===true };
}
