import { Info, Clock, CheckCircle } from 'lucide-react';

export default function BookingNote({ isDayTrip = false }: { isDayTrip?: boolean }) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
      <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2 mb-4">
        <Info className="w-5 h-5" /> Booking Information
      </h3>
      <ul className="space-y-2 text-sm text-amber-800">
        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />All prices are per person sharing in a double/twin room</li>
        {!isDayTrip && <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />Single room supplement available on request</li>}
        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />Children under 12 receive discounted rates</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />Custom itineraries available — contact us for a personalised quote</li>
        <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />Prices valid for 2025/2026 season — subject to park fee changes</li>
      </ul>
      <div className="mt-4 pt-4 border-t border-amber-200">
        <a href="mailto:info@catssafaris.com?subject=Safari%20Booking%20Enquiry" className="text-green-800 font-semibold hover:underline text-sm">Email us for availability → info@catssafaris.com</a>
      </div>
    </div>
  );
}
