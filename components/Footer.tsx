"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "#inicio", text: "Inicio" },
    { href: "#nosotros", text: "Nossa Historia" },
    { href: "#servicios", text: "Servicos" },
    { href: "#flota", text: "Frota" },
    { href: "#contacto", text: "Contato" },
  ];

  const contacto = [
    { info: "+55 53 99133 8841" },
    { info: "mileojorge@gmail.com" },
    { info: "Chui, Uruguay" },
  ];

  return (
    <motion.footer
      className="border-t border-border bg-background py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#inicio">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Mileo Express
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Transporte internacional confiavel entre Brasil e Uruguai. Uma
              empresa familiar com mais de 25 anos de experiencia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Navegacao
            </h4>
            <div className="space-y-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Contato
            </h4>
            <div className="space-y-3">
              {contacto.map((contact, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {contact.info}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Mileo Express. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
