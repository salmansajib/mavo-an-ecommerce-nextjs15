import React from "react";
import Image from "next/image";
import Link from "next/link";
import ItemCard from "../ItemCard";

const ProductList = ({ products }) => {
  return (
    <div className="col-lg-8">
      <div className="row align-items-center justify-content-end">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
            <div className="swiper-slide">
              <ItemCard product={product} wrapperClass="mavo-mb-35" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
