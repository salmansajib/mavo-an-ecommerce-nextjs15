import React from "react";

const ProductSizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
  return (
    <div className="mavo-product-size my-[30px] space-y-[20px]">
      <div className="space-x-2">
        <span>Size:</span>
        <span className="size">{selectedSize || "Select a size"}</span>
      </div>
      <div className="flex gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSizeSelect(size.size)}
            className={`${
              selectedSize === size.size
                ? "!bg-black border-0 text-white"
                : "bg-transparent text-black"
            } px-[20px] py-[7px] border !border-black/20 flex items-center justify-center`}
          >
            {size.size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizeSelector;
