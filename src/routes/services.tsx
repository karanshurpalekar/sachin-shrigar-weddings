import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import tablescape from "@/assets/tablescape.jpg";
import decorDetail from "@/assets/decor-detail.jpg";
import weddingHeritage from "@/assets/wedding-heritage.jpg";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import weddingModern from "@/assets/wedding-modern.jpg";

const TITLE = "Services — Wedding Planning, Decor & Destination Weddings";
const DESC = "End-to-end wedding planning, luxury decor, destination weddings, traditional South Indian ceremonies, and contemporary premium celebrations across Mangalore, Bangalore and beyond.";

const services = [
  { id: "planning", title: "End-to-End Wedding Planning", img: tablescape, body: "From the first mood-board to the final farewell brunch — vendor curation, timelines, hospitality, logistics, and stage-direction of every ritual.", includes: ["Concept & creative direction", "Vendor curation & contracts", "Day-of orchestration", "Guest hospitality"] },
  { id: "decor", title: "Luxury Wedding Decor", img: decorDetail, body: "Sculptural florals, custom-fabricated structures, brass and crystal lighting — all conceived and built in our in-house atelier.", includes: ["Mandap & stage design", "Floral installations", "Custom fabrication", "Lighting design"] },
  { id: "destination", title: "Destination Weddings", img: weddingCoastal, body: "Coastal Mangalore, Udupi, Chikmagalur plantations, Goa, palace properties — destination logistics composed with the same restraint as our home weddings.", includes: ["Venue scouting", "Travel & stay logistics", "Multi-day itineraries", "On-ground production"] },
  { id: "south-indian", title: "Traditional South Indian Weddings", img: weddingHeritage, body: "Mangalorean, Tulu, Konkani, Tamil, Kannada and North Karnataka traditions — handled with the depth of someone who grew up inside them.", includes: ["Ritual choreography", "Heritage motifs", "Temple-style florals", "Family hospitality"] },
  { id: "contemporary", title: "Contemporary Premium Weddings", img: weddingModern, body: "Modern luxury for couples drawn to restraint — candle-lit halls, monochrome palettes, sculptural minimalism.", includes: ["Modern art direction", "Tablescape design", "Reception experience", "Cinematic lighting"] },
  { id: "events", title: "Customized Event Styling", img: tablescape, body: "Beyond weddings — engagements, milestone celebrations, anniversaries and curated private events styled to the same standard.", includes: ["Private dinners", "Engagement ceremonies", "Anniversary events", "Cocktail experiences"] },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services offered by Decor by Sachin Sherigar",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.body,
            provider: { "@type": "Organization", name: "Decor by Sachin Sherigar" },
            areaServed: ["Mangalore", "Bangalore", "Karnataka", "India"],
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six practices. One studio voice."
        intro="Every engagement is bespoke, but our practice gathers around a few defined disciplines. Each is led personally by Sachin and supported by our in-house atelier."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7 aspect-[4/3] overflow-hidden bg-beige">
                <img src={s.img} alt={s.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">0{i + 1}</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-5 text-balance leading-[1.15]">{s.title}</h2>
                <p className="text-base text-ink/70 mb-6 text-pretty leading-relaxed">{s.body}</p>
                <ul className="space-y-2 mb-8">
                  {s.includes.map((it) => (
                    <li key={it} className="text-sm text-ink/70 flex items-start gap-3">
                      <span className="mt-2 h-px w-4 bg-gold shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1 hover:text-ink/60">
                  Inquire about {s.title.split(" ")[0].toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink text-ivory text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Have a date in mind?</h2>
          <p className="text-ivory/70 mb-8">We respond to every inquiry within 48 hours.</p>
          <Link to="/contact" className="inline-block bg-ivory text-ink px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold">Begin a conversation</Link>
        </div>
      </section>
    </>
  );
}
