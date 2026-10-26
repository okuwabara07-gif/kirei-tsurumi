import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // ローカル画像のみ使用するため remotePatterns 不要
  },
  // 未公開だったAI下書き記事を統合・削除した際の旧スラッグ（念のため301）
  async redirects() {
    return [
      { source: '/blog/shiraganome-age-40', destination: '/blog/first-time-shiraganome', permanent: true },
      { source: '/blog/hair-color-40-50-women', destination: '/blog/first-time-shiraganome', permanent: true },
      { source: '/blog/color-aging-care', destination: '/blog/first-time-shiraganome', permanent: true },
      { source: '/blog/scalp-trouble-color', destination: '/blog/color-allergy-patch-test', permanent: true },
      { source: '/blog/sensitive-scalp-color', destination: '/blog/color-allergy-patch-test', permanent: true },
      { source: '/blog/auto-shampoo-merit', destination: '/blog/first-visit-guide', permanent: true },
      { source: '/blog/paypay-beauty-salon-guide', destination: '/blog/first-visit-guide', permanent: true },
      { source: '/blog/online-reservation-beauty', destination: '/blog/first-visit-guide', permanent: true },
      { source: '/blog/weekend-hair-color-plan', destination: '/blog/first-visit-guide', permanent: true },
      { source: '/blog/color-regrowth-hide', destination: '/blog/retouch-timing-guide', permanent: true },
      { source: '/blog/color-frequency-tips', destination: '/blog/retouch-timing-guide', permanent: true },
      { source: '/blog/shiraganome-cost-guide', destination: '/blog/home-vs-salon-color', permanent: true },
      { source: '/blog/color-price-guide-2025', destination: '/blog/home-vs-salon-color', permanent: true },
      { source: '/blog/organic-color-vs-normal', destination: '/blog/premium-color-vs-organic', permanent: true },
      { source: '/blog/organic-color-ingredients', destination: '/blog/premium-color-vs-organic', permanent: true },
      { source: '/blog/hair-quality-improve-color', destination: '/blog/premium-color-vs-organic', permanent: true },
      { source: '/blog/color-treatment-combo', destination: '/blog/premium-color-vs-organic', permanent: true },
      { source: '/blog/natural-color-herbs', destination: '/blog/premium-color-vs-organic', permanent: true },
      { source: '/blog/ash-brown-white-hair', destination: '/blog/gray-blending-technique', permanent: true },
      { source: '/blog/color-care-after', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-towel-dry-tips', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-uv-protection', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-before-after-care', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-glossy-finish', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-damage-repair', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/shampoo-after-color', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/long-hair-color-tips', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/short-hair-color-guide', destination: '/blog/color-homecare-keep-50s', permanent: true },
      { source: '/blog/color-job-interview', destination: '/blog/before-ceremony-color', permanent: true },
      { source: '/blog/yokohama-tsurumi-hair-salon', destination: '/blog/shiraganome-tsurumi-guide', permanent: true },
      { source: '/blog/tsurumi-station-beauty', destination: '/blog/shiraganome-tsurumi-guide', permanent: true },
      { source: '/blog/gray-hair-dye-or-not', destination: '/blog/color-continue-or-stop-50s', permanent: true },
      { source: '/blog/gray-hair-fashion', destination: '/blog/color-continue-or-stop-50s', permanent: true },
      { source: '/blog/color-hormones-menopause', destination: '/blog', permanent: true },
      { source: '/blog/postpartum-white-hair', destination: '/blog', permanent: true },
      { source: '/blog/white-hair-stress-relation', destination: '/blog', permanent: true },
      { source: '/blog/hair-color-nutrition', destination: '/blog', permanent: true },
      { source: '/blog/hair-scalp-health-diet', destination: '/blog', permanent: true },
      { source: '/blog/hair-color-skin-tone', destination: '/blog', permanent: true },
      { source: '/blog/seasonal-color-change', destination: '/blog', permanent: true },
      { source: '/blog/color-for-mother', destination: '/blog', permanent: true },
      { source: '/blog/kirei-tsurumi-review-voice', destination: '/blog', permanent: true },
      { source: '/blog/working-women-hair-color', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
