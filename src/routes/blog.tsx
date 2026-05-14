import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import decorDetail from "@/assets/decor-detail.jpg";
import weddingHeritage from "@/assets/wedding-heritage.jpg";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import tablescape from "@/assets/tablescape.jpg";

const TITLE = "Journal — Wedding Stories & Notes from the Atelier";
const DESC = "Essays, wedding stories and design notes from Decor by Sachin Shrigar — on luxury weddings, South Indian traditions, destination planning and the craft of decor.";

const posts = [
  { slug: "the-quiet-mandap", title: "The Quiet Mandap: restraint as the new opulence", excerpt: "Why we are designing fewer flowers, taller lamps, and longer pauses.", img: decorDetail, date: "March 2024", read: "6 min" },
  { slug: "tulu-traditions", title: "Notes on Tulu wedding traditions for the contemporary couple", excerpt: "How families are honouring coastal Karnataka's most intimate rituals without losing modernity.", img: weddingHeritage, date: "February 2024", read: "8 min" },
  { slug: "coastal-destination-planning", title: "Planning a coastal Mangalore destination wedding", excerpt: "A studio guide to venues, monsoon windows, and what to ask before you sign.", img: weddingCoastal, date: "January 2024", read: "10 min" },
  { slug: "the-tablescape", title: "The tablescape as a love letter", excerpt: "Designing dinner as the second ceremony.", img: tablescape, date: "December 2023", read: "5 min" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: TITLE,
          description: DESC,
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Person", name: "Sachin Shrigar" },
          })),
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Wedding stories & notes from the atelier." intro="Essays on craft, ritual, restraint, and the families we have had the privilege of serving." />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-x-10 gap-y-20">
          {posts.map((p, i) => (
            <article key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <Link to="/blog" className="group block">
                <div className={`overflow-hidden bg-beige mb-6 ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-3">{p.date} · {p.read} read</p>
                <h2 className={`font-serif text-balance ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"} mb-3 group-hover:text-ink/70 transition-colors`}>
                  {p.title}
                </h2>
                <p className="text-ink/65 max-w-xl text-pretty leading-relaxed">{p.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
