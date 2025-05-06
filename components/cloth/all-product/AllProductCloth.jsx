"use client";
import { useState } from "react";
import FilterSectionCloth from "@/components/cloth/FilterSectionCloth";
import LoaderSpinner from "../../LoaderSpinner";
import ProductListCloth from "./ProductListCloth";
import Pagination from "@/components/Pagination";
import { useProducts } from "@/hooks/useProducts";

const DEFAULT_LIMIT = 6;

const AllProductCloth = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = DEFAULT_LIMIT;

  // Fetch products for the current page (explicitly set direction="first" for clarity)
  const { data, isLoading, error } = useProducts(
    "cloth",
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
    <div
      id="sc-popular-courses"
      className="mavo-product-1 mavo-cloth-product mavo-pt-115 mavo-md-pt-75 mavo-pb-115 mavo-md-pb-75"
    >
      <div className="container">
        <FilterSectionCloth />
        <ProductListCloth products={data.products} />
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

export default AllProductCloth;
