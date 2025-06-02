import React from "react";
import AllProduct from "@/components/beauty-product/all-product/AllProduct";
import Banner from "@/components/beauty-product/all-product/Banner";
import GallerySection from "@/components/beauty-product/GallerySection";

const page = () => {
  return (
    <div>
      <Banner />
      <AllProduct />
      <GallerySection />
    </div>
  );
};

export default page;
