import type { Dict } from "@/lib/content";
import Title, { Eyebrow } from "./Title";

/** Preguntas frecuentes. Las mismas respuestas van en los datos estructurados (lib/site.tsx). */
export default function PerguntasFrequentes({ t }: { t: Dict }) {
  const f = t.faq;
  return (
    <section id="perguntas" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:py-32">
      <Eyebrow>{f.eyebrow}</Eyebrow>
      <Title lines={f.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />

      <div className="mt-12 divide-y divide-linha border-y border-linha">
        {f.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded font-semibold [&::-webkit-details-marker]:hidden">
              <h3>{item.q}</h3>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
