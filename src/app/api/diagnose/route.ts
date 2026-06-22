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

  const data = await r.json();
  const text = (data.content || []).map((c: any) => c.text).join("");

  // JSON 抽出
  let result: any = null;
  try {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      result = JSON.parse(match[0]);
    }
  } catch {
    return NextResponse.json({ error: "parse fail" }, { status: 400 });
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
