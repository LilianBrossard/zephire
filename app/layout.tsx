import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./css/globals.css";
import Header from "@/components/bloc/Header";
import Footer from "@/components/bloc/Footer";

import { cn } from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Zephire",
  description:
    "météo, prévisions, température, climat, météorologie, conditions météorologiques, météo locale, météo en direct, météo du jour, météo internationale, météo locale, météo en ligne, météo gratuite, météo précise, météo fiable, météo actuelle, météo France, météo Europe",
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
          "w-screen h-screen overflow-x-hidden bg-gradient-to-t from-slate-400 to-slate-700"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
