import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "Contact & Consultation — Decor by Sachin Sherigar";
const DESC = "Inquire about luxury wedding planning and decor with Decor by Sachin Sherigar. Ateliers in Mangalore and Bangalore. We respond within 48 hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESC,
        }),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a phone number").max(20),
  date: z.string().trim().max(50).optional(),
  city: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Please share a few words").max(1500),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation."
        intro="We accept a limited number of weddings each season. Share your date, vision, and city — our studio will reply within 48 hours."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {status === "ok" ? (
              <div className="border border-gold/40 bg-champagne/40 p-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Received</p>
                <h2 className="font-serif text-3xl mb-3">Thank you.</h2>
                <p className="text-ink/70">Sachin or a member of the studio will write back within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <Field label="Your name" name="name" error={errors.name} />
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone / WhatsApp" name="phone" type="tel" error={errors.phone} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Approximate wedding date" name="date" />
                  <Field label="City / venue" name="city" />
                </div>
                <Field label="Tell us about your wedding" name="message" textarea error={errors.message} />
                <button
                  type="submit"
                  className="bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-ink/90 transition-colors"
                >
                  Send inquiry
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Mangalore Atelier</h3>
              <p className="font-serif text-2xl mb-2">Balmatta Road, Mangalore 575002</p>
              <p className="text-sm text-ink/65">Karnataka, India</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Bangalore Atelier</h3>
              <p className="font-serif text-2xl mb-2">Lavelle Road, Bangalore 560001</p>
              <p className="text-sm text-ink/65">Karnataka, India</p>
            </div>
            <div className="pt-10 border-t border-ink/10 space-y-3 text-sm">
              <p><a href="mailto:hello@decorbysachinshrigar.com" className="hover:text-ink/60">hello@decorbysachinshrigar.com</a></p>
              <p><a href="tel:+919876543210" className="hover:text-ink/60">+91 98765 43210</a></p>
              <p><a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="hover:text-ink/60">WhatsApp the studio</a></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea, error }: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60 mb-3 block">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 text-ink resize-none" />
      ) : (
        <input name={name} type={type} className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 text-ink" />
      )}
      {error && <span className="text-xs text-destructive mt-2 block">{error}</span>}
    </label>
  );
}
