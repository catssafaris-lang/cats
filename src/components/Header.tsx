'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  {
    name: 'Kenya Safaris',
    href: '/kenya-safaris',
    children: [
      { name: 'Kenya Safari Tours', href: '/kenya-safaris' },
      { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
    ],
  },
  {
    name: 'Tanzania Safaris',
    href: '/tanzania-safaris',
    children: [
      { name: 'Tanzania Safari Tours', href: '/tanzania-safaris' },
      { name: 'Zanzibar Beach Holidays', href: '/holiday-experiences/zanzibar-beach-holidays' },
    ],
  },
  {
    name: 'Combined Safaris',
    href: '#',
    children: [
      { name: 'Kenya & Uganda', href: '/kenya-uganda-safaris' },
      { name: 'Kenya & Rwanda', href: '/kenya-rwanda-safaris' },
    ],
  },
  {
    name: 'Experiences',
    href: '/holiday-experiences',
    children: [
      { name: 'All Experiences', href: '/holiday-experiences' },
      { name: 'Bird Watching', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania' },
      { name: 'Cultural Safaris', href: '/holiday-experiences/cultural-safaris' },
      { name: 'Wellness Travel', href: '/holiday-experiences/wellness-travel' },
    ],
  },
  {
    name: 'Travel Info',
    href: '#',
    children: [
      { name: 'Kenya Lodges', href: '/travel-info/kenya-lodges' },
      { name: 'Tanzania Lodges', href: '/travel-info/tanzania-lodges' },
      { name: 'Transport Solutions', href: '/transport-solutions' },
      { name: 'Mountain Climbing', href: '/mountain-climbing' },
      { name: 'Payment Methods', href: '/payment-methods' },
    ],
  },
  { name: 'Flight Booking', href: '/flights' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/cats-logo.jpg"
              alt="C.A.T.S Safaris"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className={`font-bold text-lg ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                C.A.T.S Safaris
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 min-w-0 flex-1 justify-end">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    scrolled
                      ? 'text-stone-700 hover:text-amber-600 hover:bg-amber-50'
                      : 'text-white/90 hover:text-amber-400'
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <svg className="inline-block w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && openDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-stone-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-[var(--golden-savannah)] text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Plan My Safari
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${scrolled ? 'text-stone-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.children && setMobileOpen(false)}
                  className="block px-4 py-3 text-stone-700 font-medium hover:bg-amber-50 rounded-lg"
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-stone-500 hover:text-amber-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-4 px-5 py-3 bg-[var(--golden-savannah)] text-white text-center font-semibold rounded-full"
            >
              Plan My Safari
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
