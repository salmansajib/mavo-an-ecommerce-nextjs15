"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/beauty-product/product-details/ProductDetail";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import ProductTabs from "@/components/beauty-product/product-details/ProductTabs";
import ShopInfo from "@/components/beauty-product/ShopInfo";

function page() {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("beauty", id);

  if (isProductLoading) {
    return (
      <div className="flex items-center justify-center h-[1000px]">
        <LoaderSpinner />
      </div>
    );
  }

  // Error state
  if (productError) {
    return (
      <div className="text-red-500 text-center text-2xl">
        Failed to load product. Please try again.
      </div>
    );
  }

  const product = singleProductData.product;

  return (
    <div className="mt-[150px]">
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <ShopInfo />
    </div>
  );
}

export default page;
