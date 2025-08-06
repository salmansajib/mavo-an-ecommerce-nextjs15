"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavMenu from "./NavMenu";
import Icon from "@/components/Icon";
import { navItems } from "@/data/navigationData";
import { useSelector } from "react-redux";

const DesktopHeader = ({ setIsSearchFormActive }) => {
  const [hoveredMenuId, setHoveredMenuId] = useState(null);
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
        <Logo color="dark" />
      </div>

      <div className="flex items-center gap-[25px] xl:gap-[120px]">
        <NavMenu
          navItems={navItems}
          hoveredMenuId={hoveredMenuId}
          setHoveredMenuId={setHoveredMenuId}
          visibleSvgId={visibleSvgId}
          setVisibleSvgId={setVisibleSvgId}
        />
        <div className="flex items-center gap-4">
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
          <Link href="/signup">
            <Icon
              name="UserRound"
              size={18}
              className="text-[#000] hover:text-[#ce2d37]"
            />
          </Link>
        </div>
        {/* <div className="w-[1px] h-[25px] bg-gray-50/20" /> */}
        {/* <LangCurrencyMenu
          langAndCurrencyItems={langAndCurrencyItems}
          hoverLangAndCurrencyId={hoverLangAndCurrencyId}
          setHoverLangAndCurrencyId={setHoverLangAndCurrencyId}
        /> */}
      </div>
    </div>
  );
};

export default DesktopHeader;
