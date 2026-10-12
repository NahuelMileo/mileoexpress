"use client";

import { useRef } from "react";
import Image from "next/image";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

const rowA = [
  { src: "/111.webp", alt: "Scania 111, onde tudo começou" },
  { src: "/sidernuevo.webp", alt: "Iveco Stralis com o novo sider 0 km" },
  { src: "/1935.webp", alt: "Mercedes-Benz 1935" },
  { src: "/carga.webp", alt: "Carga amarrada dentro do sider" },
  { src: "/miq.webp", alt: "Volvo FH 480" },
  { src: "/international.webp", alt: "International 9800" },
  { src: "/WhatsApp-Image-2026-04-10-at-19.32.20.webp", alt: "Iveco Stralis 400 carregado na estrada" },
  { src: "/palmeira.webp", alt: "Sider Palmeira" },
  { src: "/hero.webp", alt: "Volvo FH em um posto à noite" },
];

const rowB = [
  { src: "/iveco.webp", alt: "Iveco Stralis Hi-Way vermelho" },
  { src: "/112.webp", alt: "Scania 112 HW" },
  { src: "/carga2.webp", alt: "Carregamento de pallets" },
  { src: "/ikg.webp", alt: "Volvo FH 380" },
  { src: "/randonN.webp", alt: "Sider Randon" },
  { src: "/WhatsApp-Image-2026-04-10-at-19.32.30.webp", alt: "Frota Mileo Express" },
  { src: "/iwy.webp", alt: "Iveco Stralis 440" },
  { src: "/iux.webp", alt: "Iveco Stralis 400 Hi-Way" },
];

function Row({ items, className }: { items: typeof rowA; className: string }) {
  return (
    <div className={`flex w-max gap-4 md:gap-6 ${className}`}>
      {items.map((img) => (
        <figure
          key={img.src}
          className="group relative h-56 w-[72vw] shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:w-[46vw] lg:h-80 lg:w-[30vw]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 46vw, 30vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm font-medium text-white opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Galería: dos cintas de fotos que avanzan en sentidos opuestos con el scroll. */
export default function GaleriaCarrusel() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const shift = (el: HTMLElement) => el.scrollWidth - window.innerWidth;
        const a = root.current?.querySelector<HTMLElement>(".row-a");
        const b = root.current?.querySelector<HTMLElement>(".row-b");
        if (!a || !b) return;
        root.current?.classList.add("is-moving");
        const st = {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        };
        gsap.fromTo(a, { x: 0 }, { x: () => -shift(a) * 0.6, ease: "none", scrollTrigger: st });
        gsap.fromTo(b, { x: () => -shift(b) * 0.6 }, { x: 0, ease: "none", scrollTrigger: { ...st } });
        return () => root.current?.classList.remove("is-moving");
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="galeria"
      ref={root}
      className="group overflow-hidden bg-asphalt py-24 text-white lg:py-36"
    >
      <div className="mx-auto mb-14 max-w-7xl px-5 lg:px-8">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
          <span className="h-px w-10 bg-brand-bright" />
          Galeria
        </p>
        <h2
          data-words
          className="font-wide max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] font-extrabold tracking-tight"
        >
          <Words text="Nossa história em imagens" />
        </h2>
      </div>

      <div className="space-y-4 overflow-x-auto px-5 group-[.is-moving]:overflow-visible md:space-y-6">
        <Row items={rowA} className="row-a" />
        <Row items={rowB} className="row-b" />
      </div>
    </section>
  );
}
