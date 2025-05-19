import React from "react";
import BannerCloth from "@/components/cloth/BannerCloth";
import CollectionCloth from "@/components/cloth/CollectionCloth";
import TestimonialCloth from "@/components/cloth/TestimonialCloth";
import CollectionSectionCloth from "@/components/cloth/CollectionSectionCloth";
import ProductSectionFirstCloth from "@/components/cloth/ProductSectionFirstCloth";
import ProductSectionSecondCloth from "@/components/cloth/ProductSectionSecondCloth";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";

const ClothHome = () => {
  return (
    <>
      <BannerCloth />
      <CollectionCloth />
      <ProductSectionFirstCloth />
      <CollectionSectionCloth />
      <ProductSectionSecondCloth />
      <TestimonialCloth />
      <ShopInfoCloth />
    </>
  );
};

export default ClothHome;
