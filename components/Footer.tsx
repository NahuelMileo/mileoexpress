"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  const contacto = [
    { info: "+55 53 99133 8841" },
    { info: "mileojorge@gmail.com" },
    { info: "Chuí, Uruguay" },
  ];

  const links = [
    { href: "#inicio", text: "Início" },
    { href: "#nosotros", text: "Sobre Nós" },
    { href: "#servicios", text: "Serviços" },
    { href: "#flota", text: "Nossa Frota" },
  ];
  return (
    <motion.footer
      className="bg-neutral-900 py-12 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <p className="font-semibold">Mileo Express</p>
            <p className="mb-4 text-gray-400">
              Transporte internacional confiable entre Montevideo y São Paulo.
              Una empresa familiar con más de 15 años de experiencia.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 transition-colors hover:text-white"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              {contacto.map((contact, index) => (
                <p key={index}>{contact.info}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Mileo Express. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
