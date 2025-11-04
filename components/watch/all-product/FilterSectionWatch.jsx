"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useProducts } from "@/hooks/useProducts";
import ReactSlider from "react-slider";
import Icon from "@/components/Icon";

const FilterSectionWatch = ({ onChange }) => {
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);

  const materialRef = useRef(null);

  const SCROLL_OFFSET = 500;
  const SCROLL_DELAY = 150;

  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch all products to calculate dynamic price range and unique materials
  const { data: allProductsData } = useProducts(
    "watch",
    1,
    1000,
    "first",
    false,
    0,
    {},
  );

  // Calculate unique materials from actual product data
  const uniqueMaterials = useMemo(() => {
    if (!allProductsData?.products) {
      return [];
    }

    const materialsSet = new Set();
    allProductsData.products.forEach((product) => {
      product.variants?.forEach((variant) => {
        variant.materials?.forEach((material) => {
          materialsSet.add(material.material);
        });
      });
    });

    return Array.from(materialsSet).sort();
  }, [allProductsData]);

  const materialOptions = [
    { value: "", label: "All Materials" },
    ...uniqueMaterials.map((m) => ({ value: m, label: m })),
  ];

  // Calculate dynamic min and max prices from actual product data
  const { minPrice, maxPrice } = useMemo(() => {
    if (!allProductsData?.products) {
      return { minPrice: 0, maxPrice: 5000 }; // fallback
    }

    const allPrices = [];
    allProductsData.products.forEach((product) => {
      // Extract prices from variants.materials for watches
      product.variants?.forEach((variant) => {
        variant.materials?.forEach((material) => {
          if (material.price) {
            allPrices.push(material.price);
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
      if (materialRef.current && !materialRef.current.contains(event.target)) {
        setIsMaterialOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation for Material dropdown
  const handleMaterialKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsMaterialOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsMaterialOpen(false);
    }
  };

  const handleSubmit = () => {
    // Keep current params in case you want to preserve others
    const params = new URLSearchParams(searchParams.toString());

    if (material) params.set("material", material);
    else params.delete("material");

    params.set("minPrice", priceRange[0]);
    params.set("maxPrice", priceRange[1]);

    // Push new URL without full reload
    router.push(`?${params.toString()}`);

    // Still call parent onChange for local updates
    onChange({
      filterMaterial: material,
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
    setMaterial("");
    setPriceRange([minPrice || 0, maxPrice || 5000]);

    const params = new URLSearchParams();
    router.push("?"); // clear query string

    onChange({
      filterMaterial: "",
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
    <div className="bg-[#F2F1EC] font-marcellus mb-[50px] py-[50px]">
      <div className="container space-y-4">
        {/* Material */}
        <div className="w-full max-w-[800px] flex items-start md:items-center gap-3">
          {/* Material Dropdown */}
          <div
            className="relative inline-block w-full sm:w-auto"
            ref={materialRef}
          >
            <button
              type="button"
              className="inline-flex w-full sm:w-[180px] h-[40px] items-center justify-center gap-2 bg-white hover:!bg-gray-50 transition-colors"
              onClick={() => setIsMaterialOpen((prev) => !prev)}
              onKeyDown={handleMaterialKeyDown}
              aria-expanded={isMaterialOpen}
              aria-controls="material-menu"
              aria-label="Select material"
            >
              <span>
                {materialOptions.find((opt) => opt.value === material)?.label ||
                  "Select Material"}
              </span>
              <Icon
                name="ChevronDown"
                className={`transform ${
                  isMaterialOpen ? "rotate-180" : ""
                } transition-transform duration-200`}
              />
            </button>
            <AnimatePresence>
              {isMaterialOpen && (
                <motion.div
                  id="material-menu"
                  role="menu"
                  aria-labelledby="material-button"
                  initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-10 w-40 z-10 mt-2 origin-top-left bg-white shadow-lg focus:outline-none will-change-transform"
                >
                  <div className="flex flex-col items-start p-2">
                    {materialOptions.map((option) => (
                      <button
                        key={option.value}
                        role="menuitem"
                        onClick={() => {
                          setMaterial(option.value);
                          setIsMaterialOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setMaterial(option.value);
                            setIsMaterialOpen(false);
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

        {/* Price selector and filter buttons */}
        <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:!gap-[50px] px-3 lg:!px-[40px] py-4">
          {/* Price Range Slider */}
          <div className="w-full lg:flex-1 flex flex-col items-start">
            <label className="block !mb-4">Price</label>
            <ReactSlider
              className="w-full lg:max-w-3xl h-6"
              ariaLabel={["Minimum price", "Maximum price"]}
              step={10}
              thumbClassName="size-6 bg-[#c9a96b] rounded-full cursor-pointer -top-2"
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

          {/* Filter buttons */}
          <div className="w-full sm:w-auto flex lg:flex-col items-center gap-3">
            <button
              onClick={handleSubmit}
              className="bg-[#c9a96b] hover:!bg-[#be9d5a] transition text-black w-full sm:w-[180px] h-[40px]"
            >
              Apply Filters
            </button>
            <button
              onClick={handleAllProduct}
              className="bg-[#c9a96b] hover:!bg-[#be9d5a] transition text-black w-full sm:w-[180px] h-[40px]"
            >
              All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionWatch;
