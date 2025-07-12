"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

const ProductServicesSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videoLink = "https://youtu.be/XU0FYlY9_E0";

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
    <div className="about-product-services mavo-pt-120 mavo-pb-80">
      <div className="mavo-shop-title">
        <h2>mavvo</h2>
      </div>
      <div className="container">
        <div className="row mavo-mb-120 mavo-md-mb-60">
          <div className="col-lg-4">
            <div className="mavo-about-service-content mavo-mb-55">
              <div className="about-product-title mavo-mb-20">
                <h2 className="mavo-product-title">
                  Exclusive Service for 2025
                </h2>
              </div>
              <div className="abou-product-desc">
                <p className="mavo-mb-35">
                  Parturient asperiores odio enim tempus, qui officia Tempore,
                  porro bibendum excepturi! Voluptate aperiam! Sapien iaculis
                  laoreet incididunt habitasse voluptate corrupti enim
                </p>
                <span className="product-sub-title text-uppercase">
                  We Provide Best Quality
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-video-section">
              <Image
                width={1000}
                height={1000}
                quality={100}
                className="w-full h-auto"
                src="/images/about/about-2/product/video.png"
                alt="model-image"
              />
              <div className="mavo-banner-video mavo-video">
                <img
                  className="rotated-style"
                  src="/images/icons/circle_2.png"
                  alt="video-icon"
                />
                <a href="/beauty/product" className="">
                  <span className="!flex items-center justify-center">
                    <img src="/images/icons/bag-1.png" alt="Play" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="about-add-cart">
              <div className="about-add-cart-img mavo-mb-50">
                <Image
                  width={1000}
                  height={100}
                  quality={100}
                  className="w-full h-auto"
                  src="/images/about/about-2/product/product-1.png"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-add-cart text-end">
              <div className="about-add-cart-title">
                <h2 className="mavo-product-title mavo-mb-35">
                  History of Mavoo Beauty
                </h2>
              </div>
              <div className="abou-product-desc">
                <p className="mavo-mb-45">
                  Parturient asperiores odio enim tempus, qui officia Tempore,
                  porro bibendum excepturi
                </p>
              </div>
              <div className="mavo-banner-video mavo-black !flex items-center justify-center">
                <img
                  className="rotated-style"
                  src="/images/icons/circle_1.png"
                  alt="video-icon"
                />
                <button onClick={() => openVideo(videoLink)}>
                  <span className="!flex items-center justify-center">
                    <Icon name="Play" size={32} color="#fff" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default ProductServicesSection;
