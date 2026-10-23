// 旧・自動生成記事（/blog/db/*）は同じテーマの重複が多かったため、内容が充実した /blog/* の記事へ統合する。
// slug のキーワードで統合先を決める。上から順に評価し、最初に一致したものを使う。
// 統合先は「公開中（draft でない）」の /blog 記事のみ。draft の記事を指すと 404 になるので注意。
const RULES: [RegExp, string][] = [
  [/line-miniapp|karte/, "line-miniapp-hair-karte-guide"],
  [/blend|blur|bokashi/, "color-bokashi-vs-dye"],
  [/drugstore|salon-hair-color/, "color-self-unevenness-60s"],
  [/difference|dye-vs|dye-color/, "color-first-time-salon-60s"],
  [/frequency/, "color-cycle-2months"],
  [/shampoo|rinse|color-lasting|retention/, "color-homecare-keep-50s"],
  [/scalp/, "color-sensitive-skin-50s"],
  [/elasticity|density/, "color-pasatsuki-50s"],
  [/blow-dry|drying/, "color-shine-repair-50s"],
  [/retouch|touchup/, "color-root-touchup-50s"],
  [/color-options/, "color-bright-50s"],
  [/routine|daily-habits/, "color-homecare-keep-50s"],
  [/products/, "color-self-unevenness-60s"],
  [/white-hair-care|shiraga-care|starting-white|timing|basics|first-step|first-choice/, "color-first-time-salon-60s"],
];

export function dbArticleRedirect(slug: string): string {
  for (const [re, target] of RULES) if (re.test(slug)) return `/blog/${target}`;
  return "/blog";
}
