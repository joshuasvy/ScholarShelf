// import { useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import type { BookInterface } from "../../types/type";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BooksCard from "../components/BooksCard";
// import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

function Books() {
  const { books, loading, error } = useBooks();
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 21;

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <p>Loading Books...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:pt-0 md:pb-12 md:mt-14 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-0 md:gap-2 md:pl-14 lg:pl-0">
          <h1 className="font-inter font-bold text-2xl">
            Welcome to ScholarShelf
          </h1>
          <p className="font-inter text-md">
            We glad to help you find a new knowledge
          </p>
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search for a book"
              className="w-82 h-10 px-2 border-2 font-inter text-md border-gray-300 focus:outline-none rounded-lg relative pr-11"
            />
            <img
              src="images/icons/search.png"
              alt="Search"
              className="w-5 md:w-6 absolute top-2 right-3"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-2 mt-12 space-y-3 justify-items-center px-4 md:px-12 lg:px-0">
          {books.map((book: BookInterface) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
        {/* <div>
          <Pagination
            totalBooks={books.length}
            items={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div> */}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Books;
