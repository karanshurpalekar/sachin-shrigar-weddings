import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { stories } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const TITLE = "Wedding Stories — Decor by Sachin Sherigar";
const DESC =
  "In-depth stories from luxury weddings designed by Sachin Sherigar across Mangalore, Bangalore, Udupi, Chikmagalur, Goa and Mysore — venues, palettes and craft notes.";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, url: "/stories", image: stories[0].hero }),
    links: [{ rel: "canonical", href: "/stories" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Stories", url: "/stories" },
      ]),
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Stories"
        title="Eight weddings, told in full."
        intro="Long-form chapters from our archive — palette, craft, and the families who trusted us with their day."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14">
          {stories.map((s) => (
            <Link
              key={s.slug}
              to="/stories/$slug"
              params={{ slug: s.slug }}
              className="group block"
            >
              <figure className="aspect-[3/4] overflow-hidden bg-beige mb-5">
                <img
                  src={s.hero}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </figure>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                {s.city} · {new Date(s.date).getFullYear()}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-3 group-hover:text-ink/70 transition-colors">
                {s.title}
              </h2>
              <p className="text-sm text-ink/70 max-w-md leading-relaxed">{s.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
