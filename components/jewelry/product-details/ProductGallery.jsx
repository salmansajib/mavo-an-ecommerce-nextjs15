"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductGallery = ({
  product,
  selectedMaterial,
  onMaterialSelect,
  onImageSelect,
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

    // Check if product and variants exist
    if (!product || !product.variants) {
      console.warn("Product or variants is undefined:", product);
      return allImages;
    }

    product.variants.forEach((variant, variantIndex) => {
      variant.images.forEach((src, imageIndex) => {
        if (!seenSrcs.has(src)) {
          seenSrcs.add(src);
          allImages.push({
            id: `${variantIndex}-${imageIndex}`,
            src,
            alt: `${variant.material} variant image ${imageIndex + 1}`,
            material: variant.material,
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

  // Sync gallery with selected material
  useEffect(() => {
    if (selectedMaterial && galleryImages.length > 0) {
      const firstImageIndex = galleryImages.findIndex(
        (image) => image.material === selectedMaterial,
      );
      if (firstImageIndex >= 0) {
        setSelectedImageIndex(firstImageIndex);
        onImageSelect(firstImageIndex);
        // Slide both main and thumbnail sliders to the selected image
        if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
          mainSwiperRef.current.swiper.slideTo(firstImageIndex);
        }
        if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
          thumbSwiperRef.current.swiper.slideTo(firstImageIndex);
        }
      }
    }
  }, [selectedMaterial, galleryImages, onImageSelect]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    onImageSelect(index);
    const clickedImage = galleryImages[index];
    if (clickedImage.material !== selectedMaterial) {
      onMaterialSelect(clickedImage.material);
    }
    // Slide both main and thumbnail sliders to the clicked image
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
    if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
      thumbSwiperRef.current.swiper.slideTo(index);
    }
  };

  // Sync main slider with selected image index
  const handleMainSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setSelectedImageIndex(newIndex);
    onImageSelect(newIndex);
    const clickedImage = galleryImages[newIndex];
    if (clickedImage.material !== selectedMaterial) {
      onMaterialSelect(clickedImage.material);
    }
    if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
      thumbSwiperRef.current.swiper.slideTo(newIndex);
    }
  };

  return (
    <div className="gallery mavo-md-mb-50 relative">
      {/* Main Image Slider */}
      <div className="swiper-container gallery-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          ref={mainSwiperRef}
          onSlideChange={handleMainSlideChange}
          className="mavo-slider-large"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="gallery-title">
                <Link href="#">
                  <i className="icofont-search"></i>
                </Link>
              </div>
              <Image
                width={1000}
                height={1000}
                src={image.src}
                alt={image.alt}
                quality={100}
                className="w-[700px] h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      <div className="swiper-container overflow-hidden">
        <Swiper slidesPerView={3} spaceBetween="auto" ref={thumbSwiperRef}>
          {thumbnails.map((thumb, index) => (
            <SwiperSlide
              key={thumb.id}
              className="!w-fit flex justify-center items-center"
            >
              <Image
                width={500}
                height={500}
                src={thumb.src}
                alt={thumb.alt}
                className={`${
                  index === selectedImageIndex
                    ? "border-[5px] !border-[#000]/10"
                    : "border-[5px] border-transparent"
                } w-[150px] h-auto object-cover cursor-pointer`}
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
