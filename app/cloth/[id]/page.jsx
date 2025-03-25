"use client";
import React from "react";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import BreadCrumbClothDetails from "@/components/cloth/product-details/BreadCrumbClothDetails";
import SingleProduct from "@/components/cloth/product-details/SingleProduct";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";

function Page() {
  const { id } = useParams();
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <BreadCrumbClothDetails />
      <SingleProduct product={product} />
      <ShopInfoCloth />
    </>
  );
}

export default Page;
