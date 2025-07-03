import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductSectionFirst = () => {
  return (
    <div className="mavo-product-2 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-35">
          <h3 className="mavo-title">Trendy Styles</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mavo-pr-15">
            <div className="mavo-product-banner mavo-md-mb-50">
              <div className="mavo-product-img">
                <Image
                  width={700}
                  height={700}
                  className="w-[635px] h-auto"
                  src="/images/products/product-2.1.jpg"
                  alt="products"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mavo-pr-15">
            <div className="mavo-product-single">
              <div className="mavo-product-info">
                <div className="mavo-product-info-img">
                  <Image
                    width={700}
                    height={700}
                    className="w-[635px] h-auto"
                    src="/images/products/product-2.2.jpg"
                    alt="products"
                  />
                </div>
                <div className="mavo-single-title">
                  <h3>Mavoo Woman Trendy Lora Boots</h3>
                </div>
                <div className="mavo-product-cart">
                  <Link href="/shoes/product">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionFirst;
