"use client";
import { Badge } from "./ui/badge";
import Image from "next/image";

import miq from "@/public/miq.jpg";
import ikg from "@/public/ikg.jpg";
import iwy from "@/public/iwy.jpg";
import iux from "@/public/iux.jpg";
import { motion } from "framer-motion";

const fleet = [
  {
    image: miq.src,
    alt: "Volvo FH 480",
    brand: "Volvo",
    title: "Volvo FH 480",
    description:
      "Caminhao de alta gama com tecnologia avancada para transporte seguro e eficiente em rotas internacionais.",
    specs: ["480 HP", "6x2", "GPS"],
  },
  {
    image: ikg.src,
    alt: "Volvo FH 380",
    brand: "Volvo",
    title: "Volvo FH 380",
    description:
      "Segundo Volvo, com 380 HP, adquirido durante a pandemia, ampliando nossa capacidade operacional.",
    specs: ["380 HP", "6x2", "GPS"],
  },
  {
    image: iwy.src,
    alt: "Iveco Stralis 440 Hi-Way",
    brand: "Iveco",
    title: "Iveco Stralis 440 Hi-Way",
    description:
      "Tecnologia italiana de ponta com capacidade para 28 pallets e sider Palmeira de 30 pallets.",
    specs: ["440 HP", "6x2", "28-30 pallets"],
  },
  {
    image: iux.src,
    alt: "Iveco Stralis 440 Hi-Way",
    brand: "Iveco",
    title: "Iveco Stralis 440 Hi-Way",
    description:
      "Caminhao moderno e eficiente, incorporado em 2026, preparado para operacoes internacionais com alto desempenho.",
    specs: ["440 HP", "6x2", "Ate 30 pallets"],
  },
];

export default function NuestraFlota() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="flota" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Nossa Frota
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Quatro caminhoes modernos e confiaveis
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Equipamentos de ultima geracao que garantem o melhor servico no
            transporte internacional de cargas.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {fleet.map((truck, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:border-foreground">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={truck.image}
                    alt={truck.alt}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-foreground text-background">
                      {truck.brand}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {truck.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {truck.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {truck.specs.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
