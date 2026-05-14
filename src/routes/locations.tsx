import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { locations } from "@/lib/content";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const TITLE = "Wedding Planner Locations — Mangalore, Bangalore, Goa & more";
const DESC =
  "Decor by Sachin Shrigar plans and produces luxury weddings across Mangalore, Bangalore, Udupi, Coorg, Chikmagalur, Goa and Mysore — with on-ground production teams in each city.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, url: "/locations", image: locations[0].hero }),
    links: [{ rel: "canonical", href: "/locations" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations" },
      ]),
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Where we work."
        intro="Two studios, seven cities, one standard. Direct production teams in every location below."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$city"
              params={{ city: l.slug }}
              className="group block"
            >
              <figure className="aspect-[4/5] overflow-hidden bg-beige mb-5">
                <img
                  src={l.hero}
                  alt={l.heroAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </figure>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{l.state}</p>
              <h2 className="font-serif text-2xl text-ink mb-2 group-hover:text-ink/70 transition-colors">
                {l.city}
              </h2>
              <p className="text-sm text-ink/65 leading-relaxed">{l.intro.split(".")[0]}.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
