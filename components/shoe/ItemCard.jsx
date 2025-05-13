import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ product, wrapperClass = "mavo-mb-0" }) => {
  return (
    <div className={`mavo-post-slider-info ${wrapperClass}`}>
      <div className="mavo-post-slider-img">
        <Image
          width={500}
          height={500}
          className="w-[271px] h-auto"
          src={product.variants[0].images[0]}
          alt={product.name}
        />
        <div className="mavo-product-social">
          <ul>
            <li>
              <Link href={`/shoes/${product.id}`}>
                <i className="flaticon-eye"></i>
              </Link>
              <span> Quick view</span>
            </li>
            <li>
              <Link href={`/shoes/${product.id}`}>
                <i className="flaticon-star"></i>
              </Link>
              <span> Compare</span>
            </li>
            <li>
              <Link href={`/shoes/${product.id}`}>
                <i className="flaticon-sort"></i>
              </Link>
              <span> Wishlist</span>
            </li>
          </ul>
        </div>
        <div className="mavo-post-slider-add-cart">
          <Link href={`/shoes/${product.id}`}>Buy Now</Link>
        </div>
      </div>

      <div className="mavo-post-slider-meta">
        <div className="mavo-post-slider-meta-title mavo-mt-25 mavo-mb-15">
          <h5>
            <Link className="post-title-link" href={`/shoes/${product.id}`}>
              {product.name}
            </Link>
          </h5>
        </div>
        <div className="mavo-post-slider-peoduct-price">
          <span className="mavo-post-price">${product.base_price}</span>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
        </div>
      </div>

      {product.tags && (
        <div className="price-active">
          <span className="post-price"> {product.tags}</span>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
