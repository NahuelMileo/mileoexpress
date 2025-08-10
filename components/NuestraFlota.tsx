import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

import miq from "@/assets/miq.jpg";
import ikg from "@/assets/ikg.jpg";
import iwy from "@/assets/iwy.jpg";

const fleet = [
  {
    image: miq.src,
    alt: "Volvo FH 480",
    brand: "Volvo",
    title: "Volvo FH 480",
    description:
      "Camión de alta gama con tecnología avanzada para transporte seguro y eficiente en rutas internacionales.",
    specs: ["480 HP", "6x2", "GPS"],
  },
  {
    image: ikg.src,
    alt: "Volvo FH 380",
    brand: "Volvo",
    title: "Volvo FH 380",
    description:
      "Segundo Volvo, este con 380HP adquirido durante la pandemia, ampliando nuestra capacidad operacional.",
    specs: ["480 HP", "6x2", "GPS"],
  },
  {
    image: iwy.src,
    alt: "Iveco Stralis 440",
    brand: "Iveco",
    title: "Iveco Stralis 440",
    description:
      "Tecnología italiana de vanguardia con capacidad para 28 pallets y sider Palmeira de 30 pallets.",
    specs: ["440 HP", "6x2", "28-30 pallets"],
  },
];

export default function Page() {
  return (
    <section id="flota" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Nuestra Flota Actual
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Tres camiones modernos y confiables que garantizan el mejor servicio
            en el transporte internacional de cargas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((truck, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={truck.image}
                  alt={truck.alt}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-900 text-white">{truck.brand}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {truck.title}
                </h3>
                <p className="mb-4 text-gray-600">{truck.description}</p>
                <ul className="flex list-inside list-disc flex-wrap gap-x-4 text-sm text-gray-500">
                  {truck.specs.map((spec, i) => (
                    <li key={i} className="text-red-800">
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
