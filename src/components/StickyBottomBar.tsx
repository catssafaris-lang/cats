'use client';

import Link from 'next/link';

function Icon({ type }: { type: 'phone' | 'chat' | 'mail' | 'quote' }) {
  const common = 'h-5 w-5';
  if (type === 'phone') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></svg>;
  if (type === 'chat') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.3-.64L4 20l1.64-3.94A7.36 7.36 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
  if (type === 'mail') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4M9 12h6M9 16h6" /></svg>;
}

export default function StickyBottomBar() { const actions = [{ label: 'Call', href: 'tel:+254723951388', type: 'phone' as const }, { label: 'WhatsApp', href: 'https://wa.me/254723951388', type: 'chat' as const }, { label: 'Email', href: 'mailto:info@catssafaris.com', type: 'mail' as const }, { label: 'Quote', href: '/contact', type: 'quote' as const }]; return <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-white/10 bg-[var(--cats-green)]/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 text-white backdrop-blur lg:hidden">{actions.map((action) => action.href.startsWith('/') ? <Link key={action.label} href={action.href} className="flex min-w-16 flex-col items-center gap-1 text-xs hover:text-[var(--golden-savannah)]"><Icon type={action.type} />{action.label}</Link> : <a key={action.label} href={action.href} className="flex min-w-16 flex-col items-center gap-1 text-xs hover:text-[var(--golden-savannah)]"> <Icon type={action.type} />{action.label}</a>)}</div>; }
