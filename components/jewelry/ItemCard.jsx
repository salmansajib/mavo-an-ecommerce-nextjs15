import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ product }) => {
  return (
    <div className="mavo-collection-info mavo-pl-75 mavo-mb-30">
      <div
        className={`mavo-collection-info-img ${
          product.tags ? "mavo-top-text" : ""
        }`}
      >
        <Image
          width={700}
          height={700}
          className="collection-img w-[500px] h-auto"
          src={product.variants[0].images[0]}
          alt="product"
        />
        <div className="collection-quick-view">
          <Link href={`/jewelry/${product.id}`}>+ Quick View</Link>
        </div>
        <div className="collection-add-cart">
          <Link href={`/jewelry/${product.id}`}>
            <img src="/images/icons/add-cart.svg" alt="add-cart" />
          </Link>
        </div>
        {product.tags && (
          <div className="mavo-active-color">
            <span>{product.tags}</span>
          </div>
        )}
      </div>
      <div className="product-price mavo-mt-20 mavo-mb-10">
        <span>${product.base_price}</span>
        <div className="rating-star">
          <ul className="space-x-1">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i className="flaticon-star-1"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collection-info-title">
        <h6>
          <Link
            className="mavo-info-title title-white-color"
            href={`/jewelry/${product.id}`}
          >
            {product.name}
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default ItemCard;
