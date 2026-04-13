import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const persons = [
  { name: "田中さゆり", age: 43, job: "会社員", city: "鶴見区在住", worry: "白髪が目立ち始めた" },
  { name: "木村あかね", age: 51, job: "主婦", city: "横浜市在住", worry: "カラー剤で頭皮がかぶれた経験がある" },
  { name: "佐藤みどり", age: 38, job: "ママ・パート勤務", city: "川崎市在住", worry: "産後から白髪が急増した" },
  { name: "渡辺ゆき", age: 47, job: "パート", city: "鶴見区在住", worry: "美容室代を節約したいが仕上がりも妥協したくない" },
  { name: "中村のりこ", age: 55, job: "会社員", city: "横浜市鶴見区在住", worry: "グレイヘアにすべきか悩んでいる" },
  { name: "林ともこ", age: 44, job: "フリーランス", city: "横浜市在住", worry: "オーガニックカラーに興味がある" },
  { name: "吉田まり", age: 49, job: "看護師", city: "川崎市在住", worry: "忙しくて美容室に行く時間がない" },
  { name: "松本けいこ", age: 42, job: "教師", city: "横浜市在住", worry: "白髪染めで髪が傷むのが気になる" },
  { name: "小林ひとみ", age: 58, job: "自営業", city: "鶴見区在住", worry: "年齢に合ったヘアカラーが分からない" },
  { name: "加藤ゆみこ", age: 35, job: "会社員", city: "横浜市在住", worry: "早めの白髪対策をしたい" },
];

const supervisors = [
  { name: "キレイ鶴見店 シニアカラリスト・田村", career: "美容師歴15年。オーガニックカラーの専門家として、頭皮と髪の健康を守りながら美しい発色を実現することを使命としています。" },
  { name: "キレイ鶴見店 カラーリスト・中島", career: "カラー専門歴12年。白髪染めからおしゃれ染めまで幅広く対応。特に40〜50代のお客様の髪の悩みに寄り添ったカラー提案が得意です。" },
  { name: "キレイ鶴見店 チーフカラリスト・山本", career: "美容師歴18年、カラー専門歴10年。髪質改善カラーのスペシャリストとして、ダメージを最小限に抑えた施術を提供しています。" },
];

const articles = [
  { slug: "shiraganome-tsurumi-guide", category: "白髪染め", title: "鶴見で白髪染めをするなら知っておきたい5つのこと｜プロが教える正しい選び方", personIdx: 0, supervisorIdx: 0 },
  { slug: "organic-color-vs-normal", category: "白髪染め", title: "オーガニックカラーと普通のカラーの違いとは？美容師が本音で徹底比較", personIdx: 1, supervisorIdx: 1 },
  { slug: "gray-hair-dye-or-not", category: "グレイヘア", title: "50代の白髪、染める？染めない？グレイヘアという新しい選択肢", personIdx: 4, supervisorIdx: 2 },
  { slug: "scalp-trouble-color", category: "頭皮ケア", title: "白髪染めで頭皮がかぶれた経験がある方へ｜原因と対策を専門家が解説", personIdx: 1, supervisorIdx: 0 },
  { slug: "home-vs-salon-color", category: "白髪染め", title: "ホームカラーとサロンカラーどっちがお得？コストと仕上がりを本音で比較", personIdx: 3, supervisorIdx: 1 },
  { slug: "hair-quality-improve-color", category: "髪質改善", title: "髪質改善カラーとは何か？普通のカラーとどう違うのかを徹底解説", personIdx: 5, supervisorIdx: 2 },
  { slug: "shampoo-after-color", category: "ヘアケア", title: "白髪染め後のシャンプー選び完全ガイド｜色持ちを2倍にする正しいケア方法", personIdx: 2, supervisorIdx: 0 },
  { slug: "hair-color-40-50-women", category: "トレンド", title: "40代・50代女性に似合うヘアカラー10選｜年齢別おすすめカラーを解説", personIdx: 8, supervisorIdx: 1 },
  { slug: "color-frequency-tips", category: "ヘアケア", title: "ヘアカラーの頻度を減らす色持ちテクニック｜月1回を2ヶ月に1回にする方法", personIdx: 6, supervisorIdx: 2 },
  { slug: "first-time-shiraganome", category: "白髪染め", title: "初めて白髪染めをする方への完全ガイド｜失敗しない色選びと事前準備", personIdx: 9, supervisorIdx: 0 },
  { slug: "postpartum-white-hair", category: "白髪染め", title: "産後に白髪が急増する理由と対策｜授乳中でも安心なカラー方法とは", personIdx: 2, supervisorIdx: 1 },
  { slug: "organic-color-ingredients", category: "オーガニック", title: "オーガニックカラーの成分を徹底解剖｜頭皮に優しい理由をプロが説明", personIdx: 5, supervisorIdx: 2 },
  { slug: "color-damage-repair", category: "ヘアケア", title: "カラーリングで傷んだ髪を復活させる方法｜自宅でできるケアを完全解説", personIdx: 7, supervisorIdx: 0 },
  { slug: "retouch-timing-guide", category: "白髪染め", title: "白髪のリタッチはいつすべき？プロが教える最適なタイミングと頻度", personIdx: 0, supervisorIdx: 1 },
  { slug: "gray-blending-technique", category: "グレイヘア", title: "白髪を活かすグレイブレンディングとは？自然に馴染む最新カラー技術", personIdx: 4, supervisorIdx: 2 },
  { slug: "yokohama-tsurumi-hair-salon", category: "鶴見・横浜", title: "横浜・鶴見でオーガニックカラーができる美容室の選び方｜失敗しないポイント", personIdx: 3, supervisorIdx: 0 },
  { slug: "ash-brown-white-hair", category: "トレンド", title: "白髪染めにアッシュブラウンが人気の理由｜透明感と自然な仕上がりの秘密", personIdx: 8, supervisorIdx: 1 },
  { slug: "color-before-after-care", category: "ヘアケア", title: "カラー前後のヘアケア完全マニュアル｜サロンでの仕上がりを長持ちさせる方法", personIdx: 6, supervisorIdx: 2 },
  { slug: "sensitive-scalp-color", category: "頭皮ケア", title: "敏感肌でも白髪染めを楽しむ方法｜頭皮トラブルゼロを目指すカラー選び", personIdx: 1, supervisorIdx: 0 },
  { slug: "mens-shiraganome-guide", category: "メンズ", title: "男性の白髪染めガイド｜自然に見せる色選びとサロンでのオーダー方法", personIdx: 9, supervisorIdx: 1 },
  { slug: "paypay-beauty-salon-guide", category: "鶴見・横浜", title: "PayPay対応の美容室を鶴見・横浜で探すメリット｜キャッシュレス美容の新常識", personIdx: 3, supervisorIdx: 2 },
  { slug: "color-uv-protection", category: "ヘアケア", title: "ヘアカラー後の紫外線対策完全ガイド｜色落ちを防ぐUVケアの正解", personIdx: 5, supervisorIdx: 0 },
  { slug: "premium-color-vs-organic", category: "白髪染め", title: "プレミアムカラーとオーガニックカラーの違い｜自分に合う選び方を解説", personIdx: 0, supervisorIdx: 1 },
  { slug: "hair-color-skin-tone", category: "トレンド", title: "肌色に合うヘアカラーの選び方｜イエベ・ブルべ別おすすめカラー完全版", personIdx: 7, supervisorIdx: 2 },
  { slug: "white-hair-stress-relation", category: "白髪染め", title: "ストレスと白髪の関係を科学的に解説｜今日からできる白髪予防習慣", personIdx: 2, supervisorIdx: 0 },
  { slug: "color-treatment-combo", category: "ヘアケア", title: "カラーとトリートメントを同時にするメリット｜髪のダメージを最小限にする方法", personIdx: 6, supervisorIdx: 1 },
  { slug: "auto-shampoo-merit", category: "サロン体験", title: "オートシャンプーとは？普通のシャンプーとの違いと美髪効果を徹底解説", personIdx: 8, supervisorIdx: 2 },
  { slug: "hair-color-nutrition", category: "美容・健康", title: "美髪を作る食事と栄養素｜ヘアカラーをより美しく保つ食生活のポイント", personIdx: 4, supervisorIdx: 0 },
  { slug: "tsurumi-station-beauty", category: "鶴見・横浜", title: "鶴見駅周辺で美容室を選ぶポイント｜駅近サロンを上手に活用する方法", personIdx: 3, supervisorIdx: 1 },
  { slug: "color-aging-care", category: "エイジングケア", title: "エイジングケアとしてのヘアカラー｜年齢とともに変わる髪と上手に付き合う方法", personIdx: 8, supervisorIdx: 2 },
  { slug: "shiraganome-cost-guide", category: "白髪染め", title: "白髪染めの費用を節約するコツ｜サロン派もホーム派も知っておきたいお得情報", personIdx: 3, supervisorIdx: 0 },
  { slug: "natural-color-herbs", category: "オーガニック", title: "ハーブを使ったナチュラルヘアカラーの魅力｜植物由来成分が髪にもたらす効果", personIdx: 5, supervisorIdx: 1 },
  { slug: "color-regrowth-hide", category: "白髪染め", title: "白髪の生え際を目立たせない工夫｜プロが実践する根元ケアの秘訣", personIdx: 0, supervisorIdx: 2 },
  { slug: "short-hair-color-guide", category: "トレンド", title: "ショートヘアに似合うヘアカラーガイド｜小顔効果も狙える色選びのコツ", personIdx: 7, supervisorIdx: 0 },
  { slug: "long-hair-color-tips", category: "トレンド", title: "ロングヘアのヘアカラーを美しく保つコツ｜毛先まで綺麗な状態を維持する方法", personIdx: 2, supervisorIdx: 1 },
  { slug: "color-allergy-patch-test", category: "頭皮ケア", title: "ヘアカラーのアレルギーテストの重要性｜パッチテストの正しいやり方と注意点", personIdx: 1, supervisorIdx: 2 },
  { slug: "working-women-hair-color", category: "40代・50代", title: "働く40代女性のためのヘアカラー戦略｜通勤・仕事・プライベートを一つの髪色で", personIdx: 0, supervisorIdx: 0 },
  { slug: "seasonal-color-change", category: "トレンド", title: "季節に合わせたヘアカラーの楽しみ方｜春夏秋冬で変えるおすすめカラー提案", personIdx: 9, supervisorIdx: 1 },
  { slug: "color-price-guide-2025", category: "白髪染め", title: "2025年版・白髪染めの相場と料金ガイド｜サロン選びで後悔しないための知識", personIdx: 3, supervisorIdx: 2 },
  { slug: "hair-scalp-health-diet", category: "美容・健康", title: "頭皮の健康を守る生活習慣｜白髪・薄毛・抜け毛を予防するデイリーケア", personIdx: 4, supervisorIdx: 0 },
  { slug: "color-glossy-finish", category: "ヘアケア", title: "ヘアカラー後のツヤを出す仕上げ方法｜サロン帰りの輝きを自宅で再現する方法", personIdx: 6, supervisorIdx: 1 },
  { slug: "before-ceremony-color", category: "特別なシーン", title: "入学式・卒業式前のヘアカラーガイド｜大切な日に向けた美しい髪色の準備", personIdx: 2, supervisorIdx: 2 },
  { slug: "color-job-interview", category: "特別なシーン", title: "就職・転職面接に向けたヘアカラーの考え方｜好印象を与える色選びのポイント", personIdx: 9, supervisorIdx: 0 },
  { slug: "gray-hair-fashion", category: "グレイヘア", title: "グレイヘアをおしゃれに見せるファッションコーデ｜白髪を魅力に変えるスタイリング", personIdx: 4, supervisorIdx: 1 },
  { slug: "color-hormones-menopause", category: "40代・50代", title: "更年期と髪の変化｜ホルモンバランスが崩れたときのヘアカラーとケアのポイント", personIdx: 8, supervisorIdx: 2 },
  { slug: "weekend-hair-color-plan", category: "サロン体験", title: "週末に白髪染めを楽しむ計画の立て方｜忙しい方のためのサロン活用術", personIdx: 6, supervisorIdx: 0 },
  { slug: "color-for-mother", category: "40代・50代", title: "母へのプレゼントに白髪染めサロン体験を｜喜ばれる美容ギフトの選び方", personIdx: 3, supervisorIdx: 1 },
  { slug: "online-reservation-beauty", category: "サロン体験", title: "美容室のオンライン予約を使いこなす方法｜ホットペッパービューティーの賢い活用術", personIdx: 7, supervisorIdx: 2 },
  { slug: "color-towel-dry-tips", category: "ヘアケア", title: "ヘアカラー後のタオルドライの正しい方法｜摩擦ダメージを防いで色持ちアップ", personIdx: 5, supervisorIdx: 0 },
  { slug: "kirei-tsurumi-review-voice", category: "お客様の声", title: "キレイ鶴見店に来てみて分かったこと｜実際のお客様の声と施術レポート", personIdx: 0, supervisorIdx: 1 },
  { slug: "tsurumi-ginga-beauty-walk", category: "鶴見・横浜", title: "鶴見銀座商店街から徒歩圏内の美容室｜アクセス抜群のキレイ鶴見店の魅力", personIdx: 3, supervisorIdx: 2 },
];

async function generateArticle(article, person, supervisor, index) {
  console.log(`生成中 ${index + 1}/50: ${article.title}`);
  const prompt = `あなたは美容専門誌VOCEのライターです。以下の条件で記事を書いてください。

【記事情報】
タイトル：${article.title}
カテゴリ：${article.category}

【登場人物】
名前：${person.name}（${person.age}歳・${person.job}・${person.city}）
悩み：${person.worry}

【監修者】
${supervisor.name}
${supervisor.career}

【文体の条件】
- VOCE・美容雑誌風の読みやすく共感を呼ぶ文体
- 冒頭は${person.name}さんの悩みシーンから始める（具体的・リアル）
- 「正直、〜」「意外と〜」「実は〜」などの口語表現を自然に使う
- 「鶴見」「横浜」などの地域名を自然に入れる
- AI感・箇条書き過多を避け、読み物として面白い構成にする
- 断定表現と体験談を多用する
- H2見出し6個、H3見出し適宜使用
- 文字数：4500文字以上

【構成】
1. 冒頭：${person.name}さんの悩みシーンで始まる導入（300文字）
2. H2×6の本文（各600〜700文字）
3. まとめ：キレイ鶴見店への自然な誘導で締める（200文字）

【画像】記事内に以下のMarkdown形式で画像を3枚挿入：
![説明](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop)
![説明](https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop)
![説明](https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&auto=format&fit=crop)

出力はMarkdown本文のみ。frontmatterは不要。`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.content[0].text;
  const today = new Date().toISOString().split("T")[0];
  const frontmatter = `---
title: "${article.title}"
date: "${today}"
description: "${person.name}（${person.age}歳・${person.job}）の体験をもとに、${article.category}について専門家が詳しく解説します。"
category: "${article.category}"
supervisor: "${supervisor.name}"
person: "${person.name}・${person.age}歳・${person.job}"
---

`;
  return frontmatter + content;
}

async function main() {
  const outputDir = "content/blog";
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const startIdx = parseInt(process.argv[2] || "0");
  const endIdx = parseInt(process.argv[3] || "10");
  const batch = articles.slice(startIdx, endIdx);
  for (let i = 0; i < batch.length; i++) {
    const article = batch[i];
    const person = persons[article.personIdx];
    const supervisor = supervisors[article.supervisorIdx];
    const content = await generateArticle(article, person, supervisor, startIdx + i);
    const filePath = path.join(outputDir, `${article.slug}.md`);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ 保存: ${filePath}`);
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log(`\n🎉 ${batch.length}本生成完了！`);
}

main().catch(console.error);
