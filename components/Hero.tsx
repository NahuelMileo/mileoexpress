"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import hero from "@/public/hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const stats = [
    { number: "25+", label: "Anos de Experiencia" },
    { number: "4", label: "Caminhoes na Frota" },
    { number: "+50k", label: "Toneladas Transportadas" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Transporte Internacional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Small Text Above Heading */}
            <motion.p
              className="text-sm font-medium tracking-widest text-white/60 uppercase"
              variants={fadeInUp}
            >
              Transporte Internacional Brasil - Uruguai
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl leading-[1.1] font-light tracking-tight text-white md:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Logistica que{" "}
              <span className="font-serif italic">move seu negocio</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
              variants={fadeInUp}
            >
              Mais de duas decadas conectando Brasil e Uruguai com transporte
              seguro, pontual e confiavel para cargas de todos os tipos.
            </motion.p>

            {/* CTA Buttons - Lower position with full round */}
            <motion.div
              className="flex flex-col gap-4 pt-8 sm:flex-row"
              variants={fadeInUp}
            >
              <a href="#contacto">
                <Button
                  size="lg"
                  className="group rounded-full bg-white px-8 py-6 text-base font-medium text-black transition-all hover:bg-white/90"
                >
                  Solicitar Orcamento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#nosotros">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-transparent px-8 py-6 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Conheca Nossa Historia
                </Button>
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeInUp} className="pt-8">
              <hr className="border-white/20" />
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="flex flex-wrap gap-12 pt-6"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl font-bold text-white md:text-5xl">
                    {stat.number}
                  </span>
                  <span className="mt-1 text-xs font-medium tracking-wide text-white/50 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
