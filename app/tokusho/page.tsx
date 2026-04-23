import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | キレイ鶴見店",
  description: "キレイ鶴見店（AOKAE合同会社運営）の特定商取引法に基づく表記ページ。",
};

const rows: [string, string][] = [
  ["販売業者", "AOKAE合同会社"],
  ["運営責任者", "代表社員"],
  ["店舗名", "キレイ鶴見店"],
  ["所在地", "〒230-0051 東京都鶴見中央（詳細はご予約時に案内）"],
  ["電話番号", "（非公開）（受付時間：営業時間内）"],
  ["メールアドレス", "info@aokae.net"],
  ["販売URL", "https://kirei-tsurumi.com"],
  ["販売価格", "カット ¥4,400〜 / カラー ¥6,600〜 / トリートメント ¥3,300〜\n※詳細は各メニューページをご確認ください"],
  ["商品代金以外の必要料金", "交通費・駐車場代など来店に伴う費用はお客様のご負担となります"],
  ["支払方法", "店頭にて現金・クレジットカード・PayPay・交通系ICに対応"],
  ["支払時期", "ご来店時にお支払いいただきます"],
  ["サービス提供時期", "ご予約日時に店頭で提供いたします"],
  ["キャンセルについて", "ご予約キャンセルは前日までにご連絡ください。当日キャンセルの場合、施術料金の50%をキャンセル料として申し受ける場合がございます。"],
  ["返金について", "役務提供完了後の返金は承っておりません。ただし、施術に明らかな瑕疵がある場合はご相談ください。"],
];

export default function TokushoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-8 pb-4 border-b border-amber-200">
        特定商取引法に基づく表記
      </h1>
      <table className="w-full text-sm leading-relaxed">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-amber-100">
              <th className="text-left py-4 pr-4 align-top w-40 text-amber-700 font-medium whitespace-nowrap">
                {label}
              </th>
              <td className="py-4 whitespace-pre-line text-gray-800">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-10 text-xs text-gray-500 border-t border-amber-100 pt-4">
        最終更新日：2026年4月19日
      </p>
    </main>
  );
}
