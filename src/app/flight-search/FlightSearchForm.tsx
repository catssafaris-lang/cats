'use client';

import { useState } from 'react';

const popularAirports = [
  { code: 'NBO', city: 'Nairobi', country: 'Kenya' },
  { code: 'MBA', city: 'Mombasa', country: 'Kenya' },
  { code: 'DAR', city: 'Dar es Salaam', country: 'Tanzania' },
  { code: 'JRO', city: 'Kilimanjaro', country: 'Tanzania' },
  { code: 'EBB', city: 'Entebbe', country: 'Uganda' },
  { code: 'KGL', city: 'Kigali', country: 'Rwanda' },
  { code: 'ZNZ', city: 'Zanzibar', country: 'Tanzania' },
  { code: 'LHR', city: 'London', country: 'UK' },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'CDG', city: 'Paris', country: 'France' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany' },
  { code: 'ZRH', city: 'Zurich', country: 'Switzerland' },
  { code: 'IST', city: 'Istanbul', country: 'Turkey' },
  { code: 'DXB', city: 'Dubai', country: 'UAE' },
  { code: 'DOH', city: 'Doha', country: 'Qatar' },
  { code: 'AUH', city: 'Abu Dhabi', country: 'UAE' },
  { code: 'JFK', city: 'New York', country: 'USA' },
  { code: 'BOM', city: 'Mumbai', country: 'India' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand' },
  { code: 'CAN', city: 'Guangzhou', country: 'China' },
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa' },
];

function formatDate(d: string): string {
  // Convert YYYY-MM-DD to DDMM
  const parts = d.split('-');
  return parts[2] + parts[1]; // DDMM
}

export default function FlightSearchForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('NBO');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [tripClass, setTripClass] = useState('economy');
  const [showPassengers, setShowPassengers] = useState(false);

  const totalPassengers = adults + children + infants;
  const classLabel = tripClass === 'economy' ? 'economy' : tripClass === 'business' ? 'business' : 'first';

  const handleSearch = () => {
    // Build TravelPayouts/Aviasales search URL
    // Format: /search/{FROM}{DDMM}{TO}{DDMM}{adults}{children}{infants}
    let url = 'https://flights.catssafaris.com/';

    if (origin && destination && departDate) {
      const dep = formatDate(departDate);
      const ret = returnDate ? formatDate(returnDate) : '';
      url += `search/${origin}${dep}${destination}${ret}${adults}`;
      if (children > 0 || infants > 0) {
        url += `${children}${infants}`;
      }
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="bg-[#1a3c2a] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Search &amp; Compare Flights{' '}
            <span className="text-[#4ade80]">Worldwide</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            Cheap flights, business class flights and first class flights to every corner of the globe — business, leisure, adventure, safari and luxury travel, all in one search.
          </p>
        </div>

        {/* Search Form */}
        <div className="space-y-4">
          {/* Origin & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Departure from</label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold text-lg bg-transparent outline-none cursor-pointer"
              >
                <option value="">Select city</option>
                {popularAirports.map((a) => (
                  <option key={a.code} value={a.code}>
                    {a.city} ({a.code}) — {a.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-xl p-4">
              <label className="block text-xs text-stone-400 mb-1 uppercase tracking-wide">Arrival in</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-[#1a3c2a] font-semibold text-lg bg-transparent outline-none cursor-pointer"
              >
                {popularAirports.map((a) => (
                  <option key={a.code} value={a.code}>
                    {a.city} ({a.code}) — {a.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
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
          </div>

          {/* Passengers & Class */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPassengers(!showPassengers)}
              className="w-full bg-white rounded-xl p-4 text-left flex items-center justify-between"
            >
              <div>
                <span className="block text-xs text-stone-400 uppercase tracking-wide">Passengers</span>
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
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(9, adults + 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a3c2a]">Children</p>
                    <p className="text-xs text-stone-400">2–11 years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(9, children + 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a3c2a]">Infants</p>
                    <p className="text-xs text-stone-400">Under 2 years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center font-bold text-[#1a3c2a]">{infants}</span>
                    <button
                      type="button"
                      onClick={() => setInfants(Math.min(9, infants + 1))}
                      className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1a3c2a] hover:text-[#1a3c2a]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Class */}
                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">Class</p>
                  <div className="flex gap-2 flex-wrap">
                    {['economy', 'business', 'first'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setTripClass(c)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                          tripClass === c
                            ? 'bg-[#1a3c2a] text-white'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPassengers(false)}
                  className="w-full bg-[#1a3c2a] text-white py-2 rounded-lg font-semibold mt-2"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="w-full bg-[#3d3d3d] hover:bg-[#2a2a2a] text-white py-4 rounded-xl font-bold text-lg transition-all"
          >
            Search flights
          </button>

          {/* Multi-city link */}
          <div className="text-center">
            <a
              href="https://flights.catssafaris.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4ade80] hover:text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeWidth="1.5" d="M8 12h8M12 8v8" />
              </svg>
              Create multi-city route
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
