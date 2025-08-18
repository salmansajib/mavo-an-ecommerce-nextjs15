"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { removeFromWishlist } from "@/features/wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpinner from "../LoaderSpinner";
import WishlistItems from "./WishlistItems";

const Wishlist = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // Set isMounted to true after the component mounts on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderSpinner />
      </div>
    ); // Early return

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
          <WishlistItems
            wishlistItems={wishlistItems}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
          />
        )}
      </div>
    </div>
  );
};

export default Wishlist;
