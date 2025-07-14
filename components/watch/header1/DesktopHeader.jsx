"use client";
import React, { useState } from "react";
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

  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);
  const totalItemsInWishlist = useSelector(
    (state) => state.wishlist.totalItems || 0,
  );

  return (
    <div className="hidden w-full h-full lg:flex items-center justify-between">
      <div className="flex items-center justify-center gap-[50px]">
        <Logo color="dark" />
        <div className="w-[80px] h-[2px] bg-gray-900/60 hidden 2xl:block" />
        <LangCurrencyMenu
          langAndCurrencyItems={langAndCurrencyItems}
          hoverLangAndCurrencyId={hoverLangAndCurrencyId}
          setHoverLangAndCurrencyId={setHoverLangAndCurrencyId}
        />
      </div>

      <div className="flex items-center gap-[100px]">
        <NavMenu
          navItems={navItems}
          hoveredMenuId={hoveredMenuId}
          setHoveredMenuId={setHoveredMenuId}
          visibleSvgId={visibleSvgId}
          setVisibleSvgId={setVisibleSvgId}
        />
        <div className="flex items-center gap-[25px] xl:gap-[40px]">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSearchFormActive(true)}>
              <Icon
                name="Search"
                size={18}
                className="text-[#fff] hover:text-[#c9a96b]"
              />
            </button>
            <Link href="/wishlist" className="relative">
              <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#c9a96b] size-5 rounded-full flex items-center justify-center">
                {totalItemsInWishlist > 10 ? "10+" : totalItemsInWishlist}
              </span>
              <Icon
                name="Star"
                size={18}
                className="text-[#fff] hover:text-[#c9a96b]"
              />
            </Link>
            <Link href="/cart" className="relative">
              <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#c9a96b] size-5 rounded-full flex items-center justify-center">
                {totalQuantity > 10 ? "10+" : totalQuantity}
              </span>
              <Icon
                name="ShoppingBag"
                size={18}
                className="text-[#fff] hover:text-[#c9a96b]"
              />
            </Link>
            <Link href="/signup">
              <Icon
                name="UserRound"
                size={18}
                className="text-[#fff] hover:text-[#c9a96b]"
              />
            </Link>
          </div>
          {/* <div className="w-[1px] h-[25px] bg-gray-50/20" /> */}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
