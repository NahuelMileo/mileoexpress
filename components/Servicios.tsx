import { Shield, Clock, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import carga from "@/assets/carga2.jpg";
import Image from "next/image";

// 1. Íconos de servicios
const services = [
  {
    title: "Seguridad Garantizada",
    description:
      "Todas nuestras cargas viajan con seguros completos y sistemas de seguimiento en tiempo real.",
    icon: Shield,
  },
  {
    title: "Puntualidad",
    description:
      "Cumplimos con los tiempos acordados gracias a nuestra experiencia en rutas internacionales.",
    icon: Clock,
  },
  {
    title: "Atención Personalizada",
    description:
      "Somos una empresa familiar que brinda atención directa y personalizada a cada cliente.",
    icon: Users,
  },
];

// 2. Tipos de carga
const cargaItems = [
  {
    title: "Carga General",
    description: "Mercadería paletizada, cajas, equipos industriales",
  },
  {
    title: "Carga Refrigerada",
    description: "Productos que requieren temperatura controlada",
  },
  {
    title: "Carga Especial",
    description: "Maquinaria pesada, equipos sobredimensionados",
  },
];

export default function Page() {
  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Transportamos todo tipo de carga internacional con el compromiso,
            experiencia y seguridad que nos caracterizan.
          </p>
        </div>

        {/* Servicios */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
          ))}
        </div>

        {/* Tipos de carga */}
        <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 lg:text-3xl">
                Todo Tipo de Cargas
              </h3>
              <div className="space-y-4">
                {cargaItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-red-100 p-1">
                      <div className="h-2 w-2 rounded-full bg-red-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={carga.src}
                alt="Servicios de carga"
                width={700}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
