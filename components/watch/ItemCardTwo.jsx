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
    image: product.variants[0].materials[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className="mavo-product-info">
      <div className="mavo-product-img">
        <Image
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          src={product.variants[0].materials[0].images[0]}
          alt="product-img"
        />
        {product.tags && (
          <div className="limited-product">
            <p className="">{product.tags}</p>
          </div>
        )}
        <div className="absolute top-4 left-4 group">
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
          <span className="absolute hidden group-hover:block bg-black text-white font-prata capitalize text-xs rounded-[2px] py-1 px-2 -bottom-8 left-5 whitespace-nowrap z-[10000]">
            {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </span>
        </div>
      </div>
      <div className="mavo-heading-area">
        <h6 className="product-title-link">
          <Link href={`/watch/${product.id}`}>{product.name}</Link>
        </h6>
        <span className="product-title">${product.base_price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemCardTwo;
