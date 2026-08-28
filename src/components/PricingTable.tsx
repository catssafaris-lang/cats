'use client';

import { useState } from 'react';
import { safariPricing, type SafariPricingEntry } from '@/data/pricing';
import { DollarSign, Users, Info, ChevronDown, ChevronUp, Building2, Calendar, Baby, BedDouble } from 'lucide-react';

interface PricingTableProps {
  slug: string;
}

const seasonLabels: Record<string, { name: string; color: string; bg: string }> = {
  shoulder_a: { name: 'Shoulder A', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
  shoulder_b: { name: 'Shoulder B', color: 'text-orange-700', bg: 'bg-orange-50 border-orange-200' },
  peak: { name: 'Peak Season', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
  low: { name: 'Low Season', color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
};

const paxLabels: Record<string, string> = {
  '1': '1 Person',
  '2': '2 Persons',
  '3': '3 Persons',
  '4': '4 Persons',
  '5': '5 Persons',
  '6-7': '6-7 Persons',
  'srs': 'Single Room Supplement',
};

const tierLabels: Record<string, string> = {
  economy: 'Economy',
  comfort: 'Comfort',
  luxury: 'Luxury',
  superior_luxury: 'Superior Luxury',
};

const tierColors: Record<string, string> = {
  economy: 'text-[#4F5D56]',
  comfort: 'text-blue-700',
  luxury: 'text-[#A68B52]',
  superior_luxury: 'text-purple-700',
};

const seasonColors: Record<string, { text: string; bg: string; badge: string }> = {
  'Low Season': { text: 'text-green-700', bg: 'bg-green-50', badge: 'bg-green-100 text-green-800' },
  'Shoulder Season A': { text: 'text-amber-700', bg: 'bg-amber-50', badge: 'bg-amber-100 text-amber-800' },
  'Shoulder Season B': { text: 'text-orange-700', bg: 'bg-orange-50', badge: 'bg-orange-100 text-orange-800' },
  'Peak Season': { text: 'text-red-700', bg: 'bg-red-50', badge: 'bg-red-100 text-red-800' },
};

export default function PricingTable({ slug }: PricingTableProps) {
  const [activeSeason, setActiveSeason] = useState<string>('');
  const [showAccommodations, setShowAccommodations] = useState(false);

  const entry = safariPricing[slug];
  if (!entry) return null;

  const { pricing, accommodations } = entry;

  // ─── GROUP SEASONAL PRICING (group multi-day tours with array-based seasons) ───
  if (
    'group' in pricing && (pricing as any).group &&
    'seasonal' in pricing && (pricing as any).seasonal &&
    Array.isArray((pricing as any).seasons)
  ) {
    const seasons = (pricing as any).seasons as Array<{
      name: string;
      months: string;
      rates: Record<string, number>;
      srs?: number;
    }>;

    if (!seasons.length) return null;

    // Detect available tiers from first season's rates
    const availableTiers = Object.keys(seasons[0].rates).filter(
      (k) => k in tierLabels
    );

    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Safari Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-2">{(pricing as any).note}</p>
        {(pricing as any).departures && (
          <p className="text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-lg mb-6 inline-flex items-center gap-2">
            <Calendar size={16} />
            {(pricing as any).departures}
          </p>
        )}

        {/* ── Season × Tier Table ── */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b min-w-[180px]">
                  <Calendar size={16} className="inline mr-1" />
                  Season
                </th>
                {availableTiers.map((tier) => (
                  <th
                    key={tier}
                    className={`text-center px-4 py-3 font-semibold border-b ${tierColors[tier]}`}
                  >
                    {tierLabels[tier]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seasons.map((season, idx) => {
                const sc = seasonColors[season.name] || {
                  text: 'text-gray-700',
                  bg: '',
                  badge: 'bg-gray-100 text-gray-700',
                };
                return (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  >
                    <td className="px-4 py-3">
                      <span className={`font-semibold text-sm ${sc.text}`}>
                        {season.name}
                      </span>
                      <br />
                      <span className="text-xs text-gray-400">
                        {season.months}
                      </span>
                    </td>
                    {availableTiers.map((tier) => (
                      <td key={tier} className="text-center px-4 py-3">
                        <span className="font-semibold text-gray-900">
                          ${season.rates[tier]?.toLocaleString() || '—'}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}

              {/* SRS Note – shown below table if any season has srs */}
            </tbody>
          </table>
        </div>

        {/* SRS Info */}
        {seasons.some((s) => s.srs) && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-start gap-2 border border-gray-200">
            <BedDouble size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
            <div>
              <strong>Single Room Supplement:</strong>{' '}
              {(() => {
                const unique = [...new Set(seasons.map((s: any) => s.srs).filter(Boolean))];
                if (unique.length === 1) return <span>${unique[0]} per night</span>;
                return seasons.filter((s: any) => s.srs).map((s: any, i: number, arr: any[]) => (
                  <span key={i}>{s.name}: ${s.srs}{i < arr.length - 1 ? ' • ' : ''}</span>
                ));
              })()}
            </div>
          </div>
        )}

        {/* Child Rates */}
        {(pricing as any).child_rates && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-700 flex items-start gap-2">
            <Baby size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <strong>Child Rates:</strong>{' '}
              {(pricing as any).child_rates.split('|').map((part: string, i: number, arr: string[]) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price Disclaimer */}
        <p className="mt-3 text-xs text-gray-400 italic">
          Prices are in USD per person sharing. Exact rates confirmed at booking.
        </p>

        {/* ── Accommodation Options ── */}
        {accommodations && Object.keys(accommodations).length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAccommodations(!showAccommodations)}
              className="flex items-center gap-2 text-[#A68B52] hover:text-[#8B7444] font-medium text-sm transition-colors"
            >
              <BedDouble size={18} />
              View Accommodation Options
              {showAccommodations ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {showAccommodations && (
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {Object.entries(accommodations).map(([tier, lodges]) => {
                  if (!lodges || !Array.isArray(lodges) || lodges.length === 0)
                    return null;
                  return (
                    <div
                      key={tier}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <h4
                        className={`font-semibold text-sm mb-2 ${tierColors[tier] || 'text-gray-700'}`}
                      >
                        {tierLabels[tier] || tier}
                      </h4>
                      <ul className="space-y-1">
                        {(lodges as string[]).map((lodge: string, i: number) => (
                          <li
                            key={i}
                            className="text-xs text-gray-600 flex items-start gap-1"
                          >
                            <span className="text-[#A68B52] mt-0.5">•</span>
                            {lodge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // ─── STANDARD SEASONAL PRICING (private multi-day safaris — object-keyed seasons) ───
  if ('seasons' in pricing && pricing.seasons && !Array.isArray(pricing.seasons)) {
    const seasons = pricing.seasons as Record<string, any>;
    const seasonKeys = Object.keys(seasons);
    if (seasonKeys.length === 0) return null;

    // Use activeSeason if it exists in this package's seasons, otherwise default to first available
    const effectiveSeason = seasonKeys.includes(activeSeason) ? activeSeason : seasonKeys[0];

    // Determine which tiers exist
    const availableTiers: string[] = [];
    const firstSeason = seasons[seasonKeys[0]];
    // Check multiple group size keys to find tiers (some packages may have different keys)
    const sampleRateKey = Object.keys(firstSeason?.rates || {}).find(k => k !== 'srs') || '2';
    const sampleRates = firstSeason?.rates?.[sampleRateKey];
    if (sampleRates) {
      const tierKeys = Object.keys(sampleRates);
      if (tierKeys.includes('economy')) availableTiers.push('economy');
      if (tierKeys.includes('comfort')) availableTiers.push('comfort');
      if (tierKeys.includes('luxury')) availableTiers.push('luxury');
      if (tierKeys.includes('superior_luxury')) availableTiers.push('superior_luxury');
    }

    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Safari Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">{pricing.note}</p>

        {/* Season Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {seasonKeys.map((key) => {
            const label = seasonLabels[key] || { name: key, color: 'text-gray-700', bg: 'bg-gray-50 border-gray-200' };
            const isActive = effectiveSeason === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSeason(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  isActive
                    ? `${label.bg} ${label.color} border-current shadow-sm`
                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="block">{label.name}</span>
                {seasons[key]?.dates && (
                  <span className="block text-[10px] font-normal opacity-70 mt-0.5">{seasons[key].dates}</span>
                )}
              </button>
            );
          })}
        </div>



        {/* Pricing Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">
                  <Users size={16} className="inline mr-1" />
                  Group Size
                </th>
                {availableTiers.map((tier) => (
                  <th key={tier} className={`text-center px-4 py-3 font-semibold border-b ${tierColors[tier]}`}>
                    {tierLabels[tier]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(seasons[effectiveSeason]?.rates || {}).map(([pax, rates], idx) => {
                const isSRS = pax === 'srs';
                return (
                  <tr
                    key={pax}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} ${isSRS ? 'border-t-2 border-gray-200' : ''}`}
                  >
                    <td className={`px-4 py-3 font-medium ${isSRS ? 'text-gray-500 italic text-xs' : 'text-gray-700'}`}>
                      {paxLabels[pax] || pax}
                    </td>
                    {availableTiers.map((tier) => {
                      const value = (rates as any)?.[tier];
                      return (
                        <td key={tier} className="text-center px-4 py-3">
                          {value ? (
                            <span className={`font-semibold ${isSRS ? 'text-gray-500 text-xs' : 'text-gray-900'}`}>
                              ${value.toLocaleString()}
                            </span>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Child Rates */}
        {pricing.child_rates && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700 flex items-start gap-2">
            <Baby size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <strong>Child Rates:</strong>{' '}
              {pricing.child_rates.split('|').map((part, i) => (
                <span key={i}>
                  {part.trim()}
                  {i < pricing.child_rates!.split('|').length - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price Disclaimer */}
        <p className="mt-3 text-xs text-gray-400 italic">
          Prices are in USD per person sharing. Exact rates may vary based on specific accommodation choice and availability at time of booking. Contact us for a personalized quote.
        </p>

        {/* Accommodations */}
        {accommodations && Object.keys(accommodations).length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAccommodations(!showAccommodations)}
              className="flex items-center gap-2 text-[#A68B52] hover:text-[#8B7444] font-medium text-sm transition-colors"
            >
              <BedDouble size={18} />
              View Accommodation Options
              {showAccommodations ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAccommodations && (
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {Object.entries(accommodations).map(([tier, lodges]) => {
                  if (!lodges || !Array.isArray(lodges) || lodges.length === 0) return null;
                  return (
                    <div key={tier} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h4 className={`font-semibold text-sm mb-2 ${tierColors[tier] || 'text-gray-700'}`}>
                        {tierLabels[tier] || tier}
                      </h4>
                      <ul className="space-y-1">
                        {(lodges as string[]).map((lodge: string, i: number) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-[#A68B52] mt-0.5">•</span>
                            {lodge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // ─── SIMPLE DAY TRIP PRICING ───
  if ('simple' in pricing && (pricing as any).simple) {
    const rates = (pricing as any).rates;
    if (!rates) return null;

    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Tour Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">{(pricing as any).note}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Category</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Adult</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Child (3-11)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-700">Non-Resident</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates.non_resident?.adult?.toLocaleString() || '—'}
                </td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates.non_resident?.child?.toLocaleString() || '—'}
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-700">Kenya Resident</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates.resident?.adult?.toLocaleString() || '—'}
                </td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates.resident?.child?.toLocaleString() || '—'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {(pricing as any).group_discount && (
          <p className="mt-3 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg">
            🎉 {(pricing as any).group_discount}
          </p>
        )}

        <p className="mt-3 text-xs text-gray-400 italic">
          Private tour with dedicated vehicle and guide. Contact us for group rates and custom itineraries.
        </p>
      </div>
    );
  }

  // ─── GROUP JOINING (flat rate, non-seasonal) ───
  if ('group' in pricing && (pricing as any).group && !('seasonal' in pricing && (pricing as any).seasonal)) {
    const rates = (pricing as any).rates;
    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Group Safari Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">{(pricing as any).note}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Category</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Per Person</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-700">Non-Resident</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates?.non_resident?.toLocaleString() || '—'}
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-700">Kenya Resident</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">
                  ${rates?.resident?.toLocaleString() || '—'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
          📅 {(pricing as any).departures}
        </p>
      </div>
    );
  }

  // ─── GROUP TOUR (min price display) ───
  if ('group_tour' in pricing && (pricing as any).group_tour) {
    const minPrice = (pricing as any).min_price;
    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Tour Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">{(pricing as any).note}</p>

        <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-gradient-to-br from-white to-gray-50/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Starting From</p>
              <p className="text-4xl font-bold text-gray-900 mt-1">
                <span className="text-[#A68B52]">$</span>{minPrice?.toLocaleString()}
                <span className="text-base font-normal text-gray-500 ml-2">per person</span>
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-[#A68B52]/10 text-[#A68B52] px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              Shared Group Tour
            </div>
          </div>
        </div>

        {(pricing as any).child_note && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
            <strong>Child Rates:</strong> {(pricing as any).child_note}
          </div>
        )}

        <p className="mt-3 text-xs text-gray-400 italic">
          Prices are per person in USD. Contact us for group discounts and a personalized quote.
        </p>
      </div>
    );
  }

  // ─── EXCURSION / DAY TRIP (group-size-based) ───
  if ('excursion' in pricing && (pricing as any).excursion) {
    const rates = (pricing as any).rates;
    const groupLabels: Record<string, string> = {
      '1_pax': '1 Traveller',
      '2_4_pax': '2\u20134 Travellers',
      '5_7_pax': '5\u20137 Travellers',
    };

    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Tour Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">{(pricing as any).note}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b" rowSpan={2}>
                  <Users size={16} className="inline mr-1" />
                  Group Size
                </th>
                <th className="text-center px-3 py-2 font-semibold text-gray-700 border-b border-l" colSpan={2}>
                  Non-Resident
                </th>
                <th className="text-center px-3 py-2 font-semibold text-gray-700 border-b border-l" colSpan={2}>
                  Kenya Resident
                </th>
              </tr>
              <tr className="bg-gray-50">
                <th className="text-center px-3 py-2 text-xs font-medium text-gray-500 border-b border-l">Adult</th>
                <th className="text-center px-3 py-2 text-xs font-medium text-gray-500 border-b">Child</th>
                <th className="text-center px-3 py-2 text-xs font-medium text-gray-500 border-b border-l">Adult</th>
                <th className="text-center px-3 py-2 text-xs font-medium text-gray-500 border-b">Child</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupLabels).map(([key, label], idx) => {
                const groupRates = rates[key];
                if (!groupRates) return null;
                return (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-3 font-medium text-gray-700">{label}</td>
                    <td className="text-center px-3 py-3 font-semibold text-gray-900 border-l">
                      ${groupRates.non_resident?.adult?.toLocaleString() || '—'}
                    </td>
                    <td className="text-center px-3 py-3 font-semibold text-gray-900">
                      ${groupRates.non_resident?.child?.toLocaleString() || '—'}
                    </td>
                    <td className="text-center px-3 py-3 font-semibold text-gray-900 border-l">
                      ${groupRates.resident?.adult?.toLocaleString() || '—'}
                    </td>
                    <td className="text-center px-3 py-3 font-semibold text-gray-900">
                      ${groupRates.resident?.child?.toLocaleString() || '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {(pricing as any).child_note && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
            <strong>Child Rates:</strong> {(pricing as any).child_note}
          </div>
        )}

        <p className="mt-3 text-xs text-gray-400 italic">
          Private safari in a 4\u00d74 Land Cruiser (max 7 passengers). Contact us for a personalized quote.
        </p>
      </div>
    );
  }

  // ─── MOUNTAIN CLIMBING ───
  if ('mountain' in pricing && (pricing as any).mountain) {
    const rates = (pricing as any).rates;
    return (
      <div className="mt-12" id="pricing">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="text-[#A68B52]" size={28} />
          Climbing Rates
        </h2>
        <p className="text-sm text-gray-500 mb-6">{(pricing as any).note}</p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Group Size</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Per Person</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-700">Solo Climber</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">${rates?.per_person?.toLocaleString()}</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-700">Group of 2</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">${rates?.group_of_2?.toLocaleString()}</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-700">Group of 3-4</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">${rates?.group_of_3_4?.toLocaleString()}</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-700">Group of 5+</td>
                <td className="text-center px-4 py-3 font-semibold text-gray-900">${rates?.group_of_5_plus?.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {(pricing as any).child_rates && (
          <p className="mt-3 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
            \u26a0\ufe0f {(pricing as any).child_rates}
          </p>
        )}
      </div>
    );
  }

  return null;
}
