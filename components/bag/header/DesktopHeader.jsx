"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavMenu from "./NavMenu";
import LangCurrencyMenu from "./LangCurrencyMenu";
import Icon from "@/components/Icon";
import { navItems, langAndCurrencyItems } from "@/data/navigationData";
import { useSelector } from "react-redux";

const DesktopHeader = ({ setIsSearchFormActive }) => {
  const [hoveredMenuId, setHoveredMenuId] = useState(null);
  const [hoverLangAndCurrencyId, setHoverLangAndCurrencyId] = useState(null);
  const [visibleSvgId, setVisibleSvgId] = useState(null);
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
    <div className="hidden w-full lg:flex items-center justify-between">
      <div className="flex items-center justify-center gap-[30px] xl:gap-[130px]">
        <NavMenu
          navItems={navItems}
          hoveredMenuId={hoveredMenuId}
          setHoveredMenuId={setHoveredMenuId}
          visibleSvgId={visibleSvgId}
          setVisibleSvgId={setVisibleSvgId}
        />
      </div>

      <Logo color="light" />

      <div className="flex items-center gap-[25px] xl:gap-[40px]">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchFormActive(true)}>
            <Icon
              name="Search"
              size={18}
              className="text-[#fff] hover:text-[#f7c490]"
            />
          </button>
          <Link href="/wishlist" className="relative">
            <span className="absolute font-prata -top-6 text-black left-1/2 -translate-x-1/2 text-[10px] bg-[#fff] size-5 rounded-full flex items-center justify-center">
              {isMounted
                ? totalItemsInWishlist > 10
                  ? "10+"
                  : totalItemsInWishlist
                : 0}
            </span>
            <Icon
              name="Star"
              size={18}
              className="text-[#fff] hover:text-[#f7c490]"
            />
          </Link>
          <Link href="/cart" className="relative">
            <span className="absolute font-prata -top-6 text-black left-1/2 -translate-x-1/2 text-[10px] bg-[#fff] size-5 rounded-full flex items-center justify-center">
              {isMounted ? (totalQuantity > 10 ? "10+" : totalQuantity) : 0}
            </span>
            <Icon
              name="ShoppingBag"
              size={18}
              className="text-[#fff] hover:text-[#f7c490]"
            />
          </Link>
          <Link href="/signup">
            <Icon
              name="UserRound"
              size={18}
              className="text-[#fff] hover:text-[#f7c490]"
            />
          </Link>
        </div>
        <div className="w-[1px] h-[25px] bg-gray-50/20" />
        <LangCurrencyMenu
          langAndCurrencyItems={langAndCurrencyItems}
          hoverLangAndCurrencyId={hoverLangAndCurrencyId}
          setHoverLangAndCurrencyId={setHoverLangAndCurrencyId}
        />
      </div>
    </div>
  );
};

export default DesktopHeader;
