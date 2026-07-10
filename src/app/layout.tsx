import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignacio Orco Barberis | Desarrollo Web para Negocios",
  description: "Mostramos de lo que tu negocio es capaz. Desarrollo web optimizado, rápido y enfocado en escalar ventas.",
  metadataBase: new URL("https://barberis.dev"),
  openGraph: {
    title: "Ignacio Orco Barberis | Desarrollo Web para Negocios",
    description: "Mostramos de lo que tu negocio es capaz. Desarrollo web optimizado, rápido y enfocado en escalar ventas.",
    url: "https://barberis.dev",
    siteName: "Ignacio Orco Barberis",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignacio Orco Barberis | Desarrollo Web para Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Orco Barberis | Desarrollo Web para Negocios",
    description: "Mostramos de lo que tu negocio es capaz. Desarrollo web optimizado, rápido y enfocado en escalar ventas.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  // Código de verificación de Google Search Console
  verification: {
    google: "FXpwD2UR0IdgTYTLCm_9gO1YN1CwT7F13YZQUinlRJg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-beige text-brand-olive select-none">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
