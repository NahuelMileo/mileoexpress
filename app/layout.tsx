import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const descricao =
  "Transporte rodoviário internacional de cargas entre São Paulo e Montevidéu, nos dois sentidos. Empresa familiar com base em Chuí, desde 2000. Peça seu orçamento.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mileoexpress.com"),
  title: "Mileo Express | Transporte de cargas São Paulo – Montevidéu",
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Mileo Express",
    title: "Mileo Express | Transporte de cargas Brasil – Uruguai",
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mileo Express | Transporte de cargas Brasil – Uruguai",
    description: descricao,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
