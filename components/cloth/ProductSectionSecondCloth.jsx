"use client";

import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCard from "./ItemCard";

const FEATURED_PRODUCTS_LIMIT = 4;

const ProductSectionSecondCloth = () => {
  // Fetch first 4 products (page=1, limit=4)
  const { data, isLoading, error } = useProducts(
    "cloth",
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
    return <p className="text-center">No products available.</p>;
  }

  const products = data.products; // Already limited to 4 by the server

  return (
    <div className="mavo-product-1 mavo-pt-120 mavo-md-pt-80 mavo-pb-110 mavo-md-pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-6 col-md-6 col-sm-6" key={product.id}>
                  <ItemCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-product-banner">
              <div className="mavo-product-img">
                <Image
                  src="/images/products/product-1.6.jpg"
                  alt="products"
                  width={1500}
                  height={1500}
                  quality={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecondCloth;
