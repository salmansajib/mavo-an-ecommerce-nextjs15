"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/features/cart/cartSlice";

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
import Icon from "@/components/Icon";
import useWishlist from "@/hooks/useWishlist";

const SingleProduct = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  // Wishlist item data
  const itemData = {
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.base_price,
    image: product.variants[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const getCurrentPrice = () => {
    if (!selectedSize) return product.base_price || 0;

    const sizes = product.variants[0].sizes;
    const selectedSizeData = sizes.find((s) => s.size === selectedSize);

    return selectedSizeData ? selectedSizeData.price : product.base_price || 0;
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
    // Check if item exists in cart with same id, type, color, and size
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.type === (product.type || "clothing") &&
        item.attributes.color === selectedColor &&
        item.attributes.size === selectedSize,
    );

    const toastConfig = {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#000",
        color: "#fff",
        fontFamily: "var(--font-josefin-sans)",
      },
    };

    if (existingItem) {
      // Update quantity in cart
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
            type: product.type || "clothing",
            attributes: { color: selectedColor, size: selectedSize },
            newQuantity,
          }),
        );
        toast.success("Cart quantity updated!", toastConfig);
      } catch (error) {
        console.error("Error updating quantity:", error);
        toast.error("Failed to update quantity.", toastConfig);
      }
    } else {
      // Update local quantity state for adding to cart
      if (type === "increase") {
        setQuantity((prev) => prev + 1);
      } else if (type === "decrease" && quantity > 1) {
        setQuantity((prev) => prev - 1);
      } else {
        toast.error("Minimum quantity is 1.", toastConfig);
      }
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
        unitPrice: getCurrentPrice(),
        price: getCurrentPrice() * quantity, // Total price for the quantity
        quantity,
        type: product.type || "clothing", // Add type, with fallback
        attributes: {
          color: selectedColor,
          size: selectedSize,
        },
        image:
          selectedVariant.images[selectedImage] || selectedVariant.images[0],
        // variant: selectedVariant,
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

                <button
                  onClick={() => handleWishlistToggle()}
                  className="size-[60px] bg-black flex items-center justify-center"
                >
                  <Icon
                    name="Star"
                    size={32}
                    className={`${
                      isInWishlist ? "fill-white stroke-white" : "stroke-white"
                    }`}
                  />
                </button>
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
