"use client";
import React from "react";
import ItemCard from "../ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    image: "/images/products/product-image.jpg",
    title: "Manoa Leather Boots",
    price: "$250.00",
    badge: null,
  },
  {
    id: 2,
    image: "/images/products/product-image1.jpg",
    title: "Air Jobdan Cmetllow",
    price: "$340.00",
    badge: "-20",
  },
  {
    id: 3,
    image: "/images/products/product-image2.jpg",
    title: "Big Kids' Air Jordan 1",
    price: "$650.00",
    badge: null,
  },
  {
    id: 4,
    image: "/images/products/product-image3.jpg",
    title: "Artist Series 158",
    price: "$550.00",
    badge: "New",
  },
  {
    id: 5,
    image: "/images/products/product-image.jpg",
    title: "Manoa Leather Boots",
    price: "$250.00",
    badge: null,
  },
  {
    id: 6,
    image: "/images/products/product-image1.jpg",
    title: "Air Jobdan Cmetllow",
    price: "$340.00",
    badge: "-20",
  },
  {
    id: 7,
    image: "/images/products/product-image2.jpg",
    title: "Big Kids' Air Jordan 1",
    price: "$650.00",
    badge: null,
  },
  {
    id: 8,
    image: "/images/products/product-image3.jpg",
    title: "Artist Series 158",
    price: "$550.00",
    badge: "New",
  },
];

const SimilarProducts = ({ similarProducts }) => {
  return (
    <div className="!bg-gray-50 mavo-post-slider-2 mavo-shoes-page-slider mavo-pt-95 mavo-md-pt-45 mavo-pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-post-slider-single">
              <div className="mavo-post-title">
                <div className="mavo-heading-area text-center mavo-mb-60 mavo-md-mb-40">
                  <h3 className="mavo-title">Our Newest Products</h3>
                </div>
              </div>

              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1200}
                breakpoints={{
                  // 320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="swiper postSlider"
              >
                {similarProducts.map((product) => (
                  <SwiperSlide className="swiper-slide" key={product.id}>
                    <ItemCard product={product} wrapperClass="mavo-mb-0" />
                  </SwiperSlide>
                ))}

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
