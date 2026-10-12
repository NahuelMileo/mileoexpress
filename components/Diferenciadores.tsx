import { Users, Navigation, MessageCircle, Award } from "lucide-react";
import Words from "./motion/Words";

const items = [
  {
    icon: Users,
    title: "Atendimento direto com os donos",
    description:
      "Fale diretamente com quem decide. Sem call center, sem intermediários, sem burocracia.",
  },
  {
    icon: Navigation,
    title: "Especialistas na rota Brasil–Uruguai",
    description:
      "Mais de 25 anos operando a mesma rota. Conhecemos cada detalhe do caminho, da fronteira e dos processos aduaneiros.",
  },
  {
    icon: MessageCircle,
    title: "Rastreamento via WhatsApp",
    description:
      "Acompanhe sua carga em tempo real durante todo o trajeto, com comunicação direta e sem intermediários.",
  },
  {
    icon: Award,
    title: "Empresa familiar, compromisso real",
    description:
      "Sua carga importa para nós como se fosse nossa. Mais de 30 empresas confiaram na Mileo Express só em 2026.",
  },
];

export default function Diferenciadores() {
  return (
    <section className="relative overflow-hidden bg-asphalt py-24 text-white lg:py-36">
      <div
        aria-hidden="true"
        className="font-wide pointer-events-none absolute -top-10 right-0 text-[28vw] leading-none font-extrabold text-white/[0.03] select-none"
      >
        25
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
            <span className="h-px w-10 bg-brand-bright" />
            Por que nos escolher
          </p>
          <h2
            data-words
            className="font-wide text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] font-extrabold tracking-tight"
          >
            <Words text="O que nos diferencia das demais transportadoras" />
          </h2>
        </div>

        <div data-stagger className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5 rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:ring-brand-bright/60 lg:p-9"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand transition-transform duration-500 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
