import Link from 'next/link';

const stats = [
  { value: '4.9★', label: 'Average Client Rating After 90 Days' },
  { value: '2–3x', label: 'More Reviews Per Month' },
  { value: '1 Text', label: 'All It Takes After Every Job' },
  { value: '100%', label: 'TCPA & Google Policy Compliant' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Job Gets Completed',
    desc: 'Your crew finishes the job. You log the customer in the system — name and phone number, that\'s it.',
  },
  {
    step: '02',
    title: 'Customer Gets a Text',
    desc: 'Our system automatically sends a friendly SMS asking them to leave a Google review, with a direct link.',
  },
  {
    step: '03',
    title: 'Optional Follow-Up',
    desc: 'If they don\'t respond in a day or two, they get one polite follow-up. Then it stops.',
  },
  {
    step: '04',
    title: 'Reviews Roll In',
    desc: 'Your Google rating climbs. New customers find you, trust you, and call you instead of a competitor.',
  },
];

const whyReviews = [
  { title: 'Reviews Drive Local Rankings', description: 'Google uses your review count and rating as a local ranking signal. More reviews = higher placement in map results.' },
  { title: 'Customers Read Before Calling', description: 'Over 90% of homeowners check reviews before hiring a tree service. A strong rating closes the deal before you ever pick up the phone.' },
  { title: 'Most Satisfied Customers Don\'t Leave Reviews', description: 'Happy customers forget. An automated text right after the job is the most effective way to convert satisfied customers into 5-star reviews.' },
  { title: 'Fully Automated — No Extra Work', description: 'You don\'t have to remember to ask, send anything, or follow up. The system handles it while you\'re on to the next job.' },
  { title: 'Carrier & Google Compliant', description: 'All messages meet Google\'s review policies, TCPA requirements, and A2P 10DLC carrier standards. No shortcuts.' },
  { title: 'Private Feedback Stays Private', description: 'If a customer isn\'t happy, they can reply directly to the message — we forward it to you privately so it never becomes a public 1-star.' },
];

const testimonials = [
  {
    quote: "We went from 12 Google reviews to 47 in about two months. I didn't change anything — customers just started texting me back saying they left one.",
    author: 'Mike T.',
    role: 'Owner, Tree Service — Mid-Michigan',
    avatar: 'MT',
  },
  {
    quote: "I used to ask every customer in person and maybe 1 in 10 would actually do it. Now it just happens automatically. Wish I had this sooner.",
    author: 'Jason R.',
    role: 'Owner, Tree & Stump Removal',
    avatar: 'JR',
  },
  {
    quote: "Our rating went from 4.1 to 4.8. We're getting calls now from people who say they found us on Google and liked our reviews. That didn't happen before.",
    author: 'Dave M.',
    role: 'Owner, Full-Service Tree Care',
    avatar: 'DM',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(4,9,26,0.75) 0%, rgba(4,9,26,0.85) 60%, rgba(4,9,26,1) 100%), url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&auto=format&fit=crop&q=80")',
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
            Built for Tree Service Companies
          </div>

          <h1 className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            More Google Reviews.{' '}
            <span className="text-gradient">On Autopilot.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Schnelks Media automates Google review collection for tree service companies. After every completed job, your customer automatically gets a text asking for a review — so your rating climbs while you focus on the work.
          </p>

          <p className="text-amber-400/80 text-sm mb-10 font-medium">
            All messages comply with Google&apos;s review policies, TCPA, and A2P 10DLC carrier requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Started Free
            </Link>
            <Link href="/services" className="btn-ghost text-base px-8 py-4 flex items-center gap-2">
              See How It Works
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

      {/* How It Works */}
      <section className="py-24" style={{background: '#070e22'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">How It Works</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 mb-4">
              Set Up Once.{' '}
              <span className="text-gradient">Works Every Job.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              You do the tree work. We handle the review collection. Here&apos;s the whole process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="card p-6">
                <div className="font-space font-bold text-4xl text-amber-400/20 mb-4">{item.step}</div>
                <h3 className="font-space font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
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
            <span className="section-tag mb-4">Why It Matters</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              Why Tree Service Companies{' '}
              <span className="text-gradient">Need More Reviews</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReviews.map((w) => (
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
            <span className="section-tag mb-4">Results</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4">
              What Tree Service Owners{' '}
              <span className="text-gradient">Are Saying</span>
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

      {/* CTA */}
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
                Ready to Start Getting More Reviews?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4">
                Get set up in a day. After that, every job you complete is another review request sent automatically.
              </p>
              <p className="text-gray-500 text-sm mb-10">No contracts. No extra work on your end.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-base px-10 py-4 glow-gold">
                  Get Started
                </Link>
                <Link href="/services" className="btn-ghost text-base px-8 py-4">
                  Learn More
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
