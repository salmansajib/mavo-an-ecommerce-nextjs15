"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProductDetail from "@/components/jewelry/product-details/ProductDetail";
import BreadCrumb from "@/components/jewelry/product-details/BreadCrumb";
import ProductTabs from "@/components/jewelry/product-details/ProductTabs";
import BestSellingProductSection from "@/components/jewelry/BestSellingProductSection";

const page = () => {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("jewelry", id);

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
    <div className="pt-[150px]">
      <BreadCrumb product={product} />
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <BestSellingProductSection title="related products" />
    </div>
  );
};

export default page;
