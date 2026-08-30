import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Binoculars } from 'lucide-react';

interface Park {
  name: string;
  slug?: string;
  country?: string;
  image?: string;
  imageUrl?: string;
  description?: string;
  wildlife?: string[];
  keySpecies?: string[];
  activities?: string[];
  location?: string;
  birding?: string;
  birdSpeciesCount?: string;
  keyBirds?: string[];
  culture?: string;
  community?: string;
}

interface Props {
  parks?: Park[];
  title?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  kenyaSummary?: string;
  tanzaniaSummary?: string;
  variant?: 'default' | 'birding' | 'cultural';
  linkPrefix?: string;
}

export default function NationalParksSection({ parks, title, sectionTitle, sectionSubtitle, kenyaSummary, tanzaniaSummary, variant = 'default', linkPrefix = '' }: Props) {
  if (!parks || parks.length === 0) return null;

  const displayTitle = sectionTitle || title || 'National Parks & Reserves';
  const kenyaParks = parks.filter((p) => p.country === 'Kenya');
  const tanzaniaParks = parks.filter((p) => p.country === 'Tanzania');
  const ungrouped = parks.filter((p) => !p.country);
  const hasGroups = kenyaParks.length > 0 || tanzaniaParks.length > 0;

  function ParkCard({ park }: { park: Park }) {
    const img = park.image || park.imageUrl;
    return (
      <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl overflow-hidden border border-amber-200 shadow-md">
        {img && (
          <div className="relative h-64 md:h-80 w-full">
            <Image src={img} alt={park.name} fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white font-serif">{park.name}</h3>
          </div>
        )}
        <div className="p-6">
          {!img && <h3 className="text-xl font-bold text-amber-900 mb-3">{park.name}</h3>}
          {park.location && (
            <p className="text-sm text-amber-700 flex items-center gap-1 mb-3"><MapPin className="w-4 h-4" />{park.location}</p>
          )}
          {park.description && <p className="text-gray-700 mb-4 leading-relaxed">{park.description}</p>}
          {variant === 'birding' && park.birding && <p className="text-gray-600 mb-3 text-sm">{park.birding}</p>}
          {variant === 'birding' && park.birdSpeciesCount && <p className="text-amber-800 font-semibold text-sm mb-3">{park.birdSpeciesCount} bird species recorded</p>}
          {variant === 'cultural' && park.culture && <p className="text-gray-600 mb-3 text-sm">{park.culture}</p>}
          {variant === 'cultural' && park.community && <p className="text-gray-600 mb-3 text-sm italic">{park.community}</p>}
          {(park.wildlife || park.keySpecies) && (park.wildlife?.length || park.keySpecies?.length) && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-2 flex items-center gap-1"><Binoculars className="w-4 h-4" />{variant === 'birding' ? 'Key Birds' : 'Wildlife'}</h4>
              <div className="flex flex-wrap gap-2">
                {(variant === 'birding' ? (park.keyBirds || park.keySpecies || park.wildlife) : (park.wildlife || park.keySpecies))?.map((w, j) => (
                  <span key={j} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">{w}</span>
                ))}
              </div>
            </div>
          )}
          {park.activities && park.activities.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {park.activities.map((a, j) => (
                <span key={j} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">{a}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-amber-900 mb-4 font-serif">{displayTitle}</h2>
      {sectionSubtitle && <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">{sectionSubtitle}</p>}

      {hasGroups ? (
        <>
          {kenyaParks.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-green-800 mb-3">Kenya</h3>
              {kenyaSummary && <p className="text-gray-600 mb-6 max-w-3xl">{kenyaSummary}</p>}
              <div className="space-y-8">
                {kenyaParks.map((park, i) => <ParkCard key={i} park={park} />)}
              </div>
            </div>
          )}
          {tanzaniaParks.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-green-800 mb-3">Tanzania</h3>
              {tanzaniaSummary && <p className="text-gray-600 mb-6 max-w-3xl">{tanzaniaSummary}</p>}
              <div className="space-y-8">
                {tanzaniaParks.map((park, i) => <ParkCard key={i} park={park} />)}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="space-y-8">
          {ungrouped.length > 0 ? ungrouped.map((park, i) => <ParkCard key={i} park={park} />) : parks.map((park, i) => <ParkCard key={i} park={park} />)}
        </div>
      )}
    </section>
  );
}
