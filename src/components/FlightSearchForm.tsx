'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
interface Place {
  id: string;
  code: string;
  name: string;
  country_name: string;
  type: 'airport' | 'city';
}

interface FlightResult {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  flight_number: number | string;
  departure_at: string;
  return_at?: string;
  transfers: number;
  duration: number;
  duration_to?: number;
  duration_back?: number;
  link: string;
}

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */
const MARKER = '486464';
const AUTOCOMPLETE_URL = 'https://autocomplete.travelpayouts.com/places2';
const PRICES_URL = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

const AIRLINE_NAMES: Record<string, string> = {
  KQ: 'Kenya Airways',
  EK: 'Emirates',
  QR: 'Qatar Airways',
  ET: 'Ethiopian Airlines',
  BA: 'British Airways',
  KL: 'KLM',
  LH: 'Lufthansa',
  TK: 'Turkish Airlines',
  WY: 'Oman Air',
  AF: 'Air France',
  MS: 'EgyptAir',
  SA: 'South African Airways',
  WB: 'RwandAir',
  '5H': 'Fly540',
  JM: 'Jambojet',
  UA: 'United Airlines',
  DL: 'Delta',
  AA: 'American Airlines',
  SQ: 'Singapore Airlines',
  CX: 'Cathay Pacific',
};

const popularOrigins: Place[] = [
  { id: 'LHR', code: 'LHR', name: 'London Heathrow', country_name: 'United Kingdom', type: 'airport' },
  { id: 'DXB', code: 'DXB', name: 'Dubai International', country_name: 'UAE', type: 'airport' },
  { id: 'DOH', code: 'DOH', name: 'Hamad International', country_name: 'Qatar', type: 'airport' },
  { id: 'IST', code: 'IST', name: 'Istanbul', country_name: 'Turkey', type: 'airport' },
  { id: 'CDG', code: 'CDG', name: 'Paris Charles de Gaulle', country_name: 'France', type: 'airport' },
  { id: 'AMS', code: 'AMS', name: 'Amsterdam Schiphol', country_name: 'Netherlands', type: 'airport' },
  { id: 'FRA', code: 'FRA', name: 'Frankfurt', country_name: 'Germany', type: 'airport' },
  { id: 'JFK', code: 'JFK', name: 'New York JFK', country_name: 'United States', type: 'airport' },
  { id: 'JNB', code: 'JNB', name: 'Johannesburg', country_name: 'South Africa', type: 'airport' },
  { id: 'BOM', code: 'BOM', name: 'Mumbai', country_name: 'India', type: 'airport' },
];

const popularDestinations: Place[] = [
  { id: 'NBO', code: 'NBO', name: 'Nairobi JKIA', country_name: 'Kenya', type: 'airport' },
  { id: 'MBA', code: 'MBA', name: 'Mombasa Moi Int\'l', country_name: 'Kenya', type: 'airport' },
  { id: 'DAR', code: 'DAR', name: 'Dar es Salaam', country_name: 'Tanzania', type: 'airport' },
  { id: 'JRO', code: 'JRO', name: 'Kilimanjaro', country_name: 'Tanzania', type: 'airport' },
  { id: 'ZNZ', code: 'ZNZ', name: 'Zanzibar', country_name: 'Tanzania', type: 'airport' },
  { id: 'EBB', code: 'EBB', name: 'Entebbe', country_name: 'Uganda', type: 'airport' },
  { id: 'KGL', code: 'KGL', name: 'Kigali', country_name: 'Rwanda', type: 'airport' },
];

/* ------------------------------------------------------------------ */
/* SVG Icons                                                           */
/* ------------------------------------------------------------------ */
function PlaneIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16l-4-4 4-4"/><path d="M17 8l4 4-4 4"/><path d="M3 12h18"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="w-8 h-8 animate-spin text-[#a68b52]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Date helpers                                                        */
/* ------------------------------------------------------------------ */
const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseISODate(s: string): Date | null {
  if (!s) return null;
  const parts = s.split('-').map(Number);
  if (parts.length !== 3) return null;
  const [y, m, d] = parts;
  return new Date(y, m - 1, d);
}

function formatDatePretty(s: string): string {
  const d = parseISODate(s);
  if (!d) return '';
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
  const month = MONTH_LABELS[d.getMonth()].slice(0, 3);
  return `${weekday}, ${d.getDate()} ${month} ${d.getFullYear()}`;
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/* ------------------------------------------------------------------ */
/* Visual Calendar Date Picker                                         */
/* ------------------------------------------------------------------ */
function DatePickerField({
  label,
  value,
  onChange,
  minDate,
  autoOpenTrigger,
}: {
  label: string;
  value: string;
  onChange: (iso: string) => void;
  minDate: Date;
  autoOpenTrigger?: number;
}) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState<Date>(() => {
    const parsed = parseISODate(value);
    return parsed ? new Date(parsed.getFullYear(), parsed.getMonth(), 1) : new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (autoOpenTrigger !== undefined && autoOpenTrigger > 0) {
      setOpen(true);
      const parsed = parseISODate(value) || minDate;
      setViewMonth(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoOpenTrigger]);

  const openCalendar = () => {
    const parsed = parseISODate(value);
    setViewMonth(parsed ? new Date(parsed.getFullYear(), parsed.getMonth(), 1) : new Date(minDate.getFullYear(), minDate.getMonth(), 1));
    setOpen(true);
  };

  const goPrevMonth = () => {
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  };
  const goNextMonth = () => {
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
  };

  const selectDay = (d: Date) => {
    onChange(toISODate(d));
    setOpen(false);
  };

  const min = startOfDay(minDate);
  const selected = parseISODate(value);

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const canGoPrev = new Date(year, month, 1) > new Date(min.getFullYear(), min.getMonth(), 1);

  return (
    <div ref={ref} className="relative flex-1 min-w-[180px]">
      <label className="block text-xs font-semibold text-[#5c4d42] mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={openCalendar}
        className="w-full flex items-center gap-2 bg-white border-2 border-stone-200 rounded-xl px-4 py-3 hover:border-[#a68b52] focus:border-[#a68b52] focus:ring-2 focus:ring-[#a68b52]/20 transition-all text-left"
      >
        <CalendarIcon />
        <span className={`flex-1 truncate ${selected ? 'text-[#5c4d42] font-medium' : 'text-stone-400'}`}>
          {selected ? formatDatePretty(value) : 'Select date'}
        </span>
      </button>

      {open && (
        <div className="absolute z-50 top-full mt-2 left-0 right-0 sm:right-auto sm:w-80 bg-white border border-stone-200 rounded-xl shadow-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goPrevMonth}
              disabled={!canGoPrev}
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-600 hover:border-[#a68b52] hover:text-[#a68b52] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            <span className="font-bold text-[#5c4d42] text-sm">
              {MONTH_LABELS[month]} {year}
            </span>
            <button
              type="button"
              onClick={goNextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-600 hover:border-[#a68b52] hover:text-[#a68b52] transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-1">
            {WEEKDAY_LABELS.map((w) => (
              <div key={w} className="text-center text-[10px] font-semibold uppercase tracking-wider text-stone-400 py-1">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, idx) => {
              if (!d) return <div key={idx} />;
              const disabled = startOfDay(d) < min;
              const isSelected = selected && toISODate(d) === toISODate(selected);
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={disabled}
                  onClick={() => selectDay(d)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-colors flex items-center justify-center
                    ${disabled ? 'text-stone-300 cursor-not-allowed' : 'text-[#5c4d42] hover:bg-[#f7f4ed] cursor-pointer'}
                    ${isSelected ? 'bg-[#a68b52] text-white hover:bg-[#a68b52]' : ''}
                  `}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Airport Autocomplete Input                                          */
/* ------------------------------------------------------------------ */
function AirportInput({
  label,
  value,
  onChange,
  placeholder,
  popularList,
}: {
  label: string;
  value: Place | null;
  onChange: (p: Place) => void;
  placeholder: string;
  popularList: Place[];
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Place[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const search = useCallback(async (term: string) => {
    if (term.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${AUTOCOMPLETE_URL}?term=${encodeURIComponent(term)}&locale=en&types[]=airport&types[]=city`
      );
      const data = await res.json();
      setResults(
        data
          .filter((p: Place) => p.code)
          .slice(0, 8)
          .map((p: Place) => ({
            id: p.code,
            code: p.code,
            name: p.name,
            country_name: p.country_name,
            type: p.type,
          }))
      );
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInput = (val: string) => {
    setQuery(val);
    setOpen(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(val), 300);
  };

  const select = (p: Place) => {
    onChange(p);
    setQuery('');
    setOpen(false);
  };

  const displayList = query.length >= 2 ? results : popularList;

  return (
    <div ref={ref} className="relative flex-1 min-w-[200px]">
      <label className="block text-xs font-semibold text-[#5c4d42] mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div
        className="flex items-center gap-2 bg-white border-2 border-stone-200 rounded-xl px-4 py-3 cursor-text hover:border-[#a68b52] focus-within:border-[#a68b52] focus-within:ring-2 focus-within:ring-[#a68b52]/20 transition-all"
        onClick={() => { inputRef.current?.focus(); setOpen(true); }}
      >
        <PlaneIcon className="w-5 h-5 text-[#a68b52] shrink-0" />
        {value && !open ? (
          <div className="flex items-center gap-2 flex-1">
            <span className="font-bold text-[#5c4d42]">{value.code}</span>
            <span className="text-stone-600 text-sm truncate">{value.name}</span>
          </div>
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            onFocus={() => setOpen(true)}
            placeholder={value ? `${value.code} — ${value.name}` : placeholder}
            className="flex-1 bg-transparent outline-none text-[#5c4d42] placeholder:text-stone-400"
            autoComplete="off"
          />
        )}
      </div>

      {open && (
        <div className="absolute z-50 top-full mt-2 w-full bg-white border border-stone-200 rounded-xl shadow-2xl max-h-72 overflow-y-auto">
          {loading && (
            <div className="px-4 py-3 text-sm text-stone-500">Searching airports...</div>
          )}
          {!loading && displayList.length === 0 && query.length >= 2 && (
            <div className="px-4 py-3 text-sm text-stone-500">No airports found</div>
          )}
          {!loading && query.length < 2 && (
            <div className="px-3 pt-3 pb-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                Popular {label === 'From' ? 'Origins' : 'Destinations'}
              </span>
            </div>
          )}
          {displayList.map((p) => (
            <button
              key={p.code}
              type="button"
              onClick={() => select(p)}
              className="w-full text-left px-4 py-3 hover:bg-[#f7f4ed] flex items-center gap-3 transition-colors"
            >
              <span className="font-bold text-[#a68b52] text-sm w-10">{p.code}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#5c4d42] truncate">{p.name}</div>
                <div className="text-xs text-stone-500">{p.country_name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Passenger Picker                                                    */
/* ------------------------------------------------------------------ */
function PassengerPicker({
  adults, children, infants,
  onAdults, onChildren, onInfants,
}: {
  adults: number; children: number; infants: number;
  onAdults: (n: number) => void; onChildren: (n: number) => void; onInfants: (n: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const total = adults + children + infants;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const Counter = ({ label, sub, val, min, max, set }: { label: string; sub: string; val: number; min: number; max: number; set: (n: number) => void }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="text-sm font-medium text-[#5c4d42]">{label}</div>
        <div className="text-xs text-stone-500">{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={val <= min}
          onClick={() => set(val - 1)}
          className="w-8 h-8 rounded-full border-2 border-stone-200 text-stone-600 hover:border-[#a68b52] hover:text-[#a68b52] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-lg font-bold transition-colors"
        >
          -
        </button>
        <span className="w-6 text-center font-bold text-[#5c4d42]">{val}</span>
        <button
          type="button"
          disabled={val >= max}
          onClick={() => set(val + 1)}
          className="w-8 h-8 rounded-full border-2 border-stone-200 text-stone-600 hover:border-[#a68b52] hover:text-[#a68b52] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-lg font-bold transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="relative min-w-[180px]">
      <label className="block text-xs font-semibold text-[#5c4d42] mb-1.5 uppercase tracking-wider">
        Travellers
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 bg-white border-2 border-stone-200 rounded-xl px-4 py-3 hover:border-[#a68b52] focus:border-[#a68b52] focus:ring-2 focus:ring-[#a68b52]/20 transition-all text-left"
      >
        <UsersIcon />
        <span className="font-medium text-[#5c4d42]">
          {total} {total === 1 ? 'Traveller' : 'Travellers'}
        </span>
        <span className="ml-auto">
          <ChevronIcon open={open} />
        </span>
      </button>

      {open && (
        <div className="absolute z-50 top-full mt-2 w-72 bg-white border border-stone-200 rounded-xl shadow-2xl p-4">
          <Counter label="Adults" sub="12+ years" val={adults} min={1} max={9} set={onAdults} />
          <Counter label="Children" sub="2–11 years" val={children} min={0} max={8} set={onChildren} />
          <Counter label="Infants" sub="Under 2 years" val={infants} min={0} max={adults} set={onInfants} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 w-full bg-[#a68b52] hover:bg-[#8a7343] text-white py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Flight Result helpers                                               */
/* ------------------------------------------------------------------ */
function airlineName(code: string): string {
  return AIRLINE_NAMES[code] || code;
}

function formatDuration(minutes: number | undefined): string {
  if (!minutes || minutes <= 0) return '—';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function stopsLabel(transfers: number): string {
  if (transfers === 0) return 'Direct';
  return transfers === 1 ? '1 Stop' : `${transfers} Stops`;
}

function FlightResultCard({ result }: { result: FlightResult }) {
  const bookUrl = `https://www.aviasales.com${result.link}&marker=${MARKER}`;
  const duration = result.duration_to ?? result.duration;

  return (
    <div className="bg-[#f7f4ed] border border-stone-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <PlaneIcon className="w-4 h-4 text-[#a68b52]" />
          <span className="font-bold text-[#5c4d42]">{airlineName(result.airline)}</span>
          {typeof result.flight_number !== 'undefined' && (
            <span className="text-xs text-stone-500">
              {result.airline}{result.flight_number}
            </span>
          )}
        </div>
        <div className="text-sm text-stone-600">
          {result.origin} <span className="text-stone-400">to</span> {result.destination}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-stone-500">
          <span>Departs {result.departure_at ? new Date(result.departure_at).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—'}</span>
          <span className="font-semibold text-[#8a7343]">{stopsLabel(result.transfers)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
      </div>

      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
        <div className="text-2xl font-bold text-[#5c4d42]">
          ${Math.round(result.price)}
          <span className="text-xs font-normal text-stone-500 ml-1">USD</span>
        </div>
        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
        >
          Book This Flight
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Search Form                                                    */
/* ------------------------------------------------------------------ */
export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<'round' | 'oneway'>('round');
  const [cabinClass, setCabinClass] = useState<'Y' | 'C'>('Y');
  const [origin, setOrigin] = useState<Place | null>(null);
  const [destination, setDestination] = useState<Place | null>(
    popularDestinations[0] // Default: NBO
  );
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [autoOpenReturn, setAutoOpenReturn] = useState(0);

  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<FlightResult[]>([]);
  const [searchError, setSearchError] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const swapCities = () => {
    const tmp = origin;
    setOrigin(destination);
    setDestination(tmp);
  };

  const buildUrl = () => {
    if (!origin || !destination || !departDate) return null;

    // Format: /search/{FROM}{DDMM}{TO}{DDMM_RETURN}{ADULTS}{CHILDREN}{INFANTS}{CLASS}
    const depParts = departDate.split('-'); // YYYY-MM-DD
    const depDDMM = depParts[2] + depParts[1]; // DDMM

    let path = `${origin.code}${depDDMM}${destination.code}`;

    if (tripType === 'round' && returnDate) {
      const retParts = returnDate.split('-');
      const retDDMM = retParts[2] + retParts[1];
      path += retDDMM;
    }

    path += `${adults}`;
    if (children > 0 || infants > 0) {
      path += `${children}${infants}`;
    }

    const classMap = { Y: '', C: 'C' };
    if (classMap[cabinClass]) path += classMap[cabinClass];

    return `https://www.aviasales.com/search/${path}?marker=${MARKER}`;
  };

  const openAviasalesDeeplink = () => {
    const url = buildUrl();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSearch = async () => {
    if (!origin || !destination || !departDate) return;

    setSearching(true);
    setSearched(true);
    setSearchError(false);
    setResults([]);

    try {
      const params = new URLSearchParams({
        origin: origin.code,
        destination: destination.code,
        departure_at: departDate,
        sorting: 'price',
        token: MARKER,
        currency: 'usd',
        limit: '10',
      });
      if (tripType === 'round' && returnDate) {
        params.set('return_at', returnDate);
      }

      const res = await fetch(`${PRICES_URL}?${params.toString()}`);
      const json = await res.json();

      if (json && json.success !== false && Array.isArray(json.data) && json.data.length > 0) {
        setResults(json.data as FlightResult[]);
      } else {
        setResults([]);
      }
    } catch {
      setSearchError(true);
      setResults([]);
    } finally {
      setSearching(false);
    }
  };

  const isValid = origin && destination && departDate && (tripType === 'oneway' || returnDate);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Form Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
        {/* Top Bar — Trip Type + Class */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#5c4d42]">
          <div className="flex gap-1 bg-[#4a3d34] rounded-xl p-1">
            <button
              type="button"
              onClick={() => setTripType('round')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tripType === 'round'
                  ? 'bg-[#a68b52] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('oneway')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tripType === 'oneway'
                  ? 'bg-[#a68b52] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              One Way
            </button>
          </div>
          <div className="flex gap-1 bg-[#4a3d34] rounded-xl p-1">
            <button
              type="button"
              onClick={() => setCabinClass('Y')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                cabinClass === 'Y'
                  ? 'bg-[#a68b52] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Economy
            </button>
            <button
              type="button"
              onClick={() => setCabinClass('C')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                cabinClass === 'C'
                  ? 'bg-[#a68b52] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Business
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          {/* Row 1 — Origin / Swap / Destination */}
          <div className="flex flex-col md:flex-row items-end gap-3">
            <AirportInput
              label="From"
              value={origin}
              onChange={setOrigin}
              placeholder="City or airport"
              popularList={popularOrigins}
            />

            <button
              type="button"
              onClick={swapCities}
              className="shrink-0 w-10 h-10 mb-0.5 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-500 hover:border-[#a68b52] hover:text-[#a68b52] hover:bg-[#f7f4ed] transition-all"
              title="Swap cities"
            >
              <SwapIcon />
            </button>

            <AirportInput
              label="To"
              value={destination}
              onChange={setDestination}
              placeholder="City or airport"
              popularList={popularDestinations}
            />
          </div>

          {/* Row 2 — Dates + Passengers */}
          <div className="flex flex-col md:flex-row items-end gap-4">
            {/* Departure Date */}
            <DatePickerField
              label="Departure"
              value={departDate}
              minDate={today}
              onChange={(iso) => {
                setDepartDate(iso);
                if (returnDate && iso > returnDate) setReturnDate('');
                if (tripType === 'round') setAutoOpenReturn((n) => n + 1);
              }}
            />

            {/* Return Date */}
            {tripType === 'round' && (
              <DatePickerField
                label="Return"
                value={returnDate}
                minDate={parseISODate(departDate) || today}
                onChange={setReturnDate}
                autoOpenTrigger={autoOpenReturn}
              />
            )}

            {/* Passengers */}
            <PassengerPicker
              adults={adults}
              children={children}
              infants={infants}
              onAdults={setAdults}
              onChildren={setChildren}
              onInfants={setInfants}
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            disabled={!isValid || searching}
            className="w-full flex items-center justify-center gap-3 bg-[#a68b52] hover:bg-[#8a7343] disabled:bg-stone-300 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <SearchIcon />
            <span>{searching ? 'Searching...' : 'Search Flights'}</span>
            <PlaneIcon className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Info Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-500">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
          Compare airlines &amp; fares
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
          No booking fees from C.A.T.S
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
          Powered by Aviasales
        </span>
      </div>

      {/* Results Section */}
      {searched && (
        <div className="mt-8">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-2xl font-bold text-[#5c4d42]">Available Flights</h2>
            <p className="text-sm text-stone-500 mt-1">
              Prices shown are indicative. Final fare confirmed at booking.
            </p>
          </div>

          {searching && (
            <div className="flex flex-col items-center justify-center gap-3 py-12">
              <SpinnerIcon />
              <span className="text-sm text-stone-500">Fetching the best fares...</span>
            </div>
          )}

          {!searching && !searchError && results.length > 0 && (
            <div className="space-y-4">
              {results.map((r, idx) => (
                <FlightResultCard key={idx} result={r} />
              ))}
            </div>
          )}

          {!searching && (searchError || results.length === 0) && (
            <div className="bg-[#f7f4ed] border border-stone-200 rounded-2xl p-8 text-center">
              <p className="text-[#5c4d42] font-medium mb-4">
                No cached prices found. Search directly on Aviasales for real-time results.
              </p>
              <button
                type="button"
                onClick={openAviasalesDeeplink}
                className="inline-flex items-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <SearchIcon />
                Search on Aviasales
              </button>
            </div>
          )}

          {!searching && results.length > 0 && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={openAviasalesDeeplink}
                className="inline-flex items-center gap-2 border-2 border-[#a68b52] text-[#a68b52] hover:bg-[#a68b52] hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <SearchIcon />
                Search on Aviasales
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
