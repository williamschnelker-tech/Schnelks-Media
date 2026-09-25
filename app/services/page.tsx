import Link from 'next/link';
import type { Metadata } from 'next';
import TextMessageMock from '@/components/TextMessageMock';

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
      'After your crew finishes a job, our system automatically sends the customer a text asking for a Google review — with a direct link. If they don\'t respond in a day or two, one follow-up goes out. That\'s it. All messages are fully compliant with Google\'s review policies, TCPA, and A2P 10DLC carrier requirements.',
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
      <section className="bg-paper pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-medium text-pine">Services</p>
          <h1 className="max-w-3xl font-space text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            What we do.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            One text after every completed job, with a direct link to your Google review page. You do the work, we handle the asking.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
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

                <Link href="/contact#book" className="btn-primary">
                  Get Started →
                </Link>
              </div>

              <div className={`relative ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                <TextMessageMock />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <Link href="/contact#book" className="btn-primary text-base px-10 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
