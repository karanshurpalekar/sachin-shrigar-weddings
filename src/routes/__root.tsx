import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">404 — Lost in the gallery</p>
        <h1 className="font-serif text-5xl text-ink mb-4">This page has wandered.</h1>
        <p className="text-sm text-ink/60 mb-8">The story you were looking for isn't here. Return home and we'll guide you.</p>
        <Link
          to="/"
          className="inline-block text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1 hover:text-ink/60"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-ink mb-3">A quiet pause.</h1>
        <p className="text-sm text-ink/60 mb-6">Something didn't load. Please try again.</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink pb-1"
          >
            Try again
          </button>
          <a href="/" className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-ink/30 pb-1">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_NAME = "Decor by Sachin Sherigar";
const SITE_DESC = "Luxury wedding planning and decor in Mangalore & Bangalore. End-to-end planning, bespoke decor, destination & traditional South Indian weddings.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Luxury Wedding Planning & Decor` },
      { name: "description", content: SITE_DESC },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#fdfcf8" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE_NAME} — Luxury Wedding Planning & Decor` },
      { property: "og:description", content: SITE_DESC },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — Luxury Wedding Planning & Decor` },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          description: SITE_DESC,
          areaServed: ["Mangalore", "Bangalore", "Karnataka", "India"],
          founder: { "@type": "Person", name: "Sachin Sherigar" },
          sameAs: ["https://instagram.com"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-98765-43210",
            contactType: "customer service",
            email: "hello@decorbysachinshrigar.com",
            areaServed: "IN",
            availableLanguage: ["English", "Kannada", "Tulu", "Hindi"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-ivory text-ink">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
