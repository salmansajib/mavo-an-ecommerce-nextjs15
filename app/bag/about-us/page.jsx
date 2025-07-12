import AboutBagCollection from "@/components/bag/about-us/AboutBagCollection";
import Banner from "@/components/bag/about-us/Banner";
import ProductStatistics from "@/components/bag/about-us/ProductStatistics";
import BlogSection from "@/components/bag/BlogSection";
import CallToActionSection from "@/components/bag/CallToActionSection";
import NewsletterSection from "@/components/bag/NewsletterSection";
import ShopInfo from "@/components/bag/ShopInfo";
import TestimonialSection from "@/components/bag/TestimonialSection";
import React from "react";

export default function BagAboutHome() {
  return (
    <>
      <Banner />
      <ShopInfo />
      <AboutBagCollection />
      <CallToActionSection />
      <ProductStatistics />
      <TestimonialSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
