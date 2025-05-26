import React from "react";
import Banner from "@/components/jewelry/Banner";
import CollectionSection from "@/components/jewelry/CollectionSection";
import ProductSectionFirst from "@/components/jewelry/ProductSectionFirst";
import MarqueeSlideSection from "@/components/jewelry/MarqueeSlideSection";
import ProductSectionSecond from "@/components/jewelry/ProductSectionSecond";
import TestimonialSection from "@/components/jewelry/TestimonialSection";
import BestSellingProductSection from "@/components/jewelry/BestSellingProductSection";
import NewsSection from "@/components/jewelry/NewsSection";

const JewelryHome = () => {
  return (
    <>
      <Banner />
      <CollectionSection />
      <ProductSectionFirst />
      <MarqueeSlideSection />
      <ProductSectionSecond />
      <TestimonialSection />
      <BestSellingProductSection />
      <NewsSection />
    </>
  );
};

export default JewelryHome;
