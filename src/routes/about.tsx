import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import founder from "@/assets/founder.jpg";
import decorDetail from "@/assets/decor-detail.jpg";

const TITLE = "About the Studio — Decor by Sachin Shrigar";
const DESC = "Decor by Sachin Shrigar is a Mangalore- and Bangalore-based luxury wedding studio led by designer Sachin Shrigar, blending South Indian heritage with contemporary restraint.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: founder },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESC,
          mainEntity: {
            "@type": "Person",
            name: "Sachin Shrigar",
            jobTitle: "Founder & Creative Director",
            worksFor: { "@type": "Organization", name: "Decor by Sachin Shrigar" },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="A small studio. A total craft."
        intro="Decor by Sachin Shrigar is a luxury wedding studio rooted in coastal Karnataka and practiced across India. We accept a limited number of weddings each season because composition this considered cannot be scaled."
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="aspect-[4/5] overflow-hidden bg-beige">
              <img src={founder} alt="Sachin Shrigar, founder and creative director" width={1000} height={1300} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-ink/50">Sachin Shrigar · Founder & Creative Director</p>
          </div>
          <div className="md:col-span-7 space-y-12">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.2] text-balance">
                Founded in Mangalore. Composed across India.
              </h2>
            </Reveal>
            <div className="space-y-5 text-base text-ink/70 max-w-xl text-pretty leading-relaxed">
              <p>
                Sachin Shrigar founded the studio after a decade composing decor and ceremony for India's most considered families. His training is half-architectural, half-devotional — the discipline of section drawings paired with the rituals he grew up watching in coastal temple courts.
              </p>
              <p>
                The work moves between Mangalorean, Tulu, Konkani and Tamil traditions and the contemporary luxury of Bangalore's modern couples. The constant is restraint: every petal earns its place; every brass lamp is lit for a reason.
              </p>
              <p>
                We are deliberately small. Sachin personally art-directs every wedding the studio accepts. The atelier — florals, lighting, fabrication, styling — sits under one roof so a single voice carries from sketchbook to ceremony.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-ink/10">
              {[
                { n: "12+", l: "Years in practice" },
                { n: "180+", l: "Weddings composed" },
                { n: "2", l: "Ateliers" },
                { n: "6–8", l: "Weddings per season" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl md:text-4xl text-ink">{s.n}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ink/50">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-champagne/40 border-y border-ink/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-[4/5] overflow-hidden bg-beige">
              <img src={decorDetail} alt="Brass lamps and ivory florals" width={1200} height={1500} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="self-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">The Atelier</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance">Florals, lighting, fabrication, styling — composed under one roof.</h2>
              <p className="text-ink/70 text-pretty leading-relaxed">
                Working in-house lets us hold the line between concept and execution. Nothing is outsourced to a vendor whose taste we cannot vouch for. The result is a wedding that reads as a single, deliberate composition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
