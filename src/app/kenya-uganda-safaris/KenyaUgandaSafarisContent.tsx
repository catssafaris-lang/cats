'use client';

import Link from 'next/link';
import Image from 'next/image';
import { safaris } from '@/data/safaris';
import SafariCard from '@/components/SafariCard';

export default function KenyaUgandaSafarisContent() {
  const kuSafaris = safaris.filter((s) => s.destination === 'kenya-uganda');

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
          alt="Mountain gorilla in Uganda - Kenya Uganda Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-4 text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link> / <span>Kenya & Uganda Safaris</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-[var(--font-playfair)]">Kenya & Uganda Safaris</h1>
            <p className="text-lg text-white/90 max-w-2xl">Experience Kenya&apos;s Big Five savannahs and Uganda&apos;s ancient forests — from the Masai Mara to Bwindi Impenetrable Forest for an unforgettable gorilla encounter.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="prose prose-lg max-w-none text-stone-700">
          <p>A Kenya-Uganda safari merges the open-plains drama of Kenya&apos;s Masai Mara, Amboseli, and Lake Nakuru with Uganda&apos;s primate-rich rainforests. Trek to within metres of a mountain gorilla family in Bwindi Impenetrable National Park, cruise the Kazinga Channel, and track tree-climbing lions in Queen Elizabeth National Park. C.A.T.S handles every permit, flight connection, and lodge booking seamlessly.</p>
        </div>
      </section>

      {/* Safari packages */}
      {kuSafaris.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Our Kenya & Uganda Safari Packages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kuSafaris.map((safari) => (
              <SafariCard key={safari.slug} safari={safari} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--cats-green)] py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Gorilla Trekking in Uganda?</h2>
          <p className="text-white/90 mb-6">Contact our Kenya-Uganda safari specialists for a personalised itinerary and competitive pricing.</p>
          <a href="mailto:info@catssafaris.com?subject=Kenya-Uganda%20Safari%20Enquiry" className="inline-block rounded-full bg-[var(--golden-savannah)] px-8 py-3 font-semibold text-white hover:brightness-90 transition">Get a Free Quote</a>
        </div>
      </section>
    </div>
  );
}
