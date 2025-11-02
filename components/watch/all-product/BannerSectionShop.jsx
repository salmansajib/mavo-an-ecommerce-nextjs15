import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

const BannerSectionShop = () => {
  return (
    <div className="mavo-banner-3 mavo-page-banner">
      <div className="container home-three-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="mavo-banner-single-left">
              <div className="mavo-banner-title-left">
                <h2>20th Century Watches</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="banner-wrapper">
              <div className="align-items-center">
                <div className="mavo-banner-img">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-[950px] h-auto"
                    priority={true}
                    quality={100}
                    src="/images/products/watch-bg.png"
                    alt="Model"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-desing-text">
        <Image
          width={500}
          height={500}
          className="w-[430px] h-auto"
          src="/images/icons/design-text.png"
          alt="design-png"
        />
      </div>
      <h2 className="banner-text">WATCH</h2>
    </div>
  );
};

export default BannerSectionShop;
