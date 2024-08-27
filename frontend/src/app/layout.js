"use client";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang='pt'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
