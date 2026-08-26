import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact C.A.T.S Safaris',
  description: 'Talk to C.A.T.S Safaris about a tailor-made Kenya, Tanzania or East Africa journey.',
  alternates: { canonical: '/contact' },
};

const tripAdvisor = 'https://www.tripadvisor.com/UserReviewEdit-g294207-d33351225-Collective_African_Tours_Safaris_C_A_T_S-Nairobi.html';
const googleReview = 'https://g.page/r/CbOO5qcPRnPrEBM/review';

export default function ContactPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Let&apos;s plan together</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Tell us where you want to go</h1><p className="text-lg leading-relaxed text-white/80">Share a few details and our team will reply with thoughtful ideas for your journey.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.45fr]"><div className="lg:pt-4"><h2 className="font-playfair mb-5 text-3xl font-bold text-[var(--forest-canopy)]">Get in touch</h2><p className="mb-8 leading-relaxed text-stone-700">We are based in Nairobi and plan journeys across East Africa. Reach us by email, phone or WhatsApp whenever you are ready.</p><div className="space-y-6 text-stone-700"><div><p className="text-xs font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Email</p><a href="mailto:info@catssafaris.com" className="mt-1 block hover:text-[var(--golden-savannah)]">info@catssafaris.com</a></div><div><p className="text-xs font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Phone and WhatsApp</p><a href="tel:+254723951388" className="mt-1 block hover:text-[var(--golden-savannah)]">+254 723 951 388</a></div><div><p className="text-xs font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Office</p><p className="mt-1">Nairobi, Kenya</p></div></div><div className="mt-10 border-t border-stone-200 pt-6"><p className="mb-4 font-semibold text-[var(--forest-canopy)]">Travelled with us?</p><div className="flex flex-wrap gap-3"><a href={tripAdvisor} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--forest-canopy)] px-4 py-2 text-sm font-semibold text-[var(--forest-canopy)] hover:bg-[var(--forest-canopy)] hover:text-white">Review us on TripAdvisor</a><a href={googleReview} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--forest-canopy)] px-4 py-2 text-sm font-semibold text-[var(--forest-canopy)] hover:bg-[var(--forest-canopy)] hover:text-white">Leave a Google review</a></div></div></div><ContactForm /></div></section>
  </>;
}
