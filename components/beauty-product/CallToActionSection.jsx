import React from "react";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div className="mavo-colltoaction-5 mavo-pt-135 mavo-md-pt-75 mavo-pb-145 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="mavo-colltoaction-single">
              <div className="mavo-colltoaction-offer">
                <h1 className="colltoaction-number">20</h1>
                <span className="colltoaction-percent">
                  %<br />
                  off
                </span>
              </div>
              <span className="mavo-colltoaction-text"> Worldwide</span>
              <div className="mavo-banner-video mavo-mt-35 relative">
                <img
                  className="rotated-style"
                  src="/images/icons/circle_2.png"
                  alt="video-icon"
                />
                <Link href="/beauty-product/product">
                  <span className="bg-color">
                    <img
                      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/images/icons/bag-1.png"
                      alt="Play"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
