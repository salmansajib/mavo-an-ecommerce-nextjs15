"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import Icon from "./Icon";
import { removeFromWishlist } from "@/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const toastConfig = {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#000",
      color: "#fff",
      fontFamily: "var(--font-josefin-sans)",
    },
  };

  const handleRemoveFromWishlist = (item) => {
    try {
      dispatch(
        removeFromWishlist({
          id: item.id,
          type: item.type,
        }),
      );
      toast.success(`${item.name} removed from wishlist!`, toastConfig);
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      toast.error("Failed to remove item!", toastConfig);
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 pt-[200px]">
      <div className="mavo-title-style-6">
        <h2 className="hiddenn">Wishlist</h2>
        <h2 className="visible">Wishlist</h2>
      </div>

      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-[100px]">
        {wishlistItems.length === 0 ? (
          <p className="!text-xl !text-zinc-950 min-h-[50vh]">
            Your wishlist is empty!
          </p>
        ) : (
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
                    className="text-lg hover:!text-green-500"
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
        )}
      </div>
    </div>
  );
};

export default Wishlist;
