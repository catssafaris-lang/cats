'use client';

import { useState } from 'react';
import Link from 'next/link';

function WhatsAppIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3 0-.46.13-.6.12-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34ZM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.38A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z" /></svg>; }
function PhoneIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></svg>; }
function CompassIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>; }

const quickLinks = [
  { name: 'Kenya Safaris', href: '/kenya-safaris' },
  { name: 'Tanzania Safaris', href: '/tanzania-safaris' },
  { name: 'Kenya-Uganda Safaris', href: '/kenya-uganda-safaris' },
  { name: 'Kenya-Rwanda Safaris', href: '/kenya-rwanda-safaris' },
  { name: 'Experiences', href: '/holiday-experiences' },
  { name: 'Flights', href: '/flights' },
  { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
  { name: 'Domestic Flights', href: '/domestic-flights' },
  { name: 'Mountain Climbing', href: '/mountain-climbing' },
  { name: 'Wellness Travel', href: '/wellness-travel' },
  { name: 'Transport Solutions', href: '/transport-solutions' },
  { name: 'Kenya Lodges', href: '/travel-info/kenya-lodges' },
  { name: 'Tanzania Lodges', href: '/travel-info/tanzania-lodges' },
  { name: 'Rwanda Lodges', href: '/travel-info/rwanda-lodges' },
  { name: 'Uganda Lodges', href: '/travel-info/uganda-lodges' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Payment Methods', href: '/payment-methods' },
];

export default function StickyBottomBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Navigation overlay */}
      {navOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 xl:hidden" onClick={() => setNavOpen(false)}>
          <div className="absolute bottom-16 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-white p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-stone-500">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setNavOpen(false)} className="rounded-lg bg-stone-50 px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-[var(--warm-ivory)] hover:text-[var(--cats-green)] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 xl:hidden">
        <div className="flex items-center justify-around bg-[var(--cats-green)] px-2 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
          <a href="https://wa.me/254723951388?text=Hello%20CATS%20Safaris%2C%20I%27d%20like%20to%20enquire%20about%20a%20safari" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 text-white">
            <WhatsAppIcon />
            <span className="text-[10px] font-medium">WhatsApp</span>
          </a>
          <a href="tel:+254723951388" className="flex flex-col items-center gap-0.5 text-white">
            <PhoneIcon />
            <span className="text-[10px] font-medium">Call Us</span>
          </a>
          <button type="button" onClick={() => setNavOpen(!navOpen)} className="flex flex-col items-center gap-0.5 text-[var(--golden-savannah)]">
            <CompassIcon />
            <span className="text-[10px] font-medium">Explore</span>
          </button>
          <a href="mailto:info@catssafaris.com?subject=Safari%20Enquiry" className="flex flex-col items-center gap-0.5 text-white">
            <MailIcon />
            <span className="text-[10px] font-medium">Email</span>
          </a>
        </div>
      </div>
    </>
  );
}
