import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  caseType?: string;
  description?: string;
  preferredContact?: string;
  _gotcha?: string; // honeypot, must be empty
};

// Map the form's caseType options to stable Kit tag slugs (BAR-579 / BAR-569 nurture).
// Falls back to case:other for unknown/blank values so segmentation always has a tag.
const CASE_TYPE_TAGS: Record<string, string> = {
  'Benefits-Based Immigration': 'case:benefits',
  'Removal Defense': 'case:removal',
  'Federal Litigation': 'case:litigation',
  'Not Sure / Other': 'case:other',
};

function caseTypeToTag(caseType?: string): string {
  if (caseType && CASE_TYPE_TAGS[caseType]) return CASE_TYPE_TAGS[caseType];
  return 'case:other';
}

/**
 * Best-effort Kit (ConvertKit) v4 subscriber sync. Upserts the subscriber, then
 * applies `lead-inbound` (starts the nurture sequence) plus a `case:*` segmentation
 * tag. Tags are upserted via POST /v4/tags, so they self-bootstrap on first use.
 * Never throws, a Kit outage must not fail the visitor's form submission.
 */
async function syncToKit(params: { email: string; firstName: string; caseType?: string }): Promise<void> {
  const kitApiKey = process.env.KIT_API_KEY;
  if (!kitApiKey) {
    // Not configured yet, Resend auto-reply still fires; nurture sync is additive.
    console.warn('BAR-579: KIT_API_KEY not configured; skipping Kit subscriber sync');
    return;
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Kit-Api-Key': kitApiKey,
  };

  try {
    // 1. Upsert the subscriber (creates, or updates first_name if already present).
    const subRes = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        first_name: params.firstName,
        email_address: params.email,
        state: 'active',
      }),
    });
    if (!subRes.ok) {
      console.error('BAR-579: Kit subscriber upsert failed', subRes.status, await subRes.text());
      return;
    }

    // 2. Apply lead-inbound (sequence trigger) + the case-type segmentation tag.
    const tagNames = ['lead-inbound', caseTypeToTag(params.caseType)];
    for (const name of tagNames) {
      // POST /v4/tags is an upsert: returns the existing tag or creates it.
      const tagRes = await fetch('https://api.kit.com/v4/tags', {
        method: 'POST',
        headers,
        body: JSON.stringify({ name }),
      });
      if (!tagRes.ok) {
        console.error('BAR-579: Kit tag upsert failed', name, tagRes.status);
        continue;
      }
      const tagId = (await tagRes.json())?.tag?.id;
      if (!tagId) continue;

      const applyRes = await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: params.email }),
      });
      if (!applyRes.ok) {
        console.error('BAR-579: Kit tag apply failed', name, applyRes.status);
      }
    }
  } catch (err) {
    console.error('BAR-579: Kit sync error', err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactPayload;

    const { firstName, lastName, email, phone, caseType, description, preferredContact, _gotcha } = body;

    // Honeypot: bots fill hidden fields; humans don't
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!firstName || !lastName || !email || !phone || !caseType) {
      return NextResponse.json(
        { error: 'Required fields missing: firstName, lastName, email, phone, caseType.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      // Delivery not configured (BAR-69). Fail loudly instead of returning a false
      // success: there is no DB and no email path, so a 200 "message received" tells
      // the visitor they reached us while the lead is silently dropped. Returning an
      // error surfaces the honest "please email/call us directly" fallback in the UI
      // so no prospective client is lost. See BAR-15 / BAR-69.
      console.error('BAR-69: RESEND_API_KEY or CONTACT_EMAIL not configured; rejecting submission to avoid silent lead loss');
      return NextResponse.json(
        { error: 'We could not submit your request right now. Please email or call us directly so we don’t miss you.' },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const fullName = `${firstName} ${lastName}`;
    const subject = `New consultation request, ${caseType}`;

    const notificationText = [
      `New consultation request via bardiimmigrationlaw.com`,
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Case type: ${caseType}`,
      `Preferred contact: ${preferredContact ?? 'not specified'}`,
      '',
      'Message:',
      description?.trim() || '(no description provided)',
    ].join('\n');

    const notificationHtml = `
<p><strong>New consultation request</strong> via bardiimmigrationlaw.com</p>
<table cellpadding="4" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
  <tr><td style="color:#666;padding-right:16px">Name</td><td>${fullName}</td></tr>
  <tr><td style="color:#666;padding-right:16px">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="color:#666;padding-right:16px">Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
  <tr><td style="color:#666;padding-right:16px">Case type</td><td>${caseType}</td></tr>
  <tr><td style="color:#666;padding-right:16px">Preferred contact</td><td>${preferredContact ?? 'not specified'}</td></tr>
</table>
${description?.trim() ? `<p style="margin-top:16px"><strong>Message:</strong><br>${description.trim()}</p>` : ''}
    `.trim();

    // Email 1 of the BAR-569 nurture sequence (deliverables/email-sequence.md §3).
    // Boutique, personal voice; signed by Eszter Bardi. Sent transactionally via Resend.
    const firmPhone = process.env.CONTACT_PHONE; // optional; degrades the urgent line if unset
    const urgentText = firmPhone
      ? `If your matter is urgent, a court date, a filing deadline, a detained family member, reply to this email or call us at ${firmPhone} right away so we can prioritize it.`
      : 'If your matter is urgent, a court date, a filing deadline, a detained family member, reply to this email right away so we can prioritize it.';

    const autoReplyText = [
      `Hi ${firstName},`,
      '',
      "Thank you for reaching out to Bardi Immigration Law. Your message is in, and I want you to know what happens from here, no guessing.",
      '',
      'Eszter personally reviews every inquiry within one business day. Not a screener, not a chatbot, the attorney. You\'ll hear from us by your preferred contact method to schedule your free 30-minute consultation.',
      '',
      "In that consultation, we'll talk through your situation, answer your questions in plain language, and tell you honestly whether and how we can help. You'll leave knowing your options and your next step, whether or not you decide to work with us.",
      '',
      'Immigration law is complex, and the stakes are personal. Please know this: you are not navigating it alone. Bringing in someone who handles these cases every day is exactly the right move, and you\'ve made it.',
      '',
      urgentText,
      '',
      'Talk soon,',
      'Eszter Bardi',
      'Bardi Immigration Law',
    ].join('\n');

    const urgentHtml = firmPhone
      ? `If your matter is urgent, a court date, a filing deadline, a detained family member, reply to this email or call us at <a href="tel:${firmPhone}">${firmPhone}</a> right away so we can prioritize it.`
      : 'If your matter is urgent, a court date, a filing deadline, a detained family member, reply to this email right away so we can prioritize it.';

    const autoReplyHtml = `
<div style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#3d3d3d">
  <p>Hi ${firstName},</p>
  <p>Thank you for reaching out to <strong>Bardi Immigration Law</strong>. Your message is in, and I want you to know what happens from here, no guessing.</p>
  <p><strong>Eszter personally reviews every inquiry within one business day.</strong> Not a screener, not a chatbot, the attorney. You'll hear from us by your preferred contact method to schedule your <strong>free 30-minute consultation</strong>.</p>
  <p>In that consultation, we'll talk through your situation, answer your questions in plain language, and tell you honestly whether and how we can help. You'll leave knowing your options and your next step, whether or not you decide to work with us.</p>
  <p>Immigration law is complex, and the stakes are personal. Please know this: <strong>you are not navigating it alone.</strong> Bringing in someone who handles these cases every day is exactly the right move, and you've made it.</p>
  <p>${urgentHtml}</p>
  <p style="margin-top:24px">Talk soon,<br><strong>Eszter Bardi</strong><br>Bardi Immigration Law</p>
</div>
    `.trim();

    const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'Bardi Immigration Law <noreply@bardiimmigrationlaw.com>';

    await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: [contactEmail],
        replyTo: email,
        subject,
        text: notificationText,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: fromAddress,
        to: [email],
        subject: `We received your message, ${firstName}, here's what happens next`,
        text: autoReplyText,
        html: autoReplyHtml,
      }),
      // Nurture-sequence sync (BAR-579). Best-effort: never rejects.
      syncToKit({ email, firstName, caseType }),
    ]);

    return NextResponse.json(
      { success: true, message: 'Your message has been received. An attorney will be in touch within 24 hours.' },
      { status: 200 },
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Unable to send your message. Please try again or call us directly.' },
      { status: 500 },
    );
  }
}
