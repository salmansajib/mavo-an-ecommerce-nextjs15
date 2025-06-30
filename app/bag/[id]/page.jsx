"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import LoaderSpinner from "@/components/LoaderSpinner";
import Breadcrumb from "@/components/bag/product-details/Breadcrumb";
import ProductDetail from "@/components/bag/product-details/ProductDetail";
import ProductTabs from "@/components/bag/product-details/ProductTabs";
import ProductSectionMens from "@/components/bag/ProductSectionMens";

export default function page() {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("bag", id);

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

  // Product not found
  if (!singleProductData || !singleProductData.product) {
    return <div className="text-center text-2xl">Product not found</div>;
  }

  const product = singleProductData.product;

  return (
    <div>
      <Breadcrumb />
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <ProductSectionMens />
    </div>
  );
}
