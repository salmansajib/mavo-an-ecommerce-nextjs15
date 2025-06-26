import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mavo-banner-5 mavo-beauty-page">
      <div className="container home-four-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mavo-page-title">
              <div className="mavo-content-left">
                {/* <ul>
                  <li>
                    <Link href="/beauty-product">Home</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="#">Shop</Link>
                  </li>
                </ul> */}
              </div>
              <h1 className="mavo-beauty-shop-title text-uppercase">
                Beauty Shop
              </h1>
              <p className="mavo-banner-desc">
                Curabitur irure aspernatur ut dignissimos excepteur aliquip
                iusto, explicabo delectus incidunt aut consectetuer erat quo
                laboriosam cras lorem tortor necessitatibus, ullam maxime proin
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-banner-right flex items-center justify-center">
              <p>
                Take Care <br />
                of your Skin
              </p>
              <Image
                width={1000}
                height={1000}
                quality={100}
                priority
                className="first-slider-img w-[600px] h-auto"
                src="/images/products/beaty-page-image.png"
                alt="slider-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
