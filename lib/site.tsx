import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { dictionaries, type Lang } from "./content";
import { CNPJ, EMAIL, FOUNDED, LEGAL_NAME, SITE_URL, WHATSAPP } from "./empresa";

// Sora es la tipografía de texto del manual de identidad.
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });

export const siteViewport: Viewport = { themeColor: "#f2f0ef" };

const pathOf = (lang: Lang) => (lang === "pt" ? "/" : "/es");

export function buildMetadata(lang: Lang): Metadata {
  const t = dictionaries[lang];
  const path = pathOf(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: path, languages: { "pt-BR": "/", "es-UY": "/es", "x-default": "/" } },
    icons: { icon: "/brand/symbol.svg" },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: path,
      siteName: "Mileo Express",
      locale: t.locale,
      alternateLocale: lang === "pt" ? "es_UY" : "pt_BR",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.hero.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: ["/og.jpg"] },
  };
}

function structuredData(lang: Lang) {
  const t = dictionaries[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#empresa`,
        name: "Mileo Express",
        legalName: LEGAL_NAME,
        taxID: CNPJ,
        description: t.meta.description,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/symbol.svg`,
        image: `${SITE_URL}/og.jpg`,
        telephone: [WHATSAPP.br.display, WHATSAPP.uy.display],
        email: EMAIL,
        foundingDate: String(FOUNDED),
        address: { "@type": "PostalAddress", addressLocality: "Chuí", addressRegion: "RS", addressCountry: "BR" },
        areaServed: [
          { "@type": "Country", name: "Brasil" },
          { "@type": "Country", name: "Uruguay" },
        ],
      },
      {
        "@type": "FAQPage",
        inLanguage: t.htmlLang,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = dictionaries[lang];
  return (
    <html lang={t.htmlLang}>
      <body className={`${sora.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
