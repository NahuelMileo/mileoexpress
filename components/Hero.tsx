"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import hero from "@/public/hero.webp";
import heroMobile from "@/public/hero-mobile.webp";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK, afterIntro } from "@/lib/motion";

const stats = [
  { value: 25, prefix: "", suffix: "+", label: "Anos na estrada" },
  { value: 4, prefix: "", suffix: "", label: "Caminhões próprios" },
  { value: 50, prefix: "+", suffix: "k", label: "Toneladas transportadas" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
        tl.fromTo(".hero-bg", { scale: 1.25 }, { scale: 1.06, duration: 2.6, ease: "expo.out" })
          .from(".hero-title .wi", { yPercent: 115, duration: 1.1, stagger: 0.05 }, 0.15)
          .from(".hero-in", { y: 28, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.5)
          .from(".hero-stat", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.8);

        root.current?.querySelectorAll<HTMLElement>("[data-stat]").forEach((el, i) => {
          const s = stats[i];
          const obj = { v: 0 };
          tl.to(
            obj,
            {
              v: s.value,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${s.prefix}${Math.round(obj.v)}${s.suffix}`;
              },
            },
            0.9,
          );
        });

        const cancel = afterIntro(() => tl.play());

        // Al bajar: la foto se hunde y el texto se despide
        gsap.to(".hero-bg-wrap", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-content", {
          yPercent: -12,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        return cancel;
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="inicio"
      ref={root}
      className="relative flex min-h-svh items-end overflow-hidden bg-asphalt text-white"
    >
      <div className="hero-bg-wrap absolute inset-0">
        <div className="hero-bg absolute inset-0">
          <Image
            src={hero}
            alt="Volvo FH da Mileo Express à noite em um posto na estrada"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          <Image
            src={heroMobile}
            alt="Volvo FH da Mileo Express à noite em um posto na estrada"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[30%_center] md:hidden"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-black/20 to-black/40" />
      </div>

      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-14 lg:px-8 lg:pb-20">
        <p className="hero-in mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
          <span className="h-px w-10 bg-brand-bright" />
          Brasil · Uruguai · Argentina
        </p>

        <h1 className="hero-title font-wide max-w-5xl text-[clamp(2.6rem,7.5vw,6.6rem)] leading-[0.95] font-extrabold tracking-tight">
          <Words text="Conectando Brasil" />{" "}
          <span className="text-brand-bright">
            <Words text="e Uruguai" />
          </span>{" "}
          <Words text="desde 2000" />
        </h1>

        <p className="hero-in mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
          Empresa familiar especializada na rota São Paulo–Montevideo. Você fala
          direto com os donos, sem intermediários, e sua carga viaja com quem
          conhece cada quilômetro do caminho.
        </p>

        <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#sobre-nos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-asphalt"
          >
            Conheça nossa história
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 md:max-w-3xl md:gap-10">
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat">
              <span
                data-stat={i}
                className="font-wide block text-3xl font-extrabold tabular-nums md:text-5xl"
              >
                {s.prefix}
                {s.value}
                {s.suffix}
              </span>
              <span className="mt-2 block text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase md:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre-nos"
        aria-label="Rolar para a história"
        className="absolute right-6 bottom-8 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white lg:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
