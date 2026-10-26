import type { CSSProperties } from "react";
import type { Dict } from "@/lib/content";
import Title, { Eyebrow } from "./Title";

/** Datos operativos que un operador logístico necesita antes de pedir precio. */
export default function Operacao({ t }: { t: Dict }) {
  const o = t.operacao;
  return (
    <section id="operacao" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <Eyebrow>{o.eyebrow}</Eyebrow>
      <Title lines={o.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />

      <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-linha bg-linha sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {o.rows.map((row, i) => (
          <div
            key={row.label}
            data-reveal
            style={{ "--d": i % 3 } as CSSProperties}
            className="flex flex-col bg-suave p-6 lg:p-8"
          >
            <dt className="text-sm text-muted">{row.label}</dt>
            <dd className="mt-2 text-2xl font-semibold tracking-tight">{row.value}</dd>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{row.note}</dd>
          </div>
        ))}
      </dl>

      <p data-reveal className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted">
        <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-vinho" />
        {o.aduana}
      </p>
    </section>
  );
}
