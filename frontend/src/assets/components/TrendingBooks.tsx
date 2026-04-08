import type { BookInterface } from "../../types/type";
import HorizontalCard from "./HorizontalCard";

interface TrendingBooksProps {
  topic: string;
  books: BookInterface[];
}

export default function TrendingBooks({ topic, books }: TrendingBooksProps) {
  const filteredBooks = books.filter((book) => book.topic === topic);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 overflow:hidden gap-6 justify-items-center">
      {filteredBooks.map((book) => (
        <HorizontalCard key={book.id} book={book} />
      ))}
    </div>
  );
}
