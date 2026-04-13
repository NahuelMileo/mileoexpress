"use client";

import { Badge } from "./ui/badge";
import Image from "next/image";
import scania111 from "../public/111.jpg";
import mercedes1935 from "../public/1935.jpg";
import scania112 from "../public/112.jpg";
import international from "../public/international.jpg";
import volvo380 from "../public/ikg.jpg";
import volvo480 from "../public/miq.jpg";
import iveco from "../public/iwy.jpg";
import randonN from "../public/randonN.jpg";
import palmeira from "../public/palmeira.jpg";
import iux from "../public/iux.jpg";
import { motion } from "framer-motion";

export default function NuestraHistoria() {
  const timeline = [
    {
      titulo: "Os primeiros passos",
      año: "2000",
      descripcion:
        "Nossa jornada comecou ha 25 anos, com um classico Scania 111, ano 1978, acoplado a uma carreta Randon graneleira de 1989.",
      imagen: scania111,
    },
    {
      titulo: "O primeiro upgrade",
      año: "2005",
      descripcion:
        "Investimos em um Mercedes-Benz 1935, ano 1993, acoplado a uma carreta canguru de 14 metros, aumentando significativamente nossa capacidade.",
      imagen: mercedes1935,
    },
    {
      titulo: "Expansao e diversificacao",
      año: "2014",
      descripcion:
        "Incorporamos um Scania 112 HW 360 hp 4x2, ano 1991, e ampliamos atuacao com transporte para parques eolicos.",
      imagen: scania112,
    },
    {
      titulo: "Fortalecimento com International",
      año: "2016",
      descripcion:
        "Reforcamos nossa frota com um International 9800, 405 hp, configuracao 6x4, elevando nosso padrao operacional.",
      imagen: international,
    },
    {
      titulo: "Chegada da Volvo",
      año: "2018",
      descripcion:
        "Grande salto tecnologico com a chegada do primeiro Volvo FH 380cv, configuracao 6x2, junto ao primeiro Sider Randon.",
      imagen: volvo380,
    },
    {
      titulo: "Expansao da frota",
      año: "2021",
      descripcion:
        "Ampliamos com Volvo FH 480, passando a operar com dois caminhoes e expandindo rotas para Argentina, Uruguai e Brasil.",
      imagen: volvo480,
    },
    {
      titulo: "Novo Sider Randon",
      año: "2024",
      descripcion:
        "Recebemos nosso segundo Sider Randon, ano 2014, reforcando capacidade e versatilidade para demandas logisticas.",
      imagen: randonN,
    },
    {
      titulo: "Iveco Stralis 440",
      año: "2024",
      descripcion:
        "Completamos nossa frota com o Iveco Stralis 440 6x2, ano 2014, reforcando nosso compromisso com excelencia.",
      imagen: iveco,
    },
    {
      titulo: "Sider Palmeira",
      año: "2025",
      descripcion:
        "Chegada de um Sider Palmeira com capacidade para 30 pallets, garantindo maior eficiencia no transporte internacional.",
      imagen: palmeira,
    },
    {
      titulo: "Novo reforco na frota",
      año: "2026",
      destacado: true,
      descripcion:
        "Aquisicao de mais um Iveco Stralis 400 Hi-Way 6x2, reforcando nossa capacidade operacional nas rotas internacionais.",
      imagen: iux,
    },
  ];

  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
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
            Nossa Historia
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Uma jornada familiar de 25 anos no transporte de cargas
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tudo comecou em 2000, quando nosso fundador deu os primeiros passos
            no transporte de cargas. Com determinacao e trabalho arduo,
            transformamos um sonho familiar em uma empresa solida.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 hidden w-px bg-border md:left-1/2 md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col gap-8 md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-[-8px] top-0 hidden h-4 w-4 rounded-full border-4 border-background bg-foreground md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                />

                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                >
                  <motion.div
                    className={`rounded-lg p-6 ${item.destacado
                        ? "border border-foreground bg-foreground text-background"
                        : "bg-muted"
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      <Badge
                        variant={item.destacado ? "secondary" : "outline"}
                        className={`text-xs ${item.destacado ? "bg-background text-foreground" : ""
                          }`}
                      >
                        {item.año}
                      </Badge>
                      <h3
                        className={`text-lg font-semibold ${item.destacado ? "text-background" : "text-foreground"
                          }`}
                      >
                        {item.titulo}
                      </h3>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${item.destacado
                          ? "text-background/80"
                          : "text-muted-foreground"
                        }`}
                    >
                      {item.descripcion}
                    </p>
                  </motion.div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    className="overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={item.imagen}
                      alt={item.titulo}
                      width={500}
                      height={300}
                      className="h-64 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
