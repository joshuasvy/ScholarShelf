import React from "react";

interface BooksProps {
  id: number;
  cover: string;
  title: string;
  author: string;
  year: number;
}

export default function BooksCard({ cover, title, author, year }: BooksProps) {
  return (
    <div className="w-24 md:w-42 h-fit flex flex-col gap-2 cursor-pointer">
      <img
        src={cover}
        alt={cover}
        className="w-full rounded-md shadow-lg object-cover"
      />
      <div className="flex flex-col gap-2 font-inter">
        <p className="font-medium text-md line-clamp-2">{title}</p>
        <p className="text-sm line-clamp-1">{author}</p>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
}
