import React from "react";

const ProductPriceSection = ({ price }) => {
  return (
    <div className="mavo-product-price mavo-mb-25">
      <span>${price.toFixed(2)}</span>
      <span className="mavo-tag uppercase">in stock</span>
    </div>
  );
};

export default ProductPriceSection;
