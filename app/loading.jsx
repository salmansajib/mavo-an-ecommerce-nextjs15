import React from "react";
import LoaderSpinner from "@/components/LoaderSpinner";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderSpinner />
    </div>
  );
}

export default Loading;
