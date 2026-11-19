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

### 1. お問い合わせフォームの送信先を設定する
フォームの内容は [FormSubmit](https://formsubmit.co/) 経由で Gmail に届きます。

1. FormSubmit から届く「Activate Form」メールのリンクを押して有効化する
2. 有効化後に表示されるランダムな文字列（メールアドレスの代わりに使える ID）を、`index.html` の `const FORM_ID='YOUR_FORMSUBMIT_ID';` に設定する

ページには ID だけを書くので、メールアドレスは公開されません。

## ローカルで確認する

```bash
npx serve .
```

## 公開（Vercel）

1. Vercel で「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」のまま Deploy
