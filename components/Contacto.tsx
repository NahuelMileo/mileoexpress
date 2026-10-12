"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Copy, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Words from "./motion/Words";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

const contactItems = [
  { icon: Phone, title: "Telefone e WhatsApp", value: WHATSAPP_DISPLAY },
  { icon: Mail, title: "E-mail", value: "contato@mileoexpress.com" },
  { icon: MapPin, title: "Base de operações", value: "Chuy, Uruguai · fronteira com Chuí" },
];

const fieldClass =
  "w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-asphalt placeholder:text-black/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function Contacto() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    origem: "",
    destino: "",
    tipoCarga: "",
    mensagem: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Meu nome é ${form.nome}${form.empresa ? `, da empresa ${form.empresa}` : ""}.` +
      `\n\nRota: ${form.origem} → ${form.destino}` +
      `\nTipo de carga: ${form.tipoCarga || "Não especificado"}` +
      (form.mensagem ? `\n\n${form.mensagem}` : "");
    const url = whatsappLink(msg);
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-brand py-24 text-white lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.12),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
            <span className="h-px w-10 bg-white/60" />
            Contato
          </p>
          <h2
            data-words
            className="font-wide text-[clamp(2.2rem,4.8vw,4rem)] leading-[1] font-extrabold tracking-tight"
          >
            <Words text="Vamos conversar sobre seu próximo envio" />
          </h2>
          <p data-fade className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Peça seu orçamento sem compromisso. Quem responde é a família que
            dirige a empresa.
          </p>

          <div data-stagger className="mt-12 space-y-6">
            {contactItems.map((c) => (
              <div key={c.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/20">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/65">{c.title}</p>
                  <p className="font-semibold break-words">{c.value}</p>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={copiar}
              className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold ring-1 ring-white/25 transition-colors hover:bg-white/20"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Número copiado" : "Copiar número"}
            </button>
          </div>
        </div>

        <form
          data-fade
          onSubmit={enviarFormulario}
          className="rounded-3xl bg-white p-7 text-asphalt shadow-2xl lg:p-10"
        >
          <h3 className="font-wide text-2xl font-extrabold">Peça seu orçamento</h3>
          <p className="mt-1 text-sm text-black/55">
            Preencha e enviamos tudo pronto pelo WhatsApp.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold">
                Nome <span className="text-brand">*</span>
              </label>
              <input id="nome" name="nome" required value={form.nome} onChange={handleChange} placeholder="Seu nome" autoComplete="name" className={fieldClass} />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="empresa" className="mb-1.5 block text-sm font-semibold">
                Empresa <span className="font-normal text-black/45">(opcional)</span>
              </label>
              <input id="empresa" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" autoComplete="organization" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="origem" className="mb-1.5 block text-sm font-semibold">
                Origem <span className="text-brand">*</span>
              </label>
              <input id="origem" name="origem" required value={form.origem} onChange={handleChange} placeholder="Ex.: São Paulo, SP" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="destino" className="mb-1.5 block text-sm font-semibold">
                Destino <span className="text-brand">*</span>
              </label>
              <input id="destino" name="destino" required value={form.destino} onChange={handleChange} placeholder="Ex.: Montevideo" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tipoCarga" className="mb-1.5 block text-sm font-semibold">
                Tipo de carga
              </label>
              <Select value={form.tipoCarga} onValueChange={(v) => setForm({ ...form, tipoCarga: v })}>
                <SelectTrigger id="tipoCarga" className="h-auto w-full rounded-xl border-black/10 bg-paper px-4 py-3 text-sm">
                  <SelectValue placeholder="Selecione o tipo de carga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cargas secas">Cargas secas</SelectItem>
                  <SelectItem value="Químicos">Químicos</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensagem" className="mb-1.5 block text-sm font-semibold">
                Detalhes da carga
              </label>
              <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} rows={4} placeholder="Peso aproximado, quantidade de pallets, data desejada..." className={`${fieldClass} resize-none`} />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            Enviar pelo WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-center text-xs text-black/50">
            Respondemos em até 24 horas · Orçamento gratuito
          </p>
        </form>
      </div>
    </section>
  );
}
