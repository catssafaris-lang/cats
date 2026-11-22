import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Collective African Tours & Safaris (C.A.T.S) collects, uses and protects the personal information you share through our safari, excursion, transport and contact enquiry forms.',
  alternates: { canonical: '/privacy' },
}

const sections: { h: string; p: string }[] = [
  { h: 'Who we are', p: 'Collective African Tours & Safaris (C.A.T.S) is a Nairobi-based safari, excursion and transport company operating with a network of trusted partners across Kenya, Tanzania, Uganda and Rwanda. Contact: info@catssafaris.com, +254 723 951 388.' },
  { h: 'Information we collect', p: 'When you send an enquiry or booking request we collect the details you provide: name, email address, phone number, nationality, residency status, number of travellers and ages of children, travel dates, accommodation preferences, budget and your message. When booking is confirmed we may also need passport details for park permits, flights or accommodation.' },
  { h: 'How we use it', p: 'We use your information only to answer your enquiry, prepare quotations, arrange and confirm your safari, excursion, transport or flight services, and communicate with you before, during and after your trip. We do not sell your personal information.' },
  { h: 'Sharing with suppliers', p: 'To deliver your trip we share only the necessary details with the lodges, camps, airlines, park authorities, vehicle partners and guides providing your services.' },
  { h: 'Website analytics and third-party tools', p: 'Our website uses Google Analytics and Microsoft Clarity to understand how visitors use the site, and FormSubmit to deliver enquiry forms to our inbox. Flight searches on our flight-search page are provided by Travelpayouts and its partner airlines and agencies, whose own privacy policies apply when you book with them.' },
  { h: 'Payments', p: 'Payments are made by M-Pesa, bank transfer, Wise or card through the relevant provider. We do not store card details on this website.' },
  { h: 'Retention and security', p: 'We keep enquiry and booking records only as long as needed to provide our services and meet accounting or legal obligations, and we take reasonable steps to protect them.' },
  { h: 'Your rights', p: 'You may ask us to access, correct or delete your personal information, or stop receiving messages from us, by emailing info@catssafaris.com. These rights are provided under the Kenya Data Protection Act, 2019.' },
]

export default function PrivacyPage() {
  return <main className="bg-[var(--warm-ivory)] text-[var(--forest-canopy)]">
    <section className="bg-[var(--forest-canopy)] pt-40 pb-20 px-6"><div className="mx-auto max-w-5xl">
      <p className="text-[var(--golden-savannah)] uppercase tracking-[0.22em] text-sm">Legal</p>
      <h1 className="font-playfair mt-4 text-5xl md:text-6xl text-white">Privacy Policy</h1>
      <p className="mt-6 max-w-3xl text-lg text-white/80">How C.A.T.S collects, uses and protects the information you share when planning your safari with us.</p>
    </div></section>
    <section className="mx-auto max-w-5xl px-6 py-16 space-y-10 text-lg leading-relaxed">
      {sections.map(s => <article key={s.h}><h2 className="font-playfair text-3xl">{s.h}</h2><p className="mt-3">{s.p}</p></article>)}
      <p className="text-base">See also our <Link href="/travel-info/booking-terms" className="text-[var(--driftwood)] underline">Booking Terms &amp; Conditions</Link>.</p>
    </section>
  </main>
}
