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

const navItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
    subItems: [
      { id: 11, label: "Home 01", link: "/" },
      { id: 12, label: "Home 02", link: "index2.html" },
      { id: 13, label: "Home 03", link: "index3.html" },
      { id: 14, label: "Home 04", link: "index4.html" },
      { id: 15, label: "Home 05", link: "index5.html" },
      { id: 16, label: "Home 06", link: "index6.html" },
    ],
  },
  {
    id: 2,
    label: "Shop",
    link: "#",
    subItems: [
      { id: 21, label: "Bag Shop", link: "bag-shop.html" },
      { id: 22, label: "Beauty Shop", link: "beauty-shop.html" },
      { id: 23, label: "Cloth Shop", link: "/cloth/product" },
      { id: 24, label: "Watch Shop", link: "watch-shop.html" },
      { id: 25, label: "Shoes Shop", link: "shoes-shop.html" },
      { id: 26, label: "Jewellery Shop", link: "jewellery-shop.html" },
    ],
  },
  {
    id: 3,
    label: "Blog",
    link: "#",
    subItems: [
      { id: 31, label: "Shoes Blog", link: "shoes-blog.html" },
      { id: 32, label: "Shoes Blog2", link: "shoes-blog2.html" },
      { id: 33, label: "Jewellery Blog", link: "jewellery-blog.html" },
      { id: 34, label: "Beauty Blog", link: "beauty-blog.html" },
      { id: 35, label: "Bag Blog", link: "bag-blog.html" },
      { id: 36, label: "Blog Single", link: "blog-single.html" },
      { id: 37, label: "Blog Details", link: "blog-details.html" },
    ],
  },
  {
    id: 4,
    label: "Pages",
    link: "#",
    subItems: [
      { id: 41, label: "About Us Beauty", link: "about-us-beauty.html" },
      { id: 42, label: "About Us Bag", link: "about-us-bag.html" },
      { id: 43, label: "About Us Clothing", link: "about-us-clothing.html" },
      { id: 44, label: "Cart", link: "cart.html" },
      { id: 45, label: "Checkout", link: "checkout.html" },
      { id: 46, label: "Faq", link: "faq.html" },
      { id: 47, label: "Thank You", link: "thank-you.html" },
      {
        id: 48,
        label: "Watch Product Single",
        link: "watch-product-single.html",
      },
      {
        id: 49,
        label: "Jewellery Product Single",
        link: "jewellery-product-single.html",
      },
      {
        id: 50,
        label: "Cloth Product Single",
        link: "cloth-product-single.html",
      },
      {
        id: 51,
        label: "Beauty Product Single",
        link: "beauty-product-single.html",
      },
      { id: 52, label: "Bag Product Single", link: "bag-product-single.html" },
      { id: 53, label: "404 Page", link: "404-page.html" },
    ],
  },
  {
    id: 5,
    label: "Contact",
    link: "#",
    subItems: [
      { id: 51, label: "Contact", link: "contact.html" },
      { id: 52, label: "Contact Us", link: "contact-us.html" },
    ],
  },
];
const navItemsMobile = [
  {
    id: 1,
    label: "Home",
    link: "/",
    subItems: [
      { id: 11, label: "Home 01", link: "/" },
      { id: 12, label: "Home 02", link: "index2.html" },
      { id: 13, label: "Home 03", link: "index3.html" },
      { id: 14, label: "Home 04", link: "index4.html" },
      { id: 15, label: "Home 05", link: "index5.html" },
      { id: 16, label: "Home 06", link: "index6.html" },
    ],
  },
  {
    id: 2,
    label: "Shop",
    link: "#",
    subItems: [
      { id: 21, label: "Bag Shop", link: "bag-shop.html" },
      { id: 22, label: "Beauty Shop", link: "beauty-shop.html" },
      { id: 23, label: "Cloth Shop", link: "/cloth/product" },
      { id: 24, label: "Watch Shop", link: "watch-shop.html" },
      { id: 25, label: "Shoes Shop", link: "shoes-shop.html" },
      { id: 26, label: "Jewellery Shop", link: "jewellery-shop.html" },
    ],
  },
  {
    id: 3,
    label: "Blog",
    link: "#",
    subItems: [
      { id: 31, label: "Shoes Blog", link: "shoes-blog.html" },
      { id: 32, label: "Shoes Blog2", link: "shoes-blog2.html" },
      { id: 33, label: "Jewellery Blog", link: "jewellery-blog.html" },
      { id: 34, label: "Beauty Blog", link: "beauty-blog.html" },
      { id: 35, label: "Bag Blog", link: "bag-blog.html" },
      { id: 36, label: "Blog Single", link: "blog-single.html" },
      { id: 37, label: "Blog Details", link: "blog-details.html" },
    ],
  },
  {
    id: 4,
    label: "Pages",
    link: "#",
    subItems: [
      { id: 41, label: "About Us Beauty", link: "about-us-beauty.html" },
      { id: 42, label: "About Us Bag", link: "about-us-bag.html" },
      { id: 43, label: "About Us Clothing", link: "about-us-clothing.html" },
      { id: 44, label: "Cart", link: "cart.html" },
      { id: 45, label: "Checkout", link: "checkout.html" },
      { id: 46, label: "Faq", link: "faq.html" },
      { id: 47, label: "Thank You", link: "thank-you.html" },
      {
        id: 48,
        label: "Watch Product Single",
        link: "watch-product-single.html",
      },
      {
        id: 49,
        label: "Jewellery Product Single",
        link: "jewellery-product-single.html",
      },
      {
        id: 50,
        label: "Cloth Product Single",
        link: "cloth-product-single.html",
      },
      {
        id: 51,
        label: "Beauty Product Single",
        link: "beauty-product-single.html",
      },
      { id: 52, label: "Bag Product Single", link: "bag-product-single.html" },
      { id: 53, label: "404 Page", link: "404-page.html" },
    ],
  },
  {
    id: 5,
    label: "Contact",
    link: "#",
    subItems: [
      { id: 51, label: "Contact", link: "contact.html" },
      { id: 52, label: "Contact Us", link: "contact-us.html" },
    ],
  },
  {
    id: 6,
    label: "Wish List",
    link: "#",
  },
  {
    id: 7,
    label: "My Account",
    link: "#",
  },
];
const langAndCurrencyItems = [
  {
    id: 1,
    label: "eng",
    link: "/",
    subItems: [
      { id: 11, label: "es", link: "/" },
      { id: 12, label: "ru", link: "/" },
      { id: 13, label: "ku", link: "/" },
      { id: 14, label: "de", link: "/" },
      { id: 15, label: "it", link: "/" },
      { id: 16, label: "ar", link: "/" },
    ],
  },
  {
    id: 2,
    label: "usd",
    link: "/",
    subItems: [
      { id: 21, label: "dzd", link: "/" },
      { id: 22, label: "eur", link: "/" },
      { id: 23, label: "aoa", link: "/" },
      { id: 24, label: "cny", link: "/" },
    ],
  },
];

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
            showMobileMenu ? "translate-x-0" : "translate-x-[100%]"
          } fixed z-50 w-full max-w-[450px] h-full top-0 right-0 bg-[#000] font-marcellus lg:hidden p-[30px] transition-transform ease-in-out duration-500`}
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
                  <button
                    className="!text-[#fff] w-full py-3 text-base flex items-center justify-between"
                    onClick={() => handleToggleSubmenu(item.id)}
                  >
                    {item.label}
                    {item.subItems && (
                      <Plus
                        size={20}
                        color="#fff"
                        className={`${
                          showMobileSubmenu === item.id ? "-rotate-45" : ""
                        } transition-all duration-500 ease-in-out`}
                      />
                    )}
                  </button>

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
