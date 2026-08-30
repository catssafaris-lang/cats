import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, Star, Users, Clock, Utensils, Home, ChevronDown, ChevronUp, Heart, Globe, Sun, Leaf, Check, X } from 'lucide-react';
import { experiences } from '@/data/experiences';
import { safaris } from '@/data/safaris';
import SafariCard from '@/components/SafariCard';
import ExperienceEnquiryButton from '@/components/ExperienceEnquiryButton';
import ImageGallery from '@/components/ImageGallery';
import NationalParksSection from '@/components/NationalParksSection';
// ItineraryAccordion removed — itineraries now display as cards

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return experiences.map((experience) => ({
        slug: experience.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const experience = experiences.find((e) => e.slug === slug);

    if (!experience) {
        return {
            title: 'Experience Not Found',
        };
    }

    const seoTitle = experience.seoKeywords?.length
        ? `${experience.title} | ${experience.seoKeywords[0].split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | C.A.T.S Safaris`
        : `${experience.title} | Collective African Tours & Safaris`;

    return {
        title: seoTitle,
        description: experience.description.substring(0, 160),
        keywords: experience.seoKeywords?.join(', '),
        openGraph: {
            title: experience.title,
            description: experience.description.substring(0, 200),
            images: experience.imageUrl ? [{ url: experience.imageUrl, width: 1200, height: 630, alt: experience.title }] : undefined,
            type: 'article',
            url: `https://www.catssafaris.com/holiday-experiences/${experience.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: experience.title,
            description: experience.description.substring(0, 200),
            images: experience.imageUrl ? [experience.imageUrl] : undefined,
        },
        alternates: {
            canonical: `https://www.catssafaris.com/holiday-experiences/${experience.slug}`,
        },
    };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const experience = experiences.find((e) => e.slug === slug);

    if (!experience) {
        notFound();
    }

    const relatedSafaris = experience.safariType 
        ? safaris.filter(safari => safari.type?.includes(experience.safariType!))
        : [];

    const galleryImages = experience.gallery?.map(img => img.url) || [];

    return (
        <div className="pb-20 bg-[#f9f7f2] overflow-x-hidden">
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
                                item: 'https://www.catssafaris.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Holiday Experiences',
                                item: 'https://www.catssafaris.com/holiday-experiences',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: experience.title,
                                item: `https://www.catssafaris.com/holiday-experiences/${experience.slug}`,
                            },
                        ],
                    }),
                }}
            />
            {/* Immersive Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {experience.imageUrl ? (
                        <Image
                            src={experience.imageUrl}
                            alt={experience.title}
                            fill
                            className="object-cover scale-105 animate-subtle-zoom"
                            priority
                            sizes="100vw"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f1c] via-[#2d3530] to-[#3a4740]" />
                    )}
                    <div className="absolute inset-0 bg-black/40 shadow-inner"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f9f7f2] via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="max-w-3xl">
                        <Link href="/holiday-experiences" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to All Experiences
                        </Link>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight font-serif"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            {experience.title}
                        </h1>
                        <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm md:text-lg text-white/90">
                            <span className="flex items-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                                <MapPin className="w-5 h-5 mr-2 text-[#d4bc7a]" /> Kenya & Tanzania
                            </span>
                            {experience.duration && (
                                <span className="flex items-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                                    <Calendar className="w-5 h-5 mr-2 text-[#d4bc7a]" /> {experience.duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 relative z-20 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Special Section for Madaraka SGR Schedule/Fares */}
                        {experience.slug === 'madaraka-express-sgr-train-schedule' && (
                            <div className="bg-[#5c4d42] text-white rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a68b52]/20 rounded-full -mr-32 -mt-32 blur-3xl" />
                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                        <h3 className="text-3xl font-bold font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>Current Schedule & Fares</h3>
                                        <a 
                                            href="https://metickets.krc.co.ke/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-[#a68b52] hover:bg-white hover:text-[#5c4d42] px-6 py-3 rounded-full font-bold transition-all group"
                                        >
                                            Official Booking Site
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-12">
                                        {/* Nairobi to Mombasa Schedule */}
                                        <div className="space-y-6">
                                            <h4 className="text-[#a68b52] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#a68b52]/30">Daily Departures</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <div>
                                                        <span className="font-semibold block">Inter-County Train</span>
                                                        <span className="text-sm text-white/60">Multiple stops en-route</span>
                                                    </div>
                                                    <span className="bg-white/10 px-3 py-1 rounded-md font-mono">08:00 AM</span>
                                                </div>
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <div>
                                                        <span className="font-semibold block">Express Train</span>
                                                        <span className="text-sm text-white/60">Non-stop service</span>
                                                    </div>
                                                    <span className="bg-white/10 px-3 py-1 rounded-md font-mono">03:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <div>
                                                        <span className="font-semibold block">Night Train</span>
                                                        <span className="text-sm text-white/60">Daily overnight service</span>
                                                    </div>
                                                    <span className="bg-white/10 px-3 py-1 rounded-md font-mono">10:00 PM</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fare Pricing */}
                                        <div className="space-y-6">
                                            <h4 className="text-[#a68b52] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#a68b52]/30">One-Way Fares (KES)</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <span className="font-semibold">Economy Class</span>
                                                    <span className="text-xl font-bold italic text-[#a68b52]">KES 1,500</span>
                                                </div>
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <span className="font-semibold">First Class</span>
                                                    <span className="text-xl font-bold italic text-[#a68b52]">KES 4,500</span>
                                                </div>
                                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                                    <span className="font-semibold">Premium Class</span>
                                                    <span className="text-xl font-bold italic text-[#a68b52]">KES 12,000</span>
                                                </div>
                                                <p className="text-xs text-white/40 italic pt-2">* Prices subject to Kenya Railways revision. We recommend confirming on the official site.*</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Overview Card */}
                        <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-1 bg-[#a68b52] rounded-full" />
                                <h2 className="text-3xl font-bold text-[#5c4d42] font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>Overview</h2>
                            </div>
                            <div className="prose prose-stone max-w-none overflow-hidden">
                                <p className="text-base sm:text-xl text-stone-600 font-medium mb-8 leading-relaxed italic">
                                    {experience.description}
                                </p>
                                <div className="text-stone-700 leading-relaxed text-base sm:text-lg break-words" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                                    {(() => {
                                        if (!experience.detailedDescription) return <p>{experience.description}</p>;

                                        const blocks = experience.detailedDescription.split('\n\n');
                                        const imgs = experience.gallery || [];
                                        let imgIdx = 0;

                                        // Group blocks into sections: each ### heading starts a new section
                                        const sections: { heading?: string; content: string[] }[] = [];
                                        let cur: { heading?: string; content: string[] } = { content: [] };

                                        blocks.forEach(block => {
                                            if (block.startsWith('###')) {
                                                if (cur.content.length > 0 || cur.heading) sections.push(cur);
                                                cur = { heading: block.replace(/^###\s*/, ''), content: [] };
                                            } else if (!block.startsWith('*')) {
                                                cur.content.push(block);
                                            }
                                        });
                                        if (cur.content.length > 0 || cur.heading) sections.push(cur);

                                        return sections.map((section, sIdx) => {
                                            const img = imgs[imgIdx];
                                            // Show image before every section except the first intro
                                            const showImage = img && sIdx > 0;
                                            if (showImage) imgIdx++;

                                            return (
                                                <div key={sIdx} className={sIdx > 0 ? "mt-10" : ""}>
                                                    {/* Elegant divider before lodges */}
                                                    {sIdx > 1 && (
                                                        <div className="flex items-center gap-4 my-8">
                                                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4bc7a]/40 to-transparent" />
                                                            <svg className="w-5 h-5 text-[#d4bc7a]/60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
                                                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4bc7a]/40 to-transparent" />
                                                        </div>
                                                    )}

                                                    {/* Full-width gallery image between sections */}
                                                    {showImage && (
                                                        <div className="my-6 -mx-4 sm:-mx-8 md:-mx-12 rounded-none sm:rounded-2xl overflow-hidden shadow-lg">
                                                            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
                                                                <Image
                                                                    src={img.url}
                                                                    alt={img.alt || experience.title}
                                                                    fill
                                                                    className="object-cover"
                                                                    sizes="100vw"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                                                {img.alt && (
                                                                    <p className="absolute bottom-3 left-4 right-4 text-white/80 text-xs sm:text-sm italic drop-shadow-lg">
                                                                        {img.alt}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Section heading */}
                                                    {section.heading && (
                                                        <h3 className="text-xl sm:text-2xl font-bold text-[#5c4d42] mb-4 mt-2 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                                            {section.heading}
                                                        </h3>
                                                    )}

                                                    {/* Section content */}
                                                    <div className="space-y-4">
                                                        {section.content.map((para, pIdx) => (
                                                            <p key={pIdx} className="leading-relaxed">{para}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {galleryImages.length > 0 && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-[#5c4d42] font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>In High Definition</h3>
                                    <div className="text-stone-400 text-sm">Experience the details in 4K resolution</div>
                                </div>
                                <ImageGallery images={galleryImages} alt={experience.title} />
                            </div>
                        )}

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* What to Expect */}
                            {experience.whatToExpect && (
                                <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
                                    <h3 className="text-xl font-bold mb-6 text-[#5c4d42] flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#a68b52]" />
                                        What to Expect
                                    </h3>
                                    <ul className="space-y-4">
                                        {experience.whatToExpect.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#a68b52] mt-2 group-hover:scale-150 transition-transform" />
                                                <span className="text-stone-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* What to Pack */}
                            {experience.whatToPack && (
                                <div className="bg-[#f0ede6] rounded-3xl p-8 border border-[#e5e1d8]">
                                    <h3 className="text-xl font-bold mb-6 text-[#5c4d42] flex items-center gap-3">
                                        <div className="p-1.5 bg-[#5c4d42] rounded-lg">
                                            <MapPin className="w-4 h-4 text-white" />
                                        </div>
                                        Essential Carry
                                    </h3>
                                    <ul className="space-y-4">
                                        {experience.whatToPack.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-stone-700">
                                                <CheckCircle className="w-5 h-5 text-[#a68b52] flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Highlights Banner */}
                        <div className="bg-[#5c4d42] rounded-3xl p-5 sm:p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors" />
                            <h3 className="text-2xl font-bold mb-8 relative z-10 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>Experience Highlights</h3>
                            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                                {experience.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#a68b52] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <span className="text-white/90 text-lg leading-snug">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Best Time to Visit */}
                        {experience.bestTimeToVisit && (
                            <div className="bg-gradient-to-br from-[#f0ede6] to-white rounded-3xl p-8 md:p-10 border border-stone-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-[#a68b52] rounded-xl">
                                        <Sun className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>Best Time to Visit</h3>
                                </div>
                                <p className="text-stone-700 leading-relaxed text-lg">{experience.bestTimeToVisit}</p>
                            </div>
                        )}

                        {/* Ideal For & Locations */}
                        {(experience.idealFor || experience.locations) && (
                            <div className="grid md:grid-cols-2 gap-8">
                                {experience.idealFor && (
                                    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-[#5c4d42] rounded-xl">
                                                <Heart className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>Ideal For</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {experience.idealFor.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-stone-700">
                                                    <CheckCircle className="w-5 h-5 text-[#a68b52] flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {experience.locations && (
                                    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-[#a68b52] rounded-xl">
                                                <Globe className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>Destinations</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {experience.locations.map((loc, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-stone-700">
                                                    <MapPin className="w-5 h-5 text-[#a68b52] flex-shrink-0 mt-0.5" />
                                                    <span>{loc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Booking Form Card */}
                            <div className="bg-white rounded-3xl shadow-2xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#a68b52]" />
                                <div className="p-5 sm:p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-2 text-[#5c4d42] font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        Interested in this experience?
                                    </h3>
                                    <p className="text-stone-500 mb-6 text-sm leading-relaxed">
                                        Tell us about your dream {experience.title.toLowerCase()} experience and we will craft a personalised itinerary.
                                    </p>
                                    <ExperienceEnquiryButton experienceName={experience.title} slug={experience.slug} />
                                    <div className="flex flex-col items-center gap-2 pt-6 mt-6 border-t border-stone-100">
                                        <span className="text-xs text-stone-400 uppercase tracking-[0.2em]">Or call us directly</span>
                                        <a href="tel:+254723951388" className="text-xl font-bold text-[#5c4d42] hover:text-[#a68b52] transition-colors">
                                            +254 723 951 388
                                        </a>
                                        <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="text-sm text-[#a68b52] font-semibold hover:underline">
                                            WhatsApp Us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Programmes Count */}
                            {experience.itineraries && experience.itineraries.length > 0 && (
                                <div className="bg-[#f0ede6] rounded-3xl p-6 border border-[#e5e1d8]">
                                    <h4 className="text-sm font-bold text-[#5c4d42] uppercase tracking-wider mb-3">Sample Programmes</h4>
                                    <p className="text-stone-600 text-sm">{experience.itineraries.length} curated itineraries available — scroll down to explore each one.</p>
                                </div>
                            )}
                            
                            {/* Value Propositions */}
                            <div className="px-4">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#f0ede6] flex items-center justify-center text-[#a68b52]">
                                            <Star size={20} fill="currentColor" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-800">Exclusive Access</div>
                                            <div className="text-sm text-stone-500">Private sites and unique times</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#f0ede6] flex items-center justify-center text-[#a68b52]">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-800">Expert Guidance</div>
                                            <div className="text-sm text-stone-500">Gold-level naturalist guides</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#f0ede6] flex items-center justify-center text-[#a68b52]">
                                            <Leaf size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-800">Trusted Partners</div>
                                            <div className="text-sm text-stone-500">Vetted wellness lodges and operators</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* National Parks & Cultural Destinations Section */}
            {experience.nationalParks && experience.nationalParks.length > 0 && (
                <NationalParksSection
                    parks={experience.nationalParks}
                    sectionTitle={experience.slug === 'cultural-safaris' ? 'Cultural Destinations & Communities' : 'National Parks & Reserves'}
                    sectionSubtitle={
                        experience.slug === 'cultural-safaris'
                            ? 'Discover the living heritage of East Africa — ancient traditions, vibrant communities, and UNESCO World Heritage Sites that bring the soul of Africa to life. Each destination offers genuine cultural encounters arranged through our trusted community partners.'
                            : 'East Africa is one of the world\'s premier birding regions, with over 1,500 recorded species across diverse ecosystems — from snow-capped mountain forests to alkaline Rift Valley lakes. Below is your expert guide to the finest birding destinations we operate in.'
                    }
                    kenyaSummary={
                        experience.slug === 'cultural-safaris'
                            ? 'Kenya\'s 44 ethnic communities each carry distinct traditions — from the warrior ceremonies of the Maasai and Samburu to the ancient Swahili heritage of the coast. These cultural encounters are arranged through our trusted community partners who ensure every visit benefits the families and villages that welcome you.'
                            : 'Kenya\'s Rift Valley lakes, highland forests, coastal woodlands, and savanna grasslands together host over 1,100 recorded bird species — the second-highest count in Africa.'
                    }
                    tanzaniaSummary={
                        experience.slug === 'cultural-safaris'
                            ? 'Tanzania\'s cultural tapestry stretches from the Hadzabe hunter-gatherers of Lake Eyasi — one of the last such societies on Earth — to the UNESCO World Heritage streets of Zanzibar Stone Town, and the cradle of mankind at Olduvai Gorge where our earliest ancestors walked.'
                            : 'Tanzania\'s vast wilderness — from the Serengeti plains to the Eastern Arc Mountains — supports over 1,000 bird species including several endemics found nowhere else on Earth.'
                    }
                    variant={experience.slug === 'cultural-safaris' ? 'cultural' : 'birding'}
                    linkPrefix="/destinations/"
                />
            )}

            {/* Itinerary Programmes — Card Grid */}
            {experience.itineraries && experience.itineraries.length > 0 && (
                <section className="bg-[#f9f7f2] py-20 mt-16 border-t border-stone-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#a68b52] font-bold tracking-[0.2em] uppercase text-xs">Curated Itineraries</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5c4d42] mt-3 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Sample Programmes
                            </h2>
                            <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
                                Every programme is fully customisable — your C.A.T.S travel specialist will tailor every detail to your preferences.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experience.itineraries.map((itinerary) => (
                                <div key={itinerary.id} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-stone-200/60 border border-stone-100 flex flex-col hover:shadow-xl transition-shadow">
                                    {/* Card Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        {itinerary.imageUrl ? (
                                            <Image
                                                src={itinerary.imageUrl}
                                                alt={itinerary.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5c4d42] to-[#3a302a]" />
                                        )}
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-white/95 backdrop-blur-sm text-[#5c4d42] text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                                                <Clock className="w-3.5 h-3.5 text-[#a68b52]" /> {itinerary.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Location */}
                                        {itinerary.locations && itinerary.locations.length > 0 && (
                                            <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-2">
                                                <MapPin className="w-3.5 h-3.5 text-[#a68b52]" />
                                                <span>{itinerary.locations[0]}{itinerary.locations.length > 1 ? ` & ${itinerary.locations.slice(1).join(', ')}` : ''}</span>
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-[#5c4d42] leading-snug mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                                            {itinerary.title}
                                        </h3>

                                        {/* Highlights */}
                                        {itinerary.highlights && itinerary.highlights.length > 0 && (
                                            <ul className="space-y-2 mb-5">
                                                {itinerary.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-stone-600 text-sm">
                                                        <Check className="w-4 h-4 text-[#a68b52] flex-shrink-0 mt-0.5" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Destination Tags */}
                                        {itinerary.locations && itinerary.locations.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                                                {itinerary.locations.map((loc, idx) => (
                                                    <span key={idx} className="bg-[#f0ede6] text-[#5c4d42] text-xs font-medium px-3 py-1 rounded-full">
                                                        {loc}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* CTA */}
                                        <div className="pt-4 border-t border-stone-100 flex items-center justify-end">
                                            <ExperienceEnquiryButton
                                                experience={experience}
                                                variant="outline"
                                                label="Enquire Now"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Properties Section */}
            {experience.featuredProperties && experience.featuredProperties.length > 0 && (
                <section className="bg-gradient-to-b from-[#f0ede6] to-[#f9f7f2] py-20 mt-16 border-t border-stone-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#a68b52] font-bold tracking-[0.2em] uppercase text-xs">Handpicked Partners</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5c4d42] mt-3 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Our Favourite Wellness Lodges & Camps
                            </h2>
                            <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
                                These exceptional lodges and tented camps are trusted C.A.T.S partners — each one selected for its outstanding wellness facilities, breathtaking setting, and proximity to wildlife.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experience.featuredProperties.map((property, idx) => {
                                const CardContent = (
                                    <>
                                        <div className="relative h-56 overflow-hidden">
                                            {property.imageUrl ? (
                                            <Image
                                                src={property.imageUrl}
                                                alt={property.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-[#5c4d42] to-[#a68b52] flex items-center justify-center">
                                                <span className="text-white/60 text-sm font-medium tracking-wider uppercase">C.A.T.S Partner</span>
                                            </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex items-center gap-2 text-white/80 text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{property.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-[#5c4d42] mb-3 group-hover:text-[#a68b52] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                                                {property.name}
                                            </h3>
                                            <p className="text-stone-600 text-sm leading-relaxed">{property.description}</p>
                                            {property.link && (
                                                <span className="inline-flex items-center gap-2 text-[#a68b52] font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                                                    View Property Details <ArrowRight className="w-4 h-4" />
                                                </span>
                                            )}
                                        </div>
                                    </>
                                );
                                return property.link ? (
                                    <a key={idx} href={property.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 transition-transform duration-500 group block">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 transition-transform duration-500 group">
                                        {CardContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {experience.faqs && experience.faqs.length > 0 && (
                <section className="bg-white py-20 mt-0 border-t border-stone-200">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#a68b52] font-bold tracking-[0.2em] uppercase text-xs">Your Questions Answered</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5c4d42] mt-3 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Frequently Asked Questions
                            </h2>
                            <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
                                Everything you need to know about planning your {experience.title.toLowerCase()} experience with C.A.T.S.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {experience.faqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#f9f7f2] rounded-2xl border border-stone-200 overflow-hidden">
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#f0ede6] transition-colors">
                                        <h3 className="text-lg font-bold text-[#5c4d42] text-left pr-4">{faq.question}</h3>
                                        <ChevronDown className="w-5 h-5 text-[#a68b52] flex-shrink-0 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="px-6 pb-6 pt-0">
                                        <div className="border-t border-stone-200 pt-4">
                                            <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-stone-500 mb-4">Have more questions? We are always here to help.</p>
                            <ExperienceEnquiryButton
                                experience={experience}
                                variant="primary"
                                label="Ask Our Wellness Specialists"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Related Itineraries Section */}
            {relatedSafaris.length > 0 && (
                <section className="bg-stone-100/50 py-24 mt-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5c4d42] font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Experience Pairings
                                </h2>
                                <p className="text-lg text-stone-600">
                                    Elevate your African odyssey by pairing the {experience.title} with our most requested safari circuits.
                                </p>
                            </div>
                            <Link 
                                href="/safaris"
                                className="inline-flex items-center gap-3 text-[#a68b52] font-bold hover:gap-5 transition-all group pb-2 border-b-2 border-[#a68b52]/20 hover:border-[#a68b52]"
                            >
                                Discover All Safaris <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {relatedSafaris.map((safari) => (
                                <div key={safari.id} className="hover:-translate-y-2 transition-transform duration-500">
                                    <SafariCard safari={safari} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
