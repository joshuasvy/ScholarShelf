import CardActionBtn from "./CardActionBtn";
import BookPlaceholder from "/images/books/book-placeholder.png";

interface CardProps {
  cover: string;
  title: string;
  author: string;
  topic: string;
  year: number;
}

export default function HorizontalCard({
  cover,
  title,
  author,
  topic,
  year,
}: CardProps) {
  return (
    <div>
      <div className="w-78 h-auto bg-white flex flex-row gap-2 rounded-sm shadow-md pr-2">
        <img
          src={cover || BookPlaceholder}
          alt={title}
          className="w-30 rounded-l-sm shadow-sm"
        />
        <div className="w-full flex flex-col gap-2 mt-2 font-inter text-sm relative">
          <h2 className="font-semibold text-md line-clamp-2">
            {title || "Title of the Book"}
          </h2>
          <p className="w-full line-clamp-1">
            Author: <span>{author || "Author of the Book"}</span>
          </p>
          <p className="w-full line-clamp-1">
            Topic:{" "}
            <span className="font-semibold">
              {topic || "Topic of the Book"}
            </span>
          </p>
          <p>
            Year:{" "}
            <span className="font-semibold">{year || "Published Year"}</span>
          </p>
          <div className="absolute bottom-2 right-1">
            <CardActionBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
