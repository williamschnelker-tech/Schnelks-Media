import Link from 'next/link';

const links = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Results', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'SMS Terms', href: '/sms-terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #16a34a, #15803d)'}}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-space font-bold text-lg">
                <span className="text-slate-900">Schnelks</span>
                <span className="text-green-600">Media</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Automated Google review collection for tree service companies. Set up once, works after every job.
            </p>
            <div className="mt-4 space-y-2">
              <a href="tel:5178974843" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors">
                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (517) 897-4843
              </a>
              <a href="mailto:williamschnelker@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors">
                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                williamschnelker@gmail.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-slate-900 font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Schnelks Media (William Schnelker LLC). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sms-terms" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
              SMS Terms
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
