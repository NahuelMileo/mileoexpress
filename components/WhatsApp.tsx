"use client";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Page() {
  const telefono = "+5553991338841";

  const abrirWhatsApp = () => {
    const message = "Olá, gostaria de solicitar um orçamento.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Button
        onClick={abrirWhatsApp}
        size="lg"
        className="h-14 w-14 cursor-pointer rounded-full bg-green-500 p-0 text-white shadow-lg hover:bg-green-600"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
