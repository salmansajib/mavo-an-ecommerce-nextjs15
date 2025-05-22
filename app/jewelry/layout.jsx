import Header from "@/components/jewelry/header/Header";
import React from "react";

export default function JewelryLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
