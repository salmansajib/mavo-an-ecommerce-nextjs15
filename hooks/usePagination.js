import { useState, useMemo } from "react";

const usePagination = (items = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((items?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedItems = useMemo(() => {
    return items?.slice(startIndex, startIndex + itemsPerPage) || [];
  }, [items, startIndex, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
    itemsPerPage,
  };
};

export default usePagination;
