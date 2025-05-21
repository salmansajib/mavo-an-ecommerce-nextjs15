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

  // Sync gallery and thumbnails with selected color
  useEffect(() => {
    if (selectedColor) {
      const firstImageIndex = galleryImages.findIndex(
        (image) => image.color === selectedColor,
      );
      if (firstImageIndex >= 0) {
        setSelectedImageIndex(firstImageIndex);
        onImageChange(firstImageIndex);
        // Slide to the thumbnail corresponding to the selected color
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(firstImageIndex);
        }
      }
    }
  }, [selectedColor, galleryImages, onImageChange]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    onImageChange(index);
    const clickedImage = galleryImages[index];
    if (clickedImage.color !== selectedColor) {
      onColorChange(clickedImage.color);
    }
    // Slide to the clicked thumbnail
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="swiper-container gallery-slider">
        <div className="swiper-wrapper">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`swiper-slide relative ${
                selectedImageIndex === index ? "active" : ""
              }`}
              style={{
                display: selectedImageIndex === index ? "block" : "none",
              }}
            >
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
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="swiper-container overflow-hidden">
        <Swiper
          spaceBetween={3}
          slidesPerView={3}
          ref={swiperRef} // Attach ref to Swiper
        >
          {thumbnails.map((thumb, index) => (
            <SwiperSlide key={thumb.id}>
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
