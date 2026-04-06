import { useFeaturedBooks } from "../../hooks/useFeaturedBooks";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import type { BookInterface } from "../../types/type";
import HorizontalCard from "../components/HorizontalCard";

function Catalog() {
  const { featuredBooks, loading: featuredLoading } = useFeaturedBooks();

  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:pt-0 md:pb-12 md:mt-14 max-w-7xl mx-auto">
        <div className="px-4 md:px-14 lg:px-0">
          <Categories />
        </div>
        <div className="px-4 md:px-14 lg:px-0">
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">Featured Books</h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
              {featuredLoading ? (
                <p className="col-span-full font-inter text-md text-center text-gray-500">
                  Loading featured books...
                </p>
              ) : featuredBooks.length === 0 ? (
                <p className="col-span-full font-inter text-md text-center text-gray-500">
                  No featured books at the moment.
                </p>
              ) : (
                featuredBooks.map((book: BookInterface) => (
                  <HorizontalCard key={book.id} book={book} />
                ))
              )}
            </div>
          </section>
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">
                Most Popular Books
              </h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
              {/* {sampleData.map((book) => (
                <HorizontalCard key={book.id} {...book} />
              ))} */}
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

export default Catalog;
