"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import Icon from "../Icon";

const bannerSlides = [
  {
    id: 1,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 2,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 3,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 4,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 5,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 6,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
  {
    id: 7,
    title: "The Art of Beautiful Looking Skin",
    videoLink: "https://youtu.be/XU0FYlY9_E0",
    rightText: "Take Care <br>of your Skin",
    firstImage: "/images/sliders/slider-5/slider-5.4.jpg",
    secondImage: "/images/sliders/slider-5/slider-5.3.jpg",
  },
];

const Banner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = (url) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    const videoId =
      url.split("youtu.be/")[1]?.split("?")[0] ||
      url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div className="mavo-banner-5">
      <div
        className={`container home-four-container ${
          isVideoOpen ? "blur-sm" : ""
        }`}
      >
        {/* Swiper */}
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
          className="swiper mavoBanner1"
        >
          <div className="swiper-wrapper">
            {bannerSlides.map((slide) => (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mavo-banner-title">
                      <h1 className="text-uppercase">{slide.title}</h1>
                    </div>
                    <div className="mavo-banner-video">
                      <Image
                        width={500}
                        height={500}
                        className="rotated-style w-[120px] h-auto"
                        src="/images/icons/circle_1.png"
                        alt="video-icon"
                      />
                      <div
                        className="video-play-btn"
                        onClick={() => openVideo(slide.videoLink)}
                      >
                        <span>
                          <Image
                            width={100}
                            height={100}
                            className="w-[20px] h-auto cursor-pointer"
                            src="/images/icons/play.png"
                            alt="Play"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mavo-banner-right relative">
                      <p
                        dangerouslySetInnerHTML={{ __html: slide.rightText }}
                      />
                      <Image
                        width={1000}
                        height={1000}
                        className="first-slider-img w-[550px] h-auto"
                        src={slide.firstImage}
                        alt="slider-5"
                      />
                      <Image
                        width={1000}
                        height={1000}
                        className="second-slider-img w-[550px] h-auto"
                        src={slide.secondImage}
                        alt="slider-5"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next">
            <Image
              width={100}
              height={100}
              className="w-[70px] h-auto"
              src="/images/sliders/slider-5/right-arrow.png"
              alt="arrow"
            />
          </div>
          <div className="swiper-button-prev">
            <Image
              width={100}
              height={100}
              className="w-[70px] h-auto"
              src="/images/sliders/slider-5/left-arrow.png"
              alt="arrow"
            />
          </div>
        </Swiper>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-[10px]">
          <div className="relative bg-white rounded-lg max-w-3xl w-full">
            <button
              className="absolute -top-[15px] -right-[15px] z-50 bg-white p-[5px] !rounded-full  text-2xl font-bold hover:!bg-red-400"
              onClick={closeVideo}
            >
              <Icon name="X" className="text-black" />
            </button>
            <div
              className="relative"
              style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getEmbedUrl(videoUrl)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
