import Image from "next/image";
import type { CSSProperties } from "react";
import type { Dict } from "@/lib/content";
import { whatsappLink } from "@/lib/empresa";
import { ArrowIcon } from "./icons";
import Title, { Eyebrow } from "./Title";

export default function Cargas({ t }: { t: Dict }) {
  const c = t.cargas;
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title lines={c.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
          <ul className="mt-10 space-y-6">
            {c.items.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="border-l-2 border-vinho pl-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <a
            data-reveal
            href={whatsappLink(t.country, c.otherMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_outra_carga"
            className="group mt-8 inline-flex items-center gap-2 font-medium text-vinho underline-offset-4 hover:underline"
          >
            {c.other}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div data-reveal className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/carga2.webp"
            alt={c.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
