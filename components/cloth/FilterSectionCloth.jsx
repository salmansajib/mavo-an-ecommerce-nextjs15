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
  ];

  const handleSubmit = () => {
    onChange({
      filterCategory: category,
      filterMaterial: material,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
    });
  };

  const handleAllProduct = () => {
    setCategory("");
    setMaterial("");
    setPriceRange([0, 5000]);
    onChange({
      filterCategory: "",
      filterMaterial: "",
      priceMin: 0,
      priceMax: 5000,
    });
  };

  return (
    <div className="bg-white !space-y-6 mb-[80px] font-marcellus">
      {/* Category */}
      <div className="w-full max-w-[800px] flex items-start md:items-center gap-4">
        <DropdownMenu onOpenChange={setIsCategoryDropdownOpen} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-1 flex justify-between items-center shadow-none"
            >
              <span>
                {categoryOptions.find((opt) => opt.value === category)?.label ||
                  "Select Category"}
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
        {/* Material */}
        <DropdownMenu onOpenChange={setIsMaterialDropdownOpen} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-1 flex justify-between items-center shadow-none"
            >
              <span>
                {materialOptions.find((opt) => opt.value === category)?.label ||
                  "Select Category"}
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

      {/* Price Range Slider */}
      <div className="flex flex-col items-start gap-2">
        <label className="block mb-2">Price Range</label>
        <ReactSlider
          className="w-full md:max-w-3xl h-6"
          thumbClassName="size-6 bg-black rounded-full cursor-pointer -top-2"
          trackClassName="h-2 bg-gray-300"
          min={0}
          max={5000}
          value={priceRange}
          onChange={(value) => setPriceRange(value)}
          pearling
          minDistance={10}
        />
        <div className="">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSubmit}
          className="bg-black hover:!bg-gray-800 transition text-white px-4 py-2 "
        >
          Apply Filters
        </button>
        <button
          onClick={handleAllProduct}
          className="bg-black hover:!bg-gray-800 transition text-white px-4 py-2 "
        >
          All Product
        </button>
      </div>
    </div>
  );
};

export default FilterSectionCloth;
