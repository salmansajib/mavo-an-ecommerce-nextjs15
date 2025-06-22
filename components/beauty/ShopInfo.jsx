"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const shopInfoItems = [
  {
    id: 1,
    icon: "/images/icons/naturally.png",
    alt: "naturally",
    title: "Naturally",
    description:
      "Justo rhoncus sit idor repellendus eligendi pulvinar dignissi",
    link: "/beauty-product/product",
  },
  {
    id: 2,
    icon: "/images/icons/skin-deep.png",
    alt: "skin",
    title: "Skin Deep",
    description: "Enim tempora torquent totamor aie laboriosam mauris odio",
    link: "/beauty-product/product",
  },
  {
    id: 3,
    icon: "/images/icons/hair-care.png",
    alt: "hair",
    title: "Hair Care",
    description: "Perspiciatis cursus iaculis notoma voluptatum pulvinar",
    link: "/beauty-product/product",
  },
  {
    id: 4,
    icon: "/images/icons/make-up.png",
    alt: "make-up",
    title: "Make-up",
    description: "Lacinia rhoncus posuere neque or quibusdam nobis conseq",
    link: "/beauty-product/product",
  },
  {
    id: 5,
    icon: "/images/icons/vegan.png",
    alt: "vegan",
    title: "Vegan",
    description: "Numquam suscipit bibendum olaer vulputate eius saepe onem",
    link: "/beauty-product/product",
  },
  {
    id: 6,
    icon: "/images/icons/naturally.png",
    alt: "naturally",
    title: "Naturally",
    description:
      "Justo rhoncus sit idor repellendus eligendi pulvinar dignissi",
    link: "/beauty-product/product",
  },
  {
    id: 7,
    icon: "/images/icons/skin-deep.png",
    alt: "skin",
    title: "Skin Deep",
    description: "Enim tempora torquent totamor aie laboriosam mauris odio",
    link: "/beauty-product/product",
  },
];

const ShopInfo = () => {
  return (
    <div className="mavo-shop-info-5 mavo-pt-120 mavo-md-pt-80 mavo-pb-100 mavo-md-pb-60">
      <div className="container page-container2">
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
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="swiper mavoMeta"
        >
          <div className="swiper-wrapper">
            {shopInfoItems.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="mavo-info text-center">
                  <div className="mavo-info-icon mavo-mb-30 flex items-center justify-center">
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <div className="mavo-info-title">
                    <h4 className="mavo-mb-15">
                      <Link className="shop-link-title" href={item.link}>
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
