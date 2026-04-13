"use client";
import { Shield, Clock, Users, Package, Thermometer, Truck } from "lucide-react";
import carga from "@/public/carga2.jpg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Seguranca Garantida",
    description:
      "Todas as cargas viajam com seguros completos e rastreamento em tempo real.",
    icon: Shield,
  },
  {
    title: "Pontualidade",
    description:
      "Cumprimos prazos acordados gracas a experiencia em rotas internacionais.",
    icon: Clock,
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Empresa familiar com atendimento direto e personalizado a cada cliente.",
    icon: Users,
  },
];

const cargaItems = [
  {
    title: "Carga Geral",
    description: "Mercadoria paletizada, caixas, equipamentos industriais",
    icon: Package,
  },
  {
    title: "Carga Refrigerada",
    description: "Produtos que requerem controle de temperatura",
    icon: Thermometer,
  },
  {
    title: "Carga Especial",
    description: "Maquinas pesadas, equipamentos sobredimensionados",
    icon: Truck,
  },
];

export default function Servicios() {
  const fadeInUp : Variants = {
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
    <section id="servicios" className="bg-muted py-24 lg:py-32">
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
            Nossos Servicos
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Transportamos todo tipo de carga internacional
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Com compromisso, experiencia e seguranca que nos caracterizam ha
            mais de duas decadas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mb-24 grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="h-full rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:border-foreground">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-foreground">
                  <service.icon className="h-6 w-6 text-foreground transition-colors group-hover:text-background" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cargo Types Section */}
        <motion.div
          className="overflow-hidden rounded-lg border border-border bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
                Todo Tipo de Cargas
              </h3>
              <div className="space-y-6">
                {cargaItems.map((cargo, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                      <cargo.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {cargo.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cargo.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src={carga}
                alt="Servicios de carga"
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
