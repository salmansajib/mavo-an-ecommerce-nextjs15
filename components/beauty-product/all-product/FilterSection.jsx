"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FilterSection = () => {
  const [minPrice, setMinPrice] = useState(55);
  const [maxPrice, setMaxPrice] = useState(550);

  // Update progress bar width
  const updateProgressBar = () => {
    const rangeMin = 0;
    const rangeMax = 10000;
    const minPercent = (minPrice / rangeMax) * 100;
    const maxPercent = 100 - (maxPrice / rangeMax) * 100;
    return { left: `${minPercent}%`, right: `${maxPercent}%` };
  };

  // Handle input changes for min price
  const handleMinInput = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  // Handle input changes for max price
  const handleMaxInput = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
  };

  // Handle range slider changes for min price
  const handleMinRange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  // Handle range slider changes for max price
  const handleMaxRange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
  };

  // Update progress bar when prices change
  useEffect(() => {
    const progress = document.querySelector(".progress");
    if (progress) {
      const { left, right } = updateProgressBar();
      progress.style.left = left;
      progress.style.right = right;
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="col-lg-3">
      <div className="mavo-product-widget">
        <div className="mavo-range-slider mavo-range-slider-beauty mavo-mb-40 flex relative justify-center items-center rounded">
          <h4 className="mavo-navigation-title mavo-mb-20">Price Filter</h4>
          <div className="wrapper">
            <div className="price-input">
              <div className="field">
                <input
                  type="number"
                  className="input-min"
                  value={minPrice}
                  onChange={handleMinInput}
                  min="0"
                  max="10000"
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <input
                  type="number"
                  className="input-max"
                  value={maxPrice}
                  onChange={handleMaxInput}
                  min="0"
                  max="10000"
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
                value={minPrice}
                step="100"
                onChange={handleMinRange}
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value={maxPrice}
                step="100"
                onChange={handleMaxRange}
              />
            </div>
          </div>
        </div>
        <div className="mavo-product-category mavo-mb-50">
          <div className="mavo-category-title mavo-mb-15">
            <h5 className="mavo-title">Product Categories</h5>
          </div>
          <ul>
            <li>
              <Link href="#"> Creams (20)</Link>
            </li>
            <li>
              <Link href="#"> Makeup (94)</Link>
            </li>
            <li>
              <Link href="#"> Moisturisers (40)</Link>
            </li>
            <li>
              <Link href="#"> Skincare (41)</Link>
            </li>
            <li>
              <Link href="#"> Eyecare (19)</Link>
            </li>
            <li>
              <Link href="#"> Hair Care (6)</Link>
            </li>
          </ul>
        </div>
        <div className="mavo-product-category">
          <div className="mavo-category-title mavo-mb-15">
            <h5 className="mavo-title">Product Brand</h5>
          </div>
          <ul>
            <li>
              <Link href="#"> Nivea</Link>
            </li>
            <li>
              <Link href="#"> Pantene</Link>
            </li>
            <li>
              <Link href="#"> Neutrogena</Link>
            </li>
            <li>
              <Link href="#"> Olay</Link>
            </li>
            <li>
              <Link href="#"> Tresemme</Link>
            </li>
            <li>
              <Link href="#"> Kerastase</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
