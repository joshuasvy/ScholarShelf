import { useParams } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";
import { topics } from "../../utils/topic";
import type { BookInterface } from "../../types/type";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BooksCard from "../components/BooksCard";
import Footer from "../components/Footer";

function Category() {
  const { topic } = useParams<{ topic: string }>();
  const { books, loading, error } = useBooks();

  if (!topic) return <p>Topic not found</p>;

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const decodedTopic = decodeURIComponent(topic);
  const topicInfo = topics[decodedTopic] || {
    icon: "/images/icons/antropology.png",
    subtopic: "No description available",
  };

  const filterBooks = books.filter(
    (book) =>
      book.topic.toLowerCase() === decodeURIComponent(topic).toLowerCase(),
  );
  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:pt-0 md:pb-12 md:mt-14 max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between gap-0 md:gap-2 md:pl-14 lg:pl-0 mb-4">
          <div className="flex items-center gap-4">
            <img
              src={topicInfo.icon}
              alt={decodeURIComponent(topic)}
              className="w-8 h-8"
            />
            <h1 className="font-inter font-bold text-3xl">
              {decodeURIComponent(topic)}
            </h1>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search for a book"
              className="w-82 h-10 px-2 border-2 font-inter text-md border-gray-300 focus:outline-none rounded-lg relative pr-11"
            />
            <img
              src="/images/icons/search.png"
              alt="Search"
              className="w-5 md:w-6 absolute top-2 right-3"
            />
          </div>
        </div>
        <p className="font-inter text-md">{topicInfo.subtopic}</p>

        {filterBooks.length === 0 ? (
          <div className="min-h-112 flex justify-center items-center gap-8">
            <img
              src="/images/icons/failed.png"
              alt="Failed"
              className="w-12 h-12"
            />
            <p className="font-inter text-2xl font-semibold tracking-wide">
              No book found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-2 mt-12 space-y-3 justify-items-center px-4 md:px-12 lg:px-0">
            {filterBooks.map((book: BookInterface) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Category;
