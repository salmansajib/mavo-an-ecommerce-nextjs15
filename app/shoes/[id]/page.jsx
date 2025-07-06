"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/shoe/product-details/Breadcrumb";
import ProductDetail from "@/components/shoe/product-details/ProductDetail";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProductTabs from "@/components/shoe/product-details/ProductTabs";
import SimilarProducts from "@/components/shoe/product-details/SimilarProducts";

const SIMILAR_PRODUCTS_LIMIT = 8;

const page = () => {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("shoes", id);

  // Fetch similar products (random, excluding current product)
  const {
    data: similarProductsData,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useProducts("shoes", 1, SIMILAR_PRODUCTS_LIMIT, "first", true, 0, [id]);

  if (isProductLoading || isSimilarLoading) {
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
  if (similarError) {
    // Log similar products error but don't block rendering
    console.error("Failed to load similar products:", similarError.message);
  }

  // Product not found
  if (!singleProductData || !singleProductData.product) {
    return <div className="text-center text-2xl">Product not found</div>;
  }

  const product = singleProductData.product;
  const similarProducts = similarProductsData?.products || [];

  return (
    <div className="pt-[120px] !bg-gray-50">
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <SimilarProducts similarProducts={similarProducts} />
    </div>
  );
};

export default page;
