"use client";

import { Badge } from "./ui/badge";
import Image from "next/image";
import scania111 from "../public/111.webp";
import mercedes1935 from "../public/1935.webp";
import scania112 from "../public/112.webp";
import international from "../public/international.webp";
import volvo380 from "../public/ikg.webp";
import volvo480 from "../public/miq.webp";
import iveco from "../public/iwy.webp";
import randonN from "../public/randonN.webp";
import palmeira from "../public/palmeira.webp";
import iux from "../public/iux.webp";
import sidernuevo from "../public/sidernuevo.webp";
import { motion } from "framer-motion";

export default function NuestraHistoria() {
  const timeline = [
    {
      titulo: "Os primeiros passos",
      año: "2000",
      descripcion:
        "Nossa jornada começou há 25 anos, com um clássico Scania 111, ano 1978, acoplado a uma carreta Randon graneleira de 1989.",
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
      titulo: "Expansão e diversificação",
      año: "2014",
      descripcion:
        "Incorporamos um Scania 112 HW 360 hp 4x2, ano 1991, e ampliamos atuação com transporte para parques eólicos.",
      imagen: scania112,
    },
    {
      titulo: "Fortalecimento com International",
      año: "2016",
      descripcion:
        "Reforçamos nossa frota com um International 9800, 405 hp, configuração 6x4, elevando nosso padrão operacional.",
      imagen: international,
    },
    {
      titulo: "Chegada da Volvo",
      año: "2018",
      descripcion:
        "Grande salto tecnológico com a chegada do primeiro Volvo FH 380cv, configuração 6x2, junto ao primeiro Sider Randon.",
      imagen: volvo380,
    },
    {
      titulo: "Expansão da frota",
      año: "2021",
      descripcion:
        "Ampliamos com Volvo FH 480, passando a operar com dois caminhões e expandindo rotas para Argentina, Uruguai e Brasil.",
      imagen: volvo480,
    },
    {
      titulo: "Novo Sider Randon",
      año: "2024",
      descripcion:
        "Recebemos nosso segundo Sider Randon, ano 2014, reforçando capacidade e versatilidade para demandas logísticas.",
      imagen: randonN,
    },
    {
      titulo: "Iveco Stralis 440",
      año: "2024",
      descripcion:
        "Completamos nossa frota com o Iveco Stralis 440 6x2, ano 2014, reforçando nosso compromisso com excelência.",
      imagen: iveco,
    },
    {
      titulo: "Sider Palmeira",
      año: "2025",
      descripcion:
        "Chegada de um Sider Palmeira com capacidade para 30 pallets, garantindo maior eficiência no transporte internacional.",
      imagen: palmeira,
    },
    {
      titulo: "Novo reforço na frota",
      año: "2026",
      descripcion:
        "Aquisição de mais um Iveco Stralis 400 Hi-Way 6x2, reforçando nossa capacidade operacional nas rotas internacionais.",
      imagen: iux,
    },
    {
      titulo: "Novo Sider 0 km",
      año: "2026",
      destacado: true,
      descripcion:
        "Em maio de 2026, incorporamos nosso primeiro sider zero quilômetro, marcando um novo patamar de qualidade e modernização da frota Mileo Express.",
      imagen: sidernuevo,
    },
  ];

  return (
    <section id="sobre-nos" className="bg-background py-24 lg:py-32">
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
            Nossa História
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Uma jornada familiar de 25 anos no transporte de cargas
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tudo começou em 2000, quando nosso fundador deu os primeiros passos
            no transporte de cargas. Com determinação e trabalho árduo,
            transformamos um sonho familiar em uma empresa sólida.
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
                      className="h-64 w-full object-cover"
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
