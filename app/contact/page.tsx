import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Schnelks Media',
  description: 'Get in touch about Google review automation for your tree service company.',
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
    value: 'Okemos, MI — Serving Michigan Statewide',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon–Fri 8:00 AM – 6:00 PM ET · Sat–Sun Closed',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: 'Service Area',
    value: 'Michigan statewide — tree service, roofing & home trades',
    href: null,
  },
];

const faqs = [
  {
    q: "How does the review automation actually work?",
    a: "After a job is completed, you add the customer's name and phone number to the system. Our platform automatically sends them a friendly SMS with a direct link to leave a Google review. If they don't respond in a day or two, one follow-up message goes out. That's it.",
  },
  {
    q: "What if a customer isn't happy?",
    a: "If a customer replies with a complaint instead of leaving a review, we forward that message directly to you privately. You get a chance to make it right before it ever becomes a public 1-star review.",
  },
  {
    q: "Is this legal / compliant?",
    a: "Yes. Our messages are fully compliant with Google's review policies, TCPA regulations, and A2P 10DLC carrier requirements. Every message includes an opt-out (STOP), and we never ask customers to leave only positive reviews.",
  },
  {
    q: "How long does setup take?",
    a: "Less than a day. We get your business name, Google review link, and message preferences — then the system is ready to go. You can start sending review requests after your very next job.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Month-to-month. If it's not working for you, you can cancel anytime.",
  },
  {
    q: "Do you work with tree service companies outside Michigan?",
    a: "Primarily Michigan, but reach out — we may be able to work with you depending on where you're located.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url("https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-white/90" style={{background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.3)'}}>Let&apos;s Talk</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6 text-white">
            Get in Touch with{' '}
            <span className="text-gray-300">Schnelks Media</span>
          </h1>
          <p className="text-slate-200 text-lg mb-4">
            Have a question about our review automation service? Want to see how it could work for your tree service business? Reach out — we typically respond within one business day.
          </p>
          <p className="text-slate-300 text-sm">
            Send a message below or call us directly at (517) 897-4843.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-8">
                <h2 className="font-space font-bold text-xl text-slate-900 mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs mb-0.5">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-slate-700 text-sm hover:text-slate-900 transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <div className="text-slate-700 text-sm">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-8">
                <h2 className="font-space font-bold text-xl text-slate-900 mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  {[
                    'See exactly how the review automation works',
                    'Learn what setup looks like for your business',
                    'Get answers to any questions you have',
                    'No pressure, no hard pitch',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                      <svg className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* FAQ */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-slate-900 mb-3">Common Questions</h2>
            <p className="text-slate-500">About our review automation service.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-space font-semibold text-slate-900 text-base mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
