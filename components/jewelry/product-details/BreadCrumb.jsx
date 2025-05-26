import React from "react";
import Link from "next/link";

const BreadCrumb = ({ product }) => {
  return;
  <div className="bread-crumb jewellery-bread-crumb mavo-pt-135 mavo-pb-20">
    <div className="container page-container2">
      <Link className="breadcrumb-item-1" href="/jewelry">
        Home
      </Link>
      <Link className="breadcrumb-item-1" href="/jewelry/product">
        Shop
      </Link>
      <Link className="breadcrumb-item-2" href={`/jewelry/${product.id}`}>
        {product.name}
      </Link>
    </div>
  </div>;
};

export default BreadCrumb;
