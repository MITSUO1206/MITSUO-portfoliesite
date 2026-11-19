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

## 公開前にやること

### 1. お問い合わせフォーム
フォームの内容は [Web3Forms](https://web3forms.com/) 経由で Gmail に届きます。`index.html` の `ACCESS_KEY` に Web3Forms のアクセスキーを設定済みです（アクセスキーは公開して使う前提のもので、受信先のメールアドレスはページに含まれません）。

## ローカルで確認する

```bash
npx serve .
```

## 公開（Vercel）

1. Vercel で「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」のまま Deploy
