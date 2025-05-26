import React from "react";
import Icon from "@/components/Icon";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const maxPagesToShow = 5;

  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    if (endPage - startPage < maxPagesToShow - 2) {
      if (startPage === 2) {
        endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 2);
      } else if (endPage === totalPages - 1) {
        startPage = Math.max(2, endPage - maxPagesToShow + 2);
      }
    }

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mavo-watch-navigation mavo-mt-35 mavo-md-mt-10 text-center font-josefin-sans pb-[40px]">
      <ul className="flex items-center gap-2 justify-center">
        <li className="mavo-arrow-navigation">
          <button
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
            className="size-[50px] flex items-center justify-center border-1 border-[#c9a96b] !rounded-full"
          >
            <Icon name="ChevronLeft" color="#c9a96b" />
          </button>
        </li>

        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-2">...</span>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
                disabled={currentPage === page}
                className="hover:text-[#c9a96b] focus:text-[#c9a96b] size-[50px] flex items-center justify-center border-1 border-[#c9a96b] !rounded-full"
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li className="mavo-arrow-navigation">
          <button
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
            className="size-[50px] flex items-center justify-center border-1 border-[#c9a96b] !rounded-full"
          >
            <Icon name="ChevronRight" color="#c9a96b" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
