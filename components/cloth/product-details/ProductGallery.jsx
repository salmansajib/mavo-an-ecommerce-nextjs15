"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LoaderSpinner from "@/components/LoaderSpinner";

const ProductGallery = ({
  product,
  selectedColor,
  onColorChange,
  onImageChange,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Get all images from variants
  const allImages = product.variants.flatMap((variant) => variant.images);

  // Update selected image when color changes
  useEffect(() => {
    if (selectedColor) {
      // Find the variant with the selected color
      const variantIndex = product.variants.findIndex(
        (variant) => variant.color === selectedColor,
      );

      if (variantIndex !== -1) {
        // Find the index of the first image in this variant's images
        const firstImageInVariant = allImages.findIndex(
          (img) => img === product.variants[variantIndex].images[0],
        );

        if (firstImageInVariant !== -1) {
          setSelectedImage(firstImageInVariant);
          onImageChange(firstImageInVariant);
        }
      }
    }
  }, [selectedColor, product.variants]);

  const handleThumbnailClick = (index) => {
    if (!loadedImages.has(index)) {
      setIsImageLoading(true);
    }

    setSelectedImage(index);
    onImageChange(index);

    // Find the variant that contains this image
    const variantIndex = product.variants.findIndex((variant) =>
      variant.images.includes(allImages[index]),
    );

    if (variantIndex !== -1) {
      // Change the color to the variant of the selected image
      const newColor = product.variants[variantIndex].color;
      onColorChange(product.variants[variantIndex]);
    }
  };

  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="swiper-container gallery-slider">
        <div className="swiper-wrapper">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`swiper-slide relative ${
                selectedImage === index ? "active" : ""
              }`}
              style={{
                display: selectedImage === index ? "block" : "none",
              }}
            >
              <div className="relative w-full aspect-square">
                {isImageLoading && selectedImage === index && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                    <LoaderSpinner />
                  </div>
                )}
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  width={500}
                  height={500}
                  quality={70}
                  className="w-full h-auto object-cover"
                  onLoadingComplete={() => {
                    setLoadedImages((prev) => new Set(prev).add(index));
                    setIsImageLoading(false);
                  }}
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
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={false}
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`${product.name} - Thumbnail ${index + 1}`}
                width={100}
                height={100}
                quality={100}
                className={`${
                  selectedImage === index
                    ? "border-[5px] !border-[#000]/10"
                    : "border-[5px] border-transparent"
                } w-full h-auto cursor-pointer`}
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
