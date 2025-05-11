"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const bannerItems = [
  {
    id: 1,
    desc: "New Arrivals 2022",
    title: "Take Your Next Step with Mavoo",
    link: "/shoes/product",
    image: "/images/sliders/slider-2/model.png",
  },
  {
    id: 2,
    desc: "New Arrivals 2022",
    title: "Take Your Next Step with Mavoo",
    link: "/shoes/product",
    image: "/images/sliders/slider-2/model.png",
  },
  {
    id: 3,
    desc: "New Arrivals 2022",
    title: "Take Your Next Step with Mavoo",
    link: "/shoes/product",
    image: "/images/sliders/slider-2/model.png",
  },
];

const productImage = "/images/sliders/slider-2/product-img.jpg";

const BannerShoe = () => {
  return (
    <div className="mavo-banner-2">
      <div className="container-fluid">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper mavoBanner1"
        >
          <div className="swiper-wrapper">
            {bannerItems.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mavo-banner-info mavo-pl-90">
                        <p className="mavo-banner-desc">{item.desc}</p>
                        <div className="mavo-banner-title">
                          <h1>{item.title}</h1>
                        </div>
                        <Link className="mavo-read-more" href={item.link}>
                          Discover More
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mavo-banner-img">
                        <Image
                          width={2000}
                          height={2000}
                          src={item.image}
                          alt="Model"
                          priority={true}
                          quality={100}
                          className="w-[605px] h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next">
            <img
              className="product-img"
              src={productImage}
              alt="Product Image"
            />
          </div>
          <div className="swiper-button-prev">
            <img
              className="product-img"
              src={productImage}
              alt="Product Image"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerShoe;
