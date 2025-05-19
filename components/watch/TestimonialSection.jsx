"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const testimonials = [
  {
    description:
      "Lacus aliquip eget natoque quo sunt sapiente lectus nemonor orn posuere ducimu laoreet curae consectetur. Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
  {
    description:
      "Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore. Lacus aliquip eget natoque quo sunt sapiente lectus nemonor orn posuere ducimu laoreet curae consectetur.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
  {
    description:
      "Lectus nemonor orn posuere ducimu laoreet curae consectetur lacus aliquip eget natoque quo sunt sapiente. Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
  {
    description:
      "Posuere ducimu laoreet curae consectetur lacus aliquip eget natoque quo sunt sapiente lectus nemonor orn. Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
  {
    description:
      "Lorem em lacus aliquip eget natoque quo sunt sapiente lectus nemonor posuere ducimu laoreet curae consectetur. Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
  {
    description:
      "Sunt sapiente lectus nemonor orn posuere ducimu laoreet curae consectetur lacus aliquip eget natoque quo. Ridiculus oraln norg tempore pede tempore illum nullam, cillum dolore.",
    author: "Ricke Whittle",
    title: "Chief Executive Officer",
  },
];

const TestimonialSection = () => {
  return (
    <div className="mavo-testimonial-3 mavo-pt-110 mavo-md-pt-70 mavo-pb-120 mavo-md-pb-80">
      <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
        <h2 className="mavo-title">
          Successful <span className="mavo-active-color">Customer</span>{" "}
          Feedback
        </h2>
      </div>
      <div className="container home-three-container">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mavoTestimonial2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrapper">
                <div className="testimonial-info">
                  <div className="textimonial-img">
                    <img src="/images/author/author-3.1.jpg" alt="author" />
                    <div className="rating-star">
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                      <i className="flaticon-star-1"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-meta">
                  <img
                    className="testimonial-quotion"
                    src="/images/icons/quote.svg"
                    alt="quote"
                  />
                  <p className="testmonial-desc">{testimonial.description}</p>
                  <div className="testimonial-author">
                    <h6 className="mavo-auother-title">{testimonial.author}</h6>
                    <span className="mavo-sub-title">{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <img src="/images/icons/right-dark-arrow.svg" alt="arrow" />
          </div>
          <div className="swiper-button-prev">
            <img src="/images/icons/left-dark-arrow.svg" alt="arrow" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
