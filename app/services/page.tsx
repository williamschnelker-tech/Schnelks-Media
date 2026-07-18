import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Schnelks Media',
  description: 'Automated Google review collection for service-based businesses.',
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
      'Setup takes about 30 minutes',
    ],
    stat1: { value: '1 Text', label: 'Per Completed Job' },
    stat2: { value: '30 Min', label: 'Setup Time' },
    note: null,
  },
];

const process = [
  {
    step: '01',
    title: 'You Reach Out',
    description: 'Tell us about your business — how many jobs per week, your current Google rating.',
  },
  {
    step: '02',
    title: 'We Set You Up',
    description: 'We configure the system with your business name, Google review link, and message timing. Takes about 30 minutes.',
  },
  {
    step: '03',
    title: 'You Log Completed Jobs',
    description: 'After each job, add the customer\'s name and phone number. That\'s the only step on your end.',
  },
  {
    step: '04',
    title: 'Reviews Come In',
    description: 'Texts go out, customers leave reviews, and your Google rating climbs while you\'re on to the next job.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url("https://images.unsplash.com/photo-1514565131-fce0801e6139?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-white/90" style={{background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.3)'}}>Services</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6 text-white">
            What We Do for{' '}
            <span className="text-white">Service-Based Companies</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-6">
            Automated Google review collection for service-based businesses. One text per completed job, zero extra work.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Review Automation'].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full border text-slate-200" style={{background:'rgba(255,255,255,0.1)', borderColor:'rgba(255,255,255,0.2)'}}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="py-20 border-b border-slate-100 last:border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                <span className="section-tag mb-6">{s.badge}</span>
                <h2 className="font-space font-bold text-3xl sm:text-4xl text-slate-900 mt-4 mb-5 leading-tight">
                  {s.headline}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">{s.description}</p>

                <div className="flex gap-6 mb-8">
                  <div className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-center min-w-[100px]">
                    <div className="font-space font-bold text-2xl text-gray-900">{s.stat1.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{s.stat1.label}</div>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-center min-w-[100px]">
                    <div className="font-space font-bold text-2xl text-gray-900">{s.stat2.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{s.stat2.label}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-slate-600 text-sm">
                      <svg className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                {s.note && (
                  <div className="mb-6 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-xs leading-relaxed">
                    {s.note}
                  </div>
                )}

                <Link href="/contact" className="btn-primary">
                  Get Started →
                </Link>
              </div>

              <div className={`relative ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200">
                  <img src={s.image} alt={s.imageAlt} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Getting Started</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 text-slate-900">
              Up and Running{' '}
              <span className="text-gradient">In Minutes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <div className="font-space font-bold text-4xl text-gray-900 mb-4">{p.step}</div>
                <h3 className="font-space font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
            Ready to Get More Reviews?
          </h2>
          <p className="text-slate-500 text-lg mb-4">
            Reach out and we&apos;ll get you set up. Review automation running after your very next job.
          </p>
          <p className="text-slate-400 text-sm mb-10">
            Questions? Call or text:{' '}
            <a href="tel:5178974843" className="text-gray-900 hover:text-gray-900">(517) 897-4843</a>
            {' '}·{' '}
            <a href="mailto:williamschnelker@gmail.com" className="text-gray-900 hover:text-gray-900">williamschnelker@gmail.com</a>
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
