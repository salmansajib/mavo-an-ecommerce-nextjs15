"use client";

import React, { useState } from "react";
import Link from "next/link";

// Define the filter data as an array of objects
const filterData = [
  {
    id: "metal",
    title: "METAL",
    items: ["Diamond", "Gold", "Bronze", "Silver"],
  },
  {
    id: "product",
    title: "PRODUCT TYPE",
    items: [
      "Ring",
      "Mangalsutra",
      "Chain",
      "Earrings",
      "Bracelet",
      "Bangles",
      "Finger Ring",
      "Nose Ring",
      "Necklace",
    ],
  },
  {
    id: "chain",
    title: "CHAIN LENGTH",
    items: [
      "16 in = 40cm",
      "18 in = 45cm",
      "20 in = 51cm",
      "22 in = 55cm",
      "24 in = 61cm",
      "30 in = 76cm",
      "36 in = 91cm",
    ],
  },
  {
    id: "color",
    title: "COLOUR",
    items: ["Golden", "White Gold", "White Diamond", "Red Diamond"],
  },
  {
    id: "price",
    title: "PRICE",
    items: ["Under $100", "$100 - $200", "$200 - $300", "$500+"],
    additionalContent: (
      <>
        <h2>Customer Rating</h2>
        <div className="mavo-producet-rating mavo-mr-10">
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
        </div>
        <div className="mavo-producet-rating mavo-mr-10">
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star-1"></i>
          <i className="flaticon-star"></i>
        </div>
      </>
    ),
  },
];

const FilterSection = () => {
  // State to track which accordion is open (using index)
  const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

  // Toggle accordion visibility
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, else open
  };

  return (
    <div className="col-lg-3">
      <div className="mavo-faq-content-area">
        <div className="mavo-jewellery-button-area">
          <div className="mavo-left-btn">
            <a className="mavo-product-btn" href="#">
              Filters
            </a>
          </div>
        </div>

        <div className="accordion" id="mavoFiltersCollapse">
          {filterData.map((filter, index) => (
            <div className="accordion-item" key={filter.id}>
              <h2 className="accordion-header" id={`${filter.id}Heading`}>
                <button
                  className={`accordion-button ${
                    openIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  {filter.title}
                </button>
              </h2>
              <div
                className={`${
                  openIndex === index ? "max-h-[300px]" : "max-h-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className="accordion-body">
                  <ul>
                    {filter.items.map((item, idx) => (
                      <li key={idx}>
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                  {filter.additionalContent && filter.additionalContent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
