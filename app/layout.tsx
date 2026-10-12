import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mileoexpress.com";
const description =
  "Empresa familiar de transporte internacional de cargas na rota São Paulo–Montevideo desde 2000. Atendimento direto com os donos, frota própria e especialistas na fronteira de Chuí.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mileo Express | Transporte internacional Brasil–Uruguai",
  description,
  openGraph: {
    title: "Mileo Express | Transporte internacional Brasil–Uruguai",
    description,
    url: siteUrl,
    siteName: "Mileo Express",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#111113",
};

// Decide antes del primer pintado si se muestra la intro (una vez por sesión, nunca con movimiento reducido)
const introScript = `(function(){var d=document.documentElement;try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var s=sessionStorage.getItem('mx-intro');d.classList.add(r||s?'no-intro':'intro-on');}catch(e){d.classList.add('no-intro');}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Mileo Express Transportes",
  description,
  url: siteUrl,
  telephone: "+55 53 99133 8841",
  email: "contato@mileoexpress.com",
  foundingDate: "2000",
  logo: `${siteUrl}/logoRedondo.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chuy",
    addressRegion: "Rocha",
    addressCountry: "UY",
  },
  areaServed: ["Brasil", "Uruguai", "Argentina"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
