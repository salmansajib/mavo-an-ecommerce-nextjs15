"use client";
import React from "react";
import ItemCard from "../ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// const products = [
//   {
//     id: 1,
//     image: "/images/products/product-3.9.jpg",
//     alt: "product",
//     tag: "best",
//     rating: 5,
//     title: "Monochrome / Sand",
//     price: "$1,999.00",
//     colors: ["silver", "pistachio"],
//     link: "watch-product-single.html",
//   },
//   {
//     id: 2,
//     image: "/images/products/product-3.5.jpg",
//     alt: "product",
//     rating: 5,
//     title: "Navy / Swiss Watch",
//     price: "$2,596.00",
//     colors: ["egg-blue", "dark-shade"],
//     link: "watch-product-single.html",
//   },
//   {
//     id: 3,
//     image: "/images/products/product-3.6.jpg",
//     alt: "product",
//     rating: 5,
//     title: "Jet Black / Sand",
//     price: "$1,396.00",
//     colors: ["silver", "approx-ero"],
//     link: "watch-product-single.html",
//   },
//   {
//     id: 4,
//     image: "/images/products/product-3.7.jpg",
//     alt: "product",
//     rating: 5,
//     title: "Yellow / Chartreuse",
//     price: "$4,296.00",
//     colors: ["pantone-603", "brown"],
//     link: "watch-product-single.html",
//   },
// ];

const RelatedProducts = ({ products }) => {
  return (
    <div className="mavo-product-style-2 mavo-pt-110 mavo-md-pt-70 mavo-pb-115 mavo-md-pb-30 bg-gray-50">
      <div className="container home-three-container">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
          <h2 className="mavo-title">Related Products</h2>
        </div>
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
          className="row"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-6 mavo-md-mb-45"
            >
              <div className="swiper-slide">
                <ItemCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
