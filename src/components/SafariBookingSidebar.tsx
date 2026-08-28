'use client';

import { Calendar, Clock, MapPin, Users, Send } from 'lucide-react';

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
  const subject = encodeURIComponent(`[Booking] ${safari.title}`);
  const body = encodeURIComponent(`Hello,\n\nI would like to book the "${safari.title}" safari.\n\nPreferred dates:\nNumber of travellers:\nAccommodation preference:\n\nPlease send me pricing and availability.\n\nThank you.`);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
      <div className="bg-green-800 text-white p-6">
        <h3 className="text-xl font-bold mb-1">Book This Safari</h3>
        <p className="text-green-100 text-sm">Personalised itinerary, guaranteed departures</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-green-700 flex-shrink-0" />
            <span>{safari.duration} {safari.durationUnit}</span>
          </div>
          {safari.destination && (
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-green-700 flex-shrink-0" />
              <span className="capitalize">{safari.destination}</span>
            </div>
          )}
          {safari.parks && safari.parks.length > 0 && (
            <div className="flex items-start gap-3 text-gray-700">
              <Calendar className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
              <span>{safari.parks.join(', ')}</span>
            </div>
          )}
        </div>
        {safari.priceFrom && (
          <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
            <p className="text-xs text-amber-700 uppercase tracking-wide font-medium">Starting from</p>
            <p className="text-3xl font-bold text-green-900">${safari.priceFrom.toLocaleString()}</p>
            <p className="text-xs text-gray-500">per person sharing</p>
          </div>
        )}
        <a href={`mailto:info@catssafaris.com?subject=${subject}&body=${body}`} className="flex items-center justify-center gap-2 w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg">
          <Send className="w-4 h-4" />
          Request Custom Quote
        </a>
        <a href="https://wa.me/254720731900" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full border-2 border-green-800 text-green-800 hover:bg-green-50 font-semibold py-3 rounded-xl transition-colors">
          WhatsApp Us
        </a>
        <p className="text-xs text-gray-400 text-center">No booking fees · Free cancellation up to 30 days</p>
      </div>
    </div>
  );
}
