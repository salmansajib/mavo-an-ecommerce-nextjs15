import ClothBreadcrumb from "@/components/cloth/ClothBreadcrumb";
import FilterSection from "@/components/cloth/FilterSection";
import ProductSectionProductPage from "@/components/cloth/ProductSectionAllProduct";
import React from "react";

export default function ProductPageCloth() {
  return (
    <>
      <ClothBreadcrumb />

      <div
        id="sc-popular-courses"
        className="mavo-product-1 mavo-cloth-product mavo-pt-115 mavo-md-pt-75 mavo-pb-115 mavo-md-pb-75"
      >
        <div className="container">
          {/* Filtering Section */}
          <FilterSection />

          {/* Product Section */}
          <ProductSectionProductPage />

          {/* Pagination */}
          <div className="mavo-watch-navigation mavo-mt-20 text-center">
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li className="mavo-arrow-navigation">
                <a href="#">
                  Next <i className="flaticon-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
