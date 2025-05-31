"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    image: "/images/products/product-5.16.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
  {
    id: 2,
    image: "/images/products/product-5.17.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
  {
    id: 3,
    image: "/images/products/product-5.16.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
  {
    id: 4,
    image: "/images/products/product-5.17.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
  {
    id: 5,
    image: "/images/products/product-5.16.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
  {
    id: 6,
    image: "/images/products/product-5.17.jpg",
    quote:
      "Morem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor eid incididunt uty labore...",
    name: "Polina Sitnova",
    role: "Customer",
  },
];

const TestimonialSection = () => {
  return (
    <div className="mavo-testimonial-5 mavo-pt-120 mavo-md-pt-80 mavo-pb-120 mavo-md-pb-0">
      <div className="container">
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
          className="swiper mavoTestimonial5"
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <SwiperSlide className="swiper-slide" key={testimonial.id}>
                <div className="mavo-testimonial-img">
                  <Image
                    width={900}
                    height={900}
                    quality={100}
                    className="w-[600px] h-auto"
                    src={testimonial.image}
                    alt="product"
                  />
                </div>
                <div className="mavo-testimonial-info mavo-pl-70 mavo-md-pl-0 mavo-pt-30">
                  <div className="mavo-testimonial-title">
                    <img
                      className="dark-quote-left mavo-mb-35"
                      src="/images/icons/dark-quet-left.png"
                      alt="quote"
                    />
                    <p className="test-slider-desc">{testimonial.quote}</p>
                    <img
                      className="dark-quote-right"
                      src="/images/icons/dark-quet-right.png"
                      alt="quote"
                    />
                  </div>
                  <div className="mavo-testimonial-author">
                    <a href="#" className="author-name">
                      {testimonial.name}
                    </a>
                    <p className="author">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
