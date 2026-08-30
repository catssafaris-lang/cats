'use client';

import { createContext, useContext, useState, ReactNode, FormEvent } from 'react';
import { X, Send, CheckCircle, MapPin, Users, Calendar, Globe, Phone, Mail, User } from 'lucide-react';

interface QuoteModalState {
  isOpen: boolean;
  packageName?: string;
  packageUrl?: string;
  openModal: (packageName?: string, packageUrl?: string) => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalState>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [packageName, setPackageName] = useState<string>();
  const [packageUrl, setPackageUrl] = useState<string>();
  const [submitted, setSubmitted] = useState(false);

  const openModal = (name?: string, url?: string) => {
    setPackageName(name);
    setPackageUrl(url || (typeof window !== 'undefined' ? window.location.href : ''));
    setSubmitted(false);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setPackageName(undefined);
    setPackageUrl(undefined);
    setSubmitted(false);
    document.body.style.overflow = '';
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch('https://formsubmit.co/ajax/info@catssafaris.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      setSubmitted(true);
    } catch {
      // Fallback to direct formsubmit
      form.submit();
    }
  }

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#f7f4ed] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#a68b52] focus:border-transparent transition-all text-sm";
  const labelClasses = "block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5";

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, packageName, packageUrl }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={closeModal}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#5c4d42] text-white p-6 rounded-t-2xl sticky top-0 z-10">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                Request a Quote
              </h2>
              {packageName && (
                <p className="text-white/70 text-sm mt-1">{packageName}</p>
              )}
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#5c4d42] mb-2">Thank You!</h3>
                <p className="text-stone-600 mb-1">Your enquiry has been received.</p>
                <p className="text-stone-500 text-sm">Our safari specialists will respond within 2 hours with a personalised itinerary and quote.</p>
                <button
                  onClick={closeModal}
                  className="mt-6 px-8 py-3 bg-[#a68b52] hover:bg-[#8a7343] text-white rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/info@catssafaris.com"
                method="POST"
                className="p-6 space-y-4"
              >
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value={`[Safari Booking] ${packageName || 'General Enquiry'}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="Package" value={packageName || ''} />
                <input type="hidden" name="Page URL" value={packageUrl || ''} />

                {/* Full Name */}
                <div>
                  <label htmlFor="qm-name" className={labelClasses}>
                    <span className="inline-flex items-center gap-1"><User className="w-3 h-3" /> Full Name <span className="text-red-400">*</span></span>
                  </label>
                  <input id="qm-name" name="Full Name" type="text" required placeholder="e.g. Jane Smith" className={inputClasses} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="qm-email" className={labelClasses}>
                    <span className="inline-flex items-center gap-1"><Mail className="w-3 h-3" /> Email Address <span className="text-red-400">*</span></span>
                  </label>
                  <input id="qm-email" name="Email" type="email" required placeholder="jane@example.com" className={inputClasses} />
                </div>

                {/* Phone + Country side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="qm-phone" className={labelClasses}>
                      <span className="inline-flex items-center gap-1"><Phone className="w-3 h-3" /> Phone / WhatsApp</span>
                    </label>
                    <input id="qm-phone" name="Phone" type="tel" placeholder="+1 234 567 890" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="qm-country" className={labelClasses}>
                      <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" /> Country of Residence <span className="text-red-400">*</span></span>
                    </label>
                    <input id="qm-country" name="Country of Residence" type="text" required placeholder="e.g. United States" className={inputClasses} />
                  </div>
                </div>

                {/* Adults + Children side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="qm-adults" className={labelClasses}>
                      <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" /> Adults <span className="text-red-400">*</span></span>
                    </label>
                    <input id="qm-adults" name="Adults" type="number" min="1" max="50" required placeholder="2" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="qm-children" className={labelClasses}>
                      <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" /> Children (under 12)</span>
                    </label>
                    <input id="qm-children" name="Children" type="number" min="0" max="20" placeholder="0" className={inputClasses} />
                  </div>
                </div>

                {/* Preferred Travel Date */}
                <div>
                  <label htmlFor="qm-date" className={labelClasses}>
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> Preferred Travel Date</span>
                  </label>
                  <input id="qm-date" name="Travel Date" type="date" className={inputClasses} />
                </div>

                {/* Safari Interests */}
                <div>
                  <label htmlFor="qm-interests" className={labelClasses}>
                    <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> Safari Interests</span>
                  </label>
                  <input id="qm-interests" name="Interests" type="text" placeholder="e.g. Big Five, Great Migration, Beach Extension" className={inputClasses} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="qm-message" className={labelClasses}>
                    Special Requests / Message
                  </label>
                  <textarea
                    id="qm-message"
                    name="Message"
                    rows={3}
                    placeholder="Tell us about your dream safari — budget preferences, must-see destinations, dietary requirements..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Booking Enquiry
                </button>
                <p className="text-xs text-center text-stone-400">
                  No booking fees — our safari specialists respond within 2 hours
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
