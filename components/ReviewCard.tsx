import type { Review } from '@/lib/reviews';

export function Stars({ count = 5, className = 'w-4 h-4' }: { count?: number; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${className} ${i < count ? 'text-star' : 'text-stone-200'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 00-.36-1.12L1.75 9.61c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69l1.36-4.18z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, className = '' }: { review: Review; className?: string }) {
  return (
    <figure className={`flex flex-col rounded-2xl border border-stone-200 bg-white p-6 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-semibold text-white">
          {review.name[0]}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-ink">{review.name}</div>
          <div className="text-xs text-stone-500">Google review</div>
        </div>
      </div>
      <div className="mt-4">
        <Stars count={review.rating} />
      </div>
      {review.text ? (
        <blockquote className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-stone-700">{review.text}</blockquote>
      ) : (
        <p className="mt-3 text-sm italic text-stone-400">Left a 5-star rating.</p>
      )}
      <figcaption className="mt-auto pt-5 text-xs text-stone-500">
        For <span className="font-medium text-ink">{review.company}</span>
        {review.service && <> · {review.service}</>}
      </figcaption>
    </figure>
  );
}
