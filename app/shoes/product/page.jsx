import AllProduct from "@/components/shoe/all-product/AllProduct";
import Breadcrumb from "@/components/shoe/all-product/Breadcrumb";
import ShopInfo from "@/components/shoe/ShopInfo";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb />
      <AllProduct />
      <ShopInfo />
    </>
  );
};

export default page;
