import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, business, service, budget, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    /*
     * TO RECEIVE EMAILS: add an email service here.
     *
     * Option 1 — Resend (recommended, free tier available):
     *   npm install resend
     *   Then uncomment and fill in:
     *
     *   import { Resend } from 'resend';
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: 'Shnelks Media <noreply@yourdomain.com>',
     *     to: 'your@email.com',
     *     subject: `New inquiry from ${name}`,
     *     text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nService: ${service}\nBudget: ${budget}\n\n${message}`,
     *   });
     *
     * Option 2 — Formspree (zero-code):
     *   Change your form action to: https://formspree.io/f/YOUR_FORM_ID
     *   And remove this API route entirely.
     *
     * For now, submissions are logged and return success.
     */
    console.log('New inquiry:', { name, email, business, service, budget, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
