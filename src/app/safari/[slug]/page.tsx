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

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

function XIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) notFound();

  const description = safari.description ?? '';
  const inquirySubject = encodeURIComponent(`Inquiry: ${safari.title}`);

  return (
    <main className="bg-[var(--warm-ivory)] text-[var(--cats-green)]">
      <section className="relative flex h-[50vh] min-h-[350px] items-end overflow-hidden text-white">
        <Image src={safari.image} alt={safari.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10">
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-[var(--golden-savannah)] px-4 py-2">{safari.duration} {safari.durationUnit}</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">{safari.destination}</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-playfair text-4xl leading-tight sm:text-5xl lg:text-6xl">{safari.title}</h1>
          {safari.subtitle && <p className="mt-3 max-w-2xl text-lg text-white/90">{safari.subtitle}</p>}
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:gap-14 lg:py-16">
        <div className="space-y-12 lg:col-span-2">
          <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Overview</h2>
            <p className="mt-4 whitespace-pre-line leading-8 text-stone-600">{description.replace(/\*\*/g, '')}</p>
          </section>

          <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Parks &amp; Reserves</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {safari.parks.map((park) => <span key={park} className="rounded-full bg-[var(--savannah-dust)] px-4 py-2 text-sm text-[var(--driftwood)]">{park}</span>)}
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Safari Highlights</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {safari.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3 rounded-xl bg-[var(--warm-ivory)] p-3 text-sm text-stone-700"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--golden-savannah)]" /><span>{highlight}</span></div>)}
            </div>
          </section>

          {safari.wildlifeHighlights && safari.wildlifeHighlights.length > 0 && <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Wildlife You&apos;ll Encounter</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {safari.wildlifeHighlights.map((animal) => <span key={animal} className="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-800">{animal}</span>)}
            </div>
          </section>}

          <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Day-by-Day Itinerary</h2>
            <div className="mt-5 space-y-5">
              {safari.itinerary.map((day) => <article key={day.day} className="rounded-2xl border border-[var(--savannah-dust)] bg-white p-6 shadow-sm">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--golden-savannah)] text-lg font-bold text-white">{day.day}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-[var(--cats-green)]">{day.title}</h3>
                    <p className="mt-2 whitespace-pre-line leading-7 text-stone-600">{day.description.replace(/\*\*/g, '')}</p>
                    {day.meals && day.meals.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{day.meals.map((meal) => <span key={meal} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">{meal}</span>)}</div>}
                  </div>
                </div>
              </article>)}
            </div>
          </section>

          {safari.gallery && safari.gallery.length > 0 && <section>
            <h2 className="font-playfair text-3xl text-[var(--forest-canopy)]">Gallery</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
              {safari.gallery.map((image, index) => <div key={`${image}-${index}`} className="group relative h-48 overflow-hidden rounded-xl"><Image src={image} alt={`${safari.title} gallery image ${index + 1}`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 50vw" /></div>)}
            </div>
          </section>}


        </div>

        <aside className="space-y-6 lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <section className="rounded-2xl border border-[var(--savannah-dust)] bg-white p-6 shadow-lg">
              <p className="text-sm text-stone-500">Starting from</p>
              <p className="mt-1 text-4xl font-bold text-[var(--golden-savannah)]">${safari.priceFrom.toLocaleString()}</p>
              <p className="mt-1 text-sm text-stone-500">per person</p>
              <Link href={`/contact?subject=${inquirySubject}`} className="mt-6 block rounded-full bg-[var(--golden-savannah)] px-5 py-3 text-center font-semibold text-white transition hover:brightness-95">Request Quote</Link>
              <Link href="https://wa.me/254723951388" className="mt-3 block rounded-full bg-green-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-600">WhatsApp Us</Link>
            </section>

            <section className="rounded-2xl border border-[var(--savannah-dust)] bg-white p-6 shadow-sm">
              <h2 className="font-playfair text-2xl text-[var(--forest-canopy)]">Inclusions</h2>
              <ul className="mt-4 space-y-3">{safari.inclusions.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-stone-600"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>{item}</span></li>)}</ul>
            </section>

            <section className="rounded-2xl border border-[var(--savannah-dust)] bg-white p-6 shadow-sm">
              <h2 className="font-playfair text-2xl text-[var(--forest-canopy)]">Exclusions</h2>
              <ul className="mt-4 space-y-3">{safari.exclusions.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-stone-600"><XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" /><span>{item}</span></li>)}</ul>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
