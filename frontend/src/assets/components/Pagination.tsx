interface PaginationProps {
  totalBooks: number; // total of books from books.ts
  items: number; // books to show per page
  currentPage: number; // active page
  onPageChange: (page: number) => void; // callback to update the page state
}

export default function Pagination({
  totalBooks,
  items,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalBooks / items); // calculates the total pages based on books.ts and itemsPerPage from Books.tsx 

  return (
    <div className="flex flex-row justify-center items-center mt-12 mb-12 md:mb-0">
      <div className="flex justify-between items-center gap-2 font-inter font-semibold">
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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination ${page === currentPage ? "bg-secondary text-white" : "bg-white text-secondary"}`}
          >
            {page}
          </button>
        ))}

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
