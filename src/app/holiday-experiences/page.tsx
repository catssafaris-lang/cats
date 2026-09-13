import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { experiences } from '@/data/experiences';

export const metadata: Metadata = {
  title: 'Holiday Experiences in East Africa | Safari, Beach, Cultural & Adventure Tours | C.A.T.S Safaris',
  description: 'Discover unique holiday experiences across Kenya, Tanzania, Uganda and Rwanda — from wildlife safaris and cultural immersions to beach getaways, mountain climbing, bird watching, and wellness retreats with Collective African Tours & Safaris.',
  keywords: 'Kenya holiday experiences, East Africa tours, safari experiences, cultural tours Kenya, beach holidays Diani, bird watching Kenya, photography safaris, hot air balloon Masai Mara, gorilla trekking, wellness retreats Kenya',
  alternates: { canonical: '/holiday-experiences' },
};

export default function HolidayExperiencesPage() {
  // Group by category
  const categories = [...new Set(experiences.map(e => (e as any).category || 'Safari Experience'))];
  
  return (
    <div className="bg-[var(--warm-ivory)]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[var(--forest-canopy)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f16]/80 to-[#0d1f16]/95" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-32 pb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--golden-savannah)]">
            Travel Your Way
          </p>
          <h1
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            More Ways to Experience East Africa
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Build a journey around the things you love — from wildlife and culture to coastlines,
            mountains, and restorative time in the heart of Africa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.slice(0, 6).map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-stone-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[var(--forest-canopy)]">{experiences.length}+</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">Unique Experiences</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--forest-canopy)]">{categories.length}</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--forest-canopy)]">4</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--forest-canopy)]">15+</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">Years of Expertise</div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold text-[var(--forest-canopy)] md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Explore Our Experiences
            </h2>
            <p className="mt-3 text-stone-600">
              Each experience is crafted to immerse you in the best of East Africa
            </p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[var(--golden-savannah)] to-transparent" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                href={`/holiday-experiences/${experience.slug}`}
                className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={
                      experience.imageUrl ||
                      'https://ik.imagekit.io/axd1riwnv/Masai-Mara-Wildlife.webp'
                    }
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Category badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-[var(--forest-canopy)]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {(experience as any).category || 'Safari'}
                    </span>
                  </div>
                  
                  {/* Duration badge */}
                  {experience.duration && (
                    <div className="absolute bottom-4 right-4">
                      <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--forest-canopy)] backdrop-blur-sm shadow-sm">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6h4.5" />
                        </svg>
                        {experience.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="mb-3 text-xl font-bold text-[var(--forest-canopy)] transition-colors group-hover:text-[var(--golden-savannah)]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {experience.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-stone-600">
                    {experience.description}
                  </p>
                  
                  {/* Highlights preview */}
                  {experience.highlights && experience.highlights.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {experience.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-[var(--warm-ivory)] px-3 py-1 text-xs font-medium text-stone-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <span className="inline-flex items-center gap-2 font-semibold text-[var(--golden-savannah)] transition-all group-hover:gap-3">
                    Explore Experience
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--forest-canopy)] px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-4 text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Cannot Find What You Are Looking For?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            We specialise in tailor-made itineraries. Tell us what excites you and we will craft the
            perfect East African experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--golden-savannah)] px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <a
              href="https://wa.me/254723951388"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all hover:border-white/60"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
