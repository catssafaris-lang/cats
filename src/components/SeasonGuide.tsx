import { Sun, Cloud, CloudRain, Leaf } from 'lucide-react';

const seasons = [
  { name: 'Peak Season', months: 'Jul – Oct & Dec – Mar', icon: Sun, color: 'text-red-600', bg: 'bg-red-50 border-red-200', desc: 'Best wildlife viewing. Great Migration in the Mara (Jul–Oct). Dry weather, sparse vegetation makes animals easy to spot.' },
  { name: 'Shoulder A', months: 'Jan – Mar', icon: Leaf, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', desc: 'Calving season in the Serengeti. Good birding. Pleasant weather with occasional showers.' },
  { name: 'Shoulder B', months: 'Jun', icon: Cloud, color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', desc: 'Transition to dry season. Fewer crowds, good rates. Early migration movements begin.' },
  { name: 'Low Season', months: 'Apr – May & Nov', icon: CloudRain, color: 'text-green-600', bg: 'bg-green-50 border-green-200', desc: 'Long rains (Apr–May) and short rains (Nov). Lowest prices. Lush landscapes, excellent birding, newborn animals.' },
];

export default function SeasonGuide() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Safari Season Guide</h2>
      <div className="grid gap-4">
        {seasons.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className={`rounded-xl p-4 border ${s.bg}`}>
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-5 h-5 ${s.color}`} />
                <span className="font-bold text-gray-900">{s.name}</span>
                <span className="text-xs text-gray-500 ml-auto">{s.months}</span>
              </div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
