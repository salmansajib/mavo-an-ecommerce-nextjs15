import React from "react";
import ContactSection from "@/components/contact/ContactSection";
import Header from "@/components/shoe/header/Header";
import Footer from "@/components/shoe/Footer";
import ShopInfo from "@/components/shoe/ShopInfo";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactSection />
      <ShopInfo />
      <Footer />
    </>
  );
}
