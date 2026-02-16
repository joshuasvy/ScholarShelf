import { useNavigate } from "react-router-dom";
import type { BookInterface } from "../../types/type";
import StatusBadge from "./StatusBadge";

interface BookCardProps {
  book: BookInterface;
}

export default function BooksCard({ book }: BookCardProps) {
  const navigate = useNavigate();

  return (
    <div className="w-30 md:w-42 h-fit flex flex-col gap-2 cursor-pointer">
      <button
        onClick={() => navigate(`book/${book.id}`)}
        className="flex flex-col gap-2 cursor-pointer transition-transform duration-300 hover:scale-103"
      >
        <img
          src={book.book_cover}
          alt={book.title}
          className="w-full rounded-md shadow-lg object-cover"
        />
        <div className="flex flex-col gap-2 font-inter text-left">
          <p className="font-medium text-md line-clamp-2">{book.title}</p>
          <p className="text-sm line-clamp-1">{book.author}</p>
          <p className="text-sm">{book.year}</p>
          <StatusBadge
            status={
              book.status as "Pending" | "Approved" | "Rejected" | "Completed"
            }
          />
        </div>
      </button>
    </div>
  );
}
