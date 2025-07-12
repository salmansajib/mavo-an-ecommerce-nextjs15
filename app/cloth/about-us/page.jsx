"use client";
import React from "react";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import AboutMeta from "@/components/cloth/about-us/AboutMeta";
import Banner from "@/components/cloth/about-us/Banner";
import CollectionSection from "@/components/cloth/about-us/CollectionSection";
import CollToActionSection from "@/components/cloth/CollToActionSection";
import SimilarProducts from "@/components/cloth/product-details/SimilarProducts";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import TestimonialCloth from "@/components/cloth/TestimonialCloth";
import LoaderSpinner from "@/components/LoaderSpinner";

const SIMILAR_PRODUCTS_LIMIT = 8;

export default function ClothAboutHome() {
  const { id } = useParams();

  // Fetch similar products (random, excluding current product)
  const {
    data: similarProductsData,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useProducts("cloth", 1, SIMILAR_PRODUCTS_LIMIT, "first", true, 0, [id]);

  // Loading state
  if (isSimilarLoading) {
    return (
      <div className="flex items-center justify-center h-[800px]">
        <LoaderSpinner />
      </div>
    );
  }

  if (similarError) {
    // Log similar products error but don't block rendering
    console.error("Failed to load similar products:", similarError.message);
  }

  const similarProducts = similarProductsData?.products || [];

  return (
    <>
      <Banner />
      <CollectionSection />
      <CollToActionSection />
      <AboutMeta />
      <SimilarProducts
        similarProducts={similarProducts}
        title="Popular This Season"
      />
      <TestimonialCloth />
      <ShopInfoCloth />
    </>
  );
}
