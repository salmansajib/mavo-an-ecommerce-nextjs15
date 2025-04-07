import React from "react";
import Image from "next/image";

const ProductCheckoutInfo = () => {
  return (
    <div className="">
      <div className="mavo-product-checkout mb-[20px]">
        <Image
          src="/images/icons/card.png"
          alt="card"
          width={800}
          height={200}
          quality={100}
          className="w-[500px] h-auto mx-auto"
        />
        <p className="mavo-mt-10">Guaranteed safe & secure checkout</p>
      </div>
      <div className="mavo-product-delivery mavo-mb-20 flex items-center gap-2">
        <img src="/images/icons/delivery-van-1.png" alt="png" />
        <div>
          <span className="!capitalize">Estimated Delivery :</span>
          <span>3 - 5 Working Days</span>
        </div>
      </div>
      <div className="mavo-product-delivery mavo-mb-25 flex items-center gap-2">
        <img src="/images/icons/box.png" alt="png" />
        <div>
          <span className="!capitalize">Free Shipping & Returns :</span>
          <span>On all orders over $199.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckoutInfo;
