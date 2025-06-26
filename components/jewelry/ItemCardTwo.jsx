import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCardTwo = ({ product }) => {
  return (
    <div className="mavo-product-info">
      <div className="mavo-product-img">
        <Image
          width={700}
          height={700}
          quality={100}
          className="w-[500px] h-[430px] object-cover"
          src={product.variants[0].images[0]}
          alt="product"
        />
        <div className="mavo-product-social">
          <ul>
            <li>
              <Link href={`/jewelry/${product.id}`}>
                <i className="flaticon-eye"></i>
              </Link>
              <span> Quick view</span>
            </li>
            <li>
              <Link href={`/jewelry/${product.id}`}>
                <i className="flaticon-sort"></i>
              </Link>
              <span> Compare</span>
            </li>
            <li>
              <Link href={`/jewelry/${product.id}`}>
                <i className="flaticon-star"></i>
              </Link>
              <span> Wishlist</span>
            </li>
          </ul>
        </div>
        <div className="product-meta">
          <h5>
            <Link className="mavo-product-link" href={`/jewelry/${product.id}`}>
              {product.name}
            </Link>
          </h5>
          <span className="meta-sub-title">
            ${product.base_price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCardTwo;
