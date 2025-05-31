"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCardOne from "./ItemCardOne";

const FEATURED_PRODUCTS_LIMIT = 6;

const ProductSectionFirst = () => {
  // Fetch first 6 products (page=1, limit=6)
  const { data, isLoading, error } = useProducts(
    "beautyProduct",
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
    <div className="mavo-product-5">
      <div className="mavo-heading-area text-center mavo-mb-75 mavo-md-mb-45 flex flex-col items-center gap-2">
        <h2 className="mavo-title mavo-mb-15">Our Beauty Products</h2>
        <img src="/images/icons/product-shape-5.1.png" alt="shape" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="swiper mavoProduct5"
      >
        <div className="swiper-wrapper">
          {products.map((product) => (
            <SwiperSlide className="swiper-slide" key={product.id}>
              <ItemCardOne product={product} />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default ProductSectionFirst;
