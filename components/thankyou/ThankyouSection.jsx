import React from "react";

export default function ThankyouSection() {
  return (
    <div className="mavo-thank-you-page mavo-pt-95 mavo-md-pt-75 mavo-pb-100 mavo-md-pb-80 !pt-[150px]">
      <div className="container">
        <div className="row mavo-mb-25">
          <div className="col-lg-6">
            <div className="mavo-thank-you-left-content">
              <div className="mavo-thank-you-header">
                <h5 className="header-title">A great big thank you!</h5>
                <p className="desc">
                  Awesome! your list of items is on the way. Check your email.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-thank-you-left-content text-end">
              <div className="mavo-thank-you">
                <h2 className="header-title">Thank You!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mavo-thank-you-content mavo-md-mb-45">
              <div className="thant-chat-list">
                <div className="mavo-order-title">
                  <h5 className="mavo-title mavo-mb-25">Order Sumary</h5>
                </div>
                <ul className="active-color">
                  <li>Order number</li>
                  <li>:</li>
                  <li>#85960D</li>
                </ul>
                <ul>
                  <li>No. of Items</li>
                  <li>:</li>
                  <li>2 items</li>
                </ul>
                <ul className="active-color">
                  <li>Discount Coupon</li>
                  <li>:</li>
                  <li>PIZAA203</li>
                </ul>
                <ul>
                  <li>Date</li>
                  <li>:</li>
                  <li>Nov 10, 2022</li>
                </ul>
                <ul className="active-color">
                  <li>Subtotal</li>
                  <li>:</li>
                  <li>$650.00</li>
                </ul>
                <ul>
                  <li>Total</li>
                  <li>:</li>
                  <li>$650.00</li>
                </ul>
                <ul className="active-color">
                  <li>Payment method</li>
                  <li>:</li>
                  <li>Pay by Card</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-thank-you-content">
              <div className="thant-chat-list">
                <div className="mavo-order-title">
                  <h5 className="mavo-title mavo-mb-25">Order Details</h5>
                </div>
                <ul className="active-color">
                  <li>Product Name</li>
                  <li>:</li>
                  <li>Sneakers Shoes</li>
                </ul>
                <ul>
                  <li>No. of Items</li>
                  <li>:</li>
                  <li>2 items</li>
                </ul>
                <ul className="active-color">
                  <li>Subtotal</li>
                  <li>:</li>
                  <li>$650.00</li>
                </ul>
                <ul>
                  <li>Shipping</li>
                  <li>:</li>
                  <li>Flat rate</li>
                </ul>
                <ul className="active-color">
                  <li>Payment method</li>
                  <li>:</li>
                  <li>Pay by Card</li>
                </ul>
                <ul>
                  <li>Total Amount</li>
                  <li>:</li>
                  <li>$650.00</li>
                </ul>
                <ul className="active-color">
                  <li>Note</li>
                  <li>:</li>
                  <li>Check your information & enjoy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
