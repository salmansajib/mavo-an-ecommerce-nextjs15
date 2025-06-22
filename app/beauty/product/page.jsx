import React from "react";
import AllProduct from "@/components/beauty/all-product/AllProduct";
import Banner from "@/components/beauty/all-product/Banner";
import GallerySection from "@/components/beauty/GallerySection";

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
