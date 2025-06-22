import React from "react";
import Banner from "@/components/beauty/Banner";
import CategorySection from "@/components/beauty/CategorySection";
import ProductSectionFirst from "@/components/beauty/ProductSectionFirst";
import ProductSectionSecond from "@/components/beauty/ProductSectionSecond";
import CallToActionSection from "@/components/beauty/CallToActionSection";
import ProductSectionThird from "@/components/beauty/ProductSectionThird";
import ShopInfo from "@/components/beauty/ShopInfo";
import ProductSectionFourth from "@/components/beauty/ProductSectionFourth";
import TestimonialSection from "@/components/beauty/TestimonialSection";
import RecentPosts from "@/components/beauty/RecentPosts";
import GallerySection from "@/components/beauty/GallerySection";

const BeautyProductHome = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <ProductSectionFirst />
      <ProductSectionSecond />
      <CallToActionSection />
      <ProductSectionThird />
      <ShopInfo />
      <ProductSectionFourth />
      <TestimonialSection />
      <RecentPosts />
      <GallerySection />
    </>
  );
};

export default BeautyProductHome;
