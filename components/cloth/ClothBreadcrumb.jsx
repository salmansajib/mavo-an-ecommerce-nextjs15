import React from "react";
import Link from "next/link";

const ClothBreadcrumb = () => {
  return (
    <div className="mavo-breadcrumb-page mavo-breadcrumb-product-page mavo-pt-155 mavo-pb-135">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-breadcrumb-content-area text-center">
              <div className="mavo-creadcrumb-title mavo-mb-20">
                <h1 className="title-white-color">Mavoo Shopping</h1>
              </div>
              <div className="mavo-breadcrumb-list">
                <ul>
                  <li>
                    <Link className="text-uppercase" href="/#">
                      Home
                    </Link>
                    <Link className="text-uppercase" href="/#">
                      {" "}
                      /{" "}
                    </Link>
                    <Link className="text-uppercase" href="/#">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothBreadcrumb;
