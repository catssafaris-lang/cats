import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { safaris } from '@/data/safaris';
import { excursionLandings, getLandingBySlug, sharedExcursionFaqs } from '@/data/excursionLandings';

const BASE = 'https://www.catssafaris.com';
const WHATSAPP_NUMBER = '254723951388';

type Params = { slug: string };

export function generateStaticParams() {
  return excursionLandings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLandingBySlug(slug);
  if (!l) return {};
  const url = `${BASE}/nairobi-excursions-day-trips/${l.slug}`;
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    keywords: l.keywords,
    alternates: { canonical: `/nairobi-excursions-day-trips/${l.slug}` },
    openGraph: {
      title: l.metaTitle,
      description: l.metaDescription,
      url,
      type: 'website',
      ...(l.heroImage ? { images: [{ url: l.heroImage }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: l.metaTitle, description: l.metaDescription },
  };
}

export default async function ExcursionLandingPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getLandingBySlug(slug);
  if (!l) notFound();
  const product = safaris.find((s) => s.id === l.productId);
  if (!product) notFound();

  const url = `${BASE}/nairobi-excursions-day-trips/${l.slug}`;
  const productUrl = `/safari/${product.slug}`;
  const durationText = `${product.duration} ${product.durationUnit === 'hours' ? 'hours' : product.duration === 1 ? 'day' : 'days'}`;
  const faqs = [...l.faqs, ...sharedExcursionFaqs];
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello C.A.T.S, I would like to book: ${l.h1}`)}`;
  const others = excursionLandings.filter((o) => o.slug !== l.slug);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Nairobi Excursions & Day Trips', item: `${BASE}/nairobi-excursions-day-trips` },
        { '@type': 'ListItem', position: 3, name: l.h1, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: l.h1,
      description: l.metaDescription,
      url,
      touristType: ['Families', 'Couples', 'Solo travellers', 'Layover travellers'],
      provider: { '@type': 'TravelAgency', name: 'Collective African Tours & Safaris', url: BASE, telephone: '+254723951388' },
      offers: {
        '@type': 'Offer',
        price: product.priceFrom,
        priceCurrency: product.currency || 'USD',
        url: `${BASE}${productUrl}`,
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="bg-[#f7f4ed] pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#2d3530]">
        {l.heroImage && (
          <Image src={l.heroImage} alt={l.h1} fill priority sizes="100vw" className="object-cover opacity-45" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3530]/70 via-[#2d3530]/50 to-[#2d3530]/90" />
        <div className="relative container mx-auto px-4 max-w-5xl text-white">
          <nav className="text-sm text-white/80 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#d4b97a]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/nairobi-excursions-day-trips" className="hover:text-[#d4b97a]">Nairobi Excursions &amp; Day Trips</Link>
          </nav>
          <p className="uppercase tracking-[0.2em] text-xs text-[#d4b97a] mb-3">{l.eyebrow}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">{l.h1}</h1>
          <div className="flex flex-wrap gap-3 text-sm mb-8">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">{durationText}</span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">Private tour</span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">Hotel &amp; JKIA pickup</span>
            <span className="px-4 py-2 rounded-full bg-[#a68b52] font-semibold">From {product.currency || 'USD'} {product.priceFrom.toLocaleString()}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={productUrl} className="px-7 py-3 rounded-full bg-[#a68b52] hover:bg-[#8a7343] font-semibold transition-colors">Book This Tour</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-white/60 hover:bg-white hover:text-[#2d3530] font-semibold transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 max-w-4xl py-14">
        {l.intro.map((p, i) => (
          <p key={i} className="text-lg text-[#4a4038] leading-relaxed mb-5">{p}</p>
        ))}
        <p className="text-[#4a4038] leading-relaxed">
          See the full day-by-day plan, inclusions and booking form on the{' '}
          <Link href={productUrl} className="text-[#a68b52] font-semibold underline hover:text-[#8a7343]">{product.title}</Link>{' '}
          page, or browse all{' '}
          <Link href="/nairobi-excursions-day-trips" className="text-[#a68b52] font-semibold underline hover:text-[#8a7343]">Nairobi excursions and day trips</Link>.
        </p>
      </section>

      {/* Experience */}
      <section className="container mx-auto px-4 max-w-5xl pb-14">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2d3530] mb-8">What You Will Experience</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {l.experience.map((e, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#e8e0d0] shadow-sm">
              <p className="text-[#a68b52] text-sm font-semibold mb-1">Stop {i + 1}</p>
              <h3 className="font-serif text-xl font-bold text-[#2d3530] mb-2">{e.title}</h3>
              <p className="text-[#4a4038] leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick facts */}
      <section className="container mx-auto px-4 max-w-5xl pb-14">
        <div className="bg-[#2d3530] text-white rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Tour at a Glance</h2>
            <ul className="space-y-2 text-white/90">
              <li><strong className="text-[#d4b97a]">Duration:</strong> {durationText}</li>
              <li><strong className="text-[#d4b97a]">Starting price:</strong> From {product.currency || 'USD'} {product.priceFrom.toLocaleString()} (final quote confirmed by our team)</li>
              <li><strong className="text-[#d4b97a]">Start &amp; finish:</strong> Your Nairobi hotel or JKIA</li>
              <li><strong className="text-[#d4b97a]">Vehicle:</strong> Private 4x4 Land Cruiser with pop-up roof</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Good to Know</h2>
            <ul className="space-y-2 text-white/90 list-disc pl-5">
              {l.goodToKnow.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="container mx-auto px-4 max-w-5xl pb-14 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]">
          <h2 className="font-serif text-xl font-bold text-[#2d3530] mb-3">What&apos;s Included</h2>
          <ul className="list-disc pl-5 space-y-1 text-[#4a4038]">{product.inclusions.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]">
          <h2 className="font-serif text-xl font-bold text-[#2d3530] mb-3">Not Included</h2>
          <ul className="list-disc pl-5 space-y-1 text-[#4a4038]">{product.exclusions.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 max-w-4xl pb-14">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2d3530] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-[#e8e0d0]">
              <h3 className="font-semibold text-[#2d3530] mb-2">{f.q}</h3>
              <p className="text-[#4a4038] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="container mx-auto px-4 max-w-5xl pb-14">
        <h2 className="font-serif text-2xl font-bold text-[#2d3530] mb-6">More Nairobi Excursions &amp; Day Trips</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/nairobi-excursions-day-trips/${o.slug}`} className="block bg-white rounded-xl p-5 border border-[#e8e0d0] hover:border-[#a68b52] transition-colors">
              <p className="text-xs uppercase tracking-wider text-[#a68b52] mb-1">{o.eyebrow}</p>
              <p className="font-semibold text-[#2d3530]">{o.h1.split(':')[0]}</p>
            </Link>
          ))}
          <Link href="/kenya-safaris" className="block bg-white rounded-xl p-5 border border-[#e8e0d0] hover:border-[#a68b52] transition-colors">
            <p className="text-xs uppercase tracking-wider text-[#a68b52] mb-1">Multi-day</p>
            <p className="font-semibold text-[#2d3530]">Kenya Safari Packages</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#4f5d56] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Ready to Book?</h2>
          <p className="text-white/85 mb-6">Choose your date and send your request. Our excursions team confirms availability and replies with your quote.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={productUrl} className="px-7 py-3 rounded-full bg-[#a68b52] hover:bg-[#8a7343] font-semibold transition-colors">Book This Tour</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-white/60 hover:bg-white hover:text-[#2d3530] font-semibold transition-colors">WhatsApp +254 723 951 388</a>
          </div>
        </div>
      </section>
    </div>
  );
}
