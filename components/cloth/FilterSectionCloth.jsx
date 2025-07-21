"use client";

import { useState } from "react";
import ReactSlider from "react-slider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Icon from "../Icon";

const FilterSectionCloth = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMaterialDropdownOpen, setIsMaterialDropdownOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
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
    <div className="bg-[#F2F1EC] font-marcellus mb-[100px] py-[50px]">
      <div className="container space-y-4">
        {/* Category, Material, and Size Filters */}
        <div className="w-full max-w-[800px] flex items-start md:items-center gap-4">
          {/* Category Dropdown */}
          <DropdownMenu onOpenChange={setIsCategoryDropdownOpen} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-1 flex justify-between items-center shadow-none"
              >
                <span>
                  {categoryOptions.find((opt) => opt.value === category)
                    ?.label || "Select Category"}
                </span>
                <Icon
                  name="ChevronDown"
                  className={`transition-transform duration-200 ${
                    isCategoryDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categoryOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setCategory(option.value)}
                  className="font-marcellus"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Material Dropdown */}
          <DropdownMenu onOpenChange={setIsMaterialDropdownOpen} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-1 flex justify-between items-center shadow-none"
              >
                <span>
                  {materialOptions.find((opt) => opt.value === material)
                    ?.label || "Select Material"}
                </span>
                <Icon
                  name="ChevronDown"
                  className={`transition-transform duration-200 ${
                    isMaterialDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {materialOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setMaterial(option.value)}
                  className="font-marcellus"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:!gap-[50px] px-3 lg:!px-[40px] py-4">
          {/* size selector */}
          <div className="space-y-2">
            <label className="block">Size</label>
            <div className="flex items-center gap-3">
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

          {/* vertical line */}
          <div className="hidden lg:block w-[1px] h-[120px] bg-[#BEBDB6]" />

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

          {/* vertical line */}
          <div className="hidden lg:block w-[1px] h-[120px] bg-[#BEBDB6]" />

          {/* filter buttons */}
          <div className="flex lg:flex-col items-center gap-3">
            <button
              onClick={handleSubmit}
              className="bg-black hover:!bg-gray-800 transition text-white w-[150px] h-[40px]"
            >
              Apply Filters
            </button>
            <button
              onClick={handleAllProduct}
              className="bg-black hover:!bg-gray-800 transition text-white w-[150px] h-[40px]"
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
