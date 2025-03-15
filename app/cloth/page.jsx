import React from "react";
import ClothBanner from "@/components/cloth/BannerCloth";
import ClothCollertion from "@/components/cloth/CollectionCloth";
import ClothTestimonial from "@/components/cloth/TestimonialCloth";
import CollectionSection from "@/components/cloth/CollectionSectionCloth";
import ProductSectionFirst from "@/components/cloth/ProductSectionFirstCloth";
import ProductSectionSecond from "@/components/cloth/ProductSectionSecondCloth";
import ShopInfo from "@/components/cloth/ShopInfoCloth";

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
