'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export const CALENDLY_URL = 'https://calendly.com/williamschnelker/15-min-intro-call';
const EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1`;

type CalendlyGlobal = { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  const init = () => {
    const calendly = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
    if (calendly && ref.current && !ref.current.querySelector('iframe')) {
      calendly.initInlineWidget({ url: EMBED_URL, parentElement: ref.current });
    }
  };

  // The widget script only scans the page once, so re-init on client-side navigation.
  useEffect(init, []);

  return (
    <>
      <div ref={ref} className="w-full h-[1100px] md:h-[720px]" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" onReady={init} />
    </>
  );
}
