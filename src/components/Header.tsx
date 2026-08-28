'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem, navigation } from '@/data/navigation';

/* ---------------------------------------------------------------------- */
/* Colours                                                                 */
/* ---------------------------------------------------------------------- */
const COLORS = {
  darkGreen: '#1B3A2D',
  gold: '#C8A45E',
  ivory: '#F5F0E8',
  white: '#FFFFFF',
};

/* ---------------------------------------------------------------------- */
/* Icons                                                                   */
/* ---------------------------------------------------------------------- */
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronRightIcon({ color = COLORS.darkGreen }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronDownIcon({ color = COLORS.darkGreen, rotated = false }: { color?: string; rotated?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform 150ms ease', transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Desktop Mega Menu (up to 3 columns, flyout on hover)                    */
/* ---------------------------------------------------------------------- */
function FlyoutMegaMenu({ item }: { item: NavItem }) {
  const [activeLevel1, setActiveLevel1] = useState<NavItem | null>(item.children && item.children.length > 0 ? item.children[0] : null);
  const [activeLevel2, setActiveLevel2] = useState<NavItem | null>(
    item.children && item.children.length > 0 && item.children[0].children && item.children[0].children.length > 0
      ? item.children[0].children[0]
      : null
  );

  const level1Items = item.children ?? [];
  const level2Items = activeLevel1?.children ?? [];
  const level3Items = activeLevel2?.children ?? [];

  const columnStyle: React.CSSProperties = {
    maxHeight: '70vh',
    overflowY: 'auto',
    padding: '18px 10px',
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: COLORS.white,
        boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
        borderTop: `3px solid ${COLORS.gold}`,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          maxHeight: '70vh',
        }}
      >
        {/* Column 1 */}
        <div style={{ ...columnStyle, flex: '0 0 300px', borderRight: `1px solid ${COLORS.ivory}` }}>
          {level1Items.map((child) => {
            const isActive = activeLevel1?.href === child.href && activeLevel1?.name === child.name;
            return (
              <Link
                key={child.href + child.name}
                href={child.href}
                onMouseEnter={() => {
                  setActiveLevel1(child);
                  setActiveLevel2(child.children && child.children.length > 0 ? child.children[0] : null);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  padding: '10px 14px',
                  textDecoration: 'none',
                  color: isActive ? COLORS.darkGreen : '#333',
                  background: isActive ? COLORS.ivory : 'transparent',
                  borderLeft: isActive ? `3px solid ${COLORS.gold}` : '3px solid transparent',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '14px',
                  borderRadius: '4px',
                  transition: 'all 150ms ease',
                }}
              >
                <span>{child.name}</span>
                {child.children && child.children.length > 0 && <ChevronRightIcon color={isActive ? COLORS.gold : '#999'} />}
              </Link>
            );
          })}
        </div>

        {/* Column 2 */}
        {level2Items.length > 0 && (
          <div style={{ ...columnStyle, flex: '0 0 300px', borderRight: level3Items.length > 0 ? `1px solid ${COLORS.ivory}` : 'none' }}>
            {level2Items.map((child) => {
              const isActive = activeLevel2?.href === child.href && activeLevel2?.name === child.name;
              return (
                <Link
                  key={child.href + child.name}
                  href={child.href}
                  onMouseEnter={() => setActiveLevel2(child)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    padding: '10px 14px',
                    textDecoration: 'none',
                    color: isActive ? COLORS.darkGreen : '#333',
                    background: isActive ? COLORS.ivory : 'transparent',
                    borderLeft: isActive ? `3px solid ${COLORS.gold}` : '3px solid transparent',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '14px',
                    borderRadius: '4px',
                    transition: 'all 150ms ease',
                  }}
                >
                  <span>{child.name}</span>
                  {child.children && child.children.length > 0 && <ChevronRightIcon color={isActive ? COLORS.gold : '#999'} />}
                </Link>
              );
            })}
          </div>
        )}

        {/* Column 3 */}
        {level3Items.length > 0 && (
          <div style={{ ...columnStyle, flex: '1 1 auto', minWidth: '320px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '4px 16px',
              }}
            >
              {level3Items.map((child) => (
                <Link
                  key={child.href + child.name}
                  href={child.href}
                  style={{
                    display: 'block',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '13.5px',
                    borderRadius: '4px',
                    transition: 'all 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = COLORS.ivory;
                    e.currentTarget.style.color = COLORS.darkGreen;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#333';
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{child.name}</div>
                  {child.description && (
                    <div style={{ fontSize: '12px', color: '#777', marginTop: '2px' }}>{child.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Grid Mega Menu (for "Experiences")                                      */
/* ---------------------------------------------------------------------- */
function GridMegaMenu({ item }: { item: NavItem }) {
  const items = item.children ?? [];
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: COLORS.white,
        boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
        borderTop: `3px solid ${COLORS.gold}`,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          maxHeight: '70vh',
          overflowY: 'auto',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4px 24px',
        }}
      >
        {items.map((child) => (
          <Link
            key={child.href + child.name}
            href={child.href}
            style={{
              display: 'block',
              padding: '10px 12px',
              textDecoration: 'none',
              color: '#333',
              borderRadius: '4px',
              borderLeft: '3px solid transparent',
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.ivory;
              e.currentTarget.style.borderLeft = `3px solid ${COLORS.gold}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderLeft = '3px solid transparent';
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '14px', color: COLORS.darkGreen }}>{child.name}</div>
            {child.description && (
              <div style={{ fontSize: '12.5px', color: '#777', marginTop: '2px', lineHeight: 1.4 }}>{child.description}</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Simple List Mega Menu (for "Flights")                                   */
/* ---------------------------------------------------------------------- */
function SimpleListMegaMenu({ item }: { item: NavItem }) {
  const items = item.children ?? [];
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        background: COLORS.white,
        boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
        borderTop: `3px solid ${COLORS.gold}`,
        zIndex: 50,
        minWidth: '360px',
      }}
    >
      <div style={{ padding: '14px 8px', maxHeight: '70vh', overflowY: 'auto' }}>
        {items.map((child) => (
          <Link
            key={child.href + child.name}
            href={child.href}
            style={{
              display: 'block',
              padding: '10px 16px',
              textDecoration: 'none',
              color: '#333',
              borderRadius: '4px',
              borderLeft: '3px solid transparent',
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.ivory;
              e.currentTarget.style.borderLeft = `3px solid ${COLORS.gold}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderLeft = '3px solid transparent';
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '14px', color: COLORS.darkGreen }}>{child.name}</div>
            {child.description && (
              <div style={{ fontSize: '12.5px', color: '#777', marginTop: '2px', lineHeight: 1.4 }}>{child.description}</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Mobile Accordion Item                                                   */
/* ---------------------------------------------------------------------- */
function MobileAccordionItem({
  item,
  depth,
  path,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  depth: number;
  path: string;
  expanded: Set<string>;
  onToggle: (path: string) => void;
  onNavigate: () => void;
}) {
  const hasChildren = !!item.children && item.children.length > 0;
  const isOpen = expanded.has(path);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          paddingLeft: `${16 + depth * 16}px`,
          borderBottom: '1px solid #eee',
          background: isOpen ? COLORS.ivory : COLORS.white,
          transition: 'background 150ms ease',
        }}
      >
        <Link
          href={item.href}
          onClick={onNavigate}
          style={{
            flex: 1,
            textDecoration: 'none',
            color: isOpen ? COLORS.darkGreen : '#222',
            fontWeight: isOpen ? 700 : depth === 0 ? 600 : 500,
            fontSize: depth === 0 ? '15px' : '14px',
          }}
        >
          {item.name}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => onToggle(path)}
            aria-label={isOpen ? 'Collapse' : 'Expand'}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ChevronDownIcon color={isOpen ? COLORS.gold : '#888'} rotated={isOpen} />
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div>
          {item.children!.map((child, idx) => (
            <MobileAccordionItem
              key={child.href + child.name + idx}
              item={child}
              depth={depth + 1}
              path={`${path}-${idx}`}
              expanded={expanded}
              onToggle={onToggle}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Header Component                                                         */
/* ---------------------------------------------------------------------- */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openMenu = useCallback((name: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveMenu(name);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const toggleMobilePath = useCallback((path: string) => {
    setExpandedPaths((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setExpandedPaths(new Set());
  }, []);

  const activeItem = navigation.find((n) => n.name === activeMenu) ?? null;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, fontFamily: 'inherit' }}>
      {/* ---------------- Top Utility Bar ---------------- */}
      <div
        style={{
          background: COLORS.darkGreen,
          color: COLORS.ivory,
          fontSize: '12.5px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="tel:+254729981727"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: COLORS.ivory, textDecoration: 'none' }}
            >
              <PhoneIcon />
              <span>+254 729 981 727</span>
            </a>
            <a
              href="mailto:info@catssafaris.com"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: COLORS.ivory, textDecoration: 'none' }}
            >
              <EmailIcon />
              <span>info@catssafaris.com</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/CATSAFARISKENYA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: COLORS.gold, display: 'flex', alignItems: 'center' }}
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Main Nav Bar ---------------- */}
      <div
        ref={navRef}
        onMouseLeave={scheduleClose}
        style={{
          background: COLORS.white,
          boxShadow: scrolled ? '0 4px 14px rgba(0,0,0,0.10)' : '0 1px 0 rgba(0,0,0,0.06)',
          transition: 'box-shadow 150ms ease',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Image
              src="/images/cats-logo.png"
              alt="Collective African Tours & Safaris"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
            <span
              style={{
                color: COLORS.darkGreen,
                fontWeight: 700,
                fontSize: '17px',
                lineHeight: 1.1,
              }}
            >
              <span className="header-company-full">Collective African Tours &amp; Safaris</span>
              <span className="header-company-short" style={{ display: 'none' }}>
                C.A.T.S Safaris
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '4px' }}>
            {navigation.map((item) => {
              const hasChildren = !!item.children && item.children.length > 0;
              const isActive = activeMenu === item.name;
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => hasChildren && openMenu(item.name)}
                  style={{ position: 'static' }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '10px 14px',
                      textDecoration: 'none',
                      color: isActive ? COLORS.gold : COLORS.darkGreen,
                      fontWeight: 600,
                      fontSize: '14px',
                      borderBottom: isActive ? `2px solid ${COLORS.gold}` : '2px solid transparent',
                      transition: 'all 150ms ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.name}
                    {hasChildren && <ChevronDownIcon color={isActive ? COLORS.gold : COLORS.darkGreen} rotated={isActive} />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="header-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'flex',
              background: 'transparent',
              border: 'none',
              color: COLORS.darkGreen,
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mega Menu Panel */}
        {activeItem && activeItem.children && activeItem.children.length > 0 && (
          <div onMouseEnter={() => openMenu(activeItem.name)}>
            {activeItem.name === 'Experiences' ? (
              <GridMegaMenu item={activeItem} />
            ) : activeItem.name === 'Flights' ? (
              <SimpleListMegaMenu item={activeItem} />
            ) : (
              <FlyoutMegaMenu item={activeItem} />
            )}
          </div>
        )}
      </div>

      {/* ---------------- Mobile Full-Screen Overlay ---------------- */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: COLORS.white,
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              borderBottom: `2px solid ${COLORS.gold}`,
              background: COLORS.darkGreen,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image
                src="/images/cats-logo.png"
                alt="Collective African Tours & Safaris"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span style={{ color: COLORS.ivory, fontWeight: 700, fontSize: '15px' }}>C.A.T.S Safaris</span>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              style={{ background: 'transparent', border: 'none', color: COLORS.ivory, cursor: 'pointer', padding: '6px' }}
            >
              <CloseIcon />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {navigation.map((item, idx) => (
              <MobileAccordionItem
                key={item.name + idx}
                item={item}
                depth={0}
                path={`${idx}`}
                expanded={expandedPaths}
                onToggle={toggleMobilePath}
                onNavigate={closeMobile}
              />
            ))}

            <div style={{ padding: '20px 16px', borderTop: '1px solid #eee', background: COLORS.ivory }}>
              <a
                href="tel:+254729981727"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.darkGreen, textDecoration: 'none', marginBottom: '10px', fontWeight: 600 }}
              >
                <PhoneIcon />
                <span>+254 729 981 727</span>
              </a>
              <a
                href="mailto:info@catssafaris.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.darkGreen, textDecoration: 'none', marginBottom: '10px', fontWeight: 600 }}
              >
                <EmailIcon />
                <span>info@catssafaris.com</span>
              </a>
              <a
                href="https://www.facebook.com/CATSAFARISKENYA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.darkGreen, textDecoration: 'none', fontWeight: 600 }}
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Responsive helper styles ---------------- */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .header-desktop-nav {
            display: flex !important;
          }
          .header-mobile-toggle {
            display: none !important;
          }
          .header-company-short {
            display: none !important;
          }
          .header-company-full {
            display: inline !important;
          }
        }
        @media (max-width: 1023px) {
          .header-company-full {
            display: none !important;
          }
          .header-company-short {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}
