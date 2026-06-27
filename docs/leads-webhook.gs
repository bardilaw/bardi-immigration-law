/**
 * Bardi Law — website lead webhook (Google Apps Script).
 *
 * Receives a JSON POST from the website's /api/contact route, appends the lead to
 * the "Bardi Law — Website Leads" Google Sheet, and emails the firm at info@bardilaw.com.
 * Using Apps Script means lead-logging + the firm email work WITHOUT a Resend key or a
 * verified sending domain.
 *
 * ── ONE-TIME DEPLOY (≈2 min) ───────────────────────────────────────────────
 * 1. Go to https://script.google.com  →  New project.
 * 2. Paste this whole file in, replacing the default Code.gs. Save.
 * 3. Deploy ▸ New deployment ▸ (gear) Web app:
 *      - Execute as:        Me
 *      - Who has access:    Anyone
 *    Deploy, authorize when prompted, and COPY the "/exec" Web app URL.
 * 4. In Cloudflare Pages (project: bardi-immigration-law) ▸ Settings ▸ Env vars, set:
 *      LEADS_WEBHOOK_URL     = <the /exec URL>
 *      LEADS_WEBHOOK_SECRET  = bardi-leads-9f3a2c7e   (must match SHARED_SECRET below)
 *    Then redeploy the site (or push any commit) so the vars take effect.
 * ───────────────────────────────────────────────────────────────────────────
 */

var SHEET_ID = '1iHypTifCEbWVEaOIFTfdVThIgH8_ElKG8I-CnHbX4_0';
var NOTIFY_EMAIL = 'info@bardilaw.com';
var SHARED_SECRET = 'bardi-leads-9f3a2c7e'; // must equal LEADS_WEBHOOK_SECRET in the site env

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.secret !== SHARED_SECRET) {
      return _json({ ok: false, error: 'unauthorized' });
    }

    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.preferredContact || '',
      data.description || '',
      data.source || '',
      'New',
    ]);

    var name = ((data.firstName || '') + ' ' + (data.lastName || '')).trim();
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email || '',
      subject: 'New website lead: ' + (name || data.email || 'unknown'),
      body:
        'New consultation request from the website:\n\n' +
        'Name: ' + name + '\n' +
        'Email: ' + (data.email || '') + '\n' +
        'Phone: ' + (data.phone || '') + '\n' +
        'Preferred contact: ' + (data.preferredContact || '') + '\n' +
        'Source: ' + (data.source || '') + '\n\n' +
        'Message:\n' + (data.description || '') + '\n',
    });

    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

// Health check so you can open the /exec URL in a browser and see it's live.
function doGet() {
  return _json({ ok: true, service: 'bardi-leads' });
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
