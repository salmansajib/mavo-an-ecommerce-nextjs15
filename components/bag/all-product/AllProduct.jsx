"use client";
import React, { useState, useEffect } from "react";
import FilterSectionBag from "./FilterSectionBag";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const DEFAULT_LIMIT = 8;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const itemsPerPage = DEFAULT_LIMIT;

  // Fetch products for the current page (explicitly set direction="first" for clarity)
  const { data, isLoading, error } = useProducts(
    "bag",
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
    <div className="mavo-product-6 mavo-pt-120 mavo-md-pt-80 mavo-pb-75 mavo-md-pb-25 bg-white">
      <div className="container">
        <div className="row">
          <FilterSectionBag onChange={setFilters} />
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
