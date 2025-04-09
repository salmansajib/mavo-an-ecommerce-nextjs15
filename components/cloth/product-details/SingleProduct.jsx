"use client";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/clothSlice";
import toast from "react-hot-toast";

import ProductGallery from "./ProductGallery";
import ProductRating from "./ProductRating";
import ProductPriceSection from "./ProductPriceSection";
import ProductMetaInfo from "./ProductMetaInfo";
import ProductDiscountTimer from "./ProductDiscountTimer";
import ProductSizeSelector from "./ProductSizeSelector";
import ProductColorSelector from "./ProductColorSelector";
import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductCheckoutInfo from "./ProductCheckoutInfo";
import ProductCategoryTags from "./ProductCategoryTags";

const SingleProduct = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  const dispatch = useDispatch();

  const getCurrentPrice = () => {
    if (!selectedSize) return (product.base_price || 0) * quantity;

    const sizes = product.variants[0].sizes;
    const selectedSizeData = sizes.find((s) => s.size === selectedSize);

    return selectedSizeData
      ? selectedSizeData.price * quantity
      : (product.base_price || 0) * quantity;
  };

  const handleColorSelect = (variant) => {
    setSelectedColor(variant.color);
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
    // Configuration for toast notifications
    const toastConfig = {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#000",
        color: "#fff",
        fontFamily: "var(--font-josefin-sans)",
      },
    };

    // Validation helper function
    const validateSelection = () => {
      if (!selectedColor && !selectedSize) {
        return "Please select a size and a color!";
      }
      if (!selectedColor) {
        return "Please select a color!";
      }
      if (!selectedSize) {
        return "Please select a size!";
      }
      return null;
    };

    try {
      // Perform validation
      const errorMessage = validateSelection();
      if (errorMessage) {
        setErrorMessage(errorMessage);
        toast.error(errorMessage, toastConfig);
        return;
      }

      // Get selected variant with error handling
      const selectedVariant = product.variants.find(
        (v) => v.color === selectedColor,
      );
      if (!selectedVariant) {
        throw new Error("Selected product variant not found!");
      }

      // Prepare cart item
      const cartItem = {
        id: product.id,
        name: product.name,
        price: getCurrentPrice(),
        quantity,
        selectedColor,
        selectedSize,
        image:
          selectedVariant.images[selectedImage] || selectedVariant.images[0],
        variant: selectedVariant,
      };

      // Add to cart and notify success
      dispatch(addToCart(cartItem));
      toast.success("Product added to cart successfully!", toastConfig);
    } catch (error) {
      // Unified error handling
      const message =
        error.message || "Failed to add product to cart. Please try again.";
      console.error("Error adding to cart:", error);
      setErrorMessage(message);
      toast.error(message, toastConfig);
    }
  };

  return (
    <div className="mavo-single-product mavo-pt-110 mavo-md-pt-70 pb-[100px]">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <ProductGallery
              product={product}
              selectedColor={selectedColor}
              onColorChange={handleColorSelect}
              onImageChange={setSelectedImage}
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="mavo-single-product-cart mavo-pl-50">
              <ProductRating rating={5} reviews={product.reviews} />

              <div className="mavo-product-title mavo-mb-10">
                <h3>{product.name}</h3>
              </div>

              <ProductPriceSection price={getCurrentPrice()} />

              <ProductMetaInfo />
              <ProductDiscountTimer />

              <ProductSizeSelector
                sizes={product.variants[0].sizes}
                selectedSize={selectedSize}
                onSizeSelect={handleSizeSelect}
              />

              <ProductColorSelector
                variants={product.variants}
                selectedColor={selectedColor}
                onColorSelect={handleColorSelect}
              />

              <div className="mb-[20px] flex flex-col sm:flex-row items-center gap-[30px] py-[20px]">
                <ProductQuantitySelector
                  quantity={quantity}
                  onIncrease={() => handleQuantityChange("increase")}
                  onDecrease={() => handleQuantityChange("decrease")}
                />

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

              <ProductCategoryTags productId={product.id} />
              <ProductCheckoutInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
