"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ItemCard from "../ItemCard";

const SimilarProducts = ({ similarProducts }) => {
  return (
    <div className="mavo-product-1 mavo-md-pt-50 mavo-pb-75 mavo-md-pb-20">
      <div className="container-fluid">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-35">
          <h3 className="mavo-title">Similar Products</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
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
            1280: { slidesPerView: 5 },
          }}
        >
          {similarProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ItemCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProducts;
