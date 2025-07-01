import React from "react";
import Link from "next/link";

const BreadCrumbClothDetails = ({ product }) => {
  return (
    <div className="bread-crumb cloth">
      <div className="container">
        <div className="bread-crumb-title">
          <h1 className="!text-white">Shop</h1>
        </div>
        <Link className="breadcrumb-item-1 text-white" href="/">
          Home
        </Link>
        <Link className="breadcrumb-item-1 text-white" href="/cloth/product">
          Shop
        </Link>
        <Link className="breadcrumb-item-2 text-white" href="#">
          {product.name}
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumbClothDetails;
