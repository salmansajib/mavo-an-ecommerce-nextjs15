"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

// testimonial data
const testimonials = [
  {
    id: 1,
    image: "/images/author/author-1.1.jpg",
    name: "Finn Rittrock",
    position: "President",
    quote:
      "“Great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/author/author-1.2.jpg",
    name: "Finn Rittrock",
    position: "President",
    quote:
      "They respond quickly to questions and help you out if you need Great theme with a lot of lay-out options and easy to work with. something specific.”",
    rating: 5,
  },
  {
    id: 3,
    image: "/images/author/author-1.3.jpg",
    name: "Finn Rittrock",
    position: "President",
    quote:
      "“Lorem em they respond quickly to questions and help you out if you need something specific. Great theme with a lot of lay-out options and easy to work with.",
    rating: 5,
  },
  {
    id: 4,
    image: "/images/author/author-3.1.jpg",
    name: "Finn Rittrock",
    position: "President",
    quote:
      "“Great theme with a lot of lay-out options and easy to work with. They respond quickly to questions and help you out if you need something specific.”",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="mavo-testimonial-6 mavo-pb-65 mavo-md-pb-0 mavo-pt-70 mavo-md-pt-45">
      <div className="mavo-title-style-6">
        <h2 className="hiddenn">Testimonial</h2>
        <div className="mavo-heading-area text-center mavo-mb-45 mavo-md-mb-15">
          <h2 className="mavo-title mavo-mb-0">Client Feedback</h2>
        </div>
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
          className="swiper mavoTestimonial5"
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <SwiperSlide className="swiper-slide" key={testimonial.id}>
                <div className="container">
                  <div className="mavo-testimonial-single">
                    <div className="mavo-author-img flex items-center justify-center">
                      <Image
                        width={500}
                        height={500}
                        quality={100}
                        className="w-[100px] h-auto"
                        src={testimonial.image}
                        alt="author image"
                      />
                    </div>
                    <div className="mavo-author-name">
                      <h4 className="mavo-testimonial-title">
                        {testimonial.name}
                      </h4>
                      <span className="test-sub-title">
                        {testimonial.position}
                      </span>
                    </div>
                    <div className="mavo-testimonial-desc">
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="mavo-testimonial-rating">
                      <div className="rating-star">
                        <ul>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <li key={i}>
                              <i className="flaticon-star-1"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next">
            <img src="/images/icons/6-light-next-arrow.png" alt="arrow" />
          </div>
          <div className="swiper-button-prev">
            <img src="/images/icons/6-light-prev-arrow.png" alt="arrow" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
