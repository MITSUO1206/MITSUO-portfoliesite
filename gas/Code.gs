/**
 * ポートフォリオサイトのお問い合わせ受付
 * フォームから送られた内容をスプレッドシートに1行追加し、通知メールを送ります。
 *
 * 使い方
 *   1. お問い合わせ一覧のスプレッドシートを開く → 拡張機能 → Apps Script
 *   2. このファイルの内容を貼り付けて保存
 *   3. デプロイ → 新しいデプロイ → 種類「ウェブアプリ」
 *        次のユーザーとして実行: 自分
 *        アクセスできるユーザー: 全員
 *   4. 表示された「ウェブアプリのURL」を index.html の GAS_URL に設定
 */
const SHEET_NAME = ''; // 空なら先頭のシートに書き込みます
const NOTIFY_TO = Session.getEffectiveUser().getEmail(); // 通知先（スクリプトの所有者）

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return json_({ ok: true }); // ボット対策（隠し項目に入力があれば無視）

  const name = clip_(p.name, 100);
  const email = clip_(p.email, 200);
  const message = clip_(p.message, 5000);
  if (!name || !email || !message) return json_({ ok: false, error: 'missing' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
    sh.appendRow([new Date(), safe_(name), safe_(clip_(p.company, 200)), safe_(email),
                  safe_(clip_(p.topic, 100)), safe_(message), '未対応']);
  } finally {
    lock.releaseLock();
  }

  MailApp.sendEmail({
    to: NOTIFY_TO,
    replyTo: email,
    subject: '【ポートフォリオ】' + (p.topic || 'お問い合わせ') + '（' + name + ' 様）',
    body: [
      'ポートフォリオサイトからお問い合わせがありました。', '',
      'お名前：' + name,
      '会社名：' + (p.company || '-'),
      'メール：' + email,
      '種類　：' + (p.topic || '-'), '',
      message, '',
      '一覧：' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
    ].join('\n')
  });
  return json_({ ok: true });
}

function clip_(v, n) { return String(v || '').trim().slice(0, n); }
// 先頭が = + - @ の値を数式として解釈させない
function safe_(v) { return /^[=+\-@]/.test(v) ? "'" + v : v; }
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
