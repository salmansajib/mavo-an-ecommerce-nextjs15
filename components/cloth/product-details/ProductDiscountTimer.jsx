import React from "react";
import useCountdown from "@/hooks/useCountdown";

const ProductDiscountTimer = () => {
  const timeLeft = useCountdown(10);

  return (
    <div className="mavo-product-discount">
      <div className="discount">
        <span>25% oFF</span>
      </div>
      <div className="discount-sale flex items-center">
        <span>Discount Sale end in:</span>
        <div id="countdown">
          <ul className="flex items-center justify-center gap-4">
            {[
              { label: "D", value: timeLeft.days },
              { label: "H", value: timeLeft.hours },
              { label: "M", value: timeLeft.minutes },
              { label: "S", value: timeLeft.seconds },
            ].map((item, index) => (
              <li key={index} className="space-x-1">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDiscountTimer;
