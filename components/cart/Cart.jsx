"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import LoaderSpinner from "../LoaderSpinner";
import CartItems from "./CartItems";

function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  // Set isMounted to true after the component mounts on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toastConfig = {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#000",
      color: "#fff",
      fontFamily: "var(--font-josefin-sans)",
    },
  };

  const handleQuantityChange = (item, newQuantity) => {
    try {
      if (newQuantity < 1) {
        toast.error(
          "Minimum quantity is 1. Use the delete icon to remove the item.",
          toastConfig,
        );
        return;
      }

      dispatch(
        updateQuantity({
          id: item.id,
          type: item.type,
          attributes: item.attributes,
          newQuantity,
        }),
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity.", toastConfig);
    }
  };

  // Helper function to determine which attribute to display size or materal
  const getItemAttributeDisplaySizeMaterial = (item) => {
    if (item?.attributes?.size)
      return (
        <span>
          <strong>Size:</strong> {item?.attributes?.size}
        </span>
      );
    if (item?.attributes?.material)
      return (
        <span>
          <strong>Material:</strong> {item?.attributes?.material}
        </span>
      );

    return null;
  };

  // Helper function to determine which attribute to display color or length
  const getItemAttributeDisplayColorLength = (item) => {
    if (item?.attributes?.color)
      return (
        <span>
          <strong>Color:</strong> {item?.attributes?.color}
        </span>
      );
    if (item?.attributes?.length)
      return (
        <span>
          <strong>Length:</strong> {item?.attributes?.length}
        </span>
      );

    return null;
  };

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const confirmRemoveItem = () => {
    if (itemToDelete) {
      try {
        dispatch(
          removeFromCart({
            id: itemToDelete.id,
            type: itemToDelete.type,
            attributes: itemToDelete.attributes,
          }),
        );
        toast.success("Item removed from cart!", toastConfig);
      } catch (error) {
        console.error("Error removing item:", error);
        toast.error("Failed to remove item.", toastConfig);
      }
    }
    closeModal();
  };

  if (!isMounted)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderSpinner />
      </div>
    ); // Early return

  return (
    <div className="mavo-cart-page-start mavo-pt-115 mavo-md-pt-75 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mavo-cart-content-area mavo-md-mb-80 mavo-pr-55 !pr-0">
              <div className="mavo-cart-title mavo-mb-45">
                <h5 className="cart-title">
                  {isMounted
                    ? `Your Cart (${cartItems.length})`
                    : "Your Cart (0)"}
                </h5>
              </div>

              {cartItems.length === 0 ? (
                <p className="font-josefin-sans">Your cart is empty</p>
              ) : (
                <>
                  {/* cart items */}
                  <CartItems
                    cartItems={cartItems}
                    getItemAttributeDisplayColorLength={
                      getItemAttributeDisplayColorLength
                    }
                    getItemAttributeDisplaySizeMaterial={
                      getItemAttributeDisplaySizeMaterial
                    }
                    handleQuantityChange={handleQuantityChange}
                    openDeleteModal={openDeleteModal}
                  />

                  <div className="mt-5">
                    <form className="relative border border-[#dddddd] h-[50px] w-full max-w-[500px] flex items-center">
                      <img
                        className=" absolute left-4 top-1/2 -translate-y-1/2"
                        src="/images/icons/coopon.png"
                        alt="Coupon"
                      />
                      <div className="h-full w-full flex items-center">
                        <input
                          className="text-black pl-[50px] pr-2 flex-1"
                          type="text"
                          id="cart"
                          name="name"
                          placeholder="Coupon Code"
                          required=""
                        />
                        <button
                          type="submit"
                          value="apply"
                          className="h-full bg-[#C9A96B] !font-josefin-sans text-white !px-2 sm:!px-5"
                        >
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mavo-car-inner-price mavo-mb-20 d-flex align-items-center justify-content-between">
              <div className="sub-title">Subtotal</div>
              <div className="sub-title">:</div>
              <div className="sub-title">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="mavo-car-inner-price mavo-mb-20 d-flex align-items-center justify-content-between">
              <div className="sub-title">Shipping</div>
              <div className="sub-title mavo-pl-120">:</div>
              <div className="sub-title body-color text-end">
                Flat rate shipping to UK -<br />
                London <br />
                <span className="active-color"> Change address</span>
              </div>
            </div>
            <div className="mavo-car-inner-price mavo-mb-45 d-flex align-items-center justify-content-between">
              <div className="sub-title">Total</div>
              <div className="sub-title mavo-pl-20">:</div>
              <div className="sub-title">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="mavo-checkout-button">
              <Link className="mavo-checkout-btn" href="/checkout">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmRemoveItem}
        title="Confirm Deletion"
        message={
          <>
            Are you sure you want to remove
            <span className="font-bold">{itemToDelete?.name}</span> from your
            cart?
          </>
        }
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </div>
  );
}

export default Cart;
