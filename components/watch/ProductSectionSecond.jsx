"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";
import ItemCard from "./ItemCard";

// Product data
// const products = [
//   {
//     id: 1,
//     image: "assets/images/products/product-3.9.jpg",
//     title: "Monochrome / Sand",
//     price: "$1,999.00",
//     tag: "best",
//     colors: ["silver", "pistachio"],
//   },
//   {
//     id: 2,
//     image: "assets/images/products/product-3.5.jpg",
//     title: "Navy / Swiss Watch",
//     price: "$2,596.00",
//     colors: ["egg-blue", "dark-shade"],
//   },
//   {
//     id: 3,
//     image: "assets/images/products/product-3.6.jpg",
//     title: "Jet Black / Sand",
//     price: "$1,396.00",
//     colors: ["silver", "approx-ero"],
//   },
//   {
//     id: 4,
//     image: "assets/images/products/product-3.7.jpg",
//     title: "Yellow / Chartreuse",
//     price: "$4,296.00",
//     colors: ["pantone-603", "brown"],
//   },
//   {
//     id: 5,
//     image: "assets/images/products/product-3.8.jpg",
//     title: "Yellow / Chartreuse",
//     price: "$4,296.00",
//     tag: "-20",
//     colors: ["dark-blue", "sky-blue"],
//   },
//   // Additional products (duplicates from original HTML)
//   {
//     id: 6,
//     image: "assets/images/products/product-3.9.jpg",
//     title: "Monochrome / Sand",
//     price: "$6,979.00",
//     tag: "best",
//     colors: ["silver", "pistachio"],
//   },
//   {
//     id: 7,
//     image: "assets/images/products/product-3.5.jpg",
//     title: "Navy / Swiss Watch",
//     price: "$8,929.00",
//     colors: ["egg-blue", "dark-shade"],
//   },
//   {
//     id: 8,
//     image: "assets/images/products/product-3.6.jpg",
//     title: "Jet Black / Sand",
//     price: "$5,329.00",
//     colors: ["silver", "approx-ero"],
//   },
//   {
//     id: 9,
//     image: "assets/images/products/product-3.7.jpg",
//     title: "Yellow / Chartreuse",
//     price: "$2,429.00",
//     colors: ["pantone-603", "brown"],
//   },
//   {
//     id: 10,
//     image: "assets/images/products/product-3.8.jpg",
//     title: "Jet Navy / Teal",
//     price: "$6,409.00",
//     tag: "-20",
//     colors: ["dark-blue", "sky-blue"],
//   },
//   {
//     id: 11,
//     image: "assets/images/products/product-3.9.jpg",
//     title: "Monochrome / Sand",
//     price: "$5,109.00",
//     tag: "best",
//     colors: ["silver", "pistachio"],
//   },
//   {
//     id: 12,
//     image: "assets/images/products/product-3.5.jpg",
//     title: "Navy / Swiss Watch",
//     price: "$9,109.00",
//     colors: ["egg-blue", "dark-shade"],
//   },
//   {
//     id: 13,
//     image: "assets/images/products/product-3.6.jpg",
//     title: "Jet Black / Sand",
//     price: "$9,109.00",
//     colors: ["silver", "approx-ero"],
//   },
//   {
//     id: 14,
//     image: "assets/images/products/product-3.7.jpg",
//     title: "Yellow / Chartreuse",
//     price: "$2,309.00",
//     colors: ["pantone-603", "brown"],
//   },
//   {
//     id: 15,
//     image: "assets/images/products/product-3.8.jpg",
//     title: "Jet Navy / Teal",
//     price: "$1,709.00",
//     tag: "-20",
//     colors: ["dark-blue", "sky-blue"],
//   },
// ];
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
