"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const bannerData = [
  {
    id: 1,
    title: "Winter Is Not A Season It's A Celebration",
    description:
      "We are a modern and creative fabrics brand. We help brands to stand out through powerful, elegant visual design.",
    image: "/images/sliders/slider-1/model.png",
  },
  {
    id: 2,
    title: "Take Your Next Step with Mavoo",
    description:
      "We are a modern and creative fabrics brand. We help brands to stand out through powerful, elegant visual design.",
    image: "/images/sliders/slider-1/model.png",
  },
  {
    id: 3,
    title: "Step with Take Your Next Mavoo",
    description:
      "We are a modern and creative fabrics brand. We help brands to stand out through powerful, elegant visual design.",
    image: "/images/sliders/slider-1/model.png",
  },
];

const ClothBanner = () => {
  return (
    <div className="mavo-banner-1">
      <div className="container-fluid header-menu">
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
          className="swiper mavoBanner1 mavo-pt-190 mavo-pb-185"
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="mavo-banner-info">
                <div className="mavo-banner-title">
                  <h1>{item.title}</h1>
                </div>
                <p className="mavo-banner-desc">{item.description}</p>
                <Link href="#" className="mavo-read-more">
                  Shop Now
                </Link>
              </div>
              <div className="mavo-banner-img">
                <Image
                  src={item.image}
                  alt="model"
                  width={1000}
                  height={1000}
                  priority={true}
                  quality={100}
                  style={{
                    width: "580px",
                    height: "auto",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next">
            <img src="/images/icons/left-arrow.svg" alt="arrow" />
          </div>
          <div className="swiper-button-prev">
            <img src="/images/icons/left-arrow.svg" alt="arrow" />
          </div>
        </Swiper>

        <div className="scroll-bar">
          <Link href="#mavoo-scroll" className="smoothScroll text-uppercase">
            Scroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClothBanner;
