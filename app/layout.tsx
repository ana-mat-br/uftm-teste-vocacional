import type { Metadata, Viewport } from "next";
import "./globals.css";
import VaporwaveBg from "@/components/VaporwaveBg";
import MuteToggle from "@/components/MuteToggle";

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
  themeColor: "#0d0221",
};

/**
 * Script inline pra resolver o tema antes do paint e evitar FOUC.
 * Default é vaporwave (cool). ?palette=warm volta pra synthwave-sunset.
 */
const PALETTE_INIT = `(function(){try{var p=new URLSearchParams(location.search).get('palette');if(p==='warm')document.documentElement.classList.add('theme-warm');}catch(e){}})();`;

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
          href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Pixelify+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: PALETTE_INIT }} />
      </head>
      <body>
        <VaporwaveBg />
        {children}
        <MuteToggle />
      </body>
    </html>
  );
}
