"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/slices/cartSlice";
import toast from "react-hot-toast";
import Icon from "@/components/Icon";
import ProductGallery from "./ProductGallery";

const ProductDetail = ({ product }) => {
  // State for selections and cart
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Extract unique materials from all variants
  const materials = [
    ...new Set(
      product.variants.flatMap((variant) =>
        variant.materials.map((matObj) => matObj.material),
      ),
    ),
  ];

  // Calculate current price based on selected color and material
  const getCurrentPrice = () => {
    let price = product.base_price || 0;

    // If a color is selected, use the first material's price for that color variant
    if (selectedColor) {
      const selectedVariant = product.variants.find(
        (v) => v.color === selectedColor,
      );
      if (selectedVariant) {
        // If material is selected, use its price; otherwise, use the first material's price
        const materialData = selectedMaterial
          ? selectedVariant.materials.find(
              (m) => m.material === selectedMaterial,
            )
          : selectedVariant.materials[0];
        price = materialData
          ? materialData.price
          : selectedVariant.materials[0].price;
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

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setErrorMessage("");
  };

  // Handle material selection
  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setErrorMessage("");
  };

  // Handle quantity change
  const handleQuantityChange = (type) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.type === (product.type || "watch") &&
        item.attributes.color === selectedColor &&
        item.attributes.material === selectedMaterial,
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
            type: product.type || "watch",
            attributes: { color: selectedColor, material: selectedMaterial },
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
      if (!selectedColor && !selectedMaterial) {
        return "Please select a material and a color!";
      }
      if (!selectedColor) {
        return "Please select a color!";
      }
      if (!selectedMaterial) {
        return "Please select a material!";
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

      const selectedMaterialData = selectedVariant.materials.find(
        (m) => m.material === selectedMaterial,
      );
      if (!selectedMaterialData) {
        throw new Error("Selected material not found!");
      }

      const cartItem = {
        id: product.id,
        name: product.name,
        unitPrice: parseFloat(getCurrentPrice()),
        price: parseFloat(getCurrentPrice()) * quantity,
        quantity,
        type: product.type || "watch",
        attributes: {
          color: selectedColor,
          material: selectedMaterial,
        },
        image:
          product.variants
            .flatMap((v) => v.materials.flatMap((m) => m.images))
            .find((_, i) => i === selectedImageIndex) ||
          selectedVariant.materials[0].images[0],
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
    <div className="mavo-single-product watch mavo-pt-75 mavo-pb-120 mavo-md-pb-70 mt-[100px]">
      <div className="container">
        <div className="row">
          {/* Product Gallery */}
          <div className="col-lg-6 col-md-12">
            <ProductGallery
              product={product}
              selectedColor={selectedColor}
              onColorSelect={handleColorSelect}
              onImageSelect={setSelectedImageIndex}
            />
          </div>

          {/* Product Info */}
          <div className="col-lg-6 col-md-12">
            <div className="mavo-single-product-cart">
              <div className="mavo-product-title">
                <h6 className="mavo-mb-20">{product.name}</h6>
              </div>

              <div className="mavo-product-social mavo-mb-25 d-flex align-items-center">
                <div className="mavo-producet-rating d-flex align-items-center">
                  <div className="mavo-producet-rating">
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
                  <div className="reviews">{product.reviews} Reviews</div>
                </div>
                <div className="product-share">
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      width={30}
                      height={30}
                      className="w-[15px] h-auto"
                      src="/images/icons/share.png"
                      alt="png"
                    />{" "}
                    Share
                  </Link>
                </div>
              </div>

              <div className="mavo-product-price mavo-mb-15">
                <span>${getCurrentPrice()}</span>
              </div>

              <div className="mavo-product-material mavo-mb-40">
                <h5 className="mavo-mb-30">Material</h5>
                <ul>
                  {materials.map((material) => (
                    <li key={material}>
                      <Link
                        href="#"
                        className={
                          selectedMaterial === material
                            ? "bg-black text-white"
                            : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleMaterialSelect(material);
                        }}
                      >
                        {material}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mavo-product-color mavo-mb-25">
                <span className="color">Colour:</span>
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
                    setSelectedMaterial(null);
                    setErrorMessage("");
                    setSelectedImageIndex(0);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    width={30}
                    height={30}
                    className="w-[22px] h-auto"
                    src="/images/icons/clear.png"
                    alt="Clear"
                  />
                  Clear
                </span>
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
                          item.type === (product.type || "watch") &&
                          item.attributes.color === selectedColor &&
                          item.attributes.material === selectedMaterial,
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
                    className="!uppercase w-[180px] h-[60px] border !border-[#9b8959] flex items-center justify-center bg-[#9b8959] text-white !rounded-full"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href="/cart"
                    className="flex items-center justify-center size-[60px] bg-[#9b8959] rounded-full"
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

              <div className="mavo-product-delivery mavo-mb-25 flex items-center">
                <Image
                  width={50}
                  height={50}
                  className="w-[35px] h-auto"
                  src="/images/icons/delivery-van-1.png"
                  alt="png"
                />
                <span>Estimated Delivery :</span>
                <span>Within one days of product purchase</span>
              </div>
              <div className="mavo-product-delivery mavo-mb-30 flex items-center">
                <Image
                  width={50}
                  height={50}
                  className="w-[30px] h-auto"
                  src="/images/icons/box.png"
                  alt="png"
                />
                <span>Free Shipping & Returns :</span>
                <span>Within one month of product purchase</span>
              </div>
              <div className="mavo-product-checkout mavo-mb-25">
                <Image
                  width={500}
                  height={500}
                  className="w-[400px] h-auto"
                  src="/images/icons/card-1.png"
                  alt="card"
                />
              </div>

              <div className="mavo-product-categorie">
                <div className="categorie mavo-mb-20">
                  <span>Categories:</span>
                  <Link href="#">Watch,</Link>
                  <Link href="#">Digital Watch</Link>
                </div>
                <div className="categorie-tag mavo-mb-20">
                  <span>Product ID:</span>
                  <Link href="#">{product.id}</Link>
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
