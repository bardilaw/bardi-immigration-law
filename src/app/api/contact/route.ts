import { NextResponse } from 'next/server';

export const runtime = 'edge';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  caseType?: string;
  description?: string;
  preferredContact?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactPayload;

    const { firstName, lastName, email, phone, caseType } = body;

    if (!firstName || !lastName || !email || !phone || !caseType) {
      return NextResponse.json(
        { error: 'Required fields missing: firstName, lastName, email, phone, caseType.' },
        { status: 400 },
      );
    }

    // Email delivery handled by BAR-15 (wire contact form to email/CRM).
    // Uncomment + configure once RESEND_API_KEY and CONTACT_EMAIL are set in Cloudflare Pages env.
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@bardilaw.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New consultation request — ${caseType}`,
    //   text: [
    //     `Name: ${firstName} ${lastName}`,
    //     `Email: ${email}`,
    //     `Phone: ${phone}`,
    //     `Case type: ${caseType}`,
    //     `Preferred contact: ${preferredContact ?? 'not specified'}`,
    //     '',
    //     body.description ?? '(no description provided)',
    //   ].join('\n'),
    // });

    return NextResponse.json(
      { success: true, message: 'Your message has been received. An attorney will be in touch within 24 hours.' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request.' },
      { status: 400 },
    );
  }
}
