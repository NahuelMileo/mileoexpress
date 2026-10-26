import type { CSSProperties } from "react";
import type { Dict } from "@/lib/content";
import Title, { Eyebrow } from "./Title";

/** Diferenciales y una conversación de ejemplo, marcada como ilustrativa. */
export default function PorQue({ t }: { t: Dict }) {
  const p = t.porque;
  return (
    <section className="border-y border-linha bg-white/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <Title lines={p.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
          <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {p.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ "--d": i % 2 } as CSSProperties}>
                <span aria-hidden className="mb-4 block h-px w-10 bg-vinho" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure data-chat className="self-center">
          <div className="overflow-hidden rounded-3xl border border-linha bg-suave shadow-[0_24px_60px_-30px_rgba(53,53,53,0.35)]">
            <div className="flex items-center gap-3 border-b border-linha bg-white px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vinho">
                {/* eslint-disable-next-line @next/next/no-img-element -- SVG vectorial del manual */}
                <img src="/brand/symbol-white.svg" alt="" width={24} height={24} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{p.chat.name}</p>
                <p className="text-xs text-muted">{p.chat.status}</p>
              </div>
              <span className="rounded-full border border-linha px-2.5 py-1 text-[11px] text-muted">
                {p.chat.label}
              </span>
            </div>
            <ol className="space-y-3 px-4 py-5 sm:px-5">
              {p.chat.messages.map((m, i) => (
                <li
                  key={i}
                  className={`chat-msg flex ${m.from === "us" ? "justify-start" : "justify-end"}`}
                  style={{ "--i": i } as CSSProperties}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "us" ? "rounded-bl-md bg-white" : "rounded-br-md bg-grafite text-suave"
                    }`}
                  >
                    {m.text}
                    <span className={`mt-1 block text-right text-[11px] ${m.from === "us" ? "text-muted" : "text-suave/60"}`}>
                      {m.time}
                    </span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <figcaption className="mt-3 text-xs text-muted">{p.chat.note}</figcaption>
        </figure>
      </div>
    </section>
  );
}
