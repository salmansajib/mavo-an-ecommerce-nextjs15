import React from "react";
import Banner from "@/components/beauty/about-us/Banner";
import ProductServicesSection from "@/components/beauty/about-us/ProductServicesSection";
import ProductStatisticsSection from "@/components/beauty/about-us/ProductStatisticsSection";
import ShopInfo from "@/components/beauty/ShopInfo";
import TestimonialSection from "@/components/beauty/TestimonialSection";
import RecentPosts from "@/components/beauty/RecentPosts";

export default function BeautyAboutHome() {
  return (
    <>
      <Banner />
      <ShopInfo />
      <ProductServicesSection />
      <ProductStatisticsSection />
      <TestimonialSection />
      <RecentPosts />
    </>
  );
}
