"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductGallery = ({
  product,
  selectedColor,
  onColorChange,
  onImageChange,
}) => {
  // State for selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // Refs to access Swiper instances
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  // Get all images from all variants for gallery and thumbnails
  const getGalleryImages = () => {
    const allImages = [];
    const seenSrcs = new Set();

    product.variants.forEach((variant, variantIndex) => {
      variant.images.forEach((src, imageIndex) => {
        if (!seenSrcs.has(src)) {
          seenSrcs.add(src);
          allImages.push({
            id: `${variantIndex}-${imageIndex}`,
            src,
            alt: `${variant.color} variant image ${imageIndex + 1}`,
            color: variant.color,
          });
        }
      });
    });

    return allImages;
  };

  const galleryImages = getGalleryImages();
  const thumbnails = galleryImages.map((image) => ({
    ...image,
    src: image.src,
  }));

  // Preload all gallery images on component mount
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        console.log(`Preloaded image: ${image.src}`);
      };
      img.onerror = () => {
        console.error(`Failed to preload image: ${image.src}`);
      };
    });
  }, [galleryImages]);

  // Sync gallery with selected color only on initial load or color change
  useEffect(() => {
    if (selectedColor) {
      const firstImageIndex = galleryImages.findIndex(
        (image) => image.color === selectedColor,
      );
      if (firstImageIndex >= 0 && firstImageIndex !== selectedImageIndex) {
        setSelectedImageIndex(firstImageIndex);
        onImageChange(firstImageIndex);
        if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
          mainSwiperRef.current.swiper.slideTo(firstImageIndex);
        }
        if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
          thumbSwiperRef.current.swiper.slideTo(firstImageIndex);
        }
      }
    }
  }, [selectedColor, galleryImages]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    onImageChange(index);
    const clickedImage = galleryImages[index];
    onColorChange(clickedImage.color); // Always update color on thumbnail click
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
    if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
      thumbSwiperRef.current.swiper.slideTo(index);
    }
  };

  // Handle main slider change
  const handleMainSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setSelectedImageIndex(newIndex);
    onImageChange(newIndex);
    const currentImage = galleryImages[newIndex];
    onColorChange(currentImage.color); // Always update color on slide change
    if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
      thumbSwiperRef.current.swiper.slideTo(newIndex);
    }
  };

  return (
    <div className="gallery">
      {/* Main Image Slider */}
      <div className="swiper-container gallery-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          ref={mainSwiperRef}
          onSlideChange={handleMainSlideChange}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  quality={70}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mavo-single-product-view">
                <a href="#" className="tcd-search-icon">
                  <i className="flaticon-search"></i>
                </a>
                <a href="#" className="ted-search-icon">
                  <i className="flaticon-sort"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      <div className="swiper-container overflow-hidden">
        <Swiper spaceBetween={3} slidesPerView={3} ref={thumbSwiperRef}>
          {thumbnails.map((thumb, index) => (
            <SwiperSlide
              key={thumb.id}
              className="!w-fit flex justify-center items-center"
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                width={200}
                height={200}
                quality={100}
                className={`${
                  selectedImageIndex === index
                    ? "border-[5px] !border-[#000]/10"
                    : "border-[5px] border-transparent"
                } w-[150px] h-auto cursor-pointer`}
                onClick={() => handleThumbnailClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
