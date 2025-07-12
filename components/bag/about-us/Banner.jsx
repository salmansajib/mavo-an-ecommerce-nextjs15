import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mavo-about-us-bag-banner">
      <div className="banner-img">
        <img
          className="banner-1"
          src="/images/about/about-3/banner/banner.png"
          alt="banner"
        />
        <img
          className="banner-2"
          src="/images/about/about-3/banner/banner-2.png"
          alt="banner"
        />
      </div>
      <div className="container">
        <div className="banner-info">
          <h2 className="banner-title">About us</h2>
          <h2 className="banner-sub-title">We are a digital Bags house</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
