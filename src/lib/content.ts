// Wedding stories — content layer for /stories and /stories/$slug.
// Image URLs are imported so Vite fingerprints them and OG tags get real paths.

import weddingHeritage from "@/assets/wedding-heritage.jpg";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import weddingModern from "@/assets/wedding-modern.jpg";
import tablescape from "@/assets/tablescape.jpg";
import decorDetail from "@/assets/decor-detail.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";

// Real client weddings from the studio archive.
import storyAnaghaSushanth from "@/assets/story-anagha-sushanth.jpg";
import storyAnjaliAbhisekh from "@/assets/story-anjali-abhisekh.jpg";
import storySoniaUday from "@/assets/story-sonia-uday.jpg";
import storySandraCanute from "@/assets/story-sandra-canute.jpg";
import storyAnshprabhuSrinivas from "@/assets/story-anshprabhu-srinivas.jpg";
import storyTrupthiVipin from "@/assets/story-trupthi-vipin.jpg";

export type WeddingStory = {
  slug: string;
  title: string;
  shortTitle: string;
  city: string;
  venue: string;
  date: string; // ISO
  couple: string;
  guests: number;
  palette: string;
  hero: string;
  excerpt: string;
  intro: string;
  chapters: { heading: string; body: string }[];
  details: { label: string; value: string }[];
  alt: string;
};

export const stories: WeddingStory[] = [
  {
    slug: "royal-coastal-wedding-mangalore",
    shortTitle: "Royal Coastal Mangalore",
    title: "A Royal Coastal Wedding in Mangalore",
    city: "Mangalore",
    venue: "Private seafront estate, Ullal",
    date: "2024-02-14",
    couple: "Anagha & Sushanth",
    guests: 380,
    palette: "Ivory · brass · deep coral",
    hero: storyAnaghaSushanth,
    alt: "Anagha and Sushanth make a sparkler-lit reception entrance at their luxury Mangalore wedding designed by Sachin Shrigar",
    excerpt:
      "A three-day Tulu-Brahmin celebration on the Arabian Sea — temple bronzes, hand-strung jasmine, and a mandap of antique brass.",
    intro:
      "Ahalya is the daughter of an old Mangalorean shipping family; Vikram, a Bangalore-based architect. They wanted the sea to feel like a guest, not a backdrop — so we built a fourteen-foot brass mandap that mirrored the horizon, and let saltwater air do the rest.",
    chapters: [
      {
        heading: "Day one — the welcome",
        body: "Guests arrived to a courtyard of terracotta lamps, banana-leaf garlands, and an a cappella Sopana Sangeetham. The dress code was raw silk in seafoam.",
      },
      {
        heading: "The mandap",
        body: "We commissioned the mandap from a sixth-generation brass workshop in Karkala. The four pillars carried hand-etched lotus motifs; the canopy was layered ivory georgette, edged in vintage zari salvaged from the bride's grandmother's wedding sari.",
      },
      {
        heading: "The reception",
        body: "Three hundred and eighty guests, dined on a fourteen-course Coastal Saraswat menu under a tented pavilion of woven palm. The aisle was lit with one thousand and two oil lamps — one for every relative living and remembered.",
      },
    ],
    details: [
      { label: "Venue", value: "Private seafront estate, Ullal" },
      { label: "Guests", value: "380" },
      { label: "Florals", value: "Marigold, jasmine, white lily" },
      { label: "Length", value: "Three days" },
    ],
  },
  {
    slug: "luxury-temple-wedding-udupi",
    shortTitle: "Temple Wedding Udupi",
    title: "A Luxury Temple Wedding in Udupi",
    city: "Udupi",
    venue: "Sri Krishna Matha precinct (private courtyard)",
    date: "2024-04-22",
    couple: "Anjali & Abhisekh",
    guests: 220,
    palette: "Saffron · vermillion · gold",
    hero: storyAnjaliAbhisekh,
    alt: "Anjali and Abhisekh showered in rose petals during their traditional Udupi temple-tradition wedding ceremony",
    excerpt:
      "A Madhva-tradition wedding inside a private courtyard of the Sri Krishna Matha — chanting at dawn, banana-leaf feast at noon.",
    intro:
      "The brief was reverence first. Every flower, every flame had to belong inside a temple precinct. We worked with the matha's priests for four months to get the rituals — and the aesthetics — exactly right.",
    chapters: [
      {
        heading: "Pre-dawn rituals",
        body: "The Kashi Yatra and Mangalya Dharanam took place at four in the morning, lit only by ghee lamps. Photography was hand-held, no flash.",
      },
      {
        heading: "The aisle",
        body: "Hand-painted kolam in five colours of natural rice flour stretched forty feet. Eighty terracotta diyas marked the bride's path.",
      },
      {
        heading: "The feast",
        body: "An eighteen-item Udupi banana-leaf meal served by temple cooks. Guests ate seated on the floor, in the traditional Madhva way.",
      },
    ],
    details: [
      { label: "Venue", value: "Private temple courtyard, Udupi" },
      { label: "Guests", value: "220" },
      { label: "Length", value: "Two days" },
      { label: "Cuisine", value: "Madhva temple banquet" },
    ],
  },
  {
    slug: "minimal-elegant-wedding-bangalore",
    shortTitle: "Minimal Bangalore",
    title: "A Minimal, Elegant Wedding in Bangalore",
    city: "Bangalore",
    venue: "The Leela Palace, Bangalore",
    date: "2024-08-11",
    couple: "Sonia & Uday",
    guests: 160,
    palette: "Ivory · pale taupe · bone",
    hero: storySoniaUday,
    alt: "Sonia in an ivory silk sari beside Uday in a black bandhgala at their pared-back contemporary wedding",
    excerpt:
      "A pared-back contemporary wedding for a tech-founder couple — long ivory tables, taper candles, no flowers but pampas.",
    intro:
      "Meera and Rohan met at a startup. They wanted the day to feel like the dinner parties they hosted at home — calm, conversational, lit only by candle.",
    chapters: [
      {
        heading: "The ceremony",
        body: "A simple white-marble platform under a single arch of dried palm. Eight chairs, four for parents, four for grandparents. Everyone else stood.",
      },
      {
        heading: "The reception",
        body: "Two banqueting tables, each forty feet long, dressed in raw linen and three hundred ivory taper candles. No floral centrepieces — only low bowls of pampas and cotton stems.",
      },
    ],
    details: [
      { label: "Venue", value: "The Leela Palace, Bangalore" },
      { label: "Guests", value: "160" },
      { label: "Style", value: "Contemporary minimal" },
      { label: "Length", value: "One evening" },
    ],
  },
  {
    slug: "heritage-tulu-wedding-arabian-sea",
    shortTitle: "Heritage Tulu",
    title: "A Heritage Tulu Wedding by the Arabian Sea",
    city: "Mangalore",
    venue: "Ancestral Guttu house, Bantwal",
    date: "2023-12-03",
    couple: "Anvitha & Pranav",
    guests: 290,
    palette: "Indigo · teak · turmeric",
    hero: insta2,
    alt: "Traditional Tulu Guttu house courtyard decorated with copper vessels and turmeric for a Bunt wedding",
    excerpt:
      "A Bunt-community wedding inside a 200-year-old ancestral Guttu house — copper vessels, turmeric kolams, kambala dancers at dusk.",
    intro:
      "The groom is the ninth generation of his family to marry in the same Guttu courtyard. We did not build a single new structure — we restored what was already there.",
    chapters: [
      {
        heading: "The courtyard",
        body: "Two hundred copper kalashams were polished by hand and arranged around the central tulasi katte. The bride entered to the sound of the chande drum.",
      },
      {
        heading: "Kambala at dusk",
        body: "A short ceremonial kambala (buffalo-race blessing) opened the reception. The buffaloes were garlanded in turmeric and led, never raced.",
      },
    ],
    details: [
      { label: "Venue", value: "Ancestral Guttu house, Bantwal" },
      { label: "Community", value: "Tulu Bunt" },
      { label: "Length", value: "Three days" },
      { label: "Guests", value: "290" },
    ],
  },
  {
    slug: "plantation-wedding-chikmagalur",
    shortTitle: "Plantation Chikmagalur",
    title: "A Plantation Wedding in Chikmagalur",
    city: "Chikmagalur",
    venue: "Private coffee estate, Mudigere",
    date: "2023-10-19",
    couple: "Sandra & Canute",
    guests: 140,
    palette: "Moss · bronze · burgundy",
    hero: storySandraCanute,
    alt: "Sandra and Canute share a quiet moment on the lawn at their intimate Christian estate wedding designed by Sachin Shrigar",
    excerpt:
      "Forty-eight hours among coffee trees and mist — a barefoot ceremony at dawn, a long-table dinner under string lights.",
    intro:
      "The couple grew up in Bangalore but spent every summer on this estate. They wanted to marry standing exactly where they'd had their first conversation.",
    chapters: [
      {
        heading: "Welcome bonfire",
        body: "Guests arrived to a clearing lit by twelve bonfires. Cardamom-coffee was served in copper tumblers; a Yakshagana troupe performed until midnight.",
      },
      {
        heading: "The dawn ceremony",
        body: "We rose at five. Mist came down to chest height. The pheras were walked barefoot on a circle of cleared earth dressed in marigold petals.",
      },
    ],
    details: [
      { label: "Venue", value: "Private coffee estate, Mudigere" },
      { label: "Guests", value: "140" },
      { label: "Length", value: "Two days" },
      { label: "Setting", value: "Working coffee plantation" },
    ],
  },
  {
    slug: "destination-wedding-goa",
    shortTitle: "Destination Goa",
    title: "A Three-Day Destination Wedding in Goa",
    city: "Goa",
    venue: "Private villa, Aldona",
    date: "2024-01-27",
    couple: "Anshprabhu & Srinivas",
    guests: 240,
    palette: "Cobalt · whitewash · terracotta",
    hero: storyAnshprabhuSrinivas,
    alt: "Anshprabhu and Srinivas at their floral arch reception, a destination wedding designed by Sachin Shrigar",
    excerpt:
      "A Portuguese-Indian fusion across three Aldona villas — sangeet on the river, sundowner haldi, beach reception at low tide.",
    intro:
      "The couple wanted Goa not for the beach but for the architecture — the azulejo tile, the laterite walls, the long Portuguese verandas. We dressed all three.",
    chapters: [
      {
        heading: "Sangeet on the river",
        body: "A floating stage on the Mapusa river, lit by paper lanterns. Choreography by a Mumbai dance company; live tabla and bass guitar.",
      },
      {
        heading: "Beach reception",
        body: "Sunset at Morjim, low tide. Bare feet, a circular bar of carved jackfruit wood, dinner served from clay pots set into the sand.",
      },
    ],
    details: [
      { label: "Venue", value: "Three private villas, Aldona" },
      { label: "Guests", value: "240" },
      { label: "Length", value: "Three days" },
      { label: "Style", value: "Indo-Portuguese" },
    ],
  },
  {
    slug: "modern-bangalore-palace-reception",
    shortTitle: "Bangalore Palace Reception",
    title: "A Modern Reception at Bangalore Palace",
    city: "Bangalore",
    venue: "Bangalore Palace, Vasanth Nagar",
    date: "2024-11-09",
    couple: "Trupthi & Vipin",
    guests: 620,
    palette: "Emerald · gold · obsidian",
    hero: storyTrupthiVipin,
    alt: "Trupthi in a coral-and-gold lehenga twirls beside a glowing candle-grid backdrop at her Bangalore Palace reception",
    excerpt:
      "Six hundred guests in the gothic halls of Bangalore Palace — a custom suspended chandelier, emerald orchids, a champagne tower lit from within.",
    intro:
      "We were given the great hall and three weeks. The brief: contemporary, theatrical, never tacky. The result was a single suspended sculpture of brass and crystal that took eleven days to install.",
    chapters: [
      {
        heading: "The installation",
        body: "Forty-two metres of brass tubing, twelve hundred hand-cut crystals, suspended from the original beams without a single drilled hole. Engineered by a team that usually builds film sets.",
      },
      {
        heading: "The bar",
        body: "A twenty-eight-foot champagne tower, internally lit, stocked with eight hundred coupes. The opening pour was made by the couple's grandfathers, simultaneously.",
      },
    ],
    details: [
      { label: "Venue", value: "Bangalore Palace, Vasanth Nagar" },
      { label: "Guests", value: "620" },
      { label: "Style", value: "Contemporary theatrical" },
      { label: "Build", value: "11 days" },
    ],
  },
  {
    slug: "intimate-mandap-mysore",
    shortTitle: "Intimate Mysore",
    title: "An Intimate Mandap Ceremony in Mysore",
    city: "Mysore",
    venue: "Private heritage bungalow, Mysore",
    date: "2024-06-15",
    couple: "Lakshmi & Aniket",
    guests: 80,
    palette: "Rose · sandalwood · pearl",
    hero: decorDetail,
    alt: "Intimate rose-petal mandap with pearl drapery and sandalwood incense for a small Mysore wedding",
    excerpt:
      "Eighty guests, one heritage bungalow, an entire afternoon — proof that intimacy and grandeur are not opposites.",
    intro:
      "The couple wanted only family. We treated the bungalow's central hall as a cathedral — four pillars, one canopy of pearls, six thousand rose petals on the floor.",
    chapters: [
      {
        heading: "The mandap",
        body: "Pearls strung individually onto seventy-two ivory ropes. The petals beneath were laid by hand in concentric circles over four hours.",
      },
      {
        heading: "The lunch",
        body: "A seated Iyengar-Bhojana for eighty, served on silver thalis the bride's mother had used at her own wedding.",
      },
    ],
    details: [
      { label: "Venue", value: "Private heritage bungalow, Mysore" },
      { label: "Guests", value: "80" },
      { label: "Style", value: "Intimate traditional" },
      { label: "Length", value: "One afternoon" },
    ],
  },
];

export type Location = {
  slug: string;
  city: string;
  state: string;
  headline: string;
  intro: string;
  hero: string;
  heroAlt: string;
  signatureVenues: string[];
  notes: string[];
  storySlugs: string[];
};

import heroMandap from "@/assets/hero-mandap.jpg";
import insta4 from "@/assets/insta-4.jpg";

export const locations: Location[] = [
  {
    slug: "mangalore",
    city: "Mangalore",
    state: "Karnataka",
    headline: "Luxury Wedding Planners & Decorators in Mangalore",
    intro:
      "Our home city. We design weddings across the Tulu coast — from ancestral Guttu courtyards in Bantwal to seafront estates in Ullal — with a fluency in Tulu, Konkani, and Beary traditions earned over a decade of work here.",
    hero: heroMandap,
    heroAlt: "Brass mandap with marigold garlands at a luxury Mangalore wedding venue",
    signatureVenues: [
      "Goldfinch Hotel, Mangalore",
      "The Ocean Pearl, Bunder",
      "Private Guttu houses, Bantwal & Moodbidri",
      "Seafront estates, Ullal & Surathkal",
    ],
    notes: [
      "Specialists in Tulu Bunt, Konkani Saraswat, and Mangalorean Catholic ceremonies.",
      "Direct relationships with brass artisans in Karkala and Udupi.",
      "Logistics for monsoon-season tented weddings (June–September).",
    ],
    storySlugs: ["royal-coastal-wedding-mangalore", "heritage-tulu-wedding-arabian-sea"],
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    state: "Karnataka",
    headline: "Luxury Wedding Planners & Decorators in Bangalore",
    intro:
      "Our second studio. From The Leela and Taj West End to Bangalore Palace and private farmhouses on Kanakapura Road, we deliver large-format and intimate weddings across the city with full in-house production.",
    hero: weddingModern,
    heroAlt: "Candle-lit Bangalore wedding reception at a luxury palace venue",
    signatureVenues: [
      "Bangalore Palace, Vasanth Nagar",
      "The Leela Palace, Bangalore",
      "Taj West End",
      "Private farmhouses, Nandi Hills & Kanakapura Road",
    ],
    notes: [
      "Full-service production team based in HSR Layout.",
      "Permits, parking, and traffic management handled in-house.",
      "Specialists in contemporary, minimal, and large theatrical receptions.",
    ],
    storySlugs: [
      "minimal-elegant-wedding-bangalore",
      "modern-bangalore-palace-reception",
    ],
  },
  {
    slug: "udupi",
    city: "Udupi",
    state: "Karnataka",
    headline: "Temple & Heritage Wedding Decor in Udupi",
    intro:
      "Udupi weddings demand reverence. We work hand-in-hand with the Sri Krishna Matha and surrounding ashta-mathas to design ceremonies that honour Madhva tradition without compromise.",
    hero: weddingCoastal,
    heroAlt: "Marigold and oil-lamp temple wedding setup in Udupi",
    signatureVenues: [
      "Sri Krishna Matha precinct (with permission)",
      "Paryaya Mathas of Udupi",
      "Beachfront resorts, Malpe & Kapu",
    ],
    notes: [
      "Madhva-tradition specialists.",
      "Temple-cook coordination for traditional banana-leaf banquets.",
      "Pre-dawn ritual lighting and silent photography arrangements.",
    ],
    storySlugs: ["luxury-temple-wedding-udupi"],
  },
  {
    slug: "coorg",
    city: "Coorg",
    state: "Karnataka",
    headline: "Estate Weddings in Coorg",
    intro:
      "Coffee, mist, and Kodava tradition. We produce intimate estate weddings across Madikeri, Virajpet, and Kushalnagar — including Kodava ceremonies that don't require a priest.",
    hero: tablescape,
    heroAlt: "Coorg coffee-estate wedding with bronze candelabras and mist",
    signatureVenues: [
      "Tamara Coorg",
      "Evolve Back, Kuruba Safari Lodge",
      "Private coffee estates, Madikeri",
    ],
    notes: [
      "Kodava (priestless) ceremony specialists.",
      "Weather contingency planning for monsoon.",
      "On-estate accommodation coordination for full-buyout weddings.",
    ],
    storySlugs: ["plantation-wedding-chikmagalur"],
  },
  {
    slug: "chikmagalur",
    city: "Chikmagalur",
    state: "Karnataka",
    headline: "Plantation & Hill Weddings in Chikmagalur",
    intro:
      "Working coffee estates, hand-harvested florals, dawn ceremonies in mist. We produce barefoot, low-impact weddings across Mudigere, Sakleshpur, and the Baba Budangiri range.",
    hero: tablescape,
    heroAlt: "Plantation wedding tablescape in a Chikmagalur coffee estate",
    signatureVenues: [
      "The Serai, Chikmagalur",
      "Private coffee estates, Mudigere",
      "Heritage bungalows, Sakleshpur",
    ],
    notes: [
      "Plantation-friendly production (no heavy rigging on root systems).",
      "Local sourcing of flowers, foliage, and produce.",
      "Off-grid lighting and audio.",
    ],
    storySlugs: ["plantation-wedding-chikmagalur"],
  },
  {
    slug: "goa",
    city: "Goa",
    state: "Goa",
    headline: "Destination Weddings in Goa",
    intro:
      "Indo-Portuguese architecture, river-front sangeets, low-tide beach receptions. We produce three-day Goa weddings end-to-end — including villa scouting, permits, and guest logistics from any city.",
    hero: insta1,
    heroAlt: "Whitewashed Aldona villa courtyard prepared for a destination wedding in Goa",
    signatureVenues: [
      "Private villas, Aldona & Assagao",
      "W Goa, Vagator",
      "Taj Fort Aguada",
      "Private beachfronts, Morjim & Ashvem",
    ],
    notes: [
      "End-to-end villa scouting and bookings.",
      "Liquor, music, and beach-event permits.",
      "Guest-side travel and accommodation desk.",
    ],
    storySlugs: ["destination-wedding-goa"],
  },
  {
    slug: "mysore",
    city: "Mysore",
    state: "Karnataka",
    headline: "Heritage Weddings in Mysore",
    intro:
      "From Mysore Palace to private royal-era bungalows, we design weddings that draw from the city's deep aesthetic vocabulary — without ever feeling like a film set.",
    hero: insta4,
    heroAlt: "Heritage bungalow courtyard in Mysore prepared for a traditional wedding",
    signatureVenues: [
      "Lalitha Mahal Palace",
      "Radisson Blu Plaza, Mysore",
      "Private heritage bungalows, Mysore",
    ],
    notes: [
      "Heritage-property production with conservation protocols.",
      "Specialists in Iyengar and Mysore-Madhva ceremonies.",
      "Coordination with palace administration where required.",
    ],
    storySlugs: ["intimate-mandap-mysore"],
  },
];

export const findStory = (slug: string) => stories.find((s) => s.slug === slug);
export const findLocation = (slug: string) => locations.find((l) => l.slug === slug);
