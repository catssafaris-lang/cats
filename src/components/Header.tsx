'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData, NavSection, NavDropdownItem } from '@/data/navigation';

/* ── CATS Palette — matching original design ── */
const C = {
  /* Top utility bar */
  topBar: '#2d3530',          /* dark forest green */
  topBarText: '#ffffff',
  teal: '#4f5d56',            /* Transport / Flight buttons */
  tealHover: '#3a4740',
  amber: '#a68b52',           /* Book Safari button */
  amberHover: '#8c7544',
  /* Main nav bar */
  navBg: '#ffffff',           /* white nav background */
  navText: '#3b2f1e',         /* dark brown text */
  navHover: '#1a3c34',        /* dark green on hover */
  gold: '#c8a45e',            /* gold accent */
  /* Dropdown */
  dropBg: '#1a3c34',
  dropHover: '#244a41',
  dropText: '#ffffff',
  dropGold: '#c8a45e',
  /* Mobile */
  mobileBg: '#1a3c34',
};

/* ═══════════════════  DESKTOP DROPDOWN  ═══════════════════ */
function DesktopDropdown({ section, onClose }: { section: NavSection; onClose: () => void }) {
  const [flyoutItem, setFlyoutItem] = useState<NavDropdownItem | null>(null);
  const isKenyaSafaris = section.name === 'Kenya Safaris';
  const isExperiences = section.name === 'Experiences';

  return (
    <div className="absolute top-full left-0 mt-0 z-50" style={{ minWidth: 260 }}>
      <div
        className="flex rounded-lg shadow-2xl border overflow-hidden mt-1"
        style={{ background: C.dropBg, borderColor: C.dropGold + '30' }}
      >
        {/* Kenya Safaris: vertical list with Nairobi flyout */}
        {isKenyaSafaris && (
          <div className="py-3" style={{ width: 280 }}>
            {section.dropdown!.map((item) => {
              const hasChildren = !!item.children?.length;
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasChildren ? setFlyoutItem(item) : setFlyoutItem(null)}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-5 py-2.5 text-sm transition-colors"
                    style={{ color: C.dropText }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = C.dropHover;
                      (e.currentTarget as HTMLElement).style.color = C.dropGold;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = C.dropText;
                    }}
                  >
                    <span>{item.name}</span>
                    {hasChildren && (
                      <svg className="w-3 h-3 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Flyout for Nairobi sub-items */}
        {isKenyaSafaris && flyoutItem?.children && (
          <div className="py-3 border-l" style={{ width: 220, borderColor: C.dropGold + '20' }}>
            {flyoutItem.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm transition-colors"
                style={{ color: C.dropText }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.dropHover;
                  (e.currentTarget as HTMLElement).style.color = C.dropGold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = C.dropText;
                }}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}

        {/* Experiences: 2-col grid */}
        {isExperiences && (
          <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-1" style={{ width: 540 }}>
            {section.dropdown!.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 rounded transition-colors"
                style={{ color: C.dropText }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.dropHover; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span className="block text-sm font-medium" style={{ color: C.dropGold }}>{item.name}</span>
                {item.description && (
                  <span className="block text-xs mt-0.5" style={{ color: C.dropText + 'AA' }}>{item.description}</span>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Travel Info / other: simple list */}
        {!isKenyaSafaris && !isExperiences && (
          <div className="py-3" style={{ width: 260 }}>
            {section.dropdown!.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm transition-colors"
                style={{ color: C.dropText }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.dropHover;
                  (e.currentTarget as HTMLElement).style.color = C.dropGold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = C.dropText;
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════  MOBILE MENU  ═══════════════════ */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className="absolute top-0 right-0 h-full w-[85vw] max-w-sm overflow-y-auto"
        style={{ background: C.mobileBg }}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile quick-action buttons */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          <Link
            href="/transport-solutions"
            onClick={onClose}
            className="block text-center py-2.5 px-4 rounded text-sm font-bold uppercase tracking-wider text-white transition-colors"
            style={{ background: C.teal }}
          >
            Transport Solutions
          </Link>
          <Link
            href="/flights"
            onClick={onClose}
            className="block text-center py-2.5 px-4 rounded text-sm font-bold uppercase tracking-wider text-white transition-colors"
            style={{ background: C.teal }}
          >
            Flight Booking
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center py-2.5 px-4 rounded text-sm font-bold uppercase tracking-wider"
            style={{ background: C.amber, color: '#1a3c34' }}
          >
            Book Safari
          </Link>
        </div>

        <nav className="px-4 pb-8">
          <Link
            href="/"
            onClick={onClose}
            className="block py-3 text-base font-medium border-b"
            style={{ color: '#fff', borderColor: C.dropGold + '20' }}
          >
            Home
          </Link>

          {navigationData.map((section) => {
            if (!section.dropdown) {
              return (
                <Link
                  key={section.name}
                  href={section.href!}
                  onClick={onClose}
                  className="block py-3 text-base font-medium border-b"
                  style={{ color: '#fff', borderColor: C.dropGold + '20' }}
                >
                  {section.name}
                </Link>
              );
            }

            const isOpen = expanded === section.name;
            return (
              <div key={section.name} className="border-b" style={{ borderColor: C.dropGold + '20' }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : section.name)}
                  className="flex items-center justify-between w-full py-3 text-base font-medium"
                  style={{ color: '#fff' }}
                >
                  {section.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="pb-2 pl-3">
                    {section.href && (
                      <Link
                        href={section.href}
                        onClick={onClose}
                        className="block py-2 text-sm font-semibold"
                        style={{ color: C.dropGold }}
                      >
                        View All {section.name} →
                      </Link>
                    )}
                    {section.dropdown.map((item) => {
                      const hasChildren = !!item.children?.length;
                      const isSubOpen = subExpanded === item.name;

                      if (!hasChildren) {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="block py-2 text-sm"
                            style={{ color: '#ffffffCC' }}
                          >
                            {item.name}
                          </Link>
                        );
                      }

                      return (
                        <div key={item.name}>
                          <button
                            onClick={() => setSubExpanded(isSubOpen ? null : item.name)}
                            className="flex items-center justify-between w-full py-2 text-sm"
                            style={{ color: C.dropGold }}
                          >
                            {item.name}
                            <svg
                              className={`w-3 h-3 transition-transform ${isSubOpen ? 'rotate-90' : ''}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          {isSubOpen && (
                            <div className="pl-3 pb-1">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-sm"
                                  style={{ color: '#ffffffAA' }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* ═══════════════════  MAIN HEADER  ═══════════════════ */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const openDropdown = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
    <div className="sticky top-0 z-50">
      {/* ═══ TOP UTILITY BAR — dark forest green ═══ */}
      <div className="hidden md:block" style={{ background: C.topBar }}>
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-10">
          {/* Left: phone + email */}
          <div className="flex items-center gap-4 text-xs" style={{ color: C.topBarText }}>
            <a href="tel:+254723951388" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" style={{ color: C.topBarText }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 723 951 388
            </a>
            <a href="mailto:info@catssafaris.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" style={{ color: C.topBarText }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@catssafaris.com
            </a>
          </div>

          {/* Right: action buttons + location */}
          <div className="flex items-center gap-2">
            <Link
              href="/transport-solutions"
              className="px-3.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider border transition-colors"
              style={{ background: C.teal, color: C.topBarText, border: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.teal; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Transport Solutions
            </Link>
            <Link
              href="/flights"
              className="px-3.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider border transition-colors"
              style={{ background: C.teal, color: C.topBarText, border: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.teal; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Flight Booking
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-white transition-colors"
              style={{ background: C.amber }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.amberHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.amber; }}
            >
              Book Safari
            </Link>
            <span className="ml-2 text-[11px] flex items-center gap-1" style={{ color: '#ffffffAA' }}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nairobi, Kenya
            </span>
          </div>
        </div>
      </div>

      {/* ═══ MAIN NAVIGATION BAR — white/ivory ═══ */}
      <header className="shadow-md border-b" style={{ background: C.navBg, borderColor: '#e5e2db' }}>
        <div className="max-w-[1400px] mx-auto px-3 flex items-center h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-6">
            <Image
              src="/cats-logo-full.jpg"
              alt="Collective African Tours & Safaris (C.A.T.S)"
              width={400}
              height={88}
              className="h-[70px] w-auto object-contain hidden lg:block"
              priority
            />
            <Image
              src="/cats-logo-full.jpg"
              alt="Collective African Tours & Safaris (C.A.T.S)"
              width={280}
              height={64}
              className="h-[56px] w-auto object-contain hidden sm:block lg:hidden"
              priority
            />
            <Image
              src="/cats-logo-full.jpg"
              alt="C.A.T.S Safaris"
              width={200}
              height={52}
              className="h-[46px] w-auto object-contain sm:hidden"
              priority
            />
          </Link>

          {/* Desktop nav — dark text on white background */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-0 ml-auto">
            <Link
              href="/"
              className="px-2.5 xl:px-3 py-2 text-[13px] font-semibold rounded transition-colors whitespace-nowrap"
              style={{ color: C.navText }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.navHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.navText; }}
            >
              Home
            </Link>

            {navigationData.map((section) => {
              if (!section.dropdown) {
                return (
                  <Link
                    key={section.name}
                    href={section.href!}
                    className="px-2.5 xl:px-3 py-2 text-[13px] font-semibold rounded transition-colors whitespace-nowrap"
                    style={{ color: C.navText }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.navHover; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.navText; }}
                  >
                    {section.name}
                  </Link>
                );
              }

              const isActive = activeDropdown === section.name;
              return (
                <div
                  key={section.name}
                  className="relative"
                  onMouseEnter={() => openDropdown(section.name)}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex items-center gap-0 px-2.5 xl:px-3 py-2 cursor-pointer">
                    {section.href ? (
                      <Link
                        href={section.href}
                        className="text-[13px] font-semibold transition-colors whitespace-nowrap"
                        style={{ color: isActive ? C.navHover : C.navText }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.navHover; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isActive ? C.navHover : C.navText; }}
                      >
                        {section.name}
                      </Link>
                    ) : (
                      <span
                        className="text-[13px] font-semibold transition-colors whitespace-nowrap"
                        style={{ color: isActive ? C.navHover : C.navText }}
                      >
                        {section.name}
                      </span>
                    )}
                    <svg className={`w-3 h-3 ml-0.5 transition-transform ${isActive ? 'rotate-180' : ''}`} style={{ color: isActive ? C.navHover : C.navText }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {isActive && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <DesktopDropdown
                        section={section}
                        onClose={() => setActiveDropdown(null)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger — dark on white */}
          <button
            className="lg:hidden p-2 ml-auto"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={C.navText} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </div>

    <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
