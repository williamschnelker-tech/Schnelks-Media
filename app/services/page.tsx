import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Schnelks Media',
  description: 'Paid ads, SEO, website design, website upkeep, AI automation, and content creation for roofing and landscaping companies in Michigan.',
};

const services = [
  {
    id: 'ads',
    badge: 'Paid Ads',
    headline: 'Get in Front of Homeowners Who Are Ready to Buy',
    description:
      'When a homeowner needs a new roof or wants their yard redone, they go straight to Google or scroll through Facebook and Instagram. Paid ads put your business at the top of that search — before your competitors. We run campaigns on Google, Facebook, and Instagram designed to bring in real quote requests, not just clicks.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Paid advertising dashboard',
    deliverables: [
      'Google Search Ads — show up when people search your services',
      'Facebook & Instagram Ads — reach homeowners in your area',
      'Campaign setup, targeting, and ongoing management',
      'Ad creative direction (copy, imagery, targeting)',
      'Conversion tracking so you know exactly where leads come from',
      'Weekly performance reports in plain English',
      'Budget management — no wasted spend',
    ],
    stat1: { value: '3.8x', label: 'Average ROAS' },
    stat2: { value: '58%', label: 'Lower Cost Per Lead' },
    note: 'Currently focused on Google Ads. Facebook & Instagram campaigns available — ask about availability.',
  },
  {
    id: 'seo',
    badge: 'SEO',
    headline: 'Show Up on Google Without Paying for Every Click',
    description:
      'When someone in your area searches "roofing company near me" or "landscaper in Michigan," you want your business at the top. That\'s what SEO does — it gets you ranking organically so homeowners find you first, without you spending money on ads every single time. It takes a few months to kick in, but once it does, it brings in leads on autopilot.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'SEO and Google rankings',
    deliverables: [
      'Local SEO setup — Google Business Profile optimization',
      'Keyword research for your specific services & location',
      'On-page SEO — titles, descriptions, structure',
      'Location pages for the cities/areas you serve',
      'Review generation strategy to boost local rankings',
      'Monthly reporting showing ranking improvements',
      'Content that helps Google understand what you do',
    ],
    stat1: { value: '#1', label: 'Local Rankings Hit' },
    stat2: { value: '6mo', label: 'Avg Time to See Results' },
    note: null,
  },
  {
    id: 'web',
    badge: 'Website Design',
    headline: 'A Website That Makes Your Business Look Like the Best Option',
    description:
      'Most roofing and landscaping websites are outdated, slow, and don\'t convert. We build fast, professional, mobile-first websites that make your company look like the obvious choice — and are built to turn visitors into quote requests. Want to see what yours could look like before you commit? Just ask for a free preview.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Website design for home services',
    deliverables: [
      'Custom design built around your brand and services',
      'Mobile-first — looks perfect on every phone',
      'Fast load times (Google rewards this with better rankings)',
      'Clear calls-to-action — quote forms, click-to-call buttons',
      'SEO-optimized from day one',
      'Gallery pages to showcase your past work',
      'Google Analytics and ad tracking setup included',
    ],
    stat1: { value: '+40%', label: 'More Quote Requests' },
    stat2: { value: '2.4s', label: 'Avg Load Time' },
    note: 'Ask about a free website preview — we\'ll show you a mock-up before you commit.',
  },
  {
    id: 'upkeep',
    badge: 'Website Upkeep',
    headline: 'Your Website, Running Perfectly Every Month',
    description:
      'You\'re busy running jobs — you shouldn\'t have to worry about whether your website is broken, slow, or out of date. We handle all of it. Security updates, plugin maintenance, content changes, performance monitoring. If something breaks, we fix it before you even notice. Monthly plans, no long-term contracts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Website maintenance and upkeep',
    deliverables: [
      'Monthly software, plugin & CMS updates',
      'Security monitoring and malware protection',
      'Performance and speed checks',
      'Content updates — new photos, service pages, pricing changes',
      'Uptime monitoring — we know before you do if something goes down',
      'Backup management',
      'Monthly health report',
    ],
    stat1: { value: '99.9%', label: 'Uptime Rate' },
    stat2: { value: '8hrs', label: 'Saved Per Month' },
    note: null,
  },
  {
    id: 'ai',
    badge: 'AI Automation',
    headline: 'Stop Losing Leads Because You Were Busy on a Job',
    description:
      'You get a lead request at 2pm while you\'re on a roof. By the time you get back to it at 6pm, they\'ve already called someone else. AI automation fixes that. We set up automated follow-up texts, lead notifications, appointment reminders, and more — so every lead gets responded to instantly, even when you\'re not at your phone.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'AI automation and workflows',
    deliverables: [
      'Instant automated text/email follow-up when a lead comes in',
      'Appointment reminder sequences',
      'AI chatbot for your website to capture leads 24/7',
      'Lead notification system so you never miss an inquiry',
      'Estimate follow-up sequences for leads that go quiet',
      'CRM and tool integrations',
      'Setup, training, and ongoing support',
    ],
    stat1: { value: '10hrs', label: 'Saved Per Week' },
    stat2: { value: '3x', label: 'Faster Lead Response' },
    note: null,
  },
  {
    id: 'content',
    badge: 'Content & Drone — Add-On',
    headline: 'Short-Form Video and Aerial Footage That Sells Your Work',
    description:
      'Nothing builds trust faster than showing your actual work. Short-form video content for Instagram and TikTok keeps your business top-of-mind in your local area. And for roofing and landscaping companies, aerial drone footage of a completed job is one of the most powerful selling tools out there — homeowners can see the full scope of the work in a way ground photos never show. This is an optional add-on available to clients who want it.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Drone footage for roofing and landscaping',
    deliverables: [
      'Short-form video content for Instagram, TikTok & Facebook',
      'Aerial drone footage of completed roofing and landscaping jobs',
      'Before & after video edits — high-converting social proof',
      'Monthly content calendar and posting schedule',
      'Captions and hashtag strategy',
      'Repurposing footage across platforms',
    ],
    stat1: { value: '4x', label: 'More Engagement' },
    stat2: { value: '10k+', label: 'Local Views Achieved' },
    note: 'Drone footage requires scheduling a site visit. Available in Michigan. Ask about availability.',
  },
];

const process = [
  {
    step: '01',
    title: 'Free Strategy Call',
    description: 'We look at your current online presence, figure out where you\'re missing leads, and tell you exactly what we\'d do to fix it.',
  },
  {
    step: '02',
    title: 'Custom Plan',
    description: 'No one-size-fits-all packages. We build a plan around your business, your goals, and your budget.',
  },
  {
    step: '03',
    title: 'Fast Launch',
    description: 'We move fast. Most campaigns and websites are live within 1–2 weeks of getting started.',
  },
  {
    step: '04',
    title: 'Results + Reports',
    description: 'You get regular updates and clear reports. Real numbers, plain English — you always know what\'s happening.',
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
            Everything You Need to{' '}
            <span className="text-gradient">Dominate Online</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Six services built specifically for roofing and landscaping companies. Use one, use all — we build a plan that fits where you&apos;re at.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Paid Ads', 'SEO', 'Website Design', 'Website Upkeep', 'AI Automation', 'Content & Drone'].map((s) => (
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
            <span className="section-tag mb-4">How It Works</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              Simple Process,{' '}
              <span className="text-gradient">Real Results</span>
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
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Book a free call. We&apos;ll look at your current online presence, tell you exactly what&apos;s missing, and put together a plan — no pressure, no pitch.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Or reach out directly:{' '}
            <a href="tel:5178974843" className="text-blue-400 hover:text-blue-300">(517) 897-4843</a>
            {' '}·{' '}
            <a href="mailto:williamschnelker@gmail.com" className="text-blue-400 hover:text-blue-300">williamschnelker@gmail.com</a>
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4 glow-blue">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}