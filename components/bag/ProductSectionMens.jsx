"use client";
import React from "react";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ItemCard from "./ItemCard";

const FEATURED_PRODUCTS_LIMIT = 6;

const ProductSectionMens = () => {
  // Fetch last 6 products (page=1, limit=4)
  const { data, isLoading, error } = useProducts(
    "bag",
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

  const products = data.products; // Already limited to 6 by the server

  return (
    <div className="mavo-product-6 mavo-pt-70 mavo-md-pt-25 mavo-pb-25 bg-white">
      <div className="mavo-title-style-6">
        <h2 className="hiddenn">Collection</h2>
        <h2 className="visible">New Collection For MenS</h2>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper mavoProduct5"
      >
        <div className="swiper-wrapper">
          {products.map((product) => (
            <SwiperSlide className="swiper-slide" key={product.id}>
              <ItemCard product={product} />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-next">
          <img src="/images/icons/6-next-arrow.png" alt="arrow" />
        </div>
        <div className="swiper-button-prev">
          <img src="/images/icons/6-prev-arrow.png" alt="arrow" />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSectionMens;
