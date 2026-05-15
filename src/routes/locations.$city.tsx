import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  findLocation,
  stories,
  type Location,
} from "@/lib/content";
import {
  breadcrumbLd,
  imageObjectLd,
  pageMeta,
  serviceLd,
} from "@/lib/seo";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const loc = findLocation(params.city);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ params, loaderData }) => {
    const l = loaderData?.loc;
    if (!l) return { meta: [{ title: "Location" }] };
    const url = `/locations/${params.city}`;
    return {
      meta: pageMeta({
        title: `${l.headline} — Decor by Sachin Sherigar`,
        description: l.intro,
        url,
        image: l.hero,
      }),
      links: [{ rel: "canonical", href: url }],
      scripts: [
        breadcrumbLd([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: l.city, url },
        ]),
        serviceLd({
          name: `Luxury Wedding Planning & Decor in ${l.city}`,
          description: l.intro,
          url,
          areaServed: [l.city, l.state, "India"],
        }),
        imageObjectLd({ url: l.hero, caption: l.heroAlt, contentLocation: l.city }),
      ],
    };
  },
  component: LocationPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">404</p>
        <p className="font-serif text-3xl mb-6">We don't have a page for that city yet.</p>
        <Link to="/locations" className="text-[11px] uppercase tracking-[0.3em] border-b border-ink pb-1">
          All locations
        </Link>
      </div>
    </div>
  ),
});

function LocationPage() {
  const { loc: l } = Route.useLoaderData() as { loc: Location };
  const linked = stories.filter((s) => l.storySlugs.includes(s.slug));

  return (
    <>
      <header className="pt-24 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-8">
            <Link to="/locations" className="hover:text-ink">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-ink/80">{l.city}</span>
          </nav>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">{l.state}, India</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.02] tracking-tight text-balance max-w-5xl">
            {l.headline}
          </h1>
          <p className="mt-10 max-w-2xl text-base text-ink/70 leading-relaxed">{l.intro}</p>
        </div>
      </header>

      <figure className="max-w-7xl mx-auto px-6 mb-16">
        <img src={l.hero} alt={l.heroAlt} className="w-full aspect-[16/9] object-cover bg-beige" />
      </figure>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Signature venues</p>
          <ul className="space-y-3">
            {l.signatureVenues.map((v) => (
              <li key={v} className="font-serif text-xl text-ink/85 border-b border-ink/10 pb-3">
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Local notes</p>
          <ul className="space-y-4">
            {l.notes.map((n) => (
              <li key={n} className="text-sm text-ink/75 leading-relaxed">— {n}</li>
            ))}
          </ul>
        </div>
      </section>

      {linked.length > 0 && (
        <section className="border-t border-ink/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
              Recent weddings in {l.city}
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              {linked.map((s) => (
                <Link
                  key={s.slug}
                  to="/stories/$slug"
                  params={{ slug: s.slug }}
                  className="group block"
                >
                  <figure className="aspect-[4/5] overflow-hidden bg-beige mb-4">
                    <img
                      src={s.hero}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </figure>
                  <h3 className="font-serif text-2xl text-ink group-hover:text-ink/70 transition-colors">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-ink/5 py-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Planning a wedding in {l.city}?
        </p>
        <Link
          to="/contact"
          className="inline-block text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1 hover:text-ink/60"
        >
          Begin an inquiry
        </Link>
      </section>
    </>
  );
}
