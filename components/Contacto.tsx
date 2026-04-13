"use client";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
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
    title: "Email",
    value: "mileojorge@gmail.com",
  },
  {
    icon: MapPin,
    title: "Localizacao",
    value: "Chui, Uruguay",
  },
];

export default function Contacto() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const abrirWhatsApp = () => {
    const message = "Ola, gostaria de solicitar um orcamento.";
    const url = `https://wa.me/${telefonoSinEspacios}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-background/60">
            Contato
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight text-background lg:text-5xl">
            Vamos conversar sobre seu proximo envio
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-background/70">
            Estamos prontos para transportar sua carga. Peca seu orcamento sem
            compromisso e descubra por que somos a melhor opcao para seus envios
            internacionais.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg bg-background p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Peca seu Orcamento
              </h3>
              <p className="mb-8 text-muted-foreground">
                Entre em contato pelo WhatsApp para receber um orcamento
                personalizado para sua carga. Responderemos o mais breve
                possivel.
              </p>
              <Button
                onClick={abrirWhatsApp}
                size="lg"
                className="group w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                Solicitar orcamento via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-semibold text-foreground">24h</div>
                  <div className="text-sm text-muted-foreground">Resposta rapida</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-semibold text-foreground">Gratis</div>
                  <div className="text-sm text-muted-foreground">Orcamento sem custo</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
