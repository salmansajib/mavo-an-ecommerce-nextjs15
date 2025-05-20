import React from "react";
import BannerSectionShop from "@/components/watch/all-product/BannerSectionShop";
import Header from "@/components/watch/header1/Header";
import AllProduct from "@/components/watch/all-product/AllProduct";
import ShopInfoSection from "@/components/watch/ShopInfoSection";

const page = () => {
  return (
    <>
      <Header />
      <BannerSectionShop />
      <AllProduct />
      <ShopInfoSection />
    </>
  );
};

export default page;
