import React from "react";
import ClothBanner from "@/components/cloth/ClothBanner";
import ClothCollertion from "@/components/cloth/ClothCollection";
import ClothTestimonial from "@/components/cloth/ClothTestimonial";
import CollectionSection from "@/components/cloth/CollectionSection";
import ProductSectionFirst from "@/components/cloth/ProductSectionFirst";
import ProductSectionSecond from "@/components/cloth/ProductSectionSecond";
import ShopInfo from "@/components/cloth/ShopInfo";

export default function ClothPage() {
  return (
    <>
      <ClothBanner />
      <ClothCollertion />
      <ProductSectionFirst />
      <CollectionSection />
      <ProductSectionSecond />
      <ClothTestimonial />
      <ShopInfo />
    </>
  );
}
