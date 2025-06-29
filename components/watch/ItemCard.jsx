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
    image: product.variants[0].materials[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className="mavo-product-info text-center">
      <div className="mavo-product-img">
        <Image
          width={800}
          height={800}
          className="w-full h-auto object-cover"
          src={product.variants[0].materials[0].images[0]}
          alt="product"
        />
        {product.tags && (
          <div className="mavo-product-tag">
            <span>{product.tags}</span>
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

      <div className="mavo-product-rating">
        <div className="rating-star">
          <ul>
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i className="flaticon-star-1"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mavo-heading-area">
        <h6>
          <Link className="product-title-link" href={`/watch/${product.id}`}>
            {product.name}
          </Link>
        </h6>
        <span className="mavo-product-price">
          ${product.base_price.toFixed(2)}
        </span>
      </div>

      <div className="mavo-color-variation">
        <ul className="flex items-center justify-center -space-x-[8px]">
          {product.variants.map((variant, index) => (
            <li key={index}>
              <Link
                href={`/watch/${product.id}`}
                style={{
                  display: "block",
                  width: "25px",
                  height: "25px",
                  backgroundColor: variant.color_code,
                  borderRadius: "50%",
                }}
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
