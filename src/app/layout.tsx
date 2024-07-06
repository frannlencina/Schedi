import { Exo_2 } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
// NextJS Components 
import type { Metadata } from "next";

// Components
import Navbar from "./components/Ui/Navbar";
import Footer from "./components/Ui/Footer";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedi",
  description: "Tu agenda, tu herramienta favorita.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en">
      <head>
        <link href=" https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.min.css " rel="stylesheet" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>

  );
}
