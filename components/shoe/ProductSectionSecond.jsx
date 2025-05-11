import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductSectionSecond = () => {
  return (
    <div className="mavo-product-2 mavo-pb-120 mavo-md-pb-80 mavo-pt-120 mavo-md-pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mavo-pr-15">
            <div className="mavo-product-single mavo-mb-50">
              <div className="mavo-product-info">
                <div className="mavo-product-info-img">
                  <Image
                    width={700}
                    height={700}
                    className="w-[635px] h-auto"
                    src="/images/products/product-2.4.jpg"
                    alt="products"
                  />
                </div>
                <div className="mavo-single-title">
                  <h3>Mavoo Woman Trendy High Heels</h3>
                </div>
                <div className="mavo-product-cart">
                  <Link href="/shoes/product">Select Option Here</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mavo-pl-15">
            <div className="mavo-product-banner">
              <div className="mavo-product-img">
                <Image
                  width={700}
                  height={700}
                  className="w-[635px] h-auto"
                  src="/images/products/product-2.3.jpg"
                  alt="products"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecond;
