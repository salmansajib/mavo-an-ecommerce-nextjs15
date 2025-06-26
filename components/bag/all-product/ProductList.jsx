import React from "react";
import ItemCard from "../ItemCard";

const ProductList = ({ products }) => {
  return (
    <div className="col-lg-8">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-6 col-md-6 col-sm-6" key={product.id}>
            <div className="swiper-slide">
              <ItemCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
