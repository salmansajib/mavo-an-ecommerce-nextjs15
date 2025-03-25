"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";

const useCountdown = (initialDays) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const totalSeconds =
        timeLeft.days * 24 * 60 * 60 +
        timeLeft.hours * 60 * 60 +
        timeLeft.minutes * 60 +
        timeLeft.seconds;

      if (totalSeconds <= 0) {
        // Reset to 10 days when countdown reaches 0
        return {
          days: 10,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const newTotalSeconds = totalSeconds - 1;
      const days = Math.floor(newTotalSeconds / (24 * 60 * 60));
      const hours = Math.floor((newTotalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
      const seconds = newTotalSeconds % 60;

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return timeLeft;
};

const SingleProduct = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isFirstThumbnailClick, setIsFirstThumbnailClick] = useState(true);
  const timeLeft = useCountdown(10);

  const handleColorSelect = (variant, index) => {
    setSelectedColor(variant.color);
    setSelectedImage(index);
    setErrorMessage("");
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setErrorMessage("");
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Please select the size and color!");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: getCurrentPrice(),
      quantity,
      selectedColor,
      selectedSize,
      image: allImages[selectedImage],
      variant: product.variants.find((v) => v.color === selectedColor),
    };

    // This will be replaced with Redux dispatch
    console.log("Adding to cart:", cartItem);

    // Show success toast
    toast.success("Product added to cart successfully!", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#000",
        color: "#fff",
        fontFamily: "var(--font-josefin-sans)",
      },
    });
  };

  // Get all images from all variants
  const allImages = product.variants.flatMap((variant) => variant.images);

  // Get current price based on selected size
  const getCurrentPrice = () => {
    if (!selectedSize) return product.base_price || 0;

    // Get the first variant's sizes since we're only considering size for price
    const sizes = product.variants[0].sizes;
    const selectedSizeData = sizes.find((s) => s.size === selectedSize);
    return selectedSizeData ? selectedSizeData.price : product.base_price || 0;
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (isFirstThumbnailClick) {
      setIsImageLoading(true);
      setIsFirstThumbnailClick(false);
    }

    setSelectedImage(index);
    // Find the variant that contains this image
    const variantIndex = product.variants.findIndex((variant) =>
      variant.images.includes(allImages[index]),
    );
    if (variantIndex !== -1) {
      setSelectedColor(product.variants[variantIndex].color);
    }
  };

  return (
    <div className="mavo-single-product mavo-pt-110 mavo-md-pt-70 pb-[100px]">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="gallery">
              {/* main image */}
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
                            <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        <Image
                          src={image}
                          alt={`${product.name} - Image ${index + 1}`}
                          width={500}
                          height={500}
                          quality={100}
                          className="w-full h-full object-cover"
                          onLoadingComplete={() => setIsImageLoading(false)}
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
              {/* thumb images */}
              <div className="swiper-container overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation={false}
                  className=""
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
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="mavo-single-product-cart mavo-pl-50">
              <div className="mavo-producet-rating mavo-mb-15">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="flaticon-star-1"></i>
                ))}
                <span className="reviews">{product.reviews} Reviews</span>
              </div>
              <div className="mavo-product-title mavo-mb-10">
                <h3>{product.name}</h3>
              </div>
              <div className="mavo-product-price mavo-mb-25">
                <span>${getCurrentPrice().toFixed(2)}</span>
                <span className="mavo-tag uppercase">in stock</span>
              </div>
              <div className="mavo-product-meta mavo-mb-30">
                <ul className="flex flex-col md:flex-row items-start gap-2">
                  <li className="!flex items-center gap-2">
                    <img src="/images/icons/share.png" alt="png" />{" "}
                    <span className="">Share</span>
                  </li>
                  <li className="!flex items-center gap-2">
                    <img src="/images/icons/quetions.png" alt="png" />
                    <span className="">Ask a Question</span>
                  </li>
                  <li className="!flex items-center gap-2">
                    <img src="/images/icons/view.png" alt="png" />
                    <span className="">
                      50 people are viewing this right now
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mavo-product-discount">
                <div className="discount">
                  <span>25% oFF</span>
                </div>
                <div className="discount-sale flex items-center">
                  <span>Discount Sale end in:</span>
                  <div id="countdown">
                    <ul className="flex items-center justify-center gap-4">
                      <li className="space-x-1">
                        <span className="text-2xl font-bold">
                          {timeLeft.days}
                        </span>
                        <span className="text-sm">D</span>
                      </li>
                      <li className="space-x-1">
                        <span className="text-2xl font-bold">
                          {timeLeft.hours}
                        </span>
                        <span className="text-sm">H</span>
                      </li>
                      <li className="space-x-1">
                        <span className="text-2xl font-bold">
                          {timeLeft.minutes}
                        </span>
                        <span className="text-sm">M</span>
                      </li>
                      <li className="space-x-1">
                        <span className="text-2xl font-bold">
                          {timeLeft.seconds}
                        </span>
                        <span className="text-sm">S</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mavo-product-size my-[30px] space-y-[20px]">
                <div className="space-x-2">
                  <span>Size:</span>
                  <span className="size">
                    {selectedSize || "Select a size"}
                  </span>
                </div>
                <div className="flex gap-2">
                  {product.variants[0].sizes.map((size, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSizeSelect(size.size)}
                      className={`${
                        selectedSize === size.size
                          ? "!bg-black border-0 text-white"
                          : "bg-transparent text-black"
                      } px-[20px] py-[7px] border !border-black/20 flex items-center justify-center`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mavo-product-color mavo-mb-20">
                <span className="mavo-color">Colour : </span>
                <span className="mavo-lapisblue">
                  {selectedColor || "Select a color"}
                </span>
                <div className="product-color mavo-mt-10 d-flex gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`size-[25px] !rounded-full cursor-pointer ${
                        selectedColor === variant.color
                          ? "border-4 !border-white/50"
                          : ""
                      }`}
                      style={{
                        backgroundColor: variant.color_code,
                      }}
                      onClick={() => handleColorSelect(variant, index)}
                      title={variant.color}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="mb-[20px] flex flex-col sm:flex-row items-center gap-[30px] py-[20px]">
                <div className="flex items-center justify-between w-[180px] h-[60px] border !border-black/40">
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-r !border-black/40"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="size-[25px] text-lg flex items-center justify-center font-josefin-sans">
                    {quantity}
                  </span>
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-l !border-black/40"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="font-marcellus">
                  <button
                    onClick={handleAddToCart}
                    className="!uppercase w-[180px] h-[60px] border !border-black flex items-center justify-center bg-black text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 mb-4 font-josefin-sans">
                  {errorMessage}
                </div>
              )}
              <div className="mavo-product-categorie mavo-mb-20 d-flex align-items-center justify-content-between">
                <div className="categorie">
                  <span>Categories:</span>
                  <a href="#">Jacket,</a>
                  <a href="#"> Colagen</a>
                </div>
                <div className="categorie-tag">
                  <span>Tags:</span>
                  <a href="#">Cloth,</a>
                  <a href="#">Simple</a>
                </div>
                <div className="categorie-id">
                  <span>Product Id:</span>
                  <a href="#">{product.id}</a>
                </div>
              </div>
              <div className="mavo-product-delivery mavo-mb-20 flex items-center gap-2">
                <img src="/images/icons/delivery-van-1.png" alt="png" />
                <div>
                  <span>Estimated Delivery :</span>
                  <span>3 - 5 Working Days</span>
                </div>
              </div>
              <div className="mavo-product-delivery mavo-mb-25 flex items-center gap-2">
                <img src="/images/icons/box.png" alt="png" />
                <div>
                  <span>Free SHipping & Returns :</span>
                  <span>On all orders over $199.00</span>
                </div>
              </div>
              <div className="mavo-product-checkout">
                <Image
                  src="/images/icons/card.png"
                  alt="card"
                  width={800}
                  height={200}
                  quality={100}
                  className="w-[500px] h-auto mx-auto"
                />
                <p className="mavo-mt-10">Guaranteed safe & secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
