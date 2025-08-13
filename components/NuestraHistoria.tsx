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
import { motion } from "framer-motion";

export default function NuestraHistoria() {
  const timeline = [
    {
      titulo: "Os primeiros passos",
      año: "2000",
      descripcion:
        "Tudo começou com um Scania 111 ano 1978, acoplado a uma carreta Randon graneleira. Com muita determinação e trabalho árduo, demos os primeiros passos no transporte de cargas.",
      imagen: scania111,
    },
    {
      titulo: "O primeiro upgrade",
      año: "2005",
      descripcion:
        "Com o crescimento da empresa, vendemos o Scania 111 e adquirimos um Mercedes Benz 1935 ano 1993, equipado com uma carreta de 14 metros. Este passo aumentou nossa capacidade e confiabilidade do serviço, sempre focados na linha São Paulo.",
      imagen: mercedes1935,
    },
    {
      titulo: "Expansão e diversificação",
      año: "2014",
      descripcion:
        "Incorporamos um Scania 112 HW 360 hp 4x2 ano 1991, equipado com uma carreta Canguru com assoalho de chapa ano 2007. Em 2014, adquirimos uma caçamba 0 km para operação de transporte de saibro em um parque eólico.",
      imagen: scania112,
    },
    {
      titulo: "Fortalecimento com International",
      año: "2016",
      descripcion:
        "Para atender novas demandas de carga pesada e rotas mais longas, somamos à nossa frota um International 9800 de 405 hp, configuração 6x4, com carreta graneleira. Sua potência e robustez nos permitiram otimizar operações em terrenos exigentes e garantir entregas pontuais mesmo em trajetos internacionais. Este passo consolidou a presença da Mileo Express no transporte de grande porte.",
      imagen: international,
    },
    {
      titulo: "Chegada da Volvo e modernização",
      año: "2018",
      descripcion:
        "Demos um importante passo tecnológico com a aquisição do nosso primeiro Volvo FH 380, 380 cv, configuração 6x2. Junto com ele, incorporamos nosso primeiro sider Randon ano 2008, com capacidade para 30 pallets. Essa modernização representou uma nova fase na Mileo Express.",
      imagen: volvo380,
    },
    {
      titulo: "Expansão da frota",
      año: "2021",
      descripcion:
        "Ampliamos nossa frota com a aquisição de um Volvo FH 480, chegando a operar com dois caminhões simultaneamente. Durante a pandemia, adquirimos outro Volvo FH 480 6x2, expandindo nossas rotas para Argentina, Uruguai e Brasil em colaboração com outras empresas.",
      imagen: volvo480,
    },
    {
      titulo: "Flota atual",
      año: "2024",
      destacado: true,
      descripcion:
        "Completamos nossa frota atual com um Iveco Stralis 440 6x2 ano 2014, com capacidade para 28 pallets, e um sider Palmeira de 30 pallets ano 2019. Caminhões modernos que reforçam nosso compromisso com a excelência.",
      imagen: iveco,
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
