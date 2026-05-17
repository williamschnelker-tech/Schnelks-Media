'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const services = [
  'Paid Ads (Google / Facebook / Instagram)',
  'SEO — Get Found on Google',
  'Website Design',
  'Website Upkeep & Maintenance',
  'AI Automation',
  'Short Form Content / Social Media',
  'Drone Footage',
  'Multiple Services',
  'Not sure yet — let\'s talk',
];

const budgets = [
  'Under $1,000/month',
  '$1,000 – $3,000/month',
  '$3,000 – $7,000/month',
  '$7,000+/month',
  "I'm not sure yet",
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
        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-space font-bold text-2xl text-white mb-3">Message Received!</h3>
        <p className="text-gray-400 mb-8 max-w-sm">
          We&apos;ll review your inquiry and get back to you within 24 hours. You can also book a call directly using the calendar below.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <h2 className="font-space font-bold text-2xl text-white mb-2">Send an Inquiry</h2>
      <p className="text-gray-400 text-sm mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-400 text-xs mb-2 font-medium">
              Your Name <span className="text-blue-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 text-xs mb-2 font-medium">
              Email Address <span className="text-blue-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="business" className="block text-gray-400 text-xs mb-2 font-medium">
            Business / Brand Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            value={form.business}
            onChange={handleChange}
            placeholder="Your Company LLC"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-gray-400 text-xs mb-2 font-medium">
              Service Interested In <span className="text-blue-400">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-white/10 text-gray-100 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-600">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s} className="bg-[#0d0d1a]">{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-gray-400 text-xs mb-2 font-medium">
              Monthly Ad Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-white/10 text-gray-100 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-600">Select budget range</option>
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-[#0d0d1a]">{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-400 text-xs mb-2 font-medium">
            Tell Us About Your Business <span className="text-blue-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="What do you sell, who's your customer, what are your current challenges with marketing?"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
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
              Send Inquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-gray-600 text-xs text-center">
          By submitting this form you agree to be contacted about your inquiry. We never spam.
        </p>
      </form>
    </div>
  );
}
