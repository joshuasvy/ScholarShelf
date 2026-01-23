import { useState } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BooksCard from "../components/BooksCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { books } from "../../../data/books";

function Books() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-primary h-full w-full">
      <Header />
      <div className="pt-36 hidden px-32 md:block">
        <Breadcrumb />
      </div>
      <main className="pt-32 md:pt-0 md:pb-12 md:mt-18 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-0 md:gap-2 md:pl-14 lg:pl-0">
          <h1 className="font-inter font-bold text-2xl">
            Welcome to ScholarShelf
          </h1>
          <p className="font-inter text-md">
            We glad to help you find a new knowledge
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 mt-12 md:mt-12 space-y-3 justify-items-center">
          {currentBooks.map((book) => (
            <BooksCard
              id={book.id}
              cover={book.cover}
              title={book.title}
              author={book.author}
              year={book.year}
            />
          ))}
        </div>
        <div>
          <Pagination
            totalBooks={books.length}
            items={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Books;
