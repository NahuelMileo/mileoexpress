import { MessageCircle, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import hero from "@/assets/hero.jpg";
import Link from "next/link";

export default function Page() {
  const stats = [
    { valor: "25", descripcion: "Años de experiencia" },
    { valor: "3", descripcion: "Camiones en flota" },
    { valor: "100%", descripcion: "Cargas seguras" },
  ];

  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-red-50 to-gray-100 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                Transporte Internacional
              </Badge>
              <h1 className="text-4xl leading-tight font-bold text-gray-900 lg:text-6xl">
                Conectamos <span className="text-red-900">Montevideo</span> con{" "}
                <span className="text-red-900">São Paulo</span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                Transporte seguro y confiable de todo tipo de cargas entre
                Uruguay y Brasil. Más de una década de experiencia en logística
                internacional.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-red-900 text-white hover:bg-red-800"
              >
                <Link href="#contacto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pedí tu cotización
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-300 bg-transparent"
              >
                <Link href="#nosotros">Conocé más</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-red-900">
                    {stat.valor}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.descripcion}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={hero.src}
              alt="Camión Mileo Express"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-red-100 p-2">
                  <MapPin className="h-5 w-5 text-red-800" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ruta activa</div>
                  <div className="text-sm text-gray-600">
                    Montevideo → São Paulo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
