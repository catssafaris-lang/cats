import { getIKUrl } from '@/lib/imagekit';

export interface ItineraryDay {
    day: number;
    id?: string;
    tagline?: string;
    title: string;
    description: string;
    meals?: string;
    accommodation?: string;
    highlights?: string[];
}

export interface ItineraryProgram {
    id: string;
    title: string;
    duration: string;
    tagline: string;
    imageUrl?: string;
    overview?: string;
    highlights?: string[];
    locations?: string[];
    days: ItineraryDay[];
    inclusions?: string[];
    exclusions?: string[];
    bestFor?: string;
    startingFrom?: string;
}

export interface FeaturedProperty {
    name: string;
    location: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Experience {
    slug: string;
    title: string;
    description: string;
    detailedDescription?: string;
    highlights: string[];
    whatToExpect?: string[];
    whatToPack?: string[];
    duration?: string;
    imageUrl?: string;
    gallery?: { url: string; alt: string }[];
    safariType?: string;
    itineraries?: ItineraryProgram[];
    seoKeywords?: string[];
    bestTimeToVisit?: string;
    idealFor?: string[];
    locations?: string[];
    featuredProperties?: FeaturedProperty[];
    faqs?: FAQ[];
    expertTips?: string[];
    inclusions?: string[];
    exclusions?: string[];
    nationalParks?: {
        name: string;
        slug: string;
        country: 'Kenya' | 'Tanzania';
        description: string;
        imageUrl?: string;
        birdSpeciesCount?: string;
        keySpecies?: string[];
        bestTime?: string;
        habitat?: string;
        birdingTip?: string;
        elevation?: string;
        culturalHighlight?: string;
        community?: string;
    }[];
}

export const experiences: Experience[] = [
    {
        slug: "hot-air-balloon-flight-over-the-masai-mara",
        title: "Masai Mara Hot Air Balloon Safari",
        description:
            "Experience the ultimate perspective as you rise above the earth on a hot air balloon safari. The ground rapidly recedes as you gain altitude, revealing grander vistas of the Masai Mara rolling hills. From the gondola, you can witness the great trains of wildebeests stretching to the horizon and families of elephants strolling to watering holes. The landscape and wildlife appear endless as you travel with the wind on this unforgettable sky-sailing safari managed by Collective African Tours & Safaris.",
        detailedDescription: `Your adventure begins before dawn. You'll be picked up from your lodge or camp and driven to the launch site, where the massive balloons are being inflated with bursts of flame. As the sun starts to peek over the horizon, you'll climb into the basket and gently lift off.

The silence of the early morning is broken only by the occasional roar of the burners. Below you, the Mara comes alive. You'll glide over the winding Mara River, spot hippos in the water, and see predators returning from their night hunt. The vastness of the savannah is truly breathtaking from this vantage point.

After about an hour in the air, your pilot will find a safe landing spot. But the experience doesn't end there. A traditional champagne bush breakfast awaits you, set up in the middle of the wilderness. Sip on chilled bubbly and enjoy a full English breakfast as you recount the morning's sightings with your fellow adventurers.`,
        highlights: [
            "Aerial views of the Masai Mara",
            "Wildebeest migration spotting from above",
            "Bird's eye view of big cats and elephants",
            "Champagne bush breakfast in the wild"
        ],
        whatToExpect: [
            "Early morning pick-up (around 5:00 AM)",
            "Safety briefing from your expert pilot",
            "Approximately one hour of flight time",
            "Commemorative flight certificate",
            "Return transfers to your lodge"
        ],
        whatToPack: [
            "A warm jacket or fleece for the early start",
            "Binoculars for wildlife spotting",
            "A camera with plenty of storage",
            "Sunglasses and a hat",
            "Comfortable closed-toe shoes"
        ],
        duration: "4-5 Hours (including breakfast and transfers)",
        imageUrl: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1762547790596-8a50b3b2ac1e?w=800&auto=format&fit=crop&q=80',
                alt: "Champagne Bush Breakfast after balloon flight"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Hot air balloon taking off at sunrise"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927725716-7d5f55b9b1f1?w=800&auto=format&fit=crop&q=80',
                alt: "Aerial view of the Masai Mara landscape"
            }
        ],
        safariType: "masai-mara",
    },
    {
        slug: "masai-village-cultural-visit",
        title: "Masai Village Cultural Visit",
        description:
            "Step beyond the safari vehicle and into the soul of East Africa with an authentic Maasai village visit. As you approach the boma, the rhythmic chanting of warriors in crimson shukas rises from the dusty earth, and the air fills with the jingle of hand-crafted beadwork. Watch spellbound as young morans leap skyward in the legendary adumu jumping ceremony, their feet barely grazing the ground. Inside mud-walled homes, elders share centuries-old stories of cattle, courage, and the stars that guide their nomadic paths across the Great Rift Valley.",
        detailedDescription: `A visit to a Maasai boma (village) is a profound cultural encounter. You'll be welcomed by the rhythmic singing and high-jumping dances of the warriors. Inside the village, women in intricate beadwork will guide you through their traditional homes made of mud, sticks, and cow dung.

You'll learn about their deep-rooted traditions, from the significance of their jewelry to their expert knowledge of the land and wildlife. This is an opportunity to see how one of the world's last great warrior cultures lives in harmony with nature in the 21st century.`,
        highlights: [
            "Visit authentic Maasai and Samburu bomas",
            "Learn about traditional customs and ceremonies",
            "Experience hand-made beaded craftsmanship",
            "Traditional warrior welcome dance"
        ],
        whatToExpect: [
            "Guided tour by an English-speaking Maasai host",
            "Demonstration of traditional fire-making",
            "Opportunity to purchase authentic beadwork",
            "Insights into nomadic pastoralist lifestyle"
        ],
        imageUrl: "https://images.unsplash.com/photo-1610982330184-b26f7ea46541?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1738508045763-5551fde76162?w=800&auto=format&fit=crop&q=80',
                alt: "Maasai warriors in traditional attire"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927725716-7d5f55b9b1f1?w=800&auto=format&fit=crop&q=80',
                alt: "Maasai village overview"
            },
            {
                url: 'https://images.unsplash.com/photo-1623519364070-effe59a1c4d7?w=800&auto=format&fit=crop&q=80',
                alt: "Traditional Maasai culture"
            },
            {
                url: 'https://images.unsplash.com/photo-1623519364070-effe59a1c4d7?w=800&auto=format&fit=crop&q=80',
                alt: "Masai Cultural Visit"
            },
            {
                url: 'https://images.unsplash.com/photo-1550100278-c42ebaf8df7f?w=800&auto=format&fit=crop&q=80',
                alt: "Masai Village Experience"
            },
            {
                url: 'https://images.unsplash.com/photo-1623519364070-effe59a1c4d7?w=800&auto=format&fit=crop&q=80',
                alt: "Cultural Encounter 4"
            },
            {
                url: 'https://images.unsplash.com/photo-1550100278-c42ebaf8df7f?w=800&auto=format&fit=crop&q=80',
                alt: "Cultural Encounter 1"
            },
            {
                url: 'https://ik.imagekit.io/axd1riwnv/secretary-bird-sagittarius-serpentarius-masai-mara-kenya_53283225656_o.jpg',
                alt: "Cultural Encounter 5"
            }
        ]
    },
    {
        slug: "africa-beach-holidays",
        title: "East Africa Beach Holidays",
        description:
            "Trade the amber savannah for the turquoise embrace of the Indian Ocean along Kenya's stunning 563-kilometre coastline. Sink your toes into the powdery white sands of Diani Beach—Africa's most awarded shoreline—where dhow sails dot the horizon and reef fish dart through coral gardens just metres from shore. Glide through the underwater world of Watamu Marine Park, feast on freshly grilled rock lobster at a beachside banda, and let the warm Swahili breeze dissolve every last trace of travel fatigue. This is the perfect sun-soaked finale to any wildlife adventure.",
        detailedDescription: `The Kenyan coast is a paradise of white sands and turquoise waters. Diani Beach, consistently voted one of Africa's best, offers a wide range of luxury resorts and water sports. Further north, the marine parks of Malindi and Watamu are havens for divers and snorkelers.

Whether you're looking for a relaxing end to your safari or a dedicated beach holiday, the Indian Ocean coast provides a serene sanctuary. Enjoy fresh seafood, sunset dhow cruises, and the warm hospitality of the Swahili people.`,
        highlights: [
            "Diani Beach relaxation",
            "Zanzibar island hopping and Stone Town tours",
            "Snorkeling and diving in the Indian Ocean",
            "Luxury beachfront resorts"
        ],
        whatToExpect: [
            "World-class white sand beaches",
            "Warm, crystal-clear Indian Ocean waters",
            "Diverse water sports (kite surfing, diving, snorkeling)",
            "Vibrant Swahili culture and cuisine"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1775135505494-4c95022d19e2?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1775135505494-4c95022d19e2?w=800&auto=format&fit=crop&q=80',
                alt: "Aerial view of Watamu beach"
            },
            {
                url: 'https://images.unsplash.com/photo-1730101703305-e5e8bbef48d9?w=800&auto=format&fit=crop&q=80',
                alt: "Kisite Marine Park snorkeling"
            },
            {
                url: 'https://images.unsplash.com/photo-1623745494461-c5afa6f6e507?w=800&auto=format&fit=crop&q=80',
                alt: "Coastal beauty of Kenya"
            }
        ],
        safariType: "beach",
    },
    {
        slug: "zanzibar-beach-holidays",
        title: "Zanzibar Beach Holidays",
        description:
            "Drift into the legendary Spice Island, where the intoxicating scent of clove and cinnamon mingles with the salt-kissed ocean air. Wander the labyrinthine alleys of Stone Town—a UNESCO World Heritage site alive with carved wooden doors and bustling bazaars—before escaping to the powder-white beaches of Nungwi and Kendwa. Dive into the pristine coral gardens of Mnemba Atoll, sail aboard a traditional dhow as the sun melts into the Indian Ocean, and savour Zanzibari spice-infused seafood under a canopy of stars. Every moment here is pure tropical enchantment.",
        detailedDescription: `Zanzibar is the 'Spice Island', a place of incredible sensory richness. Stone Town, a UNESCO World Heritage site, is a labyrinth of narrow alleys, bustling bazaars, and intricately carved wooden doors. The beaches, particularly in the north and east, are world-renowned for their powdery white sand and diverse marine life.

Experience a spice tour to learn about the island's namesake exports, sail on a traditional dhow as the sun sets, or dive into the pristine reefs of the Mnemba Atoll. Zanzibar is the perfect conclusion to any East African adventure.`,
        highlights: [
            "Stone Town cultural and historical tours",
            "Pristine white-sand beaches of Nungwi and Kendwa",
            "Sunset dhow cruises and spice plantation visits",
            "Snorkeling and diving at Mnemba Atoll"
        ],
        whatToExpect: [
            "Immersion in Swahili culture and history",
            "Exotic spice scents and tropical flavors",
            "World-class diving and snorkeling spots",
            "Relaxed, laid-back island atmosphere"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1730101703305-e5e8bbef48d9?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1730101703305-e5e8bbef48d9?w=800&auto=format&fit=crop&q=80',
                alt: "Zanzibar turquoise waters"
            },
            {
                url: 'https://images.unsplash.com/photo-1775135505494-4c95022d19e2?w=800&auto=format&fit=crop&q=80',
                alt: "Zanzibar coastal aerial"
            }
        ],
        safariType: "beach",
    },
    {
        slug: "bush-dining-on-your-african-safari",
        title: "Bush Dining Experience",
        description:
            "Imagine a linen-draped table set beneath a canopy of fever trees, flickering lanterns casting amber light across fine crystal while the distant roar of a lion echoes through the darkness. Bush dining transforms the wild savannah into the most exclusive restaurant on Earth. Savour chef-prepared courses of herb-crusted game loin and flame-kissed vegetables as the Southern Cross blazes overhead. Whether it is a champagne breakfast beside a hippo pool at sunrise or a candlelit five-course dinner on the open Mara plains, every bite is infused with the magic of the African bush.",
        detailedDescription: `Bush dining is the pinnacle of the African safari experience. Imagine waking up to a cooked-to-order breakfast under a sprawling acacia tree as the morning mist lifts off the savannah. Or a candlelit dinner on the open plains, surrounded by the sounds of the nocturnal bush.

Our team sets up a full dining experience in remote, scenic locations, complete with white linen, fine glassware, and a menu of fresh, locally-sourced delicacies. It's a moment of refined luxury in the heart of the wild.`,
        highlights: [
            "Breakfast under acacia trees",
            "Candlelit bush dinners under the stars",
            "Authentic African cuisine in wild settings",
            "Private and exclusive locations"
        ],
        whatToExpect: [
            "Full table service in the wilderness",
            "Chef-prepared gourmet meals",
            "Selection of premium wines and beverages",
            "Unrivaled views and atmosphere"
        ],
        imageUrl: "https://images.unsplash.com/photo-1696334872500-3968a5feb631?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1762547790596-8a50b3b2ac1e?w=800&auto=format&fit=crop&q=80',
                alt: "Cooked to order breakfast in the bush"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Scenic lunch setup"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Golden hour dining"
            }
        ]
    },
    {
        slug: "sundowner-on-your-african-safari",
        title: "Safari Sundowners",
        description:
            "As the African sun dips toward the horizon, painting the sky in strokes of violet, tangerine, and molten gold, your guide selects a scenic kopje overlooking the endless plains. A gleaming drinks trolley appears—ice clinking against crystal—and you raise a classic gin and tonic to the silhouette of an acacia tree framing the setting sun. Herds of elephants drift past in the amber haze while birdsong yields to the first calls of the night. This time-honoured safari tradition, born in the golden age of African exploration, is the most sublime happy hour you will ever experience.",
        detailedDescription: `The sundowner is a cherished safari tradition dating back to the grand expeditions of the 1920s. As the sun begins its descent, your guide will select a scenic overlook or a tranquil clearing to set up a mobile bar.

Sip on a classic gin and tonic or a glass of South African wine while watching the sky transform through shades of violet, orange, and deep red. It's the perfect time to reflect on the day's adventures and toast to the beauty of the African sunset.`,
        highlights: [
            "Scenic sunset views over the savannah",
            "Transition from day to evening in a relaxed setting",
            "Hors d'oeuvres and refreshments in the wild",
            "Iconic safari tradition"
        ],
        whatToExpect: [
            "Scenic location chosen by your guide",
            "Selection of premium spirits and cocktails",
            "Freshly prepared appetizers",
            "Pristine silence and panoramic views"
        ],
        imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1621139262458-3bd5568b44ef?w=800&auto=format&fit=crop&q=80',
                alt: "Chasing the sunset with a drink"
            },
            {
                url: 'https://images.unsplash.com/photo-1777929746615-3dda58c30425?w=800&auto=format&fit=crop&q=80',
                alt: "Iconic African sundowner moment"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Sunset drinks overlooking the plains"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Golden hour on the savannah"
            }
        ],
        safariType: "sundowner",
    },
    {
        slug: "wildebeest-calving-safari",
        title: "Wildebeest Calving Safari",
        description:
            "Between January and March, the southern Serengeti plains transform into the world's most dramatic maternity ward. Up to 8,000 wildebeest calves are born every single day, filling the short-grass plains with the bleating chorus of new life. Watch in awe as wobbly newborns rise on shaky legs within minutes of birth, instinctively imprinting on their mothers while hungry cheetahs, lions, and hyenas circle the fringes. The raw tension between tenderness and predation creates some of the most powerful wildlife encounters on Earth—an emotional spectacle that will stay with you forever.",
        detailedDescription: `The calving season is a time of incredible vulnerability and raw drama. In the lush southern Serengeti, up to 8,000 wildebeest calves are born every single day. 

This abundance of easy prey draws a high concentration of predators, leading to intense wildlife sightings. Watching a newborn calf take its first shaky steps within minutes of birth, while lions and cheetahs lurk on the horizon, is a powerful reminder of the delicate balance of nature.`,
        highlights: [
            "Peak calving season (January to March)",
            "High concentration of newborns and predators",
            "Serengeti southern plains spectacle",
            "Unrivaled predator-prey dynamics"
        ],
        whatToExpect: [
            "Witnessing live births in the wild",
            "Abundant wildlife on short-grass plains",
            "Excellent visibility for photography",
            "Migratory patterns during the green season"
        ],
        imageUrl: "https://images.unsplash.com/photo-1772290776813-09b52267c552?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=800&auto=format&fit=crop&q=80',
                alt: "Wildebeest calving in the Serengeti"
            },
            {
                url: 'https://images.unsplash.com/photo-1673667618335-face21a8b1a8?w=800&auto=format&fit=crop&q=80',
                alt: "New arrivals on the southern plains"
            },
            {
                url: 'https://images.unsplash.com/photo-1707386465581-9792fb60430e?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife migration calving season"
            },
            {
                url: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=800&auto=format&fit=crop&q=80',
                alt: "The drama of the Serengeti calving"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927725716-7d5f55b9b1f1?w=800&auto=format&fit=crop&q=80',
                alt: "Wildebeest herds on the move"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927726004-c6d2713ad036?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife on the plains"
            }
        ],
        safariType: "migration",
    },
    {
        slug: "wildebeest-migration-masaimara-and-serengeti",
        title: "Great Wildebeest Migration",
        description:
            "Witness the greatest wildlife spectacle on the planet as over 1.5 million wildebeest, 200,000 zebras, and countless gazelles thunder across the Serengeti-Mara ecosystem in an ancient clockwise odyssey driven by rain and instinct. The most heart-stopping chapter unfolds between July and October at the crocodile-infested Mara River, where desperate herds plunge down steep banks in a chaos of splashing hooves and snapping jaws. Standing on the riverbank as this primal drama erupts before your eyes is a humbling, once-in-a-lifetime encounter with the raw power of nature.",
        detailedDescription: `The Great Migration is one of "The Seven New Wonders of the World." This annual spectacle involves over 1.5 million wildebeest and 200,000 zebras moving through the Serengeti-Mara ecosystem. 

The most dramatic phase occurs between July and October, as the herds face the treacherous Mara River crossings, where crocodiles lie in wait. Witnessing this raw struggle for survival is an unforgettable experience that defines the African wilderness.`,
        highlights: [
            "River crossings and mass herd movements",
            "Predator-prey interactions on the open plains",
            "Participation in one of nature's greatest wonders",
            "Endless horizons filled with wildlife"
        ],
        whatToExpect: [
            "Breathtaking scale of animal herds",
            "High concentration of lions, cheetahs, and leopards",
            "Dramatic river crossing sightings (seasonal)",
            "Unrivaled photographic opportunities"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1740927725716-7d5f55b9b1f1?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=800&auto=format&fit=crop&q=80',
                alt: "Dramatic Mara River crossing"
            },
            {
                url: 'https://images.unsplash.com/photo-1673667618335-face21a8b1a8?w=800&auto=format&fit=crop&q=80',
                alt: "The great herds on the move"
            },
            {
                url: 'https://images.unsplash.com/photo-1707386465581-9792fb60430e?w=800&auto=format&fit=crop&q=80',
                alt: "Migration landscape"
            },
            {
                url: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=800&auto=format&fit=crop&q=80',
                alt: "Vast migration herds"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927725716-7d5f55b9b1f1?w=800&auto=format&fit=crop&q=80',
                alt: "Vast herds of wildebeest on the Mara plains"
            },
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Migration from above"
            }
        ],
        safariType: "migration",
    },
    {
        slug: "night-game-drive-safaris",
        title: "Night Game Drives",
        description:
            "When the sun vanishes below the savannah, an entirely different Africa awakens. Climb aboard a specially equipped 4x4 as your guide sweeps a powerful spotlight across the darkness, illuminating the emerald eyes of a leopard on the hunt, the ghostly silhouette of an aardvark shuffling through the grass, and the comical wide-eyed stare of a bushbaby clinging to a fever-tree branch. The cool night air carries the haunting calls of hyenas and the rhythmic chirp of crickets—a sensory tapestry that makes a night game drive one of the most thrilling and underrated safari experiences in Africa.",
        detailedDescription: `When the sun goes down, a different world awakens. Night game drives, typically conducted in private conservancies, allow you to see nocturnal creatures that are rarely spotted during the day.

Guided by powerful spotlights, you'll search for the glint of eyes in the dark. You might encounter elusive leopards on the hunt, serval cats, caracals, honey badgers, and the tiny but fascinating bushbabies. The sensory experience of the bush at night—the smells, the calls, and the cool air—is completely transformative.`,
        highlights: [
            "Spotting nocturnal predators like leopards and hyenas",
            "Guided excursions with specialized lighting",
            "Experience the unique sounds of the night bush",
            "Exclusive access in private conservancies"
        ],
        whatToExpect: [
            "Departure after dinner or at dusk",
            "Knowledgeable guides specializing in nocturnal behavior",
            "Opportunity to see rare species like aardvarks",
            "Immersive sensory experience under the stars"
        ],
        imageUrl: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?w=800&auto=format&fit=crop&q=80',
                alt: "Night game drive encounter with lion"
            },
            {
                url: 'https://images.unsplash.com/photo-1746272292394-13c6566cbf71?w=800&auto=format&fit=crop&q=80',
                alt: "Leopard camouflaged in the darkness"
            },
            {
                url: 'https://images.unsplash.com/photo-1709403108621-66fe97132946?w=800&auto=format&fit=crop&q=80',
                alt: "Safari vehicle with lion at dusk"
            },
            {
                url: 'https://images.unsplash.com/photo-1516651165460-30864737f9d9?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife visibility at night"
            },
            {
                url: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?w=800&h=500&fit=crop",
                alt: "Nocturnal wildlife activity"
            }
        ]
    },
    {
        slug: "conservation-tree-planting",
        title: "Conservation & Tree Planting",
        description:
            "Leave a living legacy in the African soil with our hands-on conservation and reforestation experience. Join local conservationists at the edge of a protected forest corridor as they guide you in planting indigenous saplings—croton, African olive, and wild fig—that will one day shelter elephants and provide nesting sites for endangered raptors. Feel the rich red earth between your fingers, learn about the delicate balance of savannah ecology, and walk away with the knowledge that your visit has offset its carbon footprint and contributed directly to preserving East Africa's wild landscapes for generations to come.",
        detailedDescription: `At Collective African Tours & Safaris, we believe in giving back to the landscapes that sustain us. Our conservation initiative allows guests to participate in reforestation efforts in key ecosystems.

Planting an indigenous sapling is a tangible way to offset the carbon footprint of your travels and leave a lasting, positive impact on the environment. It's a peaceful, grounding experience that connects you deeply with the African soil and the community-led efforts to protect it for future generations.`,
        highlights: [
            "Plant indigenous trees in protected areas",
            "Offset your travel carbon footprint",
            "Support local community conservation projects",
            "Educational session on local ecology"
        ],
        whatToExpect: [
            "Hands-on tree planting experience",
            "Briefing from local conservationists",
            "Knowledge of endemic plant species",
            "Commemorative certificate for your contribution"
        ],
        imageUrl: "https://images.unsplash.com/photo-1772175007778-f1ddba065c2b?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1710136612138-978d23cd0fea?w=800&auto=format&fit=crop&q=80',
                alt: "Rhino conservation"
            },
            {
                url: 'https://images.unsplash.com/photo-1609848930155-cd505cf3cd38?w=800&auto=format&fit=crop&q=80',
                alt: "Conservation efforts at Ol Pejeta"
            },
            {
                url: 'https://images.unsplash.com/photo-1777929746615-3dda58c30425?w=800&auto=format&fit=crop&q=80',
                alt: "Conservation and Tree Planting activity"
            },
            {
                url: 'https://images.unsplash.com/photo-1623725202930-c40768a6a49a?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife conservation efforts"
            }
        ]
    },
    {
        slug: "hi-tech-wildlife-tracking",
        title: "Hi-Tech Wildlife Tracking",
        description:
            "Step into the nerve centre of modern wildlife conservation, where satellite collars, infrared camera traps, and AI-powered acoustic sensors work around the clock to safeguard Africa's most endangered species. Walk shoulder-to-shoulder with field researchers at Ol Pejeta Conservancy as they demonstrate real-time GPS tracking of black rhinos, decode leopard movement data, and explain how drone patrols have slashed poaching incidents. This is conservation at its most cutting-edge—an eye-opening experience that reveals the high-tech battle being waged to protect the continent's irreplaceable wildlife.",
        detailedDescription: `Go behind the scenes of modern wildlife management. This experience takes you into the field with researchers and rangers using state-of-the-art technology to protect Africa's most vulnerable inhabitants.

Learn about satellite-linked collars, camera trap arrays, and acoustic monitoring systems used to track rhinos, elephants, and big cats. You'll gain a deep understanding of how data is used to mitigate human-wildlife conflict and combat poaching in real-time.`,
        highlights: [
            "Observe satellite tracking of collared animals",
            "Understanding camera trap technology and data",
            "Insight into anti-poaching operations",
            "Direct interaction with wildlife researchers"
        ],
        whatToExpect: [
            "Demonstration of monitoring equipment",
            "Explanation of data-driven conservation strategies",
            "Field visit to research outposts",
            "Meaningful contribution to conservation funding"
        ],
        imageUrl: "https://images.unsplash.com/photo-1667209942810-f317284b2e18?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1773085418843-fbfc965f37d8?w=800&auto=format&fit=crop&q=80',
                alt: "Hi-tech wildlife monitoring center"
            },
            {
                url: 'https://images.unsplash.com/photo-1731355775971-dae16479f7af?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife researchers using tracking tech"
            },
            {
                url: 'https://images.unsplash.com/photo-1775681454750-199bc69a5f18?w=800&auto=format&fit=crop&q=80',
                alt: "Aerial tracking of rhinos"
            },
            {
                url: 'https://images.unsplash.com/photo-1621139260397-c65cb50ff7d9?w=800&auto=format&fit=crop&q=80',
                alt: "Advanced conservation technology"
            },
            {
                url: 'https://images.unsplash.com/photo-1609848930155-cd505cf3cd38?w=800&auto=format&fit=crop&q=80',
                alt: "Wildlife conservation research at Ol Pejeta"
            },
            {
                url: 'https://images.unsplash.com/photo-1598894000056-7df67caaed68?w=800&auto=format&fit=crop&q=80',
                alt: "Rhino tracking at Ol Pejeta"
            }
        ],
        safariType: "wildlife",
    },
    {
        slug: "professional-photographic-safaris-kenya",
        title: "Photographic Safaris",
        description:
            "Elevate your wildlife photography from snapshots to gallery-worthy masterpieces on a safari designed by professionals, for professionals. Travel in a specially modified 4x4 fitted with 360-degree swivel seats, beanbag lens mounts, and lowered side panels that put you at eye level with a stalking lioness. Your guide—a published wildlife photographer—coaches you on golden-hour composition, back-lit rim lighting, and the split-second timing that separates a good shot from a breathtaking one. Whether you shoot with a flagship mirrorless or a smartphone, you will return home with images that tell the untamed story of the Mara.",
        detailedDescription: `Take your wildlife photography to the next level. Our specialized safaris are designed by photographers, for photographers. We use modified 4x4 vehicles with 360-degree swivel seats and beanbag mounts to ensure you have the best possible angle for every shot.

Your guide—a professional wildlife photographer—will help you master light, composition, and timing. Whether you're a seasoned pro or a passionate amateur, you'll benefit from expert advice on camera settings and the behavior of your subjects to anticipate the action.`,
        highlights: [
            "Specially modified vehicles for photography",
            "Expert guidance from professional photographers",
            "Focus on lighting, composition, and action shots",
            "Priority access to prime wildlife viewing spots"
        ],
        whatToExpect: [
            "Low-angle photography opportunities",
            "Extended time at sightings to capture the perfect moment",
            "Technical workshops and image review sessions",
            "Custom-built camera mounts and stabilization"
        ],
        imageUrl: 'https://ik.imagekit.io/axd1riwnv/lions-masai-mara.jpg',
        gallery: [
            {
                url: 'https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg',
                alt: "Leopard resting in an acacia tree — a photographer's dream sighting"
            },
            {
                url: 'https://ik.imagekit.io/axd1riwnv/5-days-masai-mara-lake-nakuru-lake-naivasha.jpg',
                alt: "Cheetah on the hunt across the Mara plains"
            },
            {
                url: 'https://ik.imagekit.io/axd1riwnv/elephant.webp',
                alt: "Lion pride resting in golden savannah light"
            }
        ],
        safariType: "photography",
    },
    {
        slug: "family-safaris-kenya",
        title: "Family Safaris",
        description:
            "Create the adventure of a lifetime for every generation with a family safari crafted to captivate curious young minds and thrill seasoned travellers alike. Children become Junior Rangers—tracking animal footprints in the dust, learning Maasai beadwork from village elders, and gasping as a cheetah sprints across the plains. Family-friendly camps offer spacious interconnecting tents, kid-approved menus, and flexible game-drive schedules so little legs never tire. From toddlers to teenagers, the African bush ignites wonder, strengthens bonds, and plants the seeds of a lifelong love for the natural world.",
        detailedDescription: `An African safari is the ultimate classroom for children and a profoundly bonding experience for families. We curate itineraries that balance exciting wildlife encounters with educational activities and leisure time.

Our family-oriented camps offer 'Junior Ranger' programs, where children learn about animal tracking, bead-making with Maasai elders, and the importance of conservation. We ensure that accommodations are comfortable and cater to the specific needs of families, providing a safe and enriching environment for all ages.`,
        highlights: [
            "Educational Junior Ranger programs",
            "Family-friendly accommodations and dining",
            "Engaging activities for children and teens",
            "Kid-focused wildlife tracking and nature walks"
        ],
        whatToExpect: [
            "Tailored game drives with shorter durations if needed",
            "Safe and secure camp environments",
            "Cultural interactions designed for children",
            "Professional child-minding services available"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1516651165460-30864737f9d9?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1685301096575-60a1f285b96b?w=800&auto=format&fit=crop&q=80',
                alt: "Family viewing lions in the Mara"
            },
            {
                url: 'https://images.unsplash.com/photo-1741850821836-a0228e561406?w=800&auto=format&fit=crop&q=80',
                alt: "Exciting family game drive"
            },
            {
                url: 'https://ik.imagekit.io/axd1riwnv/lions-masai-mara.jpg',
                alt: "Family safari vehicle"
            },
            {
                url: 'https://images.unsplash.com/photo-1738508045763-5551fde76162?w=800&auto=format&fit=crop&q=80',
                alt: "Family enjoying wildlife encounters"
            }
        ],
        safariType: "family",
    },
    {
        slug: "honeymoon-safaris-kenya",
        title: "Honeymoon Safaris",
        description:
            "Begin your greatest adventure together in the most romantic setting on Earth. Picture waking in a private tented suite perched above the Mara River, stepping onto your deck to watch hippos yawn in the morning mist, then floating skyward in a hot-air balloon before landing to a champagne breakfast laid out on the golden savannah. As evening falls, a candlelit dinner for two materialises beneath a star-drenched African sky, the distant rumble of elephants your only soundtrack. With personalised surprises, ultra-luxurious lodges, and private game drives, this is a honeymoon as extraordinary as your love story.",
        detailedDescription: `Begin your journey together with the timeless romance of an African safari. Imagine watching the sunrise from a hot air balloon, followed by a private breakfast on the savannah, and ending the day with a candlelit dinner under a canopy of stars.

We handpick the most intimate and secluded lodges, featuring private plunge pools, outdoor showers, and breathtaking views. From personalized surprises to exclusive experiences, we ensure your honeymoon is as unique and magical as your love story.`,
        highlights: [
            "Private bush breakfasts and starlit dinners",
            "Ultra-luxurious and secluded accommodations",
            "Personalized romantic surprises and touches",
            "Exclusive private game drives"
        ],
        whatToExpect: [
            "VIP-level service and privacy",
            "Special honeymoon amenities (champagne, spa treatments)",
            "Unrivaled scenic locations for romantic moments",
            "Seamless logistics and personalized itinerary"
        ],
        imageUrl: "https://images.unsplash.com/photo-1481435471848-a5f4293c601b?w=800&h=500&fit=crop",
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?w=800&auto=format&fit=crop&q=80',
                alt: "Romantic hot air balloon flight"
            },
            {
                url: 'https://images.unsplash.com/photo-1621139262458-3bd5568b44ef?w=800&auto=format&fit=crop&q=80',
                alt: "Romantic sundowner moment"
            },
            {
                url: 'https://images.unsplash.com/photo-1777929746615-3dda58c30425?w=800&auto=format&fit=crop&q=80',
                alt: "Sunset drinks overlooking the plains"
            },
            {
                url: "https://images.unsplash.com/photo-1481435471848-a5f4293c601b?w=800&h=500&fit=crop",
                alt: "Romantic dinner setup for two in the bush"
            }
        ],
        safariType: "honeymoon",
    },
    {
        slug: "wellness-travel",
        title: "Wellness Safari Tours in Kenya & Tanzania",
        description:
            "Discover transformative wellness safari retreats across Kenya, Tanzania, and East Africa with Collective African Tours & Safaris (C.A.T.S). Our expertly curated wellness programmes blend world-class spa treatments, sunrise yoga on the savanna, guided mindfulness nature walks, Maasai herbal healing traditions, and exhilarating Big Five game drives into a single life-changing journey. From the volcanic hot springs of the Great Rift Valley to infinity-pool lodges overlooking the Masai Mara, every retreat is designed to nourish body, mind, and soul. Whether you seek a rejuvenating couples escape, a solo digital detox, a corporate wellness retreat, or a family-friendly wellness holiday in the African wilderness, C.A.T.S connects you with Kenya's and Tanzania's finest wellness lodges and trusted safari partners to craft an experience that restores you from the inside out. A gift to yourself and your wellbeing — because you deserve it.",
        detailedDescription: `We all know that nature is the best healer. Feeling the sunlight and the soft breezes from the plains, the forests, and the lakes is the best tonic for our health. Add to these magical landscapes Africa's beautiful giraffes, elephants, leopards, gazelles, and more to this natural cure for any ailment, and you are ready for the best wellness safari ever.

### The C.A.T.S Wellness Safari Philosophy

At C.A.T.S, we believe wellness is not a treatment you book — it is a way of travelling. Our wellness safaris weave together world-class spa therapies, ancient healing traditions, mindful wildlife encounters, and the raw beauty of East Africa into journeys that restore body, mind, and soul. Every lodge we partner with has been personally vetted by our team for its wellness credentials, its setting, and its ability to create genuine transformation.

### The Retreat at Giraffe Manor — Nairobi, Kenya

Your wellness journey begins the moment you arrive at one of Africa's most iconic boutique hotels. Set in the leafy suburb of Langata, Giraffe Manor is an elegant 1930s estate where endangered Rothschild giraffes roam the grounds and occasionally poke their long necks through the windows at breakfast. This is not a zoo — it is a conservation sanctuary and a living fairytale. After the long flight, settle into the manor's tranquil gardens for a private yoga session, or let a therapist ease your travel fatigue with a bespoke aromatherapy massage using Kenyan essential oils. Walk through the adjacent AFEW Giraffe Centre, hand-feed the resident giraffes, and feel the stress of modern life melt away before your safari has even begun. Giraffe Manor sets the emotional tone for the entire journey: wonder, intimacy, and connection with nature at its most gentle.

### Chyulu Spa at Finch Hattons Camp — Tsavo West, Kenya

Deep in the volcanic heart of Tsavo West National Park, Finch Hattons is a luxury tented camp that feels like stepping into an old-world explorer's dream — polished mahogany, canvas, and crystal, all surrounded by untamed wilderness. The Chyulu Spa is the crown jewel: two open-air massage pavilions, a yoga deck with views of the Chyulu Hills, a heated spa pool, a traditional hammam, and a fully equipped gym. Treatments draw on local botanicals — baobab oil body wraps, African mud detox masks, and volcanic hot stone therapies using basalt from the nearby lava flows. Book a sunrise yoga session on the raised timber deck as elephants graze below, follow it with a morning game drive through the park's red-earth elephant corridors, and return for a hammam ritual that leaves your skin glowing and your mind utterly still. The combination of Big Five wildlife and genuine spa excellence makes Finch Hattons one of the finest wellness destinations on the continent.

### Angama Mara — Masai Mara National Reserve, Kenya

Perched on the rim of the Great Rift Valley escarpment, Angama Mara offers one of the most dramatic settings in all of Africa. From your tented suite — each one a canvas palace with floor-to-ceiling glass — you gaze directly over the Mara Triangle, where the annual wildebeest migration unfolds like a living documentary. The lodge's wellness programme is built around the concept of "being suspended between earth and sky." Morning meditation sessions take place on the escarpment edge at dawn, with nothing between you and the vast savanna below. The spa menu features African botanical facials, deep-tissue massages with shea butter and neroli, and heated stone treatments. Between sessions, join a guided Maasai beading workshop, take a private bush picnic on the Mara plains, or simply float in the heated infinity pool while vultures circle lazily overhead. In the evening, the lodge's expert guides lead you on golden-hour game drives that bring you face to face with the Mara's legendary lion prides, leopards, and cheetahs. Angama is where adrenaline meets absolute serenity.

### Kani Spa at Four Seasons Safari Lodge — Serengeti, Tanzania

If the idea of receiving a deep-tissue massage while watching elephants drink at a waterhole appeals to you, the Four Seasons Serengeti is your place. The Kani Spa occupies a privileged rooftop position overlooking the lodge's natural watering hole, where buffalo, zebra, and elephants gather daily. The spa's philosophy is "reconnection with nature," and every treatment incorporates indigenous botanicals — moringa, baobab, and East African wildflower extracts — sourced from local communities. The signature experience is the Sunset Kopje Meditation: a guide drives you to a rocky outcrop at golden hour, where a wellness practitioner leads a guided meditation as the Serengeti turns amber and the first stars appear. Back at the lodge, the infinity pool stretches toward the horizon, and the resident naturalist hosts evening talks on the Serengeti's ecology. Combine game drives through the wildebeest calving grounds, hot air balloon safaris at dawn, and daily spa rituals for a week that fundamentally resets your relationship with time and nature.

### Chem Chem Lodge — Lake Manyara, Tanzania

Chem Chem sits at the edge of Tanzania's Great Rift Valley, where the lush shores of Lake Manyara meet dry savanna and ancient baobab forests. This is not a lodge that merely offers wellness — it is built on the belief that conservation, community, and personal restoration are inseparable. "Sunrise yoga? Sure. But how about a sunrise run over the savannah alongside a Maasai warrior?" reads their invitation, and they mean every word. Chem Chem's wellness programme is unconventional and deeply personal: forest bathing walks through the mahogany woodland, guided meditation beside Lake Manyara's flamingo-lined shores, in-suite massages using hand-pressed oils from the lodge's own botanical garden, and cultural healing sessions with a Maasai elder. The lodge also supports a local women's cooperative that produces natural skincare products — you can visit the workshop, learn about traditional plant medicine, and take home products made from the same ingredients used in your treatments. Game drives reveal tree-climbing lions, vast flamingo flocks, and one of the densest concentrations of large mammals in Africa.

### Hemingways Nairobi — Karen, Kenya

Named after the district made famous by Karen Blixen, Hemingways is a plantation-style boutique hotel surrounded by lush tropical gardens in one of Nairobi's most peaceful neighbourhoods. The spa is a world-class urban wellness sanctuary: hydrotherapy pools, a steam room, an aromatherapy suite, and treatment rooms staffed by therapists trained in both Western and traditional African techniques. This is the perfect pre- or post-safari wellness stopover — arrive from your international flight, surrender to a jet-lag recovery programme (hydrotherapy, reflexology, and a sleep-inducing scalp massage), and wake refreshed for the adventures ahead. Or end your safari here: spend a morning at the David Sheldrick Elephant Trust, an afternoon at the Karen Blixen Museum, and an evening in the spa's hydrotherapy circuit before your flight home. The hotel's restaurant serves farm-to-table Kenyan cuisine, and the bar's signature gin and tonics — made with botanicals from the Ngong Hills — are the ideal sundowner after a day of pampering.

### What Makes a C.A.T.S Wellness Safari Different

Our wellness safaris are not off-the-shelf packages. Every itinerary is hand-crafted by our travel specialists based on your personal wellness goals, fitness level, dietary needs, and dream wildlife encounters. Whether you want a five-day Mara escape with daily yoga and two spa treatments, a ten-day cross-country odyssey from Nairobi to the Serengeti, or a coastal extension on the Kenya coast with oceanfront yoga and Swahili cooking classes — we build it around you. Our network of trusted partners ensures that every lodge, every guide, and every therapist meets the C.A.T.S standard of excellence. Contact our team to start designing your bespoke wellness safari today.`,
        highlights: [
            "Sunrise yoga and tai chi on open-air bush decks overlooking the savanna",
            "Professional spa treatments using indigenous African botanicals and volcanic minerals",
            "Guided mindfulness nature walks and forest bathing led by certified naturalists",
            "Big Five game drives in private conservancies with expert guides",
            "Farm-to-table cuisine designed by nutritionists using fresh Kenyan ingredients",
            "Traditional Maasai and Kikuyu herbal healing consultations",
            "Infinity-pool lodges with uninterrupted views of the African wilderness",
            "Sunset meditation circles and sound healing with traditional instruments",
            "Digital detox programmes for complete disconnection and restoration",
            "Couples spa rituals and romantic bush dining under the stars",
        ],
        whatToExpect: [
            "Private airport transfers and seamless logistics handled by C.A.T.S",
            "Handpicked wellness lodges with certified spa facilities and trained therapists",
            "Daily yoga, meditation, or tai chi sessions — all levels welcome, beginners included",
            "Two to four professional spa treatments included per stay (programme-dependent)",
            "Morning and evening game drives in 4x4 Land Cruisers with expert driver-guides",
            "Nutritionist-designed meals with options for vegan, vegetarian, and gluten-free diets",
            "Guided nature walks, forest bathing, and birdwatching excursions",
            "Optional wellness add-ons: Maasai herbal sessions, sound healing, journaling workshops",
            "24/7 support from the C.A.T.S travel team throughout your stay",
        ],
        whatToPack: [
            "Comfortable yoga or workout clothes and a personal mat (optional — mats provided)",
            "A journal and pen for reflection, gratitude, and mindfulness notes",
            "High-SPF sunscreen, a wide-brimmed sun hat, and quality sunglasses",
            "Light layers for cool highland mornings and breezy savanna evenings",
            "A reusable water bottle — staying hydrated is part of the wellness journey",
            "Neutral-coloured clothing for game drives (khaki, olive, beige)",
            "Swimwear for infinity pools and natural hot springs",
            "Binoculars for birdwatching and wildlife spotting on nature walks",
            "Insect repellent and any personal medications or supplements",
            "An open mind and a willingness to slow down",
        ],
        duration: "4–10 Days",
        bestTimeToVisit: "Kenya's wellness retreats are a year-round destination. June to October offers dry-season game viewing at its peak, with clear skies perfect for outdoor yoga and nature walks. January to March brings warm weather ideal for poolside relaxation. The green season (April–May and November) offers lush landscapes, fewer visitors, and lower rates — perfect for a peaceful digital detox.",
        idealFor: [
            "Couples seeking a romantic wellness escape",
            "Solo travellers on a digital detox or personal reset",
            "Families wanting a healthy, adventure-filled holiday",
            "Small groups and corporate wellness retreats",
            "Yoga practitioners and meditation enthusiasts",
            "Anyone recovering from burnout, stress, or major life transitions",
        ],
        locations: [
            "Masai Mara Conservancies",
            "Great Rift Valley & Lake Naivasha",
            "Amboseli — Mount Kilimanjaro Backdrop",
            "Laikipia Plateau & Mount Kenya Foothills",
            "Diani Beach & Kenya Coast",
            "Aberdare Highlands & Solio Ranch",
        ],
        imageUrl: 'https://images.pexels.com/photos/7974835/pexels-photo-7974835.jpeg?auto=compress&w=1200&h=800&fit=crop',
        gallery: [
            {
                url: 'https://images.pexels.com/photos/14917456/pexels-photo-14917456.jpeg?auto=compress&w=1200',
                alt: 'Luxury wellness retreat pool surrounded by tropical gardens'
            },
            {
                url: 'https://images.pexels.com/photos/35884502/pexels-photo-35884502.jpeg?auto=compress&w=1200',
                alt: 'Serene spa treatment room with natural light'
            },
            {
                url: 'https://images.pexels.com/photos/6724313/pexels-photo-6724313.jpeg?auto=compress&w=1200',
                alt: 'Aromatherapy spa oils and wellness essentials'
            },
            {
                url: 'https://images.pexels.com/photos/35450443/pexels-photo-35450443.jpeg?auto=compress&w=1200',
                alt: 'Safari lodge infinity pool overlooking the savannah'
            },
            {
                url: 'https://images.pexels.com/photos/14024043/pexels-photo-14024043.jpeg?auto=compress&w=1200',
                alt: 'Sunset deck at a luxury East African wellness lodge'
            },
        ],
        seoKeywords: [
            "wellness safari Kenya",
            "wellness safari tours Kenya Tanzania",
            "spa safari retreat Africa",
            "yoga safari Kenya",
            "wellness travel East Africa",
            "luxury wellness lodge Kenya",
            "mindfulness safari retreat",
            "wellness holiday Kenya",
            "digital detox safari Africa",
            "couples wellness safari Kenya",
            "Masai Mara spa retreat",
            "wellness safari itinerary",
            "bush spa Kenya",
            "meditation safari Africa",
            "holistic safari retreat Kenya Tanzania",
            "safari and spa Kenya",
            "African wellness safari tours",
            "family wellness safari",
            "solo traveller wellness safari",
            "sunrise yoga safari Kenya",
            "Serengeti wellness lodge",
            "wellness safari packages East Africa",
            "corporate wellness retreat Africa",
            "nature healing safari Kenya",
            "wellness safari booking",
        ],
        itineraries: [],
        featuredProperties: [
            {
                name: "The Retreat at Giraffe Manor",
                imageUrl: "/images/wellness/card-giraffe-manor.jpg",
                location: "Nairobi, Kenya",
                description: "With its traditional charm, this iconic hotel is elegant with a unique twist: guests interact with the resident Rothschild giraffes right on the property. Enjoy bespoke spa treatments, guided nature walks through the adjacent AFEW Giraffe Centre, and an atmosphere of old-world romance that sets the tone for your entire wellness journey.",
                link: "https://www.thesafaricollection.com/experiences/wellness-and-wilderness/",
            },
            {
                name: "Chyulu Spa at Finch Hattons Camp",
                imageUrl: "/images/wellness/card-finch-hattons.jpg",
                location: "Tsavo West National Park, Kenya",
                description: "Chyulu Spa provides two open-air massage pavilions, a yoga deck, a spa pool, a hammam, and a gym — all boasting sensational views of the African wilderness. The perfect environment for a tranquil and harmonious Feng Shui wellness retreat, nestled at the foot of the Chyulu Hills with natural volcanic springs nearby.",
                link: "https://www.virginlimitededition.com/finch-hattons/spa/",
            },
            {
                name: "Angama Mara",
                imageUrl: "/images/wellness/card-angama-mara.jpg",
                location: "Masai Mara National Reserve, Kenya",
                description: "Situated high above the Great Rift Valley, Angama Mara offers large tented suites with magnificent views from the fitness centre, the heated infinity pool, or even your four-poster bed. Enjoy guided Maasai beading workshops, bush picnics on the Mara, and a spa menu designed around African botanicals — all suspended above one of the world's greatest wildlife theatres.",
                link: "https://angama.com/experience/just-relax/",
            },
            {
                name: "Kani Spa at Four Seasons Safari Lodge",
                imageUrl: "/images/wellness/card-four-seasons.jpg",
                location: "Serengeti National Park, Tanzania",
                description: "Enjoy a deep reconnection with nature nourishing the self with indigenous botanicals and immersive moments such as the Sunset Kopje Meditation. The rooftop terrace overlooks a watering hole where elephants, buffalo, and zebra gather — making every spa treatment a front-row wildlife spectacle.",
                link: "https://www.fourseasons.com/serengeti/spa/",
            },
            {
                name: "Chem Chem Lodge",
                imageUrl: "/images/wellness/card-chem-chem.jpg",
                location: "Lake Manyara National Park, Tanzania",
                description: "Sunrise yoga? Sure. But how about a sunrise run over the savannah alongside a Maasai warrior? A most inspirational training partner. Or you can just opt for a massage in your luxury tented suite. Chem Chem combines conservation, community, and wellness into one transformative experience at the edge of Tanzania's Great Rift Valley.",
                link: "https://auberge.com/wellness/",
            },
            {
                name: "Hemingways Nairobi",
                imageUrl: "/images/wellness/hemingways-karen.jpg",
                location: "Karen, Nairobi, Kenya",
                description: "A plantation-style boutique hotel in the leafy Karen suburb, Hemingways offers a world-class spa with hydrotherapy, aromatherapy, and personalised wellness programmes. The perfect pre- or post-safari wellness stopover, combining Nairobi's cultural richness with five-star rejuvenation in one of the city's most peaceful settings.",
                link: "https://www.hemingways-collection.com/nairobi/wellness/",
            },
        ],
        faqs: [
            {
                question: "What exactly is a wellness safari?",
                answer: "A wellness safari is a harmonious blend of two transformative worlds: the untamed beauty of Africa's wilderness and the holistic practices of wellness. These unique journeys are designed to nourish both body and soul, offering an immersive experience that allows you to reconnect with nature while rejuvenating your physical and mental well-being. At C.A.T.S, we believe that true wellness goes beyond the spa and the gym — it is about embracing the healing power of the natural world. Our wellness safaris feature guided meditation, yoga, and mindfulness sessions in the heart of the African bush, carefully curated to instil tranquillity and balance, empowering you to unwind and find inner peace while surrounded by the captivating landscapes and wildlife that East Africa is renowned for.",
            },
            {
                question: "Are safaris genuinely good for wellness?",
                answer: "Safaris are an excellent choice for those seeking wellness. The serene landscapes, untouched wilderness, and close encounters with wildlife offer a unique environment for relaxation, rejuvenation, and reconnection. The connection to the environment and the awe-inspiring experiences of witnessing wildlife in their natural habitat create a profound sense of well-being. Our wellness safaris include guided activities such as yoga, meditation, and wellness workshops, allowing you to embrace a balanced lifestyle while surrounded by Africa's breathtaking beauty. These activities, combined with captivating wildlife encounters, create a unique blend of wellness and adventure that goes beyond the ordinary.",
            },
            {
                question: "How do wellness safaris differ from traditional safaris?",
                answer: "While traditional safaris primarily revolve around wildlife viewing and game drives, wellness safaris incorporate mindfulness, meditation, yoga, and wellness workshops into the itinerary. These activities are carefully curated to instil a sense of tranquillity, balance, and relaxation during your safari journey. It is about going beyond the thrill of wildlife encounters to nurture your body and soul, fostering a deeper connection with the environment. The wellness component prioritises rejuvenation in the wilderness — these safaris are designed to provide a sense of retreat and self-discovery in the heart of Africa's pristine landscapes.",
            },
            {
                question: "What kind of wellness activities can I do on safari?",
                answer: "Our wellness safaris offer a rich variety of immersive experiences. From sunrise yoga sessions surrounded by the sights and sounds of the wild to guided meditation that allows you to find inner peace in the heart of the African wilderness. Our wellness experts guide you through yoga and meditation sessions, helping you immerse yourself in the tranquillity of the African bush. Wellness workshops focusing on nutrition, stress management, and holistic well-being are also available. Additional activities include forest bathing, sound healing with traditional African instruments, Maasai herbal consultations, nature walks, mountain biking, kayaking, and spa treatments using indigenous botanicals.",
            },
            {
                question: "How does a wellness safari support mental well-being?",
                answer: "The immersive experience of being surrounded by nature, observing wildlife in their natural habitat, and enjoying the tranquillity of the bushveld all contribute to lowering stress levels. Engaging in mindfulness practices such as meditation and yoga during your safari helps reduce anxiety, improve concentration, and promote mental clarity. The sights and sounds of the African landscape have a soothing effect on the mind, fostering mental relaxation. A wellness safari is also an opportunity for self-discovery and empowerment — as you discover the balance between adventure and well-being, you gain a sense of control over your mental state that extends long after your safari concludes.",
            },
            {
                question: "Are there sunrise and sunset wellness activities?",
                answer: "Absolutely. Greeting the day with a tranquil yoga session amidst the natural beauty of the African wilderness sets a peaceful tone. As the African sun sets on the horizon, guests participate in sunset wellness activities designed to promote relaxation and reflection — the evening's warm golden hues provide a stunning backdrop for sunset meditation. The combination of sunrise and sunset wellness activities ensures you have mindful moments in nature throughout the day, fostering a deeper appreciation for the African landscape and its role in your well-being.",
            },
            {
                question: "Are wellness safaris suitable for solo travellers?",
                answer: "Wellness safaris are not only suitable for solo travellers but highly recommended for those seeking a unique enriching solo adventure. These safaris provide an ideal environment for individuals to focus on well-being and self-discovery. Solo travellers can curate their wellness journey according to personal preferences — yoga, meditation, guided nature walks, or spa treatments. The guided wellness sessions also create a sense of community, allowing solo travellers to connect with like-minded individuals who share an interest in self-care and mindfulness. Solo travellers often find that wellness safaris empower them with a sense of self-reliance and a stronger connection to both the natural world and their inner selves.",
            },
            {
                question: "Can I include wellness activities in a family safari?",
                answer: "C.A.T.S understands the importance of well-being for families and offers the option to include wellness activities in your family safari. Our family wellness safaris cater to both adults and children, ensuring every family member can enjoy the benefits of relaxation and mindfulness amidst the stunning African wilderness. Families can customise their experience by selecting activities suitable for all age groups — parents can engage in yoga or meditation sessions while children enjoy age-appropriate activities that promote well-being. Family wellness safaris strike a balance between adventure and relaxation, creating lasting memories and a sense of tranquillity for everyone.",
            },
            {
                question: "Are there opportunities for outdoor yoga sessions?",
                answer: "C.A.T.S provides exceptional opportunities for outdoor yoga sessions during our wellness safaris. Practising yoga in the heart of the African wilderness is a rejuvenating and spiritually uplifting experience. Our expert wellness guides carefully select serene and picturesque locations — from lush savannas to tranquil lakeshores — providing a unique and inspiring setting for yoga practice. The sights and sounds of the wilderness add an extra layer of serenity. Whether it is a sunrise yoga session to greet the day or a sunset yoga session to unwind, our guided outdoor yoga experiences cater to all levels of experience.",
            },
            {
                question: "Is vegetarian or vegan dining available on wellness safaris?",
                answer: "C.A.T.S and our partner lodges offer a comprehensive range of dining options including vegetarian and vegan choices. Our culinary teams craft delicious and nutritious meals using fresh, locally sourced ingredients. From colourful salads and vegetable-rich stir-fries to hearty soups and grain-based options, our chefs prepare meals that cater to your dietary preferences while enhancing your overall well-being. If you have specific dietary requirements — gluten-free, vegan, or any other preference — our team creates customised culinary experiences tailored to your needs.",
            },
            {
                question: "How do I book a wellness safari with C.A.T.S?",
                answer: "Booking a wellness safari with C.A.T.S is straightforward. Browse our wellness travel itineraries on this page, then click the enquiry button on the programme that resonates with your interests. Our dedicated team will get in touch promptly to initiate the planning process. We take a personalised approach — understanding your preferences, wellness goals, and any special requirements — to tailor the safari to your liking. Every detail is customisable, from the lodges and treatments to the duration and activities. Contact us today to begin your journey toward well-being in the heart of Africa.",
            },
        ],
    },
    {
        slug: "madaraka-express-sgr-train-schedule",
        title: "Madaraka Express SGR Journey",
        description:
            "Glide from the bustling energy of Nairobi to the sun-drenched Indian Ocean coast aboard Kenya's sleek Madaraka Express, a modern rail marvel that doubles as a moving safari. Press your face to the panoramic windows as the train cuts through the heart of Tsavo—where rust-red elephants amble past the tracks and giraffes peer curiously from the treetops. Air-conditioned carriages, onboard dining, and multiple daily departures make this the most scenic and efficient way to transition from a thrilling wildlife safari to a blissful beach holiday on the Kenyan coast.",
        detailedDescription: `Experience the future of Kenyan travel. The Madaraka Express is a modern, high-speed rail link connecting the capital to the Indian Ocean coast. The journey itself is a mini-safari, as the tracks pass through the heart of Tsavo National Parks, offering unique elevated views of elephants, giraffes, and zebras.

Enjoy the comfort of air-conditioned carriages and large panoramic windows. It's the most efficient and scenic way to transition from your safari adventure to a relaxing beach holiday, combining convenience with classic rail romance.

### Daily Schedule (Nairobi ↔ Mombasa)
* **Inter-County Train:** Departs at 08:00, arriving at approximately 14:10.
* **Express Train:** Departs at 15:00, arriving at approximately 20:30.
* **Night Train:** Departs at 22:00, arriving at approximately 03:55.

### Current Fares (One Way)
* **Economy Class:** KES 1,500
* **First Class:** KES 4,500
* **Premium Class:** KES 12,000

*Rates are subject to change. For the latest updates and to book your tickets directly, please visit the [Official Kenya Railways Madaraka Express Website](https://metickets.krc.co.ke/).*`,
        highlights: [
            "Scenic transit through Tsavo National Parks",
            "Comfortable air-conditioned rail travel",
            "Direct connection from Nairobi to Mombasa",
            "Elevated wildlife viewing opportunities"
        ],
        whatToExpect: [
            "Standard and first-class carriage options",
            "Onboard refreshments and dining service",
            "Professional and courteous train staff",
            "Seamless transfers to coast resorts"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1587622961626-ecedbb2cb784?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1587622961626-ecedbb2cb784?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 1"
            },
            {
                url: 'https://images.unsplash.com/photo-1731355775971-dae16479f7af?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 2"
            },
            {
                url: 'https://images.unsplash.com/photo-1775681454750-199bc69a5f18?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 3"
            },
            {
                url: 'https://images.unsplash.com/photo-1657806094616-96bdde021fa5?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 4"
            },
            {
                url: 'https://images.unsplash.com/photo-1631559910372-448c7c3cb262?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 5"
            },
            {
                url: 'https://images.unsplash.com/photo-1759767119537-3ea0e5ff75de?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 6"
            },
            {
                url: 'https://images.unsplash.com/photo-1621139262442-47e6c19867ad?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 7"
            },
            {
                url: 'https://images.unsplash.com/photo-1775135505494-4c95022d19e2?w=800&auto=format&fit=crop&q=80',
                alt: "Madaraka Express SGR Experience 8"
            }
        ]
    },
    {
        slug: "bird-watching-safaris-in-kenya-and-tanzania",
        title: "Bird Watching Safari Tours in Kenya & Tanzania",
        description:
            "Everything about Africa is unique, unexpected, and in numbers and variety that never fail to surprise. This is especially true of the universe of birds to be found on safari in Kenya and Tanzania. Up in the sky, in the trees, on the lakeshores, and assembled before you on the fields, Africa's dazzling gift of birdlife can be astonishing for first-time visitors. Imagine in a single day spotting a hundred species — from great white pelicans and storks to vibrant pink flamingoes, from vultures and raptor eagles to graceful ibis and herons. While all about, colourful warbling songbirds like starlings, doves, blue turacos, and guineafowl fill the air with their coos, calls, and light melodies.",
        detailedDescription: `Africa and especially Kenya and Tanzania are a birdwatcher's paradise. With its varied landscapes of savannahs, grasslands, forests, and wetlands — each habitat supports a colourful range of bird types like bee-eaters, sunbirds, parrots, cranes, and fish eagles. Both countries boast over 1,000 species so the birding on your African safari will be rich, active, and lots of fun.

Kenya is populated with 11% of the world's bird species — close to 1,100 different types of avian life. On some bird-watching journeys, safari-goers have recorded over 500 different species. Besides its geographical diversity, Kenya's many climates also foster a delightful variety of bird types. Adding to that thriving habitat are the many migrant species that arrive between February through October like swallows and waders at the lakes and shorelines.

Tanzania enjoys over 1,100 species of birds, and many types that are native to East Africa. These include migratory waterfowl, birds of prey, and unique, unusual species. Of course, Tanzania is a wildlife wonderland with its thousands of big cats and millions of grazers rounding out your bird-watching experience.

At C.A.T.S, our specialist birding guides are passionate ornithologists who will lead you to the best spots, help you identify species by call and plumage, and ensure your birding adventure is both rewarding and unforgettable.`,
        highlights: [
            "Over 1,100 bird species across Kenya & Tanzania",
            "Expert ornithologist guides with local knowledge",
            "Great Rift Valley lakes — flamingos by the million",
            "Highland forests — rare endemics and tropical canopy species",
            "Migratory species from Europe and Asia (Feb–Oct)",
            "Exceptional photographic opportunities",
            "Diverse habitats: savannah, forest, wetland, coast",
            "Family-friendly — perfect for budding young naturalists"
        ],
        whatToExpect: [
            "Early morning birding walks and game drives in specialised vehicles",
            "Expert-guided identification sessions with spotting scopes",
            "Visits to key Important Bird Areas (IBAs) across both countries",
            "Detailed checklists and species logs for your personal records",
            "Lake and wetland excursions for flamingos, pelicans, and waterfowl",
            "Forest walks for canopy species, turacos, and sunbirds",
            "Comfortable safari vehicles with pop-up roofs for unobstructed viewing"
        ],
        whatToPack: [
            "Binoculars — we can supply them but having your own means instant access",
            "Camera with telephoto or zoom lens for bird photography",
            "Bird identification field guide for East Africa",
            "Voice recorder for identifying calls and preserving sounds",
            "Neutral-coloured, breathable clothing that hides safari dust",
            "Insect repellent — essential for forest and lakeside birding",
            "Sun hat and quality sunglasses",
            "Snacks and plenty of water for long bush sessions"
        ],
        imageUrl: "https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg",
        gallery: [
            {
                url: "https://ik.imagekit.io/axd1riwnv/african-fish-eagle-icthyophaga-vocifer-masai-mara-kenya_53282397251_o.jpg",
                alt: "African fish eagle hunting over the Masai Mara"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/flamingos-lake-nakuru-national-park-kenya_50501081321_o.jpg",
                alt: "Flamingos at Lake Nakuru National Park"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/secretary-bird-sagittarius-serpentarius-masai-mara-kenya_53283225656_o.jpg",
                alt: "Secretary bird in the Masai Mara savannah"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/martial-eagle-masai-mara-national-reserve-kenya_28355649994_o.jpg",
                alt: "Martial eagle surveying the Masai Mara"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/Sokoke-Scops-Owl-Kenya-Birding-Tour-700x466.jpg",
                alt: "Sokoke Scops Owl — rare species in Arabuko Sokoke Forest"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/bateleur-eagle-tsavo-national-park-kenya_28355639514_o.jpg",
                alt: "Bateleur eagle soaring over Tsavo National Park"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/lesser-flamingos-phoeniconaias-minor-lake-naivasha-kenya_28869967822_o.jpg",
                alt: "Lesser flamingos at Lake Naivasha"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/Birds-of-lake-Nakuru-2.jpg",
                alt: "Diverse birdlife at Lake Nakuru"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/wahlbergs-eagle-hieraaetus-wahlbergi-masai-mara-kenya_53283693265_o.jpg",
                alt: "Wahlberg's eagle perched in the Masai Mara"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/hooded-vulture-necrosyrtes-monachus-masai-mara-national-reserve-kenya_28898561841_o.jpg",
                alt: "Hooded vulture in the Masai Mara National Reserve"
            }
        ],
        safariType: "birdwatching",
        bestTimeToVisit: "Bird watching is excellent year-round in Kenya and Tanzania. The dry season from June to October offers the best viewing as birds gather near water sources. The wet seasons (March–May and November–December) are fantastic for spotting migratory species in breeding plumage with vibrant courtship displays. European and Asian migrants arrive between February and October.",
        idealFor: ["Bird enthusiasts & ornithologists", "Nature photographers", "Families with curious young naturalists", "First-time safari-goers", "Couples seeking unique experiences", "Solo travellers"],
        locations: ["Masai Mara", "Lake Nakuru", "Lake Naivasha", "Amboseli", "Lake Baringo", "Kakamega Forest", "Arabuko Sokoke", "Aberdare", "Tsavo East", "Serengeti", "Ngorongoro Crater", "Lake Manyara", "Tarangire"],
        expertTips: [
            "The best birding light is at dawn and dusk — early starts are rewarded with stunning sightings and photography",
            "Lake Bogoria hosts up to two million flamingos — one of Africa's most breathtaking spectacles",
            "Kakamega Forest is Kenya's last tropical rainforest and home to over 300 species including rare parrots and turacos",
            "Combine birding with a Big Five safari — the Masai Mara alone has over 500 bird species alongside lions and elephants",
            "Bring a voice recorder — many species are easier to identify by call than by sight in dense forest"
        ],
        itineraries: [],
        faqs: [
            {
                question: "Which birds can be seen on safari in Kenya and Tanzania?",
                answer: "Kenya and Tanzania together host over 1,100 bird species. Highlights include the lilac-breasted roller, African fish eagle, secretary bird, superb starling, and grey crowned crane. The Rift Valley lakes offer millions of flamingos, while highland forests are home to rare endemics like the Aberdare cisticola and Narina trogon. Both countries offer an incredible variety across habitats — savannah, forest, wetland, and coast."
            },
            {
                question: "What are the best parks for bird watching in Kenya?",
                answer: "Top birding destinations in Kenya include the Masai Mara (500+ species), Lake Nakuru (450+ species including flamingos), Lake Baringo (500+ species), Amboseli (420+ species with Kilimanjaro backdrop), Kakamega Forest (300+ species — Kenya's last tropical rainforest), the Aberdares (300 species including endemics), and Arabuko Sokoke on the coast."
            },
            {
                question: "What are the best parks for bird watching in Tanzania?",
                answer: "Tanzania's premier birding parks include the Serengeti (500+ species, home to Fischer's lovebird), Ngorongoro Crater (500+ species in a volcanic bowl), Lake Manyara (400 species — up to 100 in a single day), and Tarangire (rich baobab-dotted habitat with starlings, parrots, and the unique bare-faced go-away bird). Lake Victoria is Africa's largest lake with over 300 species."
            },
            {
                question: "When is the best time for a bird watching safari?",
                answer: "Bird watching is rewarding year-round. The wet seasons (March–May and November–December) bring migratory species in breeding plumage with vibrant courtship displays. The dry seasons (June–October and January–February) concentrate birds around water sources making them easier to spot with less foliage. European and Asian migrants visit between February and October."
            },
            {
                question: "What equipment should I bring for bird watching?",
                answer: "We provide quality binoculars and spotting scopes, but bringing your own pair means instant access. A camera with telephoto lens is ideal for bird photography. Also recommended: a bird identification field guide for East Africa, a voice recorder for identifying calls, neutral-coloured clothing, insect repellent (essential for lakeside and forest birding), sun hat, and plenty of water and snacks."
            },
            {
                question: "What vehicles are used for birding safaris?",
                answer: "Our birding safaris use customised 4x4 safari vehicles with pop-up roofs — perfect for standing up and having unobstructed views of birds in flight or perched in treetops. The spacious interiors accommodate your birding equipment, and our vehicles can access remote birding locations off the beaten track."
            },
            {
                question: "Can I combine bird watching with a regular wildlife safari?",
                answer: "Absolutely — and we recommend it. The Masai Mara alone offers 500+ bird species alongside the Big Five. Most of our safaris naturally include birding, but our dedicated birding tours are paced differently — slower, more patient, with expert ornithologist guides focused on identification, behaviour, and photography."
            },
            {
                question: "Are birding safaris suitable for families with children?",
                answer: "Yes! Bird watching is a wonderful activity for families. Children are often fascinated by the colours and diversity of African birds. Our guides are skilled at engaging young naturalists and making birding fun and educational. We tailor family birding safaris with age-appropriate activities and pacing."
            },
            {
                question: "What rare birds might I see in East Africa?",
                answer: "East Africa hosts several rare gems including the Shoebill stork (found in papyrus swamps), the African skimmer, Ruwenzori turaco, East African green broadbill, Taita apalis, Taita thrush, and Taita white-eye (all endemic to the Taita Hills). Our expert guides know exactly where and when to find these elusive species."
            }
        ],
        nationalParks: [
            {
                name: "Masai Mara National Reserve",
                slug: "masai-mara-national-reserve",
                country: "Kenya" as const,
                description: "The Mara's rolling grasslands and riverine forests support over 500 bird species. Raptors dominate the open plains — secretary birds stalk through the grass while bateleur eagles soar overhead. The Mara River draws kingfishers, herons, and the iconic African fish eagle, which can be heard calling across the water at dawn. During the Great Migration (July–October), vultures and eagles gather in extraordinary numbers around river crossings, creating some of Africa's most dramatic birding spectacles.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/secretary-bird-sagittarius-serpentarius-masai-mara-kenya_53283225656_o.jpg",
                birdSpeciesCount: "500+",
                bestTime: "Year-round; Jul–Oct for migration raptors; Nov–Apr for migratory species",
                habitat: "Open savanna grassland, riverine forest, acacia woodland",
                elevation: "1,500–1,650m",
                birdingTip: "Early morning drives along the Mara River yield the best fish eagle and kingfisher sightings. Ask your guide for the secretary bird nesting areas.",
                keySpecies: ["Secretary Bird", "African Fish Eagle", "Lilac-breasted Roller", "Bateleur Eagle", "Martial Eagle", "Grey Crowned Crane", "Kori Bustard"]
            },
            {
                name: "Lake Nakuru National Park",
                slug: "lake-nakuru-national-park",
                country: "Kenya" as const,
                description: "Famous worldwide for its breathtaking flamingo spectacle, Lake Nakuru hosts over 450 bird species across its alkaline waters, acacia woodland, and rocky escarpments. The lake's shores turn pink with millions of lesser and greater flamingos — one of Africa's most iconic sights. Beyond the flamingos, the surrounding euphorbia forest shelters Verreaux's eagle-owl and the endangered Rothschild's giraffe shares the park with pelican colonies and cormorant roosts.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/flamingos-lake-nakuru-national-park-kenya_50501081321_o.jpg",
                birdSpeciesCount: "450+",
                bestTime: "Jun–Mar for flamingo concentrations; Nov–Apr for Palearctic migrants",
                habitat: "Alkaline lake, acacia woodland, euphorbia forest, rocky cliffs",
                elevation: "1,758m",
                birdingTip: "Take the Baboon Cliff viewpoint for a panoramic view of the flamingo-covered lake. Morning light produces the best photography.",
                keySpecies: ["Greater Flamingo", "Lesser Flamingo", "African Fish Eagle", "Great White Pelican", "Goliath Heron", "Verreaux's Eagle-Owl"]
            },
            {
                name: "Lake Naivasha",
                slug: "lake-naivasha",
                country: "Kenya" as const,
                description: "This freshwater Rift Valley lake is a birding gem with over 400 species. Boat safaris glide beneath fever trees where African fish eagles perch, their iconic call echoing across the water. Crescent Island offers the rare chance to walk on foot among hippos, giraffes, and dozens of bird species with no fences. The papyrus-fringed shores shelter African jacanas, malachite kingfishers, black crakes, and rare grebes. At dusk, the lake transforms as thousands of cormorants return to roost.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/lesser-flamingos-phoeniconaias-minor-lake-naivasha-kenya_28869967822_o.jpg",
                birdSpeciesCount: "400+",
                bestTime: "Year-round; best Oct–Apr when European migrants boost numbers",
                habitat: "Freshwater lake, papyrus beds, fever tree forest, open grassland",
                elevation: "1,884m",
                birdingTip: "Book a morning boat safari — the flat calm water and low sun make for perfect photography. Request a stop at Crescent Island for walking birding.",
                keySpecies: ["African Fish Eagle", "African Jacana", "Malachite Kingfisher", "Black Crake", "Pied Kingfisher", "Long-tailed Cormorant"]
            },
            {
                name: "Amboseli National Park",
                slug: "amboseli-national-park",
                country: "Kenya" as const,
                description: "Birding beneath the snow-capped peak of Mount Kilimanjaro makes Amboseli unforgettable. Underground springs from Kilimanjaro feed permanent marshlands that attract over 420 species year-round — grey crowned cranes dance in pairs across green marshes, pelicans and Egyptian geese crowd the shallow pools, and African hawk-eagles patrol the acacia fringes. The open terrain and flat landscape make spotting effortless, making Amboseli ideal for families and first-time birders. The park is also home to the near-endemic Taveta golden weaver.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Header_Kenya_Amboseli.jpg",
                birdSpeciesCount: "420+",
                bestTime: "Oct–Jan dry season for concentrated waterbird gatherings; Nov–Apr for migrants",
                habitat: "Permanent marshland, dry savanna, acacia woodland, open plains",
                elevation: "1,180m",
                birdingTip: "The Observation Hill gives a 360° panorama — scan the marshes below with binoculars for cranes, storks, and waders. Best at sunrise with Kilimanjaro as backdrop.",
                keySpecies: ["Grey Crowned Crane", "African Hawk-Eagle", "Egyptian Goose", "Taveta Golden Weaver", "Blacksmith Lapwing", "Sacred Ibis"]
            },
            {
                name: "Aberdare National Park",
                slug: "aberdare-national-park",
                country: "Kenya" as const,
                description: "The mist-draped highland forests of the Aberdares rise to over 4,000 metres, creating a series of distinct vegetation zones — bamboo thickets, montane rainforest, and alpine moorland — each with its own specialist birds. Nearly 300 species include the endemic Aberdare cisticola, the spectacular crowned eagle hunting monkeys through the canopy, and the golden-winged sunbird feeding on giant lobelias at the tree line. Mountain streams tumble over waterfalls where mountain wagtails bob on mossy rocks and African black ducks shelter in shaded pools.",
                birdSpeciesCount: "300",
                bestTime: "Sep–Mar dry season for best forest access; Jun–Aug can be misty",
                habitat: "Montane rainforest, bamboo zone, alpine moorland, highland streams",
                elevation: "2,100–4,001m",
                birdingTip: "Stay at The Ark or Treetops lodge — their floodlit waterholes attract rare nocturnal birds. Carry warm layers; temperatures drop sharply above 3,000m.",
                keySpecies: ["Aberdare Cisticola", "Crowned Eagle", "Golden-winged Sunbird", "African Goshawk", "Mountain Buzzard", "Hartlaub\'s Turaco"]
            },
            {
                name: "Tsavo National Park",
                slug: "tsavo-national-park",
                country: "Kenya" as const,
                description: "Kenya's largest protected area — split into Tsavo East and Tsavo West — covers over 20,000 square kilometres of raw, untamed wilderness. The contrasts are extraordinary: Tsavo East's flat, red-earth plains host martial eagles, ground hornbills, and golden-breasted starlings, while Tsavo West's volcanic Chyulu Hills, Mzima Springs (crystal-clear underwater hippo viewing), and lava flows support a completely different bird community. The Galana and Athi rivers thread through both parks, their gallery forests alive with Narina trogons, trumpeter hornbills, and African broadbills.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/bateleur-eagle-tsavo-national-park-kenya_28355639514_o.jpg",
                birdSpeciesCount: "500+",
                bestTime: "Jun–Oct dry season concentrates birds at water sources; Nov–May for breeding plumage",
                habitat: "Semi-arid bushland, volcanic hills, riverine gallery forest, springs",
                elevation: "230–1,800m",
                birdingTip: "Tsavo West's Lake Jipe on the Tanzania border is a hidden birding hotspot — African pygmy goose, lesser jacana, and papyrus-dwelling species thrive here.",
                keySpecies: ["Bateleur Eagle", "Martial Eagle", "Golden-breasted Starling", "Somali Bee-eater", "Narina Trogon", "Southern Ground Hornbill"]
            },
            {
                name: "Samburu National Reserve",
                slug: "samburu-national-reserve",
                country: "Kenya" as const,
                description: "Northern Kenya's premier birding frontier. Samburu's stark beauty — golden scrubland cut by the lifeline of the Ewaso Ng'iro River — supports over 450 species, many found nowhere else in Kenya. The dry-country specials here include the vulturine guineafowl (Africa's most striking gamebird), the Somali ostrich with its blue legs, and the golden-breasted starling. Palm-fringed riverbanks host palm-nut vultures, white-bellied go-away birds, and the tiny pygmy falcon — Africa's smallest raptor — nesting in weaver colonies.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/tawny-eagle-immature-samburu-national-reserve-kenya_28358401483_o.jpg",
                birdSpeciesCount: "450+",
                bestTime: "Jun–Oct dry season for concentrated river birdlife; Jan–Mar for breeding plumage",
                habitat: "Arid scrubland, riverine palm forest, doum palm groves",
                elevation: "800–1,200m",
                birdingTip: "Drive slowly along the Ewaso Ng'iro River at dawn — the palm-nut vulture and pygmy falcon are most active in the first hour of light.",
                keySpecies: ["Vulturine Guineafowl", "Somali Ostrich", "Golden-breasted Starling", "Pygmy Falcon", "Palm-nut Vulture", "White-bellied Go-away Bird"]
            },
            {
                name: "Arabuko-Sokoke Forest",
                slug: "arabuko-sokoke-forest",
                country: "Kenya" as const,
                description: "The largest remaining fragment of East African coastal forest — 420 square kilometres of ancient woodland bordering the Indian Ocean near Malindi. This UNESCO Biosphere Reserve shelters six globally threatened bird species and is the single most important site in Kenya for forest bird conservation. The rare Sokoke scops owl — one of Africa's most elusive nocturnal birds — was only described by science in 1965 and is found almost exclusively here. Clarke's weaver, another near-endemic, breeds only in the Brachystegia woodland of Arabuko-Sokoke, making this forest an absolute pilgrimage for serious birders.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Sokoke-Scops-Owl-Kenya-Birding-Tour-700x466.jpg",
                birdSpeciesCount: "270+",
                bestTime: "Oct–Mar for Palearctic migrants; Jun–Aug for Sokoke scops owl breeding calls",
                habitat: "Coastal lowland forest, Brachystegia woodland, mixed forest, dense thicket",
                elevation: "0–200m",
                birdingTip: "Night drives with your guide are essential — the Sokoke scops owl calls most actively from dusk to 9pm during the breeding season (Jun–Aug). Listen for its distinctive purring call.",
                keySpecies: ["Sokoke Scops Owl", "Clarke's Weaver", "Amani Sunbird", "Sokoke Pipit", "East Coast Akalat", "Fischer's Turaco"]
            },
            {
                name: "Kakamega Forest",
                slug: "kakamega-forest",
                country: "Kenya" as const,
                description: "Kenya's last remnant of the great Guineo-Congolian rainforest that once blanketed equatorial Africa — a living fragment of the Congo basin dropped into western Kenya. This 240-square-kilometre tropical paradise is a haven for over 330 bird species including dozens of West and Central African forest birds found nowhere else in East Africa. The great blue turaco glides through the canopy with slow, stately wingbeats, its crimson flight feathers flashing against impossibly green foliage. Black-and-white casqued hornbills crash through the mid-storey, and the elusive blue-headed bee-eater perches quietly along forest streams.",
                birdSpeciesCount: "330+",
                bestTime: "Jun–Oct dry season for clearest forest trails; year-round resident species",
                habitat: "Tropical rainforest, secondary forest, forest edge, riverine gallery",
                elevation: "1,520–1,680m",
                birdingTip: "Start at Isiukhu Falls and work the forest trails slowly at dawn — mixed-species flocks move through the mid-canopy and can contain 20+ species in a single wave.",
                keySpecies: ["Great Blue Turaco", "Blue-headed Bee-eater", "Black-and-white Casqued Hornbill", "Turner's Eremomela", "Chapin's Flycatcher", "Grey Parrot"]
            },
            {
                name: "Lake Baringo",
                slug: "lake-baringo",
                country: "Kenya" as const,
                description: "A freshwater gem in the semi-arid northern Rift Valley, Lake Baringo is one of Kenya's premier birding hotspots with over 470 species recorded — more per square kilometre than almost any other site in Africa. The lake's papyrus-fringed islands, rocky cliffs, and acacia scrubland create a mosaic of habitats in a compact area. Hemprich's hornbills — large, striking birds with ivory casques — nest in the surrounding cliffs and are easily seen nowhere else in Kenya. Verreaux's eagles soar above the lake's dramatic escarpment while Goliath herons stalk the shallows alongside hippos.",
                birdSpeciesCount: "470+",
                bestTime: "Year-round; Sep–Apr best for Palearctic and intra-African migrants",
                habitat: "Freshwater lake, papyrus swamp, semi-arid acacia scrub, rocky cliffs, fig woodland",
                elevation: "970m",
                birdingTip: "Book a morning boat trip to Gibraltar Island — the Goliath heron colony and nesting cormorants are spectacular. The cliff-face Verreaux's eagle nest is visible from the water.",
                keySpecies: ["Hemprich's Hornbill", "Verreaux's Eagle", "Goliath Heron", "Bristle-crowned Starling", "Northern Brownbul", "Jackson's Hornbill"]
            },
            {
                name: "Lake Bogoria National Reserve",
                slug: "lake-bogoria",
                country: "Kenya" as const,
                description: "An otherworldly landscape of boiling geysers, steaming fumaroles, and vivid pink horizons — Lake Bogoria holds up to two million lesser flamingos at peak times, creating arguably the most visually stunning birding spectacle on the planet. This alkaline Rift Valley lake became the flamingos' preferred gathering site after ecological changes at Lake Nakuru. The surrounding thornbush hosts dry-country specialists while the hot springs attract unique invertebrates that in turn draw waders and shorebirds. Greater kudu — rare elsewhere in Kenya — share the scrubland with klipspringer antelope on the eastern escarpment.",
                birdSpeciesCount: "135+",
                bestTime: "Jan–Mar and Jun–Sep for peak flamingo concentrations",
                habitat: "Alkaline soda lake, geothermal springs, semi-arid thornbush, rocky escarpment",
                elevation: "1,000m",
                birdingTip: "The southern geysers provide a stunning foreground for flamingo photography. Visit in early morning when steam from the hot springs creates dramatic atmosphere.",
                keySpecies: ["Lesser Flamingo", "Greater Flamingo", "African Fish Eagle", "Marabou Stork", "Yellow-billed Stork", "Little Bee-eater"]
            },
            {
                name: "Mida Creek",
                slug: "mida-creek",
                country: "Kenya" as const,
                description: "A tidal inlet on Kenya's north coast near Watamu, Mida Creek is one of East Africa's most important wintering grounds for Palearctic waders — over 60 species of shorebirds gather on its vast mud flats and mangrove-fringed channels. At low tide, the creek becomes a theatre of feeding frenzy: thousands of crab plovers, curlew sandpipers, whimbrels, and terek sandpipers pick through the exposed mudflats while roseate terns dive into the shallows. The site is a Ramsar Wetland of International Importance and provides a rare chance to see crab plovers — extraordinary birds that nest in underground burrows on offshore islands.",
                birdSpeciesCount: "100+",
                bestTime: "Sep–Apr for Palearctic waders; low tide for best mudflat access",
                habitat: "Tidal mudflats, mangrove forest, seagrass beds, coastal scrub",
                elevation: "0m (sea level)",
                birdingTip: "Time your visit for low tide when the mudflats are exposed — a local guide with a boat can take you to the best crab plover roosts on the creek islands.",
                keySpecies: ["Crab Plover", "Curlew Sandpiper", "Whimbrel", "Roseate Tern", "Terek Sandpiper", "Dimorphic Egret"]
            },
            {
                name: "Mount Kenya National Park",
                slug: "mount-kenya",
                country: "Kenya" as const,
                description: "Africa's second-highest mountain rises to 5,199 metres through a series of spectacular vegetation zones — each with its own unique bird community. The montane forest belt (2,000–3,000m) supports Hartlaub's turaco, mountain buzzard, and the spectacular crowned eagle. Higher up, the bamboo zone shelters the secretive African green broadbill, while the alpine moorland above 3,500 metres is home to the scarlet-tufted sunbird feeding on giant groundsels and lobelias — one of Africa's most extraordinary birding sights. Over 130 highland species have been recorded in the UNESCO World Heritage Site.",
                birdSpeciesCount: "130+",
                bestTime: "Jan–Mar and Jul–Oct dry seasons for clearest conditions; year-round in lower forest",
                habitat: "Montane rainforest, bamboo zone, hagenia woodland, alpine moorland, glacial valleys",
                elevation: "1,600–5,199m",
                birdingTip: "Stay at one of the mountain lodges in the forest zone (2,500m) — mixed-species flocks pass through the canopy at dawn and again before dusk. The Sirimon Route offers the best birding access.",
                keySpecies: ["Scarlet-tufted Sunbird", "Hartlaub's Turaco", "Mountain Buzzard", "Alpine Chat", "Jackson's Francolin", "Crowned Eagle"]
            },
            {
                name: "Serengeti National Park",
                slug: "serengeti-national-park",
                country: "Tanzania" as const,
                description: "The legendary Serengeti — meaning 'endless plains' in Maasai — supports over 500 bird species across 14,750 square kilometres. The Great Migration draws staggering numbers of raptors and scavengers: six vulture species circle the herds while martial eagles and lappet-faced vultures dominate the open plains. The granite kopjes scattered across the grasslands shelter verreaux's eagle owls and rock-nesting species, while the western corridor's riverine forests harbour Fischer's lovebird — endemic to this ecosystem and found nowhere else on Earth.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg",
                birdSpeciesCount: "500+",
                bestTime: "Jun–Oct for migration raptors; Nov–May for breeding plumage and migratory waders",
                habitat: "Open savanna plains, granite kopjes, riverine woodland, acacia forest",
                elevation: "920–1,850m",
                birdingTip: "Request a game drive to the western corridor's Grumeti River for species not found on the central plains, including Fischer's lovebird and the red-throated tit.",
                keySpecies: ["Fischer's Lovebird", "Kori Bustard", "Secretary Bird", "Grey-breasted Spurfowl", "Lappet-faced Vulture", "Verreaux's Eagle-Owl"]
            },
            {
                name: "Ngorongoro Crater",
                slug: "ngorongoro-crater",
                country: "Tanzania" as const,
                description: "The world's largest intact volcanic caldera — a UNESCO World Heritage Site — is a 600-metre-deep natural amphitheatre spanning 260 square kilometres. This enclosed paradise contains every major East African habitat within its walls: forest, grassland, swamp, and a soda lake that turns pink with flamingos. Over 500 bird species have been recorded — the forested crater rim supports montane endemics like Schalow's turaco and the rufous-tailed weaver (found only in northern Tanzania), while the crater floor's swamps host crowned cranes and breeding colonies of pelicans.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Ngorongoro-crater3.jpg",
                birdSpeciesCount: "500+",
                bestTime: "Jun–Oct dry season for clearest views; Nov–Apr for migratory species and flamingos",
                habitat: "Volcanic caldera, montane forest rim, soda lake, swamp, grassland",
                elevation: "1,800m (floor) – 2,400m (rim)",
                birdingTip: "Stop at the crater rim viewpoints before descending — the montane forest here holds different species from the floor. The Lerai Forest on the crater floor is excellent for raptors.",
                keySpecies: ["Augur Buzzard", "Lesser Flamingo", "Hildebrandt's Spurfowl", "Schalow's Turaco", "Rufous-tailed Weaver", "Grey Crowned Crane"]
            },
            {
                name: "Lake Manyara National Park",
                slug: "lake-manyara-national-park",
                country: "Tanzania" as const,
                description: "This compact jewel at the base of the Great Rift Valley escarpment punches well above its weight — experienced birders regularly log 100 species in a single day. The groundwater forest canopy along the park entrance is a cathedral of giant fig and mahogany trees, sheltering silvery-cheeked hornbills, crowned hornbills, and the dazzling Narina trogon. Beyond the forest, the alkaline lake draws thousands of flamingos, while the open floodplains attract breeding colonies of yellow-billed storks and pelicans. The tree-climbing lions Manyara is famous for often perch in the same acacia trees favoured by nesting eagles.",
                // No matching image in library
                birdSpeciesCount: "400+",
                bestTime: "Nov–Jun for waterbirds and flamingos; dry season Jun–Oct for forest species",
                habitat: "Groundwater forest, alkaline lake, Rift Valley escarpment, acacia woodland",
                elevation: "960m",
                birdingTip: "The park entrance groundwater forest is one of East Africa's best birding walks — go slowly and listen. Pair Manyara with Tarangire for maximum species diversity in two days.",
                keySpecies: ["Crowned Hornbill", "Silvery-cheeked Hornbill", "Lesser Flamingo", "Palm-nut Vulture", "Narina Trogon", "Yellow-billed Stork"]
            },
            {
                name: "Tarangire National Park",
                slug: "tarangire-national-park",
                country: "Tanzania" as const,
                description: "Ancient baobab trees — some over 1,000 years old — and the life-giving Tarangire River create one of Tanzania's most spectacular birding landscapes. Over 550 species make it one of the highest bird-density parks in East Africa. The endemic ashy starling is found only in the Tanzania-Kenya border zone, while the comical bare-faced go-away bird bounces through acacia canopies. During the dry season (June–October), vast concentrations of elephants and birds gather along the shrinking river, creating extraordinary density of sightings. The swamp areas in the south of the park are home to breeding populations of yellow-collared lovebirds.",
                // No matching image in library
                birdSpeciesCount: "550+",
                bestTime: "Jun–Oct dry season for highest bird density; Jan–Mar for breeding displays",
                habitat: "Baobab woodland, riverine forest, seasonal swamp, acacia-commiphora bushland",
                elevation: "900–1,100m",
                birdingTip: "The southern swamps accessible by 4x4 are far less visited but hold the best waterbird and lovebird colonies. Ask your guide for the 'Silale Swamp' route.",
                keySpecies: ["Ashy Starling", "Bare-faced Go-away Bird", "Tawny Eagle", "Yellow-collared Lovebird", "Red-and-yellow Barbet", "Von der Decken's Hornbill"]
            },
            {
                name: "Arusha National Park",
                slug: "arusha-national-park",
                country: "Tanzania" as const,
                description: "Often the first stop on a northern Tanzania safari circuit, Arusha National Park is frequently underestimated. Its remarkable habitat diversity — from the Momella Lakes' alkaline shallows to the montane forests of Mount Meru (Tanzania's second-highest peak at 4,566m) and the Ngurdoto Crater's mini-Ngorongoro — packs over 400 species into a compact area. The Momella Lakes attract flocks of both lesser and greater flamingos, while the dense montane forest harbours bar-tailed trogons, Hartlaub's turacos, and the spectacular Narina trogon. The crater rim offers a walking safari with some of Tanzania's most accessible forest birding.",
                // No matching image in library
                birdSpeciesCount: "400+",
                bestTime: "Year-round; Nov–Apr for European migrants and breeding activity",
                habitat: "Alkaline crater lakes, montane forest, volcanic crater, highland grassland",
                elevation: "1,500–4,566m",
                birdingTip: "Request the Ngurdoto Crater rim walk — it is one of Tanzania's few walking safari options and the forest birding rivals any coastal forest. Arrive early to catch the morning flamingo display at Momella Lakes.",
                keySpecies: ["Narina Trogon", "Bar-tailed Trogon", "Hartlaub's Turaco", "Augur Buzzard", "Greater Flamingo", "Silvery-cheeked Hornbill"]
            },
            {
                name: "Nyerere National Park (Selous)",
                slug: "selous-game-reserve",
                country: "Tanzania" as const,
                description: "Formerly the Selous Game Reserve, Nyerere is Africa's largest protected area — larger than Switzerland. Its remote, uncrowded wilderness along the mighty Rufiji River and its vast wetland network supports over 440 species in pristine conditions. This is one of the only places in East Africa to reliably see the rare Pel's fishing owl (Africa's largest owl), which hunts fish by moonlight from overhanging riverbank trees. The African skimmer's elegant low-flight fishing along sandbanks, the jewel-coloured Bohm's bee-eater, and massive breeding colonies of carmine bee-eaters along river cliffs make Nyerere a must-visit for serious birders. Boat safaris offer unique waterbird encounters unavailable anywhere else.",
                // No matching image in library
                birdSpeciesCount: "440+",
                bestTime: "Jun–Nov dry season for boat safaris and concentrated river birdlife; breeding Aug–Nov",
                habitat: "Lowland river systems, miombo woodland, freshwater lakes, palm-fringed channels",
                elevation: "100–400m",
                birdingTip: "Book a boat safari on the Rufiji River at dusk — Pel's fishing owl emerges at twilight. The carmine bee-eater colonies on the river cliffs (Sep–Nov) are among Africa's great spectacles.",
                keySpecies: ["Pel's Fishing Owl", "African Skimmer", "Bohm's Bee-eater", "White-fronted Bee-eater", "Carmine Bee-eater", "Mangrove Kingfisher"]
            }
        ],
        seoKeywords: [
            "bird watching safari Kenya",
            "birding safari Tanzania",
            "bird watching tours East Africa",
            "Kenya birding holidays",
            "flamingo safari Lake Nakuru",
            "African bird species",
            "ornithology safari",
            "bird photography safari",
            "Masai Mara birding",
            "Serengeti bird watching",
            "Lake Baringo birds",
            "Kakamega Forest birding",
            "Ngorongoro Crater birds",
            "birding expedition Africa",
            "family bird watching safari",
            "best birding parks Kenya",
            "rare birds East Africa",
            "lilac-breasted roller safari",
            "flamingo safari Kenya",
            "African fish eagle safari"
        ],
        inclusions: [
            "Professional ornithologist guide throughout your safari",
            "Quality binoculars and spotting scopes provided",
            "Comfortable 4x4 safari vehicle with pop-up roof",
            "All national park and conservation area entry fees",
            "Accommodation on full board basis",
            "Detailed species checklists and field guides",
            "Airport transfers and all safari transport",
            "Drinking water throughout the safari"
        ],
        exclusions: [
            "International flights",
            "Kenya/Tanzania visa fees",
            "Travel insurance (required)",
            "Alcoholic beverages",
            "Personal camera equipment and accessories",
            "Optional activities not specified in the itinerary",
            "Gratuities for guides and lodge staff"
        ]
    },
    {
        slug: "group-safari-tours",
        title: "Kenya Group Safari Tours",
        description:
            "Experience the magic of the African bush without the premium price tag on our expertly curated group safari tours. Travel in a customised 4x4 Land Cruiser with a guaranteed window seat, a pop-up roof for panoramic photography, and a multilingual guide whose encyclopaedic knowledge brings every sighting to life. Join a lively community of like-minded adventurers as you chase the Big Five across the Masai Mara, swap stories over campfire dinners, and forge friendships that outlast the journey. With regular departures and all-inclusive pricing, the safari of your dreams is closer—and more affordable—than you think.",
        detailedDescription: `Join a community of travelers on our curated group safaris. We combine the cost-saving benefits of shared travel with the uncompromising quality of a luxury safari. Each group is limited in size to ensure every guest has a guaranteed window seat and personalized attention from the guide.

These tours follow our most popular and high-yield itineraries, ensuring you see the best of East Africa's wildlife highlights in a social and lively atmosphere. It's the perfect way for solo travelers, couples, or small groups to experience the magic of the Mara and beyond.`,
        highlights: [
            "Guaranteed window seats in 4x4 Land Cruisers",
            "Social and cost-effective group departures",
            "Expert multilingual safari guides",
            "Optimized itineraries for maximum wildlife impact"
        ],
        whatToExpect: [
            "Small group sizes for personal experience",
            "Regular departures throughout the year",
            "Comprehensive inclusions and clear pricing",
            "Opportunities to make lifelong friends"
        ],
        imageUrl: "https://images.unsplash.com/photo-1709402606682-400133d92ab2?w=800&h=500&fit=crop",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1709402606682-400133d92ab2?w=800&h=500&fit=crop",
                alt: "Group safari vehicle in the Masai Mara"
            },
            {
                url: 'https://images.unsplash.com/photo-1740927726004-c6d2713ad036?w=800&auto=format&fit=crop&q=80',
                alt: "Group wildlife viewing"
            }
        ],
        safariType: "group",
    },
    {
        slug: "lake-naivasha-boat-safari-crescent-island-walking-tour",
        title: "Lake Naivasha Boat Safari & Crescent Island",
        description:
            "Swap the rumble of a 4x4 for the gentle lap of water as you glide across the glassy surface of Lake Naivasha, a freshwater jewel cradled in the Great Rift Valley. Pods of hippos surface with resonant snorts, African fish eagles swoop to snatch tilapia from the shallows, and yellow-barked acacia trees frame the papyrus-lined shore. Then step ashore at Crescent Island—a predator-free sanctuary where you can walk within arm's reach of giraffes, zebras, and waterbucks. It is one of the most peaceful and intimate wildlife encounters Kenya has to offer.",
        detailedDescription: `Escape the traditional 4x4 safari with a journey by water and foot. Lake Naivasha is a beautiful high-elevation lake fringed by yellow-barked acacia trees. On a private boat safari, you'll glide past families of hippos and see African fish eagles swooping for their catch.

The adventure continues at Crescent Island, a private game sanctuary where you can go on a guided walking safari. With no predators on the island, you can walk within meters of giraffes, zebras, and waterbucks, experiencing the wild from a completely different perspective.`,
        highlights: [
            "Scenic boat ride with hippo spotting",
            "Guided walking safari among wild animals",
            "Over 400 species of birds in a tranquil setting",
            "Unique perspective of the Great Rift Valley"
        ],
        whatToExpect: [
            "Private boat excursion on the lake",
            "Gentle guided walk on flat terrain",
            "Close-up wildlife encounters without a vehicle",
            "Spectacular photographic opportunities"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1679559429194-7fcc01396023?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1679559429194-7fcc01396023?w=800&auto=format&fit=crop&q=80',
                alt: "Boat safari on Lake Naivasha"
            },
            {
                url: 'https://images.unsplash.com/photo-1623725202930-c40768a6a49a?w=800&auto=format&fit=crop&q=80',
                alt: "Guided walking safari experience"
            },
            {
                url: 'https://images.unsplash.com/photo-1720006256355-bc1aba2ae6ca?w=800&auto=format&fit=crop&q=80',
                alt: "Walking safari in the wild"
            },
            {
                url: 'https://images.unsplash.com/photo-1587622961626-ecedbb2cb784?w=800&auto=format&fit=crop&q=80',
                alt: "Group walking safari"
            }
        ]
    },
    {
        slug: "adventure-at-hells-gate-national-park",
        title: "Adventure at Hell's Gate National Park",
        description:
            "Pedal past herds of zebras and giraffes on a bicycle safari through Hell's Gate National Park—one of the few Kenyan reserves where you are free to explore outside a vehicle. Towering basalt cliffs and steam vents rise from the valley floor, creating an otherworldly landscape that inspired Disney's 'The Lion King.' Hike deep into the Njorowa Gorges, where water-sculpted walls narrow to arm-span width, then tackle the exhilarating rock climb at Fischer's Tower for panoramic views of Lake Naivasha shimmering in the distance. Raw, volcanic, and utterly unforgettable—this is adventure safari at its finest.",
        detailedDescription: `Hell's Gate National Park is a dramatic landscape of towering cliffs, water-gouged gorges, and stark rock formations. It's one of the few national parks in Kenya where you are encouraged to explore outside of a vehicle.

Rent a bicycle and cycle past herds of zebra and gazelle, or hike through the deep Njorowa Gorges with a specialized guide. For the adventurous, rock climbing at Fischer's Tower offers unbelievable views. The park's raw, volcanic energy was the inspiration for many scenes in Disney's 'The Lion King'.`,
        highlights: [
            "Bicycle safari across the savannah",
            "Hiking through spectacular deep gorges",
            "Rock climbing at Fischer's Tower",
            "Geothermal landscape exploration"
        ],
        whatToExpect: [
            "Active and physically engaging experience",
            "Guided trek through natural gorges and springs",
            "Opportunity for mountain biking in the wild",
            "Unique volcanic geology and birdlife"
        ],
        imageUrl: 'https://images.unsplash.com/photo-1553684635-11fad2ab0da2?w=800&auto=format&fit=crop&q=80',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1553684635-11fad2ab0da2?w=800&auto=format&fit=crop&q=80',
                alt: "Rugged cliffs of Hell's Gate"
            },
            {
                url: 'https://images.unsplash.com/photo-1679559429194-7fcc01396023?w=800&auto=format&fit=crop&q=80',
                alt: "Nearby Lake Naivasha"
            }
        ]
    },
    {
        slug: "cultural-safaris",
        title: "Cultural Safaris in Kenya & Tanzania",
        description:
            "Journey beyond the game drive and into the living heritage of East Africa. C.A.T.S Cultural Safaris immerse you in centuries-old traditions — from the warrior dances of the Maasai and the rhythmic storytelling of the Samburu to the aromatic spice markets of Zanzibar's Stone Town. Walk through ancient bomas, learn fire-making from elders, barter for hand-beaded jewellery, and share a meal cooked over an open flame under the African sky. These are not tourist performances — they are genuine cultural exchanges arranged through our trusted community partners who ensure every visit benefits the families and villages that welcome you.",
        detailedDescription: `East Africa is home to over 120 distinct ethnic communities, each with its own language, customs, music, and art. A C.A.T.S Cultural Safari takes you deep into this extraordinary tapestry of living traditions.

In Kenya's Maasai Mara, crimson-cloaked Maasai warriors welcome you with the adumu jumping ceremony — a breathtaking display of strength and grace that has marked rites of passage for centuries. In the arid landscapes of Samburu County, you'll sit with elders beneath acacia trees and hear origin stories passed down through generations, while young warriors demonstrate their legendary tracking skills.

On the Swahili Coast, explore the coral-stone alleyways of Lamu — Africa's oldest living town — where Swahili, Arab, Persian, and Indian cultures have blended for over a thousand years. In Zanzibar's Stone Town, a UNESCO World Heritage Site, spice tours awaken your senses with clove, cardamom, vanilla, and cinnamon fresh from the vine.

Every cultural safari is designed to create meaningful, respectful exchanges. Our trusted community partners ensure that tourism directly supports education, healthcare, and cultural preservation in every village we visit. These are connections that stay with you long after the journey ends.`,
        highlights: [
            "Authentic Maasai boma visits with warrior dance ceremonies",
            "Samburu cultural encounters and traditional storytelling",
            "Swahili Coast heritage walks — Lamu and Stone Town",
            "Traditional craft workshops: beadwork, weaving, and pottery",
            "Community-hosted meals with local families",
            "Spice plantation tours in Zanzibar",
            "Visit to a Maasai women's cooperative",
            "Learn traditional fire-making and cattle herding",
            "Explore ancient rock art sites in Laikipia",
            "Participate in traditional music and dance sessions"
        ],
        whatToExpect: [
            "Guided by English-speaking cultural hosts from each community",
            "Respectful and immersive experiences — not tourist performances",
            "Small group sizes for genuine interactions",
            "Opportunities to purchase authentic handmade crafts directly from artisans",
            "Family-friendly activities suitable for children of all ages",
            "Flexible itineraries that combine cultural visits with wildlife safaris"
        ],
        imageUrl: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg",
        gallery: [
            {
                url: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg",
                alt: "Maasai warriors performing traditional jumping ceremony in Kenya"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/5-days-masai-mara-lake-nakuru-lake-naivasha.jpg",
                alt: "Traditional African village with thatched-roof huts"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/elephant.webp",
                alt: "Colourful African beadwork and traditional jewellery"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/lions-masai-mara.jpg",
                alt: "Samburu community cultural gathering"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/image.png",
                alt: "Zanzibar Stone Town spice market and heritage architecture"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg",
                alt: "Traditional African drumming and music performance"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/lesser-flamingos-phoeniconaias-minor-lake-naivasha-kenya_28869967822_o.jpg",
                alt: "Maasai elder sharing stories with visitors"
            },
            {
                url: "https://ik.imagekit.io/axd1riwnv/secretary-bird-sagittarius-serpentarius-masai-mara-kenya_53283225656_o.jpg",
                alt: "Vibrant African cultural festival and traditional dress"
            }
        ],
        itineraries: [],
        expertTips: [
            "Visit during festival seasons — the Lamu Cultural Festival (November) and Mombasa Carnival offer extraordinary immersion",
            "Bring small gifts like school supplies when visiting villages — our guides will advise on appropriate etiquette",
            "Wear modest clothing when visiting Swahili coastal communities out of cultural respect",
            "The Maasai Market in Nairobi rotates locations daily — ask your guide for the current venue",
            "Learn a few Swahili greetings: 'Jambo' (hello), 'Asante sana' (thank you very much), 'Karibu' (welcome)"
        ],
        bestTimeToVisit: "Cultural safaris in Kenya and Tanzania are rewarding year-round. The dry seasons (June–October and January–February) are ideal for combining cultural visits with wildlife game drives. Coastal and Zanzibar cultural tours are best from June to March when weather is warm and dry. Festival seasons add extra vibrancy — plan around the Lamu Festival (November) or Sauti za Busara music festival in Zanzibar (February).",
        inclusions: [
            "All cultural site entrance fees and community contributions",
            "English-speaking cultural guides from local communities",
            "All ground transport in comfortable 4x4 safari vehicles",
            "Accommodation as specified in each itinerary",
            "All meals as specified",
            "Domestic flights where indicated",
            "Drinking water throughout the trip",
            "Village visit donations and artisan cooperative fees"
        ],
        exclusions: [
            "International flights",
            "Kenya/Tanzania visa fees",
            "Travel insurance (required)",
            "Alcoholic beverages",
            "Personal shopping and souvenirs",
            "Optional activities not specified in the itinerary",
            "Gratuities for guides and camp staff"
        ],
        nationalParks: [
            {
                name: "Maasai Mara — Maasai Cultural Heartland",
                slug: "masai-mara-national-reserve",
                country: "Kenya" as const,
                description: "The Maasai Mara is not just Africa's greatest wildlife arena — it is the cultural heartland of the Maasai people, who have lived alongside these herds for centuries. Visit an authentic Maasai boma (village) and witness the adumu — the legendary jumping ceremony that marks a warrior's coming of age. Inside the boma, women in elaborate beadwork welcome you into mud-and-dung homes, share the art of fire-making, and explain how cattle are central to every aspect of Maasai life: currency, ceremony, sustenance, and identity. Many Mara conservancies are now Maasai-owned, meaning your visit directly supports the communities who protect this land.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/mara-masai-dancers-590x390.jpg",
                bestTime: "Year-round; Jul–Oct for migration combined with cultural visits",
                community: "Maasai",
                culturalHighlight: "Adumu warrior jumping ceremony, beadwork workshops with Maasai women's cooperatives, traditional fire-making, and cattle-herding demonstrations. Many conservancy camps are Maasai-owned and operated.",
                keySpecies: ["Adumu Jumping Ceremony", "Beadwork Workshops", "Boma Village Tour", "Fire-Making", "Maasai-Owned Conservancies"]
            },
            {
                name: "Samburu County — Warriors of the North",
                slug: "samburu-national-reserve",
                country: "Kenya" as const,
                description: "Northern Kenya's Samburu people are closely related to the Maasai but have developed their own distinct traditions shaped by the harsh, beautiful semi-arid landscape. Samburu warriors — resplendent in red cloth, ivory ornaments, and ochre face paint — are legendary trackers and pastoralists. A cultural visit to a Samburu manyatta (village) reveals a society where age-set systems still govern daily life: morans (warriors) protect the cattle, elders settle disputes under acacia trees, and women craft the iconic multi-layered beaded necklaces that signify marital status and clan identity. Evening storytelling sessions with elders under the stars are profound and unforgettable.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg",
                bestTime: "Jun–Oct dry season; Jan–Feb for cultural ceremonies",
                community: "Samburu",
                culturalHighlight: "Warrior-guided bush walks with traditional tracking skills, multi-layered beadwork craft demonstrations, elder storytelling under the stars, and age-set initiation ceremony explanations.",
                keySpecies: ["Warrior Bush Walks", "Beadwork Craft Demo", "Elder Storytelling", "Manyatta Village Visit", "Traditional Tracking"]
            },
            {
                name: "Lamu Old Town — Living Swahili Heritage",
                slug: "lamu-old-town",
                country: "Kenya" as const,
                description: "Lamu is the oldest continuously inhabited Swahili settlement in East Africa and a UNESCO World Heritage Site. Founded in the 14th century, its coral-stone buildings, carved wooden doors, and narrow car-free streets have remained virtually unchanged for over 700 years. The town is a living museum of Swahili culture — a fusion of African, Arab, Persian, Indian, and European influences that created one of the world's great maritime civilizations. Dhow boats still sail as they have for millennia, donkeys remain the primary transport, and the call to prayer echoes from 23 mosques. The annual Lamu Cultural Festival (November) features dhow races, donkey races, poetry recitals, and traditional Swahili music.",
                // No matching image in library
                bestTime: "Jun–Mar; November for Lamu Cultural Festival",
                community: "Swahili",
                culturalHighlight: "UNESCO Heritage walking tours, 700-year-old coral-stone architecture, traditional dhow sailing, Swahili cooking classes, henna art, and the annual Lamu Cultural Festival with dhow races and poetry.",
                keySpecies: ["UNESCO Heritage Walk", "Dhow Sailing", "Swahili Cooking Class", "Henna Art", "Lamu Cultural Festival"]
            },
            {
                name: "Amboseli — Maasai at the Foot of Kilimanjaro",
                slug: "amboseli-national-park",
                country: "Kenya" as const,
                description: "Amboseli's Maasai communities have the most dramatic setting of any cultural encounter in East Africa — their bomas sit in the shadow of Mount Kilimanjaro, Africa's highest peak. Here the Maasai have developed unique adaptations to living alongside elephants, lions, and other wildlife. Cultural visits include learning about the Maasai's evolving relationship with conservation: once lion-hunters to prove warrior status, many communities now participate in lion-guardian programmes where former hunters become protectors. Women's cooperatives sell beadwork, and community elders explain how traditional land management practices have preserved the Amboseli ecosystem for generations.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/elephants-kilimanjaro-photo-safari-in-amboseli.jpg",
                bestTime: "Year-round; clear Kilimanjaro views best Jun–Oct",
                community: "Maasai",
                culturalHighlight: "Lion guardian programme stories, Kilimanjaro-backdrop boma visits, women's beadwork cooperatives, and traditional land management knowledge shared by community elders.",
                keySpecies: ["Lion Guardian Programme", "Kilimanjaro Boma Visit", "Women's Cooperative", "Elder Land Knowledge", "Conservation Stories"]
            },
            {
                name: "Laikipia Plateau — Ancient Rock Art & Community Conservancies",
                slug: "laikipia-plateau",
                country: "Kenya" as const,
                description: "The vast Laikipia Plateau in central Kenya is home to some of Africa's most innovative community conservancy models and ancient cultural heritage. Rock art sites dating back thousands of years reveal the earliest pastoralist communities who roamed these highlands. Today, the Pokot, Il Ngwesi, and Maasai communities manage conservancies that have become global models for community-based conservation. Il Ngwesi Lodge — the first community-owned lodge in Kenya — was built and is staffed entirely by local Maasai, with all profits funding schools, healthcare, and wildlife protection. Camel and horseback safaris led by Samburu morans cross landscapes that feel like the edge of the world.",
                // No matching image in library
                bestTime: "Year-round; Jun–Oct driest and clearest",
                community: "Pokot, Il Ngwesi, Maasai",
                culturalHighlight: "Ancient rock art exploration, Il Ngwesi community-owned lodge experience, camel safaris with Samburu morans, Pokot community goat roasts, and traditional star navigation sessions.",
                keySpecies: ["Ancient Rock Art", "Community Lodge Stay", "Camel Safari", "Pokot Goat Roast", "Star Navigation"]
            },
            {
                name: "Mombasa Old Town — Fort Jesus & Swahili Doors",
                slug: "mombasa-old-town",
                country: "Kenya" as const,
                description: "Mombasa's Old Town is a living chronicle of Kenya's coastal history spanning over a thousand years. The Portuguese-built Fort Jesus (1593), now a UNESCO World Heritage Site, tells the story of centuries of conflict between Portuguese, Omani, and British colonial powers over control of the Indian Ocean trade. Beyond the fort, the narrow alleys reveal ornately carved Swahili doors — each one a masterpiece telling the owner's status, trade connections, and religious beliefs through intricate patterns. The Mackinnon Market overflows with turmeric, cardamom, and tropical fruit, while the old harbour still hosts dhow trade to the Persian Gulf. A Swahili cooking class in a local home is the perfect way to taste this fusion of cultures.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/mombasa-kisite-park-private-boat-tour-with-diving-and-lunch-1497437.webp",
                bestTime: "Year-round; Jun–Oct coolest and driest",
                community: "Swahili, Mijikenda",
                culturalHighlight: "Fort Jesus UNESCO guided tour, Swahili carved-door walking tour, Mackinnon Market spice shopping, traditional Swahili cooking class in a local home, and old dhow harbour visit.",
                keySpecies: ["Fort Jesus UNESCO Tour", "Carved Door Walk", "Spice Market", "Swahili Cooking Class", "Dhow Harbour"]
            },
            {
                name: "Lake Turkana — Cradle of Mankind",
                slug: "lake-turkana",
                country: "Kenya" as const,
                description: "The world's largest permanent desert lake — the 'Jade Sea' — sits in Kenya's remote northwest, surrounded by volcanic moonscapes and home to some of humanity's oldest fossils. The Turkana and El Molo people (one of Africa's smallest ethnic groups, with fewer than 1,000 members) live along its shores, fishing from reed boats and maintaining traditions unchanged for millennia. Koobi Fora, on the lake's eastern shore, is where Richard Leakey's team discovered 1.6-million-year-old Homo erectus remains — 'Turkana Boy' — rewriting the story of human evolution. This is expedition-level travel: remote, raw, and profoundly moving. The annual Lake Turkana Cultural Festival brings together 14 ethnic groups for three days of dance, music, and traditional competition.",
                // No matching image in library
                bestTime: "Jun–Sep; Festival usually held in June",
                community: "Turkana, El Molo, Rendille, Gabra",
                culturalHighlight: "Koobi Fora fossil site (Turkana Boy discovery), El Molo fishing village visit, Lake Turkana Cultural Festival with 14 tribes, and volcanic island exploration.",
                keySpecies: ["Koobi Fora Fossils", "El Molo Village", "Cultural Festival", "Jade Sea Exploration", "Volcanic Islands"]
            },
            {
                name: "Ngorongoro Highlands — Maasai & Datoga Heritage",
                slug: "ngorongoro-crater",
                country: "Tanzania" as const,
                description: "The Ngorongoro Conservation Area is unique in all of Africa — the only place where Maasai pastoralists live and graze their cattle alongside wild lions, elephants, and buffalo inside a World Heritage Site. The crater rim Maasai bomas offer cultural encounters with a dramatic volcanic backdrop. Beyond the crater, the lesser-known Datoga (or Barabaig) people are semi-nomadic blacksmiths and cattle herders who pre-date the Maasai in this region. A visit to a Datoga homestead reveals their extraordinary brass jewellery-making skills — they forge arrowheads and ornaments from recycled metal using ancient techniques. The contrast between Maasai and Datoga cultures within one landscape is fascinating.",
                imageUrl: "https://ik.imagekit.io/axd1riwnv/Ngorongoro-crater3.jpg",
                bestTime: "Jun–Oct dry season; year-round for cultural visits",
                community: "Maasai, Datoga (Barabaig)",
                culturalHighlight: "Crater rim Maasai boma visits, Datoga blacksmithing and brass jewellery workshops, guided walks with Maasai pastoralists among wildlife, and traditional medicine plant identification.",
                keySpecies: ["Maasai Crater Rim Boma", "Datoga Blacksmithing", "Brass Jewellery Workshop", "Pastoralist Wildlife Walk", "Traditional Medicine"]
            },
            {
                name: "Zanzibar Stone Town — Spice Island Heritage",
                slug: "zanzibar-stone-town",
                country: "Tanzania" as const,
                description: "Zanzibar's Stone Town is a UNESCO World Heritage Site and one of the most culturally layered places on Earth. For over a thousand years, it was the centre of the Indian Ocean spice trade — clove, cinnamon, and cardamom flowed out while Persian, Arab, Indian, and European influences flowed in. The result is a mesmerising maze of coral-stone alleyways, brass-studded carved doors (over 560 documented), ornate balconies, and rooftop terraces overlooking the sea. Visit the former slave market (now the Anglican Cathedral), walk the spice plantations to taste fresh vanilla, nutmeg, and lemongrass straight from the vine, and explore the legendary Forodhani Gardens night food market — Zanzibar's open-air kitchen since the 1930s.",
                // No matching image in library
                bestTime: "Jun–Oct dry; Feb for Sauti za Busara music festival",
                community: "Swahili, Shirazi, Arab, Indian",
                culturalHighlight: "UNESCO Stone Town walking tour, spice plantation sensory experience, Forodhani night market food tour, carved-door heritage walk (560+ doors), and former slave market memorial.",
                keySpecies: ["UNESCO Walking Tour", "Spice Plantation Tour", "Forodhani Night Market", "Carved Door Heritage", "Slave Market Memorial"]
            },
            {
                name: "Lake Eyasi — Hadzabe & Datoga Living Traditions",
                slug: "lake-eyasi",
                country: "Tanzania" as const,
                description: "Lake Eyasi, in the rain shadow of the Ngorongoro Highlands, is home to the Hadzabe — one of the last remaining hunter-gatherer societies on Earth. Numbering fewer than 1,500, the Hadzabe live as their ancestors did for over 50,000 years: hunting with handmade bows and arrows, gathering wild berries and tubers, and moving camp with the seasons. A dawn hunting walk with Hadzabe men is one of Africa's most raw and authentic cultural experiences — you'll witness extraordinary tracking skills, see how they use bird calls to locate honey guides, and taste fresh honeycomb from a baobab tree. Nearby, the Datoga tribe forge arrowheads and trade with the Hadzabe, creating one of the oldest trading relationships in human history.",
                // No matching image in library
                bestTime: "Jun–Oct dry season for best access; year-round",
                community: "Hadzabe, Datoga",
                culturalHighlight: "Dawn hunting walk with Hadzabe bowmen, wild honey gathering, Datoga blacksmith arrowhead-forging, traditional click-language demonstration, and one of Earth's oldest hunter-gatherer cultures.",
                keySpecies: ["Dawn Hunting Walk", "Bow & Arrow Craft", "Wild Honey Gathering", "Datoga Blacksmithing", "Click Language Demo"]
            },
            {
                name: "Bagamoyo — Historic Slave Trade Port",
                slug: "bagamoyo",
                country: "Tanzania" as const,
                description: "Bagamoyo — meaning 'lay down your heart' in Swahili — was East Africa's most important slave and ivory trading port in the 19th century and the launching point for European explorers Burton, Speke, and Stanley. Today this quiet coastal town, a UNESCO World Heritage tentative site, preserves this painful history with dignity: the old slave market, German colonial buildings, and Catholic mission (the oldest in East Africa, founded 1868) create a walking tour through layers of history. The Bagamoyo Arts College — Tanzania's national college of arts — hosts performances of traditional Tanzanian dance, drumming, and theatre. The crumbling coral-stone ruins along the beach evoke the ghosts of a trade that shaped the modern world.",
                // No matching image in library
                bestTime: "Jun–Oct dry season; year-round for cultural sites",
                community: "Swahili, Zaramo",
                culturalHighlight: "Historic slave trade port tour, oldest Catholic mission in East Africa, Bagamoyo Arts College live performances, German colonial architecture walk, and coral-stone beach ruins exploration.",
                keySpecies: ["Slave Trade History Tour", "Arts College Performance", "Catholic Mission Visit", "Colonial Architecture", "Beach Ruins Walk"]
            },
            {
                name: "Olduvai Gorge — Cradle of Mankind",
                slug: "olduvai-gorge",
                country: "Tanzania" as const,
                description: "Olduvai Gorge (Oldupai in Maasai) is one of the most important paleoanthropological sites on Earth — the place where Louis and Mary Leakey discovered the 1.8-million-year-old skull of Homo habilis, fundamentally changing our understanding of human evolution. The gorge cuts 90 metres deep into the Serengeti plains, exposing 2 million years of geological and evolutionary history in its layered walls. The on-site museum displays casts of the original fossils, Acheulean stone tools, and the famous Laetoli footprints — 3.6-million-year-old footprints of our earliest ancestors preserved in volcanic ash. Standing here, looking across the same plains our ancestors walked, is a humbling encounter with the deepest roots of what it means to be human.",
                // No matching image in library
                bestTime: "Year-round; combine with Serengeti/Ngorongoro visits",
                community: "Archaeological Heritage",
                culturalHighlight: "Leakey fossil discovery museum, 3.6-million-year-old Laetoli footprints, 2-million-year geological timeline in the gorge walls, and Acheulean stone tool displays.",
                keySpecies: ["Leakey Fossil Museum", "Laetoli Footprints", "Gorge Geological Walk", "Stone Tool Exhibition", "Human Evolution Timeline"]
            }
        ]
    }
        ];
