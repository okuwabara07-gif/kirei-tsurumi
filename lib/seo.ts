import type { Metadata } from "next";
import { SITE_URL, SALON } from "./salon";

/** ページ固有の title / description / canonical / OG。canonical は必ずそのページ自身を指す。 */
export function pageMeta(path: string, title: string, description: string, opts: { noindex?: boolean; type?: "website" | "article" } = {}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SALON.name, locale: "ja_JP", type: opts.type ?? "website" },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE_URL : `${SITE_URL}${it.path}`,
    })),
  };
}
