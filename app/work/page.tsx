import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results | Schnelks Media',
  description: 'See what tree service companies get from automated Google review collection.',
};

const bigStats = [
  { value: '2–3x', label: 'More Reviews Per Month vs. Asking in Person', icon: '⭐' },
  { value: '90%+', label: 'of Homeowners Read Reviews Before Hiring', icon: '👀' },
  { value: '4.8★', label: 'Average Rating After 90 Days on the System', icon: '📈' },
  { value: '1 Day', label: 'Setup Time — Running After Your Next Job', icon: '⚡' },
];

const examples = [
  {
    company: 'Example: Tree Service Company',
    type: 'Review Automation — Getting Started',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&auto=format&fit=crop&q=80',
    description: 'A tree service company with 14 Google reviews and a 4.1 rating. They were doing good work but never remembered to ask for reviews. After setting up automated texts, review requests went out after every job — no extra effort.',
    tags: ['Review Automation', 'Tree Service'],
    results: [
      { label: 'Reviews in 60 Days', value: '+35' },
      { label: 'Rating After 90 Days', value: '4.8★' },
      { label: 'Setup Time', value: '1 Day' },
    ],
    color: 'blue',
  },
  {
    company: 'Example: Tree Service Company',
    type: 'Review Automation + Google Ads',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=80',
    description: 'A tree service owner who wanted both more reviews and more new leads. We set up review automation first, then launched Google Ads once his rating was strong enough to convert new visitors. Strong reviews make your ads convert better.',
    tags: ['Review Automation', 'Google Ads', 'Tree Service'],
    results: [
      { label: 'New Leads Per Month', value: '25–40' },
      { label: 'Google Rating', value: '4.9★' },
      { label: 'Cost Per Lead', value: '$45–$70' },
    ],
    color: 'green',
  },
  {
    company: 'Example: Tree Service Company',
    type: 'Private Feedback Catch',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80',
    description: 'A customer who had a less-than-perfect experience replied to the review request text with their concern instead of leaving a 1-star review publicly. The owner was able to reach out, make it right, and the customer ended up leaving a 4-star review instead.',
    tags: ['Review Automation', 'Private Feedback'],
    results: [
      { label: 'Bad Review Avoided', value: '1-star' },
      { label: 'Outcome', value: '4-star instead' },
      { label: 'How', value: 'Private reply' },
    ],
    color: 'cyan',
  },
];

const colorMap: Record<string, string> = {
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  green: 'text-green-400 bg-green-500/10 border-green-500/20',
};

export default function WorkPage() {
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
          <span className="section-tag mb-6">Results</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6">
            What Tree Service Companies{' '}
            <span className="text-gradient">Actually Get</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Representative examples of what review automation looks like in practice. Every setup is tailored to your business.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bigStats.map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-space font-bold text-2xl sm:text-3xl text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">Based on typical results from tree service businesses using automated review collection.</p>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Examples</span>
            <h2 className="font-space font-bold text-3xl sm:text-4xl mt-4 text-white">
              How It Plays Out
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              These are representative scenarios — not specific client claims. Actual results vary.
            </p>
          </div>

          <div className="space-y-10">
            {examples.map((ex, i) => (
              <div key={ex.company + ex.type} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className={`relative h-60 lg:h-auto ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <img
                      src={ex.image}
                      alt={ex.type}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/80 via-transparent to-transparent" />
                    <div className={`absolute inset-0 ${i % 2 === 1 ? 'lg:bg-gradient-to-l' : 'lg:bg-gradient-to-r'} from-[#0d0d1a]/50 to-transparent`} />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {ex.tags.map((t) => (
                        <span key={t} className={`px-2.5 py-1 rounded-full border text-xs font-medium backdrop-blur-sm ${colorMap[ex.color] || colorMap.blue}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">{ex.company}</div>
                    <h3 className="font-space font-bold text-2xl text-white mb-4">{ex.type}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">{ex.description}</p>

                    <div className="mb-8">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">Typical Results</div>
                      <div className="grid grid-cols-3 gap-3">
                        {ex.results.map((r) => (
                          <div key={r.label} className="rounded-xl bg-blue-500/5 border border-blue-500/15 p-3 text-center">
                            <div className="font-space font-bold text-blue-400 text-sm mb-1">{r.value}</div>
                            <div className="text-gray-500 text-xs">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary text-sm">
                      Get This for My Business →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 text-center border-blue-500/20">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-space font-bold text-xl text-white mb-2">Currently Taking On New Clients</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Tree service companies in Michigan. Get set up in a day and start collecting reviews after your very next job.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <a href="tel:5178974843" className="btn-ghost flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (517) 897-4843
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
