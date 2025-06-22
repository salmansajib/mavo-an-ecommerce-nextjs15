"use client";
import React from "react";
import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCardTwo from "./ItemCardTwo";

const FEATURED_PRODUCTS_LIMIT = 2;

const ProductSectionSecond = () => {
  // Fetch first 2 products (page=1, limit=2)
  const { data, isLoading, error } = useProducts(
    "beauty",
    1,
    FEATURED_PRODUCTS_LIMIT,
    "first",
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <LoaderSpinner />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <p className="text-red-500 text-center">
        Failed to load products. Please try again.
      </p>
    );
  }

  // No products state
  if (!data || !data.products || data.products.length === 0) {
    return <p className="text-center text-xl">No products available.</p>;
  }

  const products = data.products;

  return (
    <div className="specific-product mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mavo-heading-area mavo-mb-75 mavo-md-mb-45">
              <h2 className="specific-product-title mavo-mb-30">
                More Than Just Skin Deep.
              </h2>
              <p className="specific-desc mavo-mb-40">
                Gentle, yet effective formulas that go beneath the surface to
                reveal your best skin yet.
              </p>
              <span className="specific-sub-title text-uppercase">
                Shop All Skincare
              </span>
            </div>
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-6 col-md-6" key={product.id}>
                  <ItemCardTwo product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="specific-product-right">
              <img
                className="shape"
                src="/images/icons/collection-shape-4.1.png"
                alt="shape"
              />
              <Image
                width={1000}
                height={1000}
                quality={100}
                className="w-[700px] h-auto"
                src="/images/products/product-5.8.jpg"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecond;
