import type { Dict } from "@/lib/content";
import { CNPJ, EMAIL, LEGAL_NAME, WHATSAPP, whatsappLink } from "@/lib/empresa";

export default function Footer({ t }: { t: Dict }) {
  return (
    <footer className="on-dark bg-grafite pt-16 pb-28 text-suave md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG vectorial del manual */}
          <img src="/brand/lockup-dark.svg" alt="Mileo Express" width={782} height={196} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-suave/65">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.navTitle}>
          <p className="mb-4 text-sm text-suave/50">{t.footer.navTitle}</p>
          <ul className="space-y-2.5 text-sm">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-suave/80 hover:text-suave">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-sm text-suave/50">{t.footer.contactTitle}</p>
          <ul className="space-y-2.5 text-sm text-suave/80">
            {(["br", "uy"] as const).map((country) => (
              <li key={country}>
                <a
                  href={whatsappLink(country, t.whatsappDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={`whatsapp_footer_${country}`}
                  className="hover:text-suave"
                >
                  {WHATSAPP[country].display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-suave">
                {EMAIL}
              </a>
            </li>
            <li>Chuí, RS – Brasil</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-1 border-t border-suave/10 px-4 pt-6 text-xs text-suave/45 sm:flex-row sm:justify-between sm:px-6">
        <p>
          {LEGAL_NAME} · CNPJ {CNPJ}
        </p>
        <p>
          © {new Date().getFullYear()} Mileo Express. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
