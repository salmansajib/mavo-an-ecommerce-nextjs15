import React from "react";
import Image from "next/image";
import Link from "next/link";
import ItemCard from "../ItemCard";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mavo-mb-45">
          <ItemCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
