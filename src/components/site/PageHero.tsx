import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.02] tracking-tight text-balance max-w-5xl">
          {title}
        </h1>
        {intro && <p className="mt-10 max-w-2xl text-base text-ink/70 text-pretty leading-relaxed">{intro}</p>}
      </div>
    </header>
  );
}
