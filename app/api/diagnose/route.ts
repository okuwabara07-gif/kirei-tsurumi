import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BANNED = ["絶対", "No.1", "日本一", "治る", "最高", "保証", "効果", "確実"];

export async function POST(req: NextRequest) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return NextResponse.json({ error: "no key" }, { status: 500 });

  const a = await req.json();

  const prompt = `あなたは白髪染め専門サロン「キレイ鶴見店」のスタイリストです。診断入力に基づき白髪ケアの方向性をやさしく提案。断定・効能保証はしない。
入力: 白髪量=${a.amount} 明るさ=${a.brightness} なりたい印象=${a.impression} 髪質=${a.hairType} 悩み=${a.concern}
禁止語: ${BANNED.join("、")}。「目立ちにくく」「なじませる」「〜がおすすめです」「個人差があります」で。です・ます。
JSONのみ出力: {"summary":"...","colorDirection":"...","howTo":"...","frequency":"...","homecare":"..."}`;

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  // 上流エラーをそのまま surfaceする
  if (!r.ok) {
    const errData = await r.json();
    console.error("[diagnose] Anthropic API error:", errData);
    return NextResponse.json(
      { error: errData.error?.message || "Anthropic API error" },
      { status: r.status }
    );
  }

  const data = await r.json();

  // null guard: content がない場合
  if (!data.content || !Array.isArray(data.content)) {
    console.error("[diagnose] No content in response:", data);
    return NextResponse.json({ error: "no content from API" }, { status: 502 });
  }

  const text = data.content.map((c: any) => c.text || "").join("");

  if (!text) {
    return NextResponse.json({ error: "empty response text" }, { status: 502 });
  }

  // JSON 抽出
  let result: any = null;
  try {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      result = JSON.parse(match[0]);
    }
  } catch (e) {
    console.error("[diagnose] JSON parse error:", e, "text:", text);
    return NextResponse.json({ error: "parse fail" }, { status: 400 });
  }

  // null guard: result がない場合
  if (!result) {
    return NextResponse.json({ error: "no result" }, { status: 502 });
  }

  // 禁止語チェック
  for (const field of ["summary", "colorDirection", "howTo", "frequency", "homecare"]) {
    if (result[field]) {
      for (const word of BANNED) {
        if (result[field].includes(word)) {
          return NextResponse.json(
            { error: `禁止語検出: ${word}` },
            { status: 400 }
          );
        }
      }
    }
  }

  return NextResponse.json(result);
}
