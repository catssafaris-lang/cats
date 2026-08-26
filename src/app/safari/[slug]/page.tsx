import { safaris, getSafariBySlug } from '@/data/safaris';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return safaris.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) return { title: 'Safari Not Found' };
  return {
    title: safari.title,
    description: safari.description?.slice(0, 160),
    alternates: { canonical: `/safari/${slug}` },
  };
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end text-white overflow-hidden">
        <Image src={safari.image} alt={safari.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-[var(--golden-savannah)] rounded-full text-xs font-semibold">{safari.duration} {safari.durationUnit === 'hours' ? 'Hours' : 'Days'}</span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold capitalize">{safari.destination}</span>
          </div>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4">{safari.title}</h1>
          {safari.subtitle && <p className="text-lg text-white/80 max-w-2xl">{safari.subtitle}</p>}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-4">Overview</h2>
              <p className="text-stone-600 leading-relaxed">{safari.description}</p>
            </section>

            {/* Parks */}
            <section className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-4">Parks & Reserves</h2>
              <div className="flex flex-wrap gap-2">
                {safari.parks.map((park) => (
                  <span key={park} className="px-4 py-2 bg-[var(--savannah-dust)] rounded-full text-sm font-medium text-[var(--driftwood)]">{park}</span>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-4">Safari Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {safari.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-3 bg-[var(--warm-ivory)] rounded-xl">
                    <svg className="w-5 h-5 text-[var(--golden-savannah)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-sm text-stone-700">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Wildlife */}
            {safari.wildlifeHighlights && safari.wildlifeHighlights.length > 0 && (
              <section className="mb-12">
                <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-4">Wildlife You&apos;ll Encounter</h2>
                <div className="flex flex-wrap gap-2">
                  {safari.wildlifeHighlights.map((w) => (
                    <span key={w} className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium">{w}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {safari.itinerary.map((day) => (
                  <div key={day.day} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[var(--golden-savannah)] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{day.day}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-stone-900 mb-2">{day.title}</h3>
                        <div className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{day.description.replace(/## /g, '').replace(/\*\*/g, '')}</div>
                        {day.meals && day.meals.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {day.meals.map((m) => (
                              <span key={m} className="px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-medium">{m}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            {safari.gallery && safari.gallery.length > 0 && (
              <section className="mb-12">
                <h2 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)] mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {safari.gallery.map((img, i) => (
                    <div key={i} className="relative h-48 rounded-xl overflow-hidden">
                      <Image src={img} alt={`${safari.title} gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-stone-500 mb-1">Starting from</p>
                  <p className="text-4xl font-bold text-[var(--golden-savannah)]">${safari.priceFrom.toLocaleString()}</p>
                  <p className="text-sm text-stone-500">per person</p>
                </div>
                <Link
                  href={`/contact?subject=Inquiry: ${safari.title}`}
                  className="block w-full py-3.5 bg-[var(--golden-savannah)] text-white text-center font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/254723951388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-3 py-3.5 bg-green-500 text-white text-center font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Inclusions */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4">Inclusions</h3>
                <ul className="space-y-2">
                  {safari.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4">Exclusions</h3>
                <ul className="space-y-2">
                  {safari.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
