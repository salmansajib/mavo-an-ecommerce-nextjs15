"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/slices/cartSlice";
import toast from "react-hot-toast";
import Icon from "@/components/Icon";
import ProductGallery from "./ProductGallery";

const ProductDetail = ({ product }) => {
  // State for selections and cart
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Extract unique sizes from all variants
  const sizes = [
    ...new Set(
      product.variants.flatMap((variant) =>
        variant.sizes.map((sizeObj) => sizeObj.size),
      ),
    ),
  ].sort((a, b) => a - b);

  // Calculate current price based on selected size and color
  const getCurrentPrice = () => {
    if (!selectedSize) {
      let price = product.base_price || 0;
      if (product.tags && product.tags.includes("-20%")) {
        price *= 0.8; // Apply 20% discount
      }
      return price.toFixed(2);
    }

    const selectedVariant = product.variants.find(
      (v) => v.color === selectedColor,
    );
    const sizes = selectedVariant
      ? selectedVariant.sizes
      : product.variants[0].sizes;
    const selectedSizeData = sizes.find((s) => s.size === selectedSize);

    let price = selectedSizeData
      ? selectedSizeData.price
      : product.base_price || 0;
    if (product.tags && product.tags.includes("-20%")) {
      price *= 0.8; // Apply 20% discount
    }
    return price.toFixed(2);
  };

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setErrorMessage("");
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setErrorMessage("");
  };

  // Handle quantity change
  const handleQuantityChange = (type) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.type === (product.type || "shoes") &&
        item.attributes.color === selectedColor &&
        item.attributes.size === selectedSize,
    );

    if (existingItem) {
      const newQuantity =
        type === "increase"
          ? existingItem.quantity + 1
          : existingItem.quantity > 1
          ? existingItem.quantity - 1
          : 1;

      try {
        dispatch(
          updateQuantity({
            id: product.id,
            type: product.type || "shoes",
            attributes: { color: selectedColor, size: selectedSize },
            newQuantity,
          }),
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    } else {
      if (type === "increase") {
        setQuantity((prev) => prev + 1);
      } else if (type === "decrease" && quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const toastConfig = {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#000",
        color: "#fff",
        fontFamily: "var(--font-josefin-sans)",
      },
    };

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
      const error = validateSelection();
      if (error) {
        setErrorMessage(error);
        toast.error(error, toastConfig);
        return;
      }

      const selectedVariant = product.variants.find(
        (v) => v.color === selectedColor,
      );
      if (!selectedVariant) {
        throw new Error("Selected product variant not found!");
      }

      const cartItem = {
        id: product.id,
        name: product.name,
        unitPrice: parseFloat(getCurrentPrice()),
        price: parseFloat(getCurrentPrice()) * quantity,
        quantity,
        type: product.type || "shoes",
        attributes: {
          color: selectedColor,
          size: selectedSize,
        },
        image:
          product.variants
            .flatMap((v) => v.images)
            .find((_, i) => i === selectedImageIndex) ||
          selectedVariant.images[0],
      };

      dispatch(addToCart(cartItem));
      toast.success("Product added to cart successfully!", toastConfig);
    } catch (error) {
      const message =
        error.message || "Failed to add product to cart. Please try again.";
      console.error("Error adding to cart:", error);
      setErrorMessage(message);
      toast.error(message, toastConfig);
    }
  };

  return (
    <div className="mavo-single-product-2 mavo-shoes mavo-single-product !mb-0 pb-[100px]">
      <div className="container">
        <div className="row">
          {/* Product Gallery */}
          <div className="col-lg-5 col-md-12">
            <ProductGallery
              product={product}
              selectedColor={selectedColor}
              onColorSelect={handleColorSelect}
              onImageSelect={setSelectedImageIndex}
            />
          </div>

          {/* Spacer Column */}
          <div className="col-lg-1"></div>

          {/* Product Info */}
          <div className="col-lg-6 col-md-12">
            <div className="mavo-single-product-cart">
              <div className="mavo-product-title">
                <h5 className="mavo-shoes-title mavo-mb-15">{product.name}</h5>
              </div>

              <div className="mavo-product-price d-flex mavo-mb-15">
                <span className="mavo-price">${getCurrentPrice()}</span>
                <div className="mavo-producet-rating mavo-mr-10">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={
                        i <
                        Math.round(
                          product.customer_reviews.reduce(
                            (sum, r) => sum + r.rating,
                            0,
                          ) / product.customer_reviews.length,
                        )
                          ? "flaticon-star-1"
                          : "flaticon-star"
                      }
                    ></i>
                  ))}
                </div>
                <span className="reviews">{product.reviews} Reviews</span>
              </div>

              <div className="mavo-product-meta mavo-mb-15 flex flex-wrap items-center">
                <a
                  className="review-icon mavo-mr-30 flex items-center gap-2"
                  href="#"
                >
                  <img src="/images/icons/share.png" alt="png" /> Share
                </a>
                <a
                  className="review-icon mavo-mr-30 flex items-center gap-2"
                  href="#"
                >
                  <img src="/images/icons/quetions.png" alt="png" /> Ask a
                  Question
                </a>
                <a
                  className="review-icon mavo-mr-30 flex items-center gap-2"
                  href="#"
                >
                  <img src="/images/icons/view.png" alt="png" /> 50 people are
                  viewing this right now
                </a>
              </div>

              <div className="mavo-product-size">
                <h5 className="mavo-mb-25">Select Size:</h5>
                <ul>
                  {sizes.map((size) => (
                    <li key={size}>
                      <a
                        href="#"
                        className={
                          selectedSize === size ? "bg-black text-white" : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleSizeSelect(size);
                        }}
                      >
                        {size}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mavo-product-color">
                <h5 className="color">Colour:</h5>
                <p>{selectedColor || product.additional_info.Colour}</p>
                <div className="mavo-product-variation mavo-mb-20 flex flex-wrap items-center">
                  {product.variants.map((variant) => (
                    <div
                      key={variant.color}
                      className="color-swatch"
                      style={{
                        backgroundColor: variant.color_code,
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        margin: "5px",
                        cursor: "pointer",
                        border:
                          selectedColor === variant.color
                            ? "2px solid #000"
                            : "1px solid #ccc",
                      }}
                      title={variant.color}
                      onClick={() => handleColorSelect(variant.color)}
                    ></div>
                  ))}
                </div>
                <span
                  className="clear flex items-center gap-1"
                  onClick={() => {
                    setSelectedColor(null);
                    setSelectedSize(null);
                    setErrorMessage("");
                    setSelectedImageIndex(0);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/images/icons/clear.png" alt="Clear" /> Clear
                </span>
              </div>

              <div className="mavo-product-cown flex flex-wrap items-center gap-3">
                <div className="flex items-center justify-between w-[180px] h-[60px] border !border-black/40">
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-r !border-black/40"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={
                      quantity <= 1 &&
                      !cartItems.find(
                        (item) =>
                          item.id === product.id &&
                          item.type === (product.type || "shoes") &&
                          item.attributes.color === selectedColor &&
                          item.attributes.size === selectedSize,
                      )
                    }
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <span className="size-[25px] text-lg flex items-center justify-center font-josefin-sans">
                    {quantity}
                  </span>
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-l !border-black/40"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
                <div className="mavo-product-add-cart flex flex-wrap items-center !ml-0 mt-2 md:!mt-0 gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="!uppercase w-[180px] h-[60px] border !border-black flex items-center justify-center bg-black text-white"
                  >
                    Add to Cart
                  </button>
                  <a href="#" className="flex flex-wrap items-center gap-2">
                    <img src="/images/icons/wishlist.png" alt="wishlist" /> Add
                    to wish list
                  </a>
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-500 mb-4 font-josefin-sans">
                  {errorMessage}
                </div>
              )}

              <div className="mavo-product-categorie">
                <div className="categorie">
                  <span>Categories :</span>
                  <a href="#">Shoe,</a>
                  <a href="#"> Sneaker</a>
                </div>
                <div className="categorie-tag">
                  <span>Sku :</span>
                  <a href="#">{product.id}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
