"use client";
import FilterSectionCloth from "@/components/cloth/FilterSectionCloth";
import LoaderSpinner from "../LoaderSpinner";
import PaginationCloth from "./PaginationCloth";
import ProductListCloth from "./ProductListCloth";
import { useProducts } from "@/hooks/useProducts";
import usePagination from "@/hooks/usePagination";

const AllProductCloth = () => {
  const { data: products, isLoading, error } = useProducts();
  const { currentPage, totalPages, paginatedItems, handlePageChange } =
    usePagination(products);

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
        <ProductListCloth products={paginatedItems} />
        <PaginationCloth
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllProductCloth;
