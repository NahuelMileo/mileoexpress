"use client";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "framer-motion";

const telefono = "+55 53 99133 8841";
const telefonoSinEspacios = "+5553991338841";

const contactItems = [
  {
    icon: Phone,
    title: "Telefone",
    value: telefono,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+598 99 874 250",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "mileojorge@gmail.com",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Chui, Uruguai",
  },
];

export default function Contacto() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    tipoCarga: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Meu nome é ${form.nome}${form.empresa ? `, da empresa ${form.empresa}` : ""}.` +
      `\n\nTipo de carga: ${form.tipoCarga || "Não especificado"}` +
      `\n\n${form.mensagem}`;
    const url = `https://wa.me/${telefonoSinEspacios}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="contato" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Header + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-background/60">
              Contato
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-background lg:text-5xl">
              Vamos conversar sobre seu próximo envio
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-background/70">
              Estamos prontos para transportar sua carga. Peça seu orçamento sem
              compromisso e descubra por que somos a melhor opção para seus
              envios internacionais.
            </p>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactItems.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={fadeInUp}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-background/10">
                    <contact.icon className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">{contact.title}</p>
                    <p className="font-medium text-background">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={enviarFormulario}
              className="rounded-lg bg-background p-8 lg:p-10"
            >
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Peça seu Orçamento
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Nome completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Empresa{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Tipo de carga <span className="text-red-500">*</span>
                  </label>
                  <Select
                    required
                    value={form.tipoCarga}
                    onValueChange={(value) =>
                      setForm({ ...form, tipoCarga: value })
                    }
                  >
                    <SelectTrigger className="w-full rounded-lg border border-border bg-muted text-sm text-foreground focus:border-foreground focus:ring-0">
                      <SelectValue placeholder="Selecione o tipo de carga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cargas Secas">Cargas Secas</SelectItem>
                      <SelectItem value="Químicos">Químicos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Descreva sua carga <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Origem, destino, peso aproximado, data desejada..."
                    className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="group mt-6 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                Enviar via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Respondemos em até 24 horas · Orçamento gratuito
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
