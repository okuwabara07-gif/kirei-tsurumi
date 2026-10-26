// 店舗情報の唯一の情報源（NAP）。ここを直せばサイト全体と構造化データに反映される。
// 住所は自社の求人掲載（engage）の記載に合わせている。変更時はGoogleビジネスプロフィール・HPBと必ず一致させること。
export const SITE_URL = "https://kirei-tsurumi.com";

export const SALON = {
  name: "キレイ鶴見店",
  fullName: "白髪染め専門店 キレイ鶴見店",
  tagline: "白髪染め専門ヘアカラーサロン",
  operator: "AOKAE合同会社",
  postalCode: "230-0051",
  region: "神奈川県",
  locality: "横浜市鶴見区",
  street: "鶴見中央5-10-8 101",
  get address() {
    return `${this.region}${this.locality}${this.street}`;
  },
  access: "JR鶴見駅東口・京急鶴見駅から徒歩4分",
  accessShort: "鶴見駅徒歩4分",
  hours: "10:00〜18:00（最終受付17:00）",
  opens: "10:00",
  closes: "18:00",
  holiday: "不定休",
  payment: "現金・クレジットカード（VISA／Mastercard／JCB／AMEX／Diners／銀聯／Discover）・PayPay ※一部メニューは現金不可",
  priceRange: "¥1,900〜¥8,900",
  hotpepper: "https://beauty.hotpepper.jp/slnH000501100/",
  line: "https://line.me/R/ti/p/@545fncvi",
  instagram: "https://www.instagram.com/kirei.tsurumi/",
  x: "https://x.com/kirei_tsurumi",
  recruit: "https://en-gage.net/kireitsurumi2021_saiyo/",
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("神奈川県横浜市鶴見区鶴見中央5-10-8 キレイ鶴見店") +
    "&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("キレイ鶴見店 横浜市鶴見区鶴見中央5-10-8"),
} as const;

export function salonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${SITE_URL}/#salon`,
    name: SALON.name,
    alternateName: SALON.fullName,
    description:
      "横浜市鶴見区・鶴見駅徒歩4分の白髪染め専門ヘアカラーサロン。オーガニックカラー、リタッチ、全体染めに対応。",
    url: SITE_URL,
    image: [`${SITE_URL}/images/salon-exterior.jpg`, `${SITE_URL}/images/salon-mirror.jpg`],
    priceRange: SALON.priceRange,
    paymentAccepted: "Cash, Credit Card, PayPay",
    address: {
      "@type": "PostalAddress",
      postalCode: SALON.postalCode,
      addressRegion: SALON.region,
      addressLocality: SALON.locality,
      streetAddress: SALON.street,
      addressCountry: "JP",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: SALON.opens,
        closes: SALON.closes,
      },
    ],
    sameAs: [SALON.instagram, SALON.x, SALON.hotpepper],
    parentOrganization: { "@type": "Organization", name: SALON.operator },
  };
}
