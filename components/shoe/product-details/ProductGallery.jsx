"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductGallery = ({
  product,
  selectedColor,
  onColorSelect,
  onImageSelect,
}) => {
  // State for selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // Ref to access Swiper instance
  const swiperRef = useRef(null);

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

  // Sync gallery with selected color
  useEffect(() => {
    if (selectedColor) {
      const firstImageIndex = galleryImages.findIndex(
        (image) => image.color === selectedColor,
      );
      if (firstImageIndex >= 0) {
        setSelectedImageIndex(firstImageIndex);
        onImageSelect(firstImageIndex);
        // Slide to the thumbnail corresponding to the selected color
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(firstImageIndex);
        }
      }
    }
  }, [selectedColor, galleryImages, onImageSelect]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    onImageSelect(index); // Notify parent of image selection
    const clickedImage = galleryImages[index];
    if (clickedImage.color !== selectedColor) {
      onColorSelect(clickedImage.color); // Update color in parent
    }
    // Slide to the clicked thumbnail
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="gallery mavo-md-mb-50 relative">
      {/* main image */}
      <div className="swiper-container gallery-slider">
        <div className="swiper-wrapper mavo-slider-large">
          {galleryImages.map((image, index) => (
            <div
              className={`swiper-slide ${
                index === selectedImageIndex ? "block" : "hidden"
              }`}
              key={image.id}
            >
              <div className="gallery-title">
                <a href="about-us-1.html">
                  <i className="icofont-search"></i>
                </a>
              </div>
              <Image
                width={500}
                height={500}
                src={image.src}
                alt={image.alt}
                className="w-[455px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="swiper-container overflow-hidden">
        <Swiper slidesPerView={3} spaceBetween={3} ref={swiperRef}>
          {thumbnails.map((thumb, index) => (
            <SwiperSlide key={thumb.id}>
              <Image
                width={500}
                height={500}
                src={thumb.src}
                alt={thumb.alt}
                className={`${
                  index === selectedImageIndex
                    ? "border-[5px] !border-[#000]/10"
                    : "border-[5px] border-transparent"
                } w-[300px] h-auto object-cover cursor-pointer`}
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
