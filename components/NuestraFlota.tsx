"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import miq from "@/public/miq.webp";
import ikg from "@/public/ikg.webp";
import iwy from "@/public/iwy.webp";
import iux from "@/public/iux.webp";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

type Truck = {
  image: StaticImageData;
  brand: string;
  title: string;
  hp: number;
  description: string;
  specs: string[];
};

const fleet: Truck[] = [
  {
    image: miq,
    brand: "Volvo",
    title: "Volvo FH 480",
    hp: 480,
    description:
      "Caminhão de alta gama com tecnologia avançada para transporte seguro e eficiente em rotas internacionais.",
    specs: ["6x2", "GPS"],
  },
  {
    image: ikg,
    brand: "Volvo",
    title: "Volvo FH 380",
    hp: 380,
    description:
      "Segundo Volvo da frota, adquirido durante a pandemia, ampliando nossa capacidade operacional.",
    specs: ["6x2", "GPS"],
  },
  {
    image: iwy,
    brand: "Iveco",
    title: "Iveco Stralis 440 Hi-Way",
    hp: 440,
    description:
      "Tecnologia italiana com capacidade para 28 pallets e sider Palmeira de 30 pallets.",
    specs: ["6x2", "28–30 pallets"],
  },
  {
    image: iux,
    brand: "Iveco",
    title: "Iveco Stralis 400 Hi-Way",
    hp: 400,
    description:
      "Incorporado em 2026, preparado para operações internacionais com alto desempenho.",
    specs: ["6x2", "Até 30 pallets"],
  },
];

/** Flota: las tarjetas se apilan una sobre otra mientras se baja. */
export default function NuestraFlota() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const cards = gsap.utils.toArray<HTMLElement>(".fleet-card");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (next) {
            gsap.to(card.querySelector(".fleet-inner"), {
              scale: 0.94,
              filter: "brightness(0.82)",
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top 55%",
                end: "top 12%",
                scrub: true,
              },
            });
          }
          const img = card.querySelector(".fleet-img");
          if (img)
            gsap.fromTo(
              img,
              { scale: 1.2 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: { trigger: card, start: "top bottom", end: "top 20%", scrub: true },
              },
            );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="frota" ref={root} className="bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 lg:mb-20">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-black/50 uppercase">
              <span className="h-px w-10 bg-brand" />
              Nossa frota
            </p>
            <h2
              data-words
              className="font-wide text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] font-extrabold tracking-tight text-asphalt"
            >
              <Words text="Quatro caminhões próprios, prontos para a estrada" />
            </h2>
          </div>
          <p data-fade className="max-w-sm text-black/60">
            Equipamentos revisados e operados pela família, sem terceirização.
          </p>
        </div>

        <div className="space-y-6">
          {fleet.map((truck, i) => (
            <article
              key={truck.title}
              className="fleet-card sticky"
              style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}
            >
              <div className="fleet-inner grid origin-top overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-black/5 md:grid-cols-[1.25fr_1fr]">
                <div className="relative h-60 overflow-hidden sm:h-80 md:h-[26rem]">
                  <Image
                    src={truck.image}
                    alt={truck.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="fleet-img object-cover"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-asphalt/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {truck.brand}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
                  <div>
                    <p className="font-mono text-xs text-black/40">
                      {String(i + 1).padStart(2, "0")} / {String(fleet.length).padStart(2, "0")}
                    </p>
                    <h3 className="font-wide mt-3 text-2xl leading-tight font-extrabold text-asphalt md:text-3xl">
                      {truck.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/60 md:text-base">
                      {truck.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-6">
                    <p className="font-wide text-5xl leading-none font-extrabold text-brand md:text-6xl">
                      {truck.hp}
                      <span className="ml-1 text-lg text-black/40">hp</span>
                    </p>
                    <div className="flex flex-wrap justify-end gap-2">
                      {truck.specs.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full bg-paper px-3 py-1 font-mono text-xs text-black/65"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
