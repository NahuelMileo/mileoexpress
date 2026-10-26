import Image from "next/image";
import type { CSSProperties } from "react";
import type { Dict } from "@/lib/content";
import Title, { Eyebrow } from "./Title";

/** Historia corta: el origen de la empresa y cinco hitos, sin detalle de cada compra. */
export default function QuemSomos({ t }: { t: Dict }) {
  const q = t.quem;
  return (
    <section id="quem-somos" className="border-t border-linha bg-white/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <figure data-reveal className="lg:order-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image src="/111.webp" alt={q.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm text-muted">{q.caption}</figcaption>
        </figure>

        <div>
          <Eyebrow>{q.eyebrow}</Eyebrow>
          <Title lines={q.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
          {q.paragraphs.map((p, i) => (
            <p key={i} data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>

      <ol className="mx-auto mt-16 grid max-w-6xl gap-px px-4 sm:grid-cols-5 sm:px-6 lg:mt-20">
        {q.timeline.map((m, i) => (
          <li
            key={m.year}
            data-reveal
            style={{ "--d": i } as CSSProperties}
            className="border-t-2 border-linha pt-4 pb-6 sm:pr-4 [&:last-child]:border-vinho"
          >
            <p className="text-2xl font-semibold tracking-tight tabular-nums">{m.year}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{m.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
