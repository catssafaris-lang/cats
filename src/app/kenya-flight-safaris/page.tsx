'use client';

import Image from 'next/image';
import { ArrowRight, Plane, Clock, Shield, Star } from 'lucide-react';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { safaris } from '@/data/safaris';
import SafariCard from '@/components/SafariCard';

export default function KenyaFlightSafarisPage() {
    const { openModal } = useQuoteModal();
    const flightSafaris = safaris.filter(safari => safari.type?.includes('flight-safari'));
    const shortSafaris = flightSafaris.filter(s => s.duration <= 3);
    const midSafaris = flightSafaris.filter(s => s.duration === 4 || s.duration === 5);
    const longSafaris = flightSafaris.filter(s => s.duration >= 6);

    return (
        <div className="pb-20" style={{ backgroundColor: 'var(--warm-ivory)' }}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.pexels.com/photos/16444267/pexels-photo-16444267.jpeg"
                        alt="Kenya Flight Safaris — Scenic Bush Flights to Masai Mara, Amboseli, Samburu"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair, serif)' }}>
                        Kenya Flight Safaris
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md mb-4">
                        Skip the Drive. Soar Straight Into the Wild.
                    </p>
                    <p className="text-lg font-light drop-shadow-md mb-8 max-w-2xl mx-auto">
                        Scenic bush flights from Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lamu &amp; Diani Beach
                    </p>
                    <button
                        onClick={() => openModal('Kenya Flight Safari', 'https://www.catssafaris.com/kenya-flight-safaris')}
                        className="px-8 py-4 rounded-md font-bold text-lg transition-opacity hover:opacity-90 shadow-lg inline-flex items-center gap-2"
                        style={{ backgroundColor: 'var(--sunset-bronze)', color: 'var(--warm-ivory)' }}
                    >
                        Plan Your Fly-In Safari
                        <Plane size={20} />
                    </button>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Introduction Section */}
                <section className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--driftwood)', fontFamily: 'var(--font-playfair, serif)' }}>
                        Less Driving, More Exploring
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-12 rounded" style={{ backgroundColor: 'var(--sunset-bronze)' }}></div>

                    <div className="max-w-4xl mx-auto text-left" style={{ color: 'var(--forest-canopy)' }}>
                        <p className="mb-6 text-lg leading-relaxed text-center">
                            For travellers who want to <strong style={{ color: 'var(--sunset-bronze)' }}>maximise every moment in the wild</strong>, our Kenya flight safaris are the ultimate way to experience East Africa. Skip the long dusty drives and soar over the Great Rift Valley, landing directly on bush airstrips in the heart of the world&apos;s most iconic game reserves. From wheels-up at Nairobi&apos;s Wilson Airport to your first Big Five sighting — often under 90 minutes.
                        </p>
                        
                        <p className="mb-6 text-lg leading-relaxed text-center">
                            With <strong style={{ color: 'var(--sunset-bronze)' }}>15 years of expertise</strong> arranging fly-in safaris across Kenya, C.A.T.S partners with trusted bush aviation operators and premium lodges to deliver seamless air safari experiences. Whether you want a quick 3-day Amboseli escape beneath Kilimanjaro, a dedicated migration fly-in to the Masai Mara, a family-friendly multi-park air circuit, or the ultimate 8-day grand tour from Samburu to the Indian Ocean — every itinerary is crafted for maximum wildlife, minimum hassle.
                        </p>
                    </div>
                </section>

                {/* Why Fly Section */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Plane, title: 'Scenic Flights', desc: 'Every transfer is an aerial safari — Rift Valley, Mount Kenya, Kilimanjaro from above' },
                            { icon: Clock, title: 'Save Time', desc: '45 min flight vs 5-hour drive to the Mara — more game drives, less road time' },
                            { icon: Star, title: 'Premium Access', desc: 'Land on private airstrips in exclusive conservancies with limited visitor numbers' },
                            { icon: Shield, title: 'Expert Planning', desc: '15 years of flight safari expertise with trusted aviation and lodge partners' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139,109,71,0.06)' }}>
                                <item.icon size={32} className="mx-auto mb-3" style={{ color: 'var(--sunset-bronze)' }} />
                                <h3 className="font-bold mb-2" style={{ color: 'var(--forest-canopy)' }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--driftwood)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safari Packages Grid */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--forest-canopy)', fontFamily: 'var(--font-playfair, serif)' }}>
                            Premium Fly-In Safari Packages
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--driftwood)' }}>
                            From short 3-day escapes to the ultimate 8-day grand circuit — every itinerary includes scenic bush flights, expert guides, and immersive day-by-day wildlife experiences.
                        </p>
                    </div>

                    {flightSafaris.length > 0 ? (
                        <>
                            {shortSafaris.length > 0 && (
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold mb-2 border-b pb-2" style={{ color: 'var(--forest-canopy)', fontFamily: 'var(--font-playfair, serif)' }}>2 &amp; 3-Day Quick Escapes</h3>
                                    <p className="text-sm mb-6" style={{ color: 'var(--driftwood)' }}>Perfect for short stays or add-ons — fly in, experience the wild, fly back to Nairobi by lunch.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {shortSafaris.map((safari) => (
                                            <SafariCard key={safari.id} safari={safari} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {midSafaris.length > 0 && (
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold mb-2 border-b pb-2" style={{ color: 'var(--forest-canopy)', fontFamily: 'var(--font-playfair, serif)' }}>4 &amp; 5-Day Immersive Safaris</h3>
                                    <p className="text-sm mb-6" style={{ color: 'var(--driftwood)' }}>Multi-park fly-in itineraries — migration specialists, beach &amp; bush combos, conservation experiences.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {midSafaris.map((safari) => (
                                            <SafariCard key={safari.id} safari={safari} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {longSafaris.length > 0 && (
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold mb-2 border-b pb-2" style={{ color: 'var(--forest-canopy)', fontFamily: 'var(--font-playfair, serif)' }}>6+ Day Grand Circuits</h3>
                                    <p className="text-sm mb-6" style={{ color: 'var(--driftwood)' }}>The ultimate Kenya experiences — multiple reserves connected by air for the complete safari journey.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {longSafaris.map((safari) => (
                                            <SafariCard key={safari.id} safari={safari} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-10" style={{ color: 'var(--driftwood)' }}>
                            <p>No packages currently match this category.</p>
                        </div>
                    )}
                </section>

                {/* Final CTA */}
                <section className="text-center py-16 px-8 rounded-2xl" style={{ backgroundColor: 'var(--forest-canopy)' }}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-playfair, serif)' }}>
                        Ready to Fly Into the African Wild?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Our safari consultants will tailor the perfect fly-in itinerary for your dates, budget, and wildlife priorities. Every flight safari is customisable — add extra days, combine parks, or upgrade your lodges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => openModal('Kenya Flight Safari', 'https://www.catssafaris.com/kenya-flight-safaris')}
                            className="px-8 py-4 rounded-md font-bold text-lg transition-opacity hover:opacity-90 shadow-lg inline-flex items-center justify-center gap-2"
                            style={{ backgroundColor: 'var(--sunset-bronze)', color: 'var(--warm-ivory)' }}
                        >
                            Get a Free Quote
                            <ArrowRight size={20} />
                        </button>
                        <a 
                            href="https://wa.me/254722657685"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-md font-bold text-lg transition-opacity hover:opacity-90 shadow-lg inline-flex items-center justify-center gap-2 border-2 border-white text-white"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
