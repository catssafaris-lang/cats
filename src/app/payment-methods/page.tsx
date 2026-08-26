import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment Methods',
  description: 'Learn about Wise, M-Pesa, bank transfer and credit card payment options for your C.A.T.S Safaris journey.',
  alternates: { canonical: '/payment-methods' },
};

const methods = [
  { name: 'Wise Transfer', detail: 'A convenient international transfer with transparent exchange rates.', href: '/payment-methods/wise-transfer' },
  { name: 'M-Pesa', detail: 'A simple mobile payment option for travellers and guests in Kenya.', href: '/contact' },
  { name: 'Bank Transfer', detail: 'Pay securely by international bank transfer using our account details.', href: '/contact' },
  { name: 'Credit Card', detail: 'We can guide you through card payment arrangements for your booking.', href: '/contact' },
];

export default function PaymentMethodsPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Simple, secure arrangements</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Payment methods</h1><p className="text-lg leading-relaxed text-white/80">Choose the option that works best for you. Our team will confirm the details and next steps for your booking.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">{methods.map((method) => <div key={method.name} className="rounded-2xl bg-white p-7 shadow-sm"><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">{method.name}</h2><p className="mb-5 leading-relaxed text-stone-600">{method.detail}</p><Link href={method.href} className="font-semibold text-[var(--golden-savannah)] hover:underline">{method.name === 'Wise Transfer' ? 'View Wise instructions' : 'Contact us for details'}</Link></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-stone-500">Please use the booking reference supplied by our team with your payment. We confirm every payment before finalising travel arrangements.</p></section>
  </>;
}
