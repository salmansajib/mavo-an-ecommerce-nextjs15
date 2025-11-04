"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useProducts } from "@/hooks/useProducts";
import ReactSlider from "react-slider";
import Icon from "@/components/Icon";

const FilterSectionJewelry = ({ onChange }) => {
  const [metal, setMetal] = useState("");
  const [length, setLength] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isMetalOpen, setIsMetalOpen] = useState(false);

  const metalRef = useRef(null);

  const SCROLL_OFFSET = 500;
  const SCROLL_DELAY = 150;

  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch all products to calculate dynamic price range and unique metals/lengths
  const { data: allProductsData } = useProducts(
    "jewelry",
    1,
    1000,
    "first",
    false,
    0,
    {},
  );

  // Calculate unique metals from actual product data
  const uniqueMetals = useMemo(() => {
    if (!allProductsData?.products) {
      return [];
    }

    const metalsSet = new Set();
    allProductsData.products.forEach((product) => {
      product.variants?.forEach((variant) => {
        if (variant.material) {
          metalsSet.add(variant.material);
        }
      });
    });

    return Array.from(metalsSet).sort();
  }, [allProductsData]);

  const metalOptions = [
    { value: "", label: "All Metals" },
    ...uniqueMetals.map((m) => ({ value: m, label: m })),
  ];

  // Calculate unique lengths from actual product data
  const uniqueLengths = useMemo(() => {
    if (!allProductsData?.products) {
      return [];
    }

    const lengthsSet = new Set();
    allProductsData.products.forEach((product) => {
      product.variants?.forEach((variant) => {
        variant.lengths?.forEach((len) => {
          lengthsSet.add(len.length);
        });
      });
    });

    return Array.from(lengthsSet).sort((a, b) => a - b);
  }, [allProductsData]);

  const lengthOptions = [
    { value: "", label: "All Lengths" },
    ...uniqueLengths.map((l) => ({ value: l.toString(), label: `${l} in` })),
  ];

  // Calculate dynamic min and max prices from actual product data
  const { minPrice, maxPrice } = useMemo(() => {
    if (!allProductsData?.products) {
      return { minPrice: 0, maxPrice: 5000 }; // fallback
    }

    const allPrices = [];
    allProductsData.products.forEach((product) => {
      // Extract prices from variants.lengths for jewelry
      product.variants?.forEach((variant) => {
        variant.lengths?.forEach((len) => {
          if (len.price) {
            allPrices.push(len.price);
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

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (metalRef.current && !metalRef.current.contains(event.target)) {
        setIsMetalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation for Metal dropdown
  const handleMetalKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsMetalOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsMetalOpen(false);
    }
  };

  const handleSubmit = () => {
    // Keep current params in case you want to preserve others
    const params = new URLSearchParams(searchParams.toString());

    if (metal) params.set("filterMaterial", metal);
    else params.delete("filterMaterial");

    if (length) params.set("filterSize", length);
    else params.delete("filterSize");

    params.set("minPrice", priceRange[0]);
    params.set("maxPrice", priceRange[1]);

    // Push new URL without full reload
    router.push(`?${params.toString()}`);

    // Still call parent onChange for local updates
    onChange({
      filterMaterial: metal,
      filterSize: length,
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
    setMetal("");
    setLength("");
    setPriceRange([minPrice || 0, maxPrice || 5000]);

    const params = new URLSearchParams();
    router.push("?"); // clear query string

    onChange({});

    // Scroll to products section (same as pagination behavior)
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: SCROLL_OFFSET, behavior: "smooth" });
      }
    }, SCROLL_DELAY);
  };

  return (
    <div className="bg-[#F2F1EC] font-marcellus mb-[50px] py-[50px]">
      <div className="container space-y-4">
        {/* Metal Dropdown */}
        <div className="w-full max-w-[800px] flex items-start md:items-center gap-3">
          <div
            className="relative inline-block w-full sm:w-auto"
            ref={metalRef}
          >
            <button
              type="button"
              className="inline-flex w-full sm:w-[180px] h-[40px] items-center justify-center gap-2 bg-white hover:!bg-gray-50 transition-colors"
              onClick={() => setIsMetalOpen((prev) => !prev)}
              onKeyDown={handleMetalKeyDown}
              aria-expanded={isMetalOpen}
              aria-label="Select metal"
            >
              <span>
                {metalOptions.find((opt) => opt.value === metal)?.label ||
                  "Select Metal"}
              </span>
              <Icon
                name="ChevronDown"
                className={`transform ${
                  isMetalOpen ? "rotate-180" : ""
                } transition-transform duration-200`}
              />
            </button>
            <AnimatePresence>
              {isMetalOpen && (
                <motion.div
                  id="metal-menu"
                  role="menu"
                  aria-labelledby="metal-button"
                  initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-10 w-40 z-10 mt-2 origin-top-left bg-white shadow-lg focus:outline-none will-change-transform"
                >
                  <div className="flex flex-col items-start p-2">
                    {metalOptions.map((option) => (
                      <button
                        key={option.value}
                        role="menuitem"
                        onClick={() => {
                          setMetal(option.value);
                          setIsMetalOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setMetal(option.value);
                            setIsMetalOpen(false);
                          }
                        }}
                        className="font-marcellus w-full text-left hover:bg-gray-100 focus:bg-gray-100 py-2 px-2"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Length selector and filter buttons */}
        <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:!gap-[50px] px-3 lg:!px-[40px] py-4">
          {/* Length selector */}
          <div className="space-y-2">
            <label className="block">Length</label>
            <div className="flex items-center justify-start flex-wrap gap-3">
              {lengthOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setLength(length === option.value ? "" : option.value)
                  }
                  className={`border-1 border-gray-10 px-3 py-1 hover:text-white transition-colors ${
                    length === option.value
                      ? "bg-black text-white border-black"
                      : "bg-white text-black hover:!bg-gray-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vertical line */}
          <div className="hidden lg:block w-[1px] h-[120px] bg-[#BEBDB6]/50" />

          {/* Price Range Slider */}
          <div className="w-full lg:flex-1 flex flex-col items-start">
            <label className="block !mb-4">Price</label>
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
            <div>
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
          </div>

          {/* Vertical line */}
          <div className="hidden lg:block w-[1px] h-[120px] bg-[#BEBDB6]/50" />

          {/* Filter buttons */}
          <div className="w-full sm:w-auto flex lg:flex-col items-center gap-3">
            <button
              onClick={handleSubmit}
              className="bg-black hover:!bg-gray-800 transition text-white w-full sm:w-[180px] h-[40px]"
            >
              Apply Filters
            </button>
            <button
              onClick={handleAllProduct}
              className="bg-black hover:!bg-gray-800 transition text-white w-full sm:w-[180px] h-[40px]"
            >
              All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionJewelry;
