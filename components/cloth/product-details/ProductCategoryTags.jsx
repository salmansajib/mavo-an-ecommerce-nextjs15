import React from "react";

const ProductCategoryTags = ({ productId }) => {
  return (
    <div className="mavo-product-categorie mavo-mb-20 d-flex align-items-center justify-content-between">
      <div className="categorie">
        <span>Categories:</span>
        <a href="/cloth/product">Jacket,</a>
        <a href="/cloth/product"> Colagen</a>
      </div>
      <div className="categorie-tag">
        <span>Tags:</span>
        <a href="/cloth/product">Cloth,</a>
        <a href="/cloth/product">Simple</a>
      </div>
      {/* <div className="categorie-id">
        <span>Product Id:</span>
        <a href="#">{productId}</a>
      </div> */}
    </div>
  );
};

export default ProductCategoryTags;
