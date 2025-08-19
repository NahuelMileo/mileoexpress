"use client";
import { MessageCircle, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import hero from "@/public/hero.jpg";
import { motion } from "framer-motion";

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

  const stats = [
    { valor: "25", descripcion: "Anos de experiência" },
    { valor: "3", descripcion: "Caminhões na frota" },
    { valor: "100%", descripcion: "Cargas seguras" },
  ];

  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-red-50 to-gray-100 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.div variants={fadeInUp}>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  Transporte Internacional
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl leading-tight font-bold text-neutral-900 lg:text-6xl"
                variants={fadeInUp}
              >
                Conectamos{" "}
                <span className="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-transparent">
                  Brasil
                </span>{" "}
                a{" "}
                <span className="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-transparent">
                  Uruguai
                </span>
              </motion.h1>
              <motion.p
                className="text-xl leading-relaxed text-gray-600"
                variants={fadeInUp}
              >
                Transporte seguro e confiável de todo tipo de cargas entre
                Uruguai e Brasil. Mais de uma década de experiência em logística
                internacional.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contacto">
                  <Button
                    size="lg"
                    className="cursor-pointer bg-gradient-to-b from-red-700 to-red-800 text-white hover:bg-red-800"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Peça seu orçamento
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#nosotros">
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer border-gray-300 bg-transparent"
                  >
                    Saiba mais
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="text-2xl font-bold text-red-900"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.valor}
                  </motion.div>
                  <div className="text-sm text-gray-600">
                    {stat.descripcion}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={hero}
                alt="Volvo FH 480"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-green-100 p-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rota ativa</div>
                  <div className="text-sm text-gray-600">
                    Montevidéu → São Paulo
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
