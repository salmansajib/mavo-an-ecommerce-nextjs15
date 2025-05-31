import React from "react";
import Banner from "@/components/beauty-product/Banner";
import CategorySection from "@/components/beauty-product/CategorySection";
import ProductSectionFirst from "@/components/beauty-product/ProductSectionFirst";
import ProductSectionSecond from "@/components/beauty-product/ProductSectionSecond";
import CallToActionSection from "@/components/beauty-product/CallToActionSection";
import ProductSectionThird from "@/components/beauty-product/ProductSectionThird";
import ShopInfo from "@/components/beauty-product/ShopInfo";
import ProductSectionFourth from "@/components/beauty-product/ProductSectionFourth";
import TestimonialSection from "@/components/beauty-product/TestimonialSection";
import RecentPosts from "@/components/beauty-product/RecentPosts";
import GallerySection from "@/components/beauty-product/GallerySection";

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
