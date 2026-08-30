'use client';

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import { X, ChevronDown, Calendar, Users, Baby, Globe, Phone, Mail, MapPin, Plane } from 'lucide-react';

/* ────────────────────────── Country Data ────────────────────────── */
const countries = [
  { name: 'Kenya', code: '+254', iso: 'KE', flag: '🇰🇪' },
  { name: 'United States', code: '+1', iso: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', iso: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', iso: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', iso: 'AU', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', iso: 'DE', flag: '🇩🇪' },
  { name: 'France', code: '+33', iso: 'FR', flag: '🇫🇷' },
  { name: 'India', code: '+91', iso: 'IN', flag: '🇮🇳' },
  { name: 'South Africa', code: '+27', iso: 'ZA', flag: '🇿🇦' },
  { name: 'Tanzania', code: '+255', iso: 'TZ', flag: '🇹🇿' },
  { name: 'Uganda', code: '+256', iso: 'UG', flag: '🇺🇬' },
  { name: 'Rwanda', code: '+250', iso: 'RW', flag: '🇷🇼' },
  { name: 'China', code: '+86', iso: 'CN', flag: '🇨🇳' },
  { name: 'Japan', code: '+81', iso: 'JP', flag: '🇯🇵' },
  { name: 'Netherlands', code: '+31', iso: 'NL', flag: '🇳🇱' },
  { name: 'Italy', code: '+39', iso: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', iso: 'ES', flag: '🇪🇸' },
  { name: 'Brazil', code: '+55', iso: 'BR', flag: '🇧🇷' },
  { name: 'United Arab Emirates', code: '+971', iso: 'AE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: '+966', iso: 'SA', flag: '🇸🇦' },
  { name: 'Nigeria', code: '+234', iso: 'NG', flag: '🇳🇬' },
  { name: 'Ghana', code: '+233', iso: 'GH', flag: '🇬🇭' },
  { name: 'Ethiopia', code: '+251', iso: 'ET', flag: '🇪🇹' },
  { name: 'Egypt', code: '+20', iso: 'EG', flag: '🇪🇬' },
  { name: 'Morocco', code: '+212', iso: 'MA', flag: '🇲🇦' },
  { name: 'Sweden', code: '+46', iso: 'SE', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', iso: 'NO', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', iso: 'DK', flag: '🇩🇰' },
  { name: 'Switzerland', code: '+41', iso: 'CH', flag: '🇨🇭' },
  { name: 'Belgium', code: '+32', iso: 'BE', flag: '🇧🇪' },
  { name: 'Austria', code: '+43', iso: 'AT', flag: '🇦🇹' },
  { name: 'Portugal', code: '+351', iso: 'PT', flag: '🇵🇹' },
  { name: 'Ireland', code: '+353', iso: 'IE', flag: '🇮🇪' },
  { name: 'New Zealand', code: '+64', iso: 'NZ', flag: '🇳🇿' },
  { name: 'Singapore', code: '+65', iso: 'SG', flag: '🇸🇬' },
  { name: 'Malaysia', code: '+60', iso: 'MY', flag: '🇲🇾' },
  { name: 'Thailand', code: '+66', iso: 'TH', flag: '🇹🇭' },
  { name: 'South Korea', code: '+82', iso: 'KR', flag: '🇰🇷' },
  { name: 'Mexico', code: '+52', iso: 'MX', flag: '🇲🇽' },
  { name: 'Argentina', code: '+54', iso: 'AR', flag: '🇦🇷' },
  { name: 'Colombia', code: '+57', iso: 'CO', flag: '🇨🇴' },
  { name: 'Poland', code: '+48', iso: 'PL', flag: '🇵🇱' },
  { name: 'Czech Republic', code: '+420', iso: 'CZ', flag: '🇨🇿' },
  { name: 'Israel', code: '+972', iso: 'IL', flag: '🇮🇱' },
  { name: 'Turkey', code: '+90', iso: 'TR', flag: '🇹🇷' },
  { name: 'Russia', code: '+7', iso: 'RU', flag: '🇷🇺' },
  { name: 'Pakistan', code: '+92', iso: 'PK', flag: '🇵🇰' },
  { name: 'Bangladesh', code: '+880', iso: 'BD', flag: '🇧🇩' },
  { name: 'Philippines', code: '+63', iso: 'PH', flag: '🇵🇭' },
  { name: 'Indonesia', code: '+62', iso: 'ID', flag: '🇮🇩' },
  { name: 'Vietnam', code: '+84', iso: 'VN', flag: '🇻🇳' },
];

/* ────────────────────────── Types ────────────────────────── */
interface ChildAge {
  age: string;
  residency: string;
}

interface QuoteModalContextType {
  openModal: (packageName: string, packageUrl: string, isDayTrip?: boolean) => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

/* ────────────────────────── Custom Select Component ────────────────────────── */
function CustomSelect({ value, onChange, options, placeholder, icon: Icon }: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  icon?: typeof Globe;
}) {
  return (
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 transition focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20 appearance-none ${Icon ? 'pl-10' : ''}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
    </div>
  );
}

/* ────────────────────────── Provider ────────────────────────── */
export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [packageUrl, setPackageUrl] = useState('');
  const [isDayTrip, setIsDayTrip] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  /* ── Form State ── */
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [countryCode, setCountryCode] = useState('+254');
  const [phone, setPhone] = useState('');

  /* Adults */
  const [adultsResident, setAdultsResident] = useState(0);
  const [adultsCitizen, setAdultsCitizen] = useState(0);
  const [adultsNonResident, setAdultsNonResident] = useState(0);

  /* Children */
  const [childrenResident, setChildrenResident] = useState(0);
  const [childrenCitizen, setChildrenCitizen] = useState(0);
  const [childrenNonResident, setChildrenNonResident] = useState(0);
  const [childAges, setChildAges] = useState<ChildAge[]>([]);

  /* Dates */
  const [safariDate, setSafariDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [interests, setInterests] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalChildren = childrenResident + childrenCitizen + childrenNonResident;

  /* Update child ages array when children counts change */
  useEffect(() => {
    const newAges: ChildAge[] = [];
    for (let i = 0; i < childrenResident; i++) newAges.push({ age: childAges[newAges.length]?.age || '', residency: 'Resident' });
    for (let i = 0; i < childrenCitizen; i++) newAges.push({ age: childAges[newAges.length]?.age || '', residency: 'Citizen' });
    for (let i = 0; i < childrenNonResident; i++) newAges.push({ age: childAges[newAges.length]?.age || '', residency: 'Non-Resident' });
    setChildAges(newAges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childrenResident, childrenCitizen, childrenNonResident]);

  const openModal = useCallback((name: string, url: string, dayTrip?: boolean) => {
    setPackageName(name);
    setPackageUrl(url);
    setIsDayTrip(dayTrip ?? false);
    setIsOpen(true);
    setSubmitted(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  /* Close on outside click */
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) closeModal();
  };

  const totalAdults = adultsResident + adultsCitizen + adultsNonResident;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dateInfo = isDayTrip
      ? `Safari Date: ${safariDate}`
      : `Start Date: ${startDate} | End Date: ${endDate}`;

    const adultsInfo = `Adults — Residents: ${adultsResident}, Citizens: ${adultsCitizen}, Non-Residents: ${adultsNonResident} (Total: ${totalAdults})`;
    const childrenInfo = totalChildren > 0
      ? `Children — Residents: ${childrenResident}, Citizens: ${childrenCitizen}, Non-Residents: ${childrenNonResident} (Total: ${totalChildren})\nChild Ages: ${childAges.map((c, i) => `Child ${i + 1}: Age ${c.age} (${c.residency})`).join(', ')}`
      : 'Children: None';

    const body = [
      `Package: ${packageName}`,
      `Package URL: ${packageUrl}`,
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Nationality: ${nationality}`,
      `Phone: ${countryCode} ${phone}`,
      '',
      dateInfo,
      '',
      adultsInfo,
      childrenInfo,
      '',
      interests ? `Safari Interests: ${interests}` : '',
      message ? `Special Requests: ${message}` : '',
    ].filter(Boolean).join('\n');

    const subject = `Safari Quote Request — ${packageName} | ${packageUrl}`;

    const formData = new FormData();
    formData.append('name', fullName);
    formData.append('email', email);
    formData.append('_subject', subject);
    formData.append('message', body);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/info@catssafaris.com', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const inputClasses = "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 transition focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20";
  const labelClasses = "block text-xs font-semibold uppercase tracking-wider text-[#5c4d42] mb-1.5";

  /* ── Number Stepper ── */
  const Stepper = ({ value, onChange, label, min = 0, max = 20 }: { value: number; onChange: (v: number) => void; label: string; min?: number; max?: number }) => (
    <div className="flex items-center justify-between">
      <span className="text-sm text-stone-600">{label}</span>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="h-8 w-8 rounded-full border border-stone-300 text-stone-500 hover:bg-stone-100 transition flex items-center justify-center text-lg font-medium" aria-label={`Decrease ${label}`}>-</button>
        <span className="w-8 text-center text-sm font-semibold text-stone-800">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} className="h-8 w-8 rounded-full border border-[#a68b52] text-[#a68b52] hover:bg-[#a68b52]/10 transition flex items-center justify-center text-lg font-medium" aria-label={`Increase ${label}`}>+</button>
      </div>
    </div>
  );

  return (
    <QuoteModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#faf8f3] shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 rounded-t-2xl bg-gradient-to-r from-[#5c4d42] to-[#3d3229] px-6 py-5">
              <button onClick={closeModal} className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              <h2 className="text-xl font-bold text-white">Request a Safari Quote</h2>
              <p className="mt-1 text-sm text-[#c4a96a]">{packageName}</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#5c4d42]">Quote Request Sent</h3>
                <p className="mt-2 text-stone-600">Our safari specialists will get back to you within 24 hours with a personalised itinerary and pricing.</p>
                <button onClick={closeModal} className="mt-6 rounded-xl bg-[#a68b52] px-8 py-3 font-semibold text-white hover:bg-[#8a7343] transition">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* ── Personal Info ── */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a68b52] border-b border-stone-200 pb-2">Personal Information</h3>

                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                      <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" className={`${inputClasses} pl-10`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={`${inputClasses} pl-10`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Nationality *</label>
                    <CustomSelect
                      value={nationality}
                      onChange={setNationality}
                      options={countries.map((c) => ({ value: c.name, label: c.name }))}
                      placeholder="Select your nationality"
                      icon={Globe}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Phone / WhatsApp *</label>
                    <div className="flex gap-2">
                      <div className="relative w-[140px] flex-shrink-0">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-full rounded-lg border border-stone-300 bg-white px-3 py-3 text-sm text-stone-800 transition focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20 appearance-none"
                        >
                          {countries.map((c) => (
                            <option key={c.iso} value={c.code}>{c.flag} {c.code}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                      </div>
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className={`${inputClasses} pl-10`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Date Selection ── */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a68b52] border-b border-stone-200 pb-2">Safari Dates</h3>

                  {isDayTrip ? (
                    <div>
                      <label className={labelClasses}>Preferred Safari Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                        <input type="date" required value={safariDate} onChange={(e) => setSafariDate(e.target.value)} className={`${inputClasses} pl-10`} />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClasses}>Safari Start Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                          <input type="date" required value={startDate} onChange={(e) => setStartDate(e.target.value)} className={`${inputClasses} pl-10`} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClasses}>Safari End Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a68b52]" />
                          <input type="date" required value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate} className={`${inputClasses} pl-10`} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Adults ── */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a68b52] border-b border-stone-200 pb-2">
                    Adults
                    {totalAdults > 0 && <span className="ml-2 text-xs font-normal normal-case text-stone-500">(Total: {totalAdults})</span>}
                  </h3>
                  <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
                    <Stepper value={adultsResident} onChange={setAdultsResident} label="Residents (East Africa)" />
                    <Stepper value={adultsCitizen} onChange={setAdultsCitizen} label="Citizens (Kenyan)" />
                    <Stepper value={adultsNonResident} onChange={setAdultsNonResident} label="Non-Residents (International)" />
                  </div>
                </div>

                {/* ── Children ── */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a68b52] border-b border-stone-200 pb-2">
                    Children <span className="text-xs font-normal normal-case text-stone-400">(Under 18)</span>
                    {totalChildren > 0 && <span className="ml-2 text-xs font-normal normal-case text-stone-500">(Total: {totalChildren})</span>}
                  </h3>
                  <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
                    <Stepper value={childrenResident} onChange={setChildrenResident} label="Residents (East Africa)" />
                    <Stepper value={childrenCitizen} onChange={setChildrenCitizen} label="Citizens (Kenyan)" />
                    <Stepper value={childrenNonResident} onChange={setChildrenNonResident} label="Non-Residents (International)" />
                  </div>

                  {/* Child Age Selectors */}
                  {totalChildren > 0 && (
                    <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5c4d42]">Child Ages <span className="font-normal normal-case">(under 11 years)</span></p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {childAges.map((child, i) => (
                          <div key={i}>
                            <label className="text-xs text-stone-500 mb-1 block">Child {i + 1} <span className="text-[#a68b52]">({child.residency})</span></label>
                            <select
                              value={child.age}
                              onChange={(e) => {
                                const updated = [...childAges];
                                updated[i] = { ...updated[i], age: e.target.value };
                                setChildAges(updated);
                              }}
                              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 focus:border-[#a68b52] focus:outline-none focus:ring-2 focus:ring-[#a68b52]/20 appearance-none"
                              required
                            >
                              <option value="">Age</option>
                              {Array.from({ length: 12 }, (_, j) => (
                                <option key={j} value={String(j)}>{j === 0 ? 'Under 1' : `${j} year${j > 1 ? 's' : ''}`}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Interests & Message ── */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a68b52] border-b border-stone-200 pb-2">Additional Details</h3>

                  <div>
                    <label className={labelClasses}>Safari Interests</label>
                    <CustomSelect
                      value={interests}
                      onChange={setInterests}
                      options={[
                        { value: 'Big Five Wildlife', label: 'Big Five Wildlife' },
                        { value: 'Great Migration', label: 'Great Migration' },
                        { value: 'Gorilla Trekking', label: 'Gorilla Trekking' },
                        { value: 'Bush & Beach Combo', label: 'Bush & Beach Combo' },
                        { value: 'Photography Safari', label: 'Photography Safari' },
                        { value: 'Family Safari', label: 'Family Safari' },
                        { value: 'Honeymoon / Romance', label: 'Honeymoon / Romance' },
                        { value: 'Cultural Experiences', label: 'Cultural Experiences' },
                        { value: 'Mountain Climbing', label: 'Mountain Climbing' },
                        { value: 'Bird Watching', label: 'Bird Watching' },
                        { value: 'Day Trips & Excursions', label: 'Day Trips & Excursions' },
                        { value: 'Fly-In Safari', label: 'Fly-In Safari' },
                      ]}
                      placeholder="What excites you most?"
                      icon={Plane}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Special Requests or Questions</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Dietary requirements, mobility needs, special occasions, specific lodges preferred..."
                      rows={3}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#a68b52] to-[#8a7343] py-4 text-base font-bold text-white shadow-lg transition hover:shadow-xl hover:from-[#8a7343] hover:to-[#6d5a33] active:scale-[0.98]"
                >
                  Send Quote Request
                </button>

                <p className="text-center text-xs text-stone-400">
                  Our safari specialists respond within 24 hours. No commitment required.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}
