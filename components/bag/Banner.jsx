"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const bannerData = [
  {
    id: 1,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
  {
    id: 4,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
  {
    id: 5,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
  {
    id: 6,
    image: "/images/sliders/slider-6/slider-6.1.png",
    alt: "Model",
    title: "luxury Bags",
    link: "/bag/product",
    buttonText: "Shop Now",
  },
];

const Banner = () => {
  return (
    <div className="mavo-banner-6 mavo-pt-110">
      <div className="container home-four-container">
        <h2 className="mavo-banner-title">mavoo</h2>
        {/* swiper */}
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
            {bannerData.map((slide) => (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                <div className="mavo-banner-img">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-[400px] h-auto"
                    priority
                    quality={100}
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                <div className="mavo-banner-info">
                  <div className="mavo-info-title">
                    <h2>{slide.title}</h2>
                  </div>
                  <Link className="mavo-read-more" href={slide.link}>
                    {slide.buttonText}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next">Next</div>
          <div className="swiper-button-prev">Prev</div>
          <div className="scroll-bar scroll-bar1 flex items-center justify-center">
            <Image
              width={300}
              height={300}
              className="rotated-style w-[135px] h-auto"
              quality={100}
              src="/images/icons/circle_2.png"
              alt="video-icon"
            />
            <Link className="smoothScroll smooth-croll" href="#mavoo-scroll">
              <span>
                <img src="/images/icons/while-1.png" alt="Arrow" />
              </span>
            </Link>
          </div>
        </Swiper>
      </div>
      <div className="banner-product-img">
        <Image
          width={700}
          height={700}
          className="w-[500px] h-auto"
          priority
          quality={100}
          src="/images/sliders/slider-6/slider-6.2.png"
          alt="slider"
        />
      </div>
      <div className="banner-tooltip">
        <div className="mavo-product-social">
          <ul>
            <li className="tooltip-1">
              <Link href="/bag/product">1</Link> <span> Quick view</span>
            </li>
            <li className="tooltip-2">
              <Link href="/bag/product">2</Link> <span> Compare</span>
            </li>
            <li className="tooltip-3">
              <Link href="/bag/product">3</Link> <span> Wishlist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
