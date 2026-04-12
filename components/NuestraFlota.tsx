"use client";
import { Card, CardContent } from "./ui/card";
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
      "Caminhão de alta gama com tecnologia avançada para transporte seguro e eficiente em rotas internacionais.",
    specs: ["480 HP", "6x2", "GPS"],
  },
  {
    image: ikg.src,
    alt: "Volvo FH 380",
    brand: "Volvo",
    title: "Volvo FH 380",
    description:
      "Segundo Volvo, este com 380 HP adquirido durante a pandemia, ampliando nossa capacidade operacional.",
    specs: ["480 HP", "6x2", "GPS"],
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
    "Caminhão moderno e eficiente, incorporado à frota em 2026, preparado para operações internacionais com alto desempenho e confiabilidade.",
  specs: ["440 HP", "6x2", "Até 30 pallets"],
},
];

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section id="flota" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nossa Frota Atual
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Três caminhões modernos e confiáveis que garantem o melhor serviço
            no transporte internacional de cargas.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {fleet.map((truck, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div variants={scaleOnHover}>
                <Card className="overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={truck.image || "/placeholder.svg"}
                        alt={truck.brand}
                        fill
                        className="object-cover object-center"
                      />
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-900 text-white">
                        {truck.brand}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 lg:text-2xl">
                      {truck.brand}
                    </h3>
                    <p className="mb-4 text-gray-600">{truck.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {truck.specs.map((spec, specIndex) => (
                        <span key={specIndex}>• {spec}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
