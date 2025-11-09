"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";
import Icon from "@/components/Icon";
import ProductGallery from "./ProductGallery";

const ProductDetail = ({ product }) => {
  // State for selections and cart
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Extract unique materials and lengths from variants
  const materials = [
    ...new Set(product.variants.map((variant) => variant.material)),
  ];
  const lengths = [
    ...new Set(
      product.variants.flatMap((variant) =>
        variant.lengths.map((len) => len.length),
      ),
    ),
  ].sort((a, b) => a - b);

  // Calculate current price based on selected material and length
  const getCurrentPrice = () => {
    let price = product.base_price || 0;

    if (selectedMaterial && selectedLength) {
      const selectedVariant = product.variants.find(
        (v) => v.material === selectedMaterial,
      );
      if (selectedVariant) {
        const lengthData = selectedVariant.lengths.find(
          (l) => l.length === selectedLength,
        );
        price = lengthData
          ? lengthData.price
          : selectedVariant.lengths[0].price;
      }
    }

    // Apply discounts based on tags
    if (product.tags && product.tags.includes("-20")) {
      price *= 0.8; // Apply 20% discount
    } else if (product.tags && product.tags.includes("-30")) {
      price *= 0.7; // Apply 30% discount
    }

    return price.toFixed(2);
  };

  // Handle material selection
  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setErrorMessage("");
  };

  // Handle length selection
  const handleLengthSelect = (length) => {
    setSelectedLength(length);
    setErrorMessage("");
  };

  // Handle quantity change
  const handleQuantityChange = (type) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.type === (product.type || "Jewelry") &&
        item.attributes.material === selectedMaterial &&
        item.attributes.length === selectedLength,
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
            type: product.type || "Jewelry",
            attributes: { material: selectedMaterial, length: selectedLength },
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
      if (!selectedMaterial && !selectedLength) {
        return "Please select a material and a length!";
      }
      if (!selectedMaterial) {
        return "Please select a material!";
      }
      if (!selectedLength) {
        return "Please select a length!";
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
        (v) => v.material === selectedMaterial,
      );
      if (!selectedVariant) {
        throw new Error("Selected product variant not found!");
      }

      const selectedLengthData = selectedVariant.lengths.find(
        (l) => l.length === selectedLength,
      );
      if (!selectedLengthData) {
        throw new Error("Selected length not found!");
      }

      const cartItem = {
        id: product.id,
        name: product.name,
        unitPrice: parseFloat(getCurrentPrice()),
        price: parseFloat(getCurrentPrice()) * quantity,
        quantity,
        type: product.type || "Jewelry",
        attributes: {
          material: selectedMaterial,
          length: selectedLength,
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

  // Calculate average rating
  const averageRating = product.customer_reviews.length
    ? Math.round(
        product.customer_reviews.reduce((sum, r) => sum + r.rating, 0) /
          product.customer_reviews.length,
      )
    : 0;

  return (
    <div className="mavo-single-product jewellery jewellery-products">
      <div className="container page-container2">
        <div className="row">
          {/* product gallery */}
          <div className="col-lg-6 col-md-12">
            <ProductGallery
              product={product}
              selectedMaterial={selectedMaterial}
              onMaterialSelect={handleMaterialSelect}
              onImageSelect={setSelectedImageIndex}
            />
          </div>

          {/* product info */}
          <div className="col-lg-6 col-md-12">
            <div className="mavo-single-product-cart">
              <div className="mavo-product-social mavo-mb-15 d-flex align-items-center justify-content-between">
                <div className="mavo-product-price">
                  <span>${getCurrentPrice()}</span>
                </div>
                <div className="mavo-producet-rating">
                  <span className="reviews">{product.reviews} Reviews</span>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={
                        i < averageRating ? "flaticon-star-1" : "flaticon-star"
                      }
                    ></i>
                  ))}
                </div>
              </div>
              <div className="mavo-product-title">
                <div>
                  <h5 className="mavo-jewellery-title">{product.name}</h5>
                  <p className="product-cord">Product SKU - {product.id}</p>
                </div>
                <div className="right">
                  {/* <Link href="#" className=" flex items-center gap-1">
                    <img src="/images/icons/share.png" alt="png" />
                    <span className="text-black">Share</span>
                  </Link>
                  <Link className="question flex items-center gap-1" href="#">
                    <img src="/images/icons/quetions.png" alt="png" />
                    <span className="text-black">Ask a Question</span>
                  </Link> */}
                  {product.tags && product.tags.includes("-20") && (
                    <p className="discount">-20%</p>
                  )}
                  {product.tags && product.tags.includes("-30") && (
                    <p className="discount">-30%</p>
                  )}
                </div>
              </div>
              <div className="mavo-product-sold">
                <p className="flex items-center gap-1">
                  <img src="/images/icons/fire.png" alt="fire" />
                  <span className="text-black">55 sold in last 10 hours</span>
                </p>
                <div className="mavo-view-title flex items-center gap-1">
                  <img src="/images/icons/view.png" alt="png" />
                  <span className="text-black">
                    50 people are viewing this right now
                  </span>
                </div>
              </div>
              <div className="mavo-product-material font-josefin-sans">
                <h5>Material</h5>
                <ul>
                  {materials.map((material) => (
                    <li key={material}>
                      <button
                        className={`${
                          selectedMaterial === material
                            ? "bg-black text-white"
                            : ""
                        } border !border-black px-3 py-2 rounded`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMaterialSelect(material);
                        }}
                      >
                        {material}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mavo-product-size">
                <span className="color">Length:</span>
                <ul>
                  {lengths.map((length) => (
                    <li
                      key={length}
                      className={
                        selectedLength === length ? "bg-black text-white" : ""
                      }
                      onClick={() => handleLengthSelect(length)}
                      style={{ cursor: "pointer" }}
                    >
                      {length}"
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-[20px] flex flex-col md:flex-row items-center gap-[30px] py-[20px]">
                <div className="flex items-center justify-between w-[180px] h-[60px] border !border-black/40 rounded-full">
                  <button
                    className="h-full w-[35px] flex items-center justify-center border-r !border-black/40"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={
                      quantity <= 1 &&
                      !cartItems.find(
                        (item) =>
                          item.id === product.id &&
                          item.type === (product.type || "Jewelry") &&
                          item.attributes.material === selectedMaterial &&
                          item.attributes.length === selectedLength,
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
                <div className="font-marcellus flex flex-col md:flex-row items-center gap-[30px]">
                  <button
                    onClick={handleAddToCart}
                    className="!uppercase w-[180px] h-[60px] border !border-[#e0c084] flex items-center justify-center bg-transparent text-black !rounded-full"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href="/cart"
                    className="flex items-center justify-center size-[60px] bg-[#e0c084] rounded-full"
                  >
                    <Icon name="Star" size={32} color="#fff" />
                  </Link>
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-500 mb-4 font-josefin-sans">
                  {errorMessage}
                </div>
              )}

              <div className="mavo-product-checkout flex flex-col items-center">
                <img
                  className="mavo-mb-20"
                  src="/images/icons/card-1.png"
                  alt="card"
                />
                {/* <p>More payment options</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
