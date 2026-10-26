import { dictionaries, type Lang } from "@/lib/content";
import { whatsappLink } from "@/lib/empresa";
import Cargas from "./Cargas";
import Contato from "./Contato";
import Footer from "./Footer";
import Frota from "./Frota";
import Header from "./Header";
import Hero from "./Hero";
import { ChatIcon } from "./icons";
import Motion from "./Motion";
import Operacao from "./Operacao";
import PerguntasFrequentes from "./PerguntasFrequentes";
import PorQue from "./PorQue";
import QuemSomos from "./QuemSomos";
import Rota from "./Rota";

export default function Landing({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  return (
    <>
      <Header t={t} />
      <main id="conteudo">
        <Hero t={t} />
        <Operacao t={t} />
        <Rota t={t} />
        <Cargas t={t} />
        <PorQue t={t} />
        <Frota t={t} />
        <QuemSomos t={t} />
        <PerguntasFrequentes t={t} />
        <Contato lang={lang} />
      </main>
      <Footer t={t} />

      {/* Botón principal siempre a mano en el celular */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-suave/95 p-3 backdrop-blur-md md:hidden">
        <a
          href={whatsappLink(t.country, t.whatsappDefault)}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_mobile"
          className="flex items-center justify-center gap-2 rounded-full bg-vinho py-3.5 font-medium text-suave"
        >
          <ChatIcon className="h-5 w-5" />
          {t.mobileCta}
        </a>
      </div>

      <Motion locale={t.htmlLang} />
    </>
  );
}
