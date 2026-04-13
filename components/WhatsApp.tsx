"use client";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function WhatsApp() {
  const telefono = "+5553991338841";

  const abrirWhatsApp = () => {
    const message = "Ola, gostaria de solicitar um orcamento.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        onClick={abrirWhatsApp}
        size="lg"
        className="h-14 w-14 rounded-full bg-foreground p-0 text-background shadow-lg transition-transform hover:scale-110 hover:bg-foreground/90"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
}
