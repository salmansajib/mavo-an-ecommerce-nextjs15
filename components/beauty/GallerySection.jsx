"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const galleryImages = [
  { id: 1, image: "/images/gallery/gallery-5.1.jpg" },
  { id: 2, image: "/images/gallery/gallery-5.2.jpg" },
  { id: 3, image: "/images/gallery/gallery-5.3.jpg" },
  { id: 4, image: "/images/gallery/gallery-5.4.jpg" },
  { id: 5, image: "/images/gallery/gallery-5.5.jpg" },
  { id: 6, image: "/images/gallery/gallery-5.6.jpg" },
  { id: 7, image: "/images/gallery/gallery-5.7.jpg" },
  { id: 8, image: "/images/gallery/gallery-5.8.jpg" },
  { id: 9, image: "/images/gallery/gallery-5.9.jpg" },
  { id: 10, image: "/images/gallery/gallery-5.1.jpg" },
  { id: 11, image: "/images/gallery/gallery-5.2.jpg" },
  { id: 12, image: "/images/gallery/gallery-5.3.jpg" },
  { id: 13, image: "/images/gallery/gallery-5.4.jpg" },
  { id: 14, image: "/images/gallery/gallery-5.5.jpg" },
  { id: 15, image: "/images/gallery/gallery-5.6.jpg" },
  { id: 16, image: "/images/gallery/gallery-5.7.jpg" },
  { id: 17, image: "/images/gallery/gallery-5.8.jpg" },
  { id: 18, image: "/images/gallery/gallery-5.9.jpg" },
  { id: 19, image: "/images/gallery/gallery-5.2.jpg" },
  { id: 20, image: "/images/gallery/gallery-5.3.jpg" },
];

const GallerySection = () => {
  return (
    <div className="mavo-gallery-5 mavo-pb-120 mavo-md-pb-80">
      <div className="container-fluid">
        <div className="mavo-heading-area text-center mavo-mb-75 mavo-md-mb-45">
          <h2 className="mavo-title mavo-mb-0">@mavoobeauty</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
          className="swiper mavoGallery"
        >
          <div className="swiper-wrapper">
            {galleryImages.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="gallery-img">
                  <Image
                    width={500}
                    height={500}
                    className="w-[300px] h-auto"
                    src={item.image}
                    alt="gallery"
                  />
                  <Link href="#">
                    <i className="flaticon-instagram-1"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
