'use client';

import Link from 'next/link';
import Image from 'next/image';
import { safaris } from '@/data/safaris';
import SafariCard from '@/components/SafariCard';

export default function KenyaRwandaSafarisContent() {
  const krSafaris = safaris.filter((s) => s.destination === 'kenya-rwanda');

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
          alt="Mountain gorilla in Rwanda - Kenya Rwanda Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-4 text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link> / <span>Kenya & Rwanda Safaris</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-[var(--font-playfair)]">Kenya & Rwanda Safaris</h1>
            <p className="text-lg text-white/90 max-w-2xl">From the sweeping savannahs of the Masai Mara to the misty Virunga Mountains — track mountain gorillas and witness the Great Migration in one seamless journey.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="prose prose-lg max-w-none text-stone-700">
          <p>A Kenya-Rwanda safari combines two of Africa&apos;s most extraordinary wildlife experiences. Begin with Kenya&apos;s legendary national parks — the Masai Mara, Amboseli, Lake Nakuru — then fly to Kigali for an unforgettable mountain gorilla trek in Volcanoes National Park. C.A.T.S coordinates every transfer, permit, and lodge so you experience a seamless cross-border adventure.</p>
        </div>
      </section>

      {/* Safari packages */}
      {krSafaris.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Our Kenya & Rwanda Safari Packages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {krSafaris.map((safari) => (
              <SafariCard key={safari.slug} safari={safari} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--cats-green)] py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Meet the Mountain Gorillas?</h2>
          <p className="text-white/90 mb-6">Contact our Kenya-Rwanda safari specialists for a personalised itinerary and competitive pricing.</p>
          <a href="mailto:info@catssafaris.com?subject=Kenya-Rwanda%20Safari%20Enquiry" className="inline-block rounded-full bg-[var(--golden-savannah)] px-8 py-3 font-semibold text-white hover:brightness-90 transition">Get a Free Quote</a>
        </div>
      </section>
    </div>
  );
}
