"use client";

import { Badge } from "./ui/badge";
import Image from "next/image";
import scania111 from "../assets/111.jpg";
import mercedes1935 from "../assets/1935.jpg";
import scania112 from "../assets/112.jpg";
import international from "../assets/international.jpg";
import volvo380 from "../assets/ikg.jpg";
import volvo480 from "../assets/miq.jpg";
import iveco from "../assets/iwy.jpg";

export default function NuestraHistoria() {
  const timeline = [
    {
      titulo: "Los primeros pasos",
      año: "2000",
      descripcion:
        "Todo comenzó con un Scania 111 año 1978, acoplado a una carreta Random graneleira. Con mucha determinación y trabajo arduo, dimos los primeros pasos en el transporte de cargas.",
      imagen: scania111,
    },
    {
      titulo: "El primer upgrade",
      año: "2005",
      descripcion:
        "Con el crecimiento de la empresa, vendimos el Scania 111 y adquirimos un Mercedes Benz 1935 año 1993, equipado con una carreta de 14 metros. Este paso aumentó nuestra capacidad y confiabilidad del servicio, siempre enfocados en la línea São Paulo.",
      imagen: mercedes1935,
    },
    {
      titulo: "Expansión y diversificación",
      año: "2014",
      descripcion: `Incorporamos un Scania 112 HW 360 hp 4x2 año 1991, equipado con una carreta Canguru con assoalho de chapa año 2007. En 2014, adquirimos una caçamba 0 km para operación de transporte de saibro en un parque eólico. También incorporamos un International 9800 año 2001, con 405 hp y configuración 6x4, reforzando nuestro compromiso con soluciones versátiles.`,
      imagen: scania112,
    },
    {
      titulo: "Fortalecimiento con International",
      año: "2016",
      descripcion:
        "Para atender nuevas demandas de carga pesada y rutas más largas, sumamos a nuestra flota un International 9800 de 405 hp, configuración 6x4, con carreta graneleira. Su potencia y robustez nos permitieron optimizar operaciones en terrenos exigentes y garantizar entregas puntuales incluso en trayectos internacionales. Este paso consolidó la presencia de Mileo Express en el transporte de gran porte.",
      imagen: international,
    },
    {
      titulo: "Llegada de Volvo y modernización",
      año: "2018",
      descripcion: `Dimos un importante paso tecnológico con la adquisición de nuestro primer Volvo FH 380, 380 cv, configuración 6x2. Junto con él, incorporamos nuestro primer sider Random año 2008, con capacidad para 30 pallets. Esta modernización representó una nueva fase en Mileo Express.`,
      imagen: volvo380,
    },
    {
      titulo: "Expansión de la flota",
      año: "2021",
      descripcion: `Ampliamos nuestra flota con la adquisición de un Volvo FH 480, llegando a operar con dos camiones simultáneamente. Durante la pandemia, adquirimos otro Volvo FH 480 6x2, expandiendo nuestras rutas hacia Argentina, Uruguay y Brasil en colaboración con otras empresas.`,
      imagen: volvo480,
    },
    {
      titulo: "Flota actual",
      año: "2024",
      destacado: true,
      descripcion: `Completamos nuestra flota actual con un Iveco Stralis 440 6x2 año 2014, con capacidad para 28 pallets, y una sider Palmeira de 30 pallets año 2019. Camiones modernos que refuerzan nuestro compromiso con la excelencia.`,
      imagen: iveco,
    },
  ];
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nuestra Historia Familiar
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Todo comenzó en 2000, cuando nuestro fundador dio los primeros pasos
            en el transporte de cargas. Con mucha determinación y trabajo arduo,
            transformamos un sueño familiar en una empresa sólida que hoy
            acumula 25 años de experiencia entre Brasil y Uruguay.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-red-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((evento, idx) => (
                <div key={idx} className="relative flex items-start">
                  <div className="absolute left-6 h-4 w-4 rounded-full border-4 border-white bg-red-900 shadow"></div>
                  <div className="ml-16">
                    <div className="grid items-center gap-6 lg:grid-cols-3">
                      {/* Texto */}
                      <div className="lg:col-span-2">
                        <div
                          className={`rounded-xl p-6 ${
                            evento.destacado
                              ? "border-2 border-red-200 bg-red-50"
                              : "bg-gray-50"
                          }`}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <h3
                              className={`text-lg font-semibold ${
                                evento.destacado
                                  ? "text-red-900"
                                  : "text-gray-900"
                              }`}
                            >
                              {evento.titulo}
                            </h3>
                            {evento.año && (
                              <Badge
                                variant={
                                  evento.destacado ? "default" : "outline"
                                }
                                className={`text-xs ${
                                  evento.destacado
                                    ? "bg-red-900 text-white"
                                    : ""
                                }`}
                              >
                                {evento.año}
                              </Badge>
                            )}
                          </div>
                          <p
                            className={`${
                              evento.destacado
                                ? "text-red-800"
                                : "text-gray-600"
                            }`}
                          >
                            {evento.descripcion}
                          </p>
                        </div>
                      </div>

                      {/* Imagen */}
                      <div className="lg:col-span-1">
                        <Image
                          src={evento.imagen}
                          alt={evento.titulo}
                          width={300}
                          height={200}
                          className="h-48 w-full rounded-lg object-cover shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
