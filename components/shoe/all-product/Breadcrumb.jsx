import React from "react";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="mavo-breadcrumb-product-page mavo-shoes-product-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-breadcrumb-content-area text-center">
              <div className="mavo-creadcrumb-title mavo-mb-20">
                <h1 className="title-white-color text-uppercase">Shop</h1>
              </div>
              <div className="mavo-breadcrumb-list">
                <ul>
                  <li>
                    <Link className="text-uppercase" href="/shoes">
                      Home
                    </Link>
                    <a className="text-uppercase">/</a>
                    <Link className="text-uppercase" href="/shoes/product">
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

export default Breadcrumb;
