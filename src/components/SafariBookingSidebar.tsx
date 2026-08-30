'use client';

import { Clock, MapPin, Calendar } from 'lucide-react';
import BookingForm from './BookingForm';

interface Safari {
  title: string;
  slug: string;
  duration: number;
  durationUnit: string;
  destination?: string;
  parks?: string[];
  priceFrom?: number;
}

export default function SafariBookingSidebar({ safari }: { safari: Safari }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
      {/* Header */}
      <div className="bg-[#5c4d42] text-white p-6">
        <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>Book This Safari</h3>
        <p className="text-white/70 text-sm">Personalised itinerary, guaranteed departures</p>
      </div>

      {/* Safari Quick Info */}
      <div className="px-6 pt-5 pb-3 space-y-3 border-b border-stone-100">
        <div className="flex items-center gap-3 text-sm text-stone-600">
          <Clock className="w-4 h-4 text-[#a68b52] flex-shrink-0" />
          <span>{safari.duration} {safari.durationUnit}</span>
        </div>
        {safari.destination && (
          <div className="flex items-center gap-3 text-sm text-stone-600">
            <MapPin className="w-4 h-4 text-[#a68b52] flex-shrink-0" />
            <span className="capitalize">{safari.destination}</span>
          </div>
        )}
        {safari.parks && safari.parks.length > 0 && (
          <div className="flex items-start gap-3 text-sm text-stone-600">
            <Calendar className="w-4 h-4 text-[#a68b52] flex-shrink-0 mt-0.5" />
            <span>{safari.parks.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Price Badge */}
      {safari.priceFrom && (
        <div className="px-6 py-4 border-b border-stone-100">
          <div className="bg-[#f7f4ed] rounded-xl p-4 text-center">
            <p className="text-xs text-[#a68b52] uppercase tracking-wider font-semibold">Starting from</p>
            <p className="text-3xl font-bold text-[#5c4d42]">${safari.priceFrom.toLocaleString()}</p>
            <p className="text-xs text-stone-500">per person sharing</p>
          </div>
        </div>
      )}

      {/* Booking Form */}
      <div className="p-6">
        <BookingForm
          title={safari.title}
          pageUrl={`/safari/${safari.slug}`}
          subjectTag="[Safari Booking]"
          ctaLabel="Request Custom Quote"
        />
      </div>

      {/* WhatsApp CTA */}
      <div className="px-6 pb-6">
        <a
          href="https://wa.me/254723951388"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full border-2 border-[#a68b52] text-[#5c4d42] hover:bg-[#a68b52] hover:text-white font-semibold py-3 rounded-xl transition-all"
        >
          WhatsApp Us
        </a>
        <p className="text-xs text-stone-400 text-center mt-3">No booking fees · We respond within 2 hours</p>
      </div>
    </div>
  );
}
