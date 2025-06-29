import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWishlist from "@/hooks/useWishlist";
import Icon from "../Icon";

const ItemCard = ({ product, wrapperClass = "mavo-mb-0" }) => {
  const itemData = {
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.base_price,
    image: product.variants[0].images[0],
  };

  const { isInWishlist, handleWishlistToggle } = useWishlist(itemData);

  return (
    <div className={`mavo-post-slider-info ${wrapperClass}`}>
      <div className="mavo-post-slider-img">
        <Image
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          src={product.variants[0].images[0]}
          alt={product.name}
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
          <span className="mavo-post-price">
            ${product.base_price.toFixed(2)}
          </span>
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
