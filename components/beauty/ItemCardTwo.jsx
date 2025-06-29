import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWishlist from "@/hooks/useWishlist";
import Icon from "../Icon";

const ItemCardTwo = ({ product }) => {
  const itemData = {
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.base_price,
    image: product.images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className="mavo-product-style-4 mavo-md-mb-45">
      <div className="product-img">
        <Image
          width={900}
          height={900}
          quality={100}
          className="w-full h-auto object-cover"
          src={product.images[0]}
          alt="product"
        />
        <div className="absolute top-4 right-4 group">
          <button onClick={() => handleWishlistToggle()}>
            <Icon
              name="Star"
              size={32}
              className={`${
                isInWishlist
                  ? "fill-red-500 stroke-red-500"
                  : "stroke-green-300"
              } transition-all duration-150`}
            />
          </button>
          <span className="absolute hidden group-hover:block bg-black text-white font-prata capitalize text-xs rounded-[2px] py-1 px-2 -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-[1000]">
            {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </span>
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
