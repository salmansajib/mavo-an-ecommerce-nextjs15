"use client";
import React, { useState, useEffect } from "react";
import LoaderSpinner from "../LoaderSpinner";
import { useSelector } from "react-redux";

export default function CheckoutSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    createAccount: false,
    differentAddress: false,
    orderNotes: "",
    couponCode: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  // Set isMounted to true after the component mounts on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    // Optional: Add coupon logic here if needed
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  if (!isMounted)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderSpinner />
      </div>
    ); // Early return

  return (
    <div className="mavo-checkout-section mavo-pt-95 mavo-md-pt-75 mavo-pb-85 !pt-[180px]">
      <div className="container page-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mavo-checkout-form-area mavo-pr-75">
              <div className="mavo-checkout-title mavo-mb-30">
                <h2 className="checkout-title">Billing Details</h2>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="firstName" className="d-block">
                        First name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="lastName" className="d-block">
                        Last name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="companyName" className="d-block">
                        Company name (optional)
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="country" className="d-block mavo-mb-25">
                        Country / Region <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="United Kingdom (UK)"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label
                        htmlFor="streetAddress"
                        className="d-block mavo-mb-25"
                      >
                        Street address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        placeholder="House number and street name"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="apartment" className="d-block">
                        Apartment, suite, unit, etc. (optional)
                      </label>
                      <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="city" className="d-block">
                        Town / City <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="state" className="d-block mavo-mb-25">
                        State <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="London"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="zipCode" className="d-block">
                        Zip Code <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="phone" className="d-block">
                        Phone <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="email" className="d-block">
                        Email address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        aria-required="true"
                      />
                    </div>
                    <fieldset className="checkout-check-box mavo-mb-30">
                      <legend className="sr-only">Additional Options</legend>
                      <div className="subscribe-text mavo-mb-20">
                        <input
                          className="mavo-mr-5"
                          type="checkbox"
                          id="createAccount"
                          name="createAccount"
                          checked={formData.createAccount}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="createAccount" className="check-text">
                          Create an account?
                        </label>
                      </div>
                      <div className="subscribe-text">
                        <input
                          className="mavo-mr-5"
                          type="checkbox"
                          id="differentAddress"
                          name="differentAddress"
                          checked={formData.differentAddress}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor="differentAddress"
                          className="check-text"
                        >
                          Deliver to a different address?
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label
                        htmlFor="orderNotes"
                        className="d-block mavo-mb-25"
                      >
                        Order notes (optional)
                      </label>
                      <textarea
                        id="orderNotes"
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleInputChange}
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mavo-checkout-content">
              <div className="mavo-order-title mavo-pb-15 mavo-mb-25">
                <h2 className="order-title">Your Order</h2>
              </div>
              <div className="mavo-checkout-order-list mavo-mb-25 mavo-pb-15 price-list-one d-flex align-items-center justify-content-between">
                <div className="mavo-order-text">
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="mavo-order-price">
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index}>${item.price.toFixed(2)}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mavo-checkout-order-list mavo-mb-20 d-flex align-items-center justify-content-between">
                <div className="mavo-order-text">
                  <ul>
                    <li>
                      Subtotal<span className="mavo-pl-35">:</span>
                    </li>
                    <li>
                      Total<span className="mavo-pl-60">:</span>
                    </li>
                  </ul>
                </div>
                <div className="mavo-order-price">
                  <ul>
                    <li>${totalPrice.toFixed(2)}</li>
                    <li>${totalPrice.toFixed(2)}</li>
                  </ul>
                </div>
              </div>
              <form
                onSubmit={handleCouponSubmit}
                className="border border-blue-500 font-josefin-sans flex gap-2 items-center justify-between w-full h-15 pl-3 mb-4"
              >
                <label htmlFor="couponCode" className="">
                  <img src="/images/icons/coupon.png" alt="" />
                </label>
                <input
                  className=" placeholder:!text-gray-400 flex-1"
                  type="text"
                  id="couponCode"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  placeholder="Enter coupon code"
                  aria-label="Coupon code"
                />
                <button
                  type="submit"
                  className="bg-[#C9A96B] h-full px-4 text-white"
                >
                  Apply
                </button>
              </form>
              <div className="mavo-card-area mavo-mb-20">
                <h3 className="order-title !mb-5">Payment</h3>
                <fieldset>
                  <legend className="sr-only">Payment Method</legend>
                  <div className="mavo-contact-check d-flex align-items-center justify-content-between">
                    <div className="contact-check-text">
                      <div className="sc-quiz-list">
                        <label className="quiz-check">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="payByCard"
                            value="card"
                            checked={formData.paymentMethod === "card"}
                            onChange={handleInputChange}
                          />
                          <span className="checkmark"></span>
                          Credit/Debit Card
                        </label>
                      </div>
                    </div>
                    <div className="mavo-card-image">
                      <img
                        src="/images/icons/card-img.png"
                        alt="Credit card logos"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <form onSubmit={handlePlaceOrder}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label
                        htmlFor="cardNumber"
                        className="d-block mavo-mb-25"
                      >
                        Card Number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1111 2222 3333 4444"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label
                        htmlFor="expiryDate"
                        className="d-block mavo-mb-25"
                      >
                        Expiry Date <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM / YY"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label htmlFor="cvc" className="d-block mavo-mb-25">
                        Card Code (CVC) <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        placeholder="CVC"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="mavo-contact-check mavo-mb-25 d-flex align-items-center justify-content-between">
                  <div className="contact-check-text">
                    <div className="sc-quiz-list">
                      <label className="quiz-check">
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="payByPayPal"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        PayPal
                      </label>
                    </div>
                  </div>
                  <div className="mavo-card-image">
                    <img src="/images/icons/card-img1.png" alt="PayPal logo" />
                  </div>
                </div>
                <div className="mavo-order-btn">
                  <button type="submit" className="order-btn w-full">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
