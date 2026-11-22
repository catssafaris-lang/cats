import { safaris, type Safari } from './safaris';

/** Maps blog topics to EXISTING safari packages (no new products). */
const RULES: { test: RegExp; match: RegExp }[] = [
  { test: /diani-to-masai-mara/, match: /diani.*mara|mara.*diani/ },
  { test: /climbing|kilimanjaro-climbing/, match: /kilimanjaro-(marangu|machame|lemosho|rongai|umbwe)|climb/ },
  { test: /nairobi-national-park|nairobi/, match: /nairobi-national-park|nairobi-into-africa|nairobi-layover|giraffe|sheldrick/ },
  { test: /tsavo/, match: /tsavo/ },
  { test: /^(?!.*diani).*honeymoon/, match: /honeymoon|diani.*luxury|luxury.*diani/ },
  { test: /diani|beach-and-bush/, match: /diani/ },
  { test: /zanzibar/, match: /zanzibar/ },
  { test: /masai-mara|migration|big-five/, match: /mara/ },
  { test: /amboseli|elephant/, match: /amboseli/ },
  { test: /family|kids/, match: /family|nakuru|amboseli/ },
  { test: /ngorongoro|serengeti|tanzania/, match: /ngorongoro|serengeti|tanzania|tarangire/ },
  { test: /flight|flying|bush-flights/, match: /flight|fly-in|flying/ },
  { test: /transport/, match: /nairobi-national-park|day-trip/ },
  { test: /lodge|camp/, match: /luxury|mara/ },
];

export function getRelatedSafaris(blogSlug: string, limit = 3): Safari[] {
  const out: Safari[] = [];
  for (const r of RULES) {
    if (!r.test.test(blogSlug)) continue;
    for (const s of safaris) {
      if (out.length >= limit) break;
      if (r.match.test(s.slug) && !out.includes(s)) out.push(s);
    }
    if (out.length >= limit) break;
  }
  if (out.length < limit) {
    for (const s of safaris) {
      if (out.length >= limit) break;
      if (/mara|amboseli|nairobi-national-park/.test(s.slug) && !out.includes(s)) out.push(s);
    }
  }
  return out;
}
