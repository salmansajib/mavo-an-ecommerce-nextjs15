import React from "react";
import Banner from "@/components/bag/Banner";
import CallToActionSection from "@/components/bag/CallToActionSection";
import CategorySection from "@/components/bag/CategorySection";
import ProductSectionGirls from "@/components/bag/ProductSectionGirls";
import ProductSectionMens from "@/components/bag/ProductSectionMens";
import ShopInfo from "@/components/bag/ShopInfo";
import TestimonialSection from "@/components/bag/TestimonialSection";
import BlogSection from "@/components/bag/BlogSection";
import NewsletterSection from "@/components/bag/NewsletterSection";
import Footer from "@/components/bag/Footer";

function BagHome() {
  return (
    <>
      <Banner />
      <ShopInfo />
      <CategorySection />
      <ProductSectionGirls />
      <CallToActionSection />
      <ProductSectionMens />
      <TestimonialSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default BagHome;
