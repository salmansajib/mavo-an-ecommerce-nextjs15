import React from "react";
import Header from "@/components/shoe/header/Header";
import CheckoutSection from "@/components/checkout/CheckoutSection";
import ShopInfo from "@/components/shoe/ShopInfo";
import Footer from "@/components/shoe/Footer";

export default function CheckoutPage() {
  return (
    <div>
      <Header />
      <CheckoutSection />
      <ShopInfo />
      <Footer />
    </div>
  );
}
