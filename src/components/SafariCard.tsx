import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin } from 'lucide-react';

interface Safari {
  slug: string;
  title: string;
  image: string;
  description?: string;
  duration: number;
  durationUnit: string;
  destination?: string;
  parks?: string[];
  priceFrom?: number;
  highlights?: string[];
}

export default function SafariCard({ safari }: { safari: Safari }) {
  return (
    <Link href={`/safari/${safari.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={safari.image}
          alt={safari.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {safari.priceFrom && (
          <div className="absolute top-3 right-3 bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            From ${safari.priceFrom.toLocaleString()}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-800 transition-colors line-clamp-2 mb-2">{safari.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{safari.duration} {safari.durationUnit}</span>
          {safari.destination && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{safari.destination}</span>}
        </div>
        {safari.description && <p className="text-gray-600 text-sm line-clamp-3">{safari.description}</p>}
        <div className="mt-4 text-green-800 font-semibold text-sm group-hover:underline">View Details →</div>
      </div>
    </Link>
  );
}
