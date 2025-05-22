"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProductDetail from "@/components/watch/product-details/ProductDetail";
import ShopInfoSection from "@/components/watch/ShopInfoSection";
import Header from "@/components/watch/header2/Header";
import ProductTabs from "@/components/shoe/product-details/ProductTabs";
import ProductSectionFirst from "@/components/watch/ProductSectionFirst";
import RelatedProducts from "@/components/watch/product-details/RelatedProducts";

const SIMILAR_PRODUCTS_LIMIT = 6;

const page = () => {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("watch", id);

  // Fetch first 6 products as similar products
  const {
    data: similarProductsData,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useProducts("watch", 1, SIMILAR_PRODUCTS_LIMIT, "first");

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
    <>
      <Header />
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <ProductSectionFirst />
      <RelatedProducts products={similarProducts} />
      <ShopInfoSection />
    </>
  );
};

export default page;
