# Mitsuo Kazuhiro Portfolio

Excel VBA・GAS・生成AIで現場の業務を効率化するエンジニアのポートフォリオサイトです。
ビルド不要の静的サイト（`index.html` と `img/`）なので、そのまま Vercel や GitHub Pages で公開できます。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | ページ本体（HTML・CSS・JavaScript を1ファイルにまとめています） |
| `img/hero.jpg` | ファーストビューのイラスト |
| `img/about.jpg` | About の背景イラスト |
| `img/me.jpg` | About に表示するご本人の写真（**未配置**。置くと自動で表示されます） |

## 公開前にやること

### 1. プロフィール写真を置く
`img/me.jpg` に写真を置きます。縦長（4:5）・胸から上・明るめの背景がおすすめです。

### 2. お問い合わせフォームの送信先を設定する
フォームは [Web3Forms](https://web3forms.com/) 経由でメールを送ります。

1. Web3Forms で受信用のメールアドレスを入力し、アクセスキーを受け取る
2. `index.html` の `const FORM_KEY='YOUR_WEB3FORMS_ACCESS_KEY';` をそのキーに書き換える

メールアドレスはページに書かず、アクセスキーだけを置く仕組みです。

### 3. SNS のリンクを入れる
フッターの GitHub・LinkedIn・X のリンクは `href="#"` のままです。使うものだけ URL を入れ、使わないものは削除してください。

## ローカルで確認する

```bash
npx serve .
```

## 公開（Vercel）

1. Vercel で「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」のまま Deploy
