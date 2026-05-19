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
  _gotcha?: string; // honeypot — must be empty
};

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
      // Config not set yet — accept submission silently rather than fail for the visitor
      console.error('BAR-15: RESEND_API_KEY or CONTACT_EMAIL not configured');
      return NextResponse.json(
        { success: true, message: 'Your message has been received. An attorney will be in touch within 24 hours.' },
        { status: 200 },
      );
    }

    const resend = new Resend(apiKey);
    const fullName = `${firstName} ${lastName}`;
    const subject = `New consultation request — ${caseType}`;

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

    const autoReplyText = [
      `Hello ${firstName},`,
      '',
      'Thank you for reaching out to Bardi Immigration Law. We have received your consultation request and will be in touch within 24 hours.',
      '',
      'What you submitted:',
      `  Case type: ${caseType}`,
      `  Preferred contact: ${preferredContact ?? 'not specified'}`,
      '',
      'If you have an urgent matter, please call our office directly.',
      '',
      'Bardi Immigration Law',
    ].join('\n');

    const autoReplyHtml = `
<p>Hello ${firstName},</p>
<p>Thank you for reaching out to <strong>Bardi Immigration Law</strong>. We have received your consultation request and will be in touch within 24 hours.</p>
<table cellpadding="4" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;color:#444">
  <tr><td style="color:#666;padding-right:16px">Case type</td><td>${caseType}</td></tr>
  <tr><td style="color:#666;padding-right:16px">Preferred contact</td><td>${preferredContact ?? 'not specified'}</td></tr>
</table>
<p>If you have an urgent matter, please call our office directly.</p>
<p>— Bardi Immigration Law</p>
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
        subject: 'We received your consultation request — Bardi Immigration Law',
        text: autoReplyText,
        html: autoReplyHtml,
      }),
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
