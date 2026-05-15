import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findStory, stories, type WeddingStory } from "@/lib/content";
import {
  breadcrumbLd,
  imageObjectLd,
  pageMeta,
  weddingEventLd,
  articleLd,
} from "@/lib/seo";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = findStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.story;
    if (!s) return { meta: [{ title: "Wedding Story" }] };
    const url = `/stories/${params.slug}`;
    return {
      meta: pageMeta({
        title: `${s.title} — Decor by Sachin Sherigar`,
        description: s.excerpt,
        url,
        image: s.hero,
        type: "article",
      }),
      links: [{ rel: "canonical", href: url }],
      scripts: [
        breadcrumbLd([
          { name: "Home", url: "/" },
          { name: "Stories", url: "/stories" },
          { name: s.shortTitle, url },
        ]),
        weddingEventLd({
          name: s.title,
          description: s.excerpt,
          url,
          image: s.hero,
          city: s.city,
          venueName: s.venue,
          startDate: s.date,
        }),
        imageObjectLd({ url: s.hero, caption: s.alt, contentLocation: s.city }),
        articleLd({
          headline: s.title,
          description: s.excerpt,
          image: s.hero,
          datePublished: s.date,
          url,
        }),
      ],
    };
  },
  component: StoryPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">404</p>
        <p className="font-serif text-3xl mb-6">This story isn't in the archive.</p>
        <Link to="/stories" className="text-[11px] uppercase tracking-[0.3em] border-b border-ink pb-1">
          All stories
        </Link>
      </div>
    </div>
  ),
});

function StoryPage() {
  const { story: s } = Route.useLoaderData() as { story: WeddingStory };

  return (
    <article>
      <header className="pt-24 md:pt-32 pb-12 max-w-5xl mx-auto px-6">
        <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-8">
          <Link to="/stories" className="hover:text-ink">Stories</Link>
          <span className="mx-2">/</span>
          <span className="text-ink/80">{s.city}</span>
        </nav>
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          {s.city} · {new Date(s.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight text-balance mb-8">
          {s.title}
        </h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">{s.excerpt}</p>
      </header>

      <figure className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <img
          src={s.hero}
          alt={s.alt}
          className="w-full aspect-[16/9] object-cover bg-beige"
        />
        <figcaption className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mt-4">
          {s.couple} · {s.venue}
        </figcaption>
      </figure>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <p className="font-serif text-2xl md:text-3xl text-ink/90 leading-relaxed mb-16 first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-gold">
          {s.intro}
        </p>

        {s.chapters.map((c) => (
          <div key={c.heading} className="mb-12">
            <h2 className="font-serif text-3xl text-ink mb-5">{c.heading}</h2>
            <p className="text-base text-ink/75 leading-[1.85]">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-ink/5 py-16">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {s.details.map((d) => (
            <div key={d.label}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{d.label}</p>
              <p className="font-serif text-xl text-ink leading-snug">{d.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Continue reading</p>
          <div className="grid md:grid-cols-3 gap-8">
            {stories
              .filter((o) => o.slug !== s.slug)
              .slice(0, 3)
              .map((o) => (
                <Link
                  key={o.slug}
                  to="/stories/$slug"
                  params={{ slug: o.slug }}
                  className="group block"
                >
                  <figure className="aspect-[4/5] overflow-hidden bg-beige mb-4">
                    <img
                      src={o.hero}
                      alt={o.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </figure>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{o.city}</p>
                  <h3 className="font-serif text-xl text-ink group-hover:text-ink/70 transition-colors">
                    {o.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </article>
  );
}
