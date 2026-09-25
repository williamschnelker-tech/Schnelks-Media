import Link from 'next/link';
import type { Metadata } from 'next';
import ReviewCard from '@/components/ReviewCard';
import { reviews } from '@/lib/reviews';

export const metadata: Metadata = {
  title: 'Results | Schnelks Media',
  description: 'Real Google reviews left by customers of Michigan tree service companies that have used Schnelks Media.',
};

const companies = Array.from(new Set(reviews.map((r) => r.company)));

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-medium text-pine">Results</p>
          <h1 className="max-w-3xl font-space text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Real reviews, left by real customers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Every review below was left on Google by a customer of a company we&apos;ve worked with, after they got our review
            text. Nothing is edited. Last names are shortened for privacy.
          </p>
        </div>
      </section>

      {/* Reviews by company */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-8">
          {companies.map((company) => {
            const companyReviews = reviews.filter((r) => r.company === company);
            return (
              <div key={company} className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
                <div>
                  <h2 className="font-space text-2xl font-bold text-ink">{company}</h2>
                  <p className="mt-2 text-stone-600">Tree service · Michigan</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {companyReviews.map((r) => (
                    <ReviewCard
                      key={r.name}
                      review={r}
                      className={companyReviews.length === 1 || (r.text && r.text.length > 300) ? 'md:col-span-2' : ''}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-paper py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-space text-3xl font-bold tracking-tight text-ink sm:text-4xl">Want reviews like these?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
            Setup takes about 30 minutes, and the texts start going out after your next job.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#book" className="rounded-xl bg-ink px-7 py-3.5 font-semibold text-white transition-colors hover:bg-pine">
              Book a free 15-min call
            </Link>
            <a href="tel:5178974843" className="px-5 py-3.5 font-semibold text-ink underline-offset-4 hover:underline">
              or call (517) 897-4843
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
