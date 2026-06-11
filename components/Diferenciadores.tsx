"use client";
import { Users, Navigation, MessageCircle, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

const items = [
  {
    icon: Users,
    title: "Atendimento direto com os donos",
    description:
      "Fale diretamente com quem decide. Sem call center, sem intermediários, sem burocracia.",
  },
  {
    icon: Navigation,
    title: "Especialistas na rota Brasil-Uruguai",
    description:
      "Mais de 25 anos operando a mesma rota. Conhecemos cada detalhe do caminho, da fronteira e dos processos aduaneiros.",
  },
  {
    icon: MessageCircle,
    title: "Rastreamento via WhatsApp",
    description:
      "Acompanhe sua carga em tempo real durante todo o trajeto. Comunicação direta, sem intermediários.",
  },
  {
    icon: Award,
    title: "Empresa familiar, compromisso real",
    description:
      "Sua carga importa para nós como se fosse nossa. Mais de 30 empresas confiaram na Mileo Express só em 2026.",
  },
];

export default function Diferenciadores() {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-background/50">
            Por que nos escolher
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-background lg:text-5xl">
            O que nos diferencia das demais transportadoras
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex gap-5 rounded-lg border border-background/10 p-6 transition-colors hover:border-background/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/10">
                <item.icon className="h-5 w-5 text-background" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-background">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-background/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
