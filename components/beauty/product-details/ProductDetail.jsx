"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";
import Icon from "@/components/Icon";

const ProductDetail = ({ product }) => {
  // State for selections and cart
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate current price based on selected size
  const getCurrentPrice = () => {
    let price = product.base_price || 0;

    if (selectedSize) {
      const selectedSizeData = product.sizes.find(
        (s) => s.size === selectedSize,
      );
      price = selectedSizeData ? selectedSizeData.price : product.base_price;
    }

    // Apply discounts based on tags
    if (product.tags && product.tags.includes("-20%")) {
      price *= 0.8; // Apply 20% discount
    } else if (product.tags && product.tags.includes("-15%")) {
      price *= 0.85; // Apply 15% discount
    }

    return price.toFixed(2);
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
        item.type === (product.type || "Beauty Product") &&
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
            type: product.type || "Beauty Product",
            attributes: { size: selectedSize },
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

    try {
      if (!selectedSize) {
        const error = "Please select a size!";
        setErrorMessage(error);
        toast.error(error, toastConfig);
        return;
      }

      const selectedSizeData = product.sizes.find(
        (s) => s.size === selectedSize,
      );
      if (!selectedSizeData) {
        throw new Error("Selected size not found!");
      }

      const cartItem = {
        id: product.id,
        name: product.name,
        unitPrice: parseFloat(getCurrentPrice()),
        price: parseFloat(getCurrentPrice()) * quantity,
        quantity,
        type: product.type || "Beauty Product",
        attributes: {
          size: selectedSize,
        },
        image: product.images[0],
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

  // Calculate average rating
  const averageRating = product.customer_reviews.length
    ? Math.round(
        product.customer_reviews.reduce((sum, r) => sum + r.rating, 0) /
          product.customer_reviews.length,
      )
    : 0;

  return (
    <div className="mavo-single-product mavo-beauty-product-page watch mavo-pt-75 mavo-md-pt-50 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="mavo-single-product-cart">
              <div className="mavo-rating-area mavo-pb-25 mavo-mb-25">
                <div className="mavo-producet-rating mavo-mb-15 d-flex align-items-center">
                  <ul>
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i
                          className={
                            i < averageRating
                              ? "flaticon-star-1"
                              : "flaticon-star"
                          }
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <div className="reviews">{product.reviews} reviews</div>
                </div>
                <h6 className="mavo-mb-10"> {product.name} </h6>
                <span>${getCurrentPrice()}</span>
              </div>
              <div className="mavo-cart-desc mavo-pb-10 mavo-mb-25">
                <p className="mavo-desc">
                  Montes aute consequat aliquam eiusmod beatae quaerat pede
                  ultrices ad eget or adipisci aliquet sodales quia mollitia
                  fringilla laboriosam quaina rerbosn
                </p>
              </div>
              {/* <div className="mavo-share-content mavo-pb-30 mavo-mb-20 d-flex align-items-center">
                <div className="product-share mavo-mr-30">
                  <Link href="#" className="flex items-center">
                    <img src="/images/icons/share.png" alt="png" />
                    <span>Share</span>
                  </Link>
                </div>
                <div className="product-share">
                  <Link href="#" className="flex items-center">
                    <img src="/images/icons/quetions.png" alt="png" />
                    <span>Ask a Question</span>
                  </Link>
                </div>
              </div> */}
              <div className="mavo-product-categorie">
                <div className="categorie mavo-mb-10">
                  <p className="font-josefin-sans">SUK: {product.id}</p>
                </div>
                <div className="categorie-tag ">
                  <span>Discount Sale end in:</span>
                  <p className="font-josefin-sans">356 D - 14h - 29m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="swiper-slide mavo-pl-30">
              <img src={product.images[0]} alt="product" />
              <div className="mavo-single-product-view">
                <ul>
                  {product.tags && (
                    <p className="font-josefin-sans bg-[#F7C490] rounded-full size-15 flex items-center justify-center text-black">
                      {product.tags}
                    </p>
                  )}
                  {/* <li>
                    <Link href="#">
                      <i className="flaticon-search"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="flaticon-sort"></i>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mavo-single-product-cart mavo-single-product-cart1 mavo-pl-40">
              <div className="mavo-product-size mavo-mb-20">
                <h5>Size</h5>
                <div className="mavo-product-image-size mavo-mb-20">
                  <ul>
                    {product.sizes.map((item, index) => (
                      <li key={index}>
                        <button
                          className={`border-1 border-gray-300 px-3 py-2 !text-xl hover:bg-black hover:text-gray-50 ${
                            selectedSize === item.size
                              ? "bg-black text-gray-50"
                              : ""
                          }`}
                          onClick={() => handleSizeSelect(item.size)}
                        >
                          {item.size}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mavo-cown-number-area mavo-pb-20 mavo-mb-15 flex gap-3 flex-wrap items-center justify-between">
                <div className="flex items-center justify-between w-[180px] h-[60px] border !border-black/40 mx-auto sm:!mx-0 mb-3 sm:!mb-0">
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-r !border-black/40"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={
                      quantity <= 1 &&
                      !cartItems.find(
                        (item) =>
                          item.id === product.id &&
                          item.type === (product.type || "Beauty Product") &&
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
                <div className="mavo-cart-button-area d-flex align-items-center">
                  <div className="mavo-add-cart mavo-mr-45">
                    <button className="mavo-cart" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </div>
                  <div className="mavo-star">
                    <i className="flaticon-star"></i>
                  </div>
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 mb-4 font-josefin-sans">
                  {errorMessage}
                </div>
              )}
              <div className="mavo-delevery-content mavo-mb-20">
                <div className="mavo-product-delivery mavo-mb-15 flex items-center">
                  <img src="/images/icons/delivery-van-1.png" alt="png" />
                  <span>Estimated Delivery : 3 - 5 Working Days</span>
                </div>
                <div className="mavo-product-delivery mavo-mb-20 flex items-center">
                  <img src="/images/icons/box.png" alt="png" />
                  <span>Free Shipping & Returns</span>
                </div>
                <div className="mavo-product-delivery mavo-mb-20 flex items-center">
                  <img src="/images/icons/view.png" alt="png" />
                  <span>24 people are viewing this right now</span>
                </div>
              </div>
              <div className="mavo-product-checkout mavo-mb-25">
                <img src="/images/icons/card-1.png" alt="card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
