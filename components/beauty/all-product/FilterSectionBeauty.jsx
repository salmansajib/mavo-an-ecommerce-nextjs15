"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import ReactSlider from "react-slider";

const FilterSectionBeauty = ({ onChange }) => {
  const [size, setSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const SCROLL_OFFSET = 500;
  const SCROLL_DELAY = 150;

  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch all products to calculate dynamic price range and unique sizes
  const { data: allProductsData } = useProducts(
    "beauty",
    1,
    1000,
    "first",
    false,
    0,
    {},
  );

  // Calculate unique sizes from actual product data
  const uniqueSizes = useMemo(() => {
    if (!allProductsData?.products) {
      return [];
    }

    const sizesSet = new Set();
    allProductsData.products.forEach((product) => {
      product.sizes?.forEach((s) => {
        sizesSet.add(s.size);
      });
    });

    return Array.from(sizesSet).sort();
  }, [allProductsData]);

  const sizeOptions = [...uniqueSizes.map((s) => ({ value: s, label: s }))];

  // Calculate dynamic min and max prices from actual product data
  const { minPrice, maxPrice } = useMemo(() => {
    if (!allProductsData?.products) {
      return { minPrice: 0, maxPrice: 5000 }; // fallback
    }

    const allPrices = [];
    allProductsData.products.forEach((product) => {
      // Extract prices from sizes for beauty
      product.sizes?.forEach((size) => {
        if (size.price) {
          allPrices.push(size.price);
        }
      });
      // Also check base_price as fallback
      if (product.base_price) {
        allPrices.push(product.base_price);
      }
    });

    if (allPrices.length === 0) {
      return { minPrice: 0, maxPrice: 5000 };
    }

    const calculatedMin = Math.floor(Math.min(...allPrices) / 10) * 10; // Round down to nearest 10
    const calculatedMax = Math.ceil(Math.max(...allPrices) / 10) * 10; // Round up to nearest 10

    return { minPrice: calculatedMin, maxPrice: calculatedMax };
  }, [allProductsData]);

  // Update price range when min/max prices are calculated
  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  const handleSubmit = () => {
    // Keep current params in case you want to preserve others
    const params = new URLSearchParams(searchParams.toString());

    if (size) params.set("filterSize", size);
    else params.delete("filterSize");

    params.set("minPrice", priceRange[0]);
    params.set("maxPrice", priceRange[1]);

    // Push new URL without full reload
    router.push(`?${params.toString()}`);

    // Still call parent onChange for local updates
    onChange({
      filterSize: size,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
    });

    // Scroll to products section (same as pagination behavior)
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: SCROLL_OFFSET, behavior: "smooth" });
      }
    }, SCROLL_DELAY);
  };

  const handleAllProduct = () => {
    setSize("");

    const params = new URLSearchParams();
    router.push("?"); // clear query string

    onChange({
      filterSize: "",
      priceMin: minPrice || 0,
      priceMax: maxPrice || 5000,
    });

    // Scroll to products section (same as pagination behavior)
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: SCROLL_OFFSET, behavior: "smooth" });
      }
    }, SCROLL_DELAY);
  };

  return (
    <div className="col-lg-3">
      <div className="mavo-product-widget">
        {/* Size Filter */}
        <div className="mavo-product-category mavo-mb-50">
          <div className="mavo-category-title mavo-mb-15">
            <h5 className="mavo-title">Size</h5>
          </div>
          <div className="flex items-center justify-start flex-wrap gap-3">
            {sizeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() =>
                  setSize(size === option.value ? "" : option.value)
                }
                className={`border border-gray-200 px-3 py-1 hover:text-white transition-colors ${
                  size === option.value
                    ? "bg-black text-white border-black"
                    : "bg-white text-black hover:!bg-gray-100"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="mavo-range-slider mavo-range-slider-beauty mavo-mb-40 flex flex-col relative justify-center items-center rounded">
          <h4 className="mavo-navigation-title mavo-mb-20">Price Filter</h4>
          <ReactSlider
            className="w-full lg:max-w-3xl h-6"
            ariaLabel={["Minimum price", "Maximum price"]}
            step={10}
            thumbClassName="size-6 bg-black rounded-full cursor-pointer -top-2"
            trackClassName="h-2 bg-gray-300 rounded-full"
            min={minPrice || 0}
            max={maxPrice || 5000}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            pearling
            minDistance={10}
          />
          <div className="mt-2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(priceRange[0])}
            {" - "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(priceRange[1])}
          </div>

          {/* Filter buttons */}
          <div className="w-full flex flex-col items-center gap-3 mt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-black hover:!bg-gray-800 transition text-white px-4 py-2"
            >
              Apply Filters
            </button>
            <button
              onClick={handleAllProduct}
              className="w-full bg-black hover:!bg-gray-800 transition text-white px-4 py-2"
            >
              All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionBeauty;
