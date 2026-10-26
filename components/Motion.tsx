"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Movimiento moderado: aparición al bajar, títulos línea por línea, números que cuentan
 * y la ruta que se dibuja. Sin JS o con prefers-reduced-motion no hace nada y el contenido
 * queda completo (los estilos de animación dependen de html.motion).
 * También registra los clics en elementos con data-track (Vercel Analytics).
 */
export default function Motion({ locale }: { locale: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (el?.dataset.track) track(el.dataset.track);
    };
    document.addEventListener("click", onClick);
    const cleanups: (() => void)[] = [() => document.removeEventListener("click", onClick)];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cleanups.forEach((fn) => fn());
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-lines], [data-chat], [data-count], [data-route]"),
    );
    // Lo que ya está en pantalla al hidratar no se oculta: evita el parpadeo
    const vh = window.innerHeight;
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in", "was-visible");
    });

    const root = document.documentElement;
    root.classList.add("motion");
    cleanups.push(() => root.classList.remove("motion"));
    const fmt = new Intl.NumberFormat(locale);

    const count = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = clamp((now - t0) / 1400);
        el.textContent = fmt.format(Math.round(target * easeOut(t)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Ruta: la línea, el camión y las paradas siguen un progreso 0–1
    const routes = Array.from(document.querySelectorAll<HTMLElement>("[data-route]")).map((el) => {
      const path = el.querySelector<SVGPathElement>(".route-line")!;
      const truck = el.querySelector<SVGGElement>(".route-truck");
      const km = el.querySelector<HTMLElement>("[data-km]");
      const stopEls = Array.from(el.querySelectorAll<SVGGElement>(".route-stop"));
      const len = path.getTotalLength();
      const at = stopEls.map((s) => {
        const sx = Number(s.dataset.x);
        const sy = Number(s.dataset.y);
        let best = 0;
        let bestD = Infinity;
        for (let i = 0; i <= 400; i++) {
          const p = path.getPointAtLength((i / 400) * len);
          const d = (p.x - sx) ** 2 + (p.y - sy) ** 2;
          if (d < bestD) [bestD, best] = [d, i / 400];
        }
        return best;
      });
      const total = Number(km?.dataset.km ?? 0);
      const render = (p: number) => {
        el.style.setProperty("--p", String(p));
        const pt = path.getPointAtLength(p * len);
        truck?.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        at.forEach((a, i) => stopEls[i].classList.toggle("is-on", p >= a - 0.005));
        if (km) km.textContent = fmt.format(Math.round((p * total) / 10) * 10);
      };
      render(el.classList.contains("was-visible") ? 1 : 0);
      return { el, render };
    });

    const play = (render: (p: number) => void) => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = clamp((now - t0 - 200) / 2600);
        render(easeOut(t));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) count(el);
          const route = routes.find((r) => r.el === el);
          if (route) play(route.render);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    targets.filter((el) => !el.classList.contains("was-visible")).forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    return () => cleanups.reverse().forEach((fn) => fn());
  }, [locale]);

  return null;
}
