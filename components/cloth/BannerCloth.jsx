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
    image: "/images/sliders/slider-1/model-02.png",
  },
  {
    id: 3,
    title: "Step with Take Your Next Mavoo",
    description:
      "We are a modern and creative fabrics brand. We help brands to stand out through powerful, elegant visual design.",
    image: "/images/sliders/slider-1/model-03.png",
  },
];

const BannerCloth = () => {
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
          className="swiper mavoBanner1 !pt-[190px] mavo-pb-185"
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="mavo-banner-info">
                <div className="mavo-banner-title">
                  <h1>{item.title}</h1>
                </div>
                <p className="mavo-banner-desc">{item.description}</p>
                <Link href="/cloth/product" className="mavo-read-more">
                  Shop Now
                </Link>
              </div>
              <div className="mavo-banner-img">
                <Image
                  src={item.image}
                  alt="model"
                  width={2000}
                  height={2000}
                  priority={true}
                  quality={100}
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next">
            <Image
              width={100}
              height={100}
              className="w-[55px] h-auto"
              src="/images/icons/left-arrow.svg"
              alt="arrow"
            />
          </div>
          <div className="swiper-button-prev">
            <Image
              width={100}
              height={100}
              className="w-[55px] h-auto"
              src="/images/icons/left-arrow.svg"
              alt="arrow"
            />
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

export default BannerCloth;
