import React from "react";
import Link from "next/link";
import Image from "next/image";

const ItemCard = ({ product }) => {
  return (
    <div className="mavo-prodduct-slider-item text-center mavo-mt-35 mavo-mb-50 group">
      <div className="mavo-product-img">
        <Image
          width={700}
          height={700}
          className="w-full h-auto object-cover mx-auto"
          src={product.variants?.[0].images?.[0]}
          alt="product image"
        />
        <div className="mavo-product-social">
          <ul>
            <li>
              <Link href={`/bag/${product.id}`}>
                <i className="flaticon-eye"></i>
              </Link>
              <span>Quick view</span>
            </li>
            <li>
              <Link href={`/bag/${product.id}`}>
                <i className="flaticon-sort"></i>
              </Link>
              <span>Compare</span>
            </li>
            <li>
              <Link href={`/bag/${product.id}`}>
                <i className="flaticon-star"></i>
              </Link>
              <span>Wishlist</span>
            </li>
          </ul>
        </div>
        {product.tags && (
          <div className="product-tag">
            <span className="text-white group-hover:!text-black">
              {product.tags}
            </span>
          </div>
        )}
      </div>
      <div className="mavo-product-content">
        <h4>
          <Link className="product-title-link" href={`/bag/${product.id}`}>
            {product.name}
          </Link>
        </h4>
        <span className="product-price">${product.base_price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemCard;
