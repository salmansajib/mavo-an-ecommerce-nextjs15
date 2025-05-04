"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import BreadCrumbClothDetails from "@/components/cloth/product-details/BreadCrumbClothDetails";
import SingleProduct from "@/components/cloth/product-details/SingleProduct";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import LoaderSpinner from "@/components/LoaderSpinner";
import SimilarProducts from "@/components/cloth/product-details/SimilarProducts";
import ProductTabs from "@/components/cloth/product-details/ProductTabs";

function Page() {
  const { id } = useParams();
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading || !products.length) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <LoaderSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const getSimilarProducts = (currentProduct, allProducts) => {
    return allProducts
      .filter((p) => p.id !== currentProduct.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  };

  const similarProducts = getSimilarProducts(product, products);

  return (
    <>
      <BreadCrumbClothDetails />
      <SingleProduct product={product} />
      <ProductTabs product={product} />
      <SimilarProducts similarProducts={similarProducts} />
      <ShopInfoCloth />
    </>
  );
}

export default Page;
