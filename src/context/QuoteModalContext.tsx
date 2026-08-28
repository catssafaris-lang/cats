'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteModalState {
  isOpen: boolean;
  packageName?: string;
  openModal: (packageName?: string) => void;
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

  const openModal = (name?: string) => {
    setPackageName(name);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPackageName(undefined);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, packageName }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-8 relative" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Request a Quote</h2>
            {packageName && <p className="text-sm text-gray-500 mb-4">Package: {packageName}</p>}
            <form action="https://formsubmit.co/info@catssafaris.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value={`Quote Request: ${packageName || 'General Inquiry'}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input name="name" required placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              <input name="phone" placeholder="Phone / WhatsApp" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              <textarea name="message" rows={4} placeholder="Tell us about your dream safari — dates, group size, interests..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              <button type="submit" className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">Send Quote Request</button>
            </form>
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
