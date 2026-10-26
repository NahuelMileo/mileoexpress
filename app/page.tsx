import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatsApp from "@/components/WhatsApp";
import NuestraHistoria from "@/components/NuestraHistoria";
import Servicios from "@/components/Servicios";
import Diferenciadores from "@/components/Diferenciadores";
import NuestraFlota from "@/components/NuestraFlota";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import GaleriaCarrusel from "@/components/GaleriaCarrusel";
import PerguntasFrequentes, { perguntas } from "@/components/PerguntasFrequentes";

const url = "https://www.mileoexpress.com";

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${url}/#empresa`,
      name: "Mileo Express",
      description:
        "Transporte rodoviário internacional de cargas entre São Paulo e Montevidéu, nos dois sentidos.",
      url,
      logo: `${url}/logoRedondo.webp`,
      image: `${url}/opengraph-image.jpg`,
      telephone: "+55 53 99133 8841",
      email: "contato@mileoexpress.com",
      foundingDate: "2000",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chuy",
        addressRegion: "Rocha",
        addressCountry: "UY",
      },
      areaServed: [
        { "@type": "Country", name: "Brasil" },
        { "@type": "Country", name: "Uruguai" },
      ],
      knowsAbout: [
        "Transporte internacional de cargas",
        "Frete rodoviário Brasil Uruguai",
        "Transporte de produtos químicos",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: perguntas.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: { "@type": "Answer", text: item.resposta },
      })),
    },
  ],
};

export default function MileoExpressLanding() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
      <Nav />
      <WhatsApp />
      <Hero />
      <NuestraHistoria />
      <Servicios />
      <Diferenciadores />
      <NuestraFlota />
      <GaleriaCarrusel />
      <PerguntasFrequentes />
      <Contacto />
      <Footer />
    </div>
  );
}
