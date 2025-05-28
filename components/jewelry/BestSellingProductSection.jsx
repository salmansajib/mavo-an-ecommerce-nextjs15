"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ItemCardTwo from "./ItemCardTwo";

const FEATURED_PRODUCTS_LIMIT = 6;

const BestSellingProductSection = ({ title }) => {
  // Fetch first 6 products (page=1, limit=6)
  const { data, isLoading, error } = useProducts(
    "jewelry",
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
    <div className="mavo-product-4 mavo-pt-110 mavo-md-pt-75 mavo-pb-110 mavo-md-pb-75 !bg-gray-50">
      <div className="container-fluid">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-50">
          <h2 className="mavo-title2 text-uppercase">{title}</h2>
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
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="swiper mavoProduct4"
        >
          {products.map((product) => (
            <SwiperSlide className="swiper-slide" key={product.id}>
              <ItemCardTwo product={product} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-next">
            <Image
              width={100}
              height={100}
              className="w-[50px] h-auto"
              src="/images/icons/right-dark-arrow.svg"
              alt="arrow"
            />
          </div>
          <div className="swiper-button-prev">
            <Image
              width={100}
              height={100}
              className="w-[50px] h-auto"
              src="/images/icons/left-dark-arrow.svg"
              alt="arrow"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellingProductSection;
