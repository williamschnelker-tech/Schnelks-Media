import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Schnelks Media',
  description: 'How Schnelks Media collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative hero-grid">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-amber-500/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-6">Legal</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: June 2, 2026 &nbsp;·&nbsp; Last Updated: June 2, 2026
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 sm:p-12 space-y-10 text-gray-300 text-sm leading-relaxed">

            <p>
              Schnelks Media is a brand of William Schnelker LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy describes how we collect, use, and protect information when you visit our website or use our services.
            </p>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">1. Who We Are</h2>
              <p>
                Schnelks Media provides automated SMS-based customer review collection services to local service businesses. We are based in Okemos, Michigan, and operate primarily within the United States.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">2. Information We Collect</h2>
              <h3 className="font-semibold text-gray-200 mb-2">From Visitors to Our Website</h3>
              <p className="mb-4">
                When you visit our website, we may collect basic, non-identifying analytics data such as your browser type, device type, pages visited, and approximate location. We do not require you to create an account to browse our site.
              </p>
              <h3 className="font-semibold text-gray-200 mb-2">From Prospective and Active Clients</h3>
              <p className="mb-3">If you contact us about our services, we collect information you voluntarily provide, including:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                <li>Your name</li>
                <li>Your business name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Any details you share about your business</li>
              </ul>
              <h3 className="font-semibold text-gray-200 mb-2">From Our Clients&apos; Customers (Data We Process)</h3>
              <p className="mb-3">As part of providing our review collection service, our clients (local service businesses) submit limited information about their own customers to our system, including:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                <li>Customer first name</li>
                <li>Customer phone number</li>
                <li>Date of service or job completion</li>
              </ul>
              <p>
                We act as a service provider (data processor) on behalf of our clients. Our clients are responsible for obtaining proper consent from their customers before submitting this information to us.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">3. How We Use Information</h2>
              <p className="mb-3">We use information to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Operate and deliver our SMS review collection service</li>
                <li>Send transactional SMS messages on behalf of our clients to their customers</li>
                <li>Communicate with prospective and active clients about our services</li>
                <li>Improve and maintain our website and services</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">4. How We Share Information</h2>
              <p className="mb-3">We do not sell personal information. We may share information only as follows:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>With service providers (such as Twilio for SMS delivery, Stripe for payment processing) strictly to operate our service</li>
                <li>With our clients, where the information relates to their own customers</li>
                <li>When required by law, court order, or to protect our legal rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">5. SMS Messaging Specifically</h2>
              <p className="mb-4">
                SMS messages sent through our system are sent on behalf of our clients (local service businesses) to those clients&apos; customers, who have provided their phone numbers directly to the business at the time of service. Recipients may opt out of further messages at any time by replying STOP. For help, recipients may reply HELP or contact the business directly. Message and data rates may apply. Message frequency varies based on services completed.
              </p>
              <p className="font-medium text-gray-200">
                Mobile opt-in data and consent are not shared with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">6. Data Retention</h2>
              <p>
                We retain client and customer data only as long as needed to provide our service or as required by law. When a client terminates their service with us, we delete the customer contact data we processed on their behalf within thirty (30) days, unless retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">7. Data Security</h2>
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect information. However, no system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">8. Your Rights</h2>
              <p>
                Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, or delete it. To exercise these rights, contact us at{' '}
                <a href="mailto:williamschnelker@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                  williamschnelker@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent revision. Continued use of our services after a change constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-space font-bold text-white text-xl mb-3">11. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or our data practices, contact us at:</p>
              <div className="card p-6 space-y-1">
                <p className="text-white font-semibold">Schnelks Media (William Schnelker LLC)</p>
                <p className="text-gray-400">Okemos, MI 48864</p>
                <a href="mailto:williamschnelker@gmail.com" className="block text-amber-400 hover:text-amber-300 transition-colors">williamschnelker@gmail.com</a>
                <a href="tel:5178974843" className="block text-amber-400 hover:text-amber-300 transition-colors">(517) 897-4843</a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <Link href="/sms-terms" className="btn-ghost text-sm">View SMS Terms →</Link>
              <Link href="/contact" className="btn-ghost text-sm">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
