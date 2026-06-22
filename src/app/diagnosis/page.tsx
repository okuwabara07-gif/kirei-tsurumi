"use client";

import { useState } from "react";

// 白髪ケア診断シミュレーター v2（キレイ鶴見店）
// バックエンド API を使用（/api/diagnose）

const PALETTE = {
  paper: "#fbfaf6",
  stone: "#f1eee7",
  stoneD: "#e8e3d9",
  sage: "#8a9a85",
  clay: "#b3a08e",
  ink: "#3a392f",
  muted: "#928d80",
  line: "#e4dfd4",
};

const QUESTIONS = [
  { key: "amount", label: "白髪の量は？", options: ["少なめ", "ちらほら", "多め", "全体的"] },
  { key: "brightness", label: "今の髪の明るさは？", options: ["暗め", "自然", "明るめ"] },
  { key: "impression", label: "なりたい印象は？", options: ["落ち着き", "自然なツヤ", "明るく軽やか", "透明感"] },
  { key: "hairType", label: "髪質は？", options: ["細い・柔らかい", "普通", "硬い・多い"] },
  { key: "concern", label: "いちばんの悩みは？", options: ["伸びた根元", "パサつき・乾燥", "色落ちが早い", "ボリューム"] },
];

const CTA = {
  oil: "https://kirei-tsurumi.com/oil.html",
  site: "https://kirei-tsurumi.com",
};

export default function DiagnosisPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState("quiz"); // quiz | loading | result | error
  const [result, setResult] = useState<any>(null);
  const [errMsg, setErrMsg] = useState("");

  const pick = (key: string, value: string) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      runDiagnosis(next);
    }
  };

  const back = () => {
    if (phase !== "quiz") {
      setPhase("quiz");
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
    setErrMsg("");
    setPhase("quiz");
  };

  async function runDiagnosis(a: Record<string, string>) {
    setPhase("loading");
    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "診断の生成に失敗しました");
      }

      const data = await res.json();
      setResult(data);
      setPhase("result");
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : "診断の生成に失敗しました。もう一度お試しください。");
      setPhase("error");
    }
  }

  async function shareResult() {
    if (!result) return;
    const W = 1080, H = 1350;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = PALETTE.paper;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = PALETTE.sage;
    ctx.fillRect(0, 0, W, 300);

    ctx.textAlign = "center";
    ctx.fillStyle = PALETTE.paper;
    ctx.font = "500 36px serif";
    ctx.fillText("K I R E I   T S U R U M I", W / 2, 130);
    ctx.font = "500 60px serif";
    ctx.fillText("白髪ケア診断", W / 2, 215);

    ctx.fillStyle = PALETTE.ink;
    ctx.font = "500 50px serif";
    let y = wrapTextJa(ctx, result.summary, W / 2, 430, 880, 70);

    y += 70;
    const blocks = [
      ["色味・明るさ", result.colorDirection],
      ["自宅ケア", result.homecare],
    ];
    for (const [label, val] of blocks) {
      ctx.fillStyle = PALETTE.sage;
      ctx.font = "30px sans-serif";
      ctx.fillText(label, W / 2, y);
      y += 50;
      ctx.fillStyle = PALETTE.ink;
      ctx.font = "34px serif";
      y = wrapTextJa(ctx, val, W / 2, y, 900, 52);
      y += 64;
    }

    ctx.fillStyle = PALETTE.muted;
    ctx.font = "28px sans-serif";
    ctx.fillText("あなたに合う方向性は kirei-tsurumi.com", W / 2, H - 90);
    ctx.fillText("※イメージ・個人差があります", W / 2, H - 50);

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "kirei-shiraga-karte.png", { type: "image/png" });
      const shareText = "白髪ケア診断やってみた。専門店の視点で方向性がわかる。 #白髪 #白髪染め #ヘアケア kirei-tsurumi.com";
      try {
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], text: shareText });
          return;
        }
      } catch (e) {
        /* fall through to download */
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "kirei-shiraga-karte.png";
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }

  const wrap = {
    fontFamily: '"Hiragino Mincho ProN","Yu Mincho",serif',
    background: PALETTE.paper,
    color: PALETTE.ink,
    minHeight: "100%",
    padding: "0 0 40px",
  };
  const inner = { maxWidth: 460, margin: "0 auto", padding: "0 22px" };

  return (
    <div style={wrap as any}>
      {/* ヘッダー */}
      <div style={{ ...inner, paddingTop: 26, paddingBottom: 8, textAlign: "center" } as any}>
        <div style={{ fontSize: 11, letterSpacing: ".28em", color: PALETTE.sage, marginBottom: 8 }}>
          KIREI TSURUMI
        </div>
        <div style={{ fontSize: 19, letterSpacing: ".06em" }}>白髪ケア診断</div>
        <div style={{ fontSize: 12, color: PALETTE.muted, marginTop: 6, fontFamily: "sans-serif" }}>
          5つの質問で、あなたに合う方向性を。
        </div>
      </div>

      {/* 進捗バー */}
      {phase === "quiz" && (
        <div style={{ ...inner, marginTop: 14 } as any}>
          <div style={{ height: 3, background: PALETTE.stoneD, borderRadius: 2, overflow: "hidden" }}>
            <div
              style={{
                width: `${((step + 1) / QUESTIONS.length) * 100}%`,
                height: "100%",
                background: PALETTE.sage,
                transition: "width .3s ease",
              }}
            />
          </div>
          <div style={{ fontSize: 11, color: PALETTE.muted, marginTop: 8, fontFamily: "sans-serif" }}>
            {step + 1} / {QUESTIONS.length}
          </div>
        </div>
      )}

      {/* 質問 */}
      {phase === "quiz" && (
        <div style={{ ...inner, marginTop: 22 } as any}>
          <h2 style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.6, marginBottom: 22 }}>
            {QUESTIONS[step].label}
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {QUESTIONS[step].options.map((opt) => {
              const selected = answers[QUESTIONS[step].key as keyof typeof answers] === opt;
              return (
                <button
                  key={opt}
                  onClick={() => pick(QUESTIONS[step].key, opt)}
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    border: `1px solid ${selected ? PALETTE.sage : PALETTE.line}`,
                    background: selected ? "#eef0ec" : "#fff",
                    borderRadius: 6,
                    fontSize: 15,
                    color: PALETTE.ink,
                    cursor: "pointer",
                    fontFamily: '"Hiragino Mincho ProN","Yu Mincho",serif',
                    transition: "border-color .15s ease, background .15s ease",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {step > 0 && (
            <button
              onClick={back}
              style={{
                marginTop: 22,
                background: "none",
                border: "none",
                color: PALETTE.muted,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              ← もどる
            </button>
          )}
        </div>
      )}

      {/* ローディング */}
      {phase === "loading" && (
        <div style={{ ...inner, marginTop: 60, textAlign: "center" } as any}>
          <div style={{ fontSize: 15, color: PALETTE.sage, marginBottom: 10 }}>
            あなたに合う方向性をまとめています…
          </div>
          <div style={{ fontSize: 12, color: PALETTE.muted, fontFamily: "sans-serif" }}>
            専門店の視点で診断中
          </div>
        </div>
      )}

      {/* エラー */}
      {phase === "error" && (
        <div style={{ ...inner, marginTop: 50, textAlign: "center" } as any}>
          <p style={{ fontSize: 14, color: PALETTE.ink, marginBottom: 18 }}>{errMsg}</p>
          <button onClick={() => runDiagnosis(answers)} style={primaryBtn()}>
            もう一度診断する
          </button>
        </div>
      )}

      {/* 結果カード */}
      {phase === "result" && result && (
        <div style={{ ...inner, marginTop: 22 } as any}>
          <div
            style={{
              background: "#fff",
              border: `1px solid ${PALETTE.line}`,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div style={{ background: PALETTE.sage, color: PALETTE.paper, padding: "16px 22px" }}>
              <div style={{ fontSize: 10.5, letterSpacing: ".24em", opacity: 0.85, fontFamily: "sans-serif" }}>
                YOUR HAIR KARTE
              </div>
              <div style={{ fontSize: 17, marginTop: 6, lineHeight: 1.5 }}>{result.summary}</div>
            </div>
            <div style={{ padding: "8px 22px 20px" }}>
              <Row label="色味・明るさ" value={result.colorDirection} />
              <Row label="染め方" value={result.howTo} />
              <Row label="染める間隔の目安" value={result.frequency} />
              <Row label="自宅ケア" value={result.homecare} last={true} />
            </div>
          </div>

          <p style={{ fontSize: 11, color: PALETTE.muted, marginTop: 12, lineHeight: 1.8, fontFamily: "sans-serif" }}>
            ※この結果はイメージ・目安です。仕上がりや感じ方には個人差があります。
          </p>

          {/* 送客CTA */}
          <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
            <button onClick={shareResult} style={shareBtn()}>
              結果を画像で保存・シェアする
            </button>
            <a href={CTA.oil} target="_blank" rel="noopener noreferrer" style={primaryBtn()}>
              自宅ケアにおすすめのオイルを見る
            </a>
            <a href={CTA.site} target="_blank" rel="noopener noreferrer" style={ghostBtn()}>
              キレイ鶴見店について
            </a>
          </div>

          <button
            onClick={reset}
            style={{
              marginTop: 18,
              background: "none",
              border: "none",
              color: PALETTE.muted,
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "sans-serif",
              width: "100%",
            }}
          >
            もう一度診断する
          </button>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div style={{ padding: "14px 0", borderBottom: last ? "none" : "1px solid #efeae0" }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: ".1em",
          color: "#8a9a85",
          marginBottom: 5,
          fontFamily: "sans-serif",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 14.5, lineHeight: 1.8, color: "#3a392f" }}>{value}</div>
    </div>
  );
}

// 日本語(スペース無し)用の文字単位ワードラップ。描画した最終のy座標を返す。
function wrapTextJa(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number {
  let line = "";
  let yy = y;
  for (const ch of String(text || "")) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy);
      line = ch;
      yy += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, yy);
  return yy;
}

function primaryBtn() {
  return {
    display: "block" as const,
    textAlign: "center" as const,
    background: "#3a392f",
    color: "#fbfaf6",
    padding: "15px 20px",
    borderRadius: 4,
    fontSize: 14,
    letterSpacing: ".06em",
    textDecoration: "none" as const,
    border: "none",
    cursor: "pointer" as const,
    fontFamily: '"Hiragino Mincho ProN","Yu Mincho",serif',
  };
}

function ghostBtn() {
  return {
    display: "block" as const,
    textAlign: "center" as const,
    background: "transparent",
    color: "#3a392f",
    padding: "14px 20px",
    borderRadius: 4,
    fontSize: 13.5,
    letterSpacing: ".06em",
    textDecoration: "none" as const,
    border: "1px solid #b3a08e",
    fontFamily: '"Hiragino Mincho ProN","Yu Mincho",serif',
  };
}

function shareBtn() {
  return {
    display: "block" as const,
    width: "100%" as const,
    textAlign: "center" as const,
    background: "#8a9a85",
    color: "#fbfaf6",
    padding: "15px 20px",
    borderRadius: 4,
    fontSize: 14,
    letterSpacing: ".06em",
    border: "none",
    cursor: "pointer" as const,
    fontFamily: '"Hiragino Mincho ProN","Yu Mincho",serif',
  };
}
