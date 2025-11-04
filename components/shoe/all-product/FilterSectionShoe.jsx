"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ReactSlider from "react-slider";
import { useProducts } from "@/hooks/useProducts";

const FilterSectionShoe = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedSize, setSelectedSize] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const SCROLL_OFFSET = 500;
  const SCROLL_DELAY = 150;

  const sizes = ["35", "36", "37", "38", "39", "40"];

  // Fetch all products to calculate dynamic price range
  const { data: allProductsData } = useProducts(
    "shoes",
    1,
    1000,
    "first",
    false,
    0,
    {},
  );

  // Calculate dynamic min and max prices from actual product data
  const { minPrice, maxPrice } = useMemo(() => {
    if (!allProductsData?.products) {
      return { minPrice: 0, maxPrice: 5000 }; // fallback
    }

    const allPrices = [];
    allProductsData.products.forEach((product) => {
      // Extract prices from all variants and sizes
      product.variants?.forEach((variant) => {
        variant.sizes?.forEach((size) => {
          if (size.price) {
            allPrices.push(size.price);
          }
        });
      });
      // Also check base_price as fallback
      if (product.base_price) {
        allPrices.push(product.base_price);
      }
    });

    if (allPrices.length === 0) {
      return { minPrice: 0, maxPrice: 5000 };
    }

    const calculatedMin = Math.floor(Math.min(...allPrices) / 10) * 10;
    const calculatedMax = Math.ceil(Math.max(...allPrices) / 10) * 10;

    return { minPrice: calculatedMin, maxPrice: calculatedMax };
  }, [allProductsData]);

  // Update price range when min/max prices are calculated
  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  // Initialize filters from URL parameters on mount
  useEffect(() => {
    const sizeParam = searchParams.get("size");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");

    if (sizeParam) setSelectedSize(sizeParam);
    if (minPriceParam && maxPriceParam) {
      setPriceRange([Number(minPriceParam), Number(maxPriceParam)]);
    }
  }, [searchParams]);

  // Handler for size selection
  const handleSizeChange = (size) => {
    setSelectedSize(selectedSize === size ? "" : size);
  };

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Clear page param when filters change
    params.delete("page");

    if (selectedSize) params.set("size", selectedSize);
    else params.delete("size");

    // Always set price range
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());

    // Push new URL without full reload
    router.push(`?${params.toString()}`);

    // Call parent onChange for local updates
    if (onChange && typeof onChange === "function") {
      onChange({
        filterSize: selectedSize,
        priceMin: priceRange[0],
        priceMax: priceRange[1],
      });
    }

    // Scroll to products section
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: SCROLL_OFFSET, behavior: "smooth" });
      }
    }, SCROLL_DELAY);
  };

  const handleAllProduct = () => {
    setSelectedSize("");
    setPriceRange([minPrice || 0, maxPrice || 5000]);

    router.push("?"); // clear query string

    if (onChange && typeof onChange === "function") {
      onChange({
        filterSize: "",
        priceMin: minPrice || 0,
        priceMax: maxPrice || 5000,
      });
    }

    // Scroll to products section
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: SCROLL_OFFSET, behavior: "smooth" });
      }
    }, SCROLL_DELAY);
  };

  return (
    <div className="col-lg-4 max-[1000px]:mb-20">
      <div className="mavo-page-sidebar-content-area">
        {/* Price Filter */}
        <div className="mavo-range-slider mavo-mb-40 flex relative justify-center items-center rounded">
          <h4 className="mavo-navigation-title mavo-mb-20">Price Filter</h4>
          <div className="w-full flex flex-col items-start">
            <label className="block mb-4">Price</label>
            <ReactSlider
              className="w-full h-6"
              ariaLabel={["Minimum price", "Maximum price"]}
              step={10}
              thumbClassName="size-6 bg-black rounded-full cursor-pointer -top-2"
              trackClassName="h-2 bg-gray-300 rounded-full"
              min={minPrice || 0}
              max={maxPrice || 5000}
              value={priceRange}
              onChange={setPriceRange}
              pearling
              minDistance={10}
            />
            <div className="w-full flex justify-between mt-2 text-sm">
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(priceRange[0])}
              </span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(priceRange[1])}
              </span>
            </div>
          </div>
        </div>

        {/* Size Widget */}
        <div className="mavo-sidebar-widget mavo-navigation-widget">
          <div className="mavo-widget-size">
            <div className="mavo-title-size mavo-mb-30">
              <h5 className="mavo-title">Size</h5>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {sizes.map((size, index) => (
                <button
                  onClick={() => handleSizeChange(size)}
                  key={size}
                  className={`px-3 py-1 border border-black ${
                    selectedSize === size ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleSubmit}
            className="bg-black hover:!bg-gray-800 transition text-white w-full h-[40px] rounded"
          >
            Apply Filters
          </button>
          <button
            onClick={handleAllProduct}
            className="bg-black hover:!bg-gray-800 transition text-white w-full h-[40px] rounded"
          >
            All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionShoe;
