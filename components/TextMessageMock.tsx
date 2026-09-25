import { Stars } from '@/components/ReviewCard';

// Illustrates the flow: the text a customer receives, then the review that comes back.
export default function TextMessageMock({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-[0_20px_60px_-20px_rgba(20,22,26,0.25)]">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 text-xs text-stone-400">
          <span className="font-medium text-stone-600">Text message</span>
          <span>2:14 PM</span>
        </div>
        <div className="pt-4">
          <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-stone-100 px-4 py-3 text-[15px] leading-snug text-ink">
            Hi Sarah, thanks for choosing <span className="font-semibold">Your Business</span> today! If you have a
            minute, a quick Google review would mean a lot to us:
            <span className="mt-1 block text-pine underline underline-offset-2">g.page/r/your-review-link</span>
            <span className="mt-2 block text-xs text-stone-500">Reply STOP to opt out.</span>
          </div>
          <div className="mt-2 text-[11px] text-stone-400">Sent automatically after the job</div>
        </div>
      </div>

      <div className="relative -mt-4 ml-auto w-[85%] rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_12px_40px_-16px_rgba(20,22,26,0.3)] sm:-mr-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-stone-500">New Google review</span>
          <Stars className="w-3.5 h-3.5" />
        </div>
        <p className="mt-2 text-sm leading-snug text-ink">&ldquo;Their clean up was incredible. Highly recommend them!&rdquo;</p>
      </div>

      <p className={`mt-4 text-center text-xs ${onDark ? 'text-white/60' : 'text-stone-400'}`}>Example text. The review is a real one, from a real client&apos;s customer.</p>
    </div>
  );
}
