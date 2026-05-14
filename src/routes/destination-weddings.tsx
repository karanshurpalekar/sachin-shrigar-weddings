import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import tablescape from "@/assets/tablescape.jpg";
import weddingHeritage from "@/assets/wedding-heritage.jpg";

const TITLE = "Destination Weddings — Mangalore, Coastal Karnataka & Beyond";
const DESC = "Destination wedding planning and decor by Sachin Shrigar — coastal Mangalore, Udupi, Chikmagalur plantations, Goa, palace properties and beyond.";

const places = [
  { name: "Coastal Mangalore & Udupi", body: "Sea-edge ceremonies, temple-town traditions, and family homes opened for once-in-a-lifetime celebrations.", img: weddingCoastal },
  { name: "Chikmagalur Plantations", body: "Coffee-estate weddings under canopy and lantern, intimate guest counts, slow ritual.", img: tablescape },
  { name: "Heritage Properties & Palaces", body: "Royal courtyards across Karnataka and Rajasthan composed with restraint, never spectacle.", img: weddingHeritage },
];

export const Route = createFileRoute("/destination-weddings")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/destination-weddings" },
      { property: "og:image", content: weddingCoastal },
    ],
    links: [{ rel: "canonical", href: "/destination-weddings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Destination wedding planning and decor",
          provider: { "@type": "Organization", name: "Decor by Sachin Shrigar" },
          areaServed: places.map((p) => p.name),
          description: DESC,
        }),
      },
    ],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Composed on location, never on a template."
        intro="Each destination wedding begins with a week on the ground. We learn the venue's light, the local florists, the rhythms of the surrounding villages — then design from there."
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {places.map((p, i) => (
            <article key={p.name} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-beige">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">0{i + 1}</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-5 text-balance">{p.name}</h2>
                <p className="text-ink/70 text-pretty leading-relaxed mb-8 max-w-md">{p.body}</p>
                <Link to="/contact" className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1">Plan a visit</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-champagne/40 border-y border-ink/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance">A different venue in mind?</h2>
          <p className="text-ink/70 max-w-xl mx-auto mb-8">We have produced weddings across India and select international destinations. Tell us where, and we will tell you what is possible.</p>
          <Link to="/contact" className="inline-block bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold">Begin the conversation</Link>
        </div>
      </section>
    </>
  );
}
