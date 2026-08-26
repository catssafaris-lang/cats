import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  { name: 'Kenya Safaris', href: '/kenya-safaris' },
  { name: 'Tanzania Safaris', href: '/tanzania-safaris' },
  { name: 'Kenya & Uganda', href: '/kenya-uganda-safaris' },
  { name: 'Kenya & Rwanda', href: '/kenya-rwanda-safaris' },
  { name: 'Beach Holidays', href: '/kenya-safaris?type=beach' },
  { name: 'Mountain Climbing', href: '/mountain-climbing' },
];

const experiences = [
  { name: 'Bird Watching', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania' },
  { name: 'Cultural Safaris', href: '/holiday-experiences/cultural-safaris' },
  { name: 'Wellness Travel', href: '/holiday-experiences/wellness-travel' },
  { name: 'Flight Safaris', href: '/kenya-flight-safaris' },
  { name: 'Transport Solutions', href: '/transport-solutions' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Kenya Lodges', href: '/travel-info/kenya-lodges' },
  { name: 'Tanzania Lodges', href: '/travel-info/tanzania-lodges' },
  { name: 'Payment Methods', href: '/payment-methods' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/cats-logo.jpg"
                alt="Collective African Tours & Safaris Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-bold text-lg">C.A.T.S Safaris</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Collective African Tours & Safaris — 15 years of crafting unforgettable
              safari experiences across East Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/CATSAFARISKENYA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/catssafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Experiences */}
          <div>
            <h3 className="font-bold text-lg mb-4">Safari Experiences</h3>
            <ul className="space-y-3">
              {experiences.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="https://g.page/r/CbOO5qcPRnPrEBM/review" target="_blank" rel="noopener noreferrer" className="block text-xs text-amber-400/90 hover:text-amber-300">
                GOOGLE REVIEW
              </a>
              <a href="https://www.tripadvisor.com/UserReviewEdit-g294207-d33351225-Collective_African_Tours_Safaris_C_A_T_S-Nairobi.html" target="_blank" rel="noopener noreferrer" className="block text-xs text-amber-400/90 hover:text-amber-300">
                REVIEW US
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Kenya & Tanzania Safari Tours with C.A.T.S
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Collective African Tours & Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
