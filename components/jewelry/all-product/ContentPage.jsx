import Image from "next/image";
import React from "react";

const ContentPage = () => {
  return (
    <div className="mavo-jewellery-content-page mavo-pt-175">
      <div className="container page-container2">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mavo-content-box">
              <div className="mavo-jewellery-text">
                <h4 className="jewellery-title text-uppercase mavo-mb-35">
                  Mavoo Shop
                </h4>
                <p className="jewellery-desc">
                  Discover our new arrivals, from our brand new Serpent's
                  collection to our in latest collaboration with Mavoo Reed
                  featuring iconic styles in Diamond. Plus our Jewellery Advent
                  Calendar is here for a limited time only and for the first
                  time ever jewellery in Gold.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-jewellery-image">
              <Image
                width={1000}
                height={1000}
                className="w-[800px] h-auto"
                priority={true}
                src="/images/products/jewellery-img5.jpg"
                alt="Products"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
