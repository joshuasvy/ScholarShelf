import { useBooks } from "../../hooks/useBooks";
import type { BookInterface } from "../../types/type";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BooksCard from "../components/BooksCard";

import Footer from "../components/Footer";

function Reservation() {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading Books...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:mt-0 md:mb-16 max-w-7xl mx-auto">
        <div className="px-4 md:px-14 lg:px-0">
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">Requested Books</h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center">
              {books.map((book: BookInterface) => (
                <BooksCard key={book.id} book={book} />
              ))}
            </div>
          </section>
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">
                Previous Reservations
              </h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center">
              {books.map((book: BookInterface) => (
                <BooksCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Reservation;
