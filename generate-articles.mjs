import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ✅ 改修1: 架空人名を削除（name フィールド廃止）
const personPatterns = [
  { age: 43, job: "会社員", city: "鶴見区在住", worry: "白髪が目立ち始めた" },
  { age: 51, job: "主婦", city: "横浜市在住", worry: "カラー剤で頭皮がかぶれた経験がある" },
  { age: 38, job: "ママ・パート勤務", city: "川崎市在住", worry: "産後から白髪が急増した" },
  { age: 47, job: "パート", city: "鶴見区在住", worry: "美容室代を節約したいが仕上がりも妥協したくない" },
  { age: 55, job: "会社員", city: "横浜市鶴見区在住", worry: "グレイヘアにすべきか悩んでいる" },
  { age: 44, job: "フリーランス", city: "横浜市在住", worry: "オーガニックカラーに興味がある" },
  { age: 49, job: "看護師", city: "川崎市在住", worry: "忙しくて美容室に行く時間がない" },
  { age: 42, job: "教師", city: "横浜市在住", worry: "白髪染めで髪が傷むのが気になる" },
  { age: 58, job: "自営業", city: "鶴見区在住", worry: "年齢に合ったヘアカラーが分からない" },
  { age: 35, job: "会社員", city: "横浜市在住", worry: "早めの白髪対策をしたい" },
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
];

// ✅ 改修2: 日本語記事生成
async function generateJapaneseArticle(article, personPattern, supervisor, index) {
  console.log(`[JP生成中] ${index + 1}: ${article.title}`);

  const prompt = `あなたは美容専門誌VOCEのライターです。以下の条件で記事を書いてください。

【記事情報】
タイトル：${article.title}
カテゴリ：${article.category}

【登場人物パターン】
年代：${personPattern.age}代
職業：${personPattern.job}
地域：${personPattern.city}
悩み：${personPattern.worry}

【監修者】
${supervisor.name}
${supervisor.career}

【文体の条件】
- VOCE・美容雑誌風の読みやすく共感を呼ぶ文体
- 冒頭は「あるお客様」「実際のご相談」等で、具体的・リアルなシーンから始める
- 架空の人物名は絶対に使わない（「サロンのお客様」「実例」等で表現）
- 「正直、〜」「意外と〜」「実は〜」などの口語表現を自然に使う
- 「鶴見」「横浜」などの地域名を自然に入れる
- AI感・箇条書き過多を避け、読み物として面白い構成にする
- 断定表現と体験談を多用する
- H2見出し6個、H3見出し適宜使用
- 文字数：4500文字以上

【構成】
1. 冒頭：「あるお客様」の悩みシーンで始まる導入（300文字）
2. H2×6の本文（各600〜700文字）
3. まとめ：キレイ鶴見店への自然な誘導で締める（200文字）

【画像】記事内に以下のMarkdown形式で画像を3枚挿入：
![説明](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop)
![説明](https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop)
![説明](https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&auto=format&fit=crop)

出力はMarkdown本文のみ。frontmatterは不要。`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  return response.content[0].text;
}

// ✅ 改修3: 英語タイトル生成
async function generateEnglishTitle(jpTitle) {
  const prompt = `Translate this Japanese blog title into English.
The translation should be clear, SEO-friendly, and professional.
Output ONLY the English title, nothing else.

Japanese title: ${jpTitle}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 100,
    messages: [{ role: "user", content: prompt }],
  });

  return response.content[0].text.trim();
}

// ✅ 改修4: 英語description生成
async function generateEnglishDescription(jpDescription, jpCategory) {
  const prompt = `Translate this Japanese blog description into English.
Keep it natural and professional for a global beauty audience.
Output ONLY the English description (one sentence), nothing else.

Japanese: ${jpDescription}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 150,
    messages: [{ role: "user", content: prompt }],
  });

  return response.content[0].text.trim();
}

// ✅ 改修5: 英語本文生成（翻訳）
async function generateEnglishBody(japaneseBody) {
  const prompt = `You are a professional translator specializing in beauty and hair care content for a global audience.
Translate the following Japanese blog article body into English.

【Translation Rules】
- Use clear, accessible English (B2-C1 level suitable for international readers)
- Hair care terminology must be accurate and natural (e.g., "gray hair coloring", "covering gray hair", "roots touch-up")
- Preserve location names EXACTLY: 鶴見 → Tsurumi, 横浜 → Yokohama, キレイ鶴見店 → Kirei Tsurumi salon
- Replace any personal names or customer references with "our client," "a customer," "one of our clients" etc.
- Preserve supervisor names and titles (e.g., "Senior Colorist Yamamoto at Kirei Tsurumi")
- Price references: use "varies by location and service" or similar abstractions (no JPY amounts)
- Maintain the casual, relatable magazine style (similar to VOGUE)
- Keep the same H2 heading structure and image markdown as-is
- Do NOT add or remove any markdown elements

【Japanese Article Body】
${japaneseBody}

Output ONLY the English translation in Markdown format. No preamble, explanation, or meta-commentary.`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 4500,
    messages: [{ role: "user", content: prompt }],
  });

  return response.content[0].text;
}

// ✅ 改修6: カテゴリ翻訳（固定マッピング）
const categoryMap = {
  "白髪染め": "Gray Hair Coloring",
  "グレイヘア": "Gray Hair",
  "頭皮ケア": "Scalp Care",
  "ヘアケア": "Hair Care",
  "髪質改善": "Hair Quality Improvement",
  "トレンド": "Trends",
  "オーガニック": "Organic Beauty",
  "美容・健康": "Beauty & Wellness",
  "40代・50代": "Women 40s & 50s",
  "エイジングケア": "Aging Care",
  "メンズ": "Men's Hair",
  "サロン体験": "Salon Experience",
  "特別なシーン": "Special Occasions",
  "鶴見・横浜": "Tsurumi & Yokohama",
  "お客様の声": "Customer Voices",
};

function translateCategory(jpCategory) {
  return categoryMap[jpCategory] || jpCategory;
}

// ✅ 改修7: main() 関数
// ✅ 未生成slug検出関数
function findNextUngeneratedArticle() {
  const jpOutputDir = "content/blog";
  const enOutputDir = "content/en/blog";

  for (const article of articles) {
    const jpFilePath = path.join(jpOutputDir, `${article.slug}.md`);
    const enFilePath = path.join(enOutputDir, `${article.slug}.md`);

    if (!fs.existsSync(jpFilePath) || !fs.existsSync(enFilePath)) {
      console.log(`✅ 未生成記事を発見: ${article.slug}`);
      return article;
    }
  }

  console.log("✅ 全ての記事が生成済みです。");
  return null;
}

async function main() {
  const jpOutputDir = "content/blog";
  const enOutputDir = "content/en/blog";

  if (!fs.existsSync(jpOutputDir)) fs.mkdirSync(jpOutputDir, { recursive: true });
  if (!fs.existsSync(enOutputDir)) fs.mkdirSync(enOutputDir, { recursive: true });

  // ✅ --next モード判定
  const isNextMode = process.argv[2] === "--next";
  let batch;

  if (isNextMode) {
    console.log("【--next モード】未生成記事を自動検出中...");
    const nextArticle = findNextUngeneratedArticle();
    if (!nextArticle) {
      console.log("🎉 生成対象なし（全記事完成）");
      process.exit(0);
    }
    batch = [nextArticle];
  } else {
    const startIdx = parseInt(process.argv[2] || "0");
    const endIdx = parseInt(process.argv[3] || "1");
    batch = articles.slice(startIdx, endIdx);
  }

  for (let i = 0; i < batch.length; i++) {
    const article = batch[i];
    const personPattern = personPatterns[article.personIdx];
    const supervisor = supervisors[article.supervisorIdx];
    const today = new Date().toISOString().split("T")[0];
    const articleIndex = articles.indexOf(article);

    console.log(`\n━━━ 【${articleIndex + 1}/${articles.length}】 ${article.title} ━━━`);

    // ========== 日本語記事生成 ==========
    console.log("[1/4] 日本語本文生成中...");
    const jpBody = await generateJapaneseArticle(article, personPattern, supervisor, articleIndex);

    const jpDescription = `サロンのお客様の事例をもとに、${personPattern.age}代・${personPattern.job}の方の悩みに寄り添い、${article.category}について専門家が詳しく解説します。`;
    const jpFrontmatter = `---
title: "${article.title}"
date: "${today}"
description: "${jpDescription}"
category: "${article.category}"
supervisor: "${supervisor.name}"
source: "salon-case"
---

`;
    const jpContent = jpFrontmatter + jpBody;
    const jpFilePath = path.join(jpOutputDir, `${article.slug}.md`);
    fs.writeFileSync(jpFilePath, jpContent, "utf8");
    console.log(`✅ JP保存: ${jpFilePath}`);

    // ========== 英語記事生成 ==========
    console.log("[2/4] 英語タイトル翻訳中...");
    const enTitle = await generateEnglishTitle(article.title);

    console.log("[3/4] 英語本文翻訳中...");
    const enBody = await generateEnglishBody(jpBody);

    console.log("[4/4] 英語メタデータ生成中...");
    const enDescription = await generateEnglishDescription(jpDescription, article.category);
    const enCategory = translateCategory(article.category);

    const enFrontmatter = `---
title: "${enTitle}"
date: "${today}"
description: "${enDescription}"
category: "${enCategory}"
supervisor: "${supervisor.name}"
source: "salon-case"
---

`;
    const enContent = enFrontmatter + enBody;
    const enFilePath = path.join(enOutputDir, `${article.slug}.md`);
    fs.writeFileSync(enFilePath, enContent, "utf8");
    console.log(`✅ EN保存: ${enFilePath}`);

    if (i < batch.length - 1) {
      console.log("⏳ レート制限対策: 2秒待機中...");
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\n🎉 ${batch.length * 2}本（JP+EN）生成完了！`);
}

main().catch(console.error);
