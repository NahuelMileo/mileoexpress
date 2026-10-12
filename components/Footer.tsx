"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "@/public/logoRedondo.webp";
import { WHATSAPP_DISPLAY } from "@/lib/contact";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

const links = [
  { href: "#inicio", text: "Início" },
  { href: "#sobre-nos", text: "Nossa história" },
  { href: "#rotas", text: "Rotas" },
  { href: "#servicos", text: "Serviços" },
  { href: "#frota", text: "Frota" },
  { href: "#contato", text: "Contato" },
];

const WORD = "MILEO EXPRESS";

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".giant-ch", {
          yPercent: 100,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="overflow-hidden bg-asphalt pt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <Image src={logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
            <span className="font-wide font-extrabold tracking-tight uppercase">Mileo Express</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Transporte internacional entre Brasil e Uruguai. Uma empresa familiar
            na estrada desde 2000.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">
            Navegação
          </h4>
          <ul className="grid grid-cols-2 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>{WHATSAPP_DISPLAY}</li>
            <li>contato@mileoexpress.com</li>
            <li>Chuy, Uruguai</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-white/40 lg:px-8">
        © {new Date().getFullYear()} Mileo Express Transportes. Todos os direitos reservados.
      </p>

      <p
        aria-hidden="true"
        className="font-wide mt-8 flex justify-center overflow-hidden px-2 pb-[1vw] text-[8.4vw] leading-[0.95] font-extrabold tracking-tight whitespace-nowrap text-brand select-none"
      >
        {WORD.split("").map((ch, i) => (
          <span key={i} className="giant-ch inline-block whitespace-pre">
            {ch}
          </span>
        ))}
      </p>
    </footer>
  );
}
