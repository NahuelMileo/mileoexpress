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
import { motion } from "framer-motion";
import iux from "../public/iux.jpg";

export default function NuestraHistoria() {
  const timeline = [
    {
      titulo: "Os primeiros passos",
      año: "2000",
      descripcion:
        "Nossa jornada começou há 25 anos, com um clássico Scania 111, ano 1978, acoplado a uma carreta Randon graneleira de 1989. Com determinação, dedicação e muito trabalho, demos os primeiros passos no transporte de cargas. Hoje, com um quarto de século de experiência, a Mileo Express é referência em transporte internacional, conectando Brasil e Uruguai com a mesma paixão e responsabilidade que nos movem desde o primeiro quilômetro.",
      imagen: scania111,
    },
    {
      titulo: "O primeiro upgrade",
      año: "2005",
      descripcion:
        "Com o crescimento da empresa, nos despedimos do Scania 111 e investimos em um Mercedes-Benz 1935, ano 1993, acoplado a uma carreta canguru de 14 metros. Essa aquisição representou um marco na nossa trajetória, aumentando significativamente a cubagem e a capacidade de peso transportado. Sempre com foco na rota São Paulo, consolidamos um serviço ainda mais confiável e eficiente, fortalecendo nossa presença no setor de transporte de cargas.",
      imagen: mercedes1935,
    },
    {
      titulo: "Expansão e diversificação",
      año: "2014",
      descripcion:
        "Dando continuidade ao crescimento da Mileo Express, incorporamos um Scania 112 HW 360 hp 4x2, ano 1991, equipado com uma carreta canguru com assoalho de chapa, ano 2007. Em 2014, ampliamos ainda mais nossa atuação com a aquisição de uma caçamba 0 km, destinada ao transporte de saibro para operações em um parque eólico. Até 2016, consolidamos uma frota versátil e preparada para atender diferentes demandas logísticas, reforçando nosso compromisso com eficiência e inovação no transporte de cargas.",
      imagen: scania112,
    },
    {
      titulo: "Fortalecimento com International",
      año: "2016",
      descripcion:
        "Para atender novas demandas de carga pesada e rotas de longa distância, reforçamos nossa frota com um poderoso International 9800, 405 hp, configuração 6x4, equipado com caçamba. Sua potência e robustez elevaram nosso padrão operacional, permitindo otimizar entregas em terrenos desafiadores e garantir pontualidade até mesmo em trajetos internacionais. Com este investimento, a Mileo Express consolidou sua presença no transporte de grande porte, oferecendo soluções logísticas cada vez mais completas e eficientes.",
      imagen: international,
    },
    {
      titulo: "Chegada da Volvo e modernização",
      año: "2018",
      descripcion:
        "Demos um grande salto tecnológico com a chegada do nosso primeiro Volvo FH 380cv, configuração 6x2. Junto a ele, incorporamos também nosso primeiro Sider Randon, ano 2008, com capacidade para 30 pallets. Essa renovação de frota marcou uma nova era para a Mileo Express, trazendo mais eficiência, segurança e agilidade para o transporte de cargas, e consolidando nosso compromisso em oferecer soluções logísticas modernas e confiáveis.",
      imagen: volvo380,
    },
    {
      titulo: "Expansão da frota",
      año: "2021",
      descripcion:
        "Ampliamos nossa frota com a aquisição de um Volvo FH 480, passando a operar com dois caminhões simultaneamente e elevando nossa capacidade de atendimento. Durante a pandemia, reforçamos ainda mais nossas operações com a chegada de um segundo Volvo FH 480 6x2, o que possibilitou expandir nossas rotas para Argentina, Uruguai e Brasil em parceria com outras empresas do setor. Esse período marcou uma fase estratégica de crescimento e colaboração, consolidando a Mileo Express como uma transportadora preparada para enfrentar desafios e atender clientes em todo o Mercosul.",
      imagen: volvo480,
    },
    {
      titulo: "Reforço estratégico com novo Sider Randon",
      año: "2024",
      descripcion:
        "Em outubro de 2024, recebemos nosso segundo Sider Randon, ano 2014, reforçando a frota com mais capacidade e versatilidade para atender às crescentes demandas logísticas. Essa aquisição faz parte do compromisso da Mileo Express em manter uma estrutura moderna e eficiente para o transporte de cargas internacionais.",
      imagen: randonN,
    },
    {
      titulo: "Incorporação do Iveco Stralis 440",
      año: "2024",
      descripcion:
        "Em Decembro, completamos nossa frota com o Iveco Stralis 440 6x2, ano 2014. Este caminhão moderno reforça nosso compromisso com a excelência e eficiência no transporte de cargas internacionais.",
      imagen: iveco,
    },
    {
      titulo: "Expansão com Sider Palmeira",
      año: "2025",
      descripcion:
        "Em maio de 2025, reforçamos ainda mais nossa estrutura com a chegada de um Sider Palmeira com capacidade para 30 pallets. Essa aquisição representa mais um passo na expansão e modernização da frota Mileo Express, garantindo maior eficiência, agilidade e segurança no transporte internacional de cargas.",
      imagen: palmeira,
    },
    {
  titulo: "Novo reforço na frota",
  año: "2026",
  destacado: true,
  descripcion:
    "Em março de 2026, demos mais um passo importante na expansão da Mileo Express com a aquisição de um Iveco Stralis 440 Hi-Way 6x2, ano 2014. Este caminhão moderno e eficiente reforça nossa capacidade operacional, garantindo maior desempenho nas rotas internacionais entre Brasil e Uruguai. Seguimos investindo em uma frota cada vez mais robusta, confiável e preparada para atender às demandas do mercado com excelência.",
  imagen: iux,
},
  ];
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nossa História Familiar
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Tudo começou em 2000, quando nosso fundador deu os primeiros passos
            no transporte de cargas. Com muita determinação e trabalho árduo,
            transformamos um sonho familiar em uma empresa sólida que hoje
            acumula 25 anos de experiência entre Brasil e Uruguai.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute top-0 bottom-0 left-8 w-0.5 bg-red-200"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            ></motion.div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute left-6 h-4 w-4 rounded-full border-4 border-white bg-red-900 shadow"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  ></motion.div>
                  <div className="ml-16">
                    <div className="grid items-center gap-6 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <motion.div
                          className={`rounded-xl p-6 ${item.destacado ? "border-2 border-red-200 bg-red-50" : "bg-gray-50"}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <h3
                              className={`text-lg font-semibold ${item.destacado ? "text-red-900" : "text-gray-900"}`}
                            >
                              {item.titulo}
                            </h3>
                            {item.año && (
                              <Badge
                                variant="outline"
                                className={`text-xs ${item.destacado ? "bg-red-900 text-white" : ""}`}
                              >
                                {item.año}
                              </Badge>
                            )}
                          </div>
                          <p
                            className={`mb-3 ${item.destacado ? "text-red-800" : "text-gray-600"}`}
                          >
                            {item.descripcion}
                          </p>
                        </motion.div>
                      </div>
                      <div className="lg:col-span-1">
                        {item.imagen && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          >
                            <Image
                              src={item.imagen || "/placeholder.svg"}
                              alt={item.titulo}
                              width={300}
                              height={200}
                              className={`h-48 w-full rounded-lg object-cover shadow-md ${item.destacado ? "border-2 border-red-200" : ""}`}
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
