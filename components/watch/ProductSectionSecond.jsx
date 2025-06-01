"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCard from "./ItemCard";

const FEATURED_PRODUCTS_LIMIT = 8;

const ProductSectionSecond = () => {
  // Fetch first 8 products (page=1, limit=8)
  const { data, isLoading, error } = useProducts(
    "watch",
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
    <div className="mavo-product-style-2 mavo-pt-110 mavo-md-pt-70 mavo-pb-115 mavo-md-pb-75 bg-gray-50">
      <div className="container home-three-container">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
          <h2 className="mavo-title">
            Our Top <span className="mavo-active-color">Seller</span>
          </h2>
        </div>

        <div className="mavo-product">
          <Swiper
            modules={[Autoplay]}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              // When window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="swiper mavoProduct2"
          >
            <div className="swiper-wrapper">
              {products.map((product) => (
                <SwiperSlide className="swiper-slide" key={product.id}>
                  <ItemCard product={product} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecond;
