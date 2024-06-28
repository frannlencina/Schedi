import { Exo_2 } from "next/font/google";
import "./globals.css";

// NextJS Components 
import type { Metadata } from "next";
import Head from "next/head";
// Components
import Navbar from "./components/Ui/Navbar";
import Footer from "./components/Ui/Footer";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedi",
  description: "Tu agenda, tu herramienta favorita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href=" https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.min.css " rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
    </html>
  );
}
