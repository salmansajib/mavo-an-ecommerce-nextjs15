"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { useSelector } from "react-redux";

const MobileHeader = ({ setShowMobileMenu, setIsSearchFormActive }) => {
  const [isMounted, setIsMounted] = useState(false);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);
  const totalItemsInWishlist = useSelector(
    (state) => state.wishlist.totalItems || 0,
  );

  // Set isMounted to true after the component mounts on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between">
        <Logo color="dark" />
        <div className="flex items-center gap-[15px]">
          <button onClick={() => setIsSearchFormActive(true)}>
            <Icon
              name="Search"
              size={18}
              className="text-[#000] hover:text-[#ce2d37]"
            />
          </button>
          <Link href="/wishlist" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#c9a96b] size-5 rounded-full flex items-center justify-center">
              {isMounted
                ? totalItemsInWishlist > 10
                  ? "10+"
                  : totalItemsInWishlist
                : 0}
            </span>
            <Icon
              name="Star"
              size={18}
              className="text-[#000] hover:text-[#ce2d37]"
            />
          </Link>
          <Link href="/cart" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#c9a96b] size-5 rounded-full flex items-center justify-center">
              {isMounted ? (totalQuantity > 10 ? "10+" : totalQuantity) : 0}
            </span>
            <Icon
              name="ShoppingBag"
              size={18}
              className="text-[#000] hover:text-[#ce2d37]"
            />
          </Link>
          {/* <div className="w-[1px] h-[25px] bg-gray-900/80" /> */}
          <button onClick={() => setShowMobileMenu((prev) => !prev)}>
            <Icon name="Menu" size={28} color="#000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
