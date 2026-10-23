import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { dbArticleRedirect } from "./lib/db-redirects";

// 旧・自動生成記事 /blog/db/* は内容の重複が多かったため、同テーマの /blog/* 記事へ 301 で統合する。
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/blog\/db\/?/, "").replace(/\/$/, "");
  const target = slug ? dbArticleRedirect(slug) : "/blog";
  return NextResponse.redirect(new URL(target, request.url), 301);
}

export const config = {
  matcher: ["/blog/db", "/blog/db/:path*"],
};
