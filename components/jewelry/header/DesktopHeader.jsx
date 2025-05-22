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
          {/* <Link href="/" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#cb222c] size-5 rounded-full flex items-center justify-center">
              0
            </span>
            <Icon
              name="Star"
              size={18}
              className="text-[#fff] hover:text-[#ce2d37]"
            />
          </Link> */}
          <Link href="/cart" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#cb222c] size-5 rounded-full flex items-center justify-center">
              {totalQuantity > 10 ? "10+" : totalQuantity}
            </span>
            <Icon
              name="ShoppingBag"
              size={18}
              className="text-[#000] hover:text-[#ce2d37]"
            />
          </Link>
          {/* <Link href="/">
            <Icon
              name="UserRound"
              size={18}
              className="text-[#fff] hover:text-[#ce2d37]"
            />
          </Link> */}
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
