import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatsApp from "@/components/WhatsApp";
import NuestraHistoria from "@/components/NuestraHistoria";
import Servicios from "@/components/Servicios";
import NuestraFlota from "@/components/NuestraFlota";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function MileoExpressLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <WhatsApp />
      <Hero />
      <NuestraHistoria />
      <Servicios />
      <NuestraFlota />
      <Contacto />
      <Footer />
    </div>
  );
}
