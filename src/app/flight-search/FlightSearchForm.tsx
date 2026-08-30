'use client';

import { useState } from 'react';

const currencies = [
  { code: 'USD', label: 'USD ($)', symbol: '$' },
  { code: 'EUR', label: 'EUR (€)', symbol: '€' },
  { code: 'GBP', label: 'GBP (£)', symbol: '£' },
  { code: 'KES', label: 'KES (KSh)', symbol: 'KSh' },
  { code: 'AED', label: 'AED (د.إ)', symbol: 'د.إ' },
  { code: 'QAR', label: 'QAR (﷼)', symbol: '﷼' },
  { code: 'INR', label: 'INR (₹)', symbol: '₹' },
  { code: 'ZAR', label: 'ZAR (R)', symbol: 'R' },
  { code: 'CHF', label: 'CHF (Fr)', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY (¥)', symbol: '¥' },
];

export default function FlightSearchForm() {
  const [currency, setCurrency] = useState('USD');

  const iframeSrc = `https://flights.catssafaris.com/?currency=${currency.toLowerCase()}`;

  return (
    <section className="w-full bg-[#f7f4ed] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a3c2a]">
              Find Cheap International Flights
            </h2>
            <p className="text-[#5a4d3a] mt-1">
              Compare flights from airlines worldwide. Search, compare, and book — all right here.
            </p>
          </div>
          {/* Currency Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="currency" className="text-sm font-medium text-[#5a4d3a] hidden sm:block">
              Currency:
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#c4a265] bg-white text-[#1a3c2a] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a265]"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Embedded Flight Search — TravelPayouts whitelabel */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            key={currency}
            src={iframeSrc}
            title="Search International Flights"
            className="w-full border-0"
            style={{ height: '720px', minHeight: '600px' }}
            allow="fullscreen"
            loading="lazy"
          />
        </div>

        <p className="text-xs text-[#8a7d6b] mt-3 text-center">
          Powered by TravelPayouts — search results may vary by region. 
          If the search doesn&apos;t load, please try refreshing or{' '}
          <a
            href={`https://flights.catssafaris.com/?currency=${currency.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#c4a265] hover:text-[#1a3c2a]"
          >
            open in a new tab
          </a>.
        </p>
      </div>
    </section>
  );
}
