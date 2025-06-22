import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCardOne = ({ product }) => {
  // Function to derive rating (4 to 5) based on review count
  const getDerivedRating = (reviewCount) => {
    if (reviewCount > 500) return 5;
    if (reviewCount >= 200) return 4.5;
    return 4;
  };

  return (
    <>
      <div className="mavo-product-img">
        <Image
          width={700}
          height={700}
          quality={100}
          className="w-[500px] h-auto"
          src={product.images[0]}
          alt="product"
        />
        <div className="mavo-product-social">
          <ul>
            <li>
              <Link href={`/beauty/${product.id}`}>
                <i className="flaticon-eye"></i>
              </Link>
              <span> Quick view</span>
            </li>
            <li>
              <Link href={`/beauty/${product.id}`}>
                <i className="flaticon-star"></i>
              </Link>
              <span> Compare</span>
            </li>
            <li>
              <Link href={`/beauty/${product.id}`}>
                <i className="flaticon-sort"></i>
              </Link>
              <span> Wishlist</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mavo-product-info">
        <h6>
          <Link className="mavo-product-link" href={`/beauty/${product.id}`}>
            {product.name}
          </Link>
        </h6>
        <div className="mavo-product-price">
          <p>${product.base_price.toFixed(2)}</p>
          <div className="mavo-product-rating flex items-center gap-2">
            <i className="flaticon-star-1"></i>
            <span>{getDerivedRating(product.reviews).toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="mavo-product-meta">
        <div className="mavo-product-add-cart">
          <Link href={`/beauty/${product.id}`}>Add to Cart</Link>
        </div>
        <div className="mavo-product-quick-view">
          <Link href={`/beauty/${product.id}`}>Quick View</Link>
        </div>
      </div>
    </>
  );
};

export default ItemCardOne;
