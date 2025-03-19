"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { X } from "lucide-react";
import { navItemsMobile } from "@/data/navigationData";

const MobileNavigation = ({
  showMobileMenu,
  setShowMobileMenu,
  setShowMobileSubmenu,
  showMobileSubmenu,
  handleToggleSubmenu,
  submenuRefs,
}) => {
  return (
    <div>
      {showMobileMenu && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      <nav
        className={`${
          showMobileMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-[100%] opacity-0"
        } fixed z-50 w-full max-w-[450px] h-full top-0 right-0 bg-[#000] font-marcellus lg:hidden p-[30px] transition-all ease-in-out duration-500 overflow-y-auto`}
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
                      <path d="M5 12h14" />
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
                  <Link
                    href={item.link}
                    className="!text-[#fff] w-full py-3 text-base block"
                    onClick={() => setShowMobileMenu(false)}
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
  );
};

export default MobileNavigation;
