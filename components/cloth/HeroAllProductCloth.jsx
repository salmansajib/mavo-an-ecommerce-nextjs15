import React from "react";
import Breadcrumbs from "../Breadcrumbs";

const HeroAllProductCloth = () => {
  return (
    <div className="mavo-breadcrumb-page mavo-breadcrumb-product-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-breadcrumb-content-area text-center">
              <div className="mavo-creadcrumb-title mavo-mb-20">
                <h1 className="title-white-color">Mavoo Shopping</h1>
              </div>
              <div className="">
                <Breadcrumbs
                  linkVariant="light"
                  homeVariant="light"
                  currentVariant="light"
                  separatorVariant="light"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAllProductCloth;
