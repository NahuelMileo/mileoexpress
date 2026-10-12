"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { Truck } from "lucide-react";
import scania111 from "@/public/111.webp";
import mercedes1935 from "@/public/1935.webp";
import scania112 from "@/public/112.webp";
import international from "@/public/international.webp";
import volvo380 from "@/public/ikg.webp";
import volvo480 from "@/public/miq.webp";
import iveco from "@/public/iwy.webp";
import randonN from "@/public/randonN.webp";
import palmeira from "@/public/palmeira.webp";
import iux from "@/public/iux.webp";
import sidernuevo from "@/public/sidernuevo.webp";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

type Hito = {
  titulo: string;
  año: string;
  descripcion: string;
  imagen: StaticImageData;
  destacado?: boolean;
};

const timeline: Hito[] = [
  {
    titulo: "Os primeiros passos",
    año: "2000",
    descripcion:
      "Nossa jornada começou com um clássico Scania 111, ano 1978, acoplado a uma carreta Randon graneleira de 1989.",
    imagen: scania111,
  },
  {
    titulo: "O primeiro upgrade",
    año: "2005",
    descripcion:
      "Investimos em um Mercedes-Benz 1935, ano 1993, acoplado a uma carreta canguru de 14 metros, aumentando significativamente nossa capacidade.",
    imagen: mercedes1935,
  },
  {
    titulo: "Expansão e diversificação",
    año: "2014",
    descripcion:
      "Incorporamos um Scania 112 HW 360 hp 4x2, ano 1991, e ampliamos a atuação com transporte para parques eólicos.",
    imagen: scania112,
  },
  {
    titulo: "Fortalecimento com International",
    año: "2016",
    descripcion:
      "Reforçamos a frota com um International 9800, 405 hp, configuração 6x4, elevando nosso padrão operacional.",
    imagen: international,
  },
  {
    titulo: "Chegada da Volvo",
    año: "2018",
    descripcion:
      "Grande salto tecnológico com o primeiro Volvo FH 380 cv, configuração 6x2, junto ao primeiro Sider Randon.",
    imagen: volvo380,
  },
  {
    titulo: "Expansão da frota",
    año: "2021",
    descripcion:
      "Chega o Volvo FH 480: passamos a operar com dois caminhões e expandimos rotas para Argentina, Uruguai e Brasil.",
    imagen: volvo480,
  },
  {
    titulo: "Novo Sider Randon",
    año: "2024",
    descripcion:
      "Recebemos nosso segundo Sider Randon, ano 2014, reforçando capacidade e versatilidade.",
    imagen: randonN,
  },
  {
    titulo: "Iveco Stralis 440",
    año: "2024",
    descripcion:
      "Completamos a frota com o Iveco Stralis 440 6x2, ano 2014, reforçando nosso compromisso com excelência.",
    imagen: iveco,
  },
  {
    titulo: "Sider Palmeira",
    año: "2025",
    descripcion:
      "Chega um Sider Palmeira com capacidade para 30 pallets, garantindo mais eficiência no transporte internacional.",
    imagen: palmeira,
  },
  {
    titulo: "Novo reforço na frota",
    año: "2026",
    descripcion:
      "Aquisição de mais um Iveco Stralis 400 Hi-Way 6x2, reforçando nossa capacidade nas rotas internacionais.",
    imagen: iux,
  },
  {
    titulo: "Novo Sider 0 km",
    año: "2026",
    destacado: true,
    descripcion:
      "Em maio de 2026 incorporamos nosso primeiro sider zero quilômetro, um novo patamar de qualidade para a frota Mileo Express.",
    imagen: sidernuevo,
  },
];

/** Historia horizontal: la sección queda fija y los años pasan de lado con el scroll. */
export default function NuestraHistoria() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const el = track.current;
        if (!el || !root.current) return;
        const section = root.current;
        section.classList.add("is-h");
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);

        const move = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(".hist-fill", { scaleX: self.progress });
              gsap.set(".hist-truck", { left: `${self.progress * 100}%` });
            },
          },
        });

        gsap.utils.toArray<HTMLElement>(".hist-panel").forEach((panel) => {
          const img = panel.querySelector(".hist-img");
          const year = panel.querySelector(".hist-year");
          if (img)
            gsap.fromTo(
              img,
              { scale: 1.35, clipPath: "inset(0% 0% 0% 100%)" },
              {
                scale: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: move,
                  start: "left 95%",
                  end: "left 35%",
                  scrub: true,
                },
              },
            );
          if (year)
            gsap.fromTo(
              year,
              { xPercent: 30 },
              {
                xPercent: -30,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: move,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
        });
        return () => section.classList.remove("is-h");
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="sobre-nos"
      ref={root}
      className="group relative flex min-h-svh flex-col justify-center overflow-hidden bg-asphalt py-24 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
          <span className="h-px w-10 bg-brand-bright" />
          Nossa história
        </p>
        <h2
          data-words
          className="font-wide max-w-3xl text-[clamp(2rem,4.6vw,3.8rem)] leading-[1] font-extrabold tracking-tight"
        >
          <Words text="26 anos e um caminhão de cada vez" />
        </h2>
      </div>

      <div
        ref={track}
        className="mt-10 flex max-w-full snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 group-[.is-h]:w-max group-[.is-h]:max-w-none group-[.is-h]:snap-none group-[.is-h]:overflow-visible group-[.is-h]:pb-0 lg:mt-14 lg:gap-10 lg:px-8"
      >
        {timeline.map((item, i) => (
          <article
            key={i}
            className={`hist-panel relative grid w-[86vw] shrink-0 snap-start gap-5 overflow-hidden rounded-2xl p-5 md:w-[70vw] md:grid-cols-[1.1fr_1fr] md:items-center md:gap-10 md:p-8 lg:w-[62vw] ${
              item.destacado ? "bg-brand" : "bg-white/[0.04] ring-1 ring-white/10"
            }`}
          >
            <span
              aria-hidden="true"
              className={`hist-year font-wide pointer-events-none absolute -right-4 -bottom-6 text-[clamp(6rem,16vw,14rem)] leading-none font-extrabold select-none ${
                item.destacado ? "text-white/10" : "outline-text"
              }`}
            >
              {item.año}
            </span>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={item.imagen}
                alt={item.titulo}
                fill
                sizes="(max-width: 768px) 86vw, 40vw"
                className="hist-img object-cover"
              />
            </div>
            <div className="relative">
              <p
                className={`font-mono text-sm font-semibold ${
                  item.destacado ? "text-white" : "text-brand-bright"
                }`}
              >
                {item.año}
                {item.destacado ? " · 0 km" : ""}
              </p>
              <h3 className="font-wide mt-2 text-2xl leading-tight font-extrabold md:text-4xl">
                {item.titulo}
              </h3>
              <p
                className={`mt-3 max-w-md text-sm leading-relaxed md:text-base ${
                  item.destacado ? "text-white/85" : "text-white/65"
                }`}
              >
                {item.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Línea de tiempo: la cabina recorre 2000 → 2026 */}
      <div className="mx-auto mt-10 hidden w-full max-w-7xl px-5 group-[.is-h]:block lg:px-8">
        <div className="relative h-px bg-white/15">
          <div className="hist-fill absolute inset-0 origin-left scale-x-0 bg-brand-bright" />
          <div className="hist-truck absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright p-2">
            <Truck className="h-4 w-4 text-white" />
          </div>
        </div>
        <div className="mt-4 flex justify-between font-mono text-xs text-white/45">
          <span>2000</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
