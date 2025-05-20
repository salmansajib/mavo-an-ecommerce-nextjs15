import React from "react";

const dropdowns = [
  {
    title: "All Watch",
    subMenu: [
      { text: "Watch Size", href: "/watch/product" },
      { text: "Brands", href: "/watch/product" },
      { text: "Price", href: "/watch/product" },
      { text: "Year", href: "/watch/product" },
    ],
  },
  {
    title: "Watch Size",
    subMenu: [
      { text: "Watch Size", href: "/watch/product" },
      { text: "Brands", href: "/watch/product" },
      { text: "Price", href: "/watch/product" },
      { text: "Year", href: "/watch/product" },
    ],
  },
  {
    title: "Brands",
    subMenu: [
      { text: "Watch Size", href: "/watch/product" },
      { text: "Brands", href: "/watch/product" },
      { text: "Price", href: "/watch/product" },
      { text: "Year", href: "/watch/product" },
    ],
  },
  {
    title: "Price",
    subMenu: [
      { text: "Watch Size", href: "/watch/product" },
      { text: "Brands", href: "/watch/product" },
      { text: "Price", href: "/watch/product" },
      { text: "Year", href: "/watch/product" },
    ],
  },
  {
    title: "Year",
    subMenu: [
      { text: "Watch Size", href: "/watch/product" },
      { text: "Brands", href: "/watch/product" },
      { text: "Price", href: "/watch/product" },
      { text: "Year", href: "/watch/product" },
    ],
  },
];

const singleDropdown = {
  title: "Year",
  subMenu: [
    { text: "Watch Size", href: "/watch/product" },
    { text: "Brands", href: "/watch/product" },
    { text: "Price", href: "/watch/product" },
    { text: "Year", href: "/watch/product" },
  ],
};

const FilterSection = () => {
  return (
    <div className="mavo-filter-content-area mavo-mb-65 d-flex align-items-center justify-content-between">
      <div className="mavo-filter-text">Showing 1-3 of 50 results</div>
      <div className="mavo_dropdown mavo_dropdown1">
        <ul className="dropdown-list d-flex align-items-center justify-content-between">
          {dropdowns.map((dropdown, index) => (
            <li key={index}>
              <a className="border-btn" href="#">
                {dropdown.title} <i className="flaticon-down"></i>
              </a>
              <ul className="sub-menu">
                {dropdown.subMenu.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="mavo_dropdown">
        <ul className="dropdown-list">
          <li>
            <a className="border-btn" href="#">
              {singleDropdown.title} <i className="flaticon-down"></i>
            </a>
            <ul className="sub-menu">
              {singleDropdown.subMenu.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
