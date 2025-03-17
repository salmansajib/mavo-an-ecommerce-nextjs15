"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import Logo from "../Logo";
import {
  Search,
  Star,
  ShoppingBag,
  UserRound,
  ChevronDown,
  Menu,
  X,
  Plus,
} from "lucide-react";

import {
  navItems,
  navItemsMobile,
  langAndCurrencyItems,
} from "@/data/navigationData";

const HeaderCloth = () => {
  const [hoveredMenuId, setHoveredMenuId] = useState(null);
  const [hoverLangAndCurrencyId, setHoverLangAndCurrencyId] = useState(null);
  const [visibleSvgId, setVisibleSvgId] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(null);
  const submenuRefs = useRef({});

  const handleToggleSubmenu = (id) => {
    setShowMobileSubmenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <header className="absolute top-10 left-1/2 -translate-x-1/2 z-50 flex items-center px-[12px] w-full max-w-[1600px] font-josefin-sans">
        {/* desktop header */}
        <div className="hidden w-full lg:flex items-center justify-between">
          {/* logo and nav menu section */}
          <div className="flex items-center justify-center gap-[50px] xl:gap-[130px] ">
            {/* logo */}
            <Logo color="light" />
            {/* nav manu items */}
            <nav>
              <ul className="flex items-center gap-[20px] lg:gap-[30px]">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredMenuId(item.id);
                      setVisibleSvgId(item.id); // Show this item's SVG
                    }}
                    onMouseLeave={() => {
                      setHoveredMenuId(null);
                      setVisibleSvgId(null); // Hide all SVGs
                    }}
                  >
                    <Link
                      href={item.link}
                      className="p-2 !text-[#fff] uppercase text-[15px] font-medium flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8px"
                        height="9px"
                        viewBox="0 0 7 8"
                        className={`${
                          visibleSvgId === item.id ? "opacity-100" : "opacity-0"
                        } mb-[5px] transition-opacity duration-300 ease-in-out`}
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(255, 255, 255)"
                          d="M1.040,-0.015 C1.040,1.852 3.235,3.122 7.013,3.122 L7.013,4.844 C3.204,4.844 1.041,5.859 1.040,8.012 L0.004,8.012 L0.004,-0.015 L1.040,-0.015 Z"
                        />
                      </svg>
                      {item.label}
                    </Link>
                    {/* submenu - unchanged */}
                    {item.subItems && (
                      <ul
                        className={`absolute top-12 left-1.5 w-[210px] bg-white transition-opacity duration-300 ${
                          hoveredMenuId === item.id
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <span className="absolute -top-5 left-0 right-0 h-6 bg-transparent"></span>
                        {item.subItems.map((subitem) => (
                          <li
                            key={subitem.id}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            <Link
                              href={subitem.link}
                              className="text-sm font-medium text-[#000] uppercase hover:translate-x-1.5 transition-transform duration-400 ease-in-out w-full py-2.5 px-[20px] flex items-center gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7px"
                                height="8px"
                                viewBox="0 0 7 8"
                                className="mb-[5px]"
                              >
                                <path
                                  fillRule="evenodd"
                                  fill="rgb(0, 0, 0)"
                                  d="M1.040,-0.015 C1.040,1.852 3.235,3.122 7.013,3.122 L7.013,4.844 C3.204,4.844 1.041,5.859 1.040,8.012 L0.004,8.012 L0.004,-0.015 L1.040,-0.015 Z"
                                />
                              </svg>
                              <span>{subitem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* icons, language and currency section */}
          <div className="flex items-center gap-[25px] xl:gap-[40px]">
            {/* cart and other icons */}
            <div className="flex items-center gap-4">
              <Link href="/" className="">
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
              <Link href="/" className="">
                <UserRound
                  size={18}
                  className="text-[#fff] hover:text-[#ce2d37] transition-colors duration-300 ease-in-out"
                />
              </Link>
            </div>
            {/* vertical line */}
            <div className="w-[1px] h-[25px] bg-gray-50/20" />
            {/* language and currdency */}
            <div>
              <ul className="flex items-center gap-3">
                {langAndCurrencyItems.map((item) => (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoverLangAndCurrencyId(item.id)}
                    onMouseLeave={() => setHoverLangAndCurrencyId(null)}
                  >
                    <Link
                      href={item.link}
                      className="!text-[#fff] text-[15px] uppercase flex items-center gap-1.5"
                    >
                      {item.label}
                      <ChevronDown size={18} className="mb-1" />
                    </Link>
                    {/* subitems */}
                    {item.subItems && (
                      <ul
                        className={`absolute top-8 w-[60px] bg-[#fff] transition-opacity duration-500 ease-in-out ${
                          hoverLangAndCurrencyId === item.id
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <span className="absolute -top-5 left-0 right-0 h-6 bg-transparent"></span>
                        {item.subItems.map((subitem) => (
                          <li
                            key={subitem.id}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            <Link
                              href={subitem.link}
                              className="!text-[#000] hover:!text-green-500 text-sm font-medium transition-colors duration-200 ease-in-out uppercase text-center block py-[10px]"
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* mobile header */}
        <div className="w-full lg:hidden">
          <div className="flex items-center justify-between">
            <Logo color="light" />

            <div className="flex items-center gap-[25px]">
              <Link href="/" className="">
                <Search
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
              {/* vertical line */}
              <div className="w-[1px] h-[25px] bg-gray-50/20" />
              <button onClick={() => setShowMobileMenu((prev) => !prev)}>
                <Menu size={28} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* off screen mobile navigaion items  */}
      <div>
        {/* Overlay */}
        {showMobileMenu && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setShowMobileMenu(false)} // Closes menu when clicked
          />
        )}

        {/* Mobile Navigation */}
        <nav
          className={`${
            showMobileMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          } fixed z-50 w-full max-w-[450px] h-full top-0 right-0 bg-[#000] font-marcellus lg:hidden p-[30px] transition-all ease-in-out duration-500`}
        >
          <div className="flex items-center justify-between border-b border-[#fff]/40 pb-[20px]">
            <Logo color="light" width={90} />
            <button
              onClick={() => {
                setShowMobileMenu(false);
                setShowMobileSubmenu(null);
              }}
            >
              <X color="#fff" size={38} />
            </button>
          </div>
          <div className="pt-[30px]">
            <ul>
              {navItemsMobile.map((item) => (
                <li key={item.id}>
                  {item.subItems ? (
                    // If sub-items exist, toggle submenu on click
                    <button
                      className="!text-[#fff] w-full py-3 text-base flex items-center justify-between"
                      onClick={() => handleToggleSubmenu(item.id)}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus transition-all duration-300 ease-in-out"
                      >
                        {/* Horizontal line: Always visible */}
                        <path d="M5 12h14" />
                        {/* Vertical line: Disappears when submenu is open  */}
                        <path
                          d="M12 5v14"
                          className={`transition-all duration-300 ${
                            showMobileSubmenu === item.id
                              ? "stroke-[0]"
                              : "stroke-[2]"
                          }`}
                        />
                      </svg>
                    </button>
                  ) : (
                    // If no sub-items, use Link for navigation
                    <Link
                      href={item.link}
                      className="!text-[#fff] w-full py-3 text-base block"
                      onClick={() => setShowMobileMenu(false)} // Close menu when clicking a direct link
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.subItems && (
                    <ul
                      ref={(el) => (submenuRefs.current[item.id] = el)}
                      style={{
                        height:
                          showMobileSubmenu === item.id
                            ? submenuRefs.current[item.id]?.scrollHeight + "px"
                            : "0px",
                      }}
                      className="overflow-hidden transition-all duration-500"
                    >
                      {item.subItems.map((subitem) => (
                        <li key={subitem.id}>
                          <Link
                            href={subitem.link}
                            className="block !text-[#fff] pl-[30px] py-[8px]"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderCloth;
