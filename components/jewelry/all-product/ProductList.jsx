import React from "react";
import Link from "next/link";
import FilterSection from "./FilterSection";
import ItemCard from "../ItemCard";

const ProductList = ({ products }) => {
  return (
    <div className="mavo-collection-style-2 mavo-collection-page mavo-pt-120 mavo-md-pt-80 mavo-pb-80 mavo-md-pb-40">
      <div className="container page-container2">
        <div className="row">
          <FilterSection />

          <div className="col-lg-9">
            <div className="row align-items-center mavo-mb-40">
              <div className="product-show d-flex justify-content-between">
                <div className="mavo-product-text">
                  <p className="des-text">Showing 1-5 of 50 results</p>
                </div>
                <div className="mavo_dropdown text-end">
                  <ul className="dropdown-list">
                    <li>
                      <Link className="drop-btn" href="#">
                        Year <i className="flaticon-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="#"> Watch Size</Link>
                        </li>
                        <li>
                          <Link href="#"> Brands</Link>
                        </li>
                        <li>
                          <Link href="#"> Price</Link>
                        </li>
                        <li>
                          <Link href="#"> Year</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-end">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                  <ItemCard product={product} wrapperClass="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
