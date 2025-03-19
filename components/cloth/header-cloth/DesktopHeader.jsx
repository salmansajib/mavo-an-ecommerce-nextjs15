"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavMenu from "./NavMenu";
import LangCurrencyMenu from "./LangCurrencyMenu";
import { Search, Star, ShoppingBag, UserRound } from "lucide-react";
import { navItems, langAndCurrencyItems } from "@/data/navigationData";

const DesktopHeader = () => {
  const [hoveredMenuId, setHoveredMenuId] = useState(null);
  const [hoverLangAndCurrencyId, setHoverLangAndCurrencyId] = useState(null);
  const [visibleSvgId, setVisibleSvgId] = useState(null);

  return (
    <div className="hidden w-full lg:flex items-center justify-between">
      <div className="flex items-center justify-center gap-[30px] xl:gap-[130px]">
        <Logo color="light" />
        <NavMenu
          navItems={navItems}
          hoveredMenuId={hoveredMenuId}
          setHoveredMenuId={setHoveredMenuId}
          visibleSvgId={visibleSvgId}
          setVisibleSvgId={setVisibleSvgId}
        />
      </div>

      <div className="flex items-center gap-[25px] xl:gap-[40px]">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Search
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
            />
          </Link>
          <Link href="/" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#cb222c] size-5 rounded-full flex items-center justify-center">
              0
            </span>
            <Star
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
            />
          </Link>
          <Link href="/" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#cb222c] size-5 rounded-full flex items-center justify-center">
              0
            </span>
            <ShoppingBag
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
            />
          </Link>
          <Link href="/">
            <UserRound
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
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
