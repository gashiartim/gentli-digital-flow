import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gentli Shoes",
  description: "Author: Artim Gashi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootLayoutClassNames = classNames("", poppins.className);

  return (
    <html lang="en">
      <body className={rootLayoutClassNames}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
