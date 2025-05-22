import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mavo-banner-4">
      <div className="container home-four-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-left">
              <div className="mavo-banner-title">
                <h2>
                  Choose Your
                  <div className="flex items-center gap-2">
                    <Image
                      width={300}
                      height={300}
                      className="w-[100px] h-auto"
                      src="/images/sliders/slider-4/product-4.1.png"
                      alt="product"
                    />
                    <span>Authentic </span>
                  </div>
                  <div className="flex items-center gap-2">
                    Jewelry
                    <Image
                      width={300}
                      height={300}
                      className="banner-model-img w-[100px] h-auto"
                      src="/images/sliders/slider-4/model-2.jpg"
                      alt="model"
                    />
                  </div>
                </h2>
              </div>
              <div className="mavo-shop-now-btn">
                <Link href="/jewelry/product">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-right text-center">
              <Image
                width={1000}
                height={1000}
                className="w-[600px] h-auto"
                quality={100}
                priority={true}
                src="/images/sliders/slider-4/model-1.png"
                alt="model"
              />
              <div className="banner-tooltip-4">
                <div className="mavo-product-social">
                  <ul>
                    <li className="tooltip-1">
                      <Link href="/jewelry/product">
                        <Image
                          width={50}
                          height={50}
                          className="w-[50px] h-auto"
                          src="/images/icons/home1.png"
                          alt="Icon"
                        />
                      </Link>
                      <span> Quick view</span>
                    </li>
                    <li className="tooltip-2">
                      <Link href="/jewelry/product">
                        <Image
                          width={50}
                          height={50}
                          className="w-[50px] h-auto"
                          src="/images/icons/home1.png"
                          alt="Icon"
                        />
                      </Link>
                      <span> Compare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
