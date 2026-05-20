# Email Signature Installation Instructions
**Bardi Immigration Law | BAR-45 | Version 1.0**

---

## Before You Install

Complete the placeholders in both signature files first:

| Placeholder | Replace With |
|---|---|
| `[PHONE — CONFIRM WITH BOARD]` | Firm phone number (e.g., `(404) 555-0100`) |
| `[IG_HANDLE]` | Instagram username (e.g., `bardiimmigrationlaw`) |
| `[FB_HANDLE]` | Facebook page slug (e.g., `bardiimmigrationlaw`) |

Once `bardilaw.com` is live, optionally add the horizontal logo image — see the comments inside `signature-en.html`.

---

## Files in This Folder

| File | Use |
|---|---|
| `signature-en.html` | English HTML signature — primary version |
| `signature-es.html` | Spanish HTML signature — use for Spanish-language correspondence |
| `signature-plain.txt` | Plain-text fallback — for email clients that strip HTML |
| `INSTRUCTIONS.md` | This file |

---

## Option A: Outlook for Windows (Desktop App)

1. **Open the signature HTML in your browser** (Chrome or Edge recommended).
   - Right-click `signature-en.html` → Open with → Chrome or Edge.
2. **Select all and copy** (Ctrl+A, then Ctrl+C).
3. **Open Outlook** → File → Options → Mail → **Signatures…**
4. Click **New**, name it (e.g., `Bardi EN`).
5. In the signature editing box, **paste** (Ctrl+V).
   - The formatting should transfer. If it doesn't, use the "Paste as HTML" option.
6. Set as default for **New messages** and/or **Replies/forwards**.
7. Click **OK** to save.
8. **For Spanish:** Repeat steps 1–7 using `signature-es.html`. Name it `Bardi ES`.

**Alternative (advanced):**
1. Copy `signature-en.html` to:
   `C:\Users\[YourName]\AppData\Roaming\Microsoft\Signatures\`
2. Rename the file to `Bardi EN.htm`.
3. In Outlook → File → Options → Mail → Signatures → select `Bardi EN` from the dropdown.

---

## Option B: Outlook Web App (OWA / Microsoft 365 Web)

1. Open [outlook.office365.com](https://outlook.office365.com) and sign in.
2. Click the **gear icon** (Settings) in the top-right corner.
3. Search for "**email signature**" in the settings search bar, or navigate to:
   **Mail → Compose and reply → Email signature**.
4. Click **+ New signature**, name it (e.g., `Bardi EN`).
5. In the signature editing area:
   - Look for a **`</>` (source/HTML)** icon in the toolbar. Click it.
   - Open `signature-en.html` in a text editor (Notepad, TextEdit).
   - Copy the **content inside `<body>` tags only** (the `<table>` block).
   - Paste it into the HTML source editor.
   - Click `</>` again to return to the visual view.
6. Alternatively, open `signature-en.html` in Chrome, select all (Ctrl+A), copy (Ctrl+C), and paste directly into the OWA editor — formatting usually transfers.
7. Click **Save**.
8. Under "Select default signatures," set `Bardi EN` for **New messages** and **Replies/forwards**.

**Note:** OWA may strip some inline styles. Preview the signature in a test email before setting live.

---

## Option C: Outlook for Mac

1. Open Outlook for Mac.
2. Menu bar: **Outlook → Preferences → Signatures**.
3. Click **+** to add a new signature.
4. Open `signature-en.html` in Safari or Chrome. Select all (Cmd+A), copy (Cmd+C).
5. In the Outlook signature editor, paste (Cmd+V).
6. Name the signature and close the Preferences window.
7. In the **Signatures** preferences, assign to the `info@bardilaw.com` account.

---

## Sending the Right Version

| Situation | Signature to Use |
|---|---|
| English-language emails (default) | `Bardi EN` |
| Emails in Spanish or to Spanish-speaking clients | `Bardi ES` |
| Plain-text emails or if HTML is stripped | Copy from `signature-plain.txt` |

To switch signatures in a new email: **Insert → Signature → [choose name]**

---

## After bardilaw.com Launches (Logo Upgrade)

Once the site is live:
1. Host the horizontal logo at a stable URL, e.g.: `https://bardilaw.com/images/logo-horizontal.png`
2. Open `signature-en.html` (and `signature-es.html`) in a text editor.
3. Find the commented-out `<!-- LOGO OPTION -->` block near the top.
4. Uncomment it and replace the `src` URL with your hosted logo URL.
5. Reinstall the updated signature using the steps above.

Use the **horizontal full-color** logo variant from the Creative Assets Drive folder.
Recommended dimensions: 400px wide source image, displayed at 200px in the signature.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Formatting looks wrong after pasting | Use the "Paste Special → Paste as HTML" option, or try a different browser |
| Links not clickable | Check that `http://` or `https://` prefix is present on all URLs |
| Gold color not showing in Outlook | Outlook 2016 and older may not render `#C9A84C` on some elements; this is a known Outlook rendering limitation |
| Images blocked in recipient's client | This is normal for externally-linked images; the text version displays as fallback |
| Confidentiality notice too long | It can be shortened — the current text is a standard legal recommendation |

---

*Prepared by CMO | Bardi Immigration Law | 2026-05-19 | Roadmap item 3.8*
