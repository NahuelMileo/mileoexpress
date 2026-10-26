// Textos del sitio en portugués (por defecto) y español.
// Datos operativos: lib/empresa.ts. La historia de Jorge sale del manual de identidad (Bayou, 2026).

import { OPERACAO, WHATSAPP, YEARS, type Country } from "./empresa";

export type Lang = "pt" | "es";

export type QuoteForm = {
  profile: string;
  name: string;
  company: string;
  origin: string;
  destination: string;
  type: string;
  weight: string;
  date: string;
  details: string;
};

export const fleetData = [
  { image: "/miq.webp", name: "Volvo FH 480", hp: 480, specs: ["6x2", "GPS"] },
  { image: "/ikg.webp", name: "Volvo FH 380", hp: 380, specs: ["6x2", "GPS"] },
  { image: "/iwy.webp", name: "Iveco Stralis 440 Hi-Way", hp: 440, specs: ["6x2"] },
  { image: "/iux.webp", name: "Iveco Stralis 400 Hi-Way", hp: 400, specs: ["6x2"] },
] as const;

// Mapa ilustrativo, fuera de escala. Ruta São Paulo → BR-116 → Chuí → Ruta 9 → Montevideo.
export const stops = [
  { city: "São Paulo", x: 610, y: 100, lx: -16, ly: 6, anchor: "end" },
  { city: "Porto Alegre", x: 440, y: 330, lx: 16, ly: 6, anchor: "start" },
  { city: "Pelotas", x: 360, y: 465, lx: 16, ly: 6, anchor: "start" },
  { city: "Chuí / Chuy", x: 300, y: 585, lx: 16, ly: 6, anchor: "start", border: true },
  { city: "Rocha", x: 262, y: 665, lx: 16, ly: 6, anchor: "start" },
  { city: "Maldonado", x: 180, y: 720, lx: 0, ly: -24, anchor: "middle" },
  { city: "Montevideo", x: 80, y: 742, lx: 0, ly: 44, anchor: "middle" },
] as const;

const pt = {
  lang: "pt" as Lang,
  htmlLang: "pt-BR",
  locale: "pt_BR",
  country: "br" as Country,
  meta: {
    title: "Mileo Express | Transporte de cargas São Paulo – Montevidéu",
    description: `Caminhão completo entre São Paulo e Montevidéu em ${OPERACAO.transitDays} dias, com ${OPERACAO.departuresPerWeek} saídas por semana. Frota própria para operadores logísticos e embarcadores, na estrada desde 2000.`,
  },
  skip: "Pular para o conteúdo",
  nav: {
    label: "Navegação principal",
    links: [
      { href: "#operacao", label: "Operação" },
      { href: "#rota", label: "Rota" },
      { href: "#frota", label: "Frota" },
      { href: "#quem-somos", label: "Quem somos" },
      { href: "#contato", label: "Contato" },
    ],
    cta: "Falar no WhatsApp",
    langLabel: "Idioma",
  },
  whatsappDefault: "Olá! Gostaria de pedir uma cotação de transporte.",
  hero: {
    eyebrow: "Transporte rodoviário internacional · Brasil e Uruguai",
    title: ["Caminhão completo", "São Paulo ⇄ Montevidéu", `em ${OPERACAO.transitDays} dias.`],
    lead: "Frota própria para operadores logísticos, agentes de carga e embarcadores. Na estrada desde 2000, com atendimento direto de quem dirige a empresa.",
    cta: "Pedir cotação",
    secondary: "Falar no WhatsApp",
    imageAlt: "Volvo FH com sider da Mileo Express estacionado à noite diante de um galpão",
    stats: [
      { value: OPERACAO.transitDays, label: "dias porta a porta, com aduana" },
      { value: OPERACAO.departuresPerWeek, label: "saídas por semana em cada sentido" },
      { count: OPERACAO.tonsPerLoad, suffix: " t", label: "por carga, caminhão exclusivo" },
      { count: OPERACAO.trucks, label: "caminhões próprios" },
    ],
  },
  operacao: {
    eyebrow: "Operação",
    title: ["O que você precisa saber", "antes de cotar."],
    rows: [
      { label: "Tempo de trânsito", value: `${OPERACAO.transitDays} dias porta a porta`, note: "Inclui o despacho nas aduanas de Chuí e Chuy." },
      { label: "Frequência", value: `${OPERACAO.departuresPerWeek} saídas por semana`, note: "Em cada sentido, entre São Paulo e Montevidéu." },
      { label: "Modalidade", value: "Carga completa", note: "O caminhão é exclusivo para a sua carga. Não fazemos carga fracionada." },
      { label: "Capacidade", value: `${OPERACAO.tonsPerLoad} t ou ${OPERACAO.palletsPerSider} pallets`, note: "Carretas sider, carregamento lateral." },
      { label: "Coleta no Brasil", value: "São Paulo e região", note: "Outras origens sob consulta." },
      { label: "Entrega no Uruguai", value: "Montevidéu e Maldonado", note: "Outros destinos, inclusive Argentina, sob consulta." },
    ],
    aduana:
      "As aduanas da fronteira não operam nos fins de semana. Embarques no início da semana chegam antes.",
  },
  rota: {
    eyebrow: "Rota",
    title: ["De São Paulo a Montevidéu,", "sem trocar de mãos."],
    lead: "A base fica em Chuí, na fronteira. A mesma equipe acompanha a carga da coleta à entrega.",
    legs: [
      { label: "São Paulo → Chuí", value: "2 a 3 dias" },
      { label: "Aduanas de Chuí e Chuy", value: "cerca de 1 dia útil" },
      { label: "Chuy → Montevidéu", value: "cerca de 5 horas" },
    ],
    brazil: "Brasil",
    uruguay: "Uruguai",
    saoPaulo: "São Paulo",
    border: "fronteira",
    distance: "Distância aproximada",
    mapLabel: "Mapa ilustrativo da rota São Paulo, Porto Alegre, Pelotas, Chuí, Rocha, Maldonado e Montevidéu",
    mapNote: "Mapa ilustrativo, fora de escala.",
  },
  cargas: {
    eyebrow: "O que transportamos",
    title: ["Cargas paletizadas,", "do embarque à entrega."],
    items: [
      { title: "Cargas secas", text: "Mercadoria paletizada, caixas, equipamentos industriais e produtos embalados." },
      { title: "Produtos químicos", text: "Informe o produto na cotação para confirmarmos as condições de transporte." },
    ],
    other: "Consultar outro tipo de carga",
    otherMessage: "Olá! Gostaria de consultar sobre o transporte de outro tipo de carga.",
    imageAlt: "Caixas de madeira paletizadas e amarradas dentro de um sider",
  },
  porque: {
    eyebrow: "Por que a Mileo",
    title: ["Parceira de operadores logísticos", "do Brasil e do Uruguai."],
    items: [
      { title: "Fala direto com o dono", text: "Jorge Mileo atende pessoalmente os WhatsApp do Brasil e do Uruguai. Sem central de atendimento." },
      { title: `${YEARS} anos na fronteira de Chuí`, text: "Conhecemos o caminho, as duas aduanas e os trâmites de cada lado." },
      { title: "Frota própria", text: `${OPERACAO.trucks} caminhões e carretas sider de até ${OPERACAO.palletsPerSider} pallets, incluindo um sider 0 km de 2026.` },
      { title: "Notícias da carga pelo WhatsApp", text: "Avisamos a saída, a chegada à fronteira, a liberação aduaneira e a previsão de entrega." },
    ],
    chat: {
      label: "Exemplo ilustrativo",
      name: "Mileo Express",
      status: "conversa de exemplo",
      messages: [
        { from: "us", text: "Carregado em Guarulhos. Saímos hoje à noite, previsão de chegar ao Chuí na quarta.", time: "seg 17:40" },
        { from: "them", text: "Bom dia! Alguma novidade da carga?", time: "qua 10:02" },
        { from: "us", text: "Bom dia! Chegando ao Chuí. Despacho aduaneiro amanhã cedo.", time: "qua 10:05" },
        { from: "us", text: "Documentação liberada nas duas aduanas. Seguimos para Montevidéu.", time: "qui 14:30" },
        { from: "us", text: "Entrega prevista para amanhã às 8 h.", time: "qui 19:15" },
      ],
      note: "Mensagens fictícias, só para mostrar como é o acompanhamento.",
    },
  },
  frota: {
    eyebrow: "Frota",
    title: [`${OPERACAO.trucks} caminhões próprios,`, "prontos para a estrada."],
    lead: `Carretas sider de até ${OPERACAO.palletsPerSider} pallets. Em 2026 incorporamos o primeiro sider 0 km.`,
    hp: "cv",
    alt: "Caminhão",
  },
  quem: {
    eyebrow: "Quem somos",
    title: ["Começou ao volante.", "Continua perto da estrada."],
    paragraphs: [
      "Natural de Montevidéu, Jorge Mileo mudou-se ainda jovem para o Chuí. Antes do transporte, passou por diferentes atividades no comércio, buscando oportunidades para construir seu próprio negócio.",
      "Em 2000, comprou seu primeiro caminhão e começou a trabalhar sozinho. Hoje, com quatro caminhões, a Mileo Express carrega o conhecimento de quem começou ao volante e continua próximo do trabalho que faz a empresa crescer.",
    ],
    imageAlt: "Scania 111 de 1978, o primeiro caminhão da Mileo Express",
    caption: "Scania 111, o primeiro caminhão, em 2000.",
    timeline: [
      { year: "2000", text: "Primeiro caminhão, um Scania 111." },
      { year: "2018", text: "Chega o primeiro Volvo FH." },
      { year: "2021", text: "Segundo caminhão na rota." },
      { year: "2024", text: "Terceiro caminhão, um Iveco Stralis." },
      { year: "2026", text: "Quarto caminhão e primeiro sider 0 km." },
    ],
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: ["Transporte de cargas", "entre Brasil e Uruguai."],
    items: [
      {
        q: "Quanto tempo leva de São Paulo a Montevidéu?",
        a: `De ${OPERACAO.transitDays} dias porta a porta, incluindo o despacho nas aduanas de Chuí e Chuy, que costuma levar um dia útil. As aduanas não operam nos fins de semana, então embarques no início da semana chegam antes.`,
      },
      {
        q: "Com que frequência saem os caminhões?",
        a: `Temos de ${OPERACAO.departuresPerWeek} saídas por semana em cada sentido, de São Paulo para Montevidéu e de Montevidéu para São Paulo.`,
      },
      {
        q: "Vocês fazem carga fracionada?",
        a: `Não. Trabalhamos com carga completa: o caminhão é exclusivo para a sua carga, até ${OPERACAO.tonsPerLoad} toneladas ou ${OPERACAO.palletsPerSider} pallets.`,
      },
      {
        q: "Onde vocês coletam e entregam?",
        a: "Coletamos em São Paulo e região. No Uruguai, entregamos em Montevidéu e Maldonado. Outros destinos, inclusive na Argentina, sob consulta.",
      },
      {
        q: "Que tipo de carga vocês transportam?",
        a: "Cargas secas paletizadas, caixas, equipamentos industriais e produtos embalados, além de produtos químicos. Para químicos, informe o produto na cotação para confirmarmos as condições.",
      },
      {
        q: "Trabalham com operadores logísticos e agentes de carga?",
        a: "Sim. Boa parte dos nossos clientes são operadores logísticos e agentes de carga do Brasil e do Uruguai que precisam de um caminhão confiável na rota.",
      },
      {
        q: "Como peço uma cotação?",
        a: `Preencha o formulário ou chame no WhatsApp ${WHATSAPP.br.display} (Brasil) ou ${WHATSAPP.uy.display} (Uruguai) com origem, destino, tipo de carga e peso aproximado.`,
      },
    ],
  },
  contato: {
    eyebrow: "Cotação",
    title: ["Conte o que precisa", "transportar."],
    lead: "Respondemos com prazo e valor. Quem atende é quem dirige a empresa.",
    whatsappBr: "WhatsApp Brasil",
    whatsappUy: "WhatsApp Uruguai",
    emailLabel: "E-mail",
    baseLabel: "Base de operações",
    base: "Chuí, RS – Brasil · fronteira com o Uruguai",
    safety: "Nunca alteramos dados bancários por WhatsApp ou e-mail. Em caso de dúvida, ligue para confirmar.",
    form: {
      title: "Pedir cotação",
      intro: "Preencha e enviamos tudo pronto pelo WhatsApp.",
      profile: "Você é",
      profiles: ["Operador logístico", "Agente de carga", "Empresa (embarcador)"],
      select: "Selecione",
      name: "Nome",
      namePh: "Seu nome",
      company: "Empresa",
      companyPh: "Nome da empresa",
      origin: "Origem",
      originPh: "Ex.: Guarulhos, SP",
      destination: "Destino",
      destinationPh: "Ex.: Montevidéu",
      type: "Tipo de carga",
      types: ["Cargas secas", "Produtos químicos", "Outra"],
      weight: "Peso ou pallets",
      weightPh: "Ex.: 18 t ou 26 pallets",
      date: "Data prevista",
      optional: "(opcional)",
      details: "Detalhes",
      detailsPh: "Mercadoria, embalagem, observações…",
      submit: "Enviar pelo WhatsApp",
      email: "Prefere e-mail? Enviar por e-mail",
      emailSubject: "Cotação de transporte",
      footnote: "Cotação sem compromisso.",
      message: (f: QuoteForm) =>
        [
          `Olá! Meu nome é ${f.name}${f.company ? `, da ${f.company}` : ""}${f.profile ? ` (${f.profile.toLowerCase()})` : ""}.`,
          `Gostaria de uma cotação de ${f.origin} para ${f.destination}.`,
          `Carga: ${f.type || "não especificada"}${f.weight ? ` · ${f.weight}` : ""}`,
          f.date && `Data prevista: ${f.date}`,
          f.details && `Detalhes: ${f.details}`,
        ]
          .filter(Boolean)
          .join("\n"),
    },
  },
  footer: {
    tagline: "Transporte rodoviário internacional de cargas entre Brasil e Uruguai desde 2000.",
    navTitle: "Navegação",
    contactTitle: "Contato",
    rights: "Todos os direitos reservados.",
  },
  mobileCta: "Pedir cotação pelo WhatsApp",
};

export type Dict = typeof pt;

const es: Dict = {
  lang: "es",
  htmlLang: "es-UY",
  locale: "es_UY",
  country: "uy",
  meta: {
    title: "Mileo Express | Transporte de carga Montevideo – São Paulo",
    description: `Camión completo entre Montevideo y São Paulo en ${OPERACAO.transitDays} días, con ${OPERACAO.departuresPerWeek} salidas por semana. Flota propia para operadores logísticos y exportadores, en la ruta desde 2000.`,
  },
  skip: "Saltar al contenido",
  nav: {
    label: "Navegación principal",
    links: [
      { href: "#operacao", label: "Operación" },
      { href: "#rota", label: "Ruta" },
      { href: "#frota", label: "Flota" },
      { href: "#quem-somos", label: "Quiénes somos" },
      { href: "#contato", label: "Contacto" },
    ],
    cta: "Hablar por WhatsApp",
    langLabel: "Idioma",
  },
  whatsappDefault: "¡Hola! Quisiera pedir una cotización de transporte.",
  hero: {
    eyebrow: "Transporte terrestre internacional · Uruguay y Brasil",
    title: ["Camión completo", "Montevideo ⇄ São Paulo", `en ${OPERACAO.transitDays} días.`],
    lead: "Flota propia para operadores logísticos, agentes de carga y exportadores. En la ruta desde 2000, con trato directo con quien dirige la empresa.",
    cta: "Pedir cotización",
    secondary: "Hablar por WhatsApp",
    imageAlt: "Volvo FH con sider de Mileo Express estacionado de noche frente a un galpón",
    stats: [
      { value: OPERACAO.transitDays, label: "días puerta a puerta, con aduana" },
      { value: OPERACAO.departuresPerWeek, label: "salidas por semana en cada sentido" },
      { count: OPERACAO.tonsPerLoad, suffix: " t", label: "por carga, camión exclusivo" },
      { count: OPERACAO.trucks, label: "camiones propios" },
    ],
  },
  operacao: {
    eyebrow: "Operación",
    title: ["Lo que necesita saber", "antes de cotizar."],
    rows: [
      { label: "Tiempo de tránsito", value: `${OPERACAO.transitDays} días puerta a puerta`, note: "Incluye el despacho en las aduanas de Chuy y Chuí." },
      { label: "Frecuencia", value: `${OPERACAO.departuresPerWeek} salidas por semana`, note: "En cada sentido, entre Montevideo y São Paulo." },
      { label: "Modalidad", value: "Carga completa", note: "El camión es exclusivo para su carga. No hacemos carga consolidada." },
      { label: "Capacidad", value: `${OPERACAO.tonsPerLoad} t o ${OPERACAO.palletsPerSider} pallets`, note: "Semirremolques sider, carga lateral." },
      { label: "Carga en Uruguay", value: "Montevideo y Maldonado", note: "Otros orígenes, a consultar." },
      { label: "Entrega en Brasil", value: "São Paulo y alrededores", note: "Otros destinos, incluso Argentina, a consultar." },
    ],
    aduana:
      "Las aduanas de frontera no operan los fines de semana. Los embarques a principio de semana llegan antes.",
  },
  rota: {
    eyebrow: "Ruta",
    title: ["De Montevideo a São Paulo,", "sin cambiar de manos."],
    lead: "La base está en Chuí, en la frontera. El mismo equipo acompaña la carga desde que se levanta hasta que se entrega.",
    legs: [
      { label: "Montevideo → Chuy", value: "unas 5 horas" },
      { label: "Aduanas de Chuy y Chuí", value: "alrededor de 1 día hábil" },
      { label: "Chuí → São Paulo", value: "2 a 3 días" },
    ],
    brazil: "Brasil",
    uruguay: "Uruguay",
    saoPaulo: "São Paulo",
    border: "frontera",
    distance: "Distancia aproximada",
    mapLabel: "Mapa ilustrativo de la ruta Montevideo, Maldonado, Rocha, Chuy, Pelotas, Porto Alegre y São Paulo",
    mapNote: "Mapa ilustrativo, fuera de escala.",
  },
  cargas: {
    eyebrow: "Qué transportamos",
    title: ["Carga paletizada,", "de punta a punta."],
    items: [
      { title: "Carga seca", text: "Mercadería paletizada, cajas, equipos industriales y productos embalados." },
      { title: "Productos químicos", text: "Indique el producto al cotizar para confirmar las condiciones de transporte." },
    ],
    other: "Consultar por otro tipo de carga",
    otherMessage: "¡Hola! Quisiera consultar por el transporte de otro tipo de carga.",
    imageAlt: "Cajones de madera paletizados y amarrados dentro de un sider",
  },
  porque: {
    eyebrow: "Por qué Mileo",
    title: ["Socio de operadores logísticos", "de Uruguay y Brasil."],
    items: [
      { title: "Habla directo con el dueño", text: "Jorge Mileo atiende personalmente los WhatsApp de Uruguay y Brasil. Sin call center." },
      { title: `${YEARS} años en la frontera del Chuy`, text: "Conocemos el camino, las dos aduanas y los trámites de cada lado." },
      { title: "Flota propia", text: `${OPERACAO.trucks} camiones y semirremolques sider de hasta ${OPERACAO.palletsPerSider} pallets, incluido un sider 0 km de 2026.` },
      { title: "Novedades de la carga por WhatsApp", text: "Avisamos la salida, la llegada a la frontera, la liberación aduanera y la hora estimada de entrega." },
    ],
    chat: {
      label: "Ejemplo ilustrativo",
      name: "Mileo Express",
      status: "conversación de ejemplo",
      messages: [
        { from: "us", text: "Cargado en Montevideo. Salimos hoy al mediodía, llegamos al Chuy esta noche.", time: "lun 11:40" },
        { from: "us", text: "Documentación liberada en las dos aduanas. Seguimos para São Paulo.", time: "mar 15:20" },
        { from: "them", text: "¡Buenas! ¿Cuándo estiman llegar?", time: "jue 09:05" },
        { from: "us", text: "¡Buen día! Estamos pasando Curitiba. Entrega mañana a primera hora.", time: "jue 09:12" },
        { from: "us", text: "Carga entregada en Guarulhos. ¡Gracias!", time: "vie 08:30" },
      ],
      note: "Mensajes ficticios, solo para mostrar cómo es el seguimiento.",
    },
  },
  frota: {
    eyebrow: "Flota",
    title: [`${OPERACAO.trucks} camiones propios,`, "listos para la ruta."],
    lead: `Semirremolques sider de hasta ${OPERACAO.palletsPerSider} pallets. En 2026 sumamos el primer sider 0 km.`,
    hp: "cv",
    alt: "Camión",
  },
  quem: {
    eyebrow: "Quiénes somos",
    title: ["Empezó al volante.", "Sigue cerca de la ruta."],
    paragraphs: [
      "Nacido en Montevideo, Jorge Mileo se mudó de joven al Chuy. Antes del transporte pasó por distintas actividades en el comercio, buscando oportunidades para construir su propio negocio.",
      "En 2000 compró su primer camión y empezó a trabajar solo. Hoy, con cuatro camiones, Mileo Express lleva el conocimiento de quien empezó al volante y sigue cerca del trabajo que hace crecer a la empresa.",
    ],
    imageAlt: "Scania 111 de 1978, el primer camión de Mileo Express",
    caption: "Scania 111, el primer camión, en 2000.",
    timeline: [
      { year: "2000", text: "Primer camión, un Scania 111." },
      { year: "2018", text: "Llega el primer Volvo FH." },
      { year: "2021", text: "Segundo camión en la ruta." },
      { year: "2024", text: "Tercer camión, un Iveco Stralis." },
      { year: "2026", text: "Cuarto camión y primer sider 0 km." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: ["Transporte de carga", "entre Uruguay y Brasil."],
    items: [
      {
        q: "¿Cuánto demora de Montevideo a São Paulo?",
        a: `De ${OPERACAO.transitDays} días puerta a puerta, incluido el despacho en las aduanas de Chuy y Chuí, que suele llevar un día hábil. Las aduanas no operan los fines de semana, así que los embarques a principio de semana llegan antes.`,
      },
      {
        q: "¿Cada cuánto salen los camiones?",
        a: `Tenemos de ${OPERACAO.departuresPerWeek} salidas por semana en cada sentido, de Montevideo a São Paulo (San Pablo) y de São Paulo a Montevideo.`,
      },
      {
        q: "¿Hacen carga consolidada?",
        a: `No. Trabajamos con carga completa: el camión es exclusivo para su carga, hasta ${OPERACAO.tonsPerLoad} toneladas o ${OPERACAO.palletsPerSider} pallets.`,
      },
      {
        q: "¿Dónde cargan y entregan?",
        a: "En Uruguay cargamos y entregamos en Montevideo y Maldonado. En Brasil, en São Paulo y alrededores. Otros destinos, incluso en Argentina, a consultar.",
      },
      {
        q: "¿Qué tipo de carga transportan?",
        a: "Carga seca paletizada, cajas, equipos industriales y productos embalados, además de productos químicos. Para químicos, indique el producto al cotizar para confirmar las condiciones.",
      },
      {
        q: "¿Trabajan con operadores logísticos y agentes de carga?",
        a: "Sí. Buena parte de nuestros clientes son operadores logísticos y agentes de carga de Uruguay y Brasil que necesitan un camión confiable en la ruta.",
      },
      {
        q: "¿Cómo pido una cotización?",
        a: `Complete el formulario o escríbanos por WhatsApp al ${WHATSAPP.uy.display} (Uruguay) o al ${WHATSAPP.br.display} (Brasil) con origen, destino, tipo de carga y peso aproximado.`,
      },
    ],
  },
  contato: {
    eyebrow: "Cotización",
    title: ["Cuéntenos qué necesita", "transportar."],
    lead: "Respondemos con plazo y precio. Le atiende quien dirige la empresa.",
    whatsappBr: "WhatsApp Brasil",
    whatsappUy: "WhatsApp Uruguay",
    emailLabel: "Correo",
    baseLabel: "Base de operaciones",
    base: "Chuí, RS – Brasil · frontera con Uruguay",
    safety: "Nunca cambiamos datos bancarios por WhatsApp ni por correo. Ante cualquier duda, llámenos para confirmar.",
    form: {
      title: "Pedir cotización",
      intro: "Complete y le enviamos todo listo por WhatsApp.",
      profile: "Usted es",
      profiles: ["Operador logístico", "Agente de carga", "Empresa (exportador o importador)"],
      select: "Seleccione",
      name: "Nombre",
      namePh: "Su nombre",
      company: "Empresa",
      companyPh: "Nombre de la empresa",
      origin: "Origen",
      originPh: "Ej.: Montevideo",
      destination: "Destino",
      destinationPh: "Ej.: Guarulhos, SP",
      type: "Tipo de carga",
      types: ["Carga seca", "Productos químicos", "Otra"],
      weight: "Peso o pallets",
      weightPh: "Ej.: 18 t o 26 pallets",
      date: "Fecha prevista",
      optional: "(opcional)",
      details: "Detalles",
      detailsPh: "Mercadería, embalaje, observaciones…",
      submit: "Enviar por WhatsApp",
      email: "¿Prefiere correo? Enviar por correo",
      emailSubject: "Cotización de transporte",
      footnote: "Cotización sin compromiso.",
      message: (f: QuoteForm) =>
        [
          `¡Hola! Me llamo ${f.name}${f.company ? `, de ${f.company}` : ""}${f.profile ? ` (${f.profile.toLowerCase()})` : ""}.`,
          `Quisiera una cotización de ${f.origin} a ${f.destination}.`,
          `Carga: ${f.type || "sin especificar"}${f.weight ? ` · ${f.weight}` : ""}`,
          f.date && `Fecha prevista: ${f.date}`,
          f.details && `Detalles: ${f.details}`,
        ]
          .filter(Boolean)
          .join("\n"),
    },
  },
  footer: {
    tagline: "Transporte terrestre internacional de carga entre Uruguay y Brasil desde 2000.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    rights: "Todos los derechos reservados.",
  },
  mobileCta: "Pedir cotización por WhatsApp",
};

export const dictionaries: Record<Lang, Dict> = { pt, es };
