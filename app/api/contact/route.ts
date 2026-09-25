import { NextRequest, NextResponse } from 'next/server';

/*
 * Contact form submissions (calls are booked separately via Calendly) are emailed to you via Resend (https://resend.com).
 *
 * Required environment variables (set in Vercel → Project → Settings → Environment Variables,
 * and in .env.local for local dev):
 *   RESEND_API_KEY       — API key from resend.com/api-keys
 *   NOTIFY_EMAIL         — where notifications go (defaults to williamschnelker@gmail.com)
 *   RESEND_FROM_EMAIL    — optional; defaults to Resend's test sender. Only works for sending
 *                          to the email on your Resend account until you verify a domain.
 */
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'williamschnelker@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Schnelks Media <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, service, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fail loudly so visitors are told to email/call instead of the request silently vanishing.
      console.error('RESEND_API_KEY is not set — booking request NOT delivered:', { name, email, phone });
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const text = [
      `New message from the website contact form`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Business: ${business || '—'}`,
      `Interested in: ${service}`,
      ``,
      `Message:`,
      message,
    ].join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        reply_to: email,
        subject: `New website message: ${name}${business ? ` (${business})` : ''}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', res.status, await res.text());
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
