// Datos de la empresa: única fuente para textos, contacto, footer y datos estructurados.
// Si cambia un número o un dato, se cambia acá.

export const SITE_URL = "https://www.mileoexpress.com";
export const EMAIL = "contato@mileoexpress.com";

export const LEGAL_NAME = "MILEO EXPRESS TRANSPORTE LTDA. – ME";
export const CNPJ = "60.899.264/0001-50";

export const FOUNDED = 2000;
export const YEARS = new Date().getFullYear() - FOUNDED;

// Los dos números los atiende Jorge Mileo.
export const WHATSAPP = {
  br: { number: "5553991338841", display: "+55 53 99133 8841" },
  uy: { number: "59899874250", display: "+598 99 874 250" },
} as const;

export type Country = keyof typeof WHATSAPP;

export const whatsappLink = (country: Country, message: string) =>
  `https://wa.me/${WHATSAPP[country].number}?text=${encodeURIComponent(message)}`;

// Datos operativos confirmados por la empresa (octubre de 2026)
export const OPERACAO = {
  transitDays: "4–5",
  departuresPerWeek: "2–3",
  tonsPerLoad: 20,
  palletsPerSider: 30,
  trucks: 4,
  routeKm: 2000,
} as const;
