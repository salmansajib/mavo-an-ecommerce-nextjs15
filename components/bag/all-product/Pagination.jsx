import React from "react";

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
      pages.push(today);
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
    <div className="mavo-product-navigation mavo-mt-30 d-flex align-items-center justify-content-between">
      <div className="mavo-navigation-icon">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
          aria-disabled={currentPage === 1}
        >
          <img src="/images/icons/dark-prev-arrow.png" alt="Previous Page" />
        </a>
      </div>
      <div className="mavo-navigation-list">
        <ul className="flex flex-wrap items-center gap-5">
          {getPageNumbers().map((page, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page !== "...") onPageChange(page);
                }}
                className={currentPage === page ? "active" : ""}
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mavo-navigation-icon">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
          aria-disabled={currentPage === totalPages}
        >
          <img src="/images/icons/dark-next-arrow.png" alt="Next Page" />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
