import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mavo-abou-banner-2">
      <div className="container home-four-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-banner-title">
              <h2>For you ,</h2>
              <h2 className="space-left">From All</h2>
              <h2>Around</h2>
              <h2 className="space-left">the world</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-banner-img flex items-center justify-center">
              <Image
                width={1000}
                height={1000}
                priority
                className="w-[640px] h-auto object-cover"
                src="/images/about/about-2/banner/model.png"
                alt="model"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
