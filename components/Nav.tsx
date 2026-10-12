"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/public/logoRedondo.webp";
import { gsap, getLenis } from "@/lib/motion";

const navItems = [
  { href: "#sobre-nos", label: "Nossa História" },
  { href: "#rotas", label: "Rotas" },
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let hidden = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 80);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      const shouldHide = y > lastY && y > 400;
      if (shouldHide !== hidden && navRef.current) {
        hidden = shouldHide;
        gsap.to(navRef.current, {
          yPercent: hidden ? -100 : 0,
          duration: 0.45,
          ease: "power3.out",
        });
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (isOpen) lenis?.stop();
    else lenis?.start();
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-black/10 bg-white/90 text-asphalt backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Mileo Express, início">
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="font-wide text-sm font-extrabold tracking-tight uppercase">
            Mileo Express
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-opacity ${
                solid ? "opacity-70 hover:opacity-100" : "opacity-80 hover:opacity-100"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-bright transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            Pedir orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="rounded-full p-2 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pt-2 pb-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-wide border-b border-black/5 py-4 text-2xl font-bold text-asphalt"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-brand px-5 py-4 text-center font-semibold text-white"
            >
              Pedir orçamento
            </a>
          </div>
        </div>
      </div>

      <span
        ref={barRef}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-brand-bright"
        style={{ transform: "scaleX(0)" }}
      />
    </nav>
  );
}
