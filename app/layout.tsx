import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protocolo Vocação — UFTM 2087",
  description: "Embarque numa missão interplanetária e descubra qual curso da UFTM é o seu papel na tripulação. Quiz vocacional gamificado da Feira de Profissões UFTM.",
  openGraph: {
    title: "Protocolo Vocação — UFTM 2087",
    description: "Descubra seu papel na expedição UFTM-Kepler.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a0633",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Pixelify+Sans:wght@400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
