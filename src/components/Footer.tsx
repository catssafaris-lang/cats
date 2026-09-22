import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  { name: 'Kenya Safaris', href: '/kenya-safaris' },
  { name: 'Tanzania Safaris', href: '/tanzania-safaris' },
  { name: 'Beach Holidays', href: '/kenya-safaris/kenya-and-diani' },
  { name: 'Mountain Climbing', href: '/mountain-climbing' },
  { name: 'Kenya-Tanzania Safaris', href: '/kenya-tanzania-safaris' },
];
const experiences = [
  { name: 'Great Migration Safaris', href: '/kenya-safaris/masai-mara' },
  { name: 'Family Safaris', href: '/kenya-safaris/short-safaris' },
  { name: 'Honeymoon Safaris', href: '/holiday-experiences' },
  { name: 'Cultural Safaris', href: '/holiday-experiences/cultural-safaris' },
  { name: 'Day Trips from Nairobi', href: '/kenya-safaris/nairobi-excursions' },
];
const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Blog', href: '/blog' },
];

function Column({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map(item => (
          <li key={item.name}><Link href={item.href} className="text-sm text-stone-400 transition hover:text-[var(--golden-savannah)]">{item.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[60%] max-w-[400px] aspect-square opacity-[0.02]"><Image src="/cats-logo.png" alt="" fill className="object-contain" sizes="400px" /></div></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full"><Image src="/cats-logo.png" alt="C.A.T.S Logo" fill className="object-cover" sizes="40px" /></div>
              <div><span className="text-lg font-bold text-white">Collective African Tours &amp; Safaris</span><span className="block text-xs text-stone-400">Collective African Tours &amp; Safaris</span></div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">Experience unforgettable safaris in Kenya, Tanzania &amp; Zanzibar. Expert local guides, customizable itineraries, and memorable wildlife experiences await you.</p>
            <div className="mt-6 space-y-3 text-sm text-stone-400">
              <p className="flex items-center gap-2"><svg className="h-4 w-4 text-[var(--golden-savannah)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Nairobi, Kenya</p>
              <a href="tel:+254723951388" className="flex items-center gap-2 hover:text-[var(--golden-savannah)] transition"><svg className="h-4 w-4 text-[var(--golden-savannah)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>+254 723 951 388</a>
              <a href="mailto:info@catssafaris.com" className="flex items-center gap-2 hover:text-[var(--golden-savannah)] transition"><svg className="h-4 w-4 text-[var(--golden-savannah)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>info@catssafaris.com</a>
            </div>
          </div>
          <Column title="Destinations" links={destinations} />
          <Column title="Safari Experiences" links={experiences} />
          <div>
            <Column title="Quick Links" links={quickLinks} />
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-bold text-red-400">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/CATSAFARISKENYA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-stone-300 transition hover:bg-[var(--sunset-bronze)] hover:text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1Z" /></svg></a>
                <a href="https://www.instagram.com/catssafaris" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-stone-300 transition hover:bg-[var(--sunset-bronze)] hover:text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></svg></a>
                <a href="https://twitter.com/catssafaris" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-stone-300 transition hover:bg-[var(--sunset-bronze)] hover:text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 px-6 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-stone-500 md:flex-row">
          <span>&copy; 2026 Collective African Tours &amp; Safaris (C.A.T.S). All rights reserved.</span>
          <div className="flex gap-6"><Link href="/terms" className="hover:text-stone-300 transition">Terms &amp; Conditions</Link><Link href="/privacy" className="hover:text-stone-300 transition">Privacy Policy</Link></div>
        </div>
      </div>
    </footer>
  );
}
