import Image from "next/image";
import type { CSSProperties } from "react";
import type { Dict } from "@/lib/content";
import { whatsappLink } from "@/lib/empresa";
import { ArrowIcon, ChatIcon } from "./icons";

/**
 * La primera pantalla no depende de JS: entra con una animación CSS al cargar
 * (desactivada con prefers-reduced-motion) y el botón se ve desde el primer pintado.
 */
export default function Hero({ t }: { t: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div>
          <p className="hero-in mb-6 text-sm font-medium text-vinho">{t.hero.eyebrow}</p>
          <h1 className="text-[2.2rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]">
            {t.hero.title.map((line, i) => (
              <span
                key={i}
                className={`hero-in block ${i === 1 ? "text-vinho" : ""}`}
                style={{ "--d": i + 1 } as CSSProperties}
              >
                {line}
              </span>
            ))}
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ "--d": 4 } as CSSProperties}
          >
            {t.hero.lead}
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": 5 } as CSSProperties}>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-vinho px-7 py-3.5 text-center font-medium text-suave transition-colors hover:bg-vinho-hover"
            >
              {t.hero.cta}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink(t.country, t.whatsappDefault)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_hero"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-grafite/25 px-7 py-3.5 font-medium transition-colors hover:border-grafite"
            >
              <ChatIcon className="h-5 w-5" />
              {t.hero.secondary}
            </a>
          </div>
        </div>

        {/* Recorte diagonal: retoma el ángulo de las franjas del símbolo */}
        <div
          className="hero-in relative aspect-[4/3] overflow-hidden [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] lg:aspect-[5/6] lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]"
          style={{ "--d": 2 } as CSSProperties}
        >
          <Image
            src="/palmeira.webp"
            alt={t.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[20%_70%] lg:object-[22%_70%]"
          />
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-linha pt-8 md:grid-cols-4 lg:mt-20">
        {t.hero.stats.map((s, i) => (
          <div key={i} className="hero-in flex flex-col-reverse" style={{ "--d": 6 + i } as CSSProperties}>
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight tabular-nums lg:text-4xl">
              {"count" in s ? (
                <>
                  {s.count}
                  {"suffix" in s && s.suffix}
                </>
              ) : (
                s.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
