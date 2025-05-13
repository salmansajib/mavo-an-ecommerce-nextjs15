import React from "react";
import Link from "next/link";

const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumds-contact-page">
      <div className="container mavo-page-container">
        <div className="mavo-contact-content">
          <ul>
            <li>
              <Link className="active-dot" href="/shoes">
                Home
              </Link>
            </li>
            <li>
              <Link className="active-dot" href="/shoes/product">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#">{product.name}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
