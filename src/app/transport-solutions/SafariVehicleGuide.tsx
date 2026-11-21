import Image from 'next/image';
import Link from 'next/link';

const gold = 'text-[#c8962e]';
const pf = { fontFamily: 'var(--font-playfair)' };

function Check() {
  return (
    <svg className="w-5 h-5 text-[#c8962e] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const ICONS = {
  roof: 'M3 10l9-6 9 6M5 10v9h14v-9M9 19v-5h6v5',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z',
  fuel: 'M4 20V6a2 2 0 012-2h6a2 2 0 012 2v14M4 20h10M14 10h2a2 2 0 012 2v4a1.5 1.5 0 003 0V8l-3-3M7 8h4',
  seat: 'M7 4v9a2 2 0 002 2h8M7 13H5m12 2v5M9 15v5M17 9h-6',
  cooler: 'M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm2-4h12v4H6V4zm4 9h4',
  radio: 'M5 9h14v10H5zM8 9l8-5M9 14a1 1 0 100-2 1 1 0 000 2zm4 0h3m-3 2h3',
  wifi: 'M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01',
  plug: 'M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zm6 9v4',
  child: 'M12 6a2 2 0 100-4 2 2 0 000 4zm-4 4h8l-1 6h-6l-1-6zm1 6l-1 6m7-6l1 6',
  aid: 'M4 7h16v13H4zM9 7V4h6v3m-3 4v6m-3-3h6',
  camera: 'M3 8h4l2-3h6l2 3h4v11H3V8zm9 9a4 4 0 100-8 4 4 0 000 8z',
  guide: 'M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0',
};

const features = [
  { icon: ICONS.roof, title: 'Pop-Top Roof', desc: 'The signature pop-up roof lets every guest stand and scan the plains in all directions — ideal for photographing lion prides and elephant herds.' },
  { icon: ICONS.shield, title: 'Rugged 4x4 Build', desc: 'High ground clearance, four-wheel drive and strong low-range torque for black-cotton soil, river crossings and rocky tracks.' },
  { icon: ICONS.fuel, title: 'Long-Range Ready', desc: 'Set up for long safari circuits such as Nairobi – Amboseli – Tsavo or Nairobi – Nakuru – Masai Mara, far from fuel stations.' },
  { icon: ICONS.seat, title: 'Window Seat for Everyone', desc: 'A guaranteed window seat for every traveller on private safaris, with more room and stability than a standard minivan.' },
];

const extras = [
  { icon: ICONS.cooler, title: 'Cooler Box', desc: 'Chilled drinking water on every game drive' },
  { icon: ICONS.radio, title: 'Guide Radio', desc: 'Guide-to-guide communication to share sightings' },
  { icon: ICONS.wifi, title: 'Connectivity', desc: 'Wi-Fi on selected vehicles, subject to network coverage' },
  { icon: ICONS.plug, title: 'Charging Points', desc: 'Charge phones and camera batteries on the road' },
  { icon: ICONS.child, title: 'Family Ready', desc: 'Child and baby seats on request' },
  { icon: ICONS.aid, title: 'First Aid Kit', desc: 'Carried in every safari vehicle' },
  { icon: ICONS.camera, title: 'Camera Support', desc: 'Bean bags to steady long lenses on request' },
  { icon: ICONS.guide, title: 'Driver-Guide', desc: 'English & Kiswahili; other languages on request' },
];

const compare = [
  {
    key: 'van',
    name: 'Safari Tour Van',
    tag: 'Best value',
    image: '/images/transport/safari-van.webp',
    alt: 'Pop-up roof safari tour van on a misty Kenyan road',
    summary: 'The classic Kenyan safari minivan with a pop-up roof. A comfortable, cost-effective choice for budget and group-joining safaris on well-used circuits in the dry season.',
    pros: ['Lowest cost per person', 'Pop-up roof for game viewing', 'Ideal for Nairobi, Nakuru, Naivasha and Masai Mara group tours', 'Good luggage space'],
    cons: ['Lower ground clearance than a 4x4', 'Bumpier on rough park roads', 'Can struggle on muddy tracks in the long rains'],
  },
  {
    key: 'cruiser',
    name: '4x4 Toyota Land Cruiser',
    tag: 'Most recommended',
    image: '/images/transport/landcruiser.webp',
    alt: 'Toyota Land Cruiser safari jeep with pop-up roof beside resting lions',
    summary: 'The purpose-built safari jeep of East Africa. Extended-body 4x4 with a pop-up roof, high seating and the clearance to go where the wildlife is, in any season.',
    pros: ['True 4x4 for every season and terrain', 'Higher seating for better views and photos', 'Smoother, more stable ride on long drives', 'Best for Masai Mara, Amboseli, Samburu, Tsavo and Kenya–Tanzania safaris'],
    cons: ['Higher cost than a safari van', 'Seats up to 6–7 guests per vehicle'],
  },
  {
    key: 'open',
    name: 'Open-Sided Safari Jeep',
    tag: 'For photographers',
    image: '/images/transport/open-sided.webp',
    alt: 'Open-sided safari jeep in the savannah of Narok County at sunset',
    summary: 'An open game-drive vehicle with tiered seating and no windows between you and the bush. Mostly operated by camps and lodges in the Masai Mara and private conservancies.',
    pros: ['Unobstructed 360° views', 'Best for wildlife photography', 'Feels closest to nature', 'Popular on fly-in safaris to camps and conservancies'],
    cons: ['More exposure to sun, dust and rain', 'Used for game drives inside the park or conservancy, not for road transfers', 'Availability depends on your camp and park'],
  },
];

const rows: [string, string, string, string][] = [
  ['Seating', 'Up to 7 guests', 'Up to 6–7 guests', 'Typically 6–9 guests (tiered)'],
  ['Drive', '2WD (some 4x4)', 'Full 4x4', 'Full 4x4'],
  ['Game viewing', 'Pop-up roof', 'Pop-up roof, higher seating', 'Fully open sides'],
  ['Best season', 'Dry season', 'All year', 'Dry season'],
  ['Road transfers', 'Yes', 'Yes', 'No — game drives only'],
  ['Comfort on rough roads', 'Good', 'Excellent', 'Good'],
  ['Price level', '$', '$$', 'Included with selected camps/fly-in safaris'],
];

export function SafariVehicleGuide() {
  return (
    <>
      {/* ═══ 4x4 LAND CRUISER INTRO ═══ */}
      <section className="relative overflow-hidden bg-[#0d1f16] text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>Safari Vehicles</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight" style={pf}>4x4 Safari Land Cruisers</h2>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Experience Africa your way. The 4x4 safari jeep is purpose-built for the rugged demands of a Kenya safari — it brings you as close as is responsibly possible to the wildlife, in comfort and safety, on every road from Nairobi National Park to the far plains of the Masai Mara.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Not sure which vehicle suits your trip? Below we compare the safari tour van, the Toyota Land Cruiser and the open-sided safari jeep, so you can choose with confidence.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#compare" className="bg-gradient-to-r from-[#c8962e] to-[#d4a017] text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-[#c8962e]/30 hover:from-[#b8860b] transition-all">Compare Vehicles</a>
              <Link href="/kenya-safaris" className="border-2 border-white/30 hover:border-[#e8b84a] text-white font-bold px-7 py-3.5 rounded-xl transition-all">View Kenya Safaris</Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[460px] rounded-3xl overflow-hidden ring-1 ring-[#c8962e]/40 shadow-2xl">
            <Image src="/images/transport/landcruiser.webp" alt="4x4 Toyota Land Cruiser safari jeep with pop-up roof in Kenya" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-[#e8b84a] text-xs uppercase tracking-[0.25em] font-semibold">Pop-up roof · 4x4 · Window seats</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES OUR SAFARI JEEPS SPECIAL ═══ */}
      <section className="py-24 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>Built for Safari</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={pf}>What Makes Our Safari Jeeps Special?</h2>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-md border border-[#c8962e]/15 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d1f16] to-[#1a3d2b] text-[#e8b84a] flex items-center justify-center mb-5"><Icon d={f.icon} /></div>
                <h3 className="text-lg font-extrabold text-[#0d1f16] mb-2" style={pf}>{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <div className="relative rounded-3xl overflow-hidden min-h-[380px] shadow-xl">
              <Image src="/images/transport/overland.webp" alt="Safari vehicle built for African terrain" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12]/95 via-[#0a1a12]/60 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full text-white">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={pf}>Built for African Terrain</h3>
                <ul className="space-y-2.5 text-gray-200">
                  {['Muddy river crossings in the wet season', 'Forest trails such as Aberdare and Mount Kenya', 'Rocky tracks in Hell’s Gate and Tsavo', 'Sandy riverbeds in Samburu', 'Black-cotton soil on the Masai Mara plains'].map(t => (
                    <li key={t} className="flex gap-3"><Check />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[380px] shadow-xl">
              <Image src="/images/transport/cta.webp" alt="Open safari vehicle on a game drive in East Africa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12]/95 via-[#0a1a12]/60 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full text-white">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={pf}>Comfort &amp; Views</h3>
                <p className="text-gray-200 mb-4">Higher seating and a pop-up roof give you wide-open views. Depending on season and conditions, look out for:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Lions on the hunt', 'Elephant herds', 'The Great Migration (Jul–Oct)', 'Leopards in acacia trees', 'Rhino in Nakuru & Ol Pejeta', 'Cheetah on the open plains'].map(t => (
                    <span key={t} className="bg-white/10 border border-white/15 rounded-lg px-3 py-2">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON: VAN vs LAND CRUISER vs OPEN-SIDED ═══ */}
      <section id="compare" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>Choose Your Safari Vehicle</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={pf}>Safari Van vs Land Cruiser vs Open-Sided Jeep</h2>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">The three safari vehicles you will see in Kenya and Tanzania — what each is like, where it works best and who it suits.</p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {compare.map(v => (
              <article key={v.key} className={`rounded-3xl overflow-hidden bg-[#faf6ef] border ${v.key === 'cruiser' ? 'border-[#c8962e] shadow-2xl shadow-[#c8962e]/15 lg:-translate-y-3' : 'border-gray-200 shadow-lg'} flex flex-col`}>
                <div className="relative h-64">
                  <Image src={v.image} alt={v.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${v.key === 'cruiser' ? 'bg-[#c8962e] text-white' : 'bg-[#0d1f16]/85 text-[#e8b84a]'}`}>{v.tag}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-extrabold text-[#0d1f16] mb-3" style={pf}>{v.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{v.summary}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0d1f16] mb-2">Advantages</p>
                  <ul className="space-y-2 mb-5">{v.pros.map(p => <li key={p} className="flex gap-2 text-sm text-gray-700"><Check />{p}</li>)}</ul>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0d1f16] mb-2">Good to know</p>
                  <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5 mb-6">{v.cons.map(c => <li key={c}>{c}</li>)}</ul>
                  <div className="mt-auto">
                    {v.key === 'open' ? (
                      <Link href="/kenya-flight-safaris" className="block text-center bg-[#0d1f16] hover:bg-[#1a3d2b] text-white font-bold py-3 rounded-xl transition-all">Explore Fly-In Safaris</Link>
                    ) : (
                      <Link href="/kenya-safaris" className="block text-center bg-[#0d1f16] hover:bg-[#1a3d2b] text-white font-bold py-3 rounded-xl transition-all">Browse Kenya Safaris</Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-x-auto rounded-2xl border border-[#c8962e]/30 shadow-lg">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-[#0d1f16] text-white">
                  <th className="text-left p-4 font-semibold">At a glance</th>
                  <th className="text-left p-4 font-semibold">Safari Tour Van</th>
                  <th className="text-left p-4 font-semibold text-[#e8b84a]">4x4 Land Cruiser</th>
                  <th className="text-left p-4 font-semibold">Open-Sided Jeep</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? 'bg-[#faf6ef]' : 'bg-white'}>
                    <td className="p-4 font-semibold text-[#0d1f16]">{r[0]}</td>
                    <td className="p-4 text-gray-600">{r[1]}</td>
                    <td className="p-4 text-gray-800 font-medium">{r[2]}</td>
                    <td className="p-4 text-gray-600">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">Wildlife sightings are naturally unpredictable. Vehicle type and specification are confirmed in writing with your safari quote.</p>
        </div>
      </section>

      {/* ═══ ONBOARD ESSENTIALS ═══ */}
      <section className="py-24 bg-gradient-to-br from-[#0d1f16] to-[#14301f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>On Board</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={pf}>In Your Safari Vehicle</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Thoughtful extras that make long game drives comfortable. Equipment can vary by vehicle and is confirmed when you book.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {extras.map(e => (
              <div key={e.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[#c8962e]/60 transition-all">
                <div className="text-[#e8b84a] mb-4"><Icon d={e.icon} /></div>
                <h3 className="font-bold mb-1">{e.title}</h3>
                <p className="text-gray-400 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OVERLAND TRUCKS ═══ */}
      <section className="py-24 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[340px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#c8962e]/30">
            <Image src="/images/transport/overland.webp" alt="Overland safari truck parked in Namanga, Kenya" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>Group &amp; Long Distance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={pf}>Overland Safari Trucks</h2>
            <p className="text-gray-600 mt-5 leading-relaxed">For larger groups and cross-border journeys, overland trucks are a sociable way to travel East Africa — large windows, elevated seating and room for camping equipment on long routes between Kenya and Tanzania.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-7">
              {['12–24 seat capacity', 'Elevated seating & large windows', 'Onboard lockers', 'Camping equipment', 'Charging points', '4x4 terrain capability'].map(t => (
                <div key={t} className="flex gap-2 text-gray-700 bg-white rounded-xl px-4 py-3 border border-gray-100"><Check />{t}</div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Overland trucks are provided through our partner network and quoted on request.</p>
          </div>
        </div>
      </section>

      {/* ═══ EXPERT GUIDE ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className={`${gold} font-bold tracking-[0.3em] uppercase text-xs`}>We Speak Safari</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={pf}>Your Expert Driver-Guide</h2>
          <p className="text-gray-600 mt-5 text-lg leading-relaxed max-w-3xl mx-auto">Every C.A.T.S safari vehicle comes with a professional driver-guide who knows the bush. Our guides don&apos;t just drive — they read the landscape, explain predator-prey behaviour, identify bird calls and position the vehicle for the best light and the best photograph, always respecting park rules and the animals&apos; space.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
            {['Fluent in English and Kiswahili', 'Other languages on request', 'Knowledge of animal behaviour and tracking', 'Safe, responsible game-viewing'].map(t => (
              <div key={t} className="flex gap-2 bg-[#faf6ef] rounded-xl p-4 text-gray-700 text-sm border border-[#c8962e]/15"><Check />{t}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
