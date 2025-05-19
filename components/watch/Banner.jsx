"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

// Banner slides data
const bannerSlides = [
  { id: 1, number: "01", tooltip: "Compare" },
  { id: 2, number: "02", tooltip: "Compare" },
  { id: 3, number: "03", tooltip: "Compare" },
  { id: 4, number: "04", tooltip: "Wishlist" },
];

const Banner = () => {
  return (
    <div className="mavo-banner-3 mavo-pt-50 mavo-md-pt-0">
      <div className="container home-three-container">
        <div className="mavo-title-style-6">
          <h2 className="hidden">Century</h2>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-3">
            <div className="mavo-banner-single-left">
              <div className="mavo-banner-title-left">
                <h2>20th Century Watches</h2>
              </div>
              <div className="banner-read-more">
                <Link href="/watch/product">Discover More</Link>
              </div>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="col-lg-9">
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
              {bannerSlides.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="align-items-center">
                    <div className="mavo-banner-info">
                      <div className="mavo-banner-title">
                        <h2>{slide.number}</h2>
                      </div>
                    </div>
                    <div className="mavo-banner-img">
                      <Image
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-[945px] h-auto"
                        src="/images/sliders/slider-3/model.png"
                        alt="Model"
                      />
                    </div>
                    <div className="mavo-banner-add-cart relative">
                      <div className="icon product-tool">
                        <div className="tooltip">{slide.tooltip}</div>
                        <Link href="/watch/product">
                          <Image
                            width={100}
                            height={100}
                            className="w-[30px] h-auto absolute top-[25px] left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src="/images/icons/add-cart.svg"
                            alt="cart"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Arrows */}
              <div className="swiper-button-next">
                <Image
                  width={100}
                  height={100}
                  className="w-[30px] h-auto"
                  src="/images/icons/right-dark-arrow.svg"
                  alt="arrow"
                />
              </div>
              <div className="swiper-button-prev">
                <Image
                  width={100}
                  height={100}
                  className="w-[30px] h-auto"
                  src="/images/icons/left-dark-arrow.svg"
                  alt="arrow"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Banner Text */}
      <h2 className="banner-text">WATCH</h2>
    </div>
  );
};

export default Banner;
