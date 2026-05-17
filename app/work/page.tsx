import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Schnelks Media',
  description: 'See the type of work we do for roofing and landscaping companies in Michigan — websites, ads, SEO, and more.',
};

const bigStats = [
  { value: '3.8x', label: 'Avg Return on Ad Spend for Home Services', icon: '📈' },
  { value: '60%', label: 'Average Reduction in Cost Per Lead', icon: '💰' },
  { value: 'Page 1', label: 'Google Rankings We Target for Local SEO', icon: '🔍' },
  { value: '< 60s', label: 'Lead Response Time With AI Automation', icon: '⚡' },
];

const examples = [
  {
    company: 'Example: Roofing Company',
    type: 'Google Ads Campaign',
    image: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=900&auto=format&fit=crop&q=80',
    description: 'A roofing company with no online presence runs Google Search Ads targeting homeowners searching for roof repair and replacement in their area. Calls start coming in within the first week.',
    tags: ['Google Ads', 'Roofing'],
    results: [
      { label: 'Monthly Leads', value: '30–50+' },
      { label: 'Cost Per Lead', value: '$40–$65' },
      { label: 'Timeline to Launch', value: '7–10 Days' },
    ],
    color: 'blue',
  },
  {
    company: 'Example: Landscaping Company',
    type: 'Website Design + SEO',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&auto=format&fit=crop&q=80',
    description: 'A landscaping company with an outdated website gets a full redesign — fast, mobile-first, and SEO-optimized. Within a few months they\'re showing up on page 1 for searches in their service area.',
    tags: ['Website Design', 'SEO', 'Landscaping'],
    results: [
      { label: 'Google Ranking', value: 'Page 1 (local)' },
      { label: 'Organic Monthly Leads', value: '15–25+' },
      { label: 'Website Load Time', value: 'Under 2.5s' },
    ],
    color: 'green',
  },
  {
    company: 'Example: Roofing Company',
    type: 'AI Lead Follow-Up Automation',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=80',
    description: 'A roofer getting leads but losing them because he\'s on jobs all day. We set up automated texts that go out within 60 seconds of a new inquiry — so every lead gets a response before they call the next guy.',
    tags: ['AI Automation', 'Roofing'],
    results: [
      { label: 'Response Time', value: 'Under 60 Seconds' },
      { label: 'Quote-to-Close Lift', value: '+20–30%' },
      { label: 'Setup Time', value: '3–5 Days' },
    ],
    color: 'cyan',
  },
  {
    company: 'Example: Landscaping Company',
    type: 'Google Ads + Website Combo',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80',
    description: 'A landscaping company starting from scratch — no website, no ads. We build the site in two weeks and launch Google Ads immediately so leads start coming in while SEO builds up in the background.',
    tags: ['Google Ads', 'Website Design', 'Landscaping'],
    results: [
      { label: 'Week 1 Leads', value: '8–15' },
      { label: 'Website Live In', value: '2 Weeks' },
      { label: 'First Month Booked Jobs', value: '5–12' },
    ],
    color: 'blue',
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
          <span className="section-tag mb-6">Our Work</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6">
            What We Build &amp;{' '}
            <span className="text-gradient">What It Gets You</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here&apos;s the type of work we do for roofing and landscaping companies — and the kind of results you can expect. Every campaign and website is custom built around your business.
          </p>
        </div>
      </section>

      {/* Industry Stats */}
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
          <p className="text-center text-gray-600 text-xs mt-4">Industry benchmarks for home service businesses running paid ads and SEO.</p>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Example Campaigns</span>
            <h2 className="font-space font-bold text-3xl sm:text-4xl mt-4 text-white">
              The Type of Work We Do
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              These are representative examples of campaigns and builds — not specific client claims. Every project is tailored to the business.
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

                    {/* Results */}
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

      {/* New clients callout */}
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
              We&apos;re actively working with roofing and landscaping companies in Michigan. Book a free call and we&apos;ll show you exactly what we&apos;d build for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Strategy Call
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
