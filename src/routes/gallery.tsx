import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import weddingHeritage from "@/assets/wedding-heritage.jpg";
import weddingCoastal from "@/assets/wedding-coastal.jpg";
import weddingModern from "@/assets/wedding-modern.jpg";
import tablescape from "@/assets/tablescape.jpg";
import decorDetail from "@/assets/decor-detail.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta3 from "@/assets/insta-3.jpg";

const TITLE = "Wedding Gallery & Portfolio — Decor by Sachin Sherigar";
const DESC = "A curated portfolio of luxury weddings designed and produced by Decor by Sachin Sherigar across Mangalore, Bangalore, and destination venues.";

const items = [
  { img: weddingHeritage, title: "The Heritage Union", couple: "Ahalya & Vikram", place: "Mangalore", year: "2024", span: "md:col-span-7 md:row-span-2 aspect-[4/5]" },
  { img: weddingCoastal, title: "Coastal Reverie", couple: "Sanya & Kabir", place: "Udupi", year: "2023", span: "md:col-span-5 aspect-[4/5]" },
  { img: insta1, title: "Bridal Detail", couple: "Studio Editorial", place: "Bangalore", year: "2024", span: "md:col-span-5 aspect-square" },
  { img: weddingModern, title: "Candle-lit Reception", couple: "Meera & Rohan", place: "Bangalore", year: "2024", span: "md:col-span-6 aspect-[4/3]" },
  { img: tablescape, title: "Plantation Tablescape", couple: "Anaya & Aditya", place: "Chikmagalur", year: "2023", span: "md:col-span-6 aspect-[4/3]" },
  { img: decorDetail, title: "Brass & Bloom", couple: "Studio Editorial", place: "Mangalore", year: "2024", span: "md:col-span-7 aspect-[4/3]" },
  { img: insta3, title: "Lantern Path", couple: "Riya & Karan", place: "Bangalore", year: "2023", span: "md:col-span-5 aspect-[4/3]" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: weddingHeritage },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A quiet archive of our weddings."
        intro="Selected stories from the studio. Names shared with the families' generous permission."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-5 md:gap-7">
          {items.map((it) => (
            <figure key={it.title + it.couple} className={`group ${it.span} overflow-hidden bg-beige relative`}>
              <img src={it.img} alt={`${it.title} — ${it.couple}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-serif text-2xl">{it.couple}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] mt-1 text-ivory/80">{it.title} · {it.place} · {it.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
