"use client";
import React from "react";
import { useState, useEffect } from "react";
import ShopHeading from "./ShopHeading";
import FilterSection from "./FilterSection";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "@/components/LoaderSpinner";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const DEFAULT_LIMIT = 8;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = DEFAULT_LIMIT;

  // Fetch products for the current page (explicitly set direction="first" for clarity)
  const { data, isLoading, error } = useProducts(
    "watch",
    currentPage,
    itemsPerPage,
    "first",
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  // Scroll to top after page change
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    // console.log("Scrolled to top: 500, Current page:", currentPage);
  }, [currentPage]);

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
    <div
      id="sc-popular-courses"
      className="mavo-product-style-2 mavo-pt-110 mavo-md-pt-75 mavo-pb-120 mavo-md-pb-75 bg-gray-50"
    >
      <div className="container">
        <ShopHeading />
        <FilterSection />
        <ProductList products={data.products} />
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
