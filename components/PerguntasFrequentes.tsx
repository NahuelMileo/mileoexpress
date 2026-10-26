import { ChevronDown } from "lucide-react";

export const perguntas = [
  {
    pergunta: "Vocês fazem a rota São Paulo – Montevidéu nos dois sentidos?",
    resposta:
      "Sim. Transportamos cargas de São Paulo para Montevidéu e de Montevidéu para São Paulo, com atendimento direto com os donos da empresa.",
  },
  {
    pergunta: "Que tipo de carga vocês transportam?",
    resposta:
      "Cargas secas, como mercadoria paletizada, caixas, equipamentos industriais e produtos embalados, e também produtos químicos, com toda a documentação e segurança exigidas.",
  },
  {
    pergunta: "Por onde a carga cruza a fronteira entre Brasil e Uruguai?",
    resposta:
      "Pela fronteira de Chuí e Chuy. Nossa base fica em Chuí, no Rio Grande do Sul. Operamos esse corredor desde 2000 e conhecemos de perto os processos aduaneiros dos dois países.",
  },
  {
    pergunta: "A carga viaja com seguro e rastreamento?",
    resposta:
      "Sim. Todas as cargas viajam com seguro completo e você acompanha o trajeto em tempo real pelo WhatsApp.",
  },
  {
    pergunta: "Como peço um orçamento de frete?",
    resposta:
      "Preencha o formulário de contato ou chame no WhatsApp +55 53 99133 8841 informando origem, destino, tipo de carga e peso aproximado. O orçamento é gratuito e respondemos em até 24 horas.",
  },
];

export default function PerguntasFrequentes() {
  return (
    <section id="perguntas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Perguntas frequentes
        </p>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
          Transporte de cargas entre Brasil e Uruguai
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {perguntas.map((item) => (
            <details key={item.pergunta} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <h3>{item.pergunta}</h3>
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
