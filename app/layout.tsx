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
  title: "Nexvia | Criação de Landing Pages Personalizadas",
  description:
    "Landing pages personalizadas, sem template, feitas para apresentar seu negócio e levar o visitante ao contato. Design, performance e conversão.",
  keywords: ["criação de landing page", "landing page personalizada", "site para negócio", "página de vendas", "design de landing page"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Nexvia | Criação de Landing Pages Personalizadas",
    description: "Landing pages personalizadas, sem template, feitas para apresentar seu negócio e levar o visitante ao contato. Design, performance e conversão.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexvia | Criação de Landing Pages Personalizadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexvia | Criação de Landing Pages Personalizadas",
    description: "Landing pages personalizadas, sem template, feitas para apresentar seu negócio e levar o visitante ao contato. Design, performance e conversão.",
    images: ["/og-image.png"],
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
