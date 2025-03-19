const PaginationCloth = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mavo-watch-navigation mavo-mt-20 text-center">
      <ul>
        {/* Previous Button */}
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="hover:text-[#cb222c]"
            >
              Prev
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`${
                  currentPage === pageNumber ? "active" : ""
                } hover:text-[#cb222c] focus:text-[#cb222c]`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Next Button */}
        {currentPage < totalPages && (
          <li className="mavo-arrow-navigation">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="hover:text-[#cb222c]"
            >
              Next <i className="flaticon-down"></i>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PaginationCloth;
