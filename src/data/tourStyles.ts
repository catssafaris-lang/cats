import { safaris, type Safari } from './safaris';

/** Tour-style helpers: classify EXISTING packages only (no new products). */
export const isGroupTour = (s: Safari) =>
  /group|joining/i.test(`${s.slug} ${s.title}`) || (s.type || []).some((t) => /group/.test(t));

const isCoastOrigin = (s: Safari) => /diani|mombasa|coast|beach|zanzibar|watamu/i.test(s.slug);
const fromNairobi = (s: Safari) =>
  s.destination === 'kenya' && !isCoastOrigin(s) && (s.type || []).includes('nairobi-departure');

const byDuration = (a: Safari, b: Safari) => {
  const h = (x: Safari) => (x.durationUnit === 'hours' ? x.duration / 24 : x.duration);
  return h(a) - h(b) || a.priceFrom - b.priceFrom;
};

export const isExcursion = (s: Safari) => s.durationUnit === 'hours' || /nairobi-national-park|nairobi-into-africa|city-tour/i.test(s.slug);
export const isDayTrip = (s: Safari) => !isExcursion(s) && s.durationUnit === 'days' && s.duration === 1;
export const isFlyIn = (s: Safari) => (s.type || []).includes('flight-safari');

export const privateNairobiTours = () => safaris.filter((s) => fromNairobi(s) && !isGroupTour(s)).sort(byDuration);
export const groupNairobiTours = () =>
  safaris.filter((s) => s.destination === 'kenya' && isGroupTour(s) && !isCoastOrigin(s)).sort(byDuration);
export const groupCoastTours = () =>
  safaris.filter((s) => (s.destination === 'kenya' || s.destination === 'beach') && isGroupTour(s) && isCoastOrigin(s)).sort(byDuration);
export const festiveNairobiTours = () =>
  safaris.filter((s) => fromNairobi(s) || (s.destination === 'kenya' && isGroupTour(s) && !isCoastOrigin(s))).sort(byDuration);

export interface TourCardData {
  slug: string; title: string; image: string; duration: number; durationUnit: string;
  priceFrom: number; isGroup: boolean; isFlyIn: boolean; parks: string[];
}
export const toCard = (s: Safari): TourCardData => ({
  slug: s.slug, title: s.title, image: s.image, duration: s.duration, durationUnit: s.durationUnit,
  priceFrom: s.priceFrom, isGroup: isGroupTour(s), isFlyIn: isFlyIn(s), parks: (s.parks || []).slice(0, 3),
});
export const durationLabel = (c: { duration: number; durationUnit: string }) =>
  c.durationUnit === 'hours' ? `${c.duration} hours` : c.duration === 1 ? 'Full day' : `${c.duration} days`;
