"use client";
import React from "react";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCardTwo from "./ItemCardTwo";
import Image from "next/image";

const FEATURED_PRODUCTS_LIMIT = 2;

const ProductSectionThird = () => {
  // Fetch last 2 products (page=1, limit=2)
  const { data, isLoading, error } = useProducts(
    "beauty",
    1,
    FEATURED_PRODUCTS_LIMIT,
    "last",
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
    <div className="specific-product specific-product1 mavo-pt-120 mavo-md-pt-80 mavo-pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="specific-product-left">
              <Image
                width={1000}
                height={1000}
                quality={100}
                className="w-[700px] h-auto"
                src="/images/products/product-5.11.jpg"
                alt="product"
              />
              <img
                className="shape"
                src="/images/icons/collection-shape-4.1.png"
                alt="shape"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-heading-area mavo-mb-75 mavo-md-mb-45">
              <h2 className="specific-product-title mavo-mb-30">
                Brow Sculpture and Facial Waxing
              </h2>
              <p className="specific-desc mavo-mb-40">
                Gentle, yet effective formulas that go beneath the surface to
                reveal your best skin yet.
              </p>
              <span className="specific-sub-title text-uppercase">
                Shop All Collections
              </span>
            </div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-6 col-md-6">
                  <ItemCardTwo product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionThird;
