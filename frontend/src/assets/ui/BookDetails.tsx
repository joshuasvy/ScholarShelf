import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import { sampleData } from "../../../data/sampleData";
import HorizontalCard from "../components/HorizontalCard";
import Footer from "../components/Footer";

function BookDetails() {
  const book = {
    cover: "/images/books/architecture-book-4.png",
    title: "Robert Maillart's Bridges",
    subtitle: "The Art of Engineer",
    author: "David P. Billington",
    language: "English",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    info: {
      publisher: "Princeton University Press",
      year: "2020",
      citation: "APA",
      shelfCode: "0133010",
      status: "Available",
      topic: "Architecture",
    },
  };

  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />

      {/* Breadcrumb */}
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>

      <main className="mx-4 pt-10 md:pt-0 md:pb-12 md:mt-18 md:px-18 lg:px-0 max-w-7xl md:mx-auto"> 
        {/* Book Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <img
              src={book.cover}
              alt="Book Cover"
              className="w-40 md:w-72 h-auto object-cover rounded-md shadow-lg"
            />
            <button className="md:w-full text-white font-inter font-bold text-sm md:text-lg bg-secondary flex items-center justify-center gap-3 rounded-sm shadow-md px-4 py-2 cursor-pointer">
              Reserve this Book
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-approved"></span>
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <div className="hidden md:flex flex-col items-start gap-1 mb-10">
              <h2 className="font-inter font-medium text-md text-placeholder tracking-wide">
                Book Overview
              </h2>
              <span className="w-30 h-1 rounded-sm bg-secondary"></span>
            </div>
            <div className="flex md:items-start lg:items-center flex-row gap-4 md:gap-0 lg:gap-6 mb-2 ">
              <h1 className="font-title text-2xl lg:text-3xl ">
                {book.title}
              </h1>
              <button className="cursor-pointer ">
                <img
                  src="/images/icons/wishlist.png"
                  alt="Add to Wishlist"
                  className="w-5 h-5 md:w-6 md:h-6 md:mt-1 lg:mt-0"
                />
              </button>
            </div>
            <h2 className="font-inter text-md text-placeholder">
              {book.subtitle}
            </h2>

            <div className="space-y-3 mt-8">
              <p className="font-inter text-xl">{book.author}</p>
              <div className="flex items-center gap-2">
                <img
                  src="/images/icons/language.png"
                  alt="Language"
                  className="w-6 h-6"
                />
                <p className="font-inter text-lg">{book.language}</p>
              </div>

              {/* Abstract */}
              <div className="space-y-2 my-10">
                <p className="font-inter text-lg font-medium">Abstract</p>
                <p className="font-inter text-base">{book.abstract}</p>
              </div>

              {/* Info Grid */}
              <div>
                <h3 className="font-inter text-lg font-medium">
                  Information about this Book
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 font-inter">
                  <div>
                    <p className="font-medium">Publisher</p>
                    <p>{book.info.publisher}</p>
                  </div>
                  <div>
                    <p className="font-medium">Year</p>
                    <p>{book.info.year}</p>
                  </div>
                  <div>
                    <p className="font-medium">Citation</p>
                    <p>{book.info.citation}</p>
                  </div>
                  <div>
                    <p className="font-medium">Shelf Code</p>
                    <p>{book.info.shelfCode}</p>
                  </div>
                  <div>
                    <p className="font-medium">Status</p>
                    <p className="text-secondary">{book.info.status}</p>
                  </div>
                  <div>
                    <p className="font-medium">Topic</p>
                    <p className="underline">
                      <a href="">{book.info.topic}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <h2 className="font-inter font-bold text-2xl">Similar Books</h2>
            <a
              href=""
              className="font-inter text-md text-secondary font-semibold underline"
            >
              View more
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
            {sampleData.map((book) => (
              <HorizontalCard key={book.id} {...book} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BookDetails;
