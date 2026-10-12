"use client";

import { useRef } from "react";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

// Coordenadas proyectadas: x = (lon + 58) · 60, y = (−lat − 22) · 60
const ROUTE =
  "M682 93 L524 206 L567 336 L406 482 L340 586 L354 602 L272 701 L220 749 L103 751 L110 774";
const BORDER = "M272 701 L278 634 L230 592 L148 533 L56 494";

type Stop = {
  cidade: string;
  pais: "BR" | "UY";
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor?: "start" | "end";
  fronteira?: boolean;
};

const stops: Stop[] = [
  { cidade: "São Paulo", pais: "BR", x: 682, y: 93, lx: -14, ly: 5, anchor: "end" },
  { cidade: "Porto Alegre", pais: "BR", x: 406, y: 482, lx: 14, ly: 5 },
  { cidade: "Pelotas", pais: "BR", x: 340, y: 586, lx: -14, ly: 0, anchor: "end" },
  { cidade: "Rio Grande", pais: "BR", x: 354, y: 602, lx: 14, ly: 12 },
  { cidade: "Chuí / Chuy", pais: "BR", x: 272, y: 701, lx: 16, ly: 5, fronteira: true },
  { cidade: "Rocha", pais: "UY", x: 220, y: 749, lx: 6, ly: 26 },
  { cidade: "Canelones", pais: "UY", x: 103, y: 751, lx: 0, ly: -14 },
  { cidade: "Montevideo", pais: "UY", x: 110, y: 774, lx: 0, ly: 26 },
];

const TOTAL_KM = 2000;

const truckIcon = (
  <g transform="translate(-12 -12)" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </g>
);

export default function Rotas() {
  const root = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: MOTION_OK,
          desktop: "(min-width: 1024px)",
        },
        (ctx) => {
          const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
          const section = root.current;
          const path = section?.querySelector<SVGPathElement>(".route-line");
          const truck = section?.querySelector<SVGGElement>(".route-truck");
          const kmEl = section?.querySelector<HTMLElement>(".route-km");
          if (!section || !path || !truck || !kmEl) return;

          const len = path.getTotalLength();
          const svgStops = section.querySelectorAll<SVGGElement>(".stop");
          const listStops = section.querySelectorAll<HTMLElement>(".stop-item");

          // Distancia de cada parada sobre el recorrido
          const samples = 600;
          const stopLen = stops.map((s) => {
            let best = 0;
            let bestD = Infinity;
            for (let i = 0; i <= samples; i++) {
              const p = path.getPointAtLength((i / samples) * len);
              const d = (p.x - s.x) ** 2 + (p.y - s.y) ** 2;
              if (d < bestD) {
                bestD = d;
                best = (i / samples) * len;
              }
            }
            return best;
          });

          const render = (progress: number) => {
            const at = progress * len;
            const p = path.getPointAtLength(at);
            truck.setAttribute("transform", `translate(${p.x} ${p.y})`);
            path.style.strokeDashoffset = String(len - at);
            kmEl.textContent = Math.round(progress * TOTAL_KM).toLocaleString("pt-BR");
            stopLen.forEach((l, i) => {
              const on = at >= l - 2;
              svgStops[i]?.classList.toggle("on", on);
              listStops[i]?.classList.toggle("on", on);
            });
          };

          if (!motion) {
            path.style.strokeDasharray = "none";
            render(1);
            return;
          }

          path.style.strokeDasharray = String(len);
          const state = { p: 0 };
          render(0);
          gsap.to(state, {
            p: 1,
            ease: "none",
            onUpdate: () => render(state.p),
            scrollTrigger: desktop
              ? {
                  trigger: section,
                  start: "top top",
                  end: "+=140%",
                  pin: true,
                  scrub: 0.8,
                  anticipatePin: 1,
                }
              : {
                  trigger: mapRef.current,
                  start: "top 75%",
                  end: "bottom 25%",
                  scrub: 0.8,
                },
          });
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="rotas"
      ref={root}
      className="relative overflow-hidden bg-paper py-24 lg:flex lg:min-h-svh lg:items-center lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-black/50 uppercase">
            <span className="h-px w-10 bg-brand" />
            Cobertura
          </p>
          <h2
            data-words
            className="font-wide text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] font-extrabold tracking-tight text-asphalt"
          >
            <Words text="De São Paulo a Montevideo, sem trocar de mãos" />
          </h2>
          <p data-fade className="mt-6 max-w-lg text-lg leading-relaxed text-black/60">
            Operamos o corredor Brasil–Uruguai há mais de 25 anos, com base na
            fronteira de Chuí. A mesma equipe acompanha sua carga do embarque à
            entrega.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            {(["BR", "UY"] as const).map((pais) => (
              <div key={pais}>
                <p className="mb-4 text-xs font-bold tracking-[0.2em] text-black/45 uppercase">
                  {pais === "BR" ? "Brasil" : "Uruguai"}
                </p>
                <ul className="space-y-3">
                  {stops.map((s, i) =>
                    s.pais === pais ? (
                      <li
                        key={s.cidade}
                        data-index={i}
                        className="stop-item flex items-center gap-3 text-sm text-black/45"
                      >
                        <span className="dot h-2.5 w-2.5 shrink-0 rounded-full bg-black/20" />
                        <span>
                          {s.cidade}
                          {s.fronteira && (
                            <span className="ml-2 rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                              fronteira
                            </span>
                          )}
                        </span>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-black/10 pt-6 text-sm text-black/60">
            <strong className="text-asphalt">Também atendemos a Argentina.</strong>{" "}
            Rotas para Buenos Aires e outras províncias mediante consulta.
          </p>
        </div>

        <div
          ref={mapRef}
          className="relative mx-auto w-full max-w-[560px] rounded-3xl bg-white p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ring-1 ring-black/5 md:p-6"
        >
          <div className="absolute top-5 left-5 z-10 md:top-7 md:left-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-black/45 uppercase">
              Distância aprox.
            </p>
            <p className="font-wide text-3xl font-extrabold text-asphalt tabular-nums md:text-4xl">
              <span className="route-km">2.000</span>
              <span className="ml-1 text-base text-black/45">km</span>
            </p>
          </div>

          <svg
            viewBox="40 40 720 790"
            role="img"
            aria-label="Mapa da rota São Paulo, Porto Alegre, Pelotas, Rio Grande, Chuí, Rocha, Canelones e Montevideo"
            className="h-auto w-full"
          >
            {/* Grade de latitude e longitude */}
            <g stroke="rgba(0,0,0,0.06)" strokeWidth="1">
              {[120, 360, 600].map((y) => (
                <line key={y} x1="40" x2="760" y1={y} y2={y} />
              ))}
              {[240, 480].map((x) => (
                <line key={x} y1="40" y2="830" x1={x} x2={x} />
              ))}
            </g>
            <g fill="rgba(0,0,0,0.3)" fontSize="13" fontFamily="var(--font-geist-mono)">
              <text x="748" y="114" textAnchor="end">24°S</text>
              <text x="748" y="354" textAnchor="end">28°S</text>
              <text x="748" y="594" textAnchor="end">32°S</text>
              <text x="486" y="822">50°O</text>
              <text x="246" y="822">54°O</text>
            </g>

            {/* Países */}
            <g
              fill="rgba(0,0,0,0.08)"
              fontWeight="800"
              style={{ fontStretch: "125%", letterSpacing: "0.04em" }}
            >
              <text x="450" y="730" fontSize="44">BRASIL</text>
              <text x="58" y="672" fontSize="30">URUGUAI</text>
            </g>
            <path
              d={BORDER}
              fill="none"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Recorrido */}
            <path
              d={ROUTE}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="route-line"
              d={ROUTE}
              fill="none"
              stroke="var(--brand)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {stops.map((s) => (
              <g key={s.cidade} className="stop on">
                <circle className="stop-dot" cx={s.x} cy={s.y} r="7" fill="#c9c9c9" stroke="#fff" strokeWidth="3" />
                <text
                  className="stop-label"
                  x={s.x + s.lx}
                  y={s.y + s.ly}
                  textAnchor={s.anchor ?? "start"}
                  fontSize="21"
                  fill="rgba(0,0,0,0.45)"
                >
                  {s.cidade}
                </text>
              </g>
            ))}

            <g className="route-truck" transform="translate(110 774)">
              <circle r="20" fill="var(--brand)" />
              <circle r="20" fill="none" stroke="var(--brand)" strokeOpacity="0.25" strokeWidth="10" />
              {truckIcon}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
