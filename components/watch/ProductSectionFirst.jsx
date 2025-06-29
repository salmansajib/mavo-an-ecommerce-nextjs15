"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import useWishlist from "@/hooks/useWishlist";
import Icon from "../Icon";
import ItemCardTwo from "./ItemCardTwo";

const FEATURED_PRODUCTS_LIMIT = 8;

const ProductSectionFirst = () => {
  // Fetch last 8 products (page=1, limit=8)
  const { data, isLoading, error } = useProducts(
    "watch",
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
    <div className="mavo-product-3 mavo-pt-120 mavo-md-pt-70 mavo-pb-115 mavo-md-pb-75 !bg-gray-50">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-3">
          <div className="container mavo-product-text">
            <div className="mavo-heading-area mavo-mb-60">
              <h3 className="mavo-title">
                Currently, <span className="mavo-active-color">50 Watches</span>
                Are in Stock For You.
              </h3>
            </div>
            <Link className="product-view-btn" href="/watch/product">
              View All Items
            </Link>
          </div>
        </div>

        {/* Right Column - Product Slider */}
        <div className="col-lg-9">
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="swiper mavoProduct1"
          >
            {products.map((product) => (
              <SwiperSlide className="swiper-slide" key={product.id}>
                <ItemCardTwo product={product} />
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-next">
              <Image
                width={100}
                height={100}
                className="w-[25px] h-auto"
                src="/images/icons/right-dark-arrow.svg"
                alt="arrow"
              />
            </div>
            <div className="swiper-button-prev">
              <Image
                width={100}
                height={100}
                className="w-[25px] h-auto"
                src="/images/icons/left-dark-arrow.svg"
                alt="arrow"
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionFirst;
