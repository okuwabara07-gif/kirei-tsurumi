import { permanentRedirect } from "next/navigation";
import { dbArticleRedirect } from "@/lib/db-redirects";

// 通常は proxy.ts で 301 されるため、ここに来るのは保険（proxy を経由しなかった場合）。
export default async function LegacyDbArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(dbArticleRedirect(slug));
}
