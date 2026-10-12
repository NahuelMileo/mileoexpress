"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, getLenis } from "@/lib/motion";

const cities = [
  "São Paulo",
  "Porto Alegre",
  "Pelotas",
  "Rio Grande",
  "Chuí",
  "Rocha",
  "Montevideo",
];

function Row() {
  return (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      {cities.map((c) => (
        <span key={c} className="flex items-center gap-8">
          <span>{c}</span>
          <span aria-hidden="true" className="text-white/40">
            ⟶
          </span>
        </span>
      ))}
    </span>
  );
}

/** Cinta de ciudades: avanza sola y acelera/se inclina con la velocidad del scroll. */
export default function CityTicker() {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const el = track.current;
      if (!el) return;
      let x = 0;
      let dir = -1;
      let skew = 0;
      const tick = () => {
        const v = getLenis()?.velocity ?? 0;
        if (v > 0.5) dir = -1;
        else if (v < -0.5) dir = 1;
        const half = el.scrollWidth / 2;
        x += (0.7 + Math.min(Math.abs(v) * 0.5, 12)) * dir;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        skew += (gsap.utils.clamp(-8, 8, -v * 0.4) - skew) * 0.1;
        el.style.transform = `translate3d(${x}px,0,0) skewX(${skew}deg)`;
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    });
    return () => mm.revert();
  });

  return (
    <div
      aria-label="Cidades atendidas: São Paulo, Porto Alegre, Pelotas, Rio Grande, Chuí, Rocha e Montevideo"
      className="relative z-10 overflow-hidden bg-brand py-5 text-white"
    >
      <div
        ref={track}
        aria-hidden="true"
        className="font-wide flex w-max text-2xl font-extrabold tracking-tight uppercase md:text-4xl"
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
