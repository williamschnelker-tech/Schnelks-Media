import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Shnelks Media',
  description: 'Book a free strategy call or send us a message. We respond within 24 hours.',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'williamschnelker@gmail.com',
    href: 'mailto:williamschnelker@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '(517) 897-4843',
    href: 'tel:5178974843',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Michigan — Serving Clients Nationwide',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const faqs = [
  {
    q: "What's included in the free strategy call?",
    a: "A 30-minute call where we look at your current online presence, identify where you're missing leads, and lay out exactly what we'd do to fix it. No pitch, no pressure — just an honest conversation.",
  },
  {
    q: "Do you work with companies that have never run ads before?",
    a: "Yes — and honestly it's easier to start fresh than to fix a mess someone else made. We handle everything from scratch, including account setup, tracking, and your first campaign.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Everything is month-to-month. We keep clients by getting results, not by locking them in. If we're not performing, you can walk — no hard feelings.",
  },
  {
    q: "How quickly can you launch?",
    a: "Most campaigns are live within 7–10 days. A new website typically takes 2–3 weeks depending on how fast we get your info and photos.",
  },
  {
    q: "I'm a roofer — is Google Ads or SEO better for me?",
    a: "Both work great for roofing, but they work differently. Google Ads gets you leads immediately. SEO takes 3–6 months but then brings in free leads every month. Ideally you do both — we can walk you through the right starting point on the call.",
  },
  {
    q: "What areas in Michigan do you serve?",
    a: "All of Michigan. Our services are fully remote — no site visits needed except for drone footage, which we can schedule if you want that add-on.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative hero-grid gradient-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/8 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-6">Let&apos;s Talk</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6">
            Built for Roofers &amp;{' '}
            <span className="text-gradient">Landscapers in Michigan</span>
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            We specialize in helping roofing and landscaping companies get more leads, rank higher on Google, and build a professional online presence that actually converts — so you can stay focused on the work.
          </p>
          <p className="text-gray-500 text-sm">
            Book a free 30-minute strategy call or send a message below. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div className="card p-8">
                <h2 className="font-space font-bold text-xl text-white mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-gray-200 text-sm hover:text-white transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <div className="text-gray-200 text-sm">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="card p-8">
                <h2 className="font-space font-bold text-xl text-white mb-6">On the Strategy Call</h2>
                <ul className="space-y-4">
                  {[
                    'Audit your current ads & website',
                    'Identify your biggest growth lever',
                    'Map out a custom paid ads strategy',
                    'No pressure, no hard pitch',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-space font-bold text-xl text-white">Book a Time Directly</h2>
              </div>
              <p className="text-gray-400 text-sm">Pick a time that works for you — 30-minute strategy call, no strings attached.</p>
            </div>
            {/* Calendly embed placeholder */}
            <div className="bg-[#0d0d1a] min-h-[500px] flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-xl text-white mb-2">Calendly Booking</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-sm">
                  Add your Calendly link to show the live booking calendar here. Replace this placeholder in{' '}
                  <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-xs">app/contact/page.tsx</code>.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Set Up Calendly →
                </a>
              </div>
            </div>
            {/*
              TO ADD YOUR CALENDLY:
              1. Go to calendly.com and create a free account
              2. Create a 30-minute event type
              3. Replace the div above with:
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/YOUR-USERNAME/30min"
                style={{ minWidth: '320px', height: '630px' }}
              />
              4. Add this script tag in app/layout.tsx <head>:
              <script src="https://assets.calendly.com/assets/external/widget.js" async />
            -->
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-white mb-3">Common Questions</h2>
            <p className="text-gray-400">From roofing and landscaping owners who&apos;ve reached out before.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-space font-semibold text-white text-base mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
