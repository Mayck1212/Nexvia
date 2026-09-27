import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXVIA — Agência de Desenvolvimento Web Premium",
  description:
    "Transformamos negócios em experiências digitais de alto impacto. Design, performance e conversão em cada pixel.",
  keywords: ["agência web", "desenvolvimento web", "design UI/UX", "landing page", "e-commerce"],
  openGraph: {
    title: "NEXVIA — Experiências Digitais de Alto Impacto",
    description: "Design premium. Performance real. Resultados mensuráveis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

