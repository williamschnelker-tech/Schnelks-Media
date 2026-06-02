'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const services = [
  'Review Automation',
  'Google Ads',
  'Meta Ads (Facebook / Instagram)',
  'Review Automation + Ads',
  "Not sure yet — let's talk",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', business: '', service: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-space font-bold text-2xl text-slate-900 mb-3">Message Received!</h3>
        <p className="text-slate-500 mb-8 max-w-sm">
          We&apos;ll get back to you within one business day.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-ghost text-sm">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <h2 className="font-space font-bold text-2xl text-slate-900 mb-2">Send a Message</h2>
      <p className="text-slate-500 text-sm mb-8">We&apos;ll get back to you within one business day.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-slate-600 text-xs mb-2 font-medium">
              Your Name <span className="text-green-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-600 text-xs mb-2 font-medium">
              Email Address <span className="text-green-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="business" className="block text-slate-600 text-xs mb-2 font-medium">
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            value={form.business}
            onChange={handleChange}
            placeholder="Your Tree Service LLC"
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-slate-600 text-xs mb-2 font-medium">
            What are you interested in? <span className="text-green-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-slate-600 text-xs mb-2 font-medium">
            Tell Us About Your Business <span className="text-green-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="How many jobs do you do per week? What's your current Google rating? Anything else we should know?"
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition-all resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Something went wrong. Please try again or email us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-slate-400 text-xs text-center">
          By submitting this form you agree to be contacted about your inquiry. We never spam.
        </p>
      </form>
    </div>
  );
}
