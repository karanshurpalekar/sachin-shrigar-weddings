import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";

const TITLE = "Frequently Asked Questions — Decor by Sachin Sherigar";
const DESC =
  "Pricing, lead times, destination logistics, and what to expect when you engage Decor by Sachin Sherigar for luxury wedding planning and decor.";

const faqs = [
  {
    q: "How far in advance should we book Decor by Sachin Sherigar?",
    a: "We accept a limited number of weddings per season. Most couples engage us 9–14 months in advance for full planning, and at least 6 months out for decor-only engagements.",
  },
  {
    q: "What is the typical investment for a Sachin Sherigar wedding?",
    a: "Our full-planning engagements typically begin at ₹35 lakh for decor and creative direction; end-to-end weddings begin at ₹80 lakh. Every quote is bespoke to scale, venue, and number of functions.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes. We regularly produce weddings across Goa, Coorg, Chikmagalur, Udupi, Mysore and select international destinations. On-ground travel and accommodation for the team are quoted separately.",
  },
  {
    q: "Can you handle traditional South Indian rituals?",
    a: "Sachin grew up inside Tulu, Konkani and Mangalorean Brahmin traditions. We work directly with priests and temple cooks to design ceremonies that are ritually exact and aesthetically considered.",
  },
  {
    q: "Do you offer decor without planning?",
    a: "Yes. Decor-only engagements are available for couples who already have a planner. We retain full creative control over the design language in those engagements.",
  },
  {
    q: "How many weddings do you take per year?",
    a: "We cap at twelve full-service weddings per year so that Sachin can be personally present at every event.",
  },
  {
    q: "Where are your studios?",
    a: "Our atelier is in Mangalore; our second production studio is in HSR Layout, Bangalore.",
  },
  {
    q: "How do we begin?",
    a: "Send us an inquiry through the contact page with your dates, venue (or city), and rough guest count. We respond to every inquiry within 48 hours.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, url: "/faq" }),
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" },
      ]),
      faqLd(faqs),
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        intro="The things couples most often ask before they write to us."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/10 pb-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h2 className="font-serif text-2xl text-ink leading-snug">{f.q}</h2>
                <span className="text-gold text-2xl leading-none mt-1 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-5 text-base text-ink/70 leading-[1.85]">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link
            to="/contact"
            className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1 hover:text-ink/60"
          >
            Still have questions? Write to us
          </Link>
        </div>
      </section>
    </>
  );
}
