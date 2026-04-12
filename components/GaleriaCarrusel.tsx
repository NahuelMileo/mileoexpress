"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "/111.jpg", alt: "Frota Mileo Express" },
  { src: "/112.jpg", alt: "Frota Mileo Express" },
  { src: "/1935.jpg", alt: "Mileo Express 1935" },
  { src: "/carga.jpg", alt: "Carga" },
  { src: "/carga2.jpg", alt: "Carga 2" },
  { src: "/hero.jpg", alt: "Mileo Express" },
  { src: "/hero - copia.jpg", alt: "Mileo Express" },
  { src: "/ikg.jpg", alt: "Volvo FH 380" },
  { src: "/international.jpg", alt: "International" },
  { src: "/iveco.png", alt: "Iveco" },
  { src: "/iwy.jpg", alt: "Iveco Stralis 440" },
  { src: "/iux.jpg", alt: "Iveco Stralis 440" },
  { src: "/miq.jpg", alt: "Volvo FH 480" },
  { src: "/palmeira.jpg", alt: "Sider Palmeira" },
  { src: "/randonN.jpg", alt: "Randon" },
  { src: "/WhatsApp Image 2026-04-10 at 19.32.20.jpeg", alt: "Frota" },
  { src: "/WhatsApp Image 2026-04-10 at 19.32.30.jpeg", alt: "Frota" },
];

export default function GaleriaCarrusel() {
  return (
    <section id="galeria" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Galeria
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Conheça nossa frota e operações em imagens.
          </p>
        </motion.div>

        <Carousel
          className="mx-auto max-w-4xl"
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white">
                    {img.alt} — {i + 1} / {images.length}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </Carousel>
      </div>
    </section>
  );
}
