'use client';

import { FormEvent, useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingFormProps {
  title: string;
  pageUrl: string;
  subjectTag?: string;
  ctaLabel?: string;
}

export default function BookingForm({ title, pageUrl, subjectTag = '[Safari Enquiry]', ctaLabel = 'Send Enquiry' }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const date = data.get('date') as string;
    const guests = data.get('guests') as string;
    const message = data.get('message') as string;

    const fullUrl = typeof window !== 'undefined' ? window.location.href : pageUrl;
    const subject = `${subjectTag} ${title}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      date ? `Preferred Date: ${date}` : '',
      guests ? `Number of Guests: ${guests}` : '',
      `\nPackage: ${title}`,
      `URL: ${fullUrl}`,
      message ? `\nMessage:\n${message}` : '',
    ].filter(Boolean).join('\n');

    // Open mailto with all details
    const mailtoUrl = `mailto:info@catssafaris.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 5000);
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-6" data-booking-form>
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <p className="font-bold text-[#5c4d42] text-lg">Your email client should open now</p>
        <p className="text-stone-500 text-sm mt-2">Simply hit send to submit your enquiry. We respond within 2 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-[#a68b52] font-semibold text-sm hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-booking-form>
      <div>
        <label htmlFor="bf-name" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="bf-name"
          name="name"
          type="text"
          required
          placeholder="John Smith"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="bf-email" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="bf-email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="bf-phone" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            Phone
          </label>
          <input
            id="bf-phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm"
          />
        </div>
        <div>
          <label htmlFor="bf-guests" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            Guests
          </label>
          <input
            id="bf-guests"
            name="guests"
            type="number"
            min="1"
            max="50"
            placeholder="2"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="bf-date" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
          Preferred Travel Date
        </label>
        <input
          id="bf-date"
          name="date"
          type="date"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="bf-message" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
          Message / Special Requests
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={3}
          placeholder="Tell us about your dream safari..."
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        <Send className="w-4 h-4" />
        {status === 'sending' ? 'Opening email...' : ctaLabel}
      </button>
      <p className="text-xs text-center text-stone-400 mt-2">
        We respond to all enquiries within 2 hours
      </p>
    </form>
  );
}
