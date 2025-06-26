import React, { useState } from "react";

const FilterSection = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Price filter state
  const [priceRange, setPriceRange] = useState({
    min: 55,
    max: 550,
    sliderMin: 2500,
    sliderMax: 7500,
  });

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

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  // Handle price change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: parseInt(value),
      min:
        name === "sliderMin"
          ? Math.min(parseInt(value), prev.sliderMax)
          : prev.min,
      max:
        name === "sliderMax"
          ? Math.max(parseInt(value), prev.sliderMin)
          : prev.max,
    }));
  };

  return (
    <div className="col-lg-4 col-md-12">
      <div className="mavo-page-sidebar-content-area mavo-page-sidebar-content-two">
        {/* Search Widget */}
        <div className="mavo-sidebar-widget mavo-search-widget">
          <div className="input-group rounded">
            <h4 className="mavo-navigation-title mavo-mb-20">Search</h4>
            <form className="mav-form" onSubmit={handleSearchSubmit}>
              <button type="submit">
                <i className="flaticon-search"></i>
              </button>
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <a href="bag-shop-page.html">{category.name}</a>
                <a href="bag-shop-page.html">{category.count}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter Widget */}
        <div className="mavo-range-slider mavo-mb-40 flex relative justify-center items-center rounded">
          <h4 className="mavo-navigation-title mavo-mb-20">Price Filter</h4>
          <div className="wrapper">
            <div className="price-input">
              <div className="field">
                <input
                  type="number"
                  className="input-min"
                  value={priceRange.min}
                  readOnly
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <input
                  type="number"
                  className="input-max"
                  value={priceRange.max}
                  readOnly
                />
              </div>
            </div>
            <div className="slider">
              <div
                className="progress"
                style={{
                  left: `${(priceRange.sliderMin / 10000) * 100}%`,
                  right: `${100 - (priceRange.sliderMax / 10000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                value={priceRange.sliderMin}
                step="100"
                name="sliderMin"
                onChange={handlePriceChange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value={priceRange.sliderMax}
                step="100"
                name="sliderMax"
                onChange={handlePriceChange}
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
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="mavo-sise"> {size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
