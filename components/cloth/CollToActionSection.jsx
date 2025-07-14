import React from "react";
import Link from "next/link";

const CollToActionSection = () => {
  return (
    <div className="mavo-colltoaction-1 mavo-pt-210 mavo-md-pt-75 mavo-pb-160 mavo-md-pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="mavo-colltoaction-single">
              <div className="mavo-heading-area mavo-mb-70">
                <h2 className="mavo-title">
                  10% - 15%
                  <br />
                  Off On All Our Cloth
                  <br />& Products
                </h2>
              </div>
              <div className="mavo-colltoaction-btn">
                <Link href="/cloth/product">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </div>
  );
};

export default CollToActionSection;
