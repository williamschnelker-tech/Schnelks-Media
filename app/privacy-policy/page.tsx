import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Schnelks Media',
  description: 'How Schnelks Media collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white hero-grid">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-6">Legal</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6 text-slate-900">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Effective Date: June 2, 2026 &nbsp;·&nbsp; Last Updated: July 17, 2026
          </p>
        </div>
      </section>

      <section className="pb-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 sm:p-12 space-y-10 text-slate-600 text-sm leading-relaxed">

            <p>
              Schnelks Media is a brand of William Schnelker LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy describes how we collect, use, and protect information when you visit our website or use our services.
            </p>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">1. Who We Are</h2>
              <p>Schnelks Media provides automated SMS-based customer review collection services to local service businesses. We are based in Okemos, Michigan, and operate primarily within the United States.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">2. Information We Collect</h2>
              <h3 className="font-semibold text-slate-700 mb-2">From Visitors to Our Website</h3>
              <p className="mb-4">When you visit our website, we may collect basic, non-identifying analytics data such as your browser type, device type, pages visited, and approximate location.</p>
              <h3 className="font-semibold text-slate-700 mb-2">From Prospective and Active Clients</h3>
              <p className="mb-3">If you contact us about our services, we collect information you voluntarily provide, including:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-500 mb-4">
                <li>Your name</li>
                <li>Your business name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Any details you share about your business</li>
              </ul>
              <h3 className="font-semibold text-slate-700 mb-2">From Our Clients&apos; Customers (Data We Process)</h3>
              <p className="mb-3">Our clients submit limited customer information to our system, including:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-500 mb-4">
                <li>Customer first name</li>
                <li>Customer phone number</li>
                <li>Date of service or job completion</li>
              </ul>
              <p>We act as a service provider (data processor) on behalf of our clients. Our clients are responsible for obtaining proper consent from their customers before submitting this information to us.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">3. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>Operate and deliver our SMS review collection service</li>
                <li>Send transactional SMS messages on behalf of our clients</li>
                <li>Communicate with prospective and active clients</li>
                <li>Improve and maintain our website and services</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">4. How We Share Information</h2>
              <p className="mb-3">We do not sell personal information. We may share information only as follows:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>With service providers (such as Twilio for SMS delivery) strictly to operate our service</li>
                <li>With our clients, where the information relates to their own customers</li>
                <li>When required by law, court order, or to protect our legal rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">5. SMS Messaging Specifically</h2>
              <p className="mb-4">SMS messages sent through our system are sent on behalf of our clients to their customers, who have provided their phone numbers directly to the business at the time of service. Recipients typically receive one (1) review request message after a completed job, plus up to one (1) follow-up message if no response is received within approximately two (2) days. Message frequency varies based on services completed. Message and data rates may apply. Recipients may opt out at any time by replying STOP, or reply HELP for assistance.</p>
              <p className="font-medium text-slate-700">Mobile opt-in data and consent are not shared with any third parties or affiliates for marketing or promotional purposes.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">6. Data Retention</h2>
              <p>We retain client and customer data only as long as needed to provide our service or as required by law. When a client terminates service, we delete the customer contact data we processed within thirty (30) days, unless retention is required by law.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">7. Data Security</h2>
              <p>We use reasonable administrative, technical, and physical safeguards to protect information. However, no system is 100% secure.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">8. Your Rights</h2>
              <p>Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, or delete it. Contact us at <a href="mailto:williamschnelker@gmail.com" className="text-gray-900 hover:text-gray-900">williamschnelker@gmail.com</a>.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">9. Children&apos;s Privacy</h2>
              <p>Our services are not directed to children under 13, and we do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent revision.</p>
            </div>

            <div>
              <h2 className="font-space font-bold text-slate-900 text-xl mb-3">11. Contact Us</h2>
              <div className="card p-6 space-y-1 bg-slate-50">
                <p className="text-slate-900 font-semibold">Schnelks Media (William Schnelker LLC)</p>
                <p className="text-slate-500">Okemos, MI 48864</p>
                <a href="mailto:williamschnelker@gmail.com" className="block text-gray-900 hover:text-gray-900">williamschnelker@gmail.com</a>
                <a href="tel:5178974843" className="block text-gray-900 hover:text-gray-900">(517) 897-4843</a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
              <Link href="/sms-terms" className="btn-ghost text-sm">View SMS Terms →</Link>
              <Link href="/contact" className="btn-ghost text-sm">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
