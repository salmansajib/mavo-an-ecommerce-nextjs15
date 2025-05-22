import React from "react";
import Link from "next/link";

const NavMenu = ({
  navItems,
  hoveredMenuId,
  setHoveredMenuId,
  visibleSvgId,
  setVisibleSvgId,
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-[20px] lg:gap-[30px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => {
              setHoveredMenuId(item.id);
              setVisibleSvgId(item.id);
            }}
            onMouseLeave={() => {
              setHoveredMenuId(null);
              setVisibleSvgId(null);
            }}
          >
            <Link
              href={item.link}
              className="p-2 !text-[#000] uppercase text-[15px] font-medium flex items-center gap-2"
            >
              {/* <svg
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
              </svg> */}
              {item.label}
            </Link>
            {item.subItems && (
              <ul
                className={`absolute top-12 left-1.5 w-auto whitespace-nowrap bg-[#c9a96b] transition-opacity duration-300 ${
                  hoveredMenuId === item.id
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <span className="absolute -top-5 left-0 right-0 h-6 bg-transparent"></span>
                {item.subItems.map((subitem) => (
                  <li
                    key={subitem.id}
                    className="border-b border-gray-50/60 last:border-b-0"
                  >
                    <Link
                      href={subitem.link}
                      className="text-[14px] font-semibold !text-[#fff] uppercase hover:translate-x-1.5 transition-transform duration-400 ease-in-out py-[12px] pl-[17px] pr-[80px] flex items-center gap-2"
                    >
                      {/* <svg
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
                      </svg> */}
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
  );
};

export default NavMenu;
