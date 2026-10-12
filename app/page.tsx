import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CityTicker from "@/components/CityTicker";
import NuestraHistoria from "@/components/NuestraHistoria";
import Rotas from "@/components/Rotas";
import Servicios from "@/components/Servicios";
import Diferenciadores from "@/components/Diferenciadores";
import NuestraFlota from "@/components/NuestraFlota";
import GaleriaCarrusel from "@/components/GaleriaCarrusel";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function MileoExpressLanding() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <CityTicker />
        <NuestraHistoria />
        <Rotas />
        <Servicios />
        <Diferenciadores />
        <NuestraFlota />
        <GaleriaCarrusel />
        <Contacto />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
