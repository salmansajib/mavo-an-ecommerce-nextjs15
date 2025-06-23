import React from "react";
import Banner from "@/components/bag/Banner";
import CallToActionSection from "@/components/bag/CallToActionSection";
import CategorySection from "@/components/bag/CategorySection";
import ProductSectionGirls from "@/components/bag/ProductSectionGirls";
import ProductSectionMens from "@/components/bag/ProductSectionMens";
import ShopInfo from "@/components/bag/ShopInfo";
import TestimonialSection from "@/components/bag/TestimonialSection";

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
    </>
  );
}

export default BagHome;
