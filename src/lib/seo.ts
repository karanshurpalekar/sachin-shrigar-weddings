// SEO + JSON-LD helpers for entity-based schema strategy.
// Use these from each route's head() to attach the right schema type.

const SITE_NAME = "Decor by Sachin Sherigar";
const SITE_URL = ""; // relative — resolved by crawlers against host
const PHONE = "+91-98765-43210";
const EMAIL = "hello@decorbysachinshrigar.com";

export const site = { name: SITE_NAME, url: SITE_URL, phone: PHONE, email: EMAIL };

type LdScript = { type: "application/ld+json"; children: string };
const ld = (data: unknown): LdScript => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export function breadcrumbLd(trail: { name: string; url: string }[]): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  });
}

export function serviceLd(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    provider: { "@type": "Organization", name: SITE_NAME },
    areaServed: (opts.areaServed ?? ["Mangalore", "Bangalore", "Karnataka", "India"]).map(
      (a) => ({ "@type": "Place", name: a }),
    ),
  });
}

export function imageObjectLd(opts: {
  url: string;
  caption: string;
  contentLocation?: string;
}): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url,
    caption: opts.caption,
    creditText: SITE_NAME,
    creator: { "@type": "Organization", name: SITE_NAME },
    copyrightNotice: `© ${SITE_NAME}`,
    contentLocation: opts.contentLocation
      ? { "@type": "Place", name: opts.contentLocation }
      : undefined,
  });
}

export function reviewLd(opts: {
  author: string;
  reviewBody: string;
  rating?: number;
  itemName?: string;
}): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: opts.author },
    reviewBody: opts.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: opts.rating ?? 5,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "Organization",
      name: opts.itemName ?? SITE_NAME,
    },
  });
}

export function faqLd(faqs: { q: string; a: string }[]): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function eventVenueLd(opts: {
  name: string;
  city: string;
  region?: string;
  country?: string;
}) {
  return {
    "@type": "EventVenue",
    name: opts.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: opts.city,
      addressRegion: opts.region ?? "Karnataka",
      addressCountry: opts.country ?? "IN",
    },
  };
}

export function weddingEventLd(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
  city: string;
  venueName: string;
  startDate?: string; // ISO date
}): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "Event",
    additionalType: "https://schema.org/SocialEvent",
    name: opts.name,
    description: opts.description,
    image: [opts.image],
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: opts.startDate ?? "2024-01-01",
    location: eventVenueLd({ name: opts.venueName, city: opts.city }),
    organizer: { "@type": "Organization", name: SITE_NAME, url: opts.url },
    about: "Wedding ceremony, planning and decor",
  });
}

export function articleLd(opts: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  url: string;
}): LdScript {
  return ld({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: [opts.image],
    datePublished: opts.datePublished,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: "/favicon.ico" },
    },
    mainEntityOfPage: opts.url,
  });
}

// Build a meta array with title + description + full OG + Twitter set in one shot.
export function pageMeta(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}) {
  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: opts.url },
    { property: "og:type", content: opts.type ?? "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (opts.image) {
    meta.push(
      { property: "og:image", content: opts.image },
      { name: "twitter:image", content: opts.image },
    );
  }
  return meta;
}
