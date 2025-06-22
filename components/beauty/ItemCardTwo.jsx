import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCardTwo = ({ product }) => {
  return (
    <div className="mavo-product-style-4 mavo-md-mb-45">
      <div className="product-img">
        <Image
          width={900}
          height={900}
          quality={100}
          className="w-[700px] h-auto"
          src={product.images[0]}
          alt="product"
        />
        <div className="product-add-cart">
          <div className="mavo-product-social">
            <ul>
              <li className="tooltip-1">
                <Link href={`/beauty/${product.id}`}>
                  <img src="/images/icons/tool-1.png" alt="Icon" />
                </Link>
                <span>Quick view</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-info mavo-mb-10">
        <div className="mavo-product-rating">
          <ul>
            {Array(5)
              .fill()
              .map((_, index) => (
                <li key={index}>
                  <i className="flaticon-star-1"></i>
                </li>
              ))}
          </ul>
        </div>
        <div className="product-review">
          <span>{product.reviews}</span>
        </div>
      </div>
      <div className="product-meta">
        <div className="product-title mavo-mb-20">
          <h6>
            <Link
              className="specific-title-link"
              href={`/beauty/${product.id}`}
            >
              {product.name}
            </Link>
          </h6>
        </div>
        <div className="product-price">
          <span className="mavo-price">${product.base_price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCardTwo;
