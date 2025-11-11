"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const shopInfoData = [
  {
    id: 1,
    icon: "/images/icons/solar-bank.png",
    alt: "soler",
    title: "Solar Bank",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
  {
    id: 2,
    icon: "/images/icons/integrated-lock.png",
    alt: "integrated-lock",
    title: "Integrated Lock",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
  {
    id: 3,
    icon: "/images/icons/water-proof.png",
    alt: "water-proof",
    title: "Water Proof",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
  {
    id: 6,
    icon: "/images/icons/solar-bank.png",
    alt: "soler",
    title: "Solar Bank",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
  {
    id: 4,
    icon: "/images/icons/hidden-pockets.png",
    alt: "hidden-pockets",
    title: "Hidden Pockets",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
  {
    id: 5,
    icon: "/images/icons/super-organized.png",
    alt: "super-organized",
    title: "Super organized",
    description: "Lorem ipsum dolor sit amet eud consectetur adipiscing",
  },
];

const ShopInfo = () => {
  return (
    <div
      id="mavoo-scroll"
      className="mavo-shop-info-5 mavo-pt-120 mavo-md-pt-80 mavo-pb-100 mavo-md-pb-60"
    >
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="swiper mavoMeta"
        >
          <div className="swiper-wrapper">
            {shopInfoData.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="mavo-info text-center flex flex-col items-center justify-center">
                  <div className="mavo-info-icon mavo-mb-30">
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <div className="mavo-info-title">
                    <h4 className="mavo-mb-15">
                      <Link className="shop-link-title" href="/bag/product">
                        {item.title}
                      </Link>
                    </h4>
                    <p className="shop-desc">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ShopInfo;
