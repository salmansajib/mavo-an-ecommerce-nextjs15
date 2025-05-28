"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCard from "./ItemCard";
import ItemCardThree from "./ItemCardThree";

const FEATURED_PRODUCTS_LIMIT = 3;

const ProductSectionSecond = () => {
  // Fetch last 3 products (page=1, limit=3)
  const { data, isLoading, error } = useProducts(
    "jewelry",
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
    <div className="mavo-collection-style-2 mavo-pt-120 mavo-pl-110 mavo-pr-110 mavo-pb-60">
      <div className="container-fluid">
        <div className="row">
          {/* model image */}
          <div className="col-lg-7">
            <div className="mavo-collection-left">
              <Image
                width={1000}
                height={1000}
                className="w-[950px] h-auto object-cover"
                src="/images/products/product-4.10.jpg"
                alt="model"
              />
            </div>
          </div>

          {/* title and description */}
          <div className="col-lg-2">
            <div className="mavo-collection-meta">
              <span className="meta-number2">1.0</span>
              <div className="mavo-collection-meta-title">
                <h1 className="mavo-collection-meta-sub-title">mavvo</h1>
                <h2 className="collection-meta-title2 text-uppercase title-white-color">
                  Diamond Collection
                </h2>
              </div>
              <p className="mavo-meta-desc">
                Diamond pulvinar dolorum aspernatur officiis luctu lectu ullamco
                facilis habitasse tempore olapo.
              </p>
              <Link href="/jewelry/product">
                <Image
                  width={300}
                  height={300}
                  className="rotated-style w-[135px] h-auto"
                  src="/images/icons/circle_2.png"
                  alt="arrow"
                />
                <span>
                  <Image
                    width={300}
                    height={300}
                    className="w-[20px] h-auto"
                    src="/images/icons/while-1.png"
                    alt="Arrow"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* products */}
          <div className="col-lg-3">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-12 col-md-6">
                  <ItemCardThree product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecond;
