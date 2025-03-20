"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Search, ShoppingBag, Menu } from "lucide-react";

const MobileHeader = ({ setShowMobileMenu, setIsSearchFormActive }) => {
  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between">
        <Logo color="light" />
        <div className="flex items-center gap-[15px]">
          <button onClick={() => setIsSearchFormActive(true)}>
            <Search
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
            />
          </button>
          <Link href="/" className="relative">
            <span className="absolute font-prata -top-6 text-white left-1/2 -translate-x-1/2 text-[10px] bg-[#cb222c] size-5 rounded-full flex items-center justify-center">
              0
            </span>
            <ShoppingBag
              size={18}
              className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
            />
          </Link>
          <div className="w-[1px] h-[25px] bg-gray-50/20" />
          <button onClick={() => setShowMobileMenu((prev) => !prev)}>
            <Menu size={28} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
