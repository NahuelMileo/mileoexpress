import Link from "next/link";
import type { Dict } from "@/lib/content";
import { whatsappLink } from "@/lib/empresa";
import { ChatIcon } from "./icons";

export default function Header({ t }: { t: Dict }) {
  return (
    <header className="sticky top-0 z-40 border-b border-linha/80 bg-suave/90 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:rounded-md focus:bg-grafite focus:px-4 focus:py-2 focus:text-suave"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[4.5rem]">
        <Link href={t.lang === "pt" ? "/" : "/es"} className="shrink-0" aria-label="Mileo Express">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG vectorial del manual */}
          <img src="/brand/lockup.svg" alt="" width={782} height={196} className="h-7 w-auto lg:h-8" />
        </Link>

        <nav aria-label={t.nav.label} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-grafite">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div role="group" aria-label={t.nav.langLabel} className="flex items-center gap-1 text-sm">
            {(["pt", "es"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && (
                  <span aria-hidden className="text-linha">
                    /
                  </span>
                )}
                <Link
                  href={l === "pt" ? "/" : "/es"}
                  hrefLang={l === "pt" ? "pt-BR" : "es-UY"}
                  aria-current={l === t.lang ? "true" : undefined}
                  className={`rounded px-1.5 py-1 ${l === t.lang ? "font-semibold text-grafite" : "text-muted hover:text-grafite"}`}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <a
            href={whatsappLink(t.country, t.whatsappDefault)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_header"
            className="hidden items-center gap-2 rounded-full bg-vinho px-5 py-2.5 text-sm font-medium text-suave transition-colors hover:bg-vinho-hover md:inline-flex"
          >
            <ChatIcon className="h-4 w-4" />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
