import Image from 'next/image';
import Link from 'next/link';
import { durationLabel, type TourCardData } from '@/data/tourStyles';

export interface HubSection { id: string; title: string; intro: string; tours: TourCardData[] }
export interface HubProps {
  eyebrow: string; h1: string; heroImage: string; heroAlt: string; lead: string;
  intro: string[]; trust: string[]; sections: HubSection[]; notice?: string;
  faqs: { q: string; a: string }[]; related: { label: string; href: string }[]; canonical: string; ctaLine: string;
}

export function TourCard({ t }: { t: TourCardData }) {
  return (
    <Link href={`/safari/${t.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--savannah-dust)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <Image src={t.image} alt={t.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${t.isGroup ? 'bg-[var(--logo-sage)]' : 'bg-[var(--sunset-bronze)]'}`}>
          {t.isGroup ? 'Group Joining Tour' : 'Private Tour'}
        </span>
        {t.isFlyIn && <span className="absolute right-3 top-3 rounded-full bg-[#2d3530]/85 px-3 py-1 text-[11px] font-semibold text-white">Fly-in</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-[var(--deep-jungle)] line-clamp-2">{t.title}</h3>
        <p className="mt-2 text-sm text-stone-600">{durationLabel(t)}{t.parks.length ? ` · ${t.parks.join(', ')}` : ''}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-sm text-stone-500">From <span className="text-lg font-bold text-[var(--deep-jungle)]">US${t.priceFrom.toLocaleString()}</span></p>
          <span className="rounded-lg bg-[var(--sunset-bronze)] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-[#8c7544]">Book This Safari</span>
        </div>
      </div>
    </Link>
  );
}

export default function TourStyleHub(p: HubProps) {
  const base = 'https://www.catssafaris.com';
  const all = p.sections.flatMap((s) => s.tours);
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'ItemList', name: p.h1, itemListElement: all.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${base}/safari/${t.slug}`, name: t.title })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: p.eyebrow, item: `${base}${p.canonical}` } ] },
  ];
  return (
    <main className="bg-[var(--warm-ivory)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative flex min-h-[520px] items-end overflow-hidden">
        <Image src={p.heroImage} alt={p.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f1c]/90 via-[#1a1f1c]/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-40 text-white">
          <nav className="mb-4 text-xs text-white/70"><Link href="/" className="hover:text-white">Home</Link> / <span>{p.eyebrow}</span></nav>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c08a]">{p.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl font-bold leading-tight sm:text-5xl">{p.h1}</h1>
          <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">{p.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#tours" className="rounded-lg bg-[var(--sunset-bronze)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8c7544]">See Tours &amp; Book</a>
            <a href={`https://wa.me/254723951388?text=${encodeURIComponent(`Hello C.A.T.S, I am interested in: ${p.h1} — ${base}${p.canonical}`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">WhatsApp for Instant Help</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--savannah-dust)] bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-5 text-center text-xs font-semibold text-[var(--deep-jungle)] sm:grid-cols-4 sm:text-sm">
          {p.trust.map((t) => <li key={t} className="rounded-lg bg-[var(--warm-ivory)] px-2 py-3">{t}</li>)}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl space-y-4 px-4 py-14 text-[15px] leading-relaxed text-stone-700 sm:text-base">
        {p.intro.map((para, i) => <p key={i}>{para}</p>)}
        {p.notice && <p className="rounded-xl border-l-4 border-[var(--sunset-bronze)] bg-white p-4 text-sm text-stone-700">{p.notice}</p>}
      </section>

      <div id="tours" className="mx-auto max-w-6xl space-y-16 px-4 pb-16">
        <nav className="flex flex-wrap gap-2">
          {p.sections.filter((s) => s.tours.length).map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-[var(--sunset-bronze)]/40 bg-white px-4 py-2 text-xs font-semibold text-[var(--deep-jungle)] hover:bg-[var(--sunset-bronze)] hover:text-white">{s.title} ({s.tours.length})</a>
          ))}
        </nav>
        {p.sections.filter((s) => s.tours.length).map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-40">
            <h2 className="font-serif text-2xl font-bold text-[var(--deep-jungle)] sm:text-3xl">{s.title}</h2>
            <p className="mt-2 max-w-3xl text-stone-600">{s.intro}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{s.tours.map((t) => <TourCard key={t.slug} t={t} />)}</div>
          </section>
        ))}
      </div>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-serif text-2xl font-bold text-[var(--deep-jungle)] sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-[var(--savannah-dust)]">
            {p.faqs.map((f) => (
              <div key={f.q} className="py-5"><h3 className="font-semibold text-[var(--deep-jungle)]">{f.q}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-serif text-xl font-bold text-[var(--deep-jungle)]">Explore More</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {p.related.map((r) => <Link key={r.href} href={r.href} className="rounded-lg border border-[var(--savannah-dust)] bg-white px-4 py-2 text-sm font-medium text-[var(--deep-jungle)] hover:border-[var(--sunset-bronze)]">{r.label}</Link>)}
        </div>
      </section>

      <section className="bg-[var(--deep-jungle)] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">{p.ctaLine}</h2>
          <p className="mt-3 text-white/80">We reply within 24 hours (public holidays may take a little longer). For Nairobi National Park and day trips, WhatsApp us for immediate help.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/254723951388?text=${encodeURIComponent(`Hello C.A.T.S, I am interested in: ${p.h1} — ${base}${p.canonical}`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--sunset-bronze)] px-7 py-3 font-semibold hover:bg-[#8c7544]">WhatsApp +254 723 951 388</a>
            <Link href="/contact" className="rounded-lg border border-white/50 px-7 py-3 font-semibold hover:bg-white/10">Send an Inquiry</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
