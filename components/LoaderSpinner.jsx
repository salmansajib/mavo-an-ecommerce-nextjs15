import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="size-[50px] md:size-[80px] border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoaderSpinner;
