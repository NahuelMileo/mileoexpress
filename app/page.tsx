import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatsApp from "@/components/WhatsApp";
import NuestraHistoria from "@/components/NuestraHistoria";
import Servicios from "@/components/Servicios";
import NuestraFlota from "@/components/NuestraFlota";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import GaleriaCarrusel from "@/components/GaleriaCarrusel";

export default function MileoExpressLanding() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <WhatsApp />
      <Hero />
      <NuestraHistoria />
      <Servicios />
      <NuestraFlota />
      <GaleriaCarrusel />
      <Contacto />
      <Footer />
    </main>
  );
}
