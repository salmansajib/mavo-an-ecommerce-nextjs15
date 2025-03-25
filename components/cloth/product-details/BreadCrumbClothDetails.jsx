import React from "react";
import Link from "next/link";

const BreadCrumbClothDetails = () => {
  return (
    <div className="bread-crumb cloth">
      <div className="container">
        <div className="bread-crumb-title">
          <h1>Shop</h1>
        </div>
        <Link className="breadcrumb-item-1" href="/">
          Home
        </Link>
        <Link className="breadcrumb-item-1" href="/cloth/product">
          Shop
        </Link>
        <Link className="breadcrumb-item-1" href="/cloth/product">
          Jacket
        </Link>
        <Link className="breadcrumb-item-2" href="/cloth/product">
          Bomber Jacket
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumbClothDetails;
