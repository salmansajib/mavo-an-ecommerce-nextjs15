import React from "react";
import Link from "next/link";
import ItemCardOne from "../ItemCardOne";

const ProductList = ({ products }) => {
  return (
    <div className="col-lg-9">
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
