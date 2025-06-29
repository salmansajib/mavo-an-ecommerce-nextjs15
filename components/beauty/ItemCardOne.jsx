import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWishlist from "@/hooks/useWishlist";
import Icon from "../Icon";

const ItemCardOne = ({ product }) => {
  const itemData = {
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.base_price,
    image: product.images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

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
