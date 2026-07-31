# 福山城公園・単ページガイド

福山城公園の非公式観光ガイドです。サイト本体は日本語のみで、静的な単ページとして構成しています。

## 技術構成

- Astro 7.1.6（作成時点の最新安定版）
- Tailwind CSS 4.3.0 + `@tailwindcss/vite`
- TypeScript（Astro strict config）
- pnpm 11.18.0
- Cloudflare Workers Static Assets + Wrangler 4.113.0
- GA4: `G-HXM22WWPKP`
- データベース、ログイン、CMS、サーバー側画像処理なし

## 主な機能

- 見どころ・歴史・写真ギャラリー
- 周辺グルメ
- 詳細交通・概略案内図
- 周辺スポット・モデルコース
- Canvas 記念カードメーカー
  - カメラ撮影／自撮り／アルバム選択
  - 1:1、はがき縦（100:148）、9:16
  - 鉄黒、桜霞、金箔の3スタイル
  - 場所名・日付・ひとことの編集
  - 拡大・左右・上下位置の調整
  - PNGとして端末へ保存
  - 写真・文字・完成画像をアップロードしない完全ローカル処理

## ローカル起動

Node.js 22.12 以上を用意します。

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
pnpm install
pnpm dev
```

## ビルド

```bash
pnpm build
pnpm preview
```

生成物は `dist/` に出力されます。

## Cloudflare Workers へデプロイ

1. Cloudflare にログインします。
2. 未設定なら `pnpm wrangler login` を実行します。
3. デプロイします。

```bash
pnpm deploy
```

`wrangler.jsonc` の `assets.directory` が `./dist` を指しているため、Astro の静的出力が Cloudflare Workers Static Assets として配信されます。

## ドメイン設定

canonical と OGP の絶対URLには、既定で `https://fukuyamacastlepark.com` が使用されます。別の環境で確認する場合は、ビルド時に `SITE_URL` で上書きできます。

```bash
SITE_URL=https://fukuyamacastlepark.com pnpm build
```

Cloudflare 側では Workers & Pages → 対象 Worker → Custom Domains から独自ドメインを接続します。

## 情報の確認日

観光情報は 2026-07-30 に確認しています。開館時間、休館日、料金、催事、駐車場条件は変更されるため、公開後も公式情報に合わせて更新してください。

主な確認元：

- 福山城博物館公式サイト: https://fukuyamajo.jp/
- ひろしま公式観光サイト Dive! Hiroshima: https://dive-hiroshima.com/explore/2530/
- 福山市公式サイト（福山城）: https://www.city.fukuyama.hiroshima.jp/site/fukuyama-kanko/289919.html

## 写真

写真はすべてプロジェクト内の `public/images/` に保存しており、閲覧時に外部画像サーバーへ接続しません。著作者、出典、ライセンスは `PHOTO-CREDITS.md` を参照してください。
