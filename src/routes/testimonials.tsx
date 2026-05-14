import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "Testimonials — In Their Own Words";
const DESC = "Words from the families we have served — luxury wedding testimonials for Decor by Sachin Shrigar across Mangalore, Bangalore and destination venues.";

const quotes = [
  { quote: "Sachin didn't just decorate our venue; he captured the soul of our family's heritage and translated it into something modern and breathtaking.", author: "Dr. Anjali Hegde", place: "Mangalore · 2024" },
  { quote: "We told Sachin we wanted a wedding that felt like a quiet film. He gave us exactly that — every frame deliberate, every detail in the right key.", author: "Meera & Rohan", place: "Bangalore · 2024" },
  { quote: "The mandap brought my mother to tears. She said it looked like the temple she grew up beside. I will never forget that moment.", author: "Sanya & Kabir", place: "Udupi · 2023" },
  { quote: "Three days, four ceremonies, three hundred guests across two cities — and not a single thing felt rushed. That is the Sachin Shrigar magic.", author: "The Patil Family", place: "Bangalore · 2024" },
  { quote: "We have attended many beautiful weddings. Sachin's was the first that felt composed rather than decorated.", author: "Karthik Rao", place: "Guest, 2023" },
  { quote: "Working with the studio felt like working with a single mind. Florals, lighting, fabric — every choice rhymed.", author: "Anaya & Aditya", place: "Chikmagalur · 2023" },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: quotes.map((q, i) => ({
            "@type": "Review",
            position: i + 1,
            reviewBody: q.quote,
            author: { "@type": "Person", name: q.author },
            itemReviewed: { "@type": "Organization", name: "Decor by Sachin Shrigar" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          })),
        }),
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Voices" title="What the families say." intro="Quiet words from couples and parents who lived inside our weddings." />
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {quotes.map((q, i) => (
            <figure key={i} className="border-t border-ink/10 pt-12 grid md:grid-cols-12 gap-8">
              <p className="md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-gold">0{i + 1}</p>
              <div className="md:col-span-9">
                <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug text-balance text-ink/90">
                  "{q.quote}"
                </blockquote>
                <figcaption className="mt-6 text-[10px] uppercase tracking-[0.3em] text-ink/60">
                  {q.author} · {q.place}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
