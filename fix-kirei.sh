#!/usr/bin/env bash
# kirei-tsurumi 一括修正（リポジトリのルートで bash fix-kirei.sh）
# 匿名化 → 53MB除去 → ビルド → コミット → プッシュ まで全部やる
set -e
if [ ! -d content/blog ]; then
  echo "✗ content/blog がありません。~/Documents/kirei-tsurumi の中で実行してください。"
  exit 1
fi

echo "==> 1) 記事を匿名化"
node --input-type=module << 'JS'
import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const DIR='content/blog';
const S=['中島','田村','山本'];
const C=['中村のりこ','佐藤みどり','加藤ゆみこ','吉田まり','小林ひとみ','木村あかね','松本けいこ','林ともこ','渡辺ゆき','田中さゆり'];
const rs=S.join('|'), rc=C.join('|');
function anon(t){
 t=t.replace(/^supervisor:\s*.*$/m,'supervisor: "キレイ鶴見店"');
 t=t.replace(/^person:\s*.*$/m,function(l){if(l.indexOf('お客様')>=0)return l;var m=l.match(/(\d{2})歳/);var n=m?Math.floor(+m[1]/10)*10:50;return 'person: "'+n+'代女性のお客様（鶴見区在住）"';});
 t=t.replace(new RegExp('(?:シニア|チーフ)?カラ[ー]?リスト・(?:'+rs+')','g'),'当店のカラーリスト');
 t=t.replace(new RegExp('(?:'+rs+')カラ[ー]?リスト','g'),'当店のカラーリスト');
 t=t.replace(new RegExp('(?:'+rs+')さん','g'),'担当のカラーリスト');
 t=t.replace(new RegExp('(?:'+rs+')','g'),'当店のカラーリスト');
 t=t.replace(new RegExp('(?:'+rc+')さん','g'),'お客様');
 t=t.replace(new RegExp('(?:'+rc+')','g'),'お客様');
 t=t.replace(/(当店の|担当の)?カラーリスト(の)?カラーリスト/g,'$1カラーリスト');
 t=t.replace(/当店の当店の/g,'当店の').replace(/担当の担当の/g,'担当の');
 t=t.replace(/(当店の|担当の)カラーリストさん/g,'$1カラーリスト');
 t=t.replace(/お客様さん/g,'お客様').replace(/お客様お客様/g,'お客様');
 return t;
}
var n=0;
for(const f of readdirSync(DIR).filter(function(f){return /\.mdx?$/.test(f)})){
 const p=join(DIR,f),b=readFileSync(p,'utf8'),a=anon(b);
 if(a!==b){writeFileSync(p,a,'utf8');n++;}
}
console.log('  anonymized files:',n);
JS

echo "==> 2) AWSCLIV2.pkg を除去"
git rm --cached AWSCLIV2.pkg 2>/dev/null && echo "  untracked AWSCLIV2.pkg" || echo "  (追跡なし)"
grep -qxF 'AWSCLIV2.pkg' .gitignore 2>/dev/null || echo 'AWSCLIV2.pkg' >> .gitignore
grep -qxF '*.pkg' .gitignore 2>/dev/null || echo '*.pkg' >> .gitignore

echo "==> 3) ビルド確認"
npm run build

echo "==> 4) コミット & プッシュ"
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "anonymize articles and drop AWSCLIV2.pkg"
  git push
  echo "  ✓ pushed"
else
  echo "  変更なし"
fi
echo "==> 完了 🎉"
