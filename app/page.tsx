import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import TextMessageMock from '@/components/TextMessageMock';
import { reviews } from '@/lib/reviews';

const steps = [
  {
    title: 'You finish the job.',
    desc: "Add the customer's name and phone number. That's the only thing on your end.",
  },
  {
    title: 'They get one friendly text.',
    desc: "A short message with a direct link to your Google review page. If they don't answer, one polite reminder goes out a day or two later. Then it stops.",
  },
  {
    title: 'The review lands on Google.',
    desc: "Happy customers leave a review while the job is still fresh. If someone isn't happy and replies, it comes to you privately so you can make it right.",
  },
];

const details = [
  'Setup takes about 30 minutes',
  'Month to month, cancel anytime',
  'Every text includes a STOP opt-out',
  'We never ask for only good reviews',
  "Follows Google's review policies, TCPA, and A2P 10DLC",
  'Built for tree, lawn, roofing, and other home service companies',
];

export default function Home() {
  const [lily, rory, shawn] = reviews;

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <p className="mb-5 text-sm font-medium text-pine">Google reviews for home service companies · Okemos, MI</p>
            <h1 className="font-space text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Turn finished jobs into Google reviews.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              After every job, your customer gets one friendly text with a link to review you on Google. No apps, no
              chasing people down. You keep working and the reviews come in.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact#book" className="rounded-xl bg-ink px-7 py-3.5 text-center font-semibold text-white transition-colors hover:bg-pine">
                Book a free 15-min call
              </Link>
              <a href="tel:5178974843" className="rounded-xl px-5 py-3.5 text-center font-semibold text-ink underline-offset-4 hover:underline">
                or call (517) 897-4843
              </a>
            </div>
          </div>
          <TextMessageMock />
        </div>
      </section>

      {/* Real reviews */}
      <section className="border-t border-stone-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-space text-3xl font-bold tracking-tight text-ink sm:text-4xl">Real reviews from real jobs.</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              These came from customers of Michigan tree companies we&apos;ve worked with, after they got our text.
              Word for word, straight from Google.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
            <ReviewCard review={lily} className="lg:col-span-3" />
            <div className="flex flex-col gap-5 lg:col-span-2">
              <ReviewCard review={rory} />
              <ReviewCard review={shawn} />
            </div>
          </div>
          <Link href="/work" className="mt-8 inline-block font-semibold text-pine underline-offset-4 hover:underline">
            See all results →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <h2 className="font-space text-3xl font-bold tracking-tight text-ink sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Most happy customers would leave a review. They just forget. A text right after the job fixes that.
            </p>
          </div>
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-6">
                <span className="font-space text-lg font-bold text-pine">{i + 1}</span>
                <div className="border-b border-stone-200 pb-10">
                  <h3 className="font-space text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About + details */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <h2 className="font-space text-3xl font-bold tracking-tight text-ink sm:text-4xl">Hi, I&apos;m Will.</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                I run Schnelks Media out of Okemos, Michigan. I work with a small number of home service companies,
                set everything up for you, and I&apos;m the one who picks up when you call.
              </p>
              <p>
                Need more than reviews? I also build websites and run local ads.{' '}
                <Link href="/services" className="font-semibold text-pine underline-offset-4 hover:underline">
                  See services
                </Link>
                .
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">The details</h3>
            <ul className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
              {details.map((d) => (
                <li key={d} className="flex items-start gap-3 py-3.5 text-ink">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-space text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to see if it fits your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            It&apos;s a 15-minute phone call. No pressure. Companies that sign on now keep launch pricing for as long as
            they stay.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#book" className="rounded-xl bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-paper">
              Book a free call
            </Link>
            <a href="tel:5178974843" className="px-5 py-3.5 font-semibold text-white underline-offset-4 hover:underline">
              (517) 897-4843
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
