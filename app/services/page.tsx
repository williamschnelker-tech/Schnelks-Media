import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Schnelks Media',
  description: 'Google review automation and paid ads for tree service companies. Set up once, works after every job.',
};

const services = [
  {
    id: 'reviews',
    badge: 'Core Service',
    headline: 'Automated Google Review Collection',
    description:
      'After your crew finishes a job, our system automatically sends the customer a text asking for a Google review — with a direct link. If they don\'t respond in a day or two, one follow-up goes out. That\'s it. Your rating climbs without you lifting a finger. All messages are fully compliant with Google\'s review policies, TCPA, and A2P 10DLC carrier requirements.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'SMS review automation',
    deliverables: [
      'Automated SMS sent after every completed job',
      'Direct link to your Google review page in every message',
      'One optional follow-up if customer doesn\'t respond',
      'Private feedback channel — unhappy customers reply directly to you',
      'STOP opt-out handled automatically',
      'TCPA and A2P 10DLC compliant messaging',
      'Setup takes less than a day',
    ],
    stat1: { value: '2–3x', label: 'More Reviews Per Month' },
    stat2: { value: '1 Text', label: 'Per Completed Job' },
    note: null,
  },
  {
    id: 'ads',
    badge: 'Additional Service',
    headline: 'Google & Meta Ads',
    description:
      'If you want to grow your lead volume on top of your review automation, paid ads are the fastest way to do it. We run Google Search Ads and Meta (Facebook/Instagram) campaigns targeted at homeowners in your service area who are actively looking for tree services. This is an additional service — not required to get started with review automation.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Google and Meta ads',
    deliverables: [
      'Google Search Ads — show up when people search for tree services',
      'Meta Ads — reach local homeowners on Facebook and Instagram',
      'Campaign setup, targeting, and ongoing management',
      'Conversion tracking so you know exactly where leads come from',
      'Regular performance updates in plain English',
      'Budget management — no wasted spend',
    ],
    stat1: { value: '3.8x', label: 'Average ROAS' },
    stat2: { value: '7–10 Days', label: 'To Launch' },
    note: 'Ask about availability when you reach out.',
  },
];

const process = [
  {
    step: '01',
    title: 'You Reach Out',
    description: 'Tell us a bit about your business — how many jobs you do per week, what your Google rating is now.',
  },
  {
    step: '02',
    title: 'We Get You Set Up',
    description: 'We configure the system with your business name, Google review link, and message timing. Takes less than a day.',
  },
  {
    step: '03',
    title: 'You Log Completed Jobs',
    description: 'After each job, you add the customer\'s name and phone number. That\'s the only step on your end.',
  },
  {
    step: '04',
    title: 'Reviews Come In Automatically',
    description: 'The texts go out, customers leave reviews, and your Google rating climbs while you\'re on to the next job.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative hero-grid gradient-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/8 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-6">Services</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6">
            What We Do for{' '}
            <span className="text-gradient">Tree Service Companies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Our core service is Google review automation — set up once, runs after every job. Paid ads are available as an add-on if you want more leads too.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Review Automation', 'Google Ads', 'Meta Ads'].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="py-20 border-b border-white/5 last:border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                <span className="section-tag mb-6">{s.badge}</span>
                <h2 className="font-space font-bold text-3xl sm:text-4xl text-white mt-4 mb-5 leading-tight">
                  {s.headline}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">{s.description}</p>

                <div className="flex gap-6 mb-8">
                  <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center min-w-[100px]">
                    <div className="font-space font-bold text-2xl text-blue-400">{s.stat1.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.stat1.label}</div>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center min-w-[100px]">
                    <div className="font-space font-bold text-2xl text-blue-400">{s.stat2.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.stat2.label}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                {s.note && (
                  <div className="mb-6 px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/15 text-blue-300/70 text-xs leading-relaxed">
                    {s.note}
                  </div>
                )}

                <Link href="/contact" className="btn-primary">
                  Get Started →
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5">
                  <img src={s.image} alt={s.imageAlt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#080810]/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Getting Started</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              Up and Running{' '}
              <span className="text-gradient">Same Day</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <div className="font-space font-bold text-4xl text-blue-500/30 mb-4">{p.step}</div>
                <h3 className="font-space font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-6">
            Ready to Get More Reviews?
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Reach out and we&apos;ll get you set up. You&apos;ll have review automation running after your very next job.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Questions? Call or text:{' '}
            <a href="tel:5178974843" className="text-blue-400 hover:text-blue-300">(517) 897-4843</a>
            {' '}·{' '}
            <a href="mailto:williamschnelker@gmail.com" className="text-blue-400 hover:text-blue-300">williamschnelker@gmail.com</a>
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
