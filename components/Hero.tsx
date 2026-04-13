"use client";

import { ArrowRight, Package, Clock, Shield } from "lucide-react";
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
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
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

  const features = [
    { icon: Package, text: "Cargas Seguras" },
    { icon: Clock, text: "Entregas Pontuais" },
    { icon: Shield, text: "25+ Anos" },
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
            className="max-w-3xl space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wider text-white/90 uppercase backdrop-blur-sm">
                Transporte Internacional Brasil - Uruguai
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl leading-[1.1] font-light tracking-tight text-white md:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Logistica que{" "}
              <span className="font-semibold">move seu negocio</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
              variants={fadeInUp}
            >
              Mais de duas decadas conectando Brasil e Uruguai com transporte
              seguro, pontual e confiavel para cargas de todos os tipos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 pt-4 sm:flex-row"
              variants={fadeInUp}
            >
              <a href="#contacto">
                <Button
                  size="lg"
                  className="group bg-white px-8 py-6 text-base font-medium text-black transition-all hover:bg-white/90"
                >
                  Solicitar Orcamento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#nosotros">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent px-8 py-6 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Conheca Nossa Historia
                </Button>
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-6 pt-8"
              variants={fadeInUp}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/60"
                >
                  <feature.icon className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wide">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex h-14 w-8 items-start justify-center rounded-full border border-white/30 p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
