"use client";
import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/slices/cartSlice";
import toast from "react-hot-toast";
import Icon from "./Icon";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

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

  const handleRemoveItem = (item) => {
    try {
      dispatch(
        removeFromCart({
          id: item.id,
          type: item.type,
          attributes: item.attributes,
        }),
      );
      toast.success("Item removed from cart!", toastConfig);
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Failed to remove item.", toastConfig);
    }
  };

  return (
    <div className="mavo-cart-page-start mavo-pt-115 mavo-md-pt-75 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mavo-cart-content-area mavo-md-mb-80 mavo-pr-55">
              <div className="mavo-cart-title mavo-mb-45">
                <h5 className="cart-title">
                  Your Cart ({cartItems.length} Items)
                </h5>
              </div>

              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {/* Map through cart items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="mavo-cart-item mavo-pb-45 mavo-mb-45 d-flex align-items-center justify-content-between"
                    >
                      <div className="mavo-cart-text-box d-flex align-items-center">
                        <div className="mavo-cart-image mavo-mr-30">
                          <Image
                            src={item.image}
                            alt="Cart"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="mavo-cart-text flex flex-col items-start">
                          <h5 className="mavo-title">{item.name}</h5>
                          <span className="cart-price">
                            ${item.unitPrice.toFixed(2)}
                          </span>
                          <div className="mavo-mt-10 font-josefin-sans">
                            <span>Size:</span> {item.attributes.size}
                          </div>
                          <div className="cart-color mavo-mt-10">
                            <span>Color:</span> {item.attributes.color}
                          </div>
                        </div>
                      </div>
                      <div className="mavo-cown-number-area d-flex align-items-center">
                        <div className="mavo-cown-box mavo-pr-80 d-flex align-items-center">
                          <div className="quantity">
                            <input
                              className="sc_quantity_number"
                              type="text"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              className="minus bg-gray-100 flex items-center justify-center"
                              onClick={() =>
                                handleQuantityChange(item, item.quantity - 1)
                              }
                            >
                              <Icon name="Minus" size={16} />
                            </button>
                            <button
                              className="plus bg-gray-100 flex items-center justify-center"
                              onClick={() =>
                                handleQuantityChange(item, item.quantity + 1)
                              }
                            >
                              <Icon name="Plus" size={16} />
                            </button>
                          </div>
                          <div
                            className="mavo-delete-icon"
                            onClick={() => handleRemoveItem(item)}
                            style={{ cursor: "pointer" }}
                          >
                            <img src="/images/icons/delete.png" alt="Delete" />
                          </div>
                        </div>
                        <div className="mavo-price-list">
                          <div className="price-list">
                            <span className="mavo-price">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="mavo-cart-form d-flex align-items-center justify-content-between">
                    <div className="mavo-cart-button">
                      <img src="/images/icons/coopon.png" alt="Coupon" />
                      <input
                        type="text"
                        id="cart"
                        name="name"
                        placeholder="Coupon Code"
                        required=""
                      />
                      <button type="submit" value="apply">
                        Apply
                      </button>
                    </div>
                    {/* <div className="mavo-update-button">
                      <a className="mavo-update-btn" href="cart-page.html">
                        Update Cart
                      </a>
                    </div> */}
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
              <a className="mavo-checkout-btn" href="#">
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
