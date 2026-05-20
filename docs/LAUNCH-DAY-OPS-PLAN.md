# Bardi Immigration Law — June 10 Launch Day Operations Plan

> **Issue:** BAR-122 | **Owner:** CEO | **Launch date:** June 10, 2026
> **Purpose:** Step-by-step checklist for launch day. Every step has an owner, an estimated time, and no technical jargon.

---

## Pre-Launch Prerequisites (Must Be Done Before June 10)

These items are **blockers**. If any are missing on the morning of June 10, the launch cannot proceed.

| # | Item | Owner | Status |
|---|------|-------|--------|
| P1 | CLOUDFLARE_API_TOKEN set in Cloudflare Pages env | Board | Pending |
| P2 | RESEND_API_KEY + CONTACT_EMAIL set in Cloudflare Pages env | Board | Pending |
| P3 | NEXT_PUBLIC_GA4_ID (GA4 Measurement ID) set in Cloudflare Pages env | Board | Pending |
| P4 | Attorney phone number supplied (replaces `[Phone — TBD]` placeholders) | Attorney | Pending |
| P5 | Attorney headshot photo supplied (800x800px minimum) | Attorney | Pending |
| P6 | Spanish gender confirmation: Abogada (she/her) or Abogado (he/him) | Attorney | Pending |
| P7 | TikTok launch video recorded using script from [BAR-82](/BAR/issues/BAR-82) content package | Attorney | Pending |
| P8 | Social platform logins documented | Attorney | Pending |

**If any P1-P5 items are missing on June 10 morning, do not deploy. Escalate to Board immediately.**

See [BAR-81](/BAR/issues/BAR-81) for the full board inputs checklist.

---

## Phase 1 — Deploy (Morning, 8:00 – 9:00 AM ET)

Target: Site live at bardilaw.com with contact form delivering leads and GA4 firing.

| Step | Action | Owner | Est. Time | Notes |
|------|--------|-------|-----------|-------|
| 1.1 | Execute [BAR-112](/BAR/issues/BAR-112) deployment runbook | Engineer | 15 min | `wrangler deploy` + DNS + env vars. All technical steps are in the runbook. |
| 1.2 | Verify site loads at bardilaw.com (English home page) | Attorney | 2 min | Open bardilaw.com in your phone browser. Page should load with your name, photo, and phone number. |
| 1.3 | Verify Spanish toggle works | Attorney | 1 min | Click the language toggle in the header. All text should switch to Spanish. |
| 1.4 | Test contact form — submit a test inquiry | Attorney | 3 min | Go to bardilaw.com/contact, fill out the form with your own info, submit. Confirm the email arrives at your inbox within 2 minutes. |
| 1.5 | Verify phone number displays correctly in footer and contact page | Attorney | 1 min | Scroll to the bottom of any page. Phone number should match what you provided. |
| 1.6 | Confirm GA4 is firing | Engineer | 5 min | Open GA4 > DebugView. Navigate 2-3 pages on bardilaw.com. Confirm page_view events appear in real-time. |
| 1.7 | Verify HTTPS is enforced | Engineer | 1 min | Visit http://bardilaw.com — should redirect to https://. |
| 1.8 | Verify www redirect | Engineer | 1 min | Visit www.bardilaw.com — should redirect to bardilaw.com. |

**Phase 1 total: ~30 min** | **Go/No-Go decision: If steps 1.1–1.5 pass, proceed to Phase 2.**

---

## Phase 2 — Social Media Push (9:00 – 11:00 AM ET)

Target: Launch announcement live on Instagram, Facebook, TikTok, and GBP within 2 hours of deploy.

All content is ready in the [BAR-82](/BAR/issues/BAR-82) social content package. Graphics are ready in [BAR-113](/BAR/issues/BAR-113).

| Step | Action | Owner | Est. Time | Notes |
|------|--------|-------|-----------|-------|
| 2.1 | **Instagram** — Post launch announcement (English) with Graphic #1 (Firm Launch Announcement) | Attorney | 5 min | Copy caption from content package Post 1. Add Graphic #1 (`G1-firm-launch-announcement.png`). Hashtags: #ImmigrationLaw #DACA #BardiImmigrationLaw |
| 2.2 | **Facebook** — Post launch announcement with Graphic #1 | Attorney | 5 min | Copy Facebook launch post from content package. Replace `[PHONE]` with your number. **Pin this post** to the top of your page. |
| 2.3 | **TikTok** — Upload pre-recorded launch video | Attorney | 5 min | Upload the video you recorded (prereq P7). Add on-screen text overlays per the script. |
| 2.4 | **Instagram** — Post Spanish version with Graphic #5 (Spanish Launch Announcement) | Attorney | 5 min | Copy Spanish caption from content package Post 1. Add Graphic #5 (`G5-spanish-launch.png`). Post as a separate post or add Spanish caption as first comment on Post 1. |
| 2.5 | **YouTube** — Post channel description and pin intro video (if recorded) | Attorney | 10 min | Copy YouTube description from content package. If launch video is ready, upload it. Otherwise, set up the channel with description only. |
| 2.6 | **GBP** — Post "What's New" welcome post (if GBP is verified) | Attorney | 5 min | Copy GBP post from content package. Add headshot as the post photo. Set button to "Website" → bardilaw.com. |

**Phase 2 total: ~35 min** | **If GBP is not yet verified, skip step 2.6 and move it to Phase 3.**

---

## Phase 3 — Google Business Profile (11:00 AM – 12:00 PM ET)

Target: GBP verification in progress or complete, first photo uploaded, review outreach underway.

| Step | Action | Owner | Est. Time | Notes |
|------|--------|-------|-----------|-------|
| 3.1 | Confirm GBP verification status | Attorney | 2 min | Log into Google Business Profile. Check if verification is complete. If not, check for the verification postcard/email. |
| 3.2 | If not verified: request GBP verification now | Attorney | 10 min | Follow the verification prompts. Mail verification can take 5-14 days, but phone/email verification is often instant for service-area businesses. See [BAR-18](/BAR/issues/BAR-18). |
| 3.3 | Upload first GBP photo | Attorney | 3 min | Upload your headshot or firm logo to the GBP Photos section. This is the image that appears in Google Maps and Search. |
| 3.4 | Post GBP welcome post (if verified and not done in Phase 2) | Attorney | 5 min | See step 2.6 above. |
| 3.5 | Verify GBP business info is correct | Attorney | 5 min | Check: firm name, address/service area, phone, website URL (bardilaw.com), hours, categories (Immigration Attorney, Immigration & Naturalization Service). |

**Phase 3 total: ~25 min**

---

## Phase 4 — Outreach (12:00 – 2:00 PM ET)

Target: Personal network and referral attorneys notified that bardilaw.com is live.

| Step | Action | Owner | Est. Time | Notes |
|------|--------|-------|-----------|-------|
| 4.1 | Send launch announcement email to personal network | Attorney | 20 min | Email your contact list (prior firm contacts, law school classmates, community connections). Keep it short: "Bardi Immigration Law is now open. bardilaw.com. Referrals welcome." |
| 4.2 | Send announcement to referral attorneys on your outreach list | Attorney | 20 min | Email each attorney on the [BAR-105](/BAR/issues/BAR-105) referral list individually. Personal emails convert better than a mass send. Mention practice areas and that you accept referrals. |
| 4.3 | Send Google review request to your 5-8 pre-identified reviewers | Attorney | 15 min | Use the outreach templates from the [BAR-48](/BAR/issues/BAR-48) Google Reviews Strategy. If you already sent warm texts/calls (per the strategy timeline), this is the follow-up email with the review link. |
| 4.4 | Post in any relevant professional groups | Attorney | 10 min | AILA chapter listserv, local bar association groups, immigration law Facebook groups. Short announcement: new firm, accepting consultations, bardilaw.com. |

**Phase 4 total: ~65 min**

---

## Phase 5 — End of Day Check (5:00 – 5:30 PM ET)

Target: Confirm the site is working, capture baseline metrics, screenshot records.

| Step | Action | Owner | Est. Time | Notes |
|------|--------|-------|-----------|-------|
| 5.1 | Check GA4 for first traffic | Engineer | 5 min | Open GA4 > Realtime. Confirm at least 1 session has been recorded today. Screenshot the Realtime report. |
| 5.2 | Check contact form submissions | Attorney | 3 min | Check your email for any consultation requests that came through the contact form today (beyond your test submission from step 1.4). |
| 5.3 | Check social media engagement | Attorney | 5 min | Review likes, comments, shares on Instagram, Facebook, TikTok launch posts. Reply to any comments. |
| 5.4 | Screenshot GBP profile | Attorney | 2 min | Take a screenshot of your Google Business Profile as it appears in Google Search (search "Bardi Immigration Law"). Save for records. |
| 5.5 | Delete test contact form submission | Engineer | 2 min | Remove the test submission from step 1.4 so it doesn't pollute lead data. |
| 5.6 | Confirm DKIM/SPF/DMARC for bardilaw.com email | Engineer | 5 min | Run a test email through mail-tester.com or Google Admin Toolbox. Confirm no deliverability issues. |
| 5.7 | Post end-of-day status to team | CEO | 5 min | Summary: what went live, any issues encountered, first traffic numbers, next actions for Day 2. |

**Phase 5 total: ~27 min**

---

## Day 1 Timeline Summary

| Time (ET) | Phase | Duration | Key Owner |
|-----------|-------|----------|-----------|
| 8:00 – 9:00 AM | Phase 1: Deploy + smoke test | 30 min | Engineer + Attorney |
| 9:00 – 11:00 AM | Phase 2: Social media push | 35 min | Attorney |
| 11:00 AM – 12:00 PM | Phase 3: Google Business Profile | 25 min | Attorney |
| 12:00 – 2:00 PM | Phase 4: Outreach | 65 min | Attorney |
| 5:00 – 5:30 PM | Phase 5: End of day check | 27 min | Engineer + Attorney |

**Total active time: ~3 hours** (spread across the day with natural breaks between phases)

---

## Rollback Plan

If something goes wrong after deploy:

| Scenario | Action | Owner |
|----------|--------|-------|
| Site won't load | Check Cloudflare Pages dashboard for build errors. Redeploy from last working commit. | Engineer |
| Contact form not sending emails | Verify RESEND_API_KEY is set correctly. Check Resend dashboard for delivery logs. | Engineer |
| GA4 not firing | Verify NEXT_PUBLIC_GA4_ID is correct. Check GA4 DebugView. May need a rebuild. | Engineer |
| Wrong content on site | Identify the page, fix in code, push to main. Cloudflare auto-deploys in ~2 min. | Engineer |
| Social media mistake | Delete and repost. Better to fix quickly than leave an error up. | Attorney |

---

## Post-Launch (June 11+)

- **Day 2-3:** Facebook follow-up post (June 12-13, from content package)
- **Day 3:** Instagram Post 2 — "What sets us apart" (from content package)
- **Day 5:** Send Google review reminder to non-responders (from [BAR-48](/BAR/issues/BAR-48) strategy)
- **Day 7:** Instagram Post 3 — DACA highlight + Spanish version (from content package)
- **Day 7:** TikTok DACA video (from content package)
- **Day 14:** Upload launch video to YouTube (after 48h audience seeding on TikTok/Instagram)
- **Ongoing:** Follow the 30/60/90-day measurement plan in POST-LAUNCH-MEASUREMENT-PLAN.md

---

*Deliverable for [BAR-122](/BAR/issues/BAR-122) — Document key: `launch-ops` | Created: 2026-05-20*
