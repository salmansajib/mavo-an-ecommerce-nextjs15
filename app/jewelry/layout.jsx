import Footer from "@/components/jewelry/Footer";
import Header from "@/components/jewelry/header/Header";
import ShopInfo from "@/components/jewelry/ShopInfo";
import React from "react";

export default function JewelryLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <ShopInfo />
      <Footer />
    </main>
  );
}
