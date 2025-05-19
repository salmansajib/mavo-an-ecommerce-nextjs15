"use client";
import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "@/components/LoaderSpinner";
import Pagination from "@/components/shoe/Pagination";

const DEFAULT_LIMIT = 12;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = DEFAULT_LIMIT;

  // Fetch products for the current page (explicitly set direction="first" for clarity)
  const { data, isLoading, error } = useProducts(
    "shoes",
    currentPage,
    itemsPerPage,
    "first",
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[800px]">
        <LoaderSpinner />
      </div>
    );
  if (error)
    return (
      <p className="text-red-500 text-center text-2xl">
        Failed to load products. Please try again.
      </p>
    );

  return (
    <div className="!bg-gray-50 mavo-post-slider-2 mavo-post-page mavo-pt-120 mavo-md-pt-80 mavo-pb-75 mavo-md-pb-30">
      <div className="container">
        <div className="row">
          <Sidebar />
          <ProductList products={data.products} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 350, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default AllProduct;
