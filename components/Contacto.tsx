"use client";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const telefono = "+55 53 99133 8841";
const telefonoSinEspacios = "+5553991338841";
const contactItems = [
  {
    icon: <Phone className="h-5 w-5 text-red-900" />,
    title: "Telefone",
    value: telefono,
    bgColor: "bg-red-100",
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-red-900" />,
    title: "WhatsApp",
    value: "+598 99 874 250",
    bgColor: "bg-red-100",
  },
  {
    icon: <Mail className="h-5 w-5 text-red-900" />,
    title: "Email",
    value: "mileojorge@gmail.com",
    bgColor: "bg-red-100",
  },
  {
    icon: <MapPin className="h-5 w-5 text-red-900" />,
    title: "Localização",
    value: "Chuí, Uruguay",
    bgColor: "bg-red-100",
  },
];

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
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
    const message = "Olá, gostaria de solicitar um orçamento.";
    const url = `https://wa.me/${telefonoSinEspacios}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-red-50 to-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Contate-nos
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Estamos prontos para transportar sua carga. Peça seu orçamento sem
            compromisso e descubra por que somos a melhor opção para seus envios
            internacionais.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="rounded-2xl bg-white p-6 shadow-lg lg:p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="mb-6 text-xl font-semibold text-gray-900 lg:text-2xl">
                  Informações de Contato
                </h3>
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
                      className="flex items-start space-x-4"
                      variants={fadeInLeft}
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.div
                        className={`${contact.bgColor} flex-shrink-0 rounded-lg p-3`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {contact.title}
                        </h4>
                        <p className="break-all text-gray-600">
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="rounded-2xl bg-white p-6 shadow-lg lg:p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="mb-6 text-xl font-semibold text-gray-900 lg:text-2xl">
                  Peça seu Orçamento
                </h3>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Entre em contato pelo WhatsApp para receber um orçamento
                    personalizado para sua carga. Responderemos o mais breve
                    possível.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={abrirWhatsApp}
                      size="lg"
                      className="w-full cursor-pointer bg-gradient-to-b from-green-600 to-green-700 py-4 text-base text-white hover:bg-green-700 lg:py-6 lg:text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0 lg:mr-3 lg:h-6 lg:w-6" />
                      <span className="truncate">
                        Peça seu orçamento pelo WhatsApp
                      </span>
                    </Button>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-2 gap-4 pt-4"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="rounded-lg bg-gray-50 p-3 text-center lg:p-4"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xl font-bold text-red-900 lg:text-2xl">
                        24h
                      </div>
                      <div className="text-xs text-gray-600 lg:text-sm">
                        Resposta rápida
                      </div>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-gray-50 p-3 text-center lg:p-4"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xl font-bold text-red-900 lg:text-2xl">
                        0$
                      </div>
                      <div className="text-xs text-gray-600 lg:text-sm">
                        Orçamento gratuito
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
