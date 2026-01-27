import HorizontalCard from "./HorizontalCard";
import { trendingBooks } from "../../../data/trendingBooks";

export default function TrendingBooks({ topic }: { topic: string }) {
  const filteredBooks = trendingBooks.filter((book) => book.topic === topic);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 overflow:hidden gap-6 justify-items-center">
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
  );
}
