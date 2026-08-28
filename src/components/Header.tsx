'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigation, type NavItem } from '@/data/navigation';

function PhoneIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>; }
function FacebookIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1Z" /></svg>; }
function InstagramIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></svg>; }
function Chevron({ open = false }: { open?: boolean }) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>; }
function ChevronRight() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5"><path d="m9 6 6 6-6 6" /></svg>; }

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Filter out Home for desktop nav (logo handles it)
  const desktopNav = navigation.filter((n) => n.name !== 'Home');

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className={`hidden sm:flex items-center justify-between bg-[var(--cats-green)] px-6 py-2 text-xs text-white transition-transform duration-300 lg:px-10 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center gap-5">
          <a href="tel:+254723951388" className="flex items-center gap-2 hover:text-[var(--golden-savannah)]"><PhoneIcon />+254 723 951 388</a>
          <span className="h-4 w-px bg-white/30" />
          <a href="mailto:info@catssafaris.com" className="flex items-center gap-2 hover:text-[var(--golden-savannah)]"><MailIcon />info@catssafaris.com</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/CATSAFARISKENYA" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://www.instagram.com/catssafaris" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`border-b border-stone-200 bg-white transition-shadow duration-300 ${scrolled ? 'fixed inset-x-0 top-0 shadow-lg' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image src="/cats-logo.png" alt="CATS Safaris Logo" width={48} height={48} className="h-12 w-12 object-contain" priority />
            <span className="text-lg font-bold text-[var(--cats-green)] sm:hidden">C.A.T.S Safaris</span>
            <span className="hidden text-lg font-bold text-[var(--cats-green)] sm:inline sm:text-xl">Collective African Tours &amp; Safaris</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {desktopNav.map((link) => (
              <div key={link.name} className="group relative">
                <Link href={link.href} className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-stone-700 hover:text-[var(--cats-green)] whitespace-nowrap">
                  {link.name}
                  {link.children && <Chevron />}
                </Link>
                {link.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-60 translate-y-2 rounded-lg bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.children.map((child) => (
                      <div key={child.name} className="relative group/sub">
                        {child.children ? (
                          <>
                            <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-[var(--warm-ivory)] hover:text-[var(--cats-green)] cursor-pointer">
                              {child.name}
                              <ChevronRight />
                            </div>
                            <div className="invisible absolute left-full top-0 z-50 min-w-52 -translate-x-2 rounded-lg bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                              {child.children.map((sub) => (
                                <Link key={sub.name} href={sub.href} className="block rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-[var(--warm-ivory)] hover:text-[var(--cats-green)]">{sub.name}</Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link href={child.href} className="block rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-[var(--warm-ivory)] hover:text-[var(--cats-green)]">{child.name}</Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="ml-2 rounded-full bg-[var(--golden-savannah)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-90 whitespace-nowrap">Plan My Safari</Link>
          </div>

          {/* Mobile toggle */}
          <button type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)} className="rounded-md p-2 text-[var(--cats-green)] xl:hidden">
            {mobileOpen
              ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M6 6 18 18M6 18 18 6" /></svg>
              : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-stone-100 bg-white px-4 pb-4 xl:hidden max-h-[80vh] overflow-y-auto">
            {navigation.map((link) => (
              <div key={link.name} className="border-b border-stone-100">
                <div className="flex items-center justify-between">
                  <Link href={link.href} onClick={() => !link.children && setMobileOpen(false)} className="flex-1 py-3 text-sm font-medium text-stone-700">{link.name}</Link>
                  {link.children && (
                    <button type="button" aria-label={`Expand ${link.name}`} onClick={() => { setExpanded(expanded === link.name ? null : link.name); setSubExpanded(null); }} className="p-3">
                      <Chevron open={expanded === link.name} />
                    </button>
                  )}
                </div>
                {link.children && expanded === link.name && (
                  <div className="pb-2 pl-4">
                    {link.children.map((child) => (
                      <div key={child.name}>
                        {child.children ? (
                          <>
                            <div className="flex items-center justify-between">
                              <span className="py-2 text-sm font-medium text-stone-600">{child.name}</span>
                              <button type="button" onClick={() => setSubExpanded(subExpanded === child.name ? null : child.name)} className="p-2"><Chevron open={subExpanded === child.name} /></button>
                            </div>
                            {subExpanded === child.name && (
                              <div className="pb-2 pl-4">
                                {child.children.map((sub) => (
                                  <Link key={sub.name} href={sub.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-stone-500">{sub.name}</Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-stone-600">{child.name}</Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-4 block rounded-full bg-[var(--golden-savannah)] px-5 py-3 text-center text-sm font-semibold text-white">Plan My Safari</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
