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
  { src: "/111.jpg", alt: "Scania 111 - Onde tudo comecou" },
  { src: "/112.jpg", alt: "Scania 112 HW" },
  { src: "/1935.jpg", alt: "Mercedes-Benz 1935" },
  { src: "/carga.jpg", alt: "Operacoes de carga" },
  { src: "/carga2.jpg", alt: "Carregamento" },
  { src: "/hero.jpg", alt: "Frota Mileo Express" },
  { src: "/hero - copia.jpg", alt: "Mileo Express" },
  { src: "/ikg.jpg", alt: "Volvo FH 380" },
  { src: "/international.jpg", alt: "International 9800" },
  { src: "/iveco.png", alt: "Iveco" },
  { src: "/iwy.jpg", alt: "Iveco Stralis 440" },
  { src: "/iux.jpg", alt: "Iveco Stralis 440 Hi-Way" },
  { src: "/miq.jpg", alt: "Volvo FH 480" },
  { src: "/palmeira.jpg", alt: "Sider Palmeira" },
  { src: "/randonN.jpg", alt: "Sider Randon" },
  { src: "/WhatsApp Image 2026-04-10 at 19.32.20.jpeg", alt: "Frota" },
  { src: "/WhatsApp Image 2026-04-10 at 19.32.30.jpeg", alt: "Frota" },
];

export default function GaleriaCarrusel() {
  return (
    <section id="galeria" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Galeria
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Nossa historia em imagens
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Conheca nossa frota e operacoes atraves das decadas.
          </p>
        </motion.div>

        <Carousel
          className="mx-auto max-w-5xl"
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="relative h-[500px] overflow-hidden rounded-lg lg:h-[600px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-8">
                    <p className="text-lg font-medium text-background">
                      {img.alt}
                    </p>
                    <p className="text-sm text-background/60">
                      {i + 1} / {images.length}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background" />
          <CarouselNext className="right-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background" />
        </Carousel>
      </div>
    </section>
  );
}
