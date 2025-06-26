import AllProduct from "@/components/bag/all-product/AllProduct";
import BannerBagShop from "@/components/bag/all-product/BannerBagShop";
import NewsletterSection from "@/components/bag/NewsletterSection";
import React from "react";

export default function page() {
  return (
    <div>
      <BannerBagShop />
      <AllProduct />
      <NewsletterSection />
    </div>
  );
}
