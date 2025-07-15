import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="relative size-[50px]">
      {/* Transparent background ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "4px solid rgba(201, 169, 107, 0.2)", // faint border with specified color
        }}
      />

      {/* Spinner with specified color */}
      <div
        className="size-[50px] rounded-full animate-loader"
        style={{
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent 85%, black 15%)",
          maskImage:
            "radial-gradient(farthest-side, transparent 85%, black 15%)",
          background:
            "conic-gradient(from 0deg, rgb(201, 169, 107) 0deg, rgba(201, 169, 107, 0) 90deg)",
        }}
      />
    </div>
  );
};

export default LoaderSpinner;
