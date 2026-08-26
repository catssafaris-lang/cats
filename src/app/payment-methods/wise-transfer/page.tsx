import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pay by Wise Transfer',
  description: 'Find out how to pay C.A.T.S Safaris by Wise transfer and what information to include with your booking.',
  alternates: { canonical: '/payment-methods/wise-transfer' },
};

export default function WiseTransferPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Payment information</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Wise transfer</h1><p className="text-lg leading-relaxed text-white/80">A straightforward way to make an international payment for your C.A.T.S Safaris booking.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><div className="rounded-2xl bg-white p-7 shadow-sm sm:p-10"><h2 className="font-playfair mb-6 text-3xl font-bold text-[var(--forest-canopy)]">How it works</h2><ol className="space-y-6 text-stone-700"><li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--golden-savannah)] font-semibold text-white">1</span><p>Ask our team for a booking reference and the current Wise payment instructions for your itinerary.</p></li><li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--golden-savannah)] font-semibold text-white">2</span><p>Complete the transfer through Wise using the exact beneficiary details supplied by C.A.T.S Safaris.</p></li><li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--golden-savannah)] font-semibold text-white">3</span><p>Email your transfer confirmation and booking reference to <a href="mailto:info@catssafaris.com" className="font-semibold text-[var(--golden-savannah)] hover:underline">info@catssafaris.com</a>.</p></li></ol><div className="mt-8 rounded-xl bg-[var(--savannah-dust)] p-5 text-sm leading-relaxed text-stone-700">For your security, always request confirmed payment details directly from our team before sending funds. Never rely on old account information.</div><Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Request payment details</Link></div></div></section>
  </>;
}
