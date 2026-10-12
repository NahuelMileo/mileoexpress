"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "@/public/logoRedondo.webp";
import { gsap, useGSAP, getLenis, INTRO_DONE } from "@/lib/motion";

const WORD = "MILEO EXPRESS";

/** Intro: la ruta se dibuja, entra el logo y la palabra; luego la cortina sube. Una vez por sesión. */
export default function Intro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const html = document.documentElement;
      const el = root.current;
      if (!el) return;

      const finish = () => {
        try {
          sessionStorage.setItem("mx-intro", "1");
        } catch {}
        html.classList.remove("intro-on");
        html.classList.add("no-intro");
        getLenis()?.start();
        window.dispatchEvent(new Event(INTRO_DONE));
      };

      if (!html.classList.contains("intro-on")) return;

      const tl = gsap.timeline({ onComplete: finish });
      tl.fromTo(
        ".intro-road",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
      )
        .from(
          ".intro-logo",
          { x: "-60vw", rotate: -120, duration: 1, ease: "expo.out" },
          0.25,
        )
        .from(
          ".intro-ch",
          { yPercent: 110, duration: 0.7, stagger: 0.035, ease: "power4.out" },
          0.6,
        )
        .from(".intro-sub", { opacity: 0, letterSpacing: "1.2em", duration: 0.7 }, 0.9)
        .to(".intro-inner", { y: -30, opacity: 0, duration: 0.5, ease: "power2.in" }, "+=0.35")
        .to(
          el,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.95,
            ease: "expo.inOut",
          },
          "-=0.2",
        );

      const skip = () => tl.progress(1);
      el.addEventListener("click", skip);
      return () => el.removeEventListener("click", skip);
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="intro fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-asphalt text-white [clip-path:inset(0%_0%_0%_0%)]"
    >
      <div className="intro-inner flex flex-col items-center gap-6 px-6">
        <Image
          src={logo}
          alt=""
          width={120}
          height={120}
          priority
          className="intro-logo h-24 w-24 rounded-full md:h-28 md:w-28"
        />
        <p className="font-wide flex overflow-hidden text-4xl font-extrabold tracking-tight md:text-7xl">
          {WORD.split("").map((ch, i) => (
            <span key={i} className="intro-ch inline-block whitespace-pre">
              {ch}
            </span>
          ))}
        </p>
        <p className="intro-sub text-xs font-semibold tracking-[0.6em] text-white/60 uppercase md:text-sm">
          Transportes · desde 2000
        </p>
      </div>
      <div className="intro-road absolute inset-x-0 bottom-[22%] h-[3px] origin-left bg-[repeating-linear-gradient(90deg,var(--brand-bright)_0_40px,transparent_40px_70px)]" />
      <p className="absolute bottom-6 text-[11px] font-semibold tracking-[0.3em] text-white/40 uppercase">
        Toque para entrar
      </p>
    </div>
  );
}
