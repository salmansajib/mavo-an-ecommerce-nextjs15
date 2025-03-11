"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

// testimonials data
const testimonials = [
  {
    id: 1,
    image: "/images/author/author-1.1.jpg",
    name: "Janifar Gostala",
    role: "President",
    description:
      "“Great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
  },
  {
    id: 2,
    image: "/images/author/author-1.2.jpg",
    name: "Janifar Gostala",
    role: "President",
    description:
      "“They respond quickly to questions and help you out if you need something specific.” Great theme with a lot of lay-out options and easy to work with.",
  },
  {
    id: 3,
    image: "/images/author/author-1.3.jpg",
    name: "Janifar Gostala",
    role: "President",
    description:
      "“Lorem great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
  },
];

const ClothTestimonial = () => {
  return (
    <div className="mavo-testimonial-1 mavo-pb-115 mavo-md-pb-75">
      <div className="mavo-heading-area text-center mavo-mb-40">
        <h3
          className="mavo-title"
          style={{
            fontSize: "36px",
          }}
        >
          Mavoo Success Stories
        </h3>
      </div>
      <div className="container-fluid">
        {/* Swiper */}
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="container">
                <div className="mavo-testimonial-single text-center">
                  <div
                    className="mavo-author-img"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt="author"
                      width={100}
                      height={100}
                      quality={100}
                    />
                  </div>
                  <div className="mavo-author-name">
                    <h5
                      className="mavo-test-title mavo-mt-15"
                      style={{
                        fontSize: "24px",
                      }}
                    >
                      {testimonial.name}
                    </h5>
                    <span className="sub-title">{testimonial.role}</span>
                  </div>
                  <div className="mavo-testimonial-desc">
                    <p>{testimonial.description}</p>
                  </div>
                  <div className="mavo-testimonial-rating">
                    <div className="rating-star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="flaticon-star-1"></i>
                      ))}
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

export default ClothTestimonial;
