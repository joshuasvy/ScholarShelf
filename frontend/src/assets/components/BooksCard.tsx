import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

interface BooksProps {
  id: number;
  cover: string;
  title: string;
  author: string;
  year: number;
  status?: string;
}

export default function BooksCard({
  cover,
  title,
  author,
  year,
  status,
}: BooksProps) {
  const navigate = useNavigate();

  return (
    <div className="w-30 md:w-42 h-fit flex flex-col gap-2 cursor-pointer">
      <button
        onClick={() => navigate("/book/details")}
        className="flex flex-col gap-2 cursor-pointer transition-transform duration-300 hover:scale-103"
      >
        <img
          src={cover}
          alt={cover}
          className="w-full rounded-md shadow-lg object-cover"
        />
        <div className="flex flex-col gap-2 font-inter text-left">
          <p className="font-medium text-md line-clamp-2">{title}</p>
          <p className="text-sm line-clamp-1">{author}</p>
          <p className="text-sm">{year}</p>
          <StatusBadge
            status={status as "Pending" | "Approved" | "Rejected" | "Completed"}
          />
        </div>
      </button>
    </div>
  );
}
