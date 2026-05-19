import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    // TODO: integrate Resend to send email to CONTACT_EMAIL
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will be in touch shortly.' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request.' },
      { status: 400 },
    );
  }
}
