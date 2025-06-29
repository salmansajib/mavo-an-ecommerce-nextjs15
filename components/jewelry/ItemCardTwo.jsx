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
    image: product.variants[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className="mavo-product-info">
      <div className="mavo-product-img">
        <Image
          width={700}
          height={700}
          quality={100}
          className="w-full h-[430px] object-cover"
          src={product.variants[0].images[0]}
          alt="product"
        />
        <div className="mavo-product-social">
          <ul>
            <li>
              <div className="absolute group">
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
