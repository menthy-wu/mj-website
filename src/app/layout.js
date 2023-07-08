"use client";
/* eslint-disable new-cap */
/* eslint-disable camelcase */
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";
import { Playfair_Display, Abril_Fatface } from "next/font/google";
import { useEffect, useState } from "react";
import WorkContext from "@/components/WorkContext";
import PopulateWorks from "@/components/PopulateWorks";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const abril = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  weight: ["400"],
});

// export const metadata = {
//   title: "Oliva Ming",
//   description: "personal website for Oliva Ming",
// };

export default function RootLayout({ children }) {
  const [workList, setWorkList] = useState([]);
  useEffect(() => {
    setWorkList(PopulateWorks());
  }, []);
  return (
    <WorkContext.Provider value={workList}>
      <html lang="zh-Hans" className={`${abril.variable} ${playfair.variable}`}>
        <body className="bg-mj-black text-white w-screen">
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </WorkContext.Provider>
  );
}
