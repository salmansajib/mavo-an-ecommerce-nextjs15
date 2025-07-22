"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReactSlider from "react-slider";
import Icon from "../Icon";

const FilterSectionCloth = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const categoryRef = useRef(null);
  const materialRef = useRef(null);

  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "children", label: "Children" },
    { value: "unisex", label: "Unisex" },
  ];

  const materialOptions = [
    { value: "", label: "All Materials" },
    { value: "cotton", label: "Cotton" },
    { value: "wool", label: "Wool" },
    { value: "polyester", label: "Polyester" },
    { value: "silk", label: "Silk" },
  ];

  const sizeOptions = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (materialRef.current && !materialRef.current.contains(event.target)) {
        setIsMaterialOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation for Category dropdown
  const handleCategoryKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsCategoryOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsCategoryOpen(false);
    }
  };

  // Handle keyboard navigation for Material dropdown
  const handleMaterialKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsMaterialOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsMaterialOpen(false);
    }
  };

  const handleSubmit = () => {
    onChange({
      filterCategory: category,
      filterMaterial: material,
      filterSize: size,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
    });
  };

  const handleAllProduct = () => {
    setCategory("");
    setMaterial("");
    setSize("");
    setPriceRange([0, 5000]);
    onChange({
      filterCategory: "",
      filterMaterial: "",
      filterSize: "",
      priceMin: 0,
      priceMax: 5000,
    });
  };

  return (
    <div className="bg-[#F2F1EC] font-marcellus mb-[50px] py-[50px]">
      <div className="container space-y-4">
        {/* Category and Material */}
        <div className="w-full max-w-[800px] flex items-start md:items-center gap-3">
          {/* Category Dropdown */}
          <div
            className="relative inline-block w-full sm:w-auto"
            ref={categoryRef}
          >
            <button
              type="button"
              className="inline-flex w-full sm:w-[180px] h-[40px] items-center justify-center gap-2 bg-white hover:!bg-gray-50 transition-colors"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              onKeyDown={handleCategoryKeyDown}
              aria-expanded={isCategoryOpen}
              aria-controls="category-menu"
              aria-label="Select category"
            >
              <span>
                {categoryOptions.find((opt) => opt.value === category)?.label ||
                  "Select Category"}
              </span>
              <Icon
                name="ChevronDown"
                className={`transform ${
                  isCategoryOpen ? "rotate-180" : ""
                } transition-transform duration-200`}
              />
            </button>
            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  id="category-menu"
                  role="menu"
                  aria-labelledby="category-button"
                  initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-10 w-40 z-10 mt-2 origin-top-left bg-white shadow-lg focus:outline-none will-change-transform"
                >
                  <div className="flex flex-col items-start p-2">
                    {categoryOptions.map((option) => (
                      <button
                        key={option.value}
                        role="menuitem"
                        onClick={() => {
                          setCategory(option.value);
                          setIsCategoryOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setCategory(option.value);
                            setIsCategoryOpen(false);
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
                  id="category-menu"
                  role="menu"
                  aria-labelledby="category-button"
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

        {/* Size selector, price selector and filter buttons */}
        <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:!gap-[50px] px-3 lg:!px-[40px] py-4">
          {/* Size selector */}
          <div className="space-y-2">
            <label className="block">Size</label>
            <div className="flex items-center justify-start flex-wrap gap-3">
              {sizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSize(option.value)}
                  className={`border-1 border-gray-10 px-3 py-1 hover:text-white transition-colors ${
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

          {/* Vertical line */}
          <div className="hidden lg:block w-[1px] h-[120px] bg-[#BEBDB6]/50" />

          {/* Price Range Slider */}
          <div className="w-full lg:flex-1 flex flex-col items-start">
            <label className="block !mb-4">Price</label>
            <ReactSlider
              className="w-full lg:max-w-3xl h-6"
              thumbClassName="size-6 bg-black rounded-full cursor-pointer -top-2"
              trackClassName="h-2 bg-gray-300"
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              pearling
              minDistance={10}
            />
            <div>
              ${priceRange[0]} - ${priceRange[1]}
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

export default FilterSectionCloth;
