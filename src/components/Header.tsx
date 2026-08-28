'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavLink = { name: string; href: string; children?: { name: string; href: string }[] };

const navLinks: NavLink[] = [
  { name: 'Kenya Safaris', href: '/kenya-safaris', children: [{ name: 'Kenya Safari Tours', href: '/kenya-safaris' }, { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' }] },
  { name: 'Tanzania Safaris', href: '/tanzania-safaris', children: [{ name: 'Tanzania Safari Tours', href: '/tanzania-safaris' }, { name: 'Zanzibar Beach Holidays', href: '/holiday-experiences/zanzibar-beach-holidays' }] },
  { name: 'Combined Safaris', href: '#', children: [{ name: 'Kenya & Uganda', href: '/kenya-uganda-safaris' }, { name: 'Kenya & Rwanda', href: '/kenya-rwanda-safaris' }] },
  { name: 'Experiences', href: '/holiday-experiences', children: [{ name: 'All Experiences', href: '/holiday-experiences' }, { name: 'Bird Watching', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania' }, { name: 'Cultural Safaris', href: '/holiday-experiences/cultural-safaris' }, { name: 'Wellness Travel', href: '/holiday-experiences/wellness-travel' }] },
  { name: 'Travel Info', href: '#', children: [{ name: 'Kenya Lodges', href: '/travel-info/kenya-lodges' }, { name: 'Tanzania Lodges', href: '/travel-info/tanzania-lodges' }, { name: 'Transport Solutions', href: '/transport-solutions' }, { name: 'Mountain Climbing', href: '/mountain-climbing' }, { name: 'Payment Methods', href: '/payment-methods' }] },
  { name: 'Flights', href: '/flights' }, { name: 'Blog', href: '/blog' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' },
];

function PhoneIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>; }
function FacebookIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1Z" /></svg>; }
function InstagramIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></svg>; }
function Chevron({ open = false }: { open?: boolean }) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>; }
function AcaciaLogo() { return <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true"><path fill="var(--cats-green)" d="M24 3c-1.1 3.6-2.3 6-4.6 8-1.9-1.4-4.4-2-6.9-1.2 1.1 2.1 3 3.5 5.2 4-2.6.7-4.9 2.5-6.2 5 2.6.5 5.2-.1 7.3-1.6-.5 2.6.1 5.4 1.8 7.6-2.9-.2-5.8.9-7.8 3.1 2.7 1.1 5.7.9 8.2-.4-1.2 2.4-1.3 5.3-.1 7.9 2.1-1.4 3.5-3.5 4.1-5.9.6 2.4 2 4.5 4.1 5.9 1.2-2.6 1.1-5.5-.1-7.9 2.5 1.3 5.5 1.5 8.2.4-2-2.2-4.9-3.3-7.8-3.1 1.7-2.2 2.3-5 1.8-7.6 2.1 1.5 4.7 2.1 7.3 1.6-1.3-2.5-3.6-4.3-6.2-5 2.2-.5 4.1-1.9 5.2-4-2.5-.8-5-.2-6.9 1.2-2.3-2-3.5-4.4-4.6-8Z" /><rect x="22.2" y="24" width="1.6" height="21" fill="var(--cats-green)" /></svg>; }

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <header className="relative z-50">
    <div className={`hidden sm:flex items-center justify-between bg-[var(--cats-green)] px-6 py-2 text-xs text-white transition-transform duration-300 lg:px-10 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center gap-5"><a href="tel:+254723951388" className="flex items-center gap-2 hover:text-[var(--golden-savannah)]"><PhoneIcon />+254 723 951 388</a><span className="h-4 w-px bg-white/30" /><a href="mailto:info@catssafaris.com" className="flex items-center gap-2 hover:text-[var(--golden-savannah)]"><MailIcon />info@catssafaris.com</a></div>
      <div className="flex items-center gap-4"><a href="https://www.facebook.com/CATSAFARISKENYA" aria-label="Facebook"><FacebookIcon /></a><a href="https://www.instagram.com/catssafaris" aria-label="Instagram"><InstagramIcon /></a></div>
    </div>
    <nav className={`border-b border-stone-200 bg-white transition-shadow duration-300 ${scrolled ? 'fixed inset-x-0 top-0 shadow-lg' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}><AcaciaLogo /><span className="text-lg font-bold text-[var(--cats-green)] sm:hidden">C.A.T.S Safaris</span><span className="hidden text-lg font-bold text-[var(--cats-green)] sm:inline sm:text-xl">Collective African Tours &amp; Safaris</span></Link>
        <div className="hidden items-center gap-1 lg:flex">{navLinks.map((link) => <div key={link.name} className="group relative"><Link href={link.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-[var(--cats-green)]">{link.name}{link.children && <Chevron />}</Link>{link.children && <div className="invisible absolute right-0 top-full z-50 min-w-56 translate-y-2 rounded-lg bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{link.children.map((child) => <Link key={child.name} href={child.href} className="block rounded-md px-3 py-2 text-sm text-stone-700 hover:bg-[var(--warm-ivory)] hover:text-[var(--cats-green)]">{child.name}</Link>)}</div>}</div>)}<Link href="/contact" className="ml-3 rounded-full bg-[var(--golden-savannah)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-90">Plan My Safari</Link></div>
        <button type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)} className="rounded-md p-2 text-[var(--cats-green)] lg:hidden">{mobileOpen ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M6 6 18 18M6 18 18 6" /></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}</button>
      </div>
      {mobileOpen && <div className="border-t border-stone-100 bg-white px-4 pb-4 lg:hidden">{navLinks.map((link) => <div key={link.name} className="border-b border-stone-100"><div className="flex items-center justify-between"><Link href={link.href} onClick={() => !link.children && setMobileOpen(false)} className="flex-1 py-3 text-sm font-medium text-stone-700">{link.name}</Link>{link.children && <button type="button" aria-label={`Expand ${link.name}`} onClick={() => setExpanded(expanded === link.name ? null : link.name)} className="p-3"><Chevron open={expanded === link.name} /></button>}</div>{link.children && expanded === link.name && <div className="pb-2 pl-4">{link.children.map((child) => <Link key={child.name} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-stone-600">{child.name}</Link>)}</div>}</div>)}<Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-4 block rounded-full bg-[var(--golden-savannah)] px-5 py-3 text-center text-sm font-semibold text-white">Plan My Safari</Link></div>}
    </nav>
  </header>;
}
