import React from "react";
import BannerShoe from "@/components/shoe/BannerShoe";
import CollectionSection from "@/components/shoe/CollectionSection";
import ProductSectionFirst from "@/components/shoe/ProductSectionFirst";
import Collection from "@/components/shoe/Collection";
import ProductSectionSecond from "@/components/shoe/ProductSectionSecond";
import NewestProducts from "@/components/shoe/NewestProducts";
import RecentPosts from "@/components/shoe/RecentPosts";

const ShoesHome = () => {
  return (
    <>
      <BannerShoe />
      <CollectionSection />
      <ProductSectionFirst />
      <Collection />
      <ProductSectionSecond />
      <NewestProducts />
      <RecentPosts />
    </>
  );
};

export default ShoesHome;
