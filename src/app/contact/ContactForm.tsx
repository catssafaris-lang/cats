'use client';

import { FormEvent, useState, useMemo } from 'react';

const INTERESTS = [
  'Big Five Wildlife',
  'Great Migration',
  'Gorilla Trekking',
  'Bush & Beach Combo',
  'Photography Safari',
  'Family Safari',
  'Honeymoon / Romance',
  'Cultural Experiences',
  'Mountain Climbing',
  'Bird Watching',
  'Day Trips & Excursions',
  'Fly-In Safari',
];

const COUNTRIES: { name: string; code: string }[] = [
  { name: 'Kenya', code: '+254' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Italy', code: '+39' },
  { name: 'Spain', code: '+34' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Belgium', code: '+32' },
  { name: 'Switzerland', code: '+41' },
  { name: 'Austria', code: '+43' },
  { name: 'Sweden', code: '+46' },
  { name: 'Norway', code: '+47' },
  { name: 'Denmark', code: '+45' },
  { name: 'Finland', code: '+358' },
  { name: 'Ireland', code: '+353' },
  { name: 'Portugal', code: '+351' },
  { name: 'Poland', code: '+48' },
  { name: 'Czech Republic', code: '+420' },
  { name: 'South Africa', code: '+27' },
  { name: 'Tanzania', code: '+255' },
  { name: 'Uganda', code: '+256' },
  { name: 'Rwanda', code: '+250' },
  { name: 'Ethiopia', code: '+251' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Ghana', code: '+233' },
  { name: 'India', code: '+91' },
  { name: 'China', code: '+86' },
  { name: 'Japan', code: '+81' },
  { name: 'South Korea', code: '+82' },
  { name: 'Singapore', code: '+65' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Thailand', code: '+66' },
  { name: 'Philippines', code: '+63' },
  { name: 'Indonesia', code: '+62' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Israel', code: '+972' },
  { name: 'Turkey', code: '+90' },
  { name: 'Russia', code: '+7' },
  { name: 'Brazil', code: '+55' },
  { name: 'Mexico', code: '+52' },
  { name: 'Argentina', code: '+54' },
  { name: 'Colombia', code: '+57' },
  { name: 'Chile', code: '+56' },
  { name: 'Peru', code: '+51' },
  { name: 'New Zealand', code: '+64' },
  { name: 'Egypt', code: '+20' },
  { name: 'Morocco', code: '+212' },
];

const inputClasses =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20 transition-colors';
const labelClasses = 'block text-sm font-semibold text-stone-700';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [nationality, setNationality] = useState('');
  const [phoneCode, setPhoneCode] = useState('+254');

  // Auto-set phone code from nationality
  const handleNationality = (val: string) => {
    setNationality(val);
    const found = COUNTRIES.find((c) => c.name === val);
    if (found) setPhoneCode(found.code);
  };

  const sortedCountries = useMemo(
    () => [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const data = new FormData(event.currentTarget);
    const fields = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      nationality,
      phone: `${phoneCode} ${data.get('phone') || ''}`,
      residency: String(data.get('residency') || ''),
      interest: String(data.get('interest') || ''),
      travellers: String(data.get('travellers') || ''),
      travelDate: String(data.get('travelDate') || ''),
      budget: String(data.get('budget') || ''),
      message: String(data.get('message') || ''),
    };

    const subject = `[C.A.T.S Contact] ${fields.interest || 'General Enquiry'} — ${fields.name}`;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Nationality: ${fields.nationality}`,
      `Phone: ${fields.phone}`,
      `Residency: ${fields.residency}`,
      `Interest: ${fields.interest}`,
      `Number of Travellers: ${fields.travellers}`,
      `Preferred Travel Date: ${fields.travelDate}`,
      `Budget Range: ${fields.budget}`,
      '',
      'Message:',
      fields.message,
    ].join('\n');

    // Use mailto as form action (plain text to info@catssafaris.com)
    const mailtoUrl = `mailto:info@catssafaris.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setSending(false);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 shadow-sm text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)]">Thank you!</h3>
        <p className="mt-2 text-stone-600">Your email app should open with the enquiry ready to send. If it didn&apos;t, email us directly at <a href="mailto:info@catssafaris.com" className="font-semibold text-[#a68b52] hover:underline">info@catssafaris.com</a></p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-[#a68b52] hover:underline">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div>
        <h3 className="font-playfair text-xl font-bold text-[var(--forest-canopy)]">Start Planning Your Safari</h3>
        <p className="mt-1 text-sm text-stone-500">Fill in your details and we&apos;ll craft a personalised itinerary for you.</p>
      </div>

      {/* Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          Full Name <span className="text-red-400">*</span>
          <input required name="name" type="text" placeholder="Your full name" className={inputClasses} />
        </label>
        <label className={labelClasses}>
          Email Address <span className="text-red-400">*</span>
          <input required name="email" type="email" placeholder="you@example.com" className={inputClasses} />
        </label>
      </div>

      {/* Nationality & Residency */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>
            Nationality <span className="text-red-400">*</span>
          </label>
          <select
            required
            value={nationality}
            onChange={(e) => handleNationality(e.target.value)}
            className={inputClasses}
          >
            <option value="">Select your nationality</option>
            {sortedCountries.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses}>Residency Status</label>
          <select name="residency" className={inputClasses}>
            <option value="">Select status</option>
            <option value="Resident">Resident (East Africa)</option>
            <option value="Citizen">Citizen (East Africa)</option>
            <option value="Non-Resident">Non-Resident (International)</option>
          </select>
        </div>
      </div>

      {/* Phone with country code */}
      <div>
        <label className={labelClasses}>Phone Number</label>
        <div className="mt-1.5 flex gap-2">
          <select
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            className="w-28 shrink-0 rounded-xl border border-stone-200 bg-white px-2 py-3 text-sm text-stone-800 focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20"
          >
            {[...new Set(COUNTRIES.map((c) => c.code))].sort().map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
          <input name="phone" type="tel" placeholder="Phone number" className={`${inputClasses} mt-0`} />
        </div>
      </div>

      {/* What excites you most */}
      <div>
        <label className={labelClasses}>What excites you most?</label>
        <select name="interest" className={inputClasses}>
          <option value="">Select your interest</option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      {/* Travellers & Date */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          Number of Travellers
          <input name="travellers" type="number" min={1} max={50} placeholder="e.g. 4" className={inputClasses} />
        </label>
        <label className={labelClasses}>
          Preferred Travel Date
          <input name="travelDate" type="date" className={inputClasses} />
        </label>
      </div>

      {/* Budget */}
      <div>
        <label className={labelClasses}>Budget Range (per person, USD)</label>
        <select name="budget" className={inputClasses}>
          <option value="">Select budget range</option>
          <option value="Under $1,000">Under $1,000</option>
          <option value="$1,000 – $2,500">$1,000 – $2,500</option>
          <option value="$2,500 – $5,000">$2,500 – $5,000</option>
          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
          <option value="$10,000+">$10,000+</option>
        </select>
      </div>

      {/* Message */}
      <label className="block">
        <span className={labelClasses}>Your Message <span className="text-red-400">*</span></span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your dream safari — destinations, activities, special occasions..."
          className={inputClasses}
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-[#a68b52] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#8b7343] hover:shadow-lg disabled:opacity-50"
      >
        {sending ? 'Sending...' : 'Send Enquiry'}
      </button>

      <p className="text-center text-xs text-stone-400">
        Your enquiry will be sent to <span className="font-medium">info@catssafaris.com</span>. We typically respond within 24 hours.
      </p>
    </form>
  );
}
