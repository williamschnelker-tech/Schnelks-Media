import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Home Service Businesses Served' },
  { value: '3.8x', label: 'Average Return on Ad Spend' },
  { value: '#1', label: 'Local Google Rankings Achieved' },
  { value: '98%', label: 'Client Retention Rate' },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Paid Ads',
    description: 'Google, Facebook, and Instagram campaigns that put your business in front of homeowners actively searching for roofing and landscaping services.',
    href: '/services#ads',
    tag: 'Google · Facebook · Instagram',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO',
    description: 'Get to the top of Google when homeowners search "roofing company near me." Organic leads that cost nothing per click.',
    href: '/services#seo',
    tag: 'Local SEO · Google Rankings',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Design',
    description: 'Professional, mobile-first websites built to convert visitors into booked jobs. Fast, clean, and designed for home service companies.',
    href: '/services#web',
    tag: 'Design · Development · SEO-Ready',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Website Upkeep',
    description: 'We keep your website fast, secure, and up to date every month so it keeps bringing in leads while you focus on the work.',
    href: '/services#upkeep',
    tag: 'Maintenance · Updates · Security',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Automation',
    description: 'Automated follow-up texts, lead notifications, and reminders so no lead falls through the cracks while you\'re on the job.',
    href: '/services#ai',
    tag: 'Follow-Up · Workflows · Chatbots',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Content & Drone',
    description: 'Short-form video content for social media plus aerial drone footage of completed jobs — available as an optional add-on.',
    href: '/services#content',
    tag: 'Short-Form Video · Drone · Social',
  },
];

const niches = [
  {
    title: 'Roofing Companies',
    image: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&auto=format&fit=crop&q=80',
    points: [
      'Rank #1 when homeowners search "roof repair near me"',
      'Google Ads that bring in storm damage & replacement leads',
      'Drone footage of completed jobs as proof of work',
      'Automated follow-up so no estimate request goes cold',
    ],
  },
  {
    title: 'Landscaping Companies',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    points: [
      'Show up first when people search for lawn care in your area',
      'Facebook & Instagram ads targeting local homeowners',
      'A website that books consultations automatically',
      'Seasonal campaign planning to keep your schedule full',
    ],
  },
];

const websitePreviews = [
  {
    name: 'Michigan Roofing Pro',
    niche: 'Roofing Company',
    image: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=900&auto=format&fit=crop&q=80',
    tags: ['Website Design', 'Google Ads', 'SEO'],
    result: '+312% leads',
  },
  {
    name: 'GreenEdge Landscaping',
    niche: 'Landscaping Company',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&auto=format&fit=crop&q=80',
    tags: ['Website Design', 'SEO', 'Paid Ads'],
    result: '5x more bookings',
  },
  {
    name: 'Apex Home Services',
    niche: 'Home Services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    tags: ['Website Upkeep', 'AI Automation'],
    result: '4.7x ROAS',
  },
];

const testimonials = [
  {
    quote: "Our phone started ringing within the first week of the Google Ads going live. We booked 3 new roofing jobs from it in the first month.",
    author: 'Jordan T.',
    role: 'Owner, Michigan Roofing Company',
    avatar: 'JT',
  },
  {
    quote: "We went from zero online presence to ranking on the first page of Google in our area. Homeowners find us now without us spending on ads.",
    author: 'Marcus R.',
    role: 'Owner, Landscaping Company',
    avatar: 'MR',
  },
  {
    quote: "The automated follow-up texts alone changed our business. Leads that used to go cold started booking. It pays for itself every month.",
    author: 'Dana M.',
    role: 'Operations Manager, Home Services',
    avatar: 'DM',
  },
];

const whyUs = [
  { title: 'We Know Your Industry', description: 'We understand what homeowners search for when they need a roofer or landscaper — and we build everything around that.' },
  { title: 'No Long-Term Contracts', description: 'Month-to-month on everything. We keep clients by getting results, not by locking them in.' },
  { title: 'One Point of Contact', description: 'No account managers, no getting passed around. You deal directly with the person doing the work.' },
  { title: 'Everything Is Transparent', description: 'Clear reports that show exactly what your money is doing. No confusing dashboards, no hidden numbers.' },
  { title: 'Built for Michigan Businesses', description: 'Michigan-based and we know the market — seasonal trends, local competition, regional search behavior.' },
  { title: 'Full-Service Online Presence', description: 'From ads to SEO to your website to AI automation — we handle every part so nothing falls through the cracks.' },
];

export default function Home() {
  return (
    <>
      {/* Hero — aerial neighborhood photo background */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(4,9,26,0.75) 0%, rgba(4,9,26,0.85) 60%, rgba(4,9,26,1) 100%), url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-8" style={{background: 'rgba(245,158,11,0.1)'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Built for Roofers & Landscapers in Michigan
          </div>

          <h1 className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            More Leads.{' '}
            <span className="text-gradient">Better Rankings.</span>
            <br className="hidden sm:block" />
            {' '}Less Stress.
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Schnelks Media helps roofing and landscaping companies in Michigan dominate online — with paid ads, SEO, professional websites, and AI automation that keeps leads coming in while you focus on the work.
          </p>

          <p className="text-amber-400/80 text-sm mb-10 font-medium">
            Want to see what your website could look like?{' '}
            <Link href="/work" className="underline underline-offset-2 hover:text-amber-300 transition-colors">
              View our portfolio →
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Free Strategy Call
            </Link>
            <Link href="/work" className="btn-ghost text-base px-8 py-4 flex items-center gap-2">
              See Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-sm" style={{background: 'rgba(10,21,48,0.7)', border: '1px solid rgba(245,158,11,0.15)'}}>
                <span className="font-space font-bold text-xl text-amber-400">{s.value}</span>
                <span className="text-gray-400 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#04091a] to-transparent pointer-events-none" />
      </section>

      {/* Who We Serve — roofing photo background */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,9,26,0.88), rgba(4,9,26,0.92)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Who We Serve</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 mb-4">
              We Specialize in{' '}
              <span className="text-gradient">Home Service Businesses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We don&apos;t work with everyone. We focus on roofing and landscaping companies in Michigan because we know this industry — and that focus means better results for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {niches.map((n) => (
              <div key={n.title} className="card overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1530] via-[#0a1530]/50 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="font-space font-bold text-2xl text-white">{n.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {n.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="btn-primary text-sm">Get a Free Strategy →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{background: '#070e22'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">What We Offer</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 mb-4">
              Everything You Need to{' '}
              <span className="text-gradient">Win Online</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              From getting found on Google to following up with leads automatically — we handle your entire online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card p-6 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform" style={{background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)'}}>
                  {s.icon}
                </div>
                <div className="text-xs text-amber-400/70 font-medium mb-2 tracking-wide">{s.tag}</div>
                <h3 className="font-space font-bold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                <div className="flex items-center gap-1 mt-4 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Review Automation */}
      <section className="py-24" style={{background: '#04091a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14" style={{background: 'rgba(10,21,48,0.8)', border: '1px solid rgba(245,158,11,0.2)'}}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(245,158,11,0.06)'}} />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-tag mb-6">Review Automation</span>
                <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 mb-6">
                  More Google Reviews.{' '}
                  <span className="text-gradient">Zero Extra Work.</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Schnelks Media builds and operates SMS-based review automation systems for local service businesses. After your team completes a job, our system automatically texts the customer to request a Google review — boosting your online reputation without any extra work on your end.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  All messages comply with Google&apos;s review policies, TCPA, and carrier A2P 10DLC requirements.
                </p>
                <Link href="/contact" className="btn-primary">See How It Works →</Link>
              </div>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Job is Completed', desc: 'Your team finishes the job and logs it in the system.' },
                  { step: '02', title: 'Customer Gets a Text', desc: 'Our system sends a friendly SMS with a direct link to leave a Google review.' },
                  { step: '03', title: 'Reviews Roll In', desc: 'Customers click, leave a review, and your rating climbs — automatically.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 card p-5">
                    <div className="font-space font-bold text-amber-400 text-lg shrink-0 w-8">{item.step}</div>
                    <div>
                      <div className="font-space font-semibold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
                <p className="text-gray-600 text-xs px-1">
                  Recipients can opt out at any time by replying STOP. Standard message and data rates may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner — landscaping photo */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,9,26,0.82), rgba(4,9,26,0.82)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 border-y border-amber-500/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-space font-bold text-4xl sm:text-5xl text-amber-400 mb-2">{s.value}</div>
                <div className="text-gray-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Previews */}
      <section className="py-24" style={{background: '#04091a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-6">
            <div>
              <span className="section-tag mb-4">Portfolio</span>
              <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
                See What Your{' '}
                <span className="text-gradient">Website Could Look Like</span>
              </h2>
            </div>
            <Link href="/work" className="btn-ghost shrink-0">View All Work →</Link>
          </div>
          <p className="text-gray-400 mb-12 max-w-xl">Every site we build is custom to your business, fast on mobile, and designed to turn visitors into booked jobs.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {websitePreviews.map((w) => (
              <div key={w.name} className="card overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img src={w.image} alt={w.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1530] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {w.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm" style={{background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.3)', color: '#fcd34d'}}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="font-space font-bold text-xl text-amber-400">{w.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-1">{w.niche}</div>
                  <h3 className="font-space font-bold text-white text-lg">{w.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm mb-4">Want to see a mock-up of what we&apos;d build for your company?</p>
            <Link href="/contact" className="btn-primary">Request a Free Website Preview →</Link>
          </div>
        </div>
      </section>

      {/* Why Us — dark professional photo */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,9,26,0.90), rgba(4,9,26,0.90)), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Why Schnelks Media</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              Why Home Service Companies{' '}
              <span className="text-gradient">Choose Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="card p-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-amber-400 mb-4" style={{background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)'}}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-white text-base mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{background: '#070e22'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Testimonials</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              What Clients Are{' '}
              <span className="text-gradient">Saying</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="card p-8">
                <div className="text-amber-400/40 text-6xl font-serif leading-none mb-4 font-bold">&ldquo;</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-amber-400 text-xs font-bold" style={{background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)'}}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.author}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — aerial Michigan photo */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,9,26,0.88), rgba(4,9,26,0.88)), url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-12 text-center" style={{background: 'rgba(10,21,48,0.8)', border: '1px solid rgba(245,158,11,0.2)'}}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(245,158,11,0.12)'}} />
            <div className="relative">
              <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
                Ready to Get More Leads?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4">
                Book a free 30-minute strategy call. We&apos;ll look at your current online presence, show you where you&apos;re missing leads, and tell you exactly what we&apos;d do to fix it.
              </p>
              <p className="text-gray-500 text-sm mb-10">No contracts. No pressure. Just a real conversation.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-base px-10 py-4 glow-gold">
                  Book a Free Strategy Call
                </Link>
                <Link href="/services" className="btn-ghost text-base px-8 py-4">
                  See All Services
                </Link>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="tel:5178974843" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (517) 897-4843
                </a>
                <a href="mailto:williamschnelker@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  williamschnelker@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
