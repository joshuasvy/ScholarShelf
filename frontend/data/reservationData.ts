export interface Book {
  id: number;
  cover: string;
  title: string;
  author: string;
  year: number;
  status: string;
}

export const reservationData: Book[] = [
  {
    id: 1,
    cover: "/images/books/architecture-book-1.png",
    title: "The Architect's Handbook of Professional Practice",
    author: "Wiley",
    year: 2013,
    status: "Pending",
  },
  {
    id: 2,
    cover: "/images/books/architecture-book-2.png",
    title: "Modern Architecture and Climate",
    author: "Daniel A. Barber",
    year: 2020,
    status: "Rejected",
  },
  {
    id: 3,
    cover: "/images/books/architecture-book-3.png",
    title: "Risk and Insurance in Construction",
    author: "Nael G. Bunni and Lydia B. Bunni",
    year: 2022,
    status: "Approved",
  },
  {
    id: 4,
    cover: "/images/books/architecture-book-4.png",
    title: "Robert Maillart's Bridges",
    author: "David P. Bilington",
    year: 2020,
    status: "Rejected",
  },
  {
    id: 5,
    cover: "/images/books/book-placeholder.png",
    title: "Lorem ipsum dolor sit amet",
    author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    year: 2020,
    status: "Pending",
  },
  {
    id: 6,
    cover: "/images/books/book-placeholder.png",
    title: "Lorem ipsum dolor sit amet",
    author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    year: 2020,
    status: "Completed",
  },
];
