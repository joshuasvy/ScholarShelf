import type { BookInterface } from "../../types/type";
import CardActionBtn from "./CardActionBtn";
import BookPlaceholder from "/images/books/book-placeholder.png";

export default function HorizontalCard({ book }: { book: BookInterface }) {
  return (
    <div>
      <div className="w-44 min-h-36 md:w-78 md:bg-white flex flex-col sm:flex-row md:rounded-sm md:shadow-md gap-2">
        <img
          src={book.book_cover || BookPlaceholder}
          alt={book.title}
          className="w-full sm:w-28 md:w-32 rounded-sm md:rounded-r-none md:rounded-l-sm md:shadow-sm object-cover"
        />
        <div className="flex flex-col gap-2 font-inter text-sm flex-1 p-2 pr-2">
          <h2 className="font-semibold text-md line-clamp-2">
            {book.title || "Title of the Book"}
          </h2>
          <p className="line-clamp-1">
            Author: <span>{book.author || "Author of the Book"}</span>
          </p>
          <p className="line-clamp-1">
            Topic:{" "}
            <span className="font-semibold">
              {book.topic || "Topic of the Book"}
            </span>
          </p>
          <p>
            Year:{" "}
            <span className="font-semibold">
              {book.year || "Published Year"}
            </span>
          </p>
          <div className="mt-auto self-end hidden md:block">
            <CardActionBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
