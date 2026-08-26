'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get('subject') || 'Safari enquiry');
    const body = ['Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Phone: ' + data.get('phone'), 'Subject: ' + subject, '', 'Message:', data.get('message')].join('\n');
    window.location.href = `mailto:info@catssafaris.com?subject=${encodeURIComponent('[C.A.T.S Website] ' + subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-stone-700">Name<input required name="name" type="text" className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20" /></label>
      <label className="text-sm font-semibold text-stone-700">Email<input required name="email" type="email" className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20" /></label>
      <label className="text-sm font-semibold text-stone-700">Phone<input name="phone" type="tel" className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20" /></label>
      <label className="text-sm font-semibold text-stone-700">Subject<input required name="subject" type="text" className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20" /></label>
    </div>
    <label className="block text-sm font-semibold text-stone-700">Message<textarea required name="message" rows={6} className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20" /></label>
    <button type="submit" className="rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-lg">Open email to send</button>
    {sent && <p className="text-sm text-[var(--forest-canopy)]" role="status">Your email application should open with the enquiry ready to send.</p>}
  </form>;
}
