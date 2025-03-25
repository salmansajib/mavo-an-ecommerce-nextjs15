import React from "react";

const ProductColorSelector = ({ variants, selectedColor, onColorSelect }) => {
  return (
    <div className="mavo-product-color mavo-mb-20">
      <span className="mavo-color">Colour : </span>
      <span className="mavo-lapisblue">
        {selectedColor || "Select a color"}
      </span>
      <div className="product-color mavo-mt-10 d-flex gap-3">
        {variants.map((variant, index) => (
          <button
            key={index}
            className={`size-[25px] !rounded-full cursor-pointer ${
              selectedColor === variant.color ? "border-4 !border-white/50" : ""
            }`}
            style={{
              backgroundColor: variant.color_code,
            }}
            onClick={() => onColorSelect(variant, index)}
            title={variant.color}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductColorSelector;
