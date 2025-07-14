import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="relative size-[50px]">
      {/* Transparent background ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "4px solid rgba(163, 230, 53, 0.2)", // faint light green border
        }}
      />

      {/* Your original spinner (unchanged) */}
      <div
        className="size-[50px] rounded-full animate-loader"
        style={{
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent 85%, black 15%)",
          maskImage:
            "radial-gradient(farthest-side, transparent 85%, black 15%)",
          background:
            "conic-gradient(from 0deg, #a3e635 0deg, rgba(163,230,53,0) 90deg)",
        }}
      />
    </div>
  );
};

export default LoaderSpinner;
