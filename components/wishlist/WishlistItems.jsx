import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

const WishlistItems = ({ wishlistItems, handleRemoveFromWishlist }) => {
  return (
    <>
      {wishlistItems.map((item) => (
        <div
          className="w-full max-w-[350px] flex flex-col items-center gap-2"
          key={item.id}
        >
          <div className="w-full h-[270px]">
            <Image
              width={700}
              height={700}
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link
              href={`${item.type}/${item.id}`}
              className="text-lg hover:!text-green-500 truncate"
            >
              {item.name}
            </Link>
          </div>
          <div>
            <p className="mb-0">${item.price.toFixed(2)}</p>
          </div>
          <div className="w-full h-[36px] flex items-center gap-o">
            <Link
              href={`${item.type}/${item.id}`}
              className="flex items-center justify-center border-1 border-black w-full h-full text-black hover:!text-green-500 transition-colors duration-150"
            >
              View
            </Link>
            <button
              onClick={() => handleRemoveFromWishlist(item)}
              className=" border-1 border-black !border-l-0 h-full px-[10px] text-white transition-colors duration-150 ease-in-out group"
            >
              <Icon
                name="Trash"
                className="stroke-black group-hover:stroke-red-500"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishlistItems;
