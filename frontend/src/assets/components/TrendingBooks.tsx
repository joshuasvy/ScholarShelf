import HorizontalCard from "./HorizontalCard";
import { books } from "../../../data/books";

export default function TrendingBooks({ topic }: { topic: string }) {
  const filteredBooks = books.filter((book) => book.topic === topic);

  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        {filteredBooks.map((book) => (
          <HorizontalCard
            key={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            topic={book.topic}
            year={book.year}
          />
        ))}
      </div>
    </div>
  );
}
