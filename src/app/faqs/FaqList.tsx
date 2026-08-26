'use client';

import { useState } from 'react';

const questions = [
  ['When is the best time to go on safari?', 'East Africa is a year-round destination. The dry seasons are popular for clear weather and wildlife around water, while the green seasons offer fresh landscapes, fewer visitors and excellent value. We will match the season to your priorities.'],
  ['How many days should I allow for a safari?', 'A rewarding safari can be as short as three days, while seven to fourteen days allows you to combine several parks or add the coast. We plan a comfortable route around your arrival times and interests.'],
  ['Can you arrange flights and airport transfers?', 'Yes. We can coordinate international flight searches, regional bush flights, private charters, airport transfers and ground transport as part of one itinerary.'],
  ['Is a safari suitable for families?', 'Absolutely. We can recommend family-friendly camps, private vehicles and a pace that works for different ages. Tell us about your group and we will shape the details accordingly.'],
  ['What should I pack for an East Africa safari?', 'Pack light, breathable layers, a warm layer for early mornings, comfortable closed shoes, sun protection and any personal medication. Your travel advisor will share a tailored packing note for your itinerary.'],
  ['How do I pay for my trip?', 'We accept Wise transfer, M-Pesa, bank transfer and credit card arrangements. Visit our payment methods page or contact us for the current details linked to your booking.'],
  ['Can you create a tailor-made itinerary?', 'Yes. Tailor-made planning is at the heart of what we do. We listen to your dates, interests and travel style, then connect you with the right destinations and trusted local partners.'],
];

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="space-y-3">{questions.map(([question, answer], index) => <div key={question} className="rounded-2xl border border-stone-200 bg-white"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-[var(--forest-canopy)] sm:px-7"><span>{question}</span><span className="text-2xl font-normal text-[var(--golden-savannah)]" aria-hidden="true">{open === index ? '−' : '+'}</span></button>{open === index && <div className="px-5 pb-6 text-sm leading-7 text-stone-600 sm:px-7">{answer}</div>}</div>)}</div>;
}
