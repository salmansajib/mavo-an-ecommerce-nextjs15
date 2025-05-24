"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const testimonials = [
  {
    image: "/images/author/author-1.1.jpg",
    name: "Janifar Gostala",
    title: "President",
    description:
      "“Great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
  },
  {
    image: "/images/author/author-1.2.jpg",
    name: "Janifar Gostala",
    title: "President",
    description:
      "“They respond quickly to questions and help you out if you need something specific.” Great theme with a lot of lay-out options and easy to work with.",
  },
  {
    image: "/images/author/author-1.3.jpg",
    name: "Janifar Gostala",
    title: "President",
    description:
      "“Lorem em great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
  },
];

const TestimonialSection = () => {
  return (
    <div className="mavo-testimonial-1 mavo-pb-115 mavo-md-pb-75 mavo-pt-110 mavo-md-pt-70">
      <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
        <h2 className="mavo-title2 text-uppercase">Happy Client Feedback</h2>
      </div>
      <div className="container-fluid">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mavoTestimonial"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="container">
                <div className="mavo-testimonial-single text-center">
                  <div className="mavo-author-img flex items-center justify-center">
                    <Image
                      src={testimonial.image}
                      alt="author"
                      width={500}
                      height={500}
                      quality={100}
                      className="w-[100px] h-auto"
                    />
                  </div>
                  <div className="mavo-author-name">
                    <h5 className="mavo-test-title mavo-mt-15">
                      {testimonial.name}
                    </h5>
                    <span className="sub-title">{testimonial.title}</span>
                  </div>
                  <div className="mavo-testimonial-desc">
                    <p>{testimonial.description}</p>
                  </div>
                  <div className="mavo-testimonial-rating">
                    <div className="rating-star">
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <img
              className="arrow-icon"
              src="/images/icons/next-1.svg"
              alt="arrow"
            />
          </div>
          <div className="swiper-button-prev">
            <img
              className="arrow-icon"
              src="/images/icons/prev-1.svg"
              alt="arrow"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
