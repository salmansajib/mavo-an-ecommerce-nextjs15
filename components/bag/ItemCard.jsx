import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="mavo-prodduct-slider-item text-center mavo-mt-35 mavo-mb-50 group">
      <div className="mavo-product-img">
        <Image
          width={700}
          height={700}
          className="w-full h-auto object-cover mx-auto"
          src={product.variants?.[0].images?.[0]}
          alt="product image"
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
