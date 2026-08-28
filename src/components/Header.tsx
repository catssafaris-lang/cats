'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData, NavSection, NavDropdownItem } from '@/data/navigation';

/* ── CATS Palette ── */
const C = {
  green: '#2d5016',
  gold: '#c8a45a',
  ivory: '#faf8f0',
  panel: '#3b2f1e',
  panelHover: '#4d3e2b',
};

/* ═══════════════════  DESKTOP DROPDOWN  ═══════════════════ */
function DesktopDropdown({ section, onClose }: { section: NavSection; onClose: () => void }) {
  const [flyoutItem, setFlyoutItem] = useState<NavDropdownItem | null>(null);
  const isSafari = section.name === 'Safari Experiences';
  const isExperiences = section.name === 'Experiences';

  return (
    <div
      className="absolute top-full left-0 mt-0 z-50"
      style={{ minWidth: 280 }}
    >
      <div
        className="flex rounded-lg shadow-2xl border overflow-hidden mt-2"
        style={{ background: C.panel, borderColor: C.gold + '30' }}
      >
        {/* ── Safari Experiences: vertical list ── */}
        {isSafari && (
          <div className="py-3" style={{ width: 300 }}>
            {section.dropdown!.map((item) => {
              const hasChildren = !!item.children?.length;
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasChildren ? setFlyoutItem(item) : setFlyoutItem(null)}
                  onMouseLeave={() => {}}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-5 py-2.5 text-sm transition-colors"
                    style={{ color: C.ivory }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = C.panelHover;
                      (e.currentTarget as HTMLElement).style.color = C.gold;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = C.ivory;
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

        {/* ── Flyout for Nairobi Kenya Safaris only ── */}
        {isSafari && flyoutItem?.children && (
          <div
            className="py-3 border-l"
            style={{ width: 240, borderColor: C.gold + '20' }}
          >
            {flyoutItem.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm transition-colors"
                style={{ color: C.ivory }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.panelHover;
                  (e.currentTarget as HTMLElement).style.color = C.gold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = C.ivory;
                }}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}

        {/* ── Experiences: 2-col grid with descriptions ── */}
        {isExperiences && (
          <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-1" style={{ width: 560 }}>
            {section.dropdown!.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 rounded transition-colors"
                style={{ color: C.ivory }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.panelHover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <span className="block text-sm font-medium" style={{ color: C.gold }}>{item.name}</span>
                {item.description && (
                  <span className="block text-xs mt-0.5" style={{ color: C.ivory + 'AA' }}>{item.description}</span>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* ── Travel Info / Flights: simple list ── */}
        {!isSafari && !isExperiences && (
          <div className="py-3" style={{ width: 280 }}>
            {section.dropdown!.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm transition-colors"
                style={{ color: C.ivory }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.panelHover;
                  (e.currentTarget as HTMLElement).style.color = C.gold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = C.ivory;
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
        style={{ background: C.panel }}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={C.ivory} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 pb-8">
          {navigationData.map((section) => {
            if (!section.dropdown) {
              return (
                <Link
                  key={section.name}
                  href={section.href!}
                  onClick={onClose}
                  className="block py-3 text-base font-medium border-b"
                  style={{ color: C.ivory, borderColor: C.gold + '20' }}
                >
                  {section.name}
                </Link>
              );
            }

            const isOpen = expanded === section.name;
            return (
              <div key={section.name} className="border-b" style={{ borderColor: C.gold + '20' }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : section.name)}
                  className="flex items-center justify-between w-full py-3 text-base font-medium"
                  style={{ color: C.ivory }}
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
                            style={{ color: C.ivory + 'CC' }}
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
                            style={{ color: C.gold }}
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
                                  style={{ color: C.ivory + 'AA' }}
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
      {/* ── Top bar ── */}
      <div style={{ background: C.green }} className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs py-1.5" style={{ color: C.ivory + 'CC' }}>
          <div className="flex items-center gap-4">
            <a href="mailto:info@catssafaris.com" className="hover:underline">info@catssafaris.com</a>
            <span>|</span>
            <a href="tel:+254723951388" className="hover:underline">+254 723 951 388</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/CATSAFARISKENYA" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/cats-logo.png"
              alt="Collective African Tours & Safaris"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold hidden lg:inline" style={{ color: C.green }}>
                Collective African Tours & Safaris
              </span>
              <span className="text-lg font-bold lg:hidden" style={{ color: C.green }}>
                C.A.T.S Safaris
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {navigationData.map((section) => {
              if (!section.dropdown) {
                return (
                  <Link
                    key={section.name}
                    href={section.href!}
                    className="px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-gray-100"
                    style={{ color: C.green }}
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
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-gray-100"
                    style={{ color: isActive ? C.gold : C.green }}
                    onClick={() => setActiveDropdown(isActive ? null : section.name)}
                  >
                    {section.name}
                    <svg className={`w-3 h-3 transition-transform ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

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

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={C.green} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
