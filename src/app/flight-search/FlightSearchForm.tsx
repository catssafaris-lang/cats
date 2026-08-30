'use client';

import { useState } from 'react';

const popularAirports = [
  // East Africa — Destinations
  { code: 'NBO', city: 'Nairobi', country: 'Kenya', group: 'East Africa' },
  { code: 'MBA', city: 'Mombasa', country: 'Kenya', group: 'East Africa' },
  { code: 'DAR', city: 'Dar es Salaam', country: 'Tanzania', group: 'East Africa' },
  { code: 'JRO', city: 'Kilimanjaro', country: 'Tanzania', group: 'East Africa' },
  { code: 'EBB', city: 'Entebbe', country: 'Uganda', group: 'East Africa' },
  { code: 'KGL', city: 'Kigali', country: 'Rwanda', group: 'East Africa' },
  { code: 'ZNZ', city: 'Zanzibar', country: 'Tanzania', group: 'East Africa' },
  // Europe
  { code: 'LHR', city: 'London Heathrow', country: 'UK', group: 'Europe' },
  { code: 'LGW', city: 'London Gatwick', country: 'UK', group: 'Europe' },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands', group: 'Europe' },
  { code: 'CDG', city: 'Paris', country: 'France', group: 'Europe' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', group: 'Europe' },
  { code: 'ZRH', city: 'Zurich', country: 'Switzerland', group: 'Europe' },
  { code: 'FCO', city: 'Rome', country: 'Italy', group: 'Europe' },
  { code: 'MAD', city: 'Madrid', country: 'Spain', group: 'Europe' },
  { code: 'IST', city: 'Istanbul', country: 'Turkey', group: 'Europe' },
  // Middle East
  { code: 'DXB', city: 'Dubai', country: 'UAE', group: 'Middle East' },
  { code: 'DOH', city: 'Doha', country: 'Qatar', group: 'Middle East' },
  { code: 'AUH', city: 'Abu Dhabi', country: 'UAE', group: 'Middle East' },
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', group: 'Middle East' },
  // Americas
  { code: 'JFK', city: 'New York JFK', country: 'USA', group: 'Americas' },
  { code: 'IAD', city: 'Washington Dulles', country: 'USA', group: 'Americas' },
  { code: 'ORD', city: 'Chicago', country: 'USA', group: 'Americas' },
  { code: 'ATL', city: 'Atlanta', country: 'USA', group: 'Americas' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada', group: 'Americas' },
  { code: 'GRU', city: 'São Paulo', country: 'Brazil', group: 'Americas' },
  // Asia & Oceania
  { code: 'BOM', city: 'Mumbai', country: 'India', group: 'Asia' },
  { code: 'DEL', city: 'Delhi', country: 'India', group: 'Asia' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand', group: 'Asia' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', group: 'Asia' },
  { code: 'HKG', city: 'Hong Kong', country: 'China', group: 'Asia' },
  { code: 'CAN', city: 'Guangzhou', country: 'China', group: 'Asia' },
  { code: 'PEK', city: 'Beijing', country: 'China', group: 'Asia' },
  { code: 'SYD', city: 'Sydney', country: 'Australia', group: 'Asia' },
  // Africa
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa', group: 'Africa' },
  { code: 'CPT', city: 'Cape Town', country: 'South Africa', group: 'Africa' },
  { code: 'ADD', city: 'Addis Ababa', country: 'Ethiopia', group: 'Africa' },
  { code: 'CAI', city: 'Cairo', country: 'Egypt', group: 'Africa' },
  { code: 'ACC', city: 'Accra', country: 'Ghana', group: 'Africa' },
  { code: 'LOS', city: 'Lagos', country: 'Nigeria', group: 'Africa' },
];

const currencies = [
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'GBP', symbol: '£', label: 'British Pound' },
  { code: 'KES', symbol: 'KSh', label: 'Kenya Shilling' },
  { code: 'TZS', symbol: 'TSh', label: 'Tanzania Shilling' },
  { code: 'UGX', symbol: 'USh', label: 'Uganda Shilling' },
  { code: 'AED', symbol: 'د.إ', label: 'UAE Dirham' },
  { code: 'QAR', symbol: 'ر.ق', label: 'Qatari Riyal' },
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
  { code: 'ZAR', symbol: 'R', label: 'South African Rand' },
  { code: 'CAD', symbol: 'C$', label: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', label: 'Australian Dollar' },
  { code: 'CHF', symbol: 'Fr', label: 'Swiss Franc' },
  { code: 'CNY', symbol: '¥', label: 'Chinese Yuan' },
  { code: 'SAR', symbol: 'ر.س', label: 'Saudi Riyal' },
];

const groups = ['East Africa', 'Europe', 'Middle East', 'Americas', 'Asia', 'Africa'];



export default function FlightSearchForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('NBO');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [tripClass, setTripClass] = useState<'economy' | 'business' | 'first'>('economy');
  const [currency, setCurrency] = useState('USD');
  const [showPassengers, setShowPassengers] = useState(false);

  const totalPassengers = adults + children + infants;
  const classLabel = tripClass === 'economy' ? 'Economy' : tripClass === 'business' ? 'Business' : 'First';

  const handleSearch = () => {
    if (!origin || !destination || !departDate) {
      alert('Please select departure city, arrival city, and departure date.');
      return;
    }

    // Redirect to flights.catssafaris.com — TravelPayouts whitelabel (commission tracked)
    // Format dates as YYYY-MM-DD for the whitelabel
    const url = `https://flights.catssafaris.com/?origin=${origin}&destination=${destination}&depart_date=${departDate}${returnDate ? `&return_date=${returnDate}` : ''}&adults=${adults}&children=${children}&infants=${infants}&currency=${currency.toLowerCase()}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const today = new Date().toISOString().split('T')[0];
  const selectedCurrency = currencies.find(c => c.code === currency);

  return (
    <section className="bg-[#1a3c2a] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Find Cheap International Flights{' '}
            <span className="text-[#c9a84c]">to East Africa</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            Compare flights from airlines worldwide. Find the best fares for your safari adventure — economy, business, or first class.
          </p>
        </div>

        {/* Search Form */}
        <div className="space-y-3">
          {/* Origin & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Flying from</label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold text-lg bg-transparent outline-none cursor-pointer"
              >
                <option value="">Select departure city</option>
                {groups.map((group) => (
                  <optgroup key={group} label={`— ${group} —`}>
                    {popularAirports
                      .filter((a) => a.group === group)
                      .map((a) => (
                        <option key={`from-${a.code}`} value={a.code}>
                          {a.city} ({a.code}) — {a.country}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Flying to</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold text-lg bg-transparent outline-none cursor-pointer"
              >
                {groups.map((group) => (
                  <optgroup key={group} label={`— ${group} —`}>
                    {popularAirports
                      .filter((a) => a.group === group)
                      .map((a) => (
                        <option key={`to-${a.code}`} value={a.code}>
                          {a.city} ({a.code}) — {a.country}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* Dates & Currency */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Depart</label>
              <input
                type="date"
                value={departDate}
                min={today}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold bg-transparent outline-none"
              />
            </div>
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Return</label>
              <input
                type="date"
                value={returnDate}
                min={departDate || today}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold bg-transparent outline-none"
              />
            </div>
            <div className="bg-white rounded-xl p-4 col-span-2 sm:col-span-1">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold text-lg bg-transparent outline-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol} {c.code} — {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Passengers & Class */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPassengers(!showPassengers)}
              className="w-full bg-white rounded-xl p-4 text-left flex items-center justify-between"
            >
              <div>
                <span className="block text-xs text-stone-400 uppercase tracking-wide">Passengers &amp; Class</span>
                <span className="text-[#1a3c2a] font-semibold text-lg">
                  {totalPassengers} passenger{totalPassengers !== 1 ? 's' : ''}, {classLabel}
                </span>
              </div>
              <svg className={`w-5 h-5 text-stone-400 transition-transform ${showPassengers ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showPassengers && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl p-5 z-50 space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a3c2a]">Adults</p>
                    <p className="text-xs text-stone-400">12+ years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">&minus;</button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{adults}</span>
                    <button type="button" onClick={() => setAdults(Math.min(9, adults + 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">+</button>
                  </div>
                </div>
                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a3c2a]">Children</p>
                    <p className="text-xs text-stone-400">2–11 years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">&minus;</button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{children}</span>
                    <button type="button" onClick={() => setChildren(Math.min(9, children + 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">+</button>
                  </div>
                </div>
                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a3c2a]">Infants</p>
                    <p className="text-xs text-stone-400">Under 2 years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setInfants(Math.max(0, infants - 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">&minus;</button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{infants}</span>
                    <button type="button" onClick={() => setInfants(Math.min(9, infants + 1))} className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]">+</button>
                  </div>
                </div>
                {/* Class */}
                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">Class</p>
                  <div className="flex gap-2 flex-wrap">
                    {(['economy', 'business', 'first'] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setTripClass(c)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                          tripClass === c ? 'bg-[#1a3c2a] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="button" onClick={() => setShowPassengers(false)} className="w-full bg-[#1a3c2a] text-white py-2 rounded-lg font-semibold mt-2">
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            disabled={!origin || !destination || !departDate}
            className="w-full bg-[#c9a84c] hover:bg-[#b8963f] disabled:bg-stone-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Flights
          </button>

          <p className="text-center text-white/50 text-xs mt-1">
            Powered by Google Flights — compare prices across 300+ airlines
          </p>
        </div>
      </div>
    </section>
  );
}
