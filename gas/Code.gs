/**
 * ポートフォリオサイトのお問い合わせ受付
 * フォームから送られた内容を、このスプレッドシートに1行追加するだけのスクリプトです。
 *
 * 使い方（最初に1回だけ）
 *   1. お問い合わせ一覧のスプレッドシートを開く → 拡張機能 → Apps Script
 *   2. このファイルの内容を貼り付けて保存
 *   3. デプロイ → 新しいデプロイ → 種類「ウェブアプリ」
 *        次のユーザーとして実行: 自分 ／ アクセスできるユーザー: 全員
 *   4. 表示された「ウェブアプリのURL」を index.html の GAS_URL に設定
 */
function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return done_();                 // ボット対策（隠し項目に入力があれば無視）
  if (!p.name || !p.email || !p.message) return done_();

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].appendRow([
      new Date(),
      safe_(p.name, 100),
      safe_(p.company, 200),
      safe_(p.email, 200),
      safe_(p.topic, 100),
      safe_(p.message, 5000),
      '未対応'
    ]);
  } finally {
    lock.releaseLock();
  }
  return done_();
}

// 長さを制限し、先頭が = + - @ の値を数式として解釈させない
function safe_(v, max) {
  const s = String(v || '').trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
function done_() {
  return ContentService.createTextOutput('ok');
}
