"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const brasilParadas = [
  { cidade: "São Paulo", destaque: false },
  { cidade: "Porto Alegre", destaque: false },
  { cidade: "Pelotas", destaque: false },
  { cidade: "Rio Grande", destaque: false },
  { cidade: "Chuí", destaque: true },
];

const uruguaiParadas = [
  { cidade: "Chuy", destaque: true },
  { cidade: "Rocha", destaque: false },
  { cidade: "Canelones", destaque: false },
  { cidade: "Montevideo", destaque: false },
];

export default function Rotas() {
  return (
    <section id="rotas" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Cobertura
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Nossas rotas internacionais
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Operamos o corredor Brasil–Uruguai há mais de 25 anos, com ponto de
            base na fronteira em Chuí. Também atendemos rotas para a Argentina.
          </p>
        </motion.div>

        {/* Route visualization */}
        <motion.div
          className="overflow-hidden rounded-lg border border-border bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-[1fr_auto_1fr]">
            {/* Brasil */}
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">🇧🇷</span>
                <h3 className="text-xl font-semibold text-foreground">
                  Brasil
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                <div className="space-y-5">
                  {brasilParadas.map((parada, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div
                        className={`relative z-10 flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          parada.destaque
                            ? "border-foreground bg-foreground"
                            : "border-border bg-background"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          parada.destaque
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {parada.cidade}
                        {parada.destaque && (
                          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            fronteira
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider / Border crossing */}
            <div className="flex items-center justify-center border-x border-border px-6 py-8 lg:py-0">
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-full bg-foreground p-3">
                  <MapPin className="h-5 w-5 text-background" />
                </div>
                <span className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Fronteira
                  <br />
                  Internacional
                </span>
              </motion.div>
            </div>

            {/* Uruguai */}
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">🇺🇾</span>
                <h3 className="text-xl font-semibold text-foreground">
                  Uruguai
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                <div className="space-y-5">
                  {uruguaiParadas.map((parada, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div
                        className={`relative z-10 flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          parada.destaque
                            ? "border-foreground bg-foreground"
                            : "border-border bg-background"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          parada.destaque
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {parada.cidade}
                        {parada.destaque && (
                          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            fronteira
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border bg-muted px-8 py-4 lg:px-12">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Também atendemos Argentina
              </span>{" "}
              — Rotas para Buenos Aires e outras províncias mediante consulta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
