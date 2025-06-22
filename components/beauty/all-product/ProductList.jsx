import React from "react";
import Link from "next/link";
import ItemCardOne from "../ItemCardOne";

const ProductList = ({ products }) => {
  return (
    <div className="col-lg-9">
      <div className="row align-items-center mavo-mb-40 !mt-10">
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
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
            <div className="swiper-slide mavo-mb-40">
              <ItemCardOne product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
