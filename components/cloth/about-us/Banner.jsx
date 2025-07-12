import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mavo-about-1">
      <div className="container mavo-about-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="about-banner-title mavo-mb-45">
              <h2>Our Products are All About Fabrics & The Fashion</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-banner-title">
              <p className="mavo-mb-35">
                Condimentum consequat id dolores dolorum labori osam convallis
                taciti ullamco excepturi at condimentum illum, at quisque alias
                condimentum maecenas aspernatur condimentum.
              </p>
              <p>
                Ratione hic commodi nihil augue ipsa odio eos debitis quia
                pariatur excepturi explicabo felis per assumenda primis nostra
                consectetuer tempus, netus eu ea.
              </p>
            </div>
          </div>
        </div>
        <div className="about-banner-img">
          <Image
            width={1000}
            height={1000}
            quality={100}
            priority
            className="w-full h-auto"
            src="/images/about/about-1/banner/banner-1.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
