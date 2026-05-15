import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import heroMandap from "@/assets/hero-mandap.jpg";
import decorDetail from "@/assets/decor-detail.jpg";
import tablescape from "@/assets/tablescape.jpg";
import philosophyLamps from "@/assets/philosophy-lamps.jpg";
import weddingHeritage from "@/assets/wedding-heritage.jpg";
import weddingModern from "@/assets/wedding-modern.jpg";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";

const TITLE = "Decor by Sachin Sherigar — Luxury Wedding Planning & Decor in Mangalore & Bangalore";
const DESC = "Decor by Sachin Sherigar is a luxury wedding planning and decor studio based in Mangalore and Bangalore, specializing in end-to-end planning, bespoke decor, destination weddings, and traditional South Indian celebrations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#business",
          name: "Decor by Sachin Sherigar",
          image: heroMandap,
          description: DESC,
          priceRange: "₹₹₹₹",
          areaServed: ["Mangalore", "Bangalore", "Udupi", "Karnataka"],
          address: [
            { "@type": "PostalAddress", addressLocality: "Mangalore", addressRegion: "Karnataka", addressCountry: "IN" },
            { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
          ],
          telephone: "+91-98765-43210",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { title: "End-to-End Planning", body: "Quiet orchestration of every ritual, vendor, and rhythm — from first concept to final farewell.", img: tablescape, tag: "Planning" },
  { title: "Luxury Decor", body: "Sculptural floral installations, bespoke furniture, and lighting choreographed as one composition.", img: decorDetail, tag: "Decor" },
  { title: "Destination Weddings", body: "Coastal Mangalore, palace courtyards, plantation estates — celebrations crafted on location.", img: weddingCoastal, tag: "Destinations" },
  { title: "South Indian Traditions", body: "Mangalorean, Tulu, Konkani, and Tamil ceremonies honoured with reverence and contemporary restraint.", img: weddingHeritage, tag: "Heritage" },
];

const signatures = [
  { name: "Ahalya & Vikram", place: "Mangalore", year: "2024", title: "The Heritage Union", img: weddingHeritage },
  { name: "Meera & Rohan", place: "Bangalore", year: "2024", title: "Modern Serenity", img: weddingModern },
  { name: "Sanya & Kabir", place: "Udupi Coast", year: "2023", title: "Coastal Reverie", img: weddingCoastal },
  { name: "Anaya & Aditya", place: "Chikmagalur", year: "2023", title: "Plantation Vows", img: tablescape },
];

const insta = [insta1, insta2, insta3, insta4];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroMandap}
            alt="Luxury South Indian wedding mandap with cascading jasmine and marigold florals at golden hour"
            width={1920}
            height={1280}
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-ink/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full text-ivory">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] mb-6 text-ivory/80">
            Mangalore · Bangalore · Beyond
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-4xl text-balance">
            Weddings composed like a quiet prayer.
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="bg-ivory text-ink px-7 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-ivory/90 transition-colors"
            >
              Book a consultation
            </Link>
            <Link
              to="/gallery"
              className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ivory/60 pb-1 text-ivory/90 hover:text-ivory hover:border-ivory"
            >
              Explore the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">Our Philosophy</p>
            <figure className="aspect-[4/5] overflow-hidden bg-beige">
              <img
                src={philosophyLamps}
                alt="Brass oil lamps and jasmine petals on teakwood — a South Indian wedding ritual detail"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="md:col-span-7 md:pt-10">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.15] text-balance">
                We believe in weddings that feel like a quiet prayer — intentional, deeply rooted, and exquisitely crafted.
              </h2>
              <div className="mt-10 space-y-5 text-base text-ink/70 max-w-2xl text-pretty">
                <p>
                  Founded on the principles of South Indian heritage and contemporary restraint, Decor by Sachin Sherigar transforms spaces into emotional landscapes. Every petal, every drape, every flicker of brass-lamp light is choreographed to tell a story that began generations ago.
                </p>
                <p>
                  From the temple courts of Mangalore to the grand ballrooms of Bangalore, we curate experiences for those who seek the profound over the performative.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature services */}
      <section id="services" className="py-24 md:py-32 bg-champagne/40 border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Signature Services</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink max-w-2xl text-balance">A studio practice, not a service menu.</h2>
            </div>
            <Link to="/services" className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1">
              All services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {services.map((s, i) => (
              <Reveal key={s.title} className={i % 2 === 1 ? "md:mt-20" : ""}>
                <article>
                  <div className="overflow-hidden bg-beige aspect-[4/5] mb-6">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-3">{s.tag}</p>
                  <h3 className="font-serif text-3xl mb-3">{s.title}</h3>
                  <p className="text-sm text-ink/70 max-w-md text-pretty leading-relaxed">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature weddings strip */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Signature Weddings</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Stories we have composed.</h2>
          </div>
          <Link to="/gallery" className="hidden sm:inline-block text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1">
            View all
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-4 snap-x snap-mandatory">
          {signatures.map((w) => (
            <article key={w.name} className="snap-start flex-none w-[78vw] sm:w-[420px]">
              <div className="aspect-[4/5] overflow-hidden bg-beige mb-5">
                <img
                  src={w.img}
                  alt={`${w.name} — ${w.title}`}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-serif text-2xl">{w.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ink/50">
                {w.title} · {w.place} · {w.year}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Why Sachin Sherigar</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] text-balance">
              The studio is small. The craft is total.
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {[
              { n: "01", t: "Single point of vision", b: "Sachin personally art-directs every wedding the studio accepts — never more than a handful per season." },
              { n: "02", t: "Heritage fluency", b: "Mangalorean, Tulu, Konkani, Tamil and North Karnataka traditions handled with the depth they deserve." },
              { n: "03", t: "In-house atelier", b: "Florals, lighting, fabrication and styling under one roof — composed, not coordinated." },
              { n: "04", t: "Quiet precision", b: "Logistics so seamless your families forget they exist. That is the brief, every time." },
            ].map((p) => (
              <Reveal key={p.n}>
                <div>
                  <p className="font-serif text-2xl text-gold mb-3">{p.n}</p>
                  <h3 className="text-base font-medium mb-2 tracking-tight">{p.t}</h3>
                  <p className="text-sm text-ink/65 text-pretty leading-relaxed">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 md:py-40 bg-ink text-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/40 mb-10">The Experience</p>
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-[1.2] text-balance">
            "Sachin didn't just decorate our venue; he captured the soul of our family's heritage and translated it into something modern and breathtaking."
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-gold" />
            <cite className="not-italic text-[10px] uppercase tracking-[0.3em] text-ivory/70">Dr. Anjali Hegde · Mangalore</cite>
            <span className="w-10 h-px bg-gold" />
          </div>
          <Link
            to="/testimonials"
            className="inline-block mt-12 text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ivory/40 pb-1 hover:border-ivory"
          >
            Read more voices
          </Link>
        </div>
      </section>

      {/* Instagram showcase */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">From the Atelier</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink">@decorbysachinshrigar</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="hidden sm:inline-block text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1">
              Follow
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {insta.map((src, i) => (
              <a key={i} href="https://instagram.com" target="_blank" rel="noopener" className="block aspect-square overflow-hidden bg-beige">
                <img src={src} alt={`Instagram preview ${i + 1}`} width={800} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-24 md:py-32 bg-champagne/50 border-t border-ink/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Begin Your Story</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.1] text-balance mb-8">
            A private consultation, by invitation.
          </h2>
          <p className="max-w-xl mx-auto text-base text-ink/70 mb-10 text-pretty">
            We accept a limited number of weddings each season. Share your date and vision and our studio will respond within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-ink/90"
          >
            Inquire now
          </Link>
        </div>
      </section>
    </>
  );
}
