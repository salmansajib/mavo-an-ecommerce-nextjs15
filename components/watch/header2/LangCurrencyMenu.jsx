"use client";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const LangCurrencyMenu = ({
  langAndCurrencyItems,
  hoverLangAndCurrencyId,
  setHoverLangAndCurrencyId,
}) => {
  return (
    <div>
      <ul className="flex items-center gap-3 h-[120px] xl:w-[200px] bg-transparent">
        {langAndCurrencyItems.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoverLangAndCurrencyId(item.id)}
            onMouseLeave={() => setHoverLangAndCurrencyId(null)}
          >
            <Link
              href={item.link}
              className="!text-[#000] text-[15px] uppercase flex items-center gap-1.5"
            >
              {item.label}
              <ChevronDown size={18} className="mb-1" />
            </Link>
            {item.subItems && (
              <ul
                className={`absolute top-8 w-[60px] bg-[#c9a96b] transition-opacity duration-500 ease-in-out ${
                  hoverLangAndCurrencyId === item.id
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <span className="absolute -top-5 left-0 right-0 h-6 bg-transparent"></span>
                {item.subItems.map((subitem) => (
                  <li
                    key={subitem.id}
                    className="border-b border-gray-100/40 last:border-b-0"
                  >
                    <Link
                      href={subitem.link}
                      className="!text-[#fff] hover:!text-gray-200 text-sm font-medium transition-colors duration-200 ease-in-out uppercase text-center block py-[10px]"
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
  );
};

export default LangCurrencyMenu;
