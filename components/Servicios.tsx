import Image from "next/image";
import { Shield, Clock, Users, Package, FlaskConical } from "lucide-react";
import carga from "@/public/carga2.webp";
import Words from "./motion/Words";

const services = [
  {
    title: "Segurança garantida",
    description:
      "Todas as cargas viajam com seguro completo e rastreamento em tempo real.",
    icon: Shield,
  },
  {
    title: "Pontualidade",
    description:
      "Cumprimos os prazos combinados graças à experiência de décadas nas rotas internacionais.",
    icon: Clock,
  },
  {
    title: "Atendimento personalizado",
    description:
      "Empresa familiar: cada cliente fala com quem conhece a operação de ponta a ponta.",
    icon: Users,
  },
];

const cargaItems = [
  {
    title: "Cargas secas",
    description:
      "Mercadoria paletizada, caixas, equipamentos industriais e produtos embalados.",
    icon: Package,
  },
  {
    title: "Químicos",
    description:
      "Transporte especializado de produtos químicos, com toda a documentação e segurança exigidas.",
    icon: FlaskConical,
  },
];

export default function Servicios() {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-black/50 uppercase">
            <span className="h-px w-10 bg-brand" />
            Nossos serviços
          </p>
          <h2
            data-words
            className="font-wide text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] font-extrabold tracking-tight text-asphalt"
          >
            <Words text="Transportamos todo tipo de carga internacional" />
          </h2>
          <p data-fade className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Com o compromisso, a experiência e a segurança que nos caracterizam
            há mais de duas décadas.
          </p>
        </div>

        <div data-stagger className="mb-20 grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white p-8 transition-colors duration-500 hover:bg-asphalt lg:p-10"
            >
              <service.icon className="h-8 w-8 text-brand transition-colors duration-500 group-hover:text-brand-bright" />
              <h3 className="font-wide mt-8 text-xl font-extrabold text-asphalt transition-colors duration-500 group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 transition-colors duration-500 group-hover:text-white/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-2xl bg-paper lg:grid-cols-2">
          <div className="p-8 lg:p-14">
            <h3
              data-words
              className="font-wide text-3xl font-extrabold tracking-tight text-asphalt lg:text-4xl"
            >
              <Words text="O que levamos" />
            </h3>
            <div data-stagger className="mt-10 space-y-8">
              {cargaItems.map((cargo) => (
                <div key={cargo.title} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <cargo.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-asphalt">{cargo.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      {cargo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline"
            >
              Consultar outro tipo de carga →
            </a>
          </div>
          <div data-clip className="relative h-72 overflow-hidden lg:h-auto">
            <Image
              src={carga}
              alt="Carga paletizada e amarrada dentro do sider"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
