import Image from "next/image";
import type { CSSProperties } from "react";
import { fleetData, type Dict } from "@/lib/content";
import Title, { Eyebrow } from "./Title";

export default function Frota({ t }: { t: Dict }) {
  const f = t.frota;
  return (
    <section id="frota" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <Title lines={f.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
        </div>
        <p data-reveal className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end">
          {f.lead}
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {fleetData.map((truck, i) => (
          <li
            key={truck.name}
            data-reveal
            style={{ "--d": i % 2 } as CSSProperties}
            className="overflow-hidden rounded-2xl border border-linha bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={truck.image}
                alt={`${f.alt} ${truck.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-end justify-between gap-4 p-6 lg:p-8">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{truck.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {truck.specs.map((s) => (
                    <li key={s} className="rounded-full border border-linha px-3 py-1 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="shrink-0 text-3xl font-semibold tracking-tight text-vinho tabular-nums">
                <span data-count={truck.hp}>{truck.hp}</span>
                <span className="ml-1 text-base font-normal text-muted">{f.hp}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
