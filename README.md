# Mitsuo Kazuhiro Portfolio

Excel VBA・GAS・生成AIで現場の業務を効率化するエンジニアのポートフォリオサイトです。
ビルド不要の静的サイト（`index.html` と `img/`）なので、そのまま Vercel や GitHub Pages で公開できます。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | ページ本体（HTML・CSS・JavaScript を1ファイルにまとめています） |
| `img/hero.jpg` | ファーストビューのイラスト |
| `img/about.jpg` | About の背景イラスト |
| `img/me.jpg` | About に表示するプロフィール写真 |
| `gas/Code.gs` | お問い合わせをスプレッドシートに記録する Apps Script |

## 公開前にやること

### 1. お問い合わせフォームの送信先を設定する
フォームの内容は Google スプレッドシート「ポートフォリオ お問い合わせ一覧」に1行ずつ追加されます。受け口は Google Apps Script（`gas/Code.gs`）です。

1. スプレッドシートを開き、拡張機能 → Apps Script に `gas/Code.gs` の内容を貼り付けて保存
2. デプロイ → 新しいデプロイ → 種類「ウェブアプリ」、実行ユーザー「自分」、アクセス「全員」でデプロイ
3. 表示された URL を `index.html` の `const GAS_URL='YOUR_GAS_WEB_APP_URL';` に設定

### 2. SNS のリンクを入れる
フッターの GitHub・LinkedIn・X のリンクは `href="#"` のままです。使うものだけ URL を入れ、使わないものは削除してください。

## ローカルで確認する

```bash
npx serve .
```

## 公開（Vercel）

1. Vercel で「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」のまま Deploy
