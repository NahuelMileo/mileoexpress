"use client";
import { Shield, Clock, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import carga from "@/public/carga2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. Íconos de servicios
const services = [
  {
    title: "Segurança Garantida",
    description:
      "Todas as nossas cargas viajam com seguros completos e sistemas de rastreamento em tempo real.",
    icon: Shield,
  },
  {
    title: "Pontualidade",
    description:
      "Cumprimos os prazos acordados graças à nossa experiência em rotas internacionais.",
    icon: Clock,
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Somos uma empresa familiar que oferece atendimento direto e personalizado a cada cliente.",
    icon: Users,
  },
];

// 2. Tipos de carga
const cargaItems = [
  {
    title: "Carga Geral",
    description: "Mercadoria paletizada, caixas, equipamentos industriais",
  },
  {
    title: "Carga Refrigerada",
    description: "Produtos que requerem controle de temperatura",
  },
  {
    title: "Carga Especial",
    description: "Máquinas pesadas, equipamentos sobredimensionados",
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

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
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
    <section id="servicios" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Transportamos todo tipo de carga internacional com o compromisso,
            experiência e segurança que nos caracterizam
          </p>
        </motion.div>

        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div variants={scaleOnHover}>
                <Card
                  key={index}
                  className="border-0 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                      <service.icon className="h-8 w-8 text-red-800" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white p-8 shadow-lg lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900 lg:text-3xl">
                Todo Tipo de Cargas
              </h3>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {cargaItems.map((cargo, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    variants={fadeInLeft}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="mt-1 rounded-full bg-red-100 p-1">
                      <div className="h-2 w-2 rounded-full bg-red-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {cargo.title}
                      </h4>
                      <p className="text-gray-600">{cargo.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={carga}
                alt="Servicios de carga"
                width={700}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
