import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWishlist from "@/hooks/useWishlist";
import Icon from "../Icon";

const ItemCard = ({ product }) => {
  const itemData = {
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.base_price,
    image: product.variants[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className="mavo-collection-info mavo-mb-30">
      <div
        className={`mavo-collection-info-img ${
          product.tags ? "mavo-top-text" : ""
        }`}
      >
        <Image
          width={700}
          height={700}
          className="collection-img w-full h-auto aspect-square object-cover"
          src={product.variants[0].images[0]}
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
        {product.tags && (
          <div className="mavo-active-color">
            <span>{product.tags}</span>
          </div>
        )}
      </div>
      <div className="product-price mavo-mt-20 mavo-mb-10">
        <span>${product.base_price.toFixed(2)}</span>
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
            className="mavo-info-title text-black truncate overflow-hidden hover:!text-[#e9c96b]"
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
