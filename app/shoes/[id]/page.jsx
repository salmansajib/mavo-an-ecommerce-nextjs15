"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/shoe/product-details/Breadcrumb";
import ProductDetail from "@/components/shoe/product-details/ProductDetail";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import LoaderSpinner from "@/components/LoaderSpinner";

const page = () => {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("shoes", id);

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
    <div className="pt-[120px] !bg-gray-50">
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
    </div>
  );
};

export default page;
