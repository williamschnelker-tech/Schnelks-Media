import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results | Schnelks Media',
  description: 'See what service-based companies get from automated Google review collection.',
};

const bigStats = [
  { value: '90%+', label: 'of Homeowners Read Reviews Before Hiring', icon: '👀' },
  { value: '30 Min', label: 'Setup Time — Running After Your Next Job', icon: '⚡' },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-white/90" style={{background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.3)'}}>Results</span>
          <h1 className="font-space font-bold text-5xl sm:text-6xl mt-4 mb-6 text-white">
            What Service-Based Companies{' '}
            <span className="text-gray-300">Actually Get</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            How automated review collection works, and what to expect as a founding client.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {bigStats.map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-space font-bold text-2xl sm:text-3xl text-slate-900 mb-1">{s.value}</div>
                <div className="text-slate-500 text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launching */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-4">Now Onboarding</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl mt-4 mb-6 text-slate-900">
            Launching in{' '}
            <span className="text-gradient">Mid-Michigan</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Schnelks Media is currently onboarding its first group of service-based clients in Michigan. Founding clients lock in launch pricing for the life of their account.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 text-center">
            <h3 className="font-space font-bold text-xl text-slate-900 mb-2">Currently Taking On New Clients</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
              Service-based companies in Michigan. Get set up in 30 minutes and start collecting reviews after your very next job.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">Get Started</Link>
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
