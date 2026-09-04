import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Azevedo Costa | Desenvolvedor Full Stack",
  description: "Pedro Azevedo Costa transforma ideias em experiências digitais escaláveis, rápidas e orientadas a resultados.",
  keywords: ["Pedro Azevedo Costa", "Desenvolvedor", "Full Stack", "Desenvolvimento Web", "React", "Laravel"],
  openGraph: {
    title: "Pedro Azevedo Costa | Desenvolvedor Full Stack",
    description: "Soluções digitais que unem excelência técnica e valor real de negócio.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
