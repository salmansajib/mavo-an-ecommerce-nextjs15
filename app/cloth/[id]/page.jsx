"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import { useProducts } from "@/hooks/useProducts";
import BreadCrumbClothDetails from "@/components/cloth/product-details/BreadCrumbClothDetails";
import SingleProduct from "@/components/cloth/product-details/SingleProduct";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import LoaderSpinner from "@/components/LoaderSpinner";
import SimilarProducts from "@/components/cloth/product-details/SimilarProducts";
import ProductTabs from "@/components/cloth/product-details/ProductTabs";

const SIMILAR_PRODUCTS_LIMIT = 8;

function Page() {
  const { id } = useParams();

  // Fetch single product by ID
  const {
    data: singleProductData,
    isLoading: isProductLoading,
    error: productError,
  } = useSingleProduct("cloth", id);

  // Fetch similar products (random, excluding current product)
  const {
    data: similarProductsData,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useProducts("cloth", 1, SIMILAR_PRODUCTS_LIMIT, "first", true, 0, [id]);

  // Loading state
  if (isProductLoading || isSimilarLoading) {
    return (
      <div className="flex items-center justify-center h-[800px]">
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
      <BreadCrumbClothDetails product={product} />
      <SingleProduct product={product} />
      <ProductTabs product={product} />
      <SimilarProducts similarProducts={similarProducts} />
      <ShopInfoCloth />
    </>
  );
}

export default Page;
