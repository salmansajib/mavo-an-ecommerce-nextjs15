import React from "react";

const Banner = () => {
  return (
    <div className="mavo-banner-5 mavo-beauty-page">
      <div className="container home-four-container">
        {/* Swiper */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mavo-beauty-breadcrum text-center">
              {/* <div className="mavo-content-left">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>/</li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div> */}
              <div className="mavo-banner-title">
                <h1 className="text-uppercase">Our Blog</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 flex items-center justify-center">
            <div className="mavo-banner-right">
              {/* <p className="">
                Take Care <br />
                of your Skin
              </p> */}
              <img
                className="first-slider-img"
                src="/images/posts/beauty-product-1.png"
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
