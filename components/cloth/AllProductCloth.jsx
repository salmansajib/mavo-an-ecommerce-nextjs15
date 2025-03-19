"use client";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import FilterSectionCloth from "@/components/cloth/FilterSectionCloth";
import LoaderSpinner from "../LoaderSpinner";
import PaginationCloth from "./PaginationCloth";
import ProductListCloth from "./ProductListCloth";

const AllProductCloth = () => {
  const { data: products, isLoading, error } = useProducts();

  const [page, setPage] = useState(1);
  const limit = 6; // Products per page
  const totalPages = Math.ceil((products?.length || 0) / limit);
  const startIndex = (page - 1) * limit;
  const paginatedProducts =
    products?.slice(startIndex, startIndex + limit) || [];
  const scrollToTop = () => {
    window.scrollTo({ top: 350, behavior: "smooth" });
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderSpinner />
      </div>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <div
      id="sc-popular-courses"
      className="mavo-product-1 mavo-cloth-product mavo-pt-115 mavo-md-pt-75 mavo-pb-115 mavo-md-pb-75"
    >
      <div className="container">
        <FilterSectionCloth />
        <ProductListCloth products={paginatedProducts} />
        <PaginationCloth
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllProductCloth;
