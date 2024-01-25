import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/mainHeader";
import MainFooter from "./components/mainFooter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEA",
  description: "IDEA",
};

export default function RootLayout({children}: {children: React.ReactNode})
{
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainHeader />
        {children}
        <MainFooter />
        </body>
    </html>
  );
}
