import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Bem vindo ao Portifólio do João",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${archivo.className}`}>{children}</body>
    </html>
  );
}
