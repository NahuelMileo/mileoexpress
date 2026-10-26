import { stops, type Dict } from "@/lib/content";
import { OPERACAO } from "@/lib/empresa";
import Title, { Eyebrow } from "./Title";

const POINTS = ["610 100", "530 215", "440 330", "360 465", "300 585", "262 665", "180 720", "80 742"];
const pathFrom = (pts: string[]) => "M" + pts.join(" L");
const BORDER = "M300 585 L285 520 L215 470 L120 430 L20 405";

/**
 * Ruta São Paulo–Montevidéu: la línea se dibuja cuando la sección entra en pantalla.
 * En español se dibuja desde Montevideo, el sentido que más le interesa al cliente uruguayo.
 */
export default function Rota({ t }: { t: Dict }) {
  const r = t.rota;
  const fromUruguay = t.lang === "es";
  const route = pathFrom(fromUruguay ? [...POINTS].reverse() : POINTS);
  const end = fromUruguay ? stops[0] : stops[stops.length - 1];
  const fmt = new Intl.NumberFormat(t.htmlLang);
  return (
    <section id="rota" className="on-dark bg-grafite py-24 text-suave lg:py-32">
      <div
        data-route
        className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
      >
        <div>
          <Eyebrow dark>{r.eyebrow}</Eyebrow>
          <Title lines={r.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
          <p data-reveal className="mt-6 max-w-md text-lg leading-relaxed text-suave/75">
            {r.lead}
          </p>

          <dl className="mt-10 divide-y divide-suave/15 border-y border-suave/15 sm:max-w-md">
            {r.legs.map((leg) => (
              <div key={leg.label} data-reveal className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-suave/75">{leg.label}</dt>
                <dd className="text-right font-semibold">{leg.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-sm text-suave/60">{r.distance}</p>
          <p className="text-4xl font-semibold tracking-tight tabular-nums">
            ~<span data-km={OPERACAO.routeKm}>{fmt.format(OPERACAO.routeKm)}</span> km
          </p>
        </div>

        <figure className="relative mx-auto w-full max-w-[28rem]">
          <svg viewBox="0 40 700 760" role="img" aria-label={r.mapLabel} className="h-auto max-h-[70svh] w-full">
            <path d={BORDER} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="6 8" />
            <text x="430" y="560" fontSize="30" fill="currentColor" fillOpacity="0.3">
              {r.brazil}
            </text>
            <text x="40" y="640" fontSize="30" fill="currentColor" fillOpacity="0.3">
              {r.uruguay}
            </text>
            <path d={route} fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
            <path
              className="route-line"
              pathLength={1}
              d={route}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {stops.map((s) => (
              <g key={s.city} className="route-stop" data-x={s.x} data-y={s.y}>
                {"border" in s && <circle cx={s.x} cy={s.y} r="18" fill="var(--vinho)" />}
                <circle cx={s.x} cy={s.y} r="8" fill="var(--grafite)" stroke="currentColor" strokeWidth="4" />
                <text x={s.x + s.lx} y={s.y + s.ly} textAnchor={s.anchor} fontSize="25" fill="currentColor">
                  {s.city === "São Paulo" ? r.saoPaulo : s.city}
                  {"border" in s && ` · ${r.border}`}
                </text>
              </g>
            ))}
            <g className="route-truck" transform={`translate(${end.x} ${end.y})`}>
              <circle r="13" fill="var(--vinho)" stroke="currentColor" strokeWidth="4" />
            </g>
          </svg>
          <figcaption className="mt-2 text-xs text-suave/55">{r.mapNote}</figcaption>
        </figure>
      </div>
    </section>
  );
}
