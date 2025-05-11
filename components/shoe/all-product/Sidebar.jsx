"use client";
import React, { useState } from "react";
import Link from "next/link";

// Categories data
const categories = [
  { name: "Clothing", count: "(01)" },
  { name: "Watch", count: "(01)" },
  { name: "Shoe", count: "(01)" },
  { name: "Beauty", count: "(01)" },
  { name: "Fashion", count: "(01)" },
  { name: "Jewelry", count: "(01)" },
];

// Sizes data
const sizes = ["40", "42", "44", "46"];

// Ratings data
const ratings = [
  { stars: 5, count: "(5)" },
  { stars: 4, count: "(5)" },
];

const Sidebar = () => {
  // State for price filter
  const [priceRange, setPriceRange] = useState({ min: 55, max: 550 });
  const [rangeValues, setRangeValues] = useState({ min: 2500, max: 7500 });

  // State for selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // Handlers for price inputs
  const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange((prev) => ({ ...prev, min: value }));
  };

  const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  const handleMinRangeChange = (e) => {
    const value = Number(e.target.value);
    setRangeValues((prev) => ({ ...prev, min: value }));
  };

  const handleMaxRangeChange = (e) => {
    const value = Number(e.target.value);
    setRangeValues((prev) => ({ ...prev, max: value }));
  };

  // Handler for size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="col-lg-4">
      <div className="mavo-page-sidebar-content-area">
        {/* Search Widget */}
        <div className="mavo-sidebar-widget mavo-search-widget">
          <div className="input-group rounded">
            <h4 className="mavo-navigation-title mavo-mb-20">Search</h4>
            <form className="mav-form">
              <button type="submit">
                <i className="flaticon-search"></i>
              </button>
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>

        {/* Categories Widget */}
        <div className="mavo-sidebar-widget mavo-navigation-widget">
          <h4 className="mavo-navigation-title mavo-mb-20">Categories</h4>
          <ul className="mavo-nav-menu">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href="/shoes/product">{category.name}</Link>
                <Link href="/shoes/product">{category.count}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mavo-range-slider mavo-mb-40 flex relative justify-center items-center rounded">
          <h4 className="mavo-navigation-title mavo-mb-20">Price Filter</h4>
          <div className="wrapper">
            <div className="price-input">
              <div className="field">
                <input
                  type="number"
                  className="input-min"
                  value={priceRange.min}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <input
                  type="number"
                  className="input-max"
                  value={priceRange.max}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="slider">
              <div className="progress"></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                value={rangeValues.min}
                onChange={handleMinRangeChange}
                step="100"
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value={rangeValues.max}
                onChange={handleMaxRangeChange}
                step="100"
              />
            </div>
          </div>
        </div>

        {/* Size Widget */}
        <div className="mavo-sidebar-widget mavo-navigation-widget">
          <div className="mavo-widget-size">
            <div className="mavo-title-size mavo-mb-30">
              <h5 className="mavo-title">Size</h5>
            </div>
            <div className="mavo-quiz-check-box d-flex align-items-center justify-content-between">
              {sizes.map((size, index) => (
                <div className="sc-quiz-list" key={index}>
                  <label className="quiz-check">
                    <input
                      type="radio"
                      name="size"
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span className="mavo-sise"> {size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rating Widget */}
        <div className="mavo-sidebar-widget mavo-navigation-widget">
          <div className="mavo-widget-size">
            <div className="mavo-title-size">
              <h5 className="mavo-title mavo-mb-20">Customer Rating</h5>
            </div>
            {ratings.map((rating, index) => (
              <div
                className={`mavo-customer-rating ${
                  index === 0 ? "mavo-mb-15" : ""
                } d-flex align-items-center justify-content-between`}
                key={index}
              >
                <div className="sc-quiz-list">
                  <label className="quiz-check mavo-mr-15">
                    <input type="radio" name="rating" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="mavo-rating-list">
                  <ul>
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <img
                          src={`/images/icons/star-icon${
                            i >= rating.stars ? "2" : ""
                          }.png`}
                          alt="Star"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mavo-number">
                  <span className="number"> {rating.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
