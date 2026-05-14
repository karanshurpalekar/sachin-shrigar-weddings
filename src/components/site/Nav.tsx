import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/stories", label: "Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/destination-weddings", label: "Destinations" },
  { to: "/testimonials", label: "Voices" },
  { to: "/blog", label: "Journal" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-[0.2em] uppercase">
          S. Shrigar
        </Link>
        <div className="hidden lg:flex gap-9 text-[11px] uppercase tracking-[0.22em] font-medium text-ink/70">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-ink/30 hover:border-ink pb-0.5 transition-colors"
          >
            Inquire
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-5 h-px bg-ink" />
            <span className="w-5 h-px bg-ink" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/5 bg-ivory">
          <div className="px-6 py-6 flex flex-col gap-5 text-[11px] uppercase tracking-[0.22em]">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-ink/80">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="font-semibold">
              Inquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
