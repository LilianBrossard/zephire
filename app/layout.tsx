import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/bloc/Header";
import Footer from "@/components/bloc/Footer";

import { cn } from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Météo",
  description:
    "météo, prévisions, température, climat, météorologie, conditions météorologiques, météo locale, météo en direct, météo du jour, météo de demain, météo de la semaine, météo internationale, météo locale, météo en ligne, météo gratuite, météo précise, météo fiable, météo actuelle, météo France, météo Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          lato,
          "w-screen h-screen overflow-x-hidden bg-gradient-to-t from-gray-950 to-slate-900"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
