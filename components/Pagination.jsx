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
    <div className="mavo-watch-navigation mavo-mt-20 text-center">
      <ul>
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="hover:text-[#cb222c]"
              aria-label="Previous page"
            >
              Prev
            </button>
          </li>
        )}

        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-2">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                disabled={currentPage === page}
                className={`${
                  currentPage === page ? "active" : ""
                } hover:text-[#cb222c] focus:text-[#cb222c]`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {currentPage < totalPages && (
          <li className="mavo-arrow-navigation">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="hover:text-[#cb222c]"
              aria-label="Next page"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
