import React from "react";
import { Plus, Minus } from "lucide-react";

const ProductQuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center justify-between w-[180px] h-[60px] border !border-black/40">
      <button
        className="h-full w-[35px] flex items-center justify-center border-r !border-black/40"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        <Minus size={16} />
      </button>
      <span className="size-[25px] text-lg flex items-center justify-center font-josefin-sans">
        {quantity}
      </span>
      <button
        className="h-full w-[35px] flex items-center justify-center border-l !border-black/40"
        onClick={onIncrease}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
