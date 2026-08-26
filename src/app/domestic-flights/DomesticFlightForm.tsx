'use client';

import { FormEvent, useState } from 'react';

export default function DomesticFlightForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const labels = ['name', 'email', 'phone', 'from', 'destination', 'dates', 'passengers', 'class', 'message'];
    const body = labels.map((label) => `${label[0].toUpperCase()}${label.slice(1)}: ${form.get(label) || ''}`).join('\n');
    window.location.href = `mailto:info@catssafaris.com?subject=${encodeURIComponent('[C.A.T.S Website] Bush flight enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const inputClass = 'mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 font-normal focus:border-[var(--golden-savannah)] focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]/20';
  return <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-semibold text-stone-700">Name<input required name="name" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Email<input required type="email" name="email" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Phone<input required type="tel" name="phone" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">From<input required name="from" placeholder="Nairobi or airstrip" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Destination<input required name="destination" placeholder="Camp or airstrip" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Travel dates<input required name="dates" placeholder="Preferred dates" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Passengers<input required type="number" min="1" name="passengers" className={inputClass} /></label>
    <label className="text-sm font-semibold text-stone-700">Class<select name="class" className={inputClass}><option>Economy</option><option>Business</option><option>Private charter</option></select></label>
  </div><label className="mt-5 block text-sm font-semibold text-stone-700">Additional details<textarea name="message" rows={5} className={inputClass} placeholder="Tell us about your safari itinerary or luggage needs" /></label><button type="submit" className="mt-5 rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Request flight options</button>{sent && <p className="mt-4 text-sm text-[var(--forest-canopy)]" role="status">Your email application should open with the booking enquiry ready to send.</p>}</form>;
}
