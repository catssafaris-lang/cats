import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSafariBySlug, safaris } from '@/data/safaris';
import { Clock, MapPin, Users, CheckCircle, XCircle, Calendar, ArrowLeft, Binoculars, Sparkles, Sun, Lightbulb } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import SafariBookingSidebar from '@/components/SafariBookingSidebar';
import { getIKUrl } from '@/lib/imagekit';
import BookingNote from '@/components/BookingNote';
import PricingTable from '@/components/PricingTable';
import SeasonGuide from '@/components/SeasonGuide';

type Params = { slug: string };

export async function generateStaticParams() {
    return safaris.map((safari) => ({
        slug: safari.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const safari = getSafariBySlug(slug);

    if (!safari) {
        return {
            title: 'Safari Not Found | Collective African Tours & Safaris (C.A.T.S)',
        };
    }

    const durationText = safari.durationUnit === 'days' ? `${safari.duration}-Day` : `${safari.duration}-Hour`;
    
    // Build a concise SEO meta description (max ~155 chars)
    const metaDesc = safari.description.length > 155 
        ? safari.description.substring(0, safari.description.lastIndexOf(' ', 152)) + '...'
        : safari.description;
    
    // Build rich meta title
    const priceText = safari.priceFrom ? ` from $${safari.priceFrom}` : '';
    const metaTitle = `${safari.title} | C.A.T.S Kenya`;

    return {
        title: metaTitle,
        description: metaDesc,
        keywords: [
            safari.title,
            ...safari.parks,
            ...safari.highlights.slice(0, 5),
            ...(safari.wildlifeHighlights || []).slice(0, 5),
            'Kenya safari',
            'Tanzania safari',
            'African safari',
            'wildlife safari',
            `${durationText} safari`,
            'book safari Kenya',
            'safari tour package',
            'game drive',
            'Collective African Tours & Safaris',
            'C.A.T.S',
        ].filter(Boolean),
        openGraph: {
            title: `${safari.title} | Collective African Tours & Safaris`,
            description: metaDesc,
            images: [{ url: `https://www.catssafaris.com${safari.image}`, width: 1200, height: 630, alt: safari.title }],
            type: 'website',
            url: `https://www.catssafaris.com/safari/${safari.slug}`,
        },
    };
}

export default async function SafariDetailPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const safari = getSafariBySlug(slug);

    if (!safari) {
        notFound();
    }

    const categoryMap: Record<string, { name: string; url: string }> = {
        'kenya': { name: 'Kenya Safaris', url: '/kenya-safaris' },
        'tanzania': { name: 'Tanzania Safaris', url: '/tanzania-safaris' },
        'kenya-tanzania': { name: 'Kenya & Tanzania Safaris', url: '/kenya-tanzania-safaris' },
        'beach': { name: 'Beach Holidays', url: '/beach-holidays' },
        'mountain': { name: 'Mountain Climbing', url: '/mountain-climbing' },
    };
    const breadcrumbCategory = categoryMap[safari.destination] || { name: 'Safaris', url: '/safaris' };

    return (
        <div className="pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TravelAction',
                        name: safari.title,
                        description: safari.description,
                        image: `https://www.catssafaris.com${safari.image}`,
                        url: `https://catssafaris.com/safari/${safari.slug}`,
                        provider: {
                            '@type': 'TravelAgency',
                            name: 'Collective African Tours & Safaris (C.A.T.S)',
                            url: 'https://catssafaris.com',
                            telephone: '+254723951388',
                            email: 'info@catssafaris.com',
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Nairobi',
                                addressCountry: 'KE',
                            },
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: '4.9',
                                reviewCount: '47',
                                bestRating: '5',
                            },
                        },
                        offers: {
                            '@type': 'Offer',
                            price: safari.priceFrom,
                            priceCurrency: 'USD',
                            availability: 'https://schema.org/InStock',
                            validFrom: '2024-01-01',
                            url: `https://catssafaris.com/safari/${safari.slug}`,
                        },
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: 'https://catssafaris.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Safaris',
                                item: 'https://catssafaris.com/safaris',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: safari.title,
                                item: `https://catssafaris.com/safari/${safari.slug}`,
                            },
                        ],
                    }),
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getIKUrl(safari.image)}
                        alt={safari.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Back Link */}
                    <Link href={breadcrumbCategory.url} className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={18} />
                        Back to {breadcrumbCategory.name}
                    </Link>

                    <div className="max-w-3xl">
                        {/* Duration Badge */}
                        <div className="flex items-center gap-3 mb-6 flex-wrap">
                            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                                <Clock size={14} />
                                {safari.duration} {safari.durationUnit === 'days' ? 'Days' : 'Hours'}
                            </span>
                            <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm capitalize border border-white/20">
                                {safari.destination.replace('-', ' & ')}
                            </span>
                            {safari.minPax && (
                                <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg border border-blue-400/30">
                                    <Users size={14} />
                                    Min. {safari.minPax} Pax
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {safari.title}
                        </h1>

                        {safari.subtitle && (
                            <p className="text-2xl text-amber-400 mb-6 font-medium italic">{safari.subtitle}</p>
                        )}

                        <p className="text-gray-200 text-xl mb-8 leading-relaxed max-w-2xl">{safari.description}</p>

                        {/* Parks */}
                        {safari.parks.length > 0 && (
                            <div className="flex flex-wrap gap-3 mb-8">
                                {safari.parks.map((park: string) => (
                                    <span
                                        key={park}
                                        className="text-sm bg-green-500/30 backdrop-blur-md text-white px-4 py-1.5 rounded-full border border-green-400/30 flex items-center gap-2"
                                    >
                                        <MapPin size={14} className="text-green-400" />
                                        {park}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Price */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block border border-white/20 shadow-2xl">
                            <div className="text-sm text-gray-300 mb-1 uppercase tracking-wider">Starting from</div>
                            <div className="text-5xl font-bold text-white flex items-baseline gap-2">
                                ${safari.priceFrom.toLocaleString()}
                                <span className="text-lg font-normal text-gray-300 italic">/ person</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Tour Highlights */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    <Sparkles className="text-amber-500" size={24} />
                                    Tour Highlights
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {safari.highlights.map((highlight: string, index: number) => (
                                        <div key={index} className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
                                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Wildlife Encounters */}
                            {safari.wildlifeHighlights && safari.wildlifeHighlights.length > 0 && (
                                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        <Binoculars className="text-emerald-600" size={24} />
                                        Wildlife You&apos;ll Encounter
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-6">Species commonly sighted on this safari route</p>
                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        {safari.wildlifeHighlights.map((animal: string, index: number) => (
                                            <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm border border-emerald-100">
                                                <span className="text-lg font-bold" style={{color: "#c9861a"}}>★</span>
                                                <span className="text-gray-700 font-medium text-sm">{animal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Itinerary with Embedded Images */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    <Calendar className="text-amber-500" size={24} />
                                    Day-by-Day Itinerary
                                </h2>
                                <div className="space-y-10">
                                    {(() => {
                                        const gallery = safari.gallery && safari.gallery.length > 0 ? safari.gallery : [];
                                        const days = safari.itinerary;
                                        const numDays = days.length;
                                        const maxImages = Math.min(gallery.length, Math.max(Math.floor(numDays * 0.6), 1));
                                        const imageAssignments: Record<number, string> = {};
                                        if (maxImages > 0 && numDays > 1) {
                                            for (let i = 0; i < maxImages; i++) {
                                                const dayIdx = 1 + Math.floor(i * (numDays - 1) / maxImages);
                                                imageAssignments[dayIdx] = gallery[i];
                                            }
                                        } else if (maxImages > 0 && numDays === 1) {
                                            imageAssignments[0] = gallery[0];
                                        }
                                        return days.map((day: any, dayIndex: number) => {
                                            const dayImage = imageAssignments[dayIndex];
                                            return (
                                                <div key={day.day} className="group">
                                                    {/* Cinematic Image Banner */}
                                                    {dayImage && (
                                                        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden shadow-xl mb-5">
                                                            <Image
                                                                src={getIKUrl(dayImage)}
                                                                alt={`Day ${day.day} \u2014 ${day.title}`}
                                                                fill
                                                                className="object-cover"
                                                                sizes="(max-width: 768px) 100vw, 800px"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                                            <div className="absolute bottom-4 left-5 flex items-center gap-3">
                                                                <span className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0">
                                                                    {day.day}
                                                                </span>
                                                                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{day.title}</h3>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {!dayImage && (
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <span className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md flex-shrink-0">
                                                                {day.day}
                                                            </span>
                                                            <h3 className="text-lg font-bold text-gray-900">{day.title}</h3>
                                                        </div>
                                                    )}

                                                    <div className="ml-5 pl-8 border-l-2 border-amber-200 pb-6">
                                                        <div className="text-gray-600 space-y-3 leading-relaxed">
                                                            {day.description.split('\n\n').map((para: string, idx: number) => {
                                                                const trimmed = para.trim();
                                                                if (!trimmed) return null;
                                                                if (trimmed.startsWith('## ')) {
                                                                    return (
                                                                        <div key={idx} className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                                            {trimmed.replace('## ', '')}
                                                                        </div>
                                                                    );
                                                                }
                                                                return <p key={idx}>{trimmed}</p>;
                                                            })}
                                                        </div>
                                                        {day.meals && day.meals.length > 0 && (
                                                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100">
                                                                <span className="font-semibold text-amber-700">Meals:</span>
                                                                {day.meals.join(' \u00b7 ')}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </div>

                            {/* SGR Madaraka Express Timetable */}
                            {safari.hasSGR && (
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        <span className="text-2xl font-bold" style={{color: "#1a3d2b"}}>⟶</span>
                                        Madaraka Express SGR Train Schedule
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-6">Board the high-speed Madaraka Express from your nearest station to Mombasa — air-conditioned comfort with panoramic views of Tsavo&apos;s plains.</p>
                                    
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-blue-600 text-white">
                                                    <th className="px-4 py-3 text-left rounded-tl-lg">Nairobi Terminus</th>
                                                    <th className="px-4 py-3 text-left">Emali <span className="text-blue-200 text-xs block">(Near Amboseli)</span></th>
                                                    <th className="px-4 py-3 text-left">Mtito Andei <span className="text-blue-200 text-xs block">(Tsavo West)</span></th>
                                                    <th className="px-4 py-3 text-left">Voi <span className="text-blue-200 text-xs block">(Tsavo East)</span></th>
                                                    <th className="px-4 py-3 text-left rounded-tr-lg">Mombasa Terminus</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-blue-100">
                                                    <td className="px-4 py-3 font-semibold text-blue-800">8:00 AM</td>
                                                    <td className="px-4 py-3 text-gray-700">9:27 AM / 9:31 AM</td>
                                                    <td className="px-4 py-3 text-gray-700">10:50 AM / 10:51 AM</td>
                                                    <td className="px-4 py-3 text-gray-700">12:02 PM / 12:08 PM</td>
                                                    <td className="px-4 py-3 font-semibold text-green-700">2:00 PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white rounded-xl p-5 border border-blue-100">
                                            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                Train Option
                                            </h3>
                                            <p className="text-gray-600 text-sm">Board at the nearest station after your safari — Voi (Tsavo East) or Mtito Andei (Tsavo West). Arrive Mombasa by 2:00 PM. First-class tickets included in your package. A C.A.T.S representative meets you at Mombasa Terminus for the transfer to your beach hotel.</p>
                                        </div>
                                        <div className="bg-white rounded-xl p-5 border border-blue-100">
                                            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                Jeep Option to the Coast
                                            </h3>
                                            <p className="text-gray-600 text-sm">Prefer to continue in your private 4×4 Land Cruiser? No problem — at no extra cost. Your guide drives you directly to your Diani Beach hotel, arriving approximately 5:00 PM with wildlife spotting opportunities along the way.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Optional Activities */}
                            {safari.optionalActivities && safari.optionalActivities.length > 0 && (
                                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        <Sparkles className="text-purple-600" size={24} />
                                        Optional Activities &amp; Add-Ons
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-6">Enhance your safari with these unforgettable experiences</p>
                                    <div className="space-y-4">
                                        {safari.optionalActivities.map((activity: any, index: number) => (
                                            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{activity.name}</h3>
                                                    {activity.description && (
                                                        <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                                                    )}
                                                </div>
                                                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap">
                                                    {activity.cost}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Best Time to Visit */}
                            {safari.bestSeason && (
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        <Sun className="text-amber-500" size={24} />
                                        Best Time to Visit
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">{safari.bestSeason}</p>
                                </div>
                            )}

                            {/* Travel Tips */}
                            {safari.travelTips && safari.travelTips.length > 0 && (
                                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        <Lightbulb className="text-sky-600" size={24} />
                                        Practical Travel Tips
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-6">Know before you go — essential advice for this safari</p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {safari.travelTips.map((tip: string, index: number) => (
                                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-sky-100">
                                                <span className="text-sky-500 font-bold text-lg mt-0.5">i</span>
                                                <span className="text-gray-700 text-sm">{tip}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <BookingNote isDayTrip={safari.duration <= 1 || safari.durationUnit === 'hours'} />

                            {/* Inclusions & Exclusions */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <CheckCircle className="text-green-600" size={24} />
                                        What&apos;s Included
                                    </h2>
                                    <ul className="space-y-2">
                                        {safari.inclusions.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-600">
                                                <span className="text-green-500 mt-1 font-bold">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <XCircle className="text-red-500" size={24} />
                                        What&apos;s Not Included
                                    </h2>
                                    <ul className="space-y-2">
                                        {safari.exclusions.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-600">
                                                <span className="text-red-500 mt-1">✗</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Season Guide */}
                            <SeasonGuide />
                            {/* Pricing Table */}
                            <PricingTable slug={safari.slug} />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <SafariBookingSidebar safari={safari} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
