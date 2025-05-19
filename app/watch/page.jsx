import Banner from "@/components/watch/Banner";
import CollectionSection from "@/components/watch/CollectionSection";
import Header from "@/components/watch/header1/Header";
import ProductSectionFirst from "@/components/watch/ProductSectionFirst";
import ProductSectionSecond from "@/components/watch/ProductSectionSecond";
import ProductSectionThird from "@/components/watch/ProductSectionThird";
import ShopInfoSection from "@/components/watch/ShopInfoSection";
import TestimonialSection from "@/components/watch/TestimonialSection";
import React from "react";

const WatchHome = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductSectionFirst />
      <CollectionSection />
      <ProductSectionSecond />
      <ProductSectionThird />
      <TestimonialSection />
      <ShopInfoSection />
    </>
  );
};

export default WatchHome;
