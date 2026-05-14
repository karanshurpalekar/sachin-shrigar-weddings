import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ivory border-t border-ink/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl leading-tight max-w-sm text-balance">
              Decor by Sachin Shrigar
            </p>
            <p className="mt-4 text-sm text-ink/60 max-w-sm text-pretty">
              Luxury wedding planning and decor for those who seek the profound over the performative — Mangalore &amp; Bangalore.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-ink/40 mb-6">Ateliers</h4>
            <address className="not-italic space-y-4 text-sm text-ink/70">
              <div>
                <p className="text-ink">Mangalore</p>
                <p>Balmatta Road, 575002</p>
              </div>
              <div>
                <p className="text-ink">Bangalore</p>
                <p>Lavelle Road, 560001</p>
              </div>
            </address>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-ink/40 mb-6">Engage</h4>
            <ul className="space-y-3 text-sm text-ink/70">
              <li><a href="mailto:hello@decorbysachinshrigar.com" className="hover:text-ink">hello@decorbysachinshrigar.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-ink">+91 98765 43210</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-ink">Instagram</a></li>
              <li><Link to="/contact" className="hover:text-ink">Book consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-ink/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">© {new Date().getFullYear()} Decor by Sachin Shrigar</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 italic font-serif">Artistry in every sacred vow</p>
        </div>
      </div>
    </footer>
  );
}
