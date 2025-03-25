import React from "react";

const ProductCategoryTags = ({ productId }) => {
  return (
    <div className="mavo-product-categorie mavo-mb-20 d-flex align-items-center justify-content-between">
      <div className="categorie">
        <span>Categories:</span>
        <a href="#">Jacket,</a>
        <a href="#"> Colagen</a>
      </div>
      <div className="categorie-tag">
        <span>Tags:</span>
        <a href="#">Cloth,</a>
        <a href="#">Simple</a>
      </div>
      <div className="categorie-id">
        <span>Product Id:</span>
        <a href="#">{productId}</a>
      </div>
    </div>
  );
};

export default ProductCategoryTags;
