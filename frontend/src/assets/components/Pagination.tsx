interface PaginationProps {
  totalBooks: number;
  items: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalBooks,
  items,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalBooks / items);

  // Helper: generate compact page numbers
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 3; // how many numbers around current page

    if (totalPages <= 7) {
      // If few pages, show all
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Show ellipsis if currentPage > 3
    if (currentPage > maxVisible) {
      pages.push("...");
    }

    // Show currentPage -1, currentPage, currentPage +1
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Show ellipsis if currentPage < totalPages - 2
    if (currentPage < totalPages - (maxVisible - 1)) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-row justify-center items-center mt-12 mb-12 md:mb-0">
      <div className="flex justify-between items-center gap-2 font-inter font-semibold">
        {/* Prev Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination bg-secondary text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img
            src="/images/icons/previous-arrow.png"
            alt="Previous Page"
            className="w-6"
          />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3 py-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`pagination ${
                page === currentPage
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination bg-secondary text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img
            src="/images/icons/next-arrow.png"
            alt="Next Page"
            className="w-6"
          />
        </button>
      </div>
    </div>
  );
}
