import React from "react";
import Link from "next/link";

const CollectionSection = () => {
  return (
    <div className="mavo-about-collection-1 mavo-pt-90 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mavo-collection-info">
              <div className="mavo-collection-title">
                <h3>Mavoo - Clothing Manufacturer for Fashion & Art Brands</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-collection-single">
              <p>
                Mavoo is the publisher of the website, and the organizer of
                events related to fashion, design, and cloth are very high
                leavel company.
              </p>
              <p>
                Commodo recusandae erat reprehenderit porro a rerum ligula
                lobortis integer integer natoque. Facilis eros, illum, dignissim
                massa reiciendis fuga doloremque, nesciunt incidunt magna
                possimus amet maecenas molestie hymenaeos.
              </p>
            </div>
            {/* <div className="mavo-colltoaction-btn">
              <a href="cloth-product-single.html">Read More Story</a>
            </div> */}
          </div>
        </div>
        <div className="collection-img mt-[100px]">
          <img
            src="/images/about/about-1/collection/collection-1.jpg"
            alt="collection"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
