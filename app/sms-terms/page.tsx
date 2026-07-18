import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Terms | Schnelks Media',
  description: 'SMS Terms of Service and Messaging Disclosure for Schnelks Media review automation.',
};

const terms = [
  {
    title: 'About Our SMS Service',
    body: 'Schnelks Media operates an SMS messaging service on behalf of our clients (local service-based businesses, including home services, trades, and equipment rental companies). Our clients use our service to send a one-time review request message, plus an optional follow-up message, to their own customers after completing a service job.',
  },
  {
    title: 'How Recipients Are Added',
    body: 'Recipients are customers of our clients who have provided their mobile phone number directly to the business at the time of service (verbally to the technician or on a service invoice or intake form). By providing their phone number to the business, the customer consents to receive a one-time review request SMS with an optional follow-up reminder.',
  },
  {
    title: 'Message Frequency',
    body: 'Recipients typically receive one (1) SMS message after a service is completed, with up to one (1) follow-up reminder if no response is received within approximately two (2) days. Message frequency varies based on services completed.',
  },
  {
    title: 'Message and Data Rates',
    body: "Message and data rates may apply, depending on the recipient's mobile carrier and plan.",
  },
  {
    title: 'Opting Out',
    body: 'Recipients may opt out of receiving further messages at any time by replying STOP to any message. After replying STOP, no further messages will be sent.',
  },
  {
    title: 'Help',
    body: 'Recipients may reply HELP to any message for assistance, or contact the sending business directly. Recipients may also contact Schnelks Media at williamschnelker@gmail.com or (517) 897-4843.',
  },
  {
    title: 'Supported Carriers',
    body: 'Messages are sent on major U.S. mobile carriers including AT&T, Verizon, T-Mobile, and others. Carriers are not liable for delayed or undelivered messages.',
  },
  {
    title: 'Privacy',
    body: 'Mobile phone numbers and opt-in data are not shared with third parties for marketing purposes. See our Privacy Policy for full details.',
  },
];

export default function SmsTermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white hero-grid">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-6">Legal</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6 text-slate-900">
            SMS <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="text-slate-400 text-sm">Effective Date: June 2, 2026</p>
        </div>
      </section>

      <section className="pb-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {terms.map((t) => (
              <div key={t.title} className="card p-8">
                <h2 className="font-space font-bold text-slate-900 text-lg mb-3">{t.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}

            <div className="card p-8">
              <h2 className="font-space font-bold text-slate-900 text-lg mb-3">Contact Us</h2>
              <p className="text-slate-500 text-sm mb-4">Questions about these SMS Terms?</p>
              <div className="space-y-1 text-sm">
                <p className="text-slate-700 font-semibold">Schnelks Media (William Schnelker LLC)</p>
                <p className="text-slate-500">Okemos, MI 48864</p>
                <a href="mailto:williamschnelker@gmail.com" className="block text-gray-900 hover:text-gray-900">williamschnelker@gmail.com</a>
                <a href="tel:5178974843" className="block text-gray-900 hover:text-gray-900">(517) 897-4843</a>
              </div>
            </div>

            <div className="card p-6 flex flex-col sm:flex-row gap-4">
              <Link href="/privacy-policy" className="btn-ghost text-sm">View Privacy Policy →</Link>
              <Link href="/contact" className="btn-ghost text-sm">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
