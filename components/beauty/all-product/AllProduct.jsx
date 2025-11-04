"use client";
import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import FilterSectionBeauty from "./FilterSectionBeauty";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "@/components/LoaderSpinner";
import Pagination from "./Pagination";

const DEFAULT_LIMIT = 12;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const itemsPerPage = DEFAULT_LIMIT;

  // Fetch products for the current page (explicitly set direction="first" for clarity)
  const { data, isLoading, error } = useProducts(
    "beauty",
    currentPage,
    itemsPerPage,
    "first",
    false,
    0,
    filters,
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  // Scroll to top after page change
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    // console.log("Scrolled to top: 500, Current page:", currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1); // reset when filters change
  }, [filters]);

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
    <div className="mavo-product-5 mavo-page-product-5 mavo-pt-115 mavo-md-pt-75 mavo-pb-105 mavo-md-pb-70">
      <div className="container">
        <div className="row">
          <FilterSectionBeauty onChange={setFilters} />
          {data.products.length === 0 ? (
            <div className="text-center space-y-4 py-5">
              <p className="!text-lg md!text-xl font-medium">
                No products match the selected filters.
              </p>
              <button
                onClick={() => setFilters({})}
                className="bg-black text-white px-4 py-2 hover:!bg-gray-800 transition !font-marcellus"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <ProductList products={data.products} />
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllProduct;
